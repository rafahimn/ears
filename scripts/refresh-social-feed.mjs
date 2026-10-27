import {promises as fs} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataFile = path.join(root, 'public', 'data', 'social-feed.json');
const apiVersion = (process.env.META_GRAPH_API_VERSION || 'v26.0').replace(/^v?/, 'v');
const instagramToken = (process.env.INSTAGRAM_ACCESS_TOKEN || '').trim();
const facebookPageId = (process.env.FACEBOOK_PAGE_ID || '').trim();
const facebookToken = (process.env.FACEBOOK_PAGE_ACCESS_TOKEN || '').trim();

async function readFeed(){
  try { return JSON.parse(await fs.readFile(dataFile, 'utf8')); }
  catch { return {updatedAt:null, posts:[]}; }
}

async function graphJson(url){
  const response = await fetch(url, {headers:{'user-agent':'EmiratesAluminiumShutter-SocialFeed/1.0'}});
  let payload;
  try { payload = await response.json(); }
  catch { throw new Error(`Graph API returned an unreadable response (${response.status}).`); }
  if(!response.ok || payload.error){
    const reason = payload?.error?.message || `HTTP ${response.status}`;
    throw new Error(`Social feed API request failed: ${reason}`);
  }
  return payload;
}

function safeId(value){ return String(value || 'post').replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 80) || 'post'; }

async function downloadImage(source, directory, id){
  if(!source) return null;
  let url;
  try { url = new URL(source); } catch { return null; }
  if(url.protocol !== 'https:') return null;
  try{
    const response = await fetch(url, {headers:{'user-agent':'Mozilla/5.0 EmiratesAluminiumShutter/1.0'}});
    if(!response.ok) return null;
    const contentType = (response.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
    const extensions = {'image/jpeg':'jpg','image/jpg':'jpg','image/png':'png','image/webp':'webp','image/gif':'gif','image/avif':'avif'};
    const extension = extensions[contentType];
    if(!extension) return null;
    const bytes = Buffer.from(await response.arrayBuffer());
    if(!bytes.length || bytes.length > 20 * 1024 * 1024) return null;
    const filename = `${safeId(id)}.${extension}`;
    await fs.writeFile(path.join(directory, filename), bytes);
    return `/social-feed/${path.basename(directory)}/${filename}`;
  }catch(error){
    console.warn(`Could not cache a social post image (${safeId(id)}): ${error.message}`);
    return null;
  }
}

async function resetMediaDirectory(platform){
  const directory = path.join(root, 'public', 'social-feed', platform);
  const tempDirectory = `${directory}.tmp`;
  await fs.rm(tempDirectory, {recursive:true, force:true});
  await fs.mkdir(tempDirectory, {recursive:true});
  return {directory,tempDirectory};
}

async function publishMediaDirectory(directory, tempDirectory){
  await fs.rm(directory, {recursive:true, force:true});
  await fs.rename(tempDirectory, directory);
}

function latest(posts){
  return posts.sort((a,b)=>(Date.parse(b.timestamp)||0)-(Date.parse(a.timestamp)||0)).slice(0,12);
}

async function syncInstagram(){
  const fields = 'id,caption,media_type,media_url,permalink,timestamp,thumbnail_url,children{media_type,media_url,thumbnail_url}';
  const url = new URL(`https://graph.instagram.com/${apiVersion}/me/media`);
  url.searchParams.set('fields', fields);
  url.searchParams.set('limit', '12');
  url.searchParams.set('access_token', instagramToken);
  const result = await graphJson(url);
  const items = Array.isArray(result.data) ? result.data : [];
  const {directory,tempDirectory} = await resetMediaDirectory('instagram');
  try{
    const posts = [];
    for(const item of items){
      const children = Array.isArray(item.children?.data) ? item.children.data : [];
      const child = children[0];
      const isVideo = ['VIDEO','REELS'].includes(String(item.media_type || '').toUpperCase());
      const source = isVideo
        ? (item.thumbnail_url || child?.thumbnail_url || item.media_url || child?.media_url)
        : (child?.thumbnail_url || child?.media_url || item.media_url || item.thumbnail_url);
      const image = await downloadImage(source, tempDirectory, item.id);
      posts.push({
        id:String(item.id), platform:'instagram', permalink:item.permalink,
        image:image ? image.replace('/instagram.tmp/','/instagram/') : null,
        caption:String(item.caption || '').replace(/\s+/g,' ').trim().slice(0,500),
        timestamp:String(item.timestamp || ''), mediaType:String(item.media_type || 'IMAGE')
      });
    }
    await publishMediaDirectory(directory,tempDirectory);
    return posts;
  }catch(error){
    await fs.rm(tempDirectory,{recursive:true,force:true});
    throw error;
  }
}

function facebookImage(post){
  const attachments = post.attachments?.data || [];
  const attachment = attachments[0];
  const sub = attachment?.subattachments?.data?.[0];
  return post.full_picture || sub?.media?.image?.src || attachment?.media?.image?.src || null;
}

async function syncFacebook(){
  const url = new URL(`https://graph.facebook.com/${apiVersion}/${encodeURIComponent(facebookPageId)}/posts`);
  url.searchParams.set('fields','id,message,permalink_url,created_time,full_picture,attachments{media_type,media,subattachments}');
  url.searchParams.set('limit','12');
  url.searchParams.set('access_token',facebookToken);
  const result = await graphJson(url);
  const items = Array.isArray(result.data) ? result.data : [];
  const {directory,tempDirectory} = await resetMediaDirectory('facebook');
  try{
    const posts = [];
    for(const item of items){
      const image = await downloadImage(facebookImage(item),tempDirectory,item.id);
      posts.push({
        id:String(item.id), platform:'facebook', permalink:item.permalink_url,
        image:image ? image.replace('/facebook.tmp/','/facebook/') : null,
        caption:String(item.message || '').replace(/\s+/g,' ').trim().slice(0,500),
        timestamp:String(item.created_time || ''), mediaType:'POST'
      });
    }
    await publishMediaDirectory(directory,tempDirectory);
    return posts;
  }catch(error){
    await fs.rm(tempDirectory,{recursive:true,force:true});
    throw error;
  }
}


async function restorePublishedSnapshot(){
  const siteBase = (process.env.SOCIAL_FEED_SITE_URL || 'https://emiratesaluminiumshutter.com').replace(/\/$/, '');
  try{
    const response = await fetch(`${siteBase}/data/social-feed.json?restore=${Date.now()}`, {headers:{'cache-control':'no-cache'}});
    if(!response.ok) return null;
    const feed = await response.json();
    const sourcePosts = Array.isArray(feed.posts) ? feed.posts : [];
    if(sourcePosts.length===0) return null;
    const restored=[];
    for(const platform of ['instagram','facebook']){
      const list=sourcePosts.filter(post=>post.platform===platform);
      if(list.length===0) continue;
      const {directory,tempDirectory}=await resetMediaDirectory(platform);
      const mapped=[];
      for(const post of list){
        let image=null;
        if(post.image){
          try{
            const remoteImage=new URL(post.image,siteBase).toString();
            image=await downloadImage(remoteImage,tempDirectory,post.id);
            image=image?.replace(`/${platform}.tmp/`,`/${platform}/`) || null;
          }catch{}
        }
        mapped.push({...post,image});
      }
      await publishMediaDirectory(directory,tempDirectory);
      restored.push(...mapped);
    }
    return {updatedAt:feed.updatedAt || null,posts:restored};
  }catch(error){
    console.log(`No previously published social snapshot could be restored: ${error.message}`);
    return null;
  }
}

async function main(){
  let current = await readFeed();
  let currentPosts = Array.isArray(current.posts) ? current.posts : [];
  let restoredPublished = false;
  if(currentPosts.length===0){
    const restored=await restorePublishedSnapshot();
    if(restored?.posts?.length){current=restored;currentPosts=restored.posts;restoredPublished=true;console.log('Restored the last published post snapshot as a safe fallback.');}
  }
  const preserved = new Map(['instagram','facebook'].map(platform=>[platform,currentPosts.filter(post=>post.platform===platform)]));
  let successfulSync = false;

  if(instagramToken){
    try { preserved.set('instagram', await syncInstagram()); successfulSync = true; console.log('Instagram feed synced.'); }
    catch(error){ console.error(`Instagram feed was not refreshed: ${error.message}`); }
  }else{
    console.log('Instagram feed unchanged: add the INSTAGRAM_ACCESS_TOKEN repository secret to enable it.');
  }

  if(facebookPageId && facebookToken){
    try { preserved.set('facebook', await syncFacebook()); successfulSync = true; console.log('Facebook feed synced.'); }
    catch(error){ console.error(`Facebook feed was not refreshed: ${error.message}`); }
  }else{
    console.log('Facebook feed unchanged: set FACEBOOK_PAGE_ID and FACEBOOK_PAGE_ACCESS_TOKEN to enable it.');
  }

  if(!instagramToken && !(facebookPageId && facebookToken) && currentPosts.length===0){
    console.log('No social credentials configured yet. The post grid will be ready after adding the feed secrets.');
    return;
  }

  if(successfulSync || restoredPublished){
    const posts = latest([...preserved.get('instagram'), ...preserved.get('facebook')]);
    await fs.mkdir(path.dirname(dataFile), {recursive:true});
    const updatedAt=successfulSync?new Date().toISOString():(current.updatedAt || null);
    await fs.writeFile(dataFile, `${JSON.stringify({updatedAt, posts}, null, 2)}\n`);
    console.log(`Prepared ${posts.length} social posts for static export.`);
  }else{
    console.log('Keeping the previously generated feed because no feed request succeeded.');
  }
}

main().catch(error=>{
  console.error(`Social feed refresh failed safely: ${error.message}`);
  process.exitCode = 0; // Feed problems must not block the website deployment.
});

"use client";

import { sitePath } from '../lib/paths';
import {useCallback, useEffect, useRef, useState} from 'react';
import {Icon} from './Icon';

const INSTAGRAM_URL = 'https://www.instagram.com/emiratesrollingshutter/';
const FACEBOOK_URL = 'https://www.facebook.com/share/1JCefsHk6L/';

type SocialPost = {
  id: string;
  platform: 'instagram' | 'facebook';
  permalink: string;
  image: string | null;
  caption: string;
  timestamp: string;
  mediaType?: string;
};

type SocialFeed = {updatedAt?: string | null; posts?: SocialPost[]};

function InstagramMark(){
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="17.5" cy="6.7" r="1.1" fill="currentColor"/>
  </svg>;
}

function FacebookMark(){
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.2v3.2H10V21h3.4Z"/>
  </svg>;
}

function formatDate(value: string){
  if(!value) return '';
  const date = new Date(value);
  if(Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('en', {day:'numeric', month:'short', year:'numeric'}).format(date);
}

export function SocialShowcase(){
  const trackRef = useRef<HTMLDivElement>(null);
  const [posts,setPosts] = useState<SocialPost[]>([]);
  const [loaded,setLoaded] = useState(false);
  const [canScroll,setCanScroll] = useState(false);
  const [feedUpdatedAt,setFeedUpdatedAt] = useState<string | null>(null);

  useEffect(()=>{
    let active = true;
    fetch(`/data/social-feed.json?v=${Date.now()}`, {cache:'no-store'})
      .then(async response => {
        if(!response.ok) throw new Error('Social feed could not be loaded');
        return response.json() as Promise<SocialFeed>;
      })
      .then(data=>{
        if(!active) return;
        const clean = Array.isArray(data.posts) ? data.posts.filter(post => post && post.permalink && post.platform === 'instagram') : [];
        clean.sort((a,b)=>new Date(b.timestamp).getTime()-new Date(a.timestamp).getTime());
        setPosts(clean.slice(0,12));
        setFeedUpdatedAt(data.updatedAt || null);
        setLoaded(true);
      })
      .catch(()=>{if(active) setLoaded(true);});
    return ()=>{active=false;};
  },[]);

  useEffect(()=>{
    const track=trackRef.current;
    if(!track || !loaded || posts.length===0){setCanScroll(false);return;}
    const check=()=>setCanScroll(track.scrollWidth>track.clientWidth+4);
    const frame=window.requestAnimationFrame(check);
    window.addEventListener('resize',check);
    const observer=typeof ResizeObserver!=='undefined'?new ResizeObserver(check):null;
    observer?.observe(track);
    return ()=>{window.cancelAnimationFrame(frame);window.removeEventListener('resize',check);observer?.disconnect();};
  },[loaded,posts]);

  const move = useCallback((direction:-1|1)=>{
    const track = trackRef.current;
    if(!track) return;
    const firstCard = track.querySelector<HTMLElement>('.social-post-card');
    if(!firstCard) return;
    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '20') || 20;
    const distance = firstCard.getBoundingClientRect().width + gap;
    track.scrollBy({left:direction*distance,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  },[]);

  return <section className="social-showcase-section" aria-labelledby="social-showcase-title">
    <div className="social-showcase-glow social-showcase-glow-a" aria-hidden="true"/>
    <div className="social-showcase-glow social-showcase-glow-b" aria-hidden="true"/>
    <div className="container social-showcase-container">
      <div className="social-showcase-heading">
        <div>
          <span className="eyebrow eyebrow-dark">STAY CONNECTED</span>
          <h2 id="social-showcase-title">Follow our work. <em>See what’s next.</em></h2>
        </div>
        <p>Project updates and installation moments from Emirates Aluminium Shutter LLC.</p>
      </div>

      <div className="social-follow-grid">
        <a className="social-follow-card social-follow-instagram" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Follow Emirates Aluminium Shutter LLC on Instagram">
          <span className="social-follow-orbit" aria-hidden="true"/>
          <span className="social-follow-card-top"><span className="social-follow-icon"><InstagramMark/></span><span className="social-follow-label">FOLLOW ON INSTAGRAM</span></span>
          <strong>@emiratesrollingshutter</strong>
          <span className="social-follow-description">New installations, shutter systems and project details.</span>
          <span className="social-follow-action">Follow Instagram <Icon name="arrow"/></span>
        </a>
        <a className="social-follow-card social-follow-facebook" href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Follow Emirates Aluminium Shutter LLC on Facebook">
          <span className="social-follow-orbit" aria-hidden="true"/>
          <span className="social-follow-card-top"><span className="social-follow-icon"><FacebookMark/></span><span className="social-follow-label">CONNECT ON FACEBOOK</span></span>
          <strong>Emirates Aluminium Shutter LLC</strong>
          <span className="social-follow-description">Company updates and project announcements.</span>
          <span className="social-follow-action">Follow Facebook <Icon name="arrow"/></span>
        </a>
      </div>

      <div className="social-posts-area" aria-label="Recent Instagram posts">
        <div className="social-posts-topline">
          <div>
            <span className="social-carousel-kicker"><i/> INSTAGRAM · RECENT POSTS</span>
            <h3>Recent work on <em>Instagram.</em></h3>
          </div>
          {loaded && canScroll && <div className="social-carousel-controls" aria-label="Social post carousel controls">
            <button type="button" onClick={()=>move(-1)} aria-label="Show previous posts"><span>‹</span></button>
            <button type="button" onClick={()=>move(1)} aria-label="Show next posts"><span>›</span></button>
          </div>}
        </div>

        {!loaded && <div className="social-posts-track social-posts-loading" aria-hidden="true">{[0,1,2,3].map(i=><span className="social-post-skeleton" key={i}/>)}</div>}
        {loaded && posts.length>0 && <div className="social-posts-viewport">
          <div className="social-posts-track" ref={trackRef} aria-label="Recent Instagram posts">
            {posts.map((post,index)=>{
              const posted = formatDate(post.timestamp);
              const caption = (post.caption || '').trim();
              const platform = 'Instagram';
              return <article className="social-post-card" key={`${post.platform}-${post.id}`} style={{animationDelay:`${Math.min(index,7)*55}ms`}}>
                <a className={`social-post-link social-post-${post.platform}`} href={post.permalink} target="_blank" rel="noopener noreferrer" aria-label={`Open ${platform} post${posted?` from ${posted}`:''}`}>
                  {post.image ? <img src={sitePath(post.image)} alt={caption?caption.slice(0,120):`${platform} post from Emirates Aluminium Shutter LLC`} loading={index>3?'lazy':'eager'}/> : <span className="social-post-text-visual"><span className="social-post-platform-mark"><InstagramMark/></span><strong>{caption || 'Project update'}</strong></span>}
                  <span className="social-post-shade" aria-hidden="true"/>
                  <span className="social-post-source"><span className="social-post-platform-mark"><InstagramMark/></span><span>{platform}</span>{posted&&<time dateTime={post.timestamp}>{posted}</time>}</span>
                  <span className="social-post-open">View post <Icon name="arrow"/></span>
                </a>
              </article>;
            })}
          </div>
        </div>}

        {loaded && posts.length===0 && <div className="social-posts-empty">
          <span className="social-empty-mark"><InstagramMark/></span>
          <span><strong>Instagram posts will appear here.</strong><small>Follow @emiratesrollingshutter for recent installations and project updates.</small><a className="social-empty-profile-link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Open Instagram profile <Icon name="arrow"/></a></span>
        </div>}
        {loaded && feedUpdatedAt && posts.length>0 && <span className="social-feed-updated">Feed refreshed {formatDate(feedUpdatedAt)}</span>}
      </div>
    </div>
  </section>;
}

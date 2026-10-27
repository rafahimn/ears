import {ORIGINAL_SERVICE_HTML} from '../lib/original-content';
export function OriginalServiceInfo({slug,label='Full service information & project details'}:{slug:string;label?:string}){
 const html=ORIGINAL_SERVICE_HTML[slug];
 if(!html) return null;
 return <section className="section section-cream"><div className="container"><details className="original-info" open><summary><span><small>FROM THE ORIGINAL WORDPRESS WEBSITE</small><b>{label}</b></span><i>+</i></summary><div className="original-info-body" dangerouslySetInnerHTML={{__html:html}} /></details></div></section>;
}

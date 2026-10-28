import { sitePath } from '../../lib/paths';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import Link from 'next/link';
import {serviceDetails,services,waLink} from '../../lib/site';
import {Reveal} from '../../components/Reveal';
import {Icon} from '../../components/Icon';
import {FAQ} from '../../components/FAQ';
import {ServiceConfigurator} from '../../components/ServiceConfigurator';
import {OriginalServiceInfo} from '../../components/OriginalServiceInfo';
import {PremiumCraftService} from '../../components/PremiumCraftService';
import {createPageMetadata} from '../../lib/seo';
import {ServiceStructuredData} from '../../components/StructuredData';
import {SERVICE_PAGE_SEO} from '../../lib/seo-keywords';

export function generateStaticParams(){return services.map((service)=>service.slug).filter((slug)=>!['shutter','motor','garage','repair'].includes(slug)).map((slug)=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const d=serviceDetails[slug];if(!d)return {};const seo=SERVICE_PAGE_SEO[slug];return createPageMetadata({title:seo?.title ?? d.title,description:seo?.description ?? d.intro,path:`/${slug}/`,keywords:seo?.keywords ?? [`${d.title.toLowerCase()} Dubai`,`${d.title.toLowerCase()} UAE`,'Emirates Aluminium Shutter LLC']});}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const d=serviceDetails[slug];if(!d||slug==='canopy-old')notFound();
 const configKind=['shutter','garage','motor','repair'].includes(slug)?slug as 'shutter'|'garage'|'motor'|'repair':null;
 if(['awning','canopy','steel-work','aluminium-works','polycarbonate'].includes(slug)) return <><ServiceStructuredData name={d.title} description={d.intro} path={`/${slug}/`} /><PremiumCraftService slug={slug}/></>;
 return <>
  <ServiceStructuredData name={d.title} description={d.intro} path={`/${slug}/`} />
  <section className="service-hero-wrap"><div className="container"><div className="service-hero-box"><div className="service-hero-copy"><span className="eyebrow eyebrow-dark">{d.eyebrow}</span><h1>{d.title}</h1><p>{d.intro}</p><div className="hero-actions"><a className="btn btn-gold" href={waLink(`Hello, I would like a quotation for ${d.title}.`)} target="_blank" rel="noreferrer"><Icon name="whatsapp"/> Request a Quote</a><Link className="btn btn-outline-dark" href="/services/">All Services <Icon name="arrow"/></Link></div><div className="service-hero-meta"><span><Icon name="shield"/> Clear written scope</span><span><Icon name="ruler"/> Site-led planning</span><span><Icon name="wrench"/> Repair support</span></div></div><div className="service-hero-image"><img src={sitePath(d.image)} alt={d.title}/><div className="image-caption"><span className="live-dot"/> Made to measure <b>UAE service</b></div></div></div></div></section>
  <section className="section section-tight"><div className="container"><div className="service-nav-premium"><span>Jump to</span>{services.map(s=><Link key={s.slug} href={`/${s.slug}/`} className={s.slug===slug?'active':''}>{s.title}</Link>)}</div></div></section>
  <section className="section"><div className="container"><Reveal><div className="feature-strip">{d.bullets.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p></div>)}</div></Reveal></div></section>
  {configKind&&<section className="section section-cream"><div className="container"><Reveal><ServiceConfigurator kind={configKind}/></Reveal></div></section>}
  <section className="section"><div className="container"><div className="detail-sections">{d.sections.map((s,i)=><Reveal key={s.title} delay={i*60}><article className={`detail-row ${i%2?'reverse':''}`}><div className="detail-index"><span>{String(i+1).padStart(2,'0')}</span><div/></div><div className="detail-copy"><span className="eyebrow eyebrow-dark">{s.kicker||'SERVICE DETAIL'}</span><h2>{s.title}</h2><p>{s.text}</p>{s.items&&<ul>{s.items.map(x=><li key={x}><Icon name="check"/>{x}</li>)}</ul>}</div><div className="detail-card"><div className="detail-card-orb"/><span>{String(i+1).padStart(2,'0')}</span><b>{i===0?'PLAN':i===1?'SELECT':i===2?'CONFIRM':'DELIVER'}</b><small>Designed around your project</small></div></article></Reveal>)}</div></div></section>
  <OriginalServiceInfo slug={slug}/>
  <section className="section section-cream"><div className="container"><Reveal><div className="section-head-premium"><div><span className="eyebrow eyebrow-dark">VISUAL APPLICATIONS</span><h2>See the service in <em>real spaces.</em></h2></div><p>These images are visual references. Your property, dimensions and installation conditions are reviewed individually.</p></div></Reveal><div className="mini-gallery-premium">{d.gallery.map((src,i)=><a href={sitePath(src)} target="_blank" rel="noreferrer" key={src}><img src={sitePath(src)} alt={`${d.title} application ${i+1}`}/><span>View <Icon name="arrow"/></span></a>)}</div></div></section>
  <section className="section"><div className="container"><div className="service-faq-layout"><Reveal><div><span className="eyebrow eyebrow-dark">QUESTIONS BEFORE YOU BOOK</span><h2>Clear answers before <em>the next step.</em></h2><p>Need a faster answer? Send photos, approximate dimensions and your location through WhatsApp.</p><a className="btn btn-gold" href={waLink(`Hello, I have a question about ${d.title}.`)} target="_blank" rel="noreferrer"><Icon name="whatsapp"/> Ask on WhatsApp</a></div></Reveal><FAQ items={d.faqs}/></div></div></section>
  <section className="section"><div className="container"><Reveal><div className="final-cta"><div><span className="eyebrow eyebrow-dark">READY TO DISCUSS {d.title.toUpperCase()}?</span><h2>Send the details. <em>We’ll take it from there.</em></h2><p>Opening photos, approximate dimensions, location and a short description are enough for an initial conversation.</p></div><div className="final-cta-actions"><a className="btn btn-gold" href={waLink(`Hello, I would like to discuss ${d.title}.`)} target="_blank" rel="noreferrer"><Icon name="whatsapp"/> Start WhatsApp Quote</a><a className="btn btn-outline-dark" href={sitePath("/services/")}>Explore Other Services</a></div></div></Reveal></div></section>
 </>;
}

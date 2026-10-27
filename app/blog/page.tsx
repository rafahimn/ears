import Link from 'next/link';
import {Reveal} from '../../components/Reveal';
import {Icon} from '../../components/Icon';
import {services} from '../../lib/site';
const posts=[
 ['Garage Door Buying Guide','How to compare panel, motor, hardware, measurement and warranty before choosing an automatic garage door.','garage'],
 ['Rolling Shutter Options Explained','Single-skin, insulated, vision and window-shutter systems — what changes and which properties they suit.','shutter'],
 ['When a Gate Motor Stops Working','The photos, video and system details that help a technician understand a gate automation fault faster.','motor'],
 ['Awning Planning for UAE Outdoor Spaces','Projection, operation, fabric, motorisation and practical shade coverage for villas and commercial spaces.','awning'],
];
export default function Blog(){return <><section className="page-hero-wrap"><div className="container"><div className="page-hero-box"><div><span className="eyebrow eyebrow-dark">INSIGHTS</span><h1>Useful guidance for <em>better project decisions.</em></h1><p>Practical articles covering doors, shutters, automation, shade, maintenance and fabrication.</p></div><div className="page-hero-art"><img src="/wp-content/uploads/2026/10/Untitled-design-2.png" alt="Project materials"/></div></div></div></section><section className="section"><div className="container"><div className="article-grid">{posts.map(([title,text,slug],i)=><Reveal key={title} delay={i*80}><article className="article-card"><div className="article-image"><img src={services.find(s=>s.slug===slug)?.image||'/wp-content/uploads/2026/10/2277-1.jpg'} alt={title}/><span>Guide</span></div><div className="article-copy"><small>Dubai · UAE</small><h2>{title}</h2><p>{text}</p><Link href={`/${slug}/`}>Explore the related service <Icon name="arrow"/></Link></div></article></Reveal>)}</div></div></section></>}

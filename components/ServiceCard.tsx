import { sitePath } from '../lib/paths';
import Link from 'next/link';
import {services} from '../lib/site';
import {Icon} from './Icon';
import {Reveal} from './Reveal';
export function ServiceCard({service,index=0}:{service:(typeof services)[number];index?:number}){return <Reveal delay={index*60}><article className="service-card-premium"><Link href={`/${service.slug}/`} className="service-card-image"><img src={sitePath(service.image)} alt={service.title}/><span className="service-overlay"/><span className="service-no">{service.accent}</span><span className="service-open"><Icon name="arrow"/></span></Link><div className="service-card-copy"><span className="eyebrow eyebrow-dark">{service.eyebrow}</span><h3><Link href={`/${service.slug}/`}>{service.title}</Link></h3><p>{service.short}</p><div className="tag-row">{service.tags.map(t=><span key={t}>{t}</span>)}</div><Link className="service-link" href={`/${service.slug}/`}>Explore service <Icon name="arrow"/></Link></div></article></Reveal>}

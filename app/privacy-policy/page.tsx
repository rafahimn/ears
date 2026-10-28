import { markupWithBasePath, sitePath } from '../../lib/paths';
import {Reveal} from '../../components/Reveal';
import {PRIVACY_HTML} from '../../lib/legal';
import type { Metadata } from 'next';
import { createPageMetadata } from '../../lib/seo';
import { BreadcrumbStructuredData } from '../../components/StructuredData';

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy',
  description: 'Read how Emirates Aluminium Shutter LLC handles information submitted through website visits, calls, email, WhatsApp messages and quotation requests.',
  path: '/privacy-policy/',
});
export default function Privacy(){return <><BreadcrumbStructuredData items={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy/' }]} /><section className="page-hero-wrap"><div className="container"><div className="page-hero-box"><div><span className="eyebrow eyebrow-dark">LEGAL & PRIVACY</span><h1>Privacy <em>Policy</em></h1><p>How Emirates Aluminium Shutter LLC collects, uses and protects your information when you visit the website, message us on WhatsApp, call us, email us or request a quotation.</p></div><div className="page-hero-art"><img src={sitePath("/wp-content/uploads/2026/10/photo-1497366811353-6870744d04b2.avif")} alt="Privacy policy"/></div></div></div></section><section className="section"><div className="container prose wp-legal-content"><Reveal><div dangerouslySetInnerHTML={{__html:markupWithBasePath(PRIVACY_HTML)}} /></Reveal></div></section></>}

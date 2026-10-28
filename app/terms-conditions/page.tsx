import { markupWithBasePath, sitePath } from '../../lib/paths';
import {Reveal} from '../../components/Reveal';
import {TERMS_HTML} from '../../lib/legal';
import type { Metadata } from 'next';
import { createPageMetadata } from '../../lib/seo';
import { BreadcrumbStructuredData } from '../../components/StructuredData';

export const metadata: Metadata = createPageMetadata({
  title: 'Terms & Conditions',
  description: 'Review the website use, quotation, supply, installation, repair and maintenance enquiry terms for Emirates Aluminium Shutter LLC in Dubai and the UAE.',
  path: '/terms-conditions/',
});
export default function Terms(){return <><BreadcrumbStructuredData items={[{ name: 'Home', path: '/' }, { name: 'Terms & Conditions', path: '/terms-conditions/' }]} /><section className="page-hero-wrap"><div className="container"><div className="page-hero-box"><div><span className="eyebrow eyebrow-dark">LEGAL INFORMATION & CUSTOMER GUIDANCE</span><h1>Terms & <em>Conditions</em></h1><p>General terms for website use, quotations, supply, installation, repair and maintenance enquiries.</p></div><div className="page-hero-art"><img src={sitePath("/wp-content/uploads/2026/10/2149207752-1-1.jpg")} alt="Terms and conditions"/></div></div></div></section><section className="section"><div className="container prose wp-legal-content"><Reveal><div dangerouslySetInnerHTML={{__html:markupWithBasePath(TERMS_HTML)}} /></Reveal></div></section></>}

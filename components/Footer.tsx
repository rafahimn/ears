import { sitePath } from '../lib/paths';
import Link from 'next/link';
import { Icon } from './Icon';
import { PHONE, PHONE_DISPLAY, EMAIL, ADDRESS, MAP_URL, COORDINATES, waLink, services } from '../lib/site';

const coreSlugs = ['shutter', 'garage', 'motor', 'repair', 'polycarbonate'];
const coreServices = services.filter(s => coreSlugs.includes(s.slug));
const fabricationServices = services.filter(s => !coreSlugs.includes(s.slug));

export function Footer() {
  return <footer className="rf-footer">
    <div className="container rf-main">
      <div className="rf-brand">
        <Link href="/" className="rf-logo"><img src={sitePath("/brand/logo.png")} alt="" /><span><b>EMIRATES ALUMINIUM</b><small>SHUTTER LLC</small></span></Link>
        <p>Professional rolling shutters, polycarbonate shutters, garage doors, gate motors, awnings, canopies and custom aluminium &amp; steel solutions across Dubai and the UAE.</p>
        <div className="rf-pills"><span>Dubai · UAE</span><span>Site Measurement</span><span>Custom Fabrication</span></div>
      </div>
      <div className="rf-col"><h4>Quick Links</h4><ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about-us/">About Us</Link></li>
        <li><Link href="/services/">All Services</Link></li>
        <li><Link href="/blog/">Insights</Link></li>
        <li><Link href="/privacy-policy/">Privacy Policy</Link></li>
        <li><Link href="/terms-conditions/">Terms &amp; Conditions</Link></li>
      </ul></div>
      <div className="rf-col"><h4>Core Services</h4><ul>{coreServices.map(s => <li key={s.slug}><Link href={`/${s.slug}/`}>{s.title}</Link></li>)}</ul></div>
      <div className="rf-col"><h4>Fabrication &amp; Shade</h4><ul>{fabricationServices.map(s => <li key={s.slug}><Link href={`/${s.slug}/`}>{s.title}</Link></li>)}</ul></div>
      <div className="rf-col rf-contact"><h4>Contact &amp; Location</h4>
        <a href={`tel:${PHONE}`}><i><Icon name="phone" /></i><span><small>Call / WhatsApp</small><b>{PHONE_DISPLAY}</b></span></a>
        <a href={waLink()} target="_blank" rel="noreferrer"><i><Icon name="whatsapp" /></i><span><small>WhatsApp Quote</small><b>Send photos or a video</b></span></a>
        <a href={`mailto:${EMAIL}`}><i><Icon name="mail" /></i><span><small>Email</small><b>{EMAIL}</b></span></a>
        <a href={MAP_URL} target="_blank" rel="noreferrer"><i><Icon name="map" /></i><span><small>Our Location</small><b>{ADDRESS}</b><em>{COORDINATES}</em></span></a>
      </div>
    </div>
    <div className="container rf-cards">
      <div className="rf-card">
        <i><Icon name="map" /></i>
        <div><small>VISIT OUR DUBAI LOCATION</small><b>{ADDRESS}</b><em>Coordinates: {COORDINATES}</em></div>
        <a className="rf-btn rf-btn-gold" href={MAP_URL} target="_blank" rel="noreferrer">Open in Google Maps <Icon name="arrow" /></a>
      </div>
      <div className="rf-card">
        <i><Icon name="whatsapp" /></i>
        <div><b>Let’s find the right system for your property.</b><em>Send photos or a video of your opening for a clear quotation.</em></div>
        <a className="rf-btn rf-btn-green" href={waLink('Hello, I would like to discuss a quotation for my property.')} target="_blank" rel="noreferrer">WhatsApp Quote <Icon name="arrow" /></a>
      </div>
    </div>
    <div className="container rf-bottom"><span>© {new Date().getFullYear()} Emirates Aluminium Shutter LLC. All rights reserved.</span><span><Link href="/privacy-policy/">Privacy Policy</Link><Link href="/terms-conditions/">Terms &amp; Conditions</Link></span></div>
  </footer>;
}

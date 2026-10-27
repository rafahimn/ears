import { Icon } from './Icon';
import { PHONE, waLink } from '../lib/site';

export function FloatingActions() {
  return <div className="floating-actions" aria-label="Quick contact options">
    <span className="floating-emergency-label">24/7 Emergency service</span>
    <a className="float-call" href={`tel:${PHONE}`} aria-label="Call Emirates Aluminium Shutter"><Icon name="phone" /></a>
    <a className="float-wa" href={waLink()} target="_blank" rel="noreferrer" aria-label="Message on WhatsApp"><Icon name="whatsapp" /></a>
  </div>;
}

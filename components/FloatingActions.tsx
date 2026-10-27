import { Icon } from './Icon';
import { waLink } from '../lib/site';

export function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick contact">
      <a
        className="float-wa float-wa-icon-only"
        href={waLink('Hello, I would like to discuss a service or request a quotation. I can share photos and project details on WhatsApp.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Emirates Aluminium Shutter on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="float-wa-icon" aria-hidden="true">
          <Icon name="whatsapp" />
        </span>
      </a>
    </div>
  );
}

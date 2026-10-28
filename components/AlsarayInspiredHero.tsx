import { sitePath } from '../lib/paths';
import { Icon } from './Icon';
import { PHONE, PHONE_DISPLAY, waLink } from '../lib/site';
import { QuickQuotePanel } from './QuickQuotePanel';

export function AlsarayInspiredHero() {
  const message = 'Hello, I would like to request a quotation for Emirates Aluminium Shutter LLC. Please let me know what photos or details you need.';

  return (
    <section className="alsaray-home-hero" id="top" aria-label="Emirates Aluminium Shutter LLC services across the UAE">
      <div className="alsaray-hero-image" aria-hidden="true" />
      <div className="alsaray-hero-vignette" aria-hidden="true" />
      <div className="alsaray-hero-orbit alsaray-hero-orbit-one" aria-hidden="true" />
      <div className="alsaray-hero-orbit alsaray-hero-orbit-two" aria-hidden="true" />

      <div className="alsaray-hero-shell">
        <div className="alsaray-hero-copy">
          <div className="alsaray-hero-kicker alsaray-reveal alsaray-delay-1">
            <span className="alsaray-live-dot" />
            <span>ENTRANCE &amp; SHADE SOLUTIONS FOR THE UAE</span>
          </div>

          <h1 className="alsaray-reveal alsaray-delay-2">
            Garage doors, shutters <span>&amp; gate motors</span>
            <em>across Dubai &amp; the UAE.</em>
          </h1>

          <p className="alsaray-hero-description alsaray-reveal alsaray-delay-3">
            Supply, installation, automation and repair for villas, shops and commercial properties. Send a photo or short video on WhatsApp to start with a clear, practical quotation.
          </p>

          <div className="alsaray-hero-actions alsaray-reveal alsaray-delay-4">
            <a className="alsaray-hero-primary" href={waLink(message)} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" />
              <span>Send Photos on WhatsApp</span>
              <Icon name="arrow" />
            </a>
            <a className="alsaray-hero-secondary" href={`tel:${PHONE}`}>
              <span className="alsaray-call-icon"><Icon name="phone" /></span>
              <span><small>Need urgent assistance?</small><b>Call {PHONE_DISPLAY}</b></span>
            </a>
          </div>

          <div className="alsaray-hero-trust alsaray-reveal alsaray-delay-5">
            <span className="alsaray-rating"><b>4.7</b><i>★★★★★</i><small>Google rating</small></span>
            <span className="alsaray-trust-divider" />
            <span><Icon name="shield" /><b>Clear warranty</b></span>
            <span className="alsaray-trust-divider" />
            <span><Icon name="check" /><b>Homes &amp; businesses</b></span>
          </div>
        </div>

        <div className="alsaray-hero-quote-wrap alsaray-reveal alsaray-delay-3">
          <div className="alsaray-quote-glow" aria-hidden="true" />
          <QuickQuotePanel />
          <div className="alsaray-quote-caption"><span><Icon name="shield" /></span><div><b>Clear scope. Clear next step.</b><small>Share details first — confirm work before it starts.</small></div></div>
        </div>
      </div>

      <div className="alsaray-hero-proofline">
        <div className="alsaray-proofline-inner">
          <span><i>01</i> Engineer site check</span>
          <span><i>02</i> Practical quotation</span>
          <span><i>03</i> Installation &amp; repair</span>
          <span><i>04</i> After-sales support</span>
          <a href={sitePath("/#services")}>Explore all services <Icon name="arrow" /></a>
        </div>
      </div>
    </section>
  );
}

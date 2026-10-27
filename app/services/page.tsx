import type { Metadata } from 'next';
import { services, waLink } from '../../lib/site';
import { Reveal } from '../../components/Reveal';
import { QuoteBuilder } from '../../components/QuoteBuilder';
import { Icon } from '../../components/Icon';
import { ServicesDirectory } from '../../components/ServicesDirectory';

export const metadata: Metadata = {
  title: 'Our Services | Rolling Shutters, Garage Doors, Motors & Shade',
  description: 'Explore rolling shutters, garage doors, gate motors, awnings, canopies, aluminium and steel fabrication, polycarbonate shutters, and repair services across Dubai and the UAE.',
  alternates: { canonical: '/services/' },
};

const servicePrinciples = [
  ['01', 'Understand the opening', 'Review the property, dimensions, current system and how the opening will be used.'],
  ['02', 'Specify the right system', 'Compare material, operation, motor, finish and practical accessories for the job.'],
  ['03', 'Confirm the scope', 'Clarify the work, installation conditions, availability and quotation before approval.'],
  ['04', 'Install, test and support', 'Coordinate fitting, operation checks, handover and any agreed after-sales support.'],
];

export default function Services() {
  return <>
    <section className="page-hero-wrap services-page-hero-wrap">
      <div className="container">
        <div className="page-hero-box services-page-hero">
          <div className="services-page-hero-copy">
            <span className="eyebrow eyebrow-dark">OUR SERVICES · DUBAI & THE UAE</span>
            <h1>Complete shutter, shade &amp; <em>aluminium solutions.</em></h1>
            <p>From a single faulty motor to a complete villa or commercial installation, explore the service options and start with the details you already have.</p>
            <div className="services-hero-actions">
              <a className="btn btn-gold" href={waLink('Hello, I would like help choosing a service and requesting a quotation.')} target="_blank" rel="noreferrer"><Icon name="whatsapp"/> Start a Quote</a>
              <a className="btn btn-outline-dark" href="#service-directory">Explore Services <Icon name="arrow"/></a>
            </div>
            <div className="services-hero-points" aria-label="Service highlights">
              <span><i>✓</i> Supply &amp; installation</span>
              <span><i>✓</i> Automation &amp; repair</span>
              <span><i>✓</i> Residential &amp; commercial</span>
            </div>
          </div>
          <div className="page-hero-art services-page-art">
            <img src="/wp-content/uploads/2026/10/Untitled-design-2.png" alt="Emirates Aluminium Shutter service and installation solutions" />
            <span className="services-image-caption">One point of contact · Multiple specialist services</span>
            <div className="services-hero-float"><b>{services.length.toString().padStart(2, '0')}</b><span><strong>Service categories</strong><small>Doors, shade, access &amp; fabrication</small></span></div>
          </div>
        </div>
      </div>
    </section>

    <section className="services-quickproof" aria-label="Service overview">
      <div className="container services-quickproof-grid">
        <div><span className="services-proof-symbol">01</span><span><strong>Made for the opening</strong><small>Size and site conditions matter</small></span></div>
        <div><span className="services-proof-symbol">02</span><span><strong>New systems &amp; upgrades</strong><small>Manual and automated options</small></span></div>
        <div><span className="services-proof-symbol">03</span><span><strong>Repair &amp; maintenance</strong><small>Diagnosis before the work</small></span></div>
        <div><span className="services-proof-symbol">04</span><span><strong>Dubai &amp; UAE coverage</strong><small>Confirm area and timing first</small></span></div>
      </div>
    </section>

    <section className="section section-tight services-list-section" id="service-directory">
      <div className="container">
        <Reveal>
          <div className="intro-row services-page-intro">
            <div><span className="eyebrow eyebrow-dark">{services.length.toString().padStart(2, '0')} CORE SERVICES</span><h2>One partner for <em>doors, shade &amp; access.</em></h2></div>
            <p>Choose a category to find the most relevant service page. Each option explains the system, available choices and the next step for a project or repair request.</p>
          </div>
        </Reveal>
        <ServicesDirectory />
      </div>
    </section>

    <section className="section section-cream services-approach-section">
      <div className="container">
        <div className="services-approach-panel">
          <Reveal>
            <div className="services-approach-heading">
              <span className="eyebrow eyebrow-dark">A CLEARER WAY TO START</span>
              <h2>Clear scope. Practical advice. <em>Professional handover.</em></h2>
              <p>Every opening and system has its own requirements. A simple process helps keep the options, quote and installation plan clear.</p>
            </div>
          </Reveal>
          <div className="services-approach-grid">
            {servicePrinciples.map(([number, title, description]) => <Reveal key={number} delay={Number(number) * 60}>
              <article className="services-approach-card"><span>{number}</span><h3>{title}</h3><p>{description}</p></article>
            </Reveal>)}
          </div>
        </div>
      </div>
    </section>

    <section className="section services-request-section" id="service-request-section">
      <div className="container services-request-layout">
        <Reveal>
          <div className="services-request-copy">
            <span className="eyebrow eyebrow-dark">NOT SURE WHERE TO START?</span>
            <h2>Tell us what you know. <em>We’ll help with the next step.</em></h2>
            <p>You do not need the exact product name or final measurements to begin. Share the service, location and a brief description so the initial conversation is useful.</p>
            <ul>
              <li><Icon name="check"/> Choose the nearest service category</li>
              <li><Icon name="check"/> Select a system or choose “not sure yet”</li>
              <li><Icon name="check"/> Add the UAE location and approximate size</li>
              <li><Icon name="check"/> Continue to WhatsApp with the details</li>
            </ul>
            <a className="services-call-link" href="tel:+971552052347"><Icon name="phone"/> Call +971 55 205 2347</a>
          </div>
        </Reveal>
        <div className="services-request-form"><QuoteBuilder/></div>
      </div>
    </section>
  </>;
}

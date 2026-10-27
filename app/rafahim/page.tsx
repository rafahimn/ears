import { sitePath } from '../../lib/paths';
import type { Metadata } from 'next';
import './rafahim.css';
import { Icon } from '../../components/Icon';

export const metadata: Metadata = {
  title: 'RA Fahim — Developer & Creator',
  description: 'Meet RA Fahim, a web developer and creator building modern websites, web applications and e-commerce experiences.',
  alternates: { canonical: '/rafahim/' },
  openGraph: {
    title: 'RA Fahim — Developer & Creator',
    description: 'Web developer and digital product builder focused on clean, practical web experiences.',
    type: 'profile',
    images: [{ url: '/rafahim/ra-fahim.png', alt: 'RA Fahim — Developer & Creator' }],
  },
};

const personSchema = {
  '@context': 'https://schema.org', '@type': 'Person', name: 'RA Fahim', alternateName: 'rafahimn',
  jobTitle: 'Web Developer & Creator', image: '/rafahim/ra-fahim.png',
  sameAs: ['https://www.facebook.com/rafahimn', 'https://www.instagram.com/rafahimn', 'https://github.com/rafahim', 'https://rafahim.com'],
  email: 'mailto:dev@rafahim.com',
};
const skills = [
  { number: '01', title: 'Web development', text: 'Responsive websites and web applications with a focus on clarity, performance and maintainable structure.' },
  { number: '02', title: 'E-commerce', text: 'Online stores and business platforms that make browsing, checkout and day-to-day management straightforward.' },
  { number: '03', title: 'Product thinking', text: 'Turning a practical idea into a complete user experience—from interface details to the systems behind it.' },
];
const links = [
  { title: 'Facebook', subtitle: 'Connect on Facebook', href: 'https://www.facebook.com/rafahimn', icon: 'facebook' },
  { title: 'Instagram', subtitle: 'Follow on Instagram', href: 'https://www.instagram.com/rafahimn', icon: 'instagram' },
  { title: 'Portfolio', subtitle: 'Explore my work', href: 'https://rafahim.com', icon: 'external' },
  { title: 'GitHub', subtitle: 'See my code', href: 'https://github.com/rafahim', icon: 'github' },
] as const;

function ProfileGlyph({ name }: { name: 'facebook' | 'instagram' | 'github' | 'external' | 'code' }) {
  const common = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true as const };
  if (name === 'facebook') return <svg {...common}><path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1Z" /></svg>;
  if (name === 'instagram') return <svg {...common}><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.6 6.5h.01"/></svg>;
  if (name === 'github') return <svg {...common}><path d="M9 19c-4.2 1.3-4.2-2.1-5.9-2.5M15 21v-3.2a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.6-1.3 5.6-6A4.7 4.7 0 0 0 18.5 6a4.3 4.3 0 0 0-.1-3.2S17.3 2.5 15 4a12 12 0 0 0-6 0C6.7 2.5 5.6 2.8 5.6 2.8A4.3 4.3 0 0 0 5.5 6a4.7 4.7 0 0 0-1.3 3.6c0 4.7 2.9 5.7 5.6 6A2.8 2.8 0 0 0 9 17.8V21"/></svg>;
  if (name === 'code') return <svg {...common}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg>;
  return <svg {...common}><path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/></svg>;
}

export default function RafahimPage() {
  return <div className="rf-page">
    <div className="rf-ambient rf-ambient-one" aria-hidden="true" />
    <div className="rf-ambient rf-ambient-two" aria-hidden="true" />
    <section className="rf-shell rf-hero">
      <div className="rf-hero-copy">
        <div className="rf-pill"><span className="rf-dot" /> RA Fahim <span className="rf-pill-divider" /> Developer &amp; Creator</div>
        <p className="rf-kicker">A DIGITAL CRAFTSMANSHIP PROFILE</p>
        <h1 className="rf-title">RA <span>Fahim</span><i aria-hidden="true">.</i></h1>
        <p className="rf-copy">Web developer and digital product builder focused on clean, practical experiences—from modern websites and web apps to e-commerce platforms and the infrastructure behind them.</p>
        <div className="rf-actions">
          <a className="rf-btn rf-primary" href="https://rafahim.com" target="_blank" rel="noopener noreferrer">View portfolio <Icon name="arrow" /></a>
          <a className="rf-btn rf-secondary" href="mailto:dev@rafahim.com"><Icon name="mail" /> Contact me</a>
        </div>
        <div className="rf-trustline"><span><b>01</b> Thoughtful interfaces</span><span><b>02</b> Practical solutions</span><span><b>03</b> Web experiences</span></div>
      </div>
      <div className="rf-photo-wrap">
        <div className="rf-photo-aura" aria-hidden="true" />
        <div className="rf-photo-frame">
          <div className="rf-photo-topline"><span>PROFILE / 001</span><span className="rf-live"><i /> AVAILABLE ONLINE</span></div>
          <img src={sitePath("/rafahim/ra-fahim.png")} alt="RA Fahim — Developer & Creator" />
          <div className="rf-photo-meta"><div><strong>RA Fahim</strong><span>Developer <b>•</b> Creator</span></div><span className="rf-web-badge">WEB <ProfileGlyph name="external" /></span></div>
        </div>
        <div className="rf-floating-note"><span className="rf-note-mark"><ProfileGlyph name="code" /></span><span><small>FOCUSED ON</small><strong>Useful digital products</strong></span></div>
      </div>
    </section>
    <section className="rf-shell rf-section">
      <div className="rf-section-head"><div><p className="rf-section-kicker">A LITTLE ABOUT ME</p><h2>I build useful things <em>for the web.</em></h2></div><p className="rf-section-intro">Modern interfaces, clear user journeys and reliable systems—brought together with a practical mindset.</p></div>
      <div className="rf-skill-grid">{skills.map((skill) => <article className="rf-skill-card" key={skill.number}><div className="rf-skill-top"><span>{skill.number}</span><ProfileGlyph name="external" /></div><h3>{skill.title}</h3><p>{skill.text}</p><div className="rf-card-rule" /></article>)}</div>
    </section>
    <section className="rf-connect-section"><div className="rf-shell">
      <div className="rf-connect-head"><div><p className="rf-section-kicker">FIND ME ONLINE</p><h2>Connect, explore or <em>see what I build.</em></h2></div><p>For collaboration, projects or enquiries, choose the channel that works best for you.</p></div>
      <div className="rf-links-grid">{links.map((item) => <a className="rf-social-card" key={item.title} href={item.href} target="_blank" rel="noopener noreferrer"><span className="rf-social-icon"><ProfileGlyph name={item.icon} /></span><span className="rf-social-copy"><strong>{item.title}</strong><small>{item.subtitle}</small></span><ProfileGlyph name="external" /></a>)}</div>
      <div className="rf-contact-strip"><div><span className="rf-contact-icon"><Icon name="mail" /></span><span><small>FOR PROJECTS &amp; COLLABORATION</small><strong>Let’s make something useful.</strong></span></div><a href="mailto:dev@rafahim.com">dev@rafahim.com <ProfileGlyph name="external" /></a></div>
    </div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
  </div>;
}

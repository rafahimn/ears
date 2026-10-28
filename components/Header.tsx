"use client";
import { sitePath } from '../lib/paths';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';
import { PHONE, PHONE_DISPLAY, EMAIL, ADDRESS, waLink, services } from '../lib/site';
import { ScrollProgress } from './ScrollProgress';
import { LanguageSwitcher } from './LanguageSwitcher';

const shortLabels: Record<string, string> = {
  shutter: 'Shutter', canopy: 'Canopy', garage: 'Garage', awning: 'Awning', motor: 'Motor',
  repair: 'Repair', 'aluminium-works': 'Aluminium', 'steel-work': 'Steel Work', polycarbonate: 'Polycarbonate',
};
// Same order as the footer: core services first, then fabrication and shade.
const order = ['shutter', 'polycarbonate', 'garage', 'motor', 'repair', 'canopy', 'awning', 'aluminium-works', 'steel-work'];
const ordered = order.map(slug => services.find(s => s.slug === slug)!);
const trim = (path: string) => (path.length > 1 ? path.replace(/\/$/, '') : path);

export function Header() {
  const pathname = trim(usePathname() || '/');
  const [sheet, setSheet] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sheetButton = useRef<HTMLButtonElement>(null);
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname === trim(href));

  useEffect(() => { setSheet(false); }, [pathname]);

  useEffect(() => {
    let frame = 0;
    const update = () => { frame = 0; setScrolled(window.scrollY > 12); };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (frame) window.cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => {
    if (!sheet) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = 'hidden';
    root.classList.add('nb-lock');
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setSheet(false); sheetButton.current?.focus(); } };
    const media = window.matchMedia('(min-width: 1400px)');
    const onMedia = () => { if (media.matches) setSheet(false); };
    window.addEventListener('keydown', onKey);
    media.addEventListener('change', onMedia);
    return () => { root.style.overflow = previous; root.classList.remove('nb-lock'); window.removeEventListener('keydown', onKey); media.removeEventListener('change', onMedia); };
  }, [sheet]);

  const link = (href: string, label: string) =>
    <Link key={href} href={href} className="nb-link" aria-current={isActive(href) ? 'page' : undefined}><span>{label}</span></Link>;

  return <header className={`site-header nb-header${scrolled ? ' is-scrolled' : ''}`}>
    <a className="nb-skip" href="#main-content">Skip to content</a>
    <div className="nb-strip">
      <div className="nb-wrap nb-strip-inner">
        <a className="nb-strip-item nb-strip-address" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noreferrer" aria-label={`Open ${ADDRESS} in Google Maps`}>
          <Icon name="map" /><span translate="no">Naif, Deira, Dubai</span>
        </a>
        <div className="nb-strip-right">
          <a className="nb-strip-item" href={`tel:${PHONE}`} aria-label={`Call ${PHONE_DISPLAY}`}><Icon name="phone" /><span translate="no">{PHONE_DISPLAY}</span></a>
          <a className="nb-strip-item nb-strip-email" href={`mailto:${EMAIL}`}><Icon name="mail" /><span translate="no">{EMAIL}</span></a>
          <span className="nb-strip-sep" aria-hidden="true" />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
    <div className="nb-bar">
      <div className="nb-wrap nb-bar-inner">
        <Link href="/" className="nb-brand" onClick={() => setSheet(false)} aria-label="Emirates Aluminium Shutter home">
          <span className="nb-brand-mark"><img src={sitePath('/brand/logo.png')} alt="" width="52" height="58" /></span>
          <span className="nb-brand-copy" translate="no"><b>EMIRATES ALUMINIUM</b><small>SHUTTER LLC</small></span>
        </Link>

        <nav className="nb-nav" aria-label="Main navigation">
          <div className="nb-track">
            {link('/', 'Home')}
            {link('/services/', 'Services')}
            <span className="nb-divider" aria-hidden="true" />
            {ordered.map(s => link(`/${s.slug}/`, shortLabels[s.slug] || s.title))}
          </div>
        </nav>

        <div className="nb-actions">
          <a className="nb-call" href={`tel:${PHONE}`} aria-label={`Call ${PHONE_DISPLAY}`}><i><Icon name="phone" /></i><span>Call now</span></a>
          <a className="nb-phone" href={`tel:${PHONE}`} aria-label={`Call ${PHONE_DISPLAY}`}><Icon name="phone" /></a>
          <Link className="nb-cta" href="/#quick-quote"><span>Get a quote</span><i><Icon name="arrow" /></i></Link>
          <button ref={sheetButton} type="button" className="nb-burger" onClick={() => setSheet(v => !v)} aria-label={sheet ? 'Close menu' : 'Open menu'} aria-expanded={sheet} aria-controls="nb-sheet"><Icon name={sheet ? 'close' : 'menu'} /></button>
        </div>
      </div>
      <ScrollProgress />
    </div>

    <div id="nb-sheet" className={`nb-sheet${sheet ? ' is-open' : ''}`} inert={!sheet}>
      <div className="nb-sheet-scroll">
        <nav className="nb-sheet-nav" aria-label="Mobile navigation">
          <Link href="/" aria-current={isActive('/') ? 'page' : undefined}><span>Home</span><Icon name="arrow" /></Link>
          <Link href="/about-us/" aria-current={isActive('/about-us/') ? 'page' : undefined}><span>About us</span><Icon name="arrow" /></Link>
          <Link href="/blog/" aria-current={isActive('/blog/') ? 'page' : undefined}><span>Insights</span><Icon name="arrow" /></Link>
        </nav>
        <div className="nb-sheet-head"><b>Services</b><Link href="/services/" aria-current={pathname === '/services' ? 'page' : undefined}><span>View all</span><Icon name="arrow" /></Link></div>
        <div className="nb-sheet-grid">
          {ordered.map(s => <Link key={s.slug} href={`/${s.slug}/`} aria-current={isActive(`/${s.slug}/`) ? 'page' : undefined}>
            <img src={sitePath(s.image)} alt="" width="44" height="44" loading="lazy" decoding="async" />
            <span>{s.title}</span>
          </Link>)}
        </div>
        <a className="nb-sheet-mail" href={`mailto:${EMAIL}`}><Icon name="mail" /><span translate="no">{EMAIL}</span></a>
      </div>
      <div className="nb-sheet-actions">
        <a className="nb-btn nb-btn--ink" href={`tel:${PHONE}`}><Icon name="phone" /><span>Call now</span></a>
        <a className="nb-btn nb-btn--gold" href={waLink()} target="_blank" rel="noreferrer"><Icon name="whatsapp" /><span>WhatsApp quote</span></a>
      </div>
    </div>
  </header>;
}

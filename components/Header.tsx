"use client";
import { sitePath } from '../lib/paths';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Icon } from './Icon';
import { PHONE, PHONE_DISPLAY, EMAIL, waLink, services } from '../lib/site';
import { ScrollProgress } from './ScrollProgress';
import { LanguageSwitcher } from './LanguageSwitcher';

const shortLabels: Record<string, string> = {
  shutter: 'Shutter',
  canopy: 'Canopy',
  garage: 'Garage',
  awning: 'Awning',
  motor: 'Motor',
  repair: 'Repair',
  'aluminium-works': 'Aluminium',
  'steel-work': 'Steel Work',
  polycarbonate: 'Polycarbonate',
};

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';
  useEffect(() => { setOpen(false); }, [pathname]);
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.replace(/\/$/, '') === href.replace(/\/$/, ''));
  return <>
    <ScrollProgress />
    <header className="site-header reference-site-header">
      <div className="reference-header-container reference-header-inner">
        <Link href="/" className="brand reference-brand" onClick={() => setOpen(false)} aria-label="Emirates Aluminium Shutter home">
          <span className="brand-mark reference-brand-mark"><img src={sitePath("/brand/logo.png")} alt="" /></span>
          <span className="brand-copy reference-brand-copy"><b>EMIRATES ALUMINIUM</b><small>SHUTTER LLC</small></span>
        </Link>
        <nav className="reference-nav premium-nav reference-all-services-nav" aria-label="Main navigation">
          <Link href="/" className={isActive('/') ? 'is-active' : undefined} aria-current={isActive('/') ? 'page' : undefined}>Home</Link>
          <Link href="/services/" className={isActive('/services/') ? 'is-active' : undefined} aria-current={isActive('/services/') ? 'page' : undefined}>Services</Link>
          {services.map(service => <Link key={service.slug} href={`/${service.slug}/`} className={isActive(`/${service.slug}/`) ? 'is-active' : undefined} aria-current={isActive(`/${service.slug}/`) ? 'page' : undefined}>{shortLabels[service.slug] || service.title}</Link>)}
        </nav>
        <div className="reference-header-actions">
          <LanguageSwitcher />
          <a className="reference-header-phone" href={`tel:${PHONE}`} aria-label={`Call ${PHONE_DISPLAY}`}><Icon name="phone" /></a>
          <a className="reference-get-quote" href={sitePath("/#quick-quote")}>Get Quote <Icon name="arrow" /></a>
          <button className="menu-toggle reference-menu-toggle" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation" aria-expanded={open}><Icon name={open ? 'close' : 'menu'} /></button>
        </div>
      </div>
      {open && <div className="reference-mobile-panel"><div className="reference-header-container reference-mobile-panel-inner">
        <div className="mobile-language-row"><span>Language</span><LanguageSwitcher mobile onSelect={() => setOpen(false)} /></div>
        <Link href="/" onClick={() => setOpen(false)}>Home<Icon name="arrow" /></Link>
        <Link href="/services/" onClick={() => setOpen(false)}>All Services<Icon name="arrow" /></Link>
        <div className="reference-mobile-divider">Our services</div>
        {services.map(service => <Link key={service.slug} href={`/${service.slug}/`} onClick={() => setOpen(false)}>{service.title}<Icon name="arrow" /></Link>)}
        <a href={`tel:${PHONE}`} onClick={() => setOpen(false)}><Icon name="phone" />{PHONE_DISPLAY}</a>
        <a href={`mailto:${EMAIL}`} onClick={() => setOpen(false)}><Icon name="mail" />{EMAIL}</a>
        <a className="reference-mobile-cta" href={waLink()} target="_blank" rel="noreferrer"><Icon name="whatsapp" /> WhatsApp Quote</a>
      </div></div>}
    </header>
  </>;
}

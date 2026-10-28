'use client';
import { useEffect, useState } from 'react';
import { Icon } from './Icon';

type Language = 'en' | 'ar';
declare global { interface Window { google?: any; googleTranslateElementInit?: () => void } }

const MOUNT_ID = 'google_translate_element';

// Cookie is the source of truth: Google Translate itself reads it on page load.
function readLanguage(): Language {
  if (typeof document === 'undefined') return 'en';
  const cookie = document.cookie.split(';').map(v => v.trim()).find(v => v.startsWith('googtrans='));
  return cookie?.endsWith('/en/ar') ? 'ar' : 'en';
}

// One hidden Google Translate widget for the whole page (the header can render several switchers).
function ensureTranslate() {
  if (document.getElementById(MOUNT_ID)) return;
  const mount = document.createElement('div');
  mount.id = MOUNT_ID;
  mount.className = 'google-translate-hidden';
  mount.setAttribute('aria-hidden', 'true');
  document.body.appendChild(mount);
  window.googleTranslateElementInit = () => {
    if (!window.google?.translate?.TranslateElement) return;
    new window.google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,ar', autoDisplay: false }, MOUNT_ID);
  };
  const script = document.createElement('script');
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.head.appendChild(script);
}

function setTranslateCookie(next: Language) {
  const host = window.location.hostname;
  const domains = ['', `;domain=${host}`, `;domain=.${host}`];
  if (next === 'ar') {
    document.cookie = 'googtrans=/en/ar;path=/;max-age=31536000;SameSite=Lax';
    if (host.includes('.')) document.cookie = `googtrans=/en/ar;path=/;domain=${host};max-age=31536000;SameSite=Lax`;
  } else {
    domains.forEach(d => { document.cookie = `googtrans=;path=/${d};max-age=0;SameSite=Lax`; });
  }
}

export function LanguageSwitcher({ mobile = false, onSelect }: { mobile?: boolean; onSelect?: () => void }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const current = readLanguage();
    setLanguage(current);
    document.documentElement.lang = current;
    document.documentElement.dir = current === 'ar' ? 'rtl' : 'ltr';
    ensureTranslate();
  }, []);

  const changeLanguage = (next: Language) => {
    if (next === language) return;
    try { window.localStorage.setItem('site-language', next); } catch { /* Storage may be blocked in private modes. */ }
    setTranslateCookie(next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
    setLanguage(next);
    onSelect?.();
    const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (select) {
      // Google's original-language option has an empty value.
      select.value = next === 'ar' ? 'ar' : '';
      select.dispatchEvent(new Event('change', { bubbles: true }));
      window.setTimeout(() => window.location.reload(), 350);
    } else {
      window.location.reload();
    }
  };

  return <div className={`nb-lang${mobile ? ' nb-lang--mobile' : ''}`} role="group" aria-label="Website language" translate="no">
    <Icon name="globe" aria-hidden="true" />
    <button type="button" aria-pressed={language === 'en'} onClick={() => changeLanguage('en')} lang="en">EN</button>
    <button type="button" aria-pressed={language === 'ar'} onClick={() => changeLanguage('ar')} lang="ar">العربية</button>
  </div>;
}

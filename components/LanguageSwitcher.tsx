'use client';
import { useEffect, useState } from 'react';
import { Icon } from './Icon';

type Language = 'en' | 'ar';
declare global { interface Window { google?: any; googleTranslateElementInit?: () => void } }

function readLanguage(): Language {
  if (typeof document === 'undefined') return 'en';
  return document.cookie.split(';').map(v => v.trim()).some(v => v.startsWith('googtrans=/en/ar')) ? 'ar' : 'en';
}

export function LanguageSwitcher({ mobile = false, onSelect }: { mobile?: boolean; onSelect?: () => void }) {
  const [language, setLanguage] = useState<Language>('en');
  useEffect(() => {
    const initialLanguage = readLanguage();
    setLanguage(initialLanguage);
    document.documentElement.lang = initialLanguage;
    document.documentElement.dir = initialLanguage === 'ar' ? 'rtl' : 'ltr';
    const boot = () => {
      if (!window.google?.translate?.TranslateElement) return;
      document.querySelectorAll<HTMLElement>('.google-translate-hidden').forEach((mount, index) => {
        if (!mount.dataset.ready) {
          if (!mount.id) mount.id = `google_translate_element_${index}`;
          new window.google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,ar', autoDisplay: false, layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE }, mount.id);
          mount.dataset.ready = 'true';
        }
      });
    };
    window.googleTranslateElementInit = boot;
    if (!document.querySelector('script[data-google-translate]')) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true; script.dataset.googleTranslate = 'true'; document.head.appendChild(script);
    } else boot();
    return () => { window.googleTranslateElementInit = undefined; };
  }, []);

  const changeLanguage = (next: Language) => {
    const value = next === 'ar' ? '/en/ar' : '/en/en';
    // Google Translate reads this cookie on every route, so language stays consistent site-wide.
    document.cookie = `googtrans=${value};path=/;max-age=31536000;SameSite=Lax`;
    document.cookie = `googtrans=${value};path=/;domain=${window.location.hostname};max-age=31536000;SameSite=Lax`;
    document.documentElement.lang = next;
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
    setLanguage(next);
    const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (select) {
      select.value = next;
      select.dispatchEvent(new Event('change', { bubbles: true }));
      window.setTimeout(() => window.location.reload(), 250);
    } else {
      window.location.reload();
    }
    onSelect?.();
  };

  const target: Language = language === 'en' ? 'ar' : 'en';
  return <>
    <div className="google-translate-hidden" aria-hidden="true" />
    <div className={`language-switcher language-switcher-single ${mobile ? 'language-switcher-mobile' : ''}`} role="group" aria-label="Change website language">
      <span className="language-globe"><Icon name="globe" /></span>
      <button type="button" onClick={() => changeLanguage(target)} aria-label={target === 'ar' ? 'Switch website to Arabic' : 'Switch website to English'}>
        {target === 'ar' ? 'العربية' : 'English'}
      </button>
      <Icon name="chevron-down" />
    </div>
  </>;
}

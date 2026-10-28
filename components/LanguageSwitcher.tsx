'use client';

import { useEffect, useState } from 'react';
import { Icon } from './Icon';

type Language = 'en' | 'ar';
const STORAGE_KEY = 'site-language';

function readLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  try { return window.localStorage.getItem(STORAGE_KEY) === 'ar' ? 'ar' : 'en'; }
  catch { return 'en'; }
}

function applyLanguage(next: Language, animate = false) {
  document.documentElement.lang = next;
  document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dataset.siteLanguage = next;
  if (animate && document.body) {
    // Replay a short, subtle reveal when the visitor changes language.
    document.body.classList.remove('language-switching');
    void document.body.offsetWidth;
    document.body.classList.add('language-switching');
    window.setTimeout(() => document.body?.classList.remove('language-switching'), 360);
  }
  window.dispatchEvent(new CustomEvent('site-language-change', { detail: { language: next } }));
}

export function LanguageSwitcher({ mobile = false, onSelect }: { mobile?: boolean; onSelect?: () => void }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const current = readLanguage();
    setLanguage(current);
    applyLanguage(current);
    const syncLanguage = (event: Event) => {
      const detail = (event as CustomEvent<{ language?: Language }>).detail;
      setLanguage(detail?.language === 'ar' ? 'ar' : 'en');
    };
    window.addEventListener('site-language-change', syncLanguage);
    return () => window.removeEventListener('site-language-change', syncLanguage);
  }, []);

  const changeLanguage = (next: Language) => {
    if (next === language) { onSelect?.(); return; }
    try { window.localStorage.setItem(STORAGE_KEY, next); } catch { /* Storage may be blocked in private modes. */ }
    setLanguage(next);
    applyLanguage(next, true);
    onSelect?.();
  };

  return <div className={`nb-lang${mobile ? ' nb-lang--mobile' : ''}`} role="group" aria-label={language === 'ar' ? 'لغة الموقع' : 'Website language'} translate="no">
    <Icon name="globe" aria-hidden="true" />
    <button type="button" aria-pressed={language === 'en'} onClick={() => changeLanguage('en')} lang="en">EN</button>
    <button type="button" aria-pressed={language === 'ar'} onClick={() => changeLanguage('ar')} lang="ar">العربية</button>
  </div>;
}

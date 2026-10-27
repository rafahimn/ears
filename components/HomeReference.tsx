'use client';

import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { SocialShowcase } from './SocialShowcase';
import { homeReferenceMarkup } from './home-reference-markup';
import { sitePath, markupWithBasePath } from '../lib/paths';

const WHATSAPP = 'https://wa.me/971552052347';
const COMPANY = 'Emirates Aluminium Shutter LLC';

function whatsappUrl(message: string) {
  return `${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export function HomeReference() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.dars-home-reference');
    if (!root) return;

    // Make each service image itself a direct link to its matching service page.
    const serviceRoutes: Record<string, string> = {
      'rolling shutters': '/shutter/', 'awning': '/awning/', 'awnings': '/awning/',
      'canopy': '/canopy/', 'canopies': '/canopy/', 'garage doors': '/garage/',
      'gate motors': '/motor/', 'motor': '/motor/', 'repair & maintenance': '/repair/',
      'repair and maintenance': '/repair/', 'aluminium works': '/aluminium-works/',
      'aluminium': '/aluminium-works/', 'steel works': '/steel-work/',
      'steel work': '/steel-work/', 'polycarbonate': '/polycarbonate/',
    };
    root.querySelectorAll<HTMLElement>('.dars-service-card').forEach((card) => {
      const image = card.querySelector<HTMLElement>('.dars-service-card__image');
      const title = card.querySelector('h3')?.textContent?.trim().toLowerCase() || image?.querySelector('.dars-service-card__image-label')?.textContent?.trim().toLowerCase() || '';
      const href = serviceRoutes[title] || (title.includes('rolling') || title.includes('shutter') ? '/shutter/' : title.includes('awning') ? '/awning/' : title.includes('canopy') || title.includes('pergola') ? '/canopy/' : title.includes('garage') ? '/garage/' : title.includes('motor') || title.includes('gate') ? '/motor/' : title.includes('repair') || title.includes('maintenance') ? '/repair/' : title.includes('aluminium') || title.includes('aluminum') ? '/aluminium-works/' : title.includes('steel') ? '/steel-work/' : title.includes('polycarbonate') ? '/polycarbonate/' : undefined);
      if (!image || !href || image.querySelector('.dars-service-card__image-link')) return;
      const link = document.createElement('a');
      link.className = 'dars-service-card__image-link';
      link.href = sitePath(href);
      link.setAttribute('aria-label', `Explore ${title}`);
      image.appendChild(link);
    });

    const getSelectedService = () => {
      const active = root.querySelector<HTMLButtonElement>('.dars-quote-v2__option.is-active');
      const detail = active?.getAttribute('data-service');
      const label = active?.querySelector('.dars-quote-v2__option-label')?.textContent
        || active?.textContent?.replace(/✓/g, '').trim()
        || 'Garage Doors';
      return { detail: detail || label, label };
    };

    const updateMainQuote = () => {
      const selected = getSelectedService();
      const link = root.querySelector<HTMLAnchorElement>('#darsHeroQuoteButton');
      if (link) {
        link.href = whatsappUrl(`Hello ${COMPANY}, I would like to discuss ${selected.detail}. I will send photos, approximate dimensions and my location.`);
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
    };

    root.querySelectorAll<HTMLButtonElement>('.dars-quote-v2__option').forEach((option) => {
      option.setAttribute('aria-pressed', option.classList.contains('is-active') ? 'true' : 'false');
    });
    updateMainQuote();

    root.querySelectorAll<HTMLElement>('.dars-packages-v3__price-number[data-price]').forEach((price) => {
      const value = Number(price.dataset.price);
      if (Number.isFinite(value)) price.textContent = value.toLocaleString('en-US');
    });

    root.querySelectorAll<HTMLAnchorElement>('.dars-packages-v3__whatsapp').forEach((link) => {
      const name = link.dataset.packageName || 'Garage door package';
      const price = link.dataset.packagePrice || 'Please confirm the price';
      link.href = whatsappUrl(`Hello ${COMPANY}, please confirm the exact quotation for ${name}. The displayed starting price is ${price}; please confirm final pricing after measurements and site review.`);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });

    root.querySelectorAll<HTMLAnchorElement>('.dars-coverage-card[data-location]').forEach((link) => {
      const location = link.dataset.location || 'the UAE';
      link.href = whatsappUrl(`Hello ${COMPANY}, please confirm service availability in ${location}. I can share my location pin and project details.`);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });

    const googleReviewsLink = Array.from(root.querySelectorAll<HTMLAnchorElement>('.dars-reviews a'))
      .find((link) => link.textContent?.toLowerCase().includes('open google reviews'));
    if (googleReviewsLink) {
      googleReviewsLink.href = 'https://www.google.com/search?q=Emirates+Aluminium+Shutter+LLC+reviews';
      googleReviewsLink.target = '_blank';
      googleReviewsLink.rel = 'noopener noreferrer';
    }

    const onClick = (event: Event) => {
      const target = event.target as Element | null;
      if (!target) return;

      const option = target.closest<HTMLButtonElement>('.dars-quote-v2__option');
      if (option && root.contains(option)) {
        root.querySelectorAll('.dars-quote-v2__option').forEach((item) => {
          item.classList.remove('is-active');
          item.setAttribute('aria-pressed', 'false');
        });
        option.classList.add('is-active');
        option.setAttribute('aria-pressed', 'true');
        updateMainQuote();
        return;
      }

      const packageTab = target.closest<HTMLButtonElement>('.dars-packages-v3__tab');
      if (packageTab && root.contains(packageTab)) {
        const key = packageTab.dataset.package;
        if (!key) return;
        root.querySelectorAll<HTMLButtonElement>('.dars-packages-v3__tab').forEach((tab) => {
          const active = tab === packageTab;
          tab.classList.toggle('is-active', active);
          tab.setAttribute('aria-selected', active ? 'true' : 'false');
          tab.tabIndex = active ? 0 : -1;
        });
        root.querySelectorAll<HTMLElement>('.dars-packages-v3__content[data-panel]').forEach((panel) => {
          const active = panel.dataset.panel === key;
          panel.classList.toggle('is-active', active);
          panel.hidden = !active;
        });
        return;
      }

      const faqQuestion = target.closest<HTMLButtonElement>('.dars-faq-item__question');
      if (faqQuestion && root.contains(faqQuestion)) {
        const item = faqQuestion.closest<HTMLElement>('.dars-faq-item');
        if (!item) return;
        const shouldOpen = !item.classList.contains('is-open');
        root.querySelectorAll<HTMLElement>('.dars-faq-item').forEach((faq) => {
          faq.classList.remove('is-open');
          faq.querySelector('.dars-faq-item__question')?.setAttribute('aria-expanded', 'false');
        });
        if (shouldOpen) {
          item.classList.add('is-open');
          faqQuestion.setAttribute('aria-expanded', 'true');
        }
      }
    };

    root.addEventListener('click', onClick);
    return () => root.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    const mount = document.getElementById('dars-social-showcase-mount');
    if (!mount) return;
    const socialRoot = createRoot(mount);
    socialRoot.render(<SocialShowcase />);
    return () => socialRoot.unmount();
  }, []);

  return <div className="dars-home-reference" dangerouslySetInnerHTML={{ __html: markupWithBasePath(homeReferenceMarkup) }} />;
}

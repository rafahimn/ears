import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from './site';

const DEFAULT_SOCIAL_IMAGE = '/wp-content/uploads/2026/10/2149207752-1-1.jpg';

export type SeoPageInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

/** Consistent, page-specific SEO metadata for the static-exported site. */
export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_SOCIAL_IMAGE,
  noIndex = false,
}: SeoPageInput): Metadata {
  const canonicalPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
  const url = `${SITE_URL}${canonicalPath}`;
  const brandedTitle = title.toLowerCase().includes(SITE_NAME.toLowerCase()) ? title : `${title} | ${SITE_NAME}`;
  return {
    title: { absolute: brandedTitle },
    description,
    ...(keywords.length ? { keywords } : {}),
    alternates: { canonical: canonicalPath },
    robots: noIndex ? { index: false, follow: true, googleBot: { index: false, follow: true } } : { index: true, follow: true },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_AE',
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: brandedTitle,
      description,
      images: [image],
    },
  };
}

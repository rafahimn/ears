import { COORDINATES, EMAIL, MAP_URL, PHONE, SITE_NAME, SITE_URL, coverage } from '../lib/site';

function jsonLd(value: unknown): string {
  // Escape angle brackets so text cannot accidentally terminate the script tag.
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

export function BusinessStructuredData() {
  const [latitude, longitude] = COORDINATES.split(',').map((part) => Number(part.trim()));
  const businessId = `${SITE_URL}/#business`;
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      '@id': businessId,
      name: SITE_NAME,
      url: SITE_URL,
      telephone: PHONE,
      email: EMAIL,
      logo: `${SITE_URL}/brand/logo.png`,
      image: `${SITE_URL}/wp-content/uploads/2026/10/2149207752-1-1.jpg`,
      hasMap: MAP_URL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '43 Al Nakhal Rd, Naif, Deira',
        addressLocality: 'Dubai',
        addressRegion: 'Dubai',
        addressCountry: 'AE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude,
        longitude,
      },
      areaServed: coverage.map((name) => ({ '@type': 'City', name })),
      knowsAbout: [
        'Rolling shutter supply and installation',
        'Garage door installation and repair',
        'Gate motor and access automation',
        'Canopy and awning solutions',
        'Aluminium and steel fabrication',
        'Shutter and door maintenance',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { '@id': businessId },
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />;
}

export function ServiceStructuredData({ name, description, path }: { name: string; description: string; path: string }) {
  const canonicalPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
  const url = `${SITE_URL}${canonicalPath}`;
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name,
      description,
      url,
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: coverage.map((city) => ({ '@type': 'City', name: city })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services/` },
        { '@type': 'ListItem', position: 3, name, item: url },
      ],
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />;
}

export function BreadcrumbStructuredData({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '/' : `/${item.path.replace(/^\/+|\/+$/g, '')}/`}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />;
}

export function BlogPostingStructuredData({ headline, description, image, url, keywords }: { headline: string; description: string; image: string; url: string; keywords: string[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    image: image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Person', name: 'RA Fahim', url: 'https://rafahim.com/' },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/brand/logo.png` } },
    keywords: keywords.join(', '),
    inLanguage: 'en-AE',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />;
}

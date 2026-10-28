import type { MetadataRoute } from 'next';
import { SITE_URL, serviceDetails, services } from '../lib/site';
import { blogPosts } from '../lib/blog-posts';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const fixedPages: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/services/', priority: 0.95, changeFrequency: 'weekly' },
    { path: '/shutter/', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/garage/', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/motor/', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/repair/', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/about-us/', priority: 0.65, changeFrequency: 'monthly' },
    { path: '/blog/', priority: 0.75, changeFrequency: 'weekly' },
    { path: '/privacy-policy/', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/terms-conditions/', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/rafahim/', priority: 0.25, changeFrequency: 'monthly' },
  ];

  const dedicatedServiceRoutes = new Set(['shutter', 'garage', 'motor', 'repair']);
  const additionalServicePages = services
    .filter((service) => !dedicatedServiceRoutes.has(service.slug) && Boolean(serviceDetails[service.slug]))
    .map((service) => ({ path: `/${service.slug}/`, priority: 0.8, changeFrequency: 'monthly' as const }));

  const articlePages = blogPosts.map((post) => ({ path: `/blog/${post.slug}/`, priority: 0.65, changeFrequency: 'monthly' as const }));

  return [...fixedPages, ...additionalServicePages, ...articlePages].map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));
}

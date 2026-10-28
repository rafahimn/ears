import type { Metadata } from 'next';
import Link from 'next/link';
import { sitePath } from '../../lib/paths';
import { Reveal } from '../../components/Reveal';
import { BreadcrumbStructuredData } from '../../components/StructuredData';
import { createPageMetadata } from '../../lib/seo';
import { PAGE_KEYWORDS } from '../../lib/seo-keywords';
import { blogPosts } from '../../lib/blog-posts';

export const metadata: Metadata = createPageMetadata({
  title: 'Shutter & Garage Door Guides UAE',
  description: 'Guides to rolling shutter benefits, security grills, high-speed doors, sectional garage doors, shutter motors and automatic door maintenance in Dubai and UAE.',
  path: '/blog/',
  keywords: [...PAGE_KEYWORDS.blog, 'Dubai shutter guides', 'garage door guides UAE', 'aluminium fabrication advice Dubai'],
});

export default function BlogPage() {
  return <>
    <BreadcrumbStructuredData items={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/blog/' }]} />
    <section className="page-hero-wrap blog-hero-wrap">
      <div className="container">
        <div className="page-hero-box blog-hero-box">
          <div>
            <span className="eyebrow eyebrow-dark">INSIGHTS & SERVICE GUIDES</span>
            <h1>Practical guides for <em>better project decisions.</em></h1>
            <p>Explore clear, service-specific advice on shutters, doors, automation, shade and custom fabrication for Dubai properties.</p>
          </div>
          <div className="page-hero-art blog-page-hero-art"><img src={sitePath('/blog/blog-hero-dubai.webp')} alt="Premium aluminium rolling shutter at a modern Dubai residence at golden hour" fetchPriority="high" decoding="async" /></div>
        </div>
      </div>
    </section>
    <section className="section blog-listing-section">
      <div className="container">
        <div className="blog-listing-intro"><span className="eyebrow eyebrow-dark">THE SERVICE LIBRARY</span><h2>Choose a guide <em>for your project.</em></h2><p>Each article explains what to compare, what to prepare and what to confirm before work begins.</p></div>
        <div className="article-grid blog-article-grid">
          {blogPosts.map((post, index) => <Reveal key={post.slug} delay={index * 45}>
            <Link className="article-card blog-card-link" href={`/blog/${post.slug}/`}>
              <div className="article-image"><img src={sitePath(post.image)} alt={post.title} loading={index > 2 ? 'lazy' : 'eager'} /></div>
              <div className="article-copy"><h2>{post.title}</h2><p>{post.description}</p></div>
            </Link>
          </Reveal>)}
        </div>
      </div>
    </section>
  </>;
}

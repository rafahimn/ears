import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '../../../components/Icon';
import { BreadcrumbStructuredData, BlogPostingStructuredData } from '../../../components/StructuredData';
import { createPageMetadata } from '../../../lib/seo';
import { SITE_URL, services, waLink } from '../../../lib/site';
import { blogPosts, getBlogPost } from '../../../lib/blog-posts';
import { sitePath } from '../../../lib/paths';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`,
    image: post.image,
    keywords: [...post.keywords, 'Emirates Aluminium Shutter LLC', 'Dubai UAE'],
  });
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const relatedService = services.find((service) => service.slug === post.serviceSlug);
  const articleUrl = `${SITE_URL}/blog/${post.slug}/`;

  return <>
    <BreadcrumbStructuredData items={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/blog/' }, { name: post.title, path: `/blog/${post.slug}/` }]} />
    <BlogPostingStructuredData headline={post.title} description={post.description} image={post.image} url={articleUrl} keywords={post.keywords} />
    <article className="blog-detail-page">
      <section className="blog-detail-hero-wrap">
        <div className="container">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="blog-breadcrumb-separator" aria-hidden="true">/</span><Link href="/blog/">Insights</Link><span className="blog-breadcrumb-separator" aria-hidden="true">/</span><span>{post.title}</span></nav>
          <div className="blog-detail-hero">
            <div className="blog-detail-hero-copy">
              <span className="eyebrow eyebrow-dark">SERVICE GUIDE · DUBAI & UAE</span>
              <h1>{post.title}</h1>
              <p className="blog-detail-lead">{post.description}</p>
              <p className="blog-detail-byline">Written by <a href="https://rafahim.com/" target="_blank" rel="noopener noreferrer">RA Fahim</a></p>
            </div>
            <div className="blog-detail-hero-image"><img src={sitePath(post.image)} alt={post.title} fetchPriority="high" /></div>
          </div>
        </div>
      </section>
      <section className="section blog-detail-content-section">
        <div className="container blog-detail-layout">
          <div className="blog-article-prose">
            <p className="blog-article-intro">{post.intro}</p>
            {post.sections.map((section, index) => <section className="blog-article-section" key={section.heading}>
              <div className="blog-article-section-number">{String(index + 1).padStart(2, '0')}</div>
              <div><h2>{section.heading}</h2><p>{section.body}</p><ul>{section.points.map((point) => <li key={point}><Icon name="check"/>{point}</li>)}</ul></div>
            </section>)}
            <div className="blog-article-conclusion"><span className="eyebrow eyebrow-dark">NEXT STEP</span><p>{post.conclusion}</p></div>
            <p className="blog-detail-byline blog-detail-byline-bottom">Article by <a href="https://rafahim.com/" target="_blank" rel="noopener noreferrer">RA Fahim</a></p>
          </div>
          <aside className="blog-article-sidebar">
            <span className="eyebrow eyebrow-dark">RELATED SERVICE</span>
            <img src={sitePath(relatedService?.image || post.image)} alt={relatedService?.title || post.title} loading="lazy" />
            <h2>{relatedService?.title || 'Explore our services'}</h2>
            <p>Discuss your opening, site conditions and requirements with the team before confirming the final specification.</p>
            {relatedService && <Link className="btn btn-outline-dark" href={`/${relatedService.slug}/`}>Explore Service <Icon name="arrow"/></Link>}
            <a className="btn btn-gold" href={waLink(`Hello, I would like to discuss ${relatedService?.title || post.title}.`)} target="_blank" rel="noreferrer"><Icon name="whatsapp"/> Ask for a Quote</a>
          </aside>
        </div>
      </section>
      <section className="section blog-related-section"><div className="container"><div className="blog-related-heading"><div><span className="eyebrow eyebrow-dark">KEEP EXPLORING</span><h2>More practical <em>service guides.</em></h2></div><Link href="/blog/">All articles <Icon name="arrow"/></Link></div><div className="blog-related-grid">{blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3).map((item) => <Link key={item.slug} href={`/blog/${item.slug}/`} className="blog-related-card"><img src={sitePath(item.image)} alt={item.title} loading="lazy"/><span>{item.title}</span></Link>)}</div></div></section>
    </article>
  </>;
}

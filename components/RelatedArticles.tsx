import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blogPosts';

interface Props {
  currentSlug: string;
  category: string;
}

export function RelatedArticles({ currentSlug, category }: Props) {
  const related = BLOG_POSTS.filter(
    p => p.slug !== currentSlug && p.category === category
  ).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="qc-related-articles">
      <div className="qc-container">
        <h2 className="qc-related-articles-title">Related Articles</h2>
        <div className="qc-related-articles-grid">
          {related.map(post => (
            <article key={post.slug} className="qc-blog-card">
              <div className="qc-blog-card-image">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    style={{ objectFit: 'cover' }}
                  />
                ) : null}
              </div>
              <div className="qc-blog-card-body">
                <div className="qc-blog-card-meta">
                  <span className="qc-blog-tag">{post.category.toUpperCase()}</span>
                  <span className="qc-blog-date">
                    <img src="/icons/calender-blue.png" alt="" style={{ width: 28, height: 28 }} />
                    {post.date}
                  </span>
                </div>
                <div className="qc-blog-card-title-container">
                  <h3 className="qc-blog-card-title">{post.title}</h3>
                </div>
                <Link href={post.href} className="qc-button-gradient-border">
                  Read more
                  <img src="/icons/arrow-link.png" alt="" style={{ width: 28, height: 28 }} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

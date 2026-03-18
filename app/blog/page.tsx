'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { BLOG_POSTS } from '@/lib/blogPosts';

const PAGE_SIZE = 5;

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export default function BlogPage() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(BLOG_POSTS.length / PAGE_SIZE);
  const shown = BLOG_POSTS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <div className="qc-page">
      <main>
        {/* ── Hero ── */}
        <section className="qc-blog-hero">
          <div className="qc-container qc-blog-hero-inner">
            <Breadcrumb
              crumbs={[
                { label: 'Home', href: '/' },
                { label: 'Insights', href: '#', inactive: true },
                { label: 'Blog', href: '/blog' },
              ]}
            />
            <h1 className="qc-blog-title">Blog</h1>
            <p className="qc-blog-subtitle">
              QuitCode is an Automation &amp; AI Company that helps high-value service firms - from consulting agencies
              to private schools - transform fragmented operations into connected, intelligent systems.
            </p>
          </div>
        </section>

        {/* ── Posts grid ── */}
        <section className="qc-blog-section">
          <div className="qc-container">
            <div className="qc-blog-grid">
              {shown.map((post) => (
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
                        <img src="/icons/calender-blue.png" alt="Calender blue icon" style={{width: 28, height: 28}} />
                        {post.date}
                      </span>
                    </div>

                    <div className='qc-blog-card-title-container'>
                      <h2 className="qc-blog-card-title">{post.title}</h2>
                    </div> 

                    <Link href={post.href} className="qc-button-gradient-border">
                      Read more
                      <img src="/icons/arrow-link.png" alt="Arrow link violet" style={{width: 28, height: 28}} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="qc-blog-pagination">
                <div className="qc-dots">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`qc-dot${i === page ? ' qc-dot-active' : ''}`}
                      onClick={() => setPage(i)}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="qc-case-nav-buttons">
                  <button
                    type="button"
                    className="qc-case-btn qc-case-btn-prev"
                    onClick={() => setPage(p => Math.max(0, p - 1))}
                    disabled={page === 0}
                    aria-label="Previous page"
                  >
                    <img src="/icons/arrow-left-purple.png" alt="Arrow left purple" style={{width: 28, height: 28}} />
                  </button>
                  <button
                    type="button"
                    className="qc-case-btn qc-case-btn-next"
                    onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                    disabled={page === totalPages - 1}
                    aria-label="Next page"
                  >
                    <img src="/icons/arrow-right-purple.png" alt="Arrow right purple" style={{width: 28, height: 28}} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="qc-glass-cta" aria-label="Get a system like this">
          <div className="qc-glass-cta-blobs" aria-hidden="true" />
          <div className="qc-glass-cta-icons" aria-hidden="true">
            <img src="/glass-cta/Style_Swirl.png" alt="" className="qc-glass-cta-icon qc-glass-cta-icon-1" />
            <img src="/glass-cta/Asset_Icon.png" alt="" className="qc-glass-cta-icon qc-glass-cta-icon-2" />
            <img src="/glass-cta/Style_Moon.png" alt="" className="qc-glass-cta-icon qc-glass-cta-icon-3" />
            <img src="/glass-cta/Style_Swirl.png" alt="" className="qc-glass-cta-icon qc-glass-cta-icon-4" />
            <img src="/glass-cta/Style_Moon.png" alt="" className="qc-glass-cta-icon qc-glass-cta-icon-5" />
            <img src="/glass-cta/Asset_Icon.png" alt="" className="qc-glass-cta-icon qc-glass-cta-icon-6" />
          </div>
          <div className="qc-glass-cta-glass qc-cs-cta-glass">
            <h2 className="qc-glass-cta-title">
              Want a system like this for
              <br />
              your operations?{' '}
              <span style={{ display: 'inline-flex', verticalAlign: 'middle', marginLeft: 6 }}>
                <Image src="/glass-cta/Asset_Icon.png" alt="" width={32} height={32} unoptimized />
              </span>
            </h2>
            <p className="qc-cs-cta-subtitle">
              We help service organizations turn manual, high-risk processes into structured
              systems your team can actually run.
            </p>
            <a
              href="https://calendly.com/quitcode/30min"
              target="_blank"
              rel="noreferrer"
              className="qc-cs-cta-btn"
            >
              <span>Talk to Roman</span>
<img src="/icons/arrow-right.png" alt="arrow right white" style={{width: 28, height: 28}}/>            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

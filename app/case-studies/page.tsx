'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CASE_STUDIES } from '@/lib/caseStudies';

const PAGE_SIZE = 5;

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export default function CaseStudiesPage() {
  const [visible, setVisible] = useState(PAGE_SIZE);

  const shown = CASE_STUDIES.slice(0, visible);
  const hasMore = visible < CASE_STUDIES.length;

  return (
    <div className="qc-page">
      <main>
        {/* ── Hero ── */}
        <section className="qc-cs-hero" style={{paddingTop: 145}}>
          <div className="qc-container qc-cs-hero-inner">
            <Breadcrumb
              crumbs={[
                { label: 'Home', href: '/' },
                { label: 'Insights', href: '/case-studies', inactive: true },
                { label: 'Case Studies', href: '/case-studies' },
              ]}
            />
            <span className="qc-cs-pill">CASES</span>
            <h1 className="qc-cs-title">Case Studies</h1>
            <p className="qc-cs-subtitle">
              QuitCode is an Automation &amp; AI Company that helps high-value service firms - from consulting agencies
              to private schools - transform fragmented operations into connected, intelligent systems.
            </p>
          </div>
        </section>

        {/* ── Articles ── */}
        <section className="qc-cs-articles-section">
          <div className="qc-container">
            <div className="qc-cs-list">
              {shown.map((article) => (
                <article key={article.slug} className="qc-cs-card">
                  <div className="qc-cs-card-image">
                    <Image
                      src={article.cardImage}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 340px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  <div className="qc-cs-card-body">
                    <div className="qc-cs-card-top">
                      <span className="qc-cs-tag">{article.industryLabel}</span>
                    </div>

                    <h2 className="qc-cs-card-title">{article.title}</h2>

                    <div className="qc-cs-card-content">
                      <div className="qc-cs-card-sections">
                        <div>
                          <div className="qc-case-label">THE CHALLENGE</div>
                          <p className="qc-case-text">{article.challenge}</p>
                        </div>
                        <div>
                          <div className="qc-case-label qc-case-label-solution">THE SOLUTION</div>
                          <p className="qc-case-text">{article.solution}</p>
                        </div>
                      </div>
                      <p className="qc-cs-card-description">{article.description}</p>
                    </div>

                    <div className="qc-cs-card-footer">
                      <span className="qc-cs-location">
                        <img src="/icons/location-icon.png" alt="Location mark" style={{height: 28, width: 'auto'
                        }} />
                        {article.location}
                      </span>
                      <Link href={`/case-studies/${article.slug}`} className="qc-cs-view-btn">
                        View project
                        <img src="/icons/arrow-link.png" alt="Arrow gradient icon" style={{width: 28, height: 28}} />
                        
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {hasMore && (
              <div className="qc-cs-load-more-wrap">
                <button
                  type="button"
                  className="qc-cs-load-more"
                  onClick={() => setVisible(v => v + PAGE_SIZE)}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ── Want a system like this ── */}
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
              your operations?
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
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { getCaseStudy, CASE_STUDIES } from '@/lib/caseStudies';
import { Breadcrumb } from '@/components/Breadcrumb';

function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5" />
      <path d="M12 11v5M12 8h.01" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5" />
      <path d="M8 12l3 3 5-5" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5" transform="rotate(45 12 12)" />
      <circle cx="12" cy="12" r="2.5" fill="#3b82f6" />
    </svg>
  );
}

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const relatedCases = CASE_STUDIES.filter(c => c.slug !== cs.slug).slice(0, 3);

  return (
    <div className="qc-page">
      <main>
        {/* ── Hero ── */}
        <section className="qc-csd-hero">
          <div className="qc-csd-container">
            <Breadcrumb
              crumbs={[
                { label: 'Home', href: '/' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: cs.title, href: `/case-studies/${cs.slug}` },
              ]}
            />
            <h1 className="qc-csd-title">
              <span className="qc-csd-title-gradient">{cs.titleGradient}</span>{' '}
              {cs.titlePlain}
            </h1>
            <p className="qc-csd-subtitle">{cs.subtitle}</p>

            <div className="qc-csd-meta-row">
              <div className="qc-csd-meta-item">
                <span className="qc-csd-meta-label">INDUSTRY</span>
                <span className="qc-csd-meta-value">{cs.industry}</span>
              </div>
              <div className="qc-csd-meta-divider" aria-hidden />
              <div className="qc-csd-meta-item">
                <span className="qc-csd-meta-label">PROCESS</span>
                <span className="qc-csd-meta-value qc-csd-meta-value-gradient">{cs.process}</span>
              </div>
              <div className="qc-csd-meta-divider" aria-hidden />
              <div className="qc-csd-meta-item">
                <span className="qc-csd-meta-label">STACK</span>
                <div className="qc-csd-stack-logos">
                  {cs.stack.map(item => (
                    <Image key={item.name} src={item.logo} alt={item.name} width={80} height={24} style={{ height: 22, width: 'auto', objectFit: 'contain' }} />
                  ))}
                </div>
              </div>
            </div>

            <div className="qc-csd-hero-image">
              <Image
                src={cs.heroImage}
                alt={cs.title}
                width={780}
                height={440}
                style={{ width: '100%', height: 'auto', borderRadius: 16, border: '1px solid #e5e7eb', boxShadow: '0 4px 32px rgba(17,24,39,0.08)' }}
              />
            </div>
          </div>
        </section>

        {/* ── Project snapshot ── */}
        <section className="qc-csd-section">
          <div className="qc-csd-container">
            <h2 className="qc-csd-h2">Project snapshot</h2>
            <div className="qc-csd-snapshot-grid">
              <div className="qc-csd-snapshot-col">
                <span className="qc-csd-snapshot-label">CLIENT</span>
                <p className="qc-csd-snapshot-text">{cs.snapshot.client}</p>
              </div>
              <div className="qc-csd-snapshot-col">
                <span className="qc-csd-snapshot-label">CHALLENGE</span>
                <p className="qc-csd-snapshot-text">{cs.snapshot.challenge}</p>
              </div>
              <div className="qc-csd-snapshot-col">
                <span className="qc-csd-snapshot-tag qc-csd-snapshot-tag-solution">SOLUTION</span>
                <p className="qc-csd-snapshot-text">{cs.snapshot.solution}</p>
              </div>
              <div className="qc-csd-snapshot-col">
                <span className="qc-csd-snapshot-tag qc-csd-snapshot-tag-outcome">OUTCOME</span>
                <p className="qc-csd-snapshot-text">{cs.snapshot.outcome}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Client context ── */}
        <section className="qc-csd-section">
          <div className="qc-csd-container">
            <h2 className="qc-csd-h2">Client context</h2>
            {cs.clientContext.map((para, i) => (
              <p key={i} className="qc-csd-para">{para}</p>
            ))}
          </div>
        </section>

        {/* ── Starting point ── */}
        <section className="qc-csd-section">
          <div className="qc-csd-container">
            <h2 className="qc-csd-h2">Starting point</h2>
            {cs.startingPoint.intro.split('\n\n').map((para, i) => (
              <p key={i} className="qc-csd-para">{para}</p>
            ))}
            <ul className="qc-csd-icon-list">
              {cs.startingPoint.items.map((item, i) => (
                <li key={i} className="qc-csd-icon-list-item">
                  <span className="qc-csd-icon-list-icon"><DiamondIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Catalyst for change ── */}
        <section className="qc-csd-section">
          <div className="qc-csd-container">
            <h2 className="qc-csd-h2">Catalyst for change</h2>
            <p className="qc-csd-para">{cs.catalystForChange.subtitle}</p>
            <div className="qc-csd-info-cards">
              {cs.catalystForChange.items.map((item, i) => (
                <div key={i} className="qc-csd-info-card">
                  <span className="qc-csd-info-card-icon"><InfoIcon /></span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <p className="qc-csd-para qc-csd-para-mt">{cs.catalystForChange.closing}</p>
          </div>
        </section>

        {/* ── Goals & constraints ── */}
        <section className="qc-csd-section">
          <div className="qc-csd-container">
            <h2 className="qc-csd-h2">Goals &amp; constraints</h2>
            <p className="qc-csd-para">{cs.goalsConstraints.subtitle}</p>
            <ul className="qc-csd-check-list">
              {cs.goalsConstraints.items.map((item, i) => (
                <li key={i} className="qc-csd-check-item">
                  <span className="qc-csd-check-icon"><CheckIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="qc-csd-para qc-csd-para-mt">{cs.goalsConstraints.closing}</p>
          </div>
        </section>

        {/* ── Solution design ── */}
        <section className="qc-csd-section">
          <div className="qc-csd-container">
            <h2 className="qc-csd-h2">Solution design</h2>
            {cs.solutionDesign.intro.map((para, i) => (
              <p key={i} className="qc-csd-para">{para}</p>
            ))}
            <div className="qc-csd-features-grid">
              {cs.solutionDesign.features.map((feat, i) => (
                <div key={i} className="qc-csd-feature">
                  <span className="qc-csd-feature-title">{feat.title}</span>
                  <span className="qc-csd-feature-desc">{feat.description}</span>
                </div>
              ))}
            </div>
            <p className="qc-csd-emphasis">{cs.solutionDesign.emphasis}</p>
            <div className="qc-csd-images-grid">
              {cs.solutionDesign.images.map((src, i) => (
                <div key={i} className="qc-csd-image-cell">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    style={{ objectFit: 'cover', borderRadius: 10 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Implementation process ── */}
        <section className="qc-csd-section">
          <div className="qc-csd-container">
            <h2 className="qc-csd-h2">Implementation process</h2>
            {cs.implementation.intro.split('\n\n').map((para, i) => (
              <p key={i} className="qc-csd-para">{para}</p>
            ))}
            <ol className="qc-csd-steps-list">
              {cs.implementation.steps.map((step, i) => (
                <li key={i} className="qc-csd-step-item">
                  <span className="qc-csd-step-num">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="qc-csd-para qc-csd-para-mt">{cs.implementation.closing}</p>
          </div>
        </section>

        {/* ── Progress (chaos-style) ── */}
        <section className="qc-csd-section">
          <div className="qc-csd-container">
            <h2 className="qc-csd-h2">Progress</h2>
            <p className="qc-csd-para">{cs.progress.intro}</p>

            <div className="qc-csd-progress-wrap">
              <div className="qc-chaos-header-row">
                <div>
                  <div className="qc-chaos-label">BEFORE</div>
                </div>
                <div className="qc-chaos-arrow-spacer" aria-hidden />
                <div>
                  <div className="qc-chaos-label">AFTER</div>
                </div>
              </div>

              <ul className="qc-chaos-rows">
                {cs.progress.rows.map((row, i) => (
                  <li key={i} className="qc-chaos-row">
                    <div className="qc-chaos-card-before">{row.before}</div>
                    <div className="qc-chaos-arrow-join">
                      <Image
                        src="/chaos-arrow.png"
                        alt=""
                        width={120}
                        height={42}
                        className="qc-chaos-arrow-img"
                      />
                    </div>
                    <div className="qc-chaos-card-after">
                      <span className="qc-chaos-card-after-text">{row.after}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Measured impact ── */}
        <section className="qc-csd-section">
          <div className="qc-csd-container">
            <h2 className="qc-csd-h2">Measured impact</h2>
            <p className="qc-csd-para">{cs.measuredImpact.intro}</p>
            <div className="qc-csd-impact-grid">
              {cs.measuredImpact.stats.map((stat, i) => (
                <div key={i} className="qc-csd-impact-stat">
                  {stat.style === 'number' ? (
                    <>
                      <span className="qc-csd-impact-value">{stat.value}</span>
                      <span className="qc-csd-impact-label">{stat.label}</span>
                    </>
                  ) : (
                    <span className="qc-csd-impact-value-gradient">{stat.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Summary ── */}
        <section className="qc-csd-section qc-csd-section-last">
          <div className="qc-csd-container">
            <h2 className="qc-csd-h2">Summary</h2>
            {cs.summary.map((para, i) => (
              <p key={i} className="qc-csd-para">{para}</p>
            ))}
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

        {/* ── Real Firms ── */}
        {relatedCases.length > 0 && (
          <section className="qc-csd-related-section">
            <div className="qc-csd-container">
              <div className="qc-csd-related-header">
                <h2 className="qc-csd-related-title">
                  Real Firms.{' '}
                  <span className="qc-case-studies-title-gradient">Real Transformations.</span>
                </h2>
                <p className="qc-case-studies-subtitle">
                  Proof that intelligent automation delivers measurable impact.
                </p>
              </div>
              <div className="qc-csd-related-grid">
                {/* Show the current case + related if enough, else pad with current */}
                {[cs, ...relatedCases].slice(0, 3).map((item, i) => (
                  <Link key={item.slug + i} href={`/case-studies/${item.slug}`} className="qc-csd-related-card">
                    <Image
                      src={item.cardImage}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="qc-csd-related-overlay" aria-hidden />
                    <span className="qc-csd-related-pill">{item.industryLabel.toUpperCase()}</span>
                    <div className="qc-csd-related-bottom">
                      <p className="qc-csd-related-card-title">{item.title}</p>
                      <span className="qc-csd-related-arrow" aria-hidden>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

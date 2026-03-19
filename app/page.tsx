'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { JourneyFormSection } from '@/components/JourneyFormSection';
import { CASE_STUDIES } from '@/lib/caseStudies';
import React from 'react';

type SolutionKey = 'consulting' | 'creative' | 'education';

const solutionIcons: Record<string, string> = {
  'Client Management & Sales': '/icons/id-card-h.png',
  'Project Operations': '/icons/system.png',
  'Financial Operations': '/icons/blockchain.png',
  'HR & Internal Operations': '/icons/healthy-recognition.png',
  'Team & Resource Management': '/icons/every-user.png',
  'Marketing & Business Development': '/icons/user-business.png',
  'Creative Operations': '/icons/align-left-one.png',
  'Production & Delivery': '/icons/click.png',
  'Financial & Operations': '/icons/bank-card-one.png',
  'Student Enrollment & Onboarding': '/icons/every-user.png',
  'Course & Program Management': '/icons/align-left-one.png',
  'Finance & Reporting': '/icons/bank-card-one.png',
  'Staff Operations': '/icons/user-business.png',
};

const solutions: Record<SolutionKey, string[]> = {
  consulting: [
    'Client Management & Sales',
    'Project Operations',
    'Financial Operations',
    'HR & Internal Operations'
  ],
  creative: [
    'Team & Resource Management',
    'Marketing & Business Development',
    'Financial Operations',
    'Creative Operations',
    'Financial & Operations',
    'Production & Delivery'
  ],
  education: [
    'Student Enrollment & Onboarding',
    'Course & Program Management',
    'Finance & Reporting',
    'Staff Operations'
  ]
};

const services = [
  {
    id: 1,
    title: 'Custom Workflow Automation',
    pain: "Too many manual steps stealing your team's time?",
    solution:
      'We design no-code workflows that handle data entry, task routing, and reporting-giving your team hours back every week.',
    image: '/service-workflow.png',
    href: '/services/custom-workflow-automation',
    imageAlt: 'workflow automation for service business operations',
  },
  {
    id: 2,
    title: 'Data Infrastructure',
    pain: 'No single source of truth for your data?',
    solution:
      'We connect your tools into a unified system with automated data flows and real-time dashboards that reveal your business metrics instantly.',
    image: '/service-data.png',
    href: '/services/data-infrastructure-optimization',
    imageAlt: 'business data infrastructure automation system',
  },
  {
    id: 3,
    title: 'Custom Web Applications',
    pain: "Existing software doesn't fit your process?",
    solution:
      'We build tailored apps and client portals on no-code platforms-built around how your firm actually operates.',
    image: '/service-webapp.png',
    href: '/services/custom-web-applications',
    imageAlt: 'custom no-code web application and client portal for service business',
  },
  {
    id: 4,
    title: 'Discovery & Strategy',
    pain: 'Not sure where to start?',
    solution:
      'We analyze your operations, map automation opportunities, and create a detailed roadmap before development begins.',
    image: '/service-discovery.png',
    href: '/services/discovery-strategy',
    imageAlt: 'automation strategy workshop mapping business processes',
  },
];

const techCategories: {
  category: string;
  categoryIcon: string;
  tools: { name: string; logo: string }[];
}[] = [
  {
    category: 'Databases',
    categoryIcon: '/technologies/icon-databases.png',
    tools: [
      { name: 'Airtable', logo: '/technologies/logo-airtable.png' },
      { name: 'Xano', logo: '/technologies/logo-xano.png' },
      { name: 'Supabase', logo: '/technologies/logo-supabase.png' }
    ]
  },
  {
    category: 'Logic',
    categoryIcon: '/technologies/icon-logic.png',
    tools: [
      { name: 'Make.com', logo: '/technologies/logo-make.png' },
      { name: 'n8n', logo: '/technologies/logo-n8n.png' },
      { name: 'Zapier', logo: '/technologies/logo-zapier.png' }
    ]
  },
  {
    category: 'Interfaces',
    categoryIcon: '/technologies/icon-interfaces.png',
    tools: [
      { name: 'Bubble', logo: '/technologies/logo-bubble.png' },
      { name: 'Softr', logo: '/technologies/logo-softr.png' },
      { name: 'Stacker', logo: '/technologies/logo-stacker.png' }
    ]
  }
];

const heroLogoCarouselLogos = [
  { src: '/logos/softr.png', alt: 'Softr' },
  { src: '/logos/zapier.png', alt: 'Zapier' },
  { src: '/logos/make.png', alt: 'Make' },
  { src: '/logos/jotform.png', alt: 'Jotform' },
  { src: '/logos/bubble.png', alt: 'Bubble' },
  { src: '/logos/airtable.png', alt: 'Airtable' },
  { src: '/logos/docusign.png', alt: 'DocuSign' }
];

const chaosRows = [
  { beforeBold: 'Hours lost', beforeRest: ' in proposals and data entry', after: 'Proposals generated in minutes with auto-filled data', icon: '/chaos-icon-proposals.png' },
  { beforeBold: 'Client info scattered', beforeRest: ' across spreadsheets', after: 'Centralized client records and dashboards', icon: '/chaos-icon-dashboard.png' },
  { beforeBold: 'Repetitive admin work', beforeRest: ' draining the team', after: 'Automated workflows handling routine tasks', icon: '/chaos-icon-rocket.png' },
  { beforeBold: 'No visibility', beforeRest: ' into profitability or workload', after: 'Real-time reporting and margin tracking', icon: '/chaos-icon-target.png' },
  { beforeBold: 'Disjointed', beforeRest: ' client experience', after: 'Smooth, professional onboarding and communication', icon: '/chaos-icon-users.png' }
];

export default function Page() {
  const [activeSolution, setActiveSolution] = useState<SolutionKey>('consulting');
  const caseStudiesRef = useRef<HTMLElement>(null);

  return (
    <div className="qc-page">
      <main>
        {/* Hero */}
        <section id="hero" className="qc-section qc-gradient-hero">
          <div className="qc-container">
            <div className="hero-inner" style={{ maxWidth: 1132, margin: '0 auto', textAlign: 'center' }}>
              <h1
                className="type-title-72"
                style={{
                  margin: '1.4rem 0 0'
                }}
              >
                Turn operational chaos into{' '}
                <span
                  style={{
                    background: 'linear-gradient(90deg, var(--qc-blue), var(--qc-pink))',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  clarity
                </span>{' '}with{' '}
                <span
                  style={{
                    background:
                      'linear-gradient(90deg, var(--qc-blue), var(--qc-pink))',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  no-code automation
                </span>
              </h1>
              <p
                className="type-body-lg"
                style={{
                  margin: '31px auto 1.8rem',
                  color: '#8b8b8b',
                  maxWidth: '640px'
                }}
              >
                We help high-value service firms build intelligent systems that turn
                manual processes into structured, efficient operations.
              </p>

              <div
                className="hero-cta-row"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '2.3rem'
                }}
              >
                <a
                  href="https://calendly.com/quitcode/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-cta-book-link"
                  style={{
                    textDecoration: 'none'
                  }}
                >
                  <div
                    className="hero-cta-book-inner"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '8px',
                      borderRadius: 12,
                      background: 'linear-gradient(90deg, #4300b7, #5e00ff, #2200ff)',
                      boxShadow:'0 18px 45px rgba(64, 56, 133, 0.45), 0 0 0 1px rgba(255,255,255,0.2)',
                      boxSizing: 'border-box'
                    }}
                  >
                    <div
                      style={{
                        borderRadius: 8,
                        overflow: 'hidden',
                        width: 56,
                        height: 56,
                        flexShrink: 0,
                        border: 'none'
                      }}
                    >
                      <Image
                        src="/roman-avatar.png"
                        alt="Roman Sydorak"
                        width={56}
                        height={56}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        flex: 1,
                        color: 'white'
                      }}
                    >
                      <span className="type-body-lg-semibold">
                        Book a Call
                      </span>
                      <span
                        className="type-body-sm"
                        style={{ opacity: 0.9 }}
                      >
                        Let&apos;s discuss your solution
                      </span>
                    </div>
                    <Image
                      src="/icons/arrow-right.png"
                      alt=""
                      width={24}
                      height={24}
                      style={{ flexShrink: 0, opacity: 0.9 }}
                    />
                  </div>
                </a>

                <a href="#journey" className="hero-cta-discovery qc-button-secondary type-body-lg-semibold" style={{ justifyContent: 'center', boxSizing: 'border-box', padding: '0 1.5rem' }}>
                  Get Free Discovery
                </a>
              </div>
            </div>

            <div className="hero-media">
              <div className="hero-mockup">
                <div
                  className="qc-card"
                  style={{
                    marginBottom: 0,
                    borderRadius: '24px'
                  }}
                >
                  <Image
                    src="/hero-dashboard.png"
                    alt="Operations dashboard preview"
                    width={1012}
                    height={345}
                    priority
                    fetchPriority="high"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '24px'
                    }}
                  />
                </div>
              </div>

              <div className="hero-logos" aria-label="Platform integrations">
                <div className="hero-logos-marquee" aria-label="Platforms we work with">
                  <div className="hero-logos-track">
                    {heroLogoCarouselLogos.map((logo, i) => (
                      <Image
                        key={`a-${logo.alt}-${i}`}
                        src={logo.src}
                        alt={logo.alt}
                        className="hero-logos-logo"
                        width={160}
                        height={44}
                        loading="eager"
                      />
                    ))}
                    {heroLogoCarouselLogos.map((logo, i) => (
                      <Image
                        key={`b-${logo.alt}-${i}`}
                        src={logo.src}
                        alt=""
                        aria-hidden
                        className="hero-logos-logo"
                        width={160}
                        height={44}
                        loading="eager"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solutions */}
        <section id="solutions" className="qc-section">
          <div className="qc-container">
            <p
              className="qc-pill-label"
              style={{
                background: 'linear-gradient(90deg, #09C0FF, #CC99FF)',
                color: '#ffffff'
              }}
            >
              Our Solutions
            </p>
            <h2
              className="qc-section-title"
              style={{ fontWeight: 800 }}
            >
              Built for high-value service teams
            </h2>

            <div
              className="qc-solutions-layout"
              data-active={activeSolution}
            >
              {/* Each button lives in its own fixed slot - preserves position on desktop */}
              {(['consulting', 'creative', 'education'] as SolutionKey[]).map(key => {
                const isActive = activeSolution === key;
                const label =
                  key === 'consulting'
                    ? 'Consulting'
                    : key === 'creative'
                    ? 'Creative'
                    : 'Education';
                return (
                  <div
                    key={key}
                    className={`qc-solutions-btn-slot qc-solutions-btn-slot--${key}${isActive ? ' is-active' : ''}`}
                  >
                    <button
                      type="button"
                      className={`qc-solutions-btn${isActive ? ' qc-solutions-btn--active' : ''}`}
                      onClick={() => setActiveSolution(key)}
                      style={{
                        borderRadius: isActive ? '20px' : '14px',
                        border: isActive
                          ? '2px solid rgba(129, 140, 248, 0.6)'
                          : '2px solid #f0ebf9',
                        background: isActive
                          ? 'linear-gradient(135deg, #f0f4ff 0%, #f5f0ff 100%)'
                          : '#ffffff',
                        padding: isActive ? '2rem 1.6rem' : '1rem 1.4rem',
                        width: '100%',
                        textAlign: 'left',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: isActive ? 'flex-end' : 'center',
                        cursor: 'pointer',
                        boxShadow: isActive
                          ? '0 8px 30px rgba(129, 140, 248, 0.15)'
                          : 'none',
                        fontFamily: "var(--font-karla), sans-serif",
                        fontWeight: 700,
                        lineHeight: 1,
                        color: isActive ? '#3985F8' : '#374151',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span>{label}</span>
                      <span className="qc-solutions-btn-arrow" style={{ color: isActive ? '#3985F8' : '#9ca3af' }}>
                        {isActive ? '←' : '→'}
                      </span>
                    </button>
                  </div>
                );
              })}

              {/* Solution items grid */}
              <div
                className="qc-solution-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${Math.min(Math.ceil(solutions[activeSolution].length / 2), 3)}, auto)`,
                  gap: '0.65rem',
                  justifyContent: 'start',
                  alignContent: 'start',
                }}
              >
                {solutions[activeSolution].map(item => (
                  <div
                    key={item}
                    className="qc-solution-item"
                    style={{
                      borderRadius: '20px',
                      padding: '1.5rem 1.4rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      background: '#f5f9ff',
                      justifyContent: 'center'
                    }}
                  >
                    <Image
                      src={solutionIcons[item] || '/icons/system.png'}
                      alt=""
                      width={36}
                      height={36}
                      style={{ width: 36, height: 36, objectFit: 'contain' }}
                    />
                    <div className="type-body-lg-medium" style={{ color: '#4300b7' }}>
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section id="services" className="qc-section qc-gradient-hero">
          <div className="qc-container">
            <div
              style={{
                padding: '64px',
                borderRadius: '50px',
                background: '#3985F80D',
              }}
            >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1.5rem',
                marginBottom: '1.75rem'
              }}
            >
              <div>
                <h2 className="qc-section-title"
                    style={{ fontWeight: 800, color: '#360092' }}
                >Our Services</h2>
              </div>
              <div
                id="about"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4rem',
                  fontSize: '1.25rem',
                  color: '#6b7280'
                }}
              >
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 500, color: '#111827', fontSize: 20 }}>Team of experts</div>
                  <div style={{ fontWeight: 400, fontSize: 12 }}>Tailored to your needs.</div>
                </div>
                <Image
                  src="/team-avatars.png"
                  alt="Team of experts"
                  width={114}
                  height={42}
                  style={{ width: 114, height: 42, objectFit: 'contain' }}
                />
              </div>
            </div>

            <div
              className="qc-services-outer"
            >
              {services.map(service => (
                <article
                  key={service.id}
                  className="qc-card qc-service-card"
                  style={{
                    borderRadius: '28px',
                    padding: 0,
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      background: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1.5rem',
                      minHeight: 280
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      width={320}
                      height={280}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        borderRadius: '16px'
                      }}
                    />
                  </div>

                  <div
                    style={{
                      background: '#ffffff',
                      padding: '1.6rem 1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2rem',
                      justifyContent: 'center'
                    }}
                  >
                    <h3
                      className="type-heading-b-32"
                      style={{
                        margin: 0,
                        
                      }}
                    >
                      {service.title}
                    </h3>

                    <div>
                      <div
                        className="type-caption-sm-bold"
                        style={{ color: '#374151', marginTop: '0.4rem', marginBottom: '0.5rem' }}
                      >
                        Pain
                      </div>
                      <p className="type-body" style={{ margin: '0.2rem 0 0.5rem', color: '#8b8b8b' }}>
                        {service.pain}
                      </p>
                    </div>

                    <div>
                      <div
                        className="type-caption-sm-bold"
                        style={{
                          display: 'inline-block',
                          background: 'linear-gradient(90deg, #3985F8, #9291FC, #CC99FF)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          color: 'transparent', 
                          marginBottom: '0.5rem' 
                        }}
                      >
                        Solution
                      </div>
                      <p className="type-body-medium" style={{ margin: '0.2rem 0 0.5rem', color: '#4b5563' }}>
                        {service.solution}
                      </p>
                    </div>

                    <div style={{ marginTop: '0.3rem' }}>
                      <a href={service.href} className="qc-button-gradient-border" aria-label={`Learn more about ${service.title}`}>
                        Learn more
                        <span style={{ display: 'inline-flex' }}>
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="8" x2="13" y2="8" />
                            <polyline points="9 4 13 8 9 12" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* From Chaos to Clarity */}
        <section className="qc-section qc-chaos-section">
          <div className="qc-chaos-container">
            <h2 className="qc-chaos-heading qc-chaos-heading-center">
              From Chaos to{' '}
              <span className="qc-chaos-heading-gradient">Clarity</span>
            </h2>
            <p className="qc-chaos-subtitle">
              See how intelligent automation reshapes your firm&apos;s daily operations-from
              scattered tasks to a centralized system.
            </p>
            <div className="qc-chaos-divider" />

            <div className="qc-chaos-header-row">
              <div>
                <div className="qc-chaos-label">Before</div>
                <div className="qc-chaos-before-title">Manual & Reactive</div>
              </div>
              <div className="qc-chaos-arrow-spacer" aria-hidden />
              <div>
                <div className="qc-chaos-label">After</div>
                <div className="qc-chaos-after-title">
                  <span className="qc-chaos-after-title-gradient">Structured & Scalable</span>
                </div>
              </div>
            </div>

            <ul className="qc-chaos-rows">
              {chaosRows.map((row, i) => (
                <li key={i} className="qc-chaos-row">
                  <div className="qc-chaos-card-before"><strong>{row.beforeBold}</strong>{row.beforeRest}</div>
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
                    <Image
                      src={row.icon}
                      alt=""
                      width={48}
                      height={48}
                      className="qc-chaos-card-after-icon"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Glass CTA: "Curious what this transformation looks like in real firms?" */}
        <section className="qc-glass-cta" aria-label="See real client results">
          <div className="qc-glass-cta-blobs" aria-hidden="true" />
          <div className="qc-glass-cta-icons" aria-hidden="true">
            <Image src="/glass-cta/Style_Swirl.webp" alt="" width={104} height={104} className="qc-glass-cta-icon qc-glass-cta-icon-1" />
            <Image src="/glass-cta/Asset_Icon.webp" alt="" width={104} height={104} className="qc-glass-cta-icon qc-glass-cta-icon-2" />
            <Image src="/glass-cta/Style_Moon.webp" alt="" width={104} height={104} className="qc-glass-cta-icon qc-glass-cta-icon-3" />
            <Image src="/glass-cta/Style_Swirl.webp" alt="" width={104} height={104} className="qc-glass-cta-icon qc-glass-cta-icon-4" />
            <Image src="/glass-cta/Style_Moon.webp" alt="" width={104} height={104} className="qc-glass-cta-icon qc-glass-cta-icon-5" />
            <Image src="/glass-cta/Asset_Icon.webp" alt="" width={104} height={104} className="qc-glass-cta-icon qc-glass-cta-icon-6" />
          </div>
          <div className="qc-glass-cta-glass">
            <h2 className="qc-glass-cta-title">
              Curious what this transformation
              <br />
              looks like in real firms?
            </h2>
            <a href="#case-studies" className="qc-glass-cta-link">
              See real client results
            </a>
            <a href="#case-studies" className="qc-glass-cta-arrow" aria-hidden="true" tabIndex={-1}>
              <Image src="/icons/arrow-down.png" alt="" width={64} height={64} />
            </a>
          </div>
        </section>

        {/* Real Firms - Case studies: 3-card carousel */}
        <section id="case-studies" className="qc-section qc-case-studies" ref={caseStudiesRef}>
          <div className="qc-container">
            <div className="qc-case-studies-header">
              <h2 className="qc-case-studies-title">
                Real Firms.{' '}
                <span className="qc-case-studies-title-gradient">Real Transformations.</span>
              </h2>
              <p className="qc-case-studies-subtitle">
                Proof that intelligent automation delivers measurable impact.
              </p>
            </div>

            <div className="qc-case-studies-slide">
              {CASE_STUDIES.map(cs => (
                <div key={cs.slug} className="qc-case-cards-row">
                  <div className="qc-case-featured-wrapper">
                    <div className="qc-case-featured">
                      <div className="qc-case-featured-image">
                        <Image
                          src={cs.cardImage}
                          alt=""
                          fill
                          sizes="(max-width: 900px) 90vw, 50vw"
                          quality={75}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="qc-case-featured-content">
                        <div className="qc-case-featured-top">
                          <span className="qc-case-pill">{cs.industryLabel}</span>
                          <a href={`/case-studies/${cs.slug}`} className="qc-case-learn-more">
                            Learn more <span aria-hidden>↗</span>
                          </a>
                        </div>
                        <h3 className="qc-case-featured-title">{cs.title}</h3>
                        <div className="qc-case-featured-sections">
                          <div>
                            <div className="qc-case-label">THE CHALLENGE</div>
                            <p className="qc-case-text">{cs.challenge}</p>
                          </div>
                          <div>
                            <div className="qc-case-label qc-case-label-solution">THE SOLUTION</div>
                            <p className="qc-case-text">{cs.solution}</p>
                          </div>
                        </div>
                        <div className="qc-case-stats-row">
                          {cs.measuredImpact.stats.filter(s => s.value && s.label).slice(0, 3).map((stat, i) => (
                            <div key={i} className="qc-case-stat">
                              <span className="qc-case-stat-value">{stat.value}</span>
                              <span className="qc-case-stat-label">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="qc-case-small-card">
                    <Image src="/2ndcard.webp" alt="" fill sizes="280px" style={{ objectFit: 'cover', objectPosition: 'right center' }} />
                    <Image src="/glow-effect.webp" alt="" fill sizes="280px" style={{ objectFit: 'cover', mixBlendMode: 'screen' }} />
                    <div className="qc-case-small-card-overlay" aria-hidden />
                  </div>
                  <div className="qc-case-small-card">
                    <Image src="/careers/apply-photo.webp" alt="" fill sizes="280px" style={{ objectFit: 'cover' }} />
                    <Image src="/glow-effect.webp" alt="" fill sizes="280px" style={{ objectFit: 'cover', mixBlendMode: 'screen' }} />
                    <div className="qc-case-small-card-overlay" aria-hidden />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real conversation - 2-col layout, light diagonal background, right photo card */}
        <section id="conversation" className="qc-section qc-conversation">
          <div className="qc-conversation-inner">
            <div className="qc-conversation-left">
              <h2 className="qc-conversation-heading">
                Every project starts
                <br />
                with a <span className="qc-conversation-highlight">real conversation</span>
              </h2>
              <p className="qc-conversation-subtitle">
                Meet Roman, our founder and automation strategist.
              </p>
              <p className="qc-conversation-para">
                With 10+ years in optimising service operations and 50+ projects delivered, he helps
                firms uncover what&apos;s slowing them down-and map a clear path to automation.
              </p>
              <a
                href="https://calendly.com/quitcode/30min"
                target="_blank"
                rel="noreferrer"
                className="qc-conversation-cta"
              >
                <span>Talk to Roman</span>
                <span className="qc-conversation-cta-arrow" aria-hidden>→</span>
              </a>
              <div className="qc-conversation-benefits">
                <span className="qc-conversation-benefit">
                  <Image src="/icons/star-conv.png" alt="" width={20} height={20} className="qc-conversation-star" aria-hidden />
                  Free 30‑minute strategy session
                </span>
                <span className="qc-conversation-benefit">
                  <Image src="/icons/star-conv.png" alt="" width={20} height={20} className="qc-conversation-star" aria-hidden />
                  No sales pressure-just practical insights
                </span>
              </div>
            </div>
            <div className="qc-conversation-right">
              <div className="qc-conversation-card">
                <div className="qc-conversation-card-bg" aria-hidden />
                <Image
                  src="/roman-sydorak.png"
                  alt="Roman Sydorak"
                  fill
                  sizes="(max-width: 900px) 100vw, 520px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />

        {/* Technologies */}
        <section className="qc-section qc-technologies" id="technologies">
          <div className="qc-container">
            <header className="qc-technologies-header">
              <h2 className="qc-technologies-title">Technologies</h2>
              <p className="qc-technologies-subtitle">
                We build with trusted no-code platforms.
              </p>
            </header>

            <div className="qc-technologies-grid">
              {techCategories.map(({ category, categoryIcon, tools }) => (
                <div key={category} className="qc-technologies-card-outer">
                  <div className="qc-technologies-card-inner">
                    <div className="qc-technologies-card-top">
                      <h3 className="qc-technologies-category">{category}</h3>
                      <div className="qc-technologies-icon-wrap">
                        <Image
                          src={categoryIcon}
                          alt=""
                          width={44}
                          height={44}
                        />
                      </div>
                    </div>
                    <div className="qc-technologies-tools">
                      {tools.map(({ name, logo }) => (
                        <div key={name} className="qc-technologies-tool-row">
                          <Image
                            src={logo}
                            alt=""
                            width={24}
                            height={24}
                            className="qc-technologies-tool-logo"
                          />
                          <span className="qc-technologies-tool-name">{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why no-code */}
        <section
          className="qc-section qc-why-nocode"
          style={{ paddingBottom: '4.5rem' }}
        >
          <div className="qc-why-nocode-wrap">
            <div className="qc-why-nocode-panel">
              <header className="qc-why-nocode-header">
                <h2 className="qc-why-nocode-title">
                  Why no-code is the smarter way to
                  <br />
                  scale operations
                </h2>
                <p className="qc-why-nocode-subtitle">
                  We build with trusted no-code platforms
                </p>
              </header>

              <ul className="qc-why-nocode-list">
                {[
                  {
                    title: 'Faster implementation',
                    body: 'No waiting months for development.\n We design, test, and launch automation systems in weeks - not quarters.',
                    icon: '/why-nocode/icon-faster.png'
                  },
                  {
                    title: 'Lower cost, higher ROI',
                    body: 'No-code means no full-time dev teams or expensive maintenance.\nYou pay for business outcomes, not for code.',
                    icon: '/why-nocode/icon-roi.png'
                  },
                  {
                    title: 'Flexible and future-proof',
                    body: 'When your processes change, your system adapts.\nWe build modular workflows that evolve with your firm.',
                    icon: '/why-nocode/icon-flexible.png'
                  },
                  {
                    title: 'Built for non-technical teams',
                    body: "You don't need IT to keep it running.\nYour team can update data, dashboards, and logic on their own.",
                    icon: '/why-nocode/icon-teams.png'
                  }
                ].map(item => (
                  <li key={item.title} className="qc-why-nocode-row">
                    <div className="qc-why-nocode-left">
                      <Image
                        src={item.icon}
                        alt=""
                        width={32}
                        height={32}
                        className="qc-why-nocode-icon"
                      />
                      <span className="qc-why-nocode-label">{item.title}</span>
                    </div>
                    <p className="qc-why-nocode-desc">
  {item.body.split('\n').map((line, i, arr) => (
    <React.Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ))}
</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <JourneyFormSection />
      </main>
    </div>
  );
}


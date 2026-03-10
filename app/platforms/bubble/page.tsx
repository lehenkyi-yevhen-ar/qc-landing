'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { industryOptions } from '@/lib/data';

/* ── Case studies data ── */
const caseStudies = [
  {
    id: 1,
    industryLabel: 'Industry Type',
    title: '40% Faster Task Completion after Transition from Google Sheets to Airtable Integration for SEO Backlink Agency',
    challenge: 'Manual workflows, scattered data, and long proposal cycles slowed growth and exhausted the team.',
    solution: 'We built a custom automation system integrating Airtable, Make, and QuickBooks — centralizing operations and reducing admin work.',
    statsDetail: [
      { value: '80%', label: 'faster proposal creation' },
      { value: '40+', label: 'hours saved monthly' },
      { value: 'Dashboard', label: 'Unified dashboards across finance and projects' },
    ],
  },
  {
    id: 2,
    industryLabel: 'Finance',
    title: 'Automate and manage clients portfolios by monitoring employees performance indicators',
    challenge: 'Consultants were rebuilding proposals from scratch for each opportunity, losing hours to copy-paste work.',
    solution: 'We designed a proposal engine that assembles scopes, pricing, and case studies automatically from a structured knowledge base.',
    statsDetail: [
      { value: '4x', label: 'faster proposal turnaround' },
      { value: 'Higher', label: 'close rate' },
      { value: 'Consistent', label: 'pricing & scope' },
    ],
  },
  {
    id: 3,
    industryLabel: 'Creative',
    title: 'Millennium Academy Eliminates Paper-Based Operations for Good with Automated Contract Gene...',
    challenge: 'An education provider had no clear view of lead status, enrollment stages, or team workload.',
    solution: 'We implemented a no-code CRM and workflow layer that tracks every applicant from first touch to orientation, with automated reminders.',
    statsDetail: [
      { value: 'Full-funnel', label: 'visibility' },
      { value: 'Fewer', label: 'dropped leads' },
      { value: 'Happier', label: 'operations team' },
    ],
  },
];

/* ── Page data ── */
const useCases = [
  { title: 'Client-facing\nSaaS\nplatforms', icon: '/icons/bubble-saas-icon.png' },
  { title: 'Advanced\ninternal\noperational\nsystems', icon: '/icons/bubble-ops-icon.png' },
  { title: 'Custom\nmarketplaces\n& booking\nplatforms', icon: '/icons/bubble-marketplace-icon.png' },
  { title: 'Role-based\nclient\nportals', icon: '/icons/bubble-portal-icon.png' },
  { title: 'MVPs for\nproduct\nvalidation', icon: '/icons/bubble-mvp-icon.png' },
  { title: 'Admin panels\nwith complex\nworkflows', icon: '/icons/bubble-admin-icon.png' },
];

const keyCapabilities = [
  {
    title: 'Custom workflows & dynamic logic',
    description: 'Application logic can be structured around user actions, conditional states, and multi-step processes. This allows us to model complex operational flows that go beyond linear automation.',
  },
  {
    title: 'Fully custom UI & UX',
    description: 'Every interface element can be designed to match the exact workflow and user journey. This ensures usability, clarity, and alignment with your operational reality — not template constraints.',
  },
  {
    title: 'Role-based access & secure data handling',
    description: 'Permissions are defined at the database and interface levels. Different user types interact only with relevant data, maintaining privacy, structure, and accountability.',
  },
  {
    title: 'Scalable data structures',
    description: 'Bubble supports structured data models that grow with the product. Relationships, constraints, and workflows evolve without forcing full system rebuilds.',
  },
  {
    title: 'API integrations & external systems',
    description: 'Bubble connects to external tools through APIs, allowing integration with CRMs, payment providers, automation engines, and analytics platforms.',
  },
];

const weImplement = [
  { icon: '/icons/bubble-auto-1.png', text: 'dynamic user-triggered workflows' },
  { icon: '/icons/bubble-auto-2.png', text: 'conditional logic & state-based behaviour' },
  { icon: '/icons/bubble-auto-3.png', text: 'payment flows & subscription models' },
  { icon: '/icons/bubble-auto-4.png', text: 'system-to-system API communication' },
];

const whenClientsNeed = [
  { icon: '/icons/bubble-apps-icon.png', text: 'custom applications, not just automation' },
  { icon: '/icons/bubble-journeys-icon.png', text: 'unique user journeys and workflows' },
  { icon: '/icons/bubble-flexibility-icon.png', text: 'product-level flexibility' },
  { icon: '/icons/bubble-validation-icon.png', text: 'fast product validation without traditional development cycles' },
];

const coreTechnologies = [
  {
    logo: '/logos/airtable.png',
    logoAlt: 'Airtable',
    logoWidth: 140,
    title: 'Airtable automations',
    href: '/platforms/airtable',
  },
  {
    logo: '/logos/make.png',
    logoAlt: 'Make',
    logoWidth: 120,
    title: 'Make automations',
    href: '/platforms/make',
  },
];

/* ── Bubble form section (inline client component) ── */
function BubbleFormSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState('');
  const [message, setMessage] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [dropdownOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, industry, challenge: message }),
      });
      if (!res.ok) throw new Error();
      setName(''); setEmail(''); setCompany(''); setIndustry(''); setMessage('');
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="bubble-form" className="qc-section qc-journey">
      <div className="qc-journey-container">
        {/* Heading */}
        <div className="qc-platform-form-heading">
          <div className="qc-glass-cta-blobs" aria-hidden="true" />
          <div className="qc-glass-cta-icons" aria-hidden="true">
            <img src="/glass-cta/Style_Swirl.png" alt="" className="qc-glass-cta-icon qc-glass-cta-icon-1" />
            <img src="/glass-cta/Asset_Icon.png" alt="" className="qc-glass-cta-icon qc-glass-cta-icon-2" />
            <img src="/glass-cta/Style_Moon.png" alt="" className="qc-glass-cta-icon qc-glass-cta-icon-3" />
            <img src="/glass-cta/Style_Swirl.png" alt="" className="qc-glass-cta-icon qc-glass-cta-icon-4" />
            <img src="/glass-cta/Style_Moon.png" alt="" className="qc-glass-cta-icon qc-glass-cta-icon-5" />
            <img src="/glass-cta/Asset_Icon.png" alt="" className="qc-glass-cta-icon qc-glass-cta-icon-6" />
          </div>
          <div className="qc-platform-form-heading-content">
            <h2
              style={{
                fontSize: '1.85rem',
                fontWeight: 800,
                color: '#111827',
                lineHeight: 1.25,
                margin: '0 0 0.75rem',
                maxWidth: 700,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Tell us what you&apos;re building — and we&apos;ll help you design a{' '}
              <span style={{ color: '#1a56db' }}>scalable, maintainable Bubble application</span>{' '}
              architecture.
            </h2>
            <p style={{ margin: 0, fontSize: '0.92rem', color: '#6b7280' }}>
              Plain language. Practical recommendations. No sales pressure.
            </p>
          </div>
        </div>

        <div className="qc-journey-grid">
          {/* Form */}
          <div className="qc-journey-form-col">
            <form onSubmit={handleSubmit} className="qc-journey-form">
              <div className="qc-journey-fields">
                {/* Name */}
                <div className="qc-journey-field">
                  <div className="qc-input-wrap qc-journey-input-wrap">
                    <label htmlFor="bb-name" className="qc-input-label qc-input-label-float qc-journey-label">
                      Name <span className="qc-journey-required">*required</span>
                    </label>
                    <input id="bb-name" type="text" required value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Input" className="qc-input qc-journey-input" />
                    {name && (
                      <button type="button" className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear"
                        onClick={() => setName('')} aria-label="Clear">×</button>
                    )}
                  </div>
                </div>
                {/* Email */}
                <div className="qc-journey-field">
                  <div className="qc-input-wrap qc-journey-input-wrap">
                    <label htmlFor="bb-email" className="qc-input-label qc-input-label-float qc-journey-label">
                      Email <span className="qc-journey-required">*required</span>
                    </label>
                    <input id="bb-email" type="email" required value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Input" className="qc-input qc-journey-input" />
                    {email && (
                      <button type="button" className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear"
                        onClick={() => setEmail('')} aria-label="Clear">×</button>
                    )}
                  </div>
                </div>
                {/* Company */}
                <div className="qc-journey-field">
                  <div className="qc-input-wrap qc-journey-input-wrap">
                    <label htmlFor="bb-company" className="qc-input-label qc-input-label-float qc-journey-label">
                      Company name <span className="qc-journey-optional">optional</span>
                    </label>
                    <input id="bb-company" type="text" value={company}
                      onChange={e => setCompany(e.target.value)}
                      placeholder="Input" className="qc-input qc-journey-input" />
                    {company && (
                      <button type="button" className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear"
                        onClick={() => setCompany('')} aria-label="Clear">×</button>
                    )}
                  </div>
                </div>
                {/* Industry */}
                <div className="qc-journey-field qc-journey-field-dropdown" ref={dropdownRef}>
                  <div className="qc-input-wrap qc-journey-input-wrap">
                    <label htmlFor="bb-industry" className="qc-input-label qc-input-label-float qc-journey-label">
                      Industry
                    </label>
                    <button type="button" id="bb-industry"
                      aria-haspopup="listbox" aria-expanded={dropdownOpen}
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="qc-input qc-journey-input qc-journey-dropdown-trigger">
                      {industry || 'Choose...'}
                    </button>
                    {industry && (
                      <button type="button" className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear"
                        onClick={e => { e.stopPropagation(); setIndustry(''); }} aria-label="Clear">×</button>
                    )}
                    <span className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-chevron" aria-hidden>▼</span>
                    {dropdownOpen && (
                      <div className="qc-dropdown-panel" role="listbox">
                        {industryOptions.map(opt => (
                          <button key={opt} type="button" role="option" aria-selected={industry === opt}
                            onClick={() => { setIndustry(opt); setDropdownOpen(false); }}
                            className="qc-dropdown-option">{opt}</button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Textarea */}
              <div className="qc-journey-field" style={{ marginTop: '0.75rem' }}>
                <label htmlFor="bb-message" className="qc-journey-label" style={{ marginBottom: '0.5rem', display: 'block', fontWeight: 600, fontSize: '0.95rem', color: '#111827' }}>
                  Tell us about your Bubble system
                </label>
                <textarea id="bb-message" value={message} rows={5}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Are you already using Bubble, or planning to? What feels messy, fragile, or limiting right now? (CRM, operations, payroll, reporting, integrations, etc.)"
                  className="qc-journey-textarea" />
              </div>

              {/* File upload */}
              <div className="qc-journey-upload-wrap">
                <button type="button" className="qc-journey-upload-btn">
                  <svg className="qc-journey-upload-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                  </svg>
                  Attach your application schema, screenshots, or docs (optional)
                </button>
                <p className="qc-journey-upload-helper">Supported: PDF, DOCX, XLSX (max 10MB)</p>
              </div>

              {/* Submit */}
              <div className="qc-journey-cta-wrap">
                <button type="submit" className="qc-journey-cta qc-conversation-cta" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Sending…' : 'Request Bubble application review'}</span>
                  <span className="qc-conversation-cta-arrow" aria-hidden>→</span>
                </button>
              </div>

              <ul className="qc-journey-trust">
                <li><span className="qc-journey-trust-icon" aria-hidden>⚡</span> Response within 24 hours</li>
                <li><span className="qc-journey-trust-icon" aria-hidden>⊘</span> No sales pressure — just practical ideas</li>
                <li><span className="qc-journey-trust-icon" aria-hidden>🔒</span> Your data is secure</li>
              </ul>
              {status === 'success' && <p className="qc-journey-form-status qc-journey-form-status-success">Thanks — your request has been sent.</p>}
              {status === 'error' && <p className="qc-journey-form-status qc-journey-form-status-error">Something went wrong. Please try again.</p>}
            </form>
          </div>

          {/* Aside – team photo */}
          <aside className="qc-journey-aside">
            <div className="qc-journey-card">
              <Image src="/make-team-photo.png" alt="Team collaboration"
                fill sizes="(max-width: 900px) 100vw, 480px" style={{ objectFit: 'cover' }} />
            </div>
            <div className="qc-journey-privacy">
              <div className="qc-journey-privacy-label">PRIVACY NOTE</div>
              <p className="qc-journey-privacy-text">
                We review every request manually. Your information is only used to respond to your Bubble-related inquiry.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function BubblePlatformPage() {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <div className="qc-page">
      <main>

        {/* ── 1. Hero ── */}
        <section className="qc-section qc-gradient-hero" style={{ paddingTop: '7rem', paddingBottom: '3rem' }}>
          <div className="qc-container">
            <div className="cwa-hero-grid">
              {/* Left */}
              <div>
                <Breadcrumb crumbs={[
                  { label: 'Home', href: '/' },
                  { label: 'Platforms', href: '/platforms', inactive: true },
                  { label: 'Bubble', href: '/platforms/bubble' },
                ]} />
                <span style={{
                  display: 'inline-block', background: '#1a56db', color: '#fff',
                  fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', padding: '0.3rem 0.85rem',
                  borderRadius: '6px', marginBottom: '1.25rem',
                }}>
                  Technology
                </span>
                <h1 style={{ fontSize: '3.1rem', fontWeight: 800, lineHeight: 1.08, margin: '0 0 0.6rem', color: '#111827' }}>
                  <span style={{ color: '#1a56db' }}>Bubble</span> Application Development
                </h1>
                <p style={{ fontSize: '1rem', color: '#6b7280', margin: '0 0 1.5rem' }}>
                  Custom web applications — without traditional engineering overhead
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '10px', background: 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: 24
                  }}>
                    <Image src="/logos/bubble-circle.png" alt="Bubble" width={86} height={86} style={{ objectFit: 'contain' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', gap: 24 }}>
                    <p style={{ fontSize: '0.98rem', color: '#2e2e2e', lineHeight: 1.7, margin: 0, maxWidth: 440, fontWeight: 600 }}>
                      <strong style={{ color: '#1a56db' }}>Bubble</strong> is the platform we
                      use to build fully custom web applications — client portals, SaaS
                      products, internal systems, and operational platforms.
                    </p>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.65, margin: 0, maxWidth: 440 }}>
                      We design Bubble when the system requires custom logic, tailored UX, and product-level flexibility beyond standard no-code tools.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div>
                <Image src="/bubble-hero-mockup.png" alt="Bubble application mockup"
                  width={680} height={460} className="cwa-hero-img-desktop"
                  style={{ width: '100%', height: 'auto' }} priority />
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. What we build with Bubble ── */}
        <section className="qc-section" style={{ background: '#f5f9ff' }}>
          <div className="qc-container">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, margin: '0 0 2rem', color: '#111827', textAlign: 'center' }}>
              What we build with <span style={{ color: '#1a56db' }}>Bubble</span>
            </h2>

            {/* 6 dark cards */}
            <div className="plt-wyb-grid">
              {useCases.map((item) => (
                <div key={item.title} className="plt-wyb-card">
                  <Image src={item.icon} alt="" width={40} height={40} style={{ objectFit: 'contain', marginBottom: 'auto' }} />
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', lineHeight: 1.3, whiteSpace: 'pre-line' }}>
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="qc-section plt-capabilities-overlap-section" style={{ background: '#fff', padding: 0 }}>
          <div className="qc-container">
            {/* Bubble logo divider */}
            <div className="plt-capabilities-section">
              <div className="plt-capabilities-logo">
                <Image
                  src="/logos/bubble-circle.png"
                  alt="Bubble"
                  width={86}
                  height={86}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <div className="plt-capabilities-row">
                <div className="plt-capabilities-label-box">
                  <div className="plt-capabilities-label-gradient">
                    KEY<br />
                    CAPABILITIES
                  </div>
                </div>

                <div className="plt-capabilities-list">
                  {keyCapabilities.map((cap, i) => (
                    <div key={cap.title} className="plt-capability-item">
                      <div style={{ display: 'flex', gap: 18 }}>
                        <div className="plt-capabilities-label-gradient">
                          <span className="plt-capability-num">{i + 1}</span>
                        </div>
                        <div>
                          <div
                            style={{
                              fontWeight: 700,
                              fontSize: '0.95rem',
                              color: '#111827',
                              marginBottom: '0.3rem',
                            }}
                          >
                            {cap.title}
                          </div>
                          <div
                            style={{
                              fontSize: '0.83rem',
                              color: '#6b7280',
                              lineHeight: 1.6,
                            }}
                          >
                            {cap.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Real Firms. Real Transformations. ── */}
        <section id="case-studies" className="qc-section qc-case-studies">
          <div className="qc-container">
            <div className="qc-case-studies-header">
              <h2 className="qc-case-studies-title">
                Real Firms.{' '}
                <span className="qc-case-studies-title-gradient">Real Transformations.</span>
              </h2>
              <p className="qc-case-studies-subtitle">
                Proof that intelligent automation delivers measurable impact
              </p>
            </div>

            <div className="qc-case-studies-slide">
              {[0, 1, 2].map(slideIndex =>
                activeCase === slideIndex ? (
                  <div key={slideIndex} className="qc-case-cards-row">
                    <div className="qc-case-featured-wrapper">
                      <div className="qc-case-featured">
                        <div className="qc-case-featured-image">
                          <Image src="/case-studies/getting-business-finances-in-order.png" alt=""
                            fill sizes="(max-width: 900px) 45vw, 420px" style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="qc-case-featured-content">
                          <div className="qc-case-featured-top">
                            <span className="qc-case-pill">{caseStudies[slideIndex].industryLabel}</span>
                            <a href="#case-studies" className="qc-case-learn-more">Learn more <span aria-hidden>↗</span></a>
                          </div>
                          <h3 className="qc-case-featured-title">{caseStudies[slideIndex].title}</h3>
                          <div className="qc-case-featured-sections">
                            <div>
                              <div className="qc-case-label">THE CHALLENGE</div>
                              <p className="qc-case-text">{caseStudies[slideIndex].challenge}</p>
                            </div>
                            <div>
                              <div className="qc-case-label qc-case-label-solution">THE SOLUTION</div>
                              <p className="qc-case-text">{caseStudies[slideIndex].solution}</p>
                            </div>
                          </div>
                          <div className="qc-case-stats-row">
                            {caseStudies[slideIndex].statsDetail.map((stat, i) => (
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
                      <Image src="/case-studies/case-study-card.png" alt="" fill sizes="280px" style={{ objectFit: 'cover' }} />
                      <div className="qc-case-small-card-overlay" aria-hidden />
                    </div>
                    <div className="qc-case-small-card">
                      <Image src="/case-studies/case-study-card-2.png" alt="" fill sizes="280px" style={{ objectFit: 'cover' }} />
                      <div className="qc-case-small-card-overlay" aria-hidden />
                    </div>
                  </div>
                ) : null
              )}
            </div>

            <div className="qc-case-nav">
              <div className="qc-dots">
                {[0, 1, 2].map(index => (
                  <button key={index} type="button"
                    className={`qc-dot${index === activeCase ? ' qc-dot-active' : ''}`}
                    onClick={() => setActiveCase(index)} aria-label={`Go to slide ${index + 1}`} />
                ))}
              </div>
              <div className="qc-case-nav-buttons">
                <button type="button" className="qc-case-btn qc-case-btn-prev"
                  onClick={() => setActiveCase((activeCase - 1 + 3) % 3)} aria-label="Previous">←</button>
                <button type="button" className="qc-case-btn qc-case-btn-next"
                  onClick={() => setActiveCase((activeCase + 1) % 3)} aria-label="Next">→</button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Automation & integrations ── */}
        <section className="qc-section" style={{ background: '#f5f9ff' }}>
          <div className="qc-container">
            <div className="plt-automation-grid">
              {/* Left – section image */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/bubble-automations-section.png" alt="Bubble automation and integrations"
                  width={520} height={360} style={{ width: '100%', height: 'auto', borderRadius: '16px' }} />
              </div>

              {/* Right */}
              <div>
                <h2 style={{ fontSize: '1.85rem', fontWeight: 800, margin: '0 0 0.75rem', color: '#111827' }}>
                  Automation &amp; integrations
                </h2>
                <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: '0 0 1.5rem', lineHeight: 1.65 }}>
                  <strong style={{ color: '#111827' }}>Bubble acts as the application layer.</strong> Airtable can serve as structured data storage. Make or n8n handle background automation.
                </p>

                <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1a56db', marginBottom: '0.75rem' }}>
                  WE IMPLEMENT
                </div>
                <ul style={{ margin: '0 0 1.5rem', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {weImplement.map((item) => (
                    <li key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: '#374151' }}>
                      <Image src={item.icon} alt="" width={24} height={24} style={{ objectFit: 'contain', flexShrink: 0 }} />
                      {item.text}
                    </li>
                  ))}
                </ul>

                <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111827', marginBottom: '0.4rem' }}>
                  RESULT
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1a56db', lineHeight: 1.3 }}>
                  Product-grade systems without full-stack engineering teams.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. We recommend Bubble when clients need ── */}
        <section className="plt-recommend-section">
          <div className="qc-container">
            <div className="plt-recommend-panel">

              {/* Top: 2-column grid */}
              <div className="plt-recommend-grid">
                {/* Left – label + heading */}
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.85rem' }}>
                    WHY &amp; WHEN
                  </div>
                  <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', lineHeight: 1.2, margin: 0 }}>
                    We recommend<br />
                    Bubble when<br />
                    clients need:
                  </h2>
                </div>

                {/* Right – icon items column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {whenClientsNeed.map((item) => (
                    <div key={item.text} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      <div style={{
                        width: 45, height: 45, borderRadius: '999px',
                        border: '1px solid rgba(255,255,255,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Image src={item.icon} alt="" width={22} height={22} style={{ objectFit: 'contain' }} />
                      </div>
                      <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.82)', lineHeight: 1.4, marginBottom: 48, marginTop: 12 }}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom row: pill → connector → statement */}
              <div className="plt-recommend-bottom">
                <div className="plt-recommend-pill">
                  <Image src="/logos/bubble.png" alt="Bubble" width={160} height={40} style={{ objectFit: 'contain' }} />
                </div>
                <div className="plt-recommend-connector" aria-hidden>
                  <div className="plt-recommend-line" />
                  <div className="plt-recommend-arrowhead" />
                </div>
                <p className="plt-recommend-statement">
                  Ideal when operations evolve into software products, not just internal systems.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── 6. Tell us what you're building ── */}
        <BubbleFormSection />

        {/* ── 7. Explore our core technologies ── */}
        <section className="qc-section">
          <div className="qc-container">
            <div className="plt-tech-grid">
              {/* Left */}
              <div className="plt-tech-left">
                <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#111827', margin: '0 0 0.75rem', lineHeight: 1.2 }}>
                  Explore our core technologies
                </h2>
                <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
                  The platforms we combine to build reliable, scalable systems.
                </p>
                <div className="plt-tech-decoration" aria-hidden>
                  <Image src="/glass-cta/Asset_icon.png" alt="" width={36} height={36} style={{ objectFit: 'contain' }} />
                  <div className="plt-tech-decoration-line" />
                </div>
              </div>

              {/* Right – technology cards */}
              <div className="plt-tech-cards">
                {coreTechnologies.map((tech) => (
                  <div key={tech.title} style={{ borderRadius: '16px', border: '1px solid #e5e7eb', overflow: 'hidden', background: '#fff' }}>
                    {/* Logo area */}
                    <div style={{ background: '#f5f7fb', height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
                      <Image src={tech.logo} alt={tech.logoAlt} width={tech.logoWidth} height={48} style={{ objectFit: 'contain', maxWidth: '70%' }} />
                    </div>
                    {/* Content */}
                    <div style={{ padding: '1.25rem 1.5rem' }}>
                      <span style={{
                        display: 'inline-block', background: '#1a56db', color: '#fff',
                        fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em',
                        textTransform: 'uppercase', padding: '0.2rem 0.65rem',
                        borderRadius: '5px', marginBottom: '0.65rem',
                      }}>
                        Technology
                      </span>
                      <h3 style={{ margin: '0 0 0.85rem', fontSize: '1.1rem', fontWeight: 800, color: '#111827' }}>
                        {tech.title}
                      </h3>
                      <Link href={tech.href} className="qc-button-gradient-border">
                        Learn more
                        <span style={{ display: 'inline-flex', marginLeft: 6 }}>
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="8" x2="13" y2="8" /><polyline points="9 4 13 8 9 12" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

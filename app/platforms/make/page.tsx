'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { industryOptions } from '@/lib/data';
import { CASE_STUDIES } from '@/lib/caseStudies';

/* ── Page data ── */
const useCases = [
  { title: 'End-to-end\noperational\nworkflows', icon: '/icons/make-ops-icon.png' },
  { title: 'CRM & sales\nautomation', icon: '/icons/make-crm-icon.png' },
  { title: 'Marketing and\nlead routing\npipelines', icon: '/icons/make-marketing-icon.png' },
  { title: 'HR & internal\nadmin\nprocesses', icon: '/icons/make-hr-icon.png' },
  { title: 'Finance, payroll,\nand reporting\nautomations', icon: '/icons/make-finance-icon.png' },
];

const keyCapabilities = [
  {
    title: 'Visual scenario builder (no hidden logic)',
    description: 'Workflows are mapped in a transparent visual structure where every step is explicit. This reduces undocumented automation and makes processes maintainable over time.',
  },
  {
    title: 'Conditional logic & branching',
    description: 'Processes adapt dynamically based on structured rules. Approvals, routing, and decision paths execute consistently without relying on manual judgment.',
  },
  {
    title: 'Real-time execution monitoring',
    description: 'Every workflow run is logged and traceable. Operations teams can detect failures quickly and maintain visibility over critical processes.',
  },
  {
    title: 'Scheduling & event-based triggers',
    description: 'Scenarios execute on precise schedules or respond instantly to defined events. This ensures predictable recurring workflows and responsive operational logic.',
  },
  {
    title: 'Error handling & retries',
    description: 'Built-in retry logic and fallback paths prevent silent breakdowns. When issues occur, they are handled systematically or surfaced clearly for intervention.',
  },
];

const weAutomate = [
  { icon: '/icons/make-auto-1.png', text: 'recurring operational workflows' },
  { icon: '/icons/make-auto-2.png', text: 'approvals and multi-step processes' },
  { icon: '/icons/make-auto-3.png', text: 'structured data processing' },
  { icon: '/icons/make-auto-4.png', text: 'scheduled and event-driven tasks' },
  { icon: '/icons/make-auto-5.png', text: 'API-based integrations across systems' },
];

const whenClientsNeed = [
  { icon: '/icons/make-workflows-icon.png', text: 'complex workflows without custom code' },
  { icon: '/icons/make-visibility-icon.png', text: 'visibility into how processes actually run' },
  { icon: '/icons/make-flexible-icon.png', text: 'flexibility to evolve logic over time' },
  { icon: '/icons/make-handoffs-icon.png', text: 'fewer manual handoffs between tools' },
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
    logo: '/logos/bubble.png',
    logoText: '.bubble',
    title: 'Bubble automations',
    href: '/platforms/bubble',
  },
];

/* ── Make form section (inline client component) ── */
function MakeFormSection() {
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
    <section id="make-form" className="qc-section qc-journey">
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
              className="type-heading-eb-48"
              style={{
                color: '#111827',
                margin: '0 0 0.75rem',
                maxWidth: 680,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Tell us how you&apos;re using{' '}
              <span style={{ color: '#7c3aed' }}>Make</span>{' '}
              (or planning to), and we&apos;ll help you design{' '}
              <span style={{ color: '#7c3aed' }}>reliable, maintainable workflows.</span>
            </h2>
            <p className="type-body" style={{ margin: 0, color: '#6b7280' }}>
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
                    <label htmlFor="mk-name" className="qc-input-label qc-input-label-float qc-journey-label">
                      Name <span className="qc-journey-required">*required</span>
                    </label>
                    <input id="mk-name" type="text" required value={name}
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
                    <label htmlFor="mk-email" className="qc-input-label qc-input-label-float qc-journey-label">
                      Email <span className="qc-journey-required">*required</span>
                    </label>
                    <input id="mk-email" type="email" required value={email}
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
                    <label htmlFor="mk-company" className="qc-input-label qc-input-label-float qc-journey-label">
                      Company name <span className="qc-journey-optional">optional</span>
                    </label>
                    <input id="mk-company" type="text" value={company}
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
                    <label htmlFor="mk-industry" className="qc-input-label qc-input-label-float qc-journey-label">
                      Industry
                    </label>
                    <button type="button" id="mk-industry"
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
                <label htmlFor="mk-message" className="qc-journey-label" style={{ marginBottom: '0.5rem', display: 'block', fontWeight: 600, fontSize: '0.95rem', color: '#111827' }}>
                  Tell us about your Make system
                </label>
                <textarea id="mk-message" value={message} rows={5}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Are you already using Make, or planning to? What feels messy, fragile, or limiting right now? (CRM, operations, payroll, reporting, integrations, etc.)"
                  className="qc-journey-textarea" />
              </div>

              {/* File upload */}
              <div className="qc-journey-upload-wrap">
                <button type="button" className="qc-journey-upload-btn">
                  <svg className="qc-journey-upload-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                  </svg>
                  Attach your Make schema, screenshots, or docs (optional)
                </button>
                <p className="qc-journey-upload-helper">Supported: PDF, DOCX, XLSX (max 10MB)</p>
              </div>

              {/* Submit */}
              <div className="qc-journey-cta-wrap">
                <button type="submit" className="qc-journey-cta qc-conversation-cta" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Sending…' : 'Request Make system review'}</span>
                  <span className="qc-conversation-cta-arrow" aria-hidden>→</span>
                </button>
              </div>

              <ul className="qc-journey-trust">
                <li><span className="qc-journey-trust-icon" aria-hidden>⚡</span> Response within 24 hours</li>
                <li><span className="qc-journey-trust-icon" aria-hidden>⊘</span> No sales pressure - just practical ideas</li>
                <li><span className="qc-journey-trust-icon" aria-hidden>🔒</span> Your data is secure</li>
              </ul>
              {status === 'success' && <p className="qc-journey-form-status qc-journey-form-status-success">Thanks - your request has been sent.</p>}
              {status === 'error' && <p className="qc-journey-form-status qc-journey-form-status-error">Something went wrong. Please try again.</p>}
            </form>
          </div>

          {/* Aside - team photo */}
          <aside className="qc-journey-aside">
            <div className="qc-journey-card">
              <Image src="/make-team-photo.png" alt="Team collaboration"
                fill sizes="(max-width: 900px) 100vw, 480px" style={{ objectFit: 'cover' }} />
            </div>
            <div className="qc-journey-privacy">
              <div className="qc-journey-privacy-label">PRIVACY NOTE</div>
              <p className="qc-journey-privacy-text">
                We review every request manually. Your information is only used to respond to your Make-related inquiry.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function MakePlatformPage() {
  return (
    <div className="qc-page">
      <main>

        {/* ── 1. Hero ── */}
        <section className="qc-section qc-gradient-hero qc-platforms-hero" style={{ paddingTop: '7rem', paddingBottom: '3rem' }}>
          <div className="qc-container">
            <div className="cwa-hero-grid">
              {/* Left */}
              <div>
                <Breadcrumb crumbs={[
                  { label: 'Home', href: '/' },
                  { label: 'Platforms', href: '/platforms', inactive: true },
                  { label: 'Make', href: '/platforms/make' },
                ]} />
                <span style={{
                  display: 'inline-block', background: '#7c3aed', color: '#fff',
                  fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', padding: '0.3rem 0.85rem',
                  borderRadius: '6px', marginBottom: '32px',
                }}>
                  Technology
                </span>
                <h1 className="type-heading-eb-48" style={{ margin: '0 0 32px', color: '#111827', fontSize: 64 }}>
                  <span style={{ color: '#7c3aed' }}>Make</span> Automation
                </h1>
                <p className="type-body-lg" style={{ color: '#6b7280', margin: '0 0 6.25rem' }}>
                  The execution layer behind your operations
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '10px', background: 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: 24
                  }}>
                    <Image src="/logos/make-circle.png" alt="Make" width={86} height={86} style={{ objectFit: 'contain' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', gap: 40 }}>
                    <p className="type-body-semibold" style={{ color: '#2e2e2e', margin: 0, maxWidth: 440, fontFamily: 'Karla', letterSpacing: -2, fontSize: 32 }}>
                      <strong style={{ color: '#7c3aed' }}>Make</strong> is the platform we
                      use to execute and orchestrate business processes - moving data,
                      triggering actions, and enforcing rules across your stack.
                    </p>
                    <p className="type-body" style={{ color: '#8b8b8b', margin: 0, maxWidth: 440 }}>
                      We design Make as the process engine that connects systems like Airtable, CRMs, finance tools, email, Slack, and internal apps into one coherent workflow.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div>
                <Image src="/make-hero-mockup.png" alt="Make interface mockup"
                  width={680} height={460} className="cwa-hero-img-desktop"
                  style={{ width: '100%', height: 'auto' }} priority />
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. What we build with Make ── */}
        <section className="qc-section" style={{ background: '#f5f9ff' }}>
          <div className="qc-container">
            <h2 className="type-heading-eb-48" style={{ margin: '0 0 2rem', color: '#111827', textAlign: 'center' }}>
              What we build with <span style={{ color: '#7c3aed' }}>Make</span>
            </h2>

            {/* 5 dark cards */}
            <div className="plt-wyb-grid">
              {useCases.map((item) => (
                <div key={item.title} className="plt-wyb-card">
                  <Image src={item.icon} alt="" width={40} height={40} style={{ objectFit: 'contain', marginBottom: 'auto' }} />
                  <div className="type-body-semibold" style={{ color: '#fff', lineHeight: 1.3, whiteSpace: 'pre-line' }}>
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="qc-section plt-capabilities-overlap-section" style={{ background: '#fff', padding: 0 }}>
          <div className="qc-container">
            {/* Make logo divider */}
            <div className="plt-capabilities-section">
              <div className="plt-capabilities-logo">
                <Image
                  src="/logos/make-circle.png"
                  alt="Make"
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
                            className="type-body-semibold"
                            style={{
                              color: '#111827',
                              marginBottom: '0.3rem',
                              fontSize: 24,
                            }}
                          >
                            {cap.title}
                          </div>
                          <div
                            className="type-body-sm"
                            style={{
                              color: '#6b7280',
                              lineHeight: 1.6,
                              fontSize: 16,
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
              {CASE_STUDIES.map(cs => (
                <div key={cs.slug} className="qc-case-cards-row">
                  <div className="qc-case-featured-wrapper">
                    <div className="qc-case-featured">
                      <div className="qc-case-featured-image">
                        <Image src={cs.cardImage} alt=""
                          fill sizes="(max-width: 900px) 45vw, 420px" style={{ objectFit: 'cover' }} />
                      </div>
                      <div className="qc-case-featured-content">
                        <div className="qc-case-featured-top">
                          <span className="qc-case-pill">{cs.industryLabel}</span>
                          <a href={`/case-studies/${cs.slug}`} className="qc-case-learn-more">Learn more <span aria-hidden>↗</span></a>
                        </div>
                        <h3 className="type-heading-eb-32">{cs.title}</h3>
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
                    <Image src="/case-studies/case-study-card.png" alt="" fill sizes="280px" style={{ objectFit: 'cover' }} />
                    <div className="qc-case-small-card-overlay" aria-hidden />
                  </div>
                  <div className="qc-case-small-card">
                    <Image src="/case-studies/case-study-card-2.png" alt="" fill sizes="280px" style={{ objectFit: 'cover' }} />
                    <div className="qc-case-small-card-overlay" aria-hidden />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Automation & integrations ── */}
        <section className="qc-section" style={{ background: '#f5f9ff' }}>
          <div className="qc-container">
            <div className="plt-automation-grid">
              {/* Left - section image */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'relative', width: '100%' }}>
                  <Image src="/make-automations-section.png" alt="Make automation and integrations"
                    width={520} height={360} style={{ width: '100%', height: 'auto', borderRadius: '16px' }} />
                  <Image src="/user-quitcode-mouse.png" alt="" width={120} height={60}
                    style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '120px', height: 'auto', pointerEvents: 'none' }} />
                </div>
              </div>

              {/* Right */}
              <div>
                <h2 className="type-heading-eb-48" style={{ margin: '0 0 16px', color: '#111827' }}>
                  Automation &amp; integrations
                </h2>
                <p className="type-body" style={{ color: '#2e2e2e', fontWeight: 500, margin: '0 0 64px' }}>
                  Make acts as the process engine behind your operations. It structures execution, controls workflow logic, and keeps processes running reliably.
                </p>

                <div style={{ color: '#2e2e2e', fontSize: '16px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
                  WE AUTOMATE
                </div>
                <ul style={{ margin: '0 0 64px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {weAutomate.map((item) => (
                    <li key={item.text} className="type-body" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#374151' }}>
                      <Image src={item.icon} alt="" width={24} height={24} style={{ objectFit: 'contain', flexShrink: 0 }} />
                      {item.text}
                    </li>
                  ))}
                </ul>

                <div style={{ color: '#2e2e2e', fontSize: '16px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
                  RESULT
                </div>
                <div style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.1, background: 'linear-gradient(90deg, #3985F8, #9291FC, #CC99FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Fewer manual handoffs, reduced operational risk, and predictable execution at scale.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. We recommend Make when clients need ── */}
        <section className="plt-recommend-section">
          <div className="qc-container">
            <div className="plt-recommend-panel">

              {/* Top: 2-column grid */}
              <div className="plt-recommend-grid">
                {/* Left - label + heading */}
                <div>
                  <div className="type-caption-sm-bold" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '0.85rem' }}>
                    WHY &amp; WHEN
                  </div>
                  <h2 className="type-heading-eb-48" style={{ color: '#fff', margin: 0 }}>
                    We recommend<br />
                    Make when<br />
                    clients need:
                  </h2>
                </div>

                {/* Right - icon items column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {whenClientsNeed.map((item) => (
                    <div key={item.text} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      <div style={{
                        width: 76, height: 76, borderRadius: '999px',
                        border: '1px solid rgba(255,255,255,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Image src={item.icon} alt="" width={38} height={38} style={{ objectFit: 'contain' }} />
                      </div>
                      <span style={{ color: 'rgba(255,255,255,0.82)', marginBottom: 48, marginTop: 12, fontFamily: 'Karla, sans-serif', fontSize: 32, fontWeight: 600, lineHeight: 1.2 }}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom row: pill → connector → statement */}
              <div className="plt-recommend-bottom">
                <div className="plt-recommend-pill">
                  <Image src="/logos/make.png" alt="Make" width={120} height={40} style={{ objectFit: 'contain' }} />
                </div>
                <div className="plt-recommend-connector" aria-hidden>
                  <div className="plt-recommend-line" />
                  <div className="plt-recommend-arrowhead" />
                </div>
                <p className="plt-recommend-statement">
                  Platform that lets operations scale in complexity without becoming fragile.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── 6. Tell us how you're using Make ── */}
        <MakeFormSection />

        {/* ── 7. Explore our core technologies ── */}
        <section className="qc-section">
          <div className="qc-container">
            <div className="plt-tech-grid">
              {/* Left */}
              <div className="plt-tech-left">
                <h2 className="type-heading-eb-48" style={{ color: '#111827', margin: '0 0 2rem' }}>
                  Explore our core technologies
                </h2>
                <p className="type-body" style={{ color: '#6b7280', margin: 0 }}>
                  The platforms we combine to build reliable, scalable systems.
                </p>
                <div className="plt-tech-decoration" aria-hidden>
                  <Image src="/glass-cta/Asset_icon.png" alt="" width={36} height={36} style={{ objectFit: 'contain' }} />
                  <div className="plt-tech-decoration-line" />
                </div>
              </div>

              {/* Right - technology cards */}
              <div className="plt-tech-cards">
                {coreTechnologies.map((tech) => (
                  <div key={tech.title} style={{ borderRadius: '16px', overflow: 'hidden', background: '#fff' }}>
                    {/* Logo area */}
                    <div style={{ background: '#f5f7fb', height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
                      {tech.logo ? (
                        <Image src={tech.logo} alt={tech.logoAlt || ''} width={140} height={48} style={{ objectFit: 'contain', maxWidth: '70%' }} />
                      ) : (
                        <span style={{ fontSize: '2rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}>
                          {tech.logoText}
                        </span>
                      )}
                    </div>
                    {/* Content */}
                    <div style={{ padding: '1.25rem 1.5rem' }}>
                      <span className="type-caption-bold" style={{
                        display: 'inline-block', background: '#7c3aed', color: '#fff',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '5px', marginBottom: '32px',
                      }}>
                        Technology
                      </span>
                      <h3 className="type-heading-eb-40" style={{ margin: '0 0 40px', color: '#111827', fontWeight: 800 }}>
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

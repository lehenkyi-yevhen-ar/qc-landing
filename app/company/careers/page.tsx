'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';

const OPEN_POSITIONS = [
  {
    id: 1,
    title: 'Project Manager',
    location: 'Lviv',
    tags: ['Full time', 'Remote', 'Trainee / Junior / Middle'],
    href: '/company/careers/project-manager',
    featured: true,
  },
  {
    id: 2,
    title: 'Trainee/Junior No-code Developer',
    location: 'Europe',
    tags: ['Full time'],
    href: '/company/careers/no-code-developer',
    featured: false,
  },
];

const WHY_JOIN = [
  {
    type: 'text' as const,
    icon: '/icons/chess-icon.png',
    text: 'No-code and AI are the future – and we\'re already building it.',
    gradient: true,
  },
  {
    type: 'photo' as const,
    src: '/careers/photo-team-1.png',
    alt: 'Team collaborating',
  },
  {
    type: 'text' as const,
    icon: '/icons/journal-icon.png',
    text: 'We believe in people, not just CVs – we\'ll train and support you from day one.',
    gradient: false,
  },
  {
    type: 'text' as const,
    icon: '/icons/star-icon.png',
    text: 'Real impact, real projects, and real career opportunities.',
    gradient: true,
  },
  {
    type: 'text' as const,
    icon: '/icons/men-icon.png',
    text: 'You\'ll join a company that\'s growing fast and values initiative, creativity, and learning.',
    gradient: false,
  },
  {
    type: 'photo' as const,
    src: '/careers/photo-office.png',
    alt: 'Team in office',
  },
];

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export default function CareersPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    linkedin: '',
    message: '',
    cvFile: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          linkedin: form.linkedin,
          message: form.message,
          type: 'careers',
        }),
      });
      if (!response.ok) throw new Error('Request failed');
      setForm({ firstName: '', lastName: '', linkedin: '', message: '', cvFile: null });
      setFormStatus('success');
    } catch {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="qc-page">
      <main>
        {/* ── Hero ── */}
        <section className="qc-careers-hero">
          <div className="qc-careers-hero-bg" aria-hidden />
          <div className="qc-container qc-careers-hero-inner">
            <div className="qc-careers-hero-left">
              <Breadcrumb
                crumbs={[
                  { label: 'Home', href: '/' },
                  { label: 'Company', href: '/company', inactive: true },
                  { label: 'Careers', href: '/company/careers' },
                ]}
              />
              <h1 className="qc-careers-hero-title">Careers at QuitCode</h1>
              <p className="qc-careers-hero-subtitle">
                Build real automation systems. Grow with a team that values thinking,
                ownership, and impact.
              </p>
              <Link href="#open-positions" className="qc-careers-hero-cta">
                <span>View open roles</span>
                  <img src="/icons/arrow-down-circle.png" alt="Arrow down in circle" style={{width: 25, height: 25}} />
              </Link>
            </div>

            <div className="qc-careers-hero-right">
              <div className="qc-careers-hero-deco-top" aria-hidden>
                <Image src="/glass-cta/Style_Moon.png" alt="" width={40} height={40} unoptimized />
              </div>
              <div className="qc-careers-hero-photo-wrap">
                <Image
                  src="/careers/hero-photo.png"
                  alt="QuitCode team member at work"
                  fill
                  sizes="(max-width: 540px) 80svw, 520px"
                  style={{ objectFit: 'cover' }}
                  className="qc-careers-hero-photo"
                />
              </div>
              <div className="qc-careers-hero-deco-bottom" aria-hidden>
                <Image src="/glass-cta/Asset_Icon.png" alt="" width={40} height={40} unoptimized />
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Join QuitCode ── */}
        <section className="qc-section qc-careers-why">
          <div className="qc-container">
            <h2 className="qc-careers-why-title">Why Join QuitCode</h2>
            <div className="qc-careers-why-grid">
              {/* Row 1: gradient(wide) | photo(square) | plain(longest) */}
              <div className="qc-careers-why-row">
                {[WHY_JOIN[0], WHY_JOIN[1], WHY_JOIN[2]].map((item, i) => {
                  if (item.type === 'photo') return (
                    <div key={i} className="qc-careers-why-cell qc-careers-why-photo">
                      <Image src={item.src!} alt={item.alt!} fill sizes="400px" style={{ objectFit: 'cover' }} />
                    </div>
                  );
                  return (
                    <div key={i} className={`qc-careers-why-cell qc-careers-why-card${item.gradient ? ' qc-careers-why-card--gradient' : ''}`}>
                      <div style={{
                        width: 76, height: 76, borderRadius: 32, flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.35)',
                      }}>
                        <Image src={item.icon!} alt="" width={44} height={44} style={{ objectFit: 'contain' }} />
                      </div>
                      <p style={{ margin: 0, fontFamily: 'Karla, sans-serif', fontWeight: 700, fontSize: 28, color: item.gradient ? '#fff' : '#360092' }}>{item.text}</p>
                    </div>
                  );
                })}
              </div>
              {/* Row 2: plain(longest) | gradient(wide) | photo(square) */}
              <div className="qc-careers-why-row">
                {[WHY_JOIN[4], WHY_JOIN[3], WHY_JOIN[5]].map((item, i) => {
                  if (item.type === 'photo') return (
                    <div key={i} className="qc-careers-why-cell qc-careers-why-photo">
                      <Image src={item.src!} alt={item.alt!} fill sizes="400px" style={{ objectFit: 'cover' }} />
                    </div>
                  );
                  return (
                    <div key={i} className={`qc-careers-why-cell qc-careers-why-card${item.gradient ? ' qc-careers-why-card--gradient' : ''}`}>
                      <div style={{
                        width: 76, height: 76, borderRadius: 32, flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.35)',
                      }}>
                        <Image src={item.icon!} alt="" width={44} height={44} style={{ objectFit: 'contain' }} />
                      </div>
                      <p style={{ margin: 0, fontFamily: 'Karla, sans-serif', fontWeight: 700, fontSize: 28, color: item.gradient ? '#fff' : '#360092' }}>{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Open Positions ── */}
        <section id="open-positions" className="qc-section qc-careers-positions">
          <div className="qc-container">
            <div className="qc-careers-positions-header">
              <span className="qc-careers-apply-pill">APPLY</span>
              <h2 className="qc-careers-positions-title">Open positions</h2>
              <p className="qc-careers-positions-subtitle">
                We&apos;re always looking for people who want to grow, take ownership, and build systems that matter.
              </p>
              <div className="qc-careers-positions-sparkle" aria-hidden>
                <Image src="/careers/sparkle-3d.png" alt="" width={120} height={120} unoptimized />
              </div>
            </div>
            <p className="qc-careers-positions-count">{OPEN_POSITIONS.length} OPEN JOBS</p>
            <div className="qc-careers-positions-list">
              {OPEN_POSITIONS.map((job) => (
                <Link key={job.id} href={job.href} className={`qc-careers-job-card${job.featured ? ' qc-careers-job-card--featured' : ''}`}>
                  <div className="qc-careers-job-info">
                    <h3 className="qc-careers-job-title">{job.title}</h3>
                    <div className="qc-careers-job-meta">
                      <span className="qc-careers-job-location">
                        <img src="/icons/location-icon-black.png" alt="Location icon black" style={{width: 32, height: 32}} />
                        {job.location}
                      </span>
                      <div className="qc-careers-job-tags">
                        {job.tags.map((tag) => (
                          <span key={tag} className="qc-careers-job-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="qc-careers-job-footer">
                    <span>Learn more</span>
                    <img src="/icons/arrow-link-blue.png" alt="Arrow link blue" style={{width: 28, height: 28}} />
                  </div>
                </Link>
              ))}
            </div>
            <div className="qc-careers-positions-footer">
              <Link href="#" className="qc-careers-view-all">VIEW ALL</Link>
            </div>
          </div>
        </section>

        {/* ── Apply Form ── */}
        <section className="qc-careers-form-section">
          <div className="qc-careers-form-glow" aria-hidden />
          <div className="qc-careers-form-container">
            <div className="qc-careers-form-grid">
              <div className="qc-careers-form-col">
                <h2 className="qc-careers-form-title">
                  Let&apos;s talk about working<br />
                  at <span className="qc-careers-form-title-highlight">QuitCode</span>
                </h2>

            
                <form onSubmit={handleSubmit} className="qc-journey-form">
                  <div className="qc-journey-fields">
                    <div className="qc-journey-field">
                      <div className="qc-input-wrap qc-journey-input-wrap">
                        <label htmlFor="careers-firstname" className="qc-input-label qc-input-label-float qc-journey-label">
                          First name <span className="qc-journey-required">*required</span>
                        </label>
                        <input
                          id="careers-firstname"
                          type="text"
                          required
                          placeholder="Type here..."
                          value={form.firstName}
                          onChange={e => setForm(c => ({ ...c, firstName: e.target.value }))}
                          className="qc-input qc-journey-input"
                        />
                        <button
                          type="button"
                          className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear"
                          onClick={() => setForm(c => ({ ...c, firstName: '' }))}
                          aria-label="Clear first name"
                        >
                          <Image src="/icons/inactive-cross.png" alt="" width={25} height={25} className="qc-clear-icon qc-clear-icon-inactive" />
                          <Image src="/icons/active-cross.png" alt="" width={25} height={25} className="qc-clear-icon qc-clear-icon-active" />
                        </button>
                      </div>
                    </div>

                    <div className="qc-journey-field">
                      <div className="qc-input-wrap qc-journey-input-wrap">
                        <label htmlFor="careers-lastname" className="qc-input-label qc-input-label-float qc-journey-label">
                          Last name <span className="qc-journey-required">*required</span>
                        </label>
                        <input
                          id="careers-lastname"
                          type="text"
                          required
                          placeholder="Type here..."
                          value={form.lastName}
                          onChange={e => setForm(c => ({ ...c, lastName: e.target.value }))}
                          className="qc-input qc-journey-input"
                        />
                        <button
                          type="button"
                          className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear"
                          onClick={() => setForm(c => ({ ...c, lastName: '' }))}
                          aria-label="Clear last name"
                        >
                          <Image src="/icons/inactive-cross.png" alt="" width={25} height={25} className="qc-clear-icon qc-clear-icon-inactive" />
                          <Image src="/icons/active-cross.png" alt="" width={25} height={25} className="qc-clear-icon qc-clear-icon-active" />
                        </button>
                      </div>
                    </div>

                    <div className="qc-journey-field">
                      <div className="qc-input-wrap qc-journey-input-wrap">
                        <label htmlFor="careers-linkedin" className="qc-input-label qc-input-label-float qc-journey-label">
                          LinkedIn profile
                        </label>
                        <input
                          id="careers-linkedin"
                          type="url"
                          placeholder="Type here..."
                          value={form.linkedin}
                          onChange={e => setForm(c => ({ ...c, linkedin: e.target.value }))}
                          className="qc-input qc-journey-input"
                        />
                        <button
                          type="button"
                          className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear"
                          onClick={() => setForm(c => ({ ...c, linkedin: '' }))}
                          aria-label="Clear LinkedIn"
                        >
                          <Image src="/icons/inactive-cross.png" alt="" width={25} height={25} className="qc-clear-icon qc-clear-icon-inactive" />
                          <Image src="/icons/active-cross.png" alt="" width={25} height={25} className="qc-clear-icon qc-clear-icon-active" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="qc-journey-field">
                    <div className="qc-input-wrap qc-journey-input-wrap">
                      <label htmlFor="careers-message" className="qc-input-label qc-input-label-float qc-journey-label">
                        Your message <span className="qc-journey-optional">optional</span>
                      </label>
                      <textarea
                        id="careers-message"
                        placeholder="Any questions or context you'd like to share?"
                        value={form.message}
                        onChange={e => setForm(c => ({ ...c, message: e.target.value }))}
                        className="qc-journey-textarea"
                        rows={4}
                      />
                    </div>
                  </div>

                  <div className="qc-journey-upload-wrap">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.docx"
                      style={{ display: 'none' }}
                      onChange={e => setForm(c => ({ ...c, cvFile: e.target.files?.[0] ?? null }))}
                      aria-label="Upload CV"
                    />
                    <button
                      type="button"
                      className="qc-journey-upload-btn"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Image src="/icons/attach-icon.png" alt="" width={24} height={24} />
                      {form.cvFile ? form.cvFile.name : 'Attach CV (optional)'}
                    </button>
                    <p className="qc-journey-upload-helper">Supported: PDF, DOCX (max 10MB)</p>
                  </div>

                  <div className="qc-journey-cta-wrap">
                    <button
                      type="submit"
                      className="qc-journey-cta qc-conversation-cta qc-careers-apply-cta"
                      disabled={isSubmitting}
                    >
                      <span>{isSubmitting ? 'Sending…' : 'Submit Application'}</span>
                      <Image src="/icons/arrow-right.png" alt="" width={24} height={24} />
                    </button>
                  </div>

                  <ul className="qc-journey-trust">
                    <li><span className="qc-journey-trust-icon" aria-hidden>⚡</span> Nastia usually replies within 1–2 business days</li>
                    <li><span className="qc-journey-trust-icon" aria-hidden>🔒</span> Your data is secure</li>
                  </ul>

                  {formStatus === 'success' && (
                    <p className="qc-journey-form-status qc-journey-form-status-success">
                      Thanks — your application has been sent!
                    </p>
                  )}
                  {formStatus === 'error' && (
                    <p className="qc-journey-form-status qc-journey-form-status-error">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </div>

              <aside className="qc-careers-form-aside">
                <div className="qc-careers-form-photo-wrap">
                  <Image
                    src="/careers/nastia-photo.png"
                    alt="Nastia from QuitCode"
                    fill
                    sizes="(max-width: 900px) 100vw, 480px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="qc-journey-privacy">
                  <div className="qc-journey-privacy-label">PRIVACY NOTE</div>
                  <p className="qc-journey-privacy-text">
                    We respect your privacy. Your information will only be used to
                    contact you about your inquiry. We never share or sell your data.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

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
    icon: '/careers/icon-strategy.png',
    iconFallback: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" aria-hidden>
        <path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 15h6v6h-6zM9 6h6M6 9v6M18 9v6M9 18h6" />
      </svg>
    ),
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
    icon: '/careers/icon-cv.png',
    iconFallback: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3985f8" strokeWidth="1.5" aria-hidden>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </svg>
    ),
    text: 'We believe in people, not just CVs – we\'ll train and support you from day one.',
    gradient: false,
  },
  {
    type: 'text' as const,
    icon: '/careers/icon-impact.png',
    iconFallback: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" aria-hidden>
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
    text: 'Real impact, real projects, and real career opportunities.',
    gradient: true,
  },
  {
    type: 'text' as const,
    icon: '/careers/icon-team.png',
    iconFallback: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3985f8" strokeWidth="1.5" aria-hidden>
        <circle cx="9" cy="7" r="3" /><circle cx="15" cy="7" r="3" />
        <path d="M3 20c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6" />
      </svg>
    ),
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
                <span className="qc-careers-hero-cta-icon" aria-hidden>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 4v16m-8-8 8 8 8-8" />
                  </svg>
                </span>
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
              {/* Row 1: wide(white) | square(photo) | widest(gradient) */}
              <div className="qc-careers-why-row">
                {[WHY_JOIN[2], WHY_JOIN[1], WHY_JOIN[0]].map((item, i) => {
                  if (item.type === 'photo') return (
                    <div key={i} className="qc-careers-why-cell qc-careers-why-photo">
                      <Image src={item.src!} alt={item.alt!} fill sizes="400px" style={{ objectFit: 'cover' }} />
                    </div>
                  );
                  return (
                    <div key={i} className={`qc-careers-why-cell qc-careers-why-card${item.gradient ? ' qc-careers-why-card--gradient' : ''}`}>
                      <div className="qc-careers-why-card-icon">{item.iconFallback}</div>
                      <p className="qc-careers-why-card-text">{item.text}</p>
                    </div>
                  );
                })}
              </div>
              {/* Row 2: widest(gradient) | wide(white) | square(photo) */}
              <div className="qc-careers-why-row">
                {[WHY_JOIN[3], WHY_JOIN[4], WHY_JOIN[5]].map((item, i) => {
                  if (item.type === 'photo') return (
                    <div key={i} className="qc-careers-why-cell qc-careers-why-photo">
                      <Image src={item.src!} alt={item.alt!} fill sizes="400px" style={{ objectFit: 'cover' }} />
                    </div>
                  );
                  return (
                    <div key={i} className={`qc-careers-why-cell qc-careers-why-card${item.gradient ? ' qc-careers-why-card--gradient' : ''}`}>
                      <div className="qc-careers-why-card-icon">{item.iconFallback}</div>
                      <p className="qc-careers-why-card-text">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Open Positions ── */}
        <section id="open-positions" className="qc-section qc-careers-positions">
          <div className="qc-careers-positions-sparkle" aria-hidden>
            <Image src="/careers/sparkle-3d.png" alt="" width={120} height={120} unoptimized />
          </div>
          <div className="qc-container">
            <div className="qc-careers-positions-header">
              <span className="qc-careers-apply-pill">APPLY</span>
              <h2 className="qc-careers-positions-title">Open positions</h2>
              <p className="qc-careers-positions-subtitle">
                We&apos;re always looking for people who want to grow, take ownership, and build systems that matter.
              </p>
            </div>
            <p className="qc-careers-positions-count">{OPEN_POSITIONS.length} OPEN JOBS</p>
            <div className="qc-careers-positions-list">
              {OPEN_POSITIONS.map((job) => (
                <Link key={job.id} href={job.href} className={`qc-careers-job-card${job.featured ? ' qc-careers-job-card--featured' : ''}`}>
                  <div className="qc-careers-job-info">
                    <h3 className="qc-careers-job-title">{job.title}</h3>
                    <div className="qc-careers-job-meta">
                      <span className="qc-careers-job-location">
                        <LocationIcon />
                        {job.location}
                      </span>
                      {job.tags.map((tag) => (
                        <span key={tag} className="qc-careers-job-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <span className="qc-careers-job-arrow">
                    <ArrowIcon />
                  </span>
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

            
                <form onSubmit={handleSubmit} className="qc-careers-form">
                  <div className="qc-careers-form-row">
                    <div className="qc-input-wrap qc-journey-input-wrap">
                      <label htmlFor="careers-firstname" className="qc-input-label qc-input-label-float qc-journey-label">
                        First name <span className="qc-journey-required">*required</span>
                      </label>
                      <input
                        id="careers-firstname"
                        type="text"
                        required
                        placeholder="Input"
                        value={form.firstName}
                        onChange={e => setForm(c => ({ ...c, firstName: e.target.value }))}
                        className="qc-input qc-journey-input"
                      />
                      {form.firstName && (
                        <button
                          type="button"
                          className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear"
                          onClick={() => setForm(c => ({ ...c, firstName: '' }))}
                          aria-label="Clear first name"
                        >×</button>
                      )}
                    </div>
                  </div>

                  <div className="qc-careers-form-row">
                    <div className="qc-input-wrap qc-journey-input-wrap">
                      <label htmlFor="careers-lastname" className="qc-input-label qc-input-label-float qc-journey-label">
                        Last name <span className="qc-journey-required">*required</span>
                      </label>
                      <input
                        id="careers-lastname"
                        type="text"
                        required
                        placeholder="Input"
                        value={form.lastName}
                        onChange={e => setForm(c => ({ ...c, lastName: e.target.value }))}
                        className="qc-input qc-journey-input"
                      />
                      {form.lastName && (
                        <button
                          type="button"
                          className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear"
                          onClick={() => setForm(c => ({ ...c, lastName: '' }))}
                          aria-label="Clear last name"
                        >×</button>
                      )}
                    </div>
                  </div>

                  <div className="qc-careers-form-row">
                    <div className="qc-input-wrap qc-journey-input-wrap">
                      <label htmlFor="careers-linkedin" className="qc-input-label qc-input-label-float qc-journey-label">
                        LinkedIn profile
                      </label>
                      <input
                        id="careers-linkedin"
                        type="url"
                        placeholder="Input"
                        value={form.linkedin}
                        onChange={e => setForm(c => ({ ...c, linkedin: e.target.value }))}
                        className="qc-input qc-journey-input"
                      />
                      {form.linkedin && (
                        <button
                          type="button"
                          className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear"
                          onClick={() => setForm(c => ({ ...c, linkedin: '' }))}
                          aria-label="Clear LinkedIn"
                        >×</button>
                      )}
                    </div>
                  </div>

                  <div className="qc-careers-form-row">
                    <div className="qc-input-wrap qc-journey-input-wrap">
                      <label htmlFor="careers-message" className="qc-input-label qc-input-label-float qc-journey-label">
                        Your message <span className="qc-journey-optional">optional</span>
                      </label>
                      <textarea
                        id="careers-message"
                        placeholder="Any questions or context you'd like to share?"
                        value={form.message}
                        onChange={e => setForm(c => ({ ...c, message: e.target.value }))}
                        className="qc-input qc-journey-input qc-careers-textarea"
                        rows={4}
                      />
                    </div>
                  </div>

                  <div className="qc-careers-upload-wrap">
                    <button
                      type="button"
                      className="qc-careers-upload-btn"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                      </svg>
                      {form.cvFile ? form.cvFile.name : 'Upload CV'}
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.docx"
                      className="qc-careers-file-input"
                      onChange={e => setForm(c => ({ ...c, cvFile: e.target.files?.[0] ?? null }))}
                      aria-label="Upload CV"
                    />
                    <p className="qc-journey-upload-helper">Supported: PDF, DOCX (max 10MB)</p>
                  </div>

                  <button
                    type="submit"
                    className="qc-careers-submit-btn"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Sending…' : 'Submit'}</span>
                    <span aria-hidden>→</span>
                  </button>

                  <p className="qc-careers-form-note">
                    <span className="qc-careers-form-note-star" aria-hidden>✦</span>
                    Nastia usually replies within 1–2 business days
                  </p>

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

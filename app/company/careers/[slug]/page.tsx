'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { JOBS, getJob } from '@/lib/jobs';

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" stroke="#6C7BFF" strokeWidth="1.5" />
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#6C7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" stroke="#a5b4fc" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 21C12 21 3 14 3 8.5A5.5 5.5 0 0 1 12 5.5 5.5 5.5 0 0 1 21 8.5C21 14 12 21 12 21z" stroke="#a5b4fc" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export default function JobPage() {
  const { slug } = useParams<{ slug: string }>();
  const job = getJob(slug);
  if (!job) notFound();

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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          linkedin: form.linkedin,
          message: form.message,
          role: job.title,
          type: 'job-application',
        }),
      });
      if (!res.ok) throw new Error();
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
        {/* ── Job Hero ── */}
        <section className="qc-job-hero">
          <div className="qc-job-hero-bg" aria-hidden />
          <div className="qc-container qc-job-hero-inner">
            <div className="qc-job-hero-left">
              <Link href="/company/careers" className="qc-job-back">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M19 12H5M5 12l7-7M5 12l7 7" />
                </svg>
                Back
              </Link>

              <h1 className="qc-job-hero-title">
                {job.title}{' '}
                <span className="qc-job-hero-title-at">at</span>{' '}
                <span className="qc-job-hero-title-brand">QuitCode</span>
              </h1>

              <div className="qc-job-hero-meta">
                <div className="qc-job-hero-meta-group">
                  <span className="qc-job-hero-meta-label">LOCATION</span>
                  <span className="qc-job-hero-meta-value qc-job-hero-meta-location">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    {job.location}
                  </span>
                </div>
                <div className="qc-job-hero-meta-group">
                  <span className="qc-job-hero-meta-label">TYPE</span>
                  <span className="qc-job-hero-meta-pill">{job.type}</span>
                </div>
                <div className="qc-job-hero-meta-group">
                  <span className="qc-job-hero-meta-label">LEVEL</span>
                  <span className="qc-job-hero-meta-pill">{job.level}</span>
                </div>
              </div>
            </div>

            <div className="qc-job-hero-right">
              <div className="qc-job-apply-card">
                <div className="qc-job-apply-card-top">
                  <div>
                    <p className="qc-job-apply-card-title">Apply for this role</p>
                    <p className="qc-job-apply-card-sub">and join a team of professionals</p>
                  </div>
                  <div className="qc-job-apply-card-avatar-wrap">
                    <div className="qc-job-apply-card-avatars">
                      <Image src="/careers/nastia-photo.png" alt="" width={36} height={36} className="qc-job-apply-card-avatar" style={{ objectFit: 'cover' }} />
                      <Image src="/roman-avatar.png" alt="" width={36} height={36} className="qc-job-apply-card-avatar" style={{ objectFit: 'cover' }} />
                      <Image src="/hero-avatar.png" alt="" width={36} height={36} className="qc-job-apply-card-avatar" style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="qc-job-apply-card-profile">
                      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden>
                        <circle cx="20" cy="20" r="20" fill="url(#profile-grad)" />
                        <ellipse cx="20" cy="16" rx="7" ry="7" fill="white" fillOpacity="0.7" />
                        <ellipse cx="20" cy="36" rx="13" ry="10" fill="white" fillOpacity="0.5" />
                        <defs>
                          <linearGradient id="profile-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#a5b4fc" />
                            <stop offset="1" stopColor="#818cf8" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <Link href="#apply" className="qc-job-apply-card-btn">
                  Apply now →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Job Content ── */}
        <section className="qc-section qc-job-content">
          <div className="qc-container qc-job-content-inner">
            <div className="qc-job-block">
              <h2 className="qc-job-section-title">About the role</h2>
              <p className="qc-job-about-text">{job.about}</p>
            </div>

            <div className="qc-job-block">
              <h2 className="qc-job-section-title">What you&apos;ll do</h2>
              <ul className="qc-job-list">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="qc-job-list-item">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="qc-job-two-col">
              <div className="qc-job-block">
                <h2 className="qc-job-section-title">What we expect from you</h2>
                <ul className="qc-job-list">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="qc-job-list-item">
                      <StarIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="qc-job-block">
                <h2 className="qc-job-section-title">Nice to have (Optional)</h2>
                <ul className="qc-job-list">
                  {job.niceToHave.map((item, i) => (
                    <li key={i} className="qc-job-list-item">
                      <StarIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="qc-job-block">
              <h2 className="qc-job-section-title">What we offer</h2>
              <ul className="qc-job-list">
                {job.benefits.map((item, i) => (
                  <li key={i} className="qc-job-list-item">
                    <HeartIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Apply Form ── */}
        <section id="apply" className="qc-careers-form-section">
          <div className="qc-careers-form-glow" aria-hidden />
          <div className="qc-careers-form-container">
            <div className="qc-careers-form-grid">
              <div className="qc-careers-form-col">
                <h2 className="qc-job-apply-title">Apply</h2>
                <p className="qc-job-apply-subtitle">
                  If you feel this role could be a good fit, we&apos;d love to see your application.
                </p>

                <div className="qc-careers-form-logo" aria-hidden>
                  <Image src="/glass-cta/Asset_Icon.png" alt="" width={36} height={36} unoptimized />
                </div>

                <form onSubmit={handleSubmit} className="qc-careers-form">
                  <div className="qc-careers-form-row">
                    <div className="qc-input-wrap qc-journey-input-wrap">
                      <label htmlFor="job-firstname" className="qc-input-label qc-input-label-float qc-journey-label">
                        First name <span className="qc-journey-required">*required</span>
                      </label>
                      <input
                        id="job-firstname"
                        type="text"
                        required
                        placeholder="Input"
                        value={form.firstName}
                        onChange={e => setForm(c => ({ ...c, firstName: e.target.value }))}
                        className="qc-input qc-journey-input"
                      />
                      {form.firstName && (
                        <button type="button" className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear" onClick={() => setForm(c => ({ ...c, firstName: '' }))} aria-label="Clear">×</button>
                      )}
                    </div>
                  </div>

                  <div className="qc-careers-form-row">
                    <div className="qc-input-wrap qc-journey-input-wrap">
                      <label htmlFor="job-lastname" className="qc-input-label qc-input-label-float qc-journey-label">
                        Last name <span className="qc-journey-required">*required</span>
                      </label>
                      <input
                        id="job-lastname"
                        type="text"
                        required
                        placeholder="Input"
                        value={form.lastName}
                        onChange={e => setForm(c => ({ ...c, lastName: e.target.value }))}
                        className="qc-input qc-journey-input"
                      />
                      {form.lastName && (
                        <button type="button" className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear" onClick={() => setForm(c => ({ ...c, lastName: '' }))} aria-label="Clear">×</button>
                      )}
                    </div>
                  </div>

                  <div className="qc-careers-form-row">
                    <div className="qc-input-wrap qc-journey-input-wrap">
                      <label htmlFor="job-linkedin" className="qc-input-label qc-input-label-float qc-journey-label">
                        LinkedIn profile
                      </label>
                      <input
                        id="job-linkedin"
                        type="url"
                        placeholder="Input"
                        value={form.linkedin}
                        onChange={e => setForm(c => ({ ...c, linkedin: e.target.value }))}
                        className="qc-input qc-journey-input"
                      />
                      {form.linkedin && (
                        <button type="button" className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear" onClick={() => setForm(c => ({ ...c, linkedin: '' }))} aria-label="Clear">×</button>
                      )}
                    </div>
                  </div>

                  <div className="qc-careers-form-row">
                    <div className="qc-input-wrap qc-journey-input-wrap">
                      <label htmlFor="job-message" className="qc-input-label qc-input-label-float qc-journey-label">
                        Your message <span className="qc-journey-optional">optional</span>
                      </label>
                      <textarea
                        id="job-message"
                        placeholder="Any questions or context you'd like to share?"
                        value={form.message}
                        onChange={e => setForm(c => ({ ...c, message: e.target.value }))}
                        className="qc-input qc-journey-input qc-careers-textarea"
                        rows={4}
                      />
                    </div>
                  </div>

                  <div className="qc-careers-upload-wrap">
                    <button type="button" className="qc-careers-upload-btn" onClick={() => fileInputRef.current?.click()}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                      </svg>
                      {form.cvFile ? form.cvFile.name : 'Upload CV'}
                    </button>
                    <input ref={fileInputRef} type="file" accept=".pdf,.docx" className="qc-careers-file-input" onChange={e => setForm(c => ({ ...c, cvFile: e.target.files?.[0] ?? null }))} aria-label="Upload CV" />
                    <p className="qc-journey-upload-helper">Supported: PDF, DOCX (max 10MB)</p>
                  </div>

                  <button type="submit" className="qc-careers-submit-btn" disabled={isSubmitting}>
                    <span>{isSubmitting ? 'Sending…' : 'Submit'}</span>
                    <span aria-hidden>→</span>
                  </button>

                  {formStatus === 'success' && (
                    <p className="qc-journey-form-status qc-journey-form-status-success">Thanks — your application has been sent!</p>
                  )}
                  {formStatus === 'error' && (
                    <p className="qc-journey-form-status qc-journey-form-status-error">Something went wrong. Please try again.</p>
                  )}
                </form>
              </div>

              <aside className="qc-careers-form-aside">
                <div className="qc-careers-form-photo-wrap">
                  <Image
                    src="/careers/apply-photo.png"
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 480px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="qc-journey-privacy">
                  <div className="qc-journey-privacy-label">PRIVACY NOTE</div>
                  <p className="qc-journey-privacy-text">
                    We respect your privacy. Your information will only be used to contact you about your inquiry. We never share or sell your data.
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

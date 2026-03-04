'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FORM_DEFAULT,
  interestOptions,
  industryOptions
} from '@/lib/data';

export function JourneyFormSection() {
  const [form, setForm] = useState(FORM_DEFAULT);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);
  const industryDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (industryDropdownRef.current && !industryDropdownRef.current.contains(e.target as Node)) {
        setIndustryDropdownOpen(false);
      }
    };
    if (industryDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [industryDropdownOpen]);

  const handleToggleInterest = (value: string) => {
    setForm(current => {
      const exists = current.interests.includes(value);
      return {
        ...current,
        interests: exists
          ? current.interests.filter(v => v !== value)
          : [...current.interests, value]
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!response.ok) throw new Error('Request failed');
      setForm(FORM_DEFAULT);
      setFormStatus('success');
    } catch (error) {
      console.error(error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="journey" className="qc-section qc-journey">
      <div className="qc-journey-container">
        <div className="qc-journey-grid">
          <div className="qc-journey-form-col">
            <h2 className="qc-journey-title">Start your automation journey</h2>
            <p className="qc-journey-intro">
              Tell us about your biggest operational challenge, and we&apos;ll outline
              how automation could simplify it—in plain language, not tech talk.
            </p>

            <form onSubmit={handleSubmit} className="qc-journey-form">
              <div className="qc-journey-fields">
                <div className="qc-journey-field">
                  <div className="qc-input-wrap qc-journey-input-wrap">
                    <label htmlFor="journey-name" className="qc-input-label qc-input-label-float qc-journey-label">
                      Name <span className="qc-journey-required">*required</span>
                    </label>
                    <input
                      id="journey-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(c => ({ ...c, name: e.target.value }))}
                      placeholder="Type here..."
                      className="qc-input qc-journey-input"
                    />
                    {form.name ? (
                      <button
                        type="button"
                        className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear"
                        onClick={() => setForm(c => ({ ...c, name: '' }))}
                        aria-label="Clear name"
                      >
                        ×
                      </button>
                    ) : null}
                  </div>
                </div>
                <div className="qc-journey-field">
                  <div className="qc-input-wrap qc-journey-input-wrap">
                    <label htmlFor="journey-email" className="qc-input-label qc-input-label-float qc-journey-label">
                      Email <span className="qc-journey-required">*required</span>
                    </label>
                    <input
                      id="journey-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(c => ({ ...c, email: e.target.value }))}
                      placeholder="Type here..."
                      className="qc-input qc-journey-input"
                    />
                    {form.email ? (
                      <button
                        type="button"
                        className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear"
                        onClick={() => setForm(c => ({ ...c, email: '' }))}
                        aria-label="Clear email"
                      >
                        ×
                      </button>
                    ) : null}
                  </div>
                </div>
                <div className="qc-journey-field">
                  <div className="qc-input-wrap qc-journey-input-wrap">
                    <label htmlFor="journey-company" className="qc-input-label qc-input-label-float qc-journey-label">
                      Company name <span className="qc-journey-optional">optional</span>
                    </label>
                    <input
                      id="journey-company"
                      type="text"
                      value={form.company}
                      onChange={e => setForm(c => ({ ...c, company: e.target.value }))}
                      placeholder="Type here..."
                      className="qc-input qc-journey-input"
                    />
                    {form.company ? (
                      <button
                        type="button"
                        className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear"
                        onClick={() => setForm(c => ({ ...c, company: '' }))}
                        aria-label="Clear company"
                      >
                        ×
                      </button>
                    ) : null}
                  </div>
                </div>
                <div className="qc-journey-field qc-journey-field-dropdown" ref={industryDropdownRef}>
                  <div className="qc-input-wrap qc-journey-input-wrap">
                    <label htmlFor="journey-industry" className="qc-input-label qc-input-label-float qc-journey-label">
                      Industry
                    </label>
                    <button
                      type="button"
                      id="journey-industry"
                      aria-haspopup="listbox"
                      aria-expanded={industryDropdownOpen}
                      aria-label="Industry"
                      onClick={() => setIndustryDropdownOpen(!industryDropdownOpen)}
                      className="qc-input qc-journey-input qc-journey-dropdown-trigger"
                    >
                      {form.industry || 'Choose...'}
                    </button>
                    {form.industry ? (
                      <button
                        type="button"
                        className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear"
                        onClick={e => {
                          e.stopPropagation();
                          setForm(c => ({ ...c, industry: '' }));
                        }}
                        aria-label="Clear industry"
                      >
                        ×
                      </button>
                    ) : null}
                    <span className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-chevron" aria-hidden>▼</span>
                    {industryDropdownOpen && (
                      <div className="qc-dropdown-panel" role="listbox" aria-label="Industry options">
                        {industryOptions.map(option => (
                          <button
                            key={option}
                            type="button"
                            role="option"
                            aria-selected={form.industry === option}
                            onClick={() => {
                              setForm(c => ({ ...c, industry: option }));
                              setIndustryDropdownOpen(false);
                            }}
                            className="qc-dropdown-option"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="qc-journey-checkbox-group">
                <div className="qc-journey-checkbox-heading">
                  Which areas are you interested in?
                </div>
                <div className="qc-journey-checkbox-list">
                  {interestOptions.map(option => (
                    <label key={option} className="qc-journey-checkbox-label">
                      <input
                        type="checkbox"
                        checked={form.interests.includes(option)}
                        onChange={() => handleToggleInterest(option)}
                        className="qc-journey-checkbox"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="qc-journey-field">
                <label htmlFor="journey-challenge" className="qc-journey-label">
                  Tell us about your challenge
                </label>
                <textarea
                  id="journey-challenge"
                  value={form.challenge}
                  onChange={e => setForm(c => ({ ...c, challenge: e.target.value }))}
                  placeholder="Describe where your operations get stuck or what you'd love to automate…"
                  className="qc-journey-textarea"
                  rows={5}
                />
              </div>

              <div className="qc-journey-upload-wrap">
                <button type="button" className="qc-journey-upload-btn">
                  <svg className="qc-journey-upload-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" /></svg>
                  Attach a file (optional)
                </button>
                <p className="qc-journey-upload-helper">
                  Supported: PDF, DOCX, XLSX (max 10MB)
                </p>
              </div>

              <div className="qc-journey-cta-wrap">
                <button
                  type="submit"
                  className="qc-journey-cta qc-conversation-cta"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Sending…' : 'Book Free Consultation'}</span>
                  <span className="qc-conversation-cta-arrow" aria-hidden>→</span>
                </button>
              </div>

              <ul className="qc-journey-trust">
                <li><span className="qc-journey-trust-icon" aria-hidden>⚡</span> Response within 24 hours</li>
                <li><span className="qc-journey-trust-icon" aria-hidden>⊘</span> No sales pressure—just practical ideas</li>
                <li><span className="qc-journey-trust-icon" aria-hidden>🔒</span> Your data is secure</li>
              </ul>
              {formStatus === 'success' && (
                <p className="qc-journey-form-status qc-journey-form-status-success">
                  Thanks—your request has been sent.
                </p>
              )}
              {formStatus === 'error' && (
                <p className="qc-journey-form-status qc-journey-form-status-error">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          <aside className="qc-journey-aside">
            <div className="qc-journey-card">
              <Image
                src="/journey-form-card.png"
                alt="Person working on laptop in modern space"
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
  );
}

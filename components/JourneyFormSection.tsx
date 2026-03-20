'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FORM_DEFAULT,
  interestOptions,
  industryOptions
} from '@/lib/data';
import { Toast } from '@/components/Toast';

export function JourneyFormSection() {
  const [form, setForm] = useState(FORM_DEFAULT);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);
  const industryDropdownRef = useRef<HTMLDivElement>(null);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    setAttachedFiles(prev => {
      const combined = [...prev, ...selected];
      return combined.slice(0, 3);
    });
    e.target.value = '';
  };

  const removeFile = (index: number) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

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
      if (exists) {
        return { ...current, interests: current.interests.filter(v => v !== value) };
      }
      // Selecting "Not sure yet" clears all others; selecting anything else clears "Not sure yet"
      const filtered = value === 'Not sure yet'
        ? []
        : current.interests.filter(v => v !== 'Not sure yet');
      return { ...current, interests: [...filtered, value] };
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');
    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('company', form.company);
      formData.append('industry', form.industry);
      formData.append('interests', form.interests.join(', '));
      formData.append('challenge', form.challenge);
      formData.append('sourceUrl', window.location.href);
      formData.append('formName', 'Start your automation journey');
      attachedFiles.forEach(f => formData.append('files', f));

      const response = await fetch('/api/contact', { method: 'POST', body: formData });
      if (!response.ok) throw new Error('Request failed');
      setForm(FORM_DEFAULT);
      setAttachedFiles([]);
      setFormStatus('success');
    } catch (error) {
      console.error(error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    {formStatus === 'success' && (
      <Toast
        type="success"
        message="Thanks! Your request has been sent. We'll be in touch within 24 hours."
        onClose={() => setFormStatus('idle')}
      />
    )}
    {formStatus === 'error' && (
      <Toast
        type="error"
        message="Something went wrong. Please try again or contact us directly."
        onClose={() => setFormStatus('idle')}
      />
    )}
    <section id="journey" className="qc-section qc-journey">
      <div className="qc-journey-container">
        <div className="qc-journey-grid">
          <div className="qc-journey-form-col">
            <h2 className="qc-journey-title">
              <span className="qc-journey-title-desktop">Start your <span className='qc-journey-title-highlight'>automation</span> journey</span>
              <span className="qc-journey-title-mobile">Get <span className="qc-journey-title-gradient">Free Discovery</span></span>
            </h2>
            <p className="qc-journey-intro">
              Tell us about your biggest operational challenge, and we&apos;ll outline
              how automation could simplify it-in plain language, not tech talk.
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
                    <button
                      type="button"
                      className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear"
                      onClick={() => setForm(c => ({ ...c, name: '' }))}
                      aria-label="Clear name"
                    >
                      <Image src="/icons/inactive-cross.png" alt="" width={25} height={25} className="qc-clear-icon qc-clear-icon-inactive" />
                      <Image src="/icons/active-cross.png" alt="" width={25} height={25} className="qc-clear-icon qc-clear-icon-active" />
                    </button>
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
                    <button
                      type="button"
                      className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear"
                      onClick={() => setForm(c => ({ ...c, email: '' }))}
                      aria-label="Clear email"
                    >
                      <Image src="/icons/inactive-cross.png" alt="" width={25} height={25} className="qc-clear-icon qc-clear-icon-inactive" />
                      <Image src="/icons/active-cross.png" alt="" width={25} height={25} className="qc-clear-icon qc-clear-icon-active" />
                    </button>
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
                    <button
                      type="button"
                      className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-clear"
                      onClick={() => setForm(c => ({ ...c, company: '' }))}
                      aria-label="Clear company"
                    >
                      <Image src="/icons/inactive-cross.png" alt="" width={25} height={25} className="qc-clear-icon qc-clear-icon-inactive" />
                      <Image src="/icons/active-cross.png" alt="" width={25} height={25} className="qc-clear-icon qc-clear-icon-active" />
                    </button>
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
                      className={`qc-input qc-journey-input qc-journey-dropdown-trigger${!form.industry ? ' qc-dropdown-placeholder' : ''}`}
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
                        <Image src="/icons/inactive-cross.png" alt="" width={25} height={25} className="qc-clear-icon qc-clear-icon-inactive" />
                        <Image src="/icons/active-cross.png" alt="" width={25} height={25} className="qc-clear-icon qc-clear-icon-active" />
                      </button>
                    ) : null}
                    <span className="qc-input-icon qc-journey-input-icon qc-journey-input-icon-chevron" aria-hidden>
                      <Image src="/icons/dropdown-forms-icon.png" alt="" width={25} height={25} />
                    </span>
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
                <label htmlFor="journey-challenge" className="qc-journey-label qc-journey-label-mult">
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
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.docx,.xlsx"
                  multiple
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  className="qc-journey-upload-btn"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={attachedFiles.length >= 3}
                >
                  <Image src="/icons/attach-icon.png" alt="" width={24} height={24} />
                  Attach a file (optional)
                </button>
                <p className="qc-journey-upload-helper">
                  Supported: PDF, DOCX, XLSX (max 10MB)
                </p>
                {attachedFiles.length > 0 && (
                  <ul className="qc-journey-upload-list">
                    {attachedFiles.map((file, i) => (
                      <li key={i} className="qc-journey-upload-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        <span>{file.name}</span>
                        <button type="button" className="qc-journey-upload-remove" onClick={() => removeFile(i)} aria-label="Remove file">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="qc-journey-cta-wrap">
                <button
                  type="submit"
                  className="qc-journey-cta qc-conversation-cta"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Sending…' : 'Book Free Consultation'}</span>
                  <Image src="/icons/arrow-right.png" alt="" width={20} height={20} className="qc-conversation-cta-arrow" aria-hidden />
                </button>
              </div>

              <p style={{ fontSize: '0.78rem', color: '#9ca3af', margin: '0.75rem 0 1.5rem', lineHeight: 1.5 }}>
                By submitting, your data is processed by QuitCode and Make.com to respond to your enquiry.{' '}
                <a href="/privacy" style={{ color: '#9ca3af', textDecoration: 'underline' }}>Privacy Policy</a>.
              </p>

              <ul className="qc-journey-trust">
                <li><span className="qc-journey-trust-icon" aria-hidden>⚡</span> Response within 24 hours</li>
                <li><span className="qc-journey-trust-icon" aria-hidden>⊘</span> No sales pressure-just practical ideas</li>
                <li><span className="qc-journey-trust-icon" aria-hidden>🔒</span> Your data is secure</li>
              </ul>
            </form>
          </div>

          <aside className="qc-journey-aside">
            <div className="qc-journey-card">
              <Image
                src="/journey-form-card.webp"
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
    </>
  );
}

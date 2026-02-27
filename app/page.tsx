'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type SolutionKey = 'consulting' | 'creative' | 'education';

type CaseStudy = {
  id: number;
  label: string;
  title: string;
  challenge: string;
  solution: string;
  metrics: string[];
};

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  context: string;
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
    pain: 'Too many manual steps stealing your team’s time?',
    solution:
      'We design no-code workflows that handle data entry, task routing, and reporting—giving your team hours back every week.'
  },
  {
    id: 2,
    title: 'Data Infrastructure',
    pain: 'No single source of truth for your data?',
    solution:
      'We connect your tools into a unified system with automated data flows and real-time dashboards that reveal your business metrics instantly.'
  },
  {
    id: 3,
    title: 'Custom Web Applications',
    pain: 'Existing software doesn’t fit your process?',
    solution:
      'We build tailored apps and client portals on no-code platforms—built around how your firm actually operates.'
  },
  {
    id: 4,
    title: 'Discovery & Strategy',
    pain: 'Not sure where to start?',
    solution:
      'We map your operations, identify automation opportunities, and create a detailed roadmap before development begins.'
  }
];

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    label: 'Agency',
    title:
      '40% faster task completion after moving from spreadsheets to automated dashboards',
    challenge:
      'A growing marketing agency was tracking campaigns and deliverables across scattered sheets, making it impossible to see true workload or status.',
    solution:
      'We built a unified Airtable and Make.com system that centralised client data, automated task assignment, and surfaced live KPIs for every project.',
    metrics: ['40% faster task completion', '80+ active campaigns tracked', '1 unified dashboard']
  },
  {
    id: 2,
    label: 'Consulting',
    title: 'Proposals generated in minutes instead of days',
    challenge:
      'Consultants were rebuilding proposals from scratch for each opportunity, losing hours to copy‑paste work.',
    solution:
      'We designed a proposal engine that assembles scopes, pricing, and case studies automatically from a structured knowledge base.',
    metrics: ['4x faster proposal turnaround', 'Higher close rate', 'Consistent pricing & scope']
  },
  {
    id: 3,
    label: 'Education',
    title: 'Enrollment pipeline finally visible end‑to‑end',
    challenge:
      'An education provider had no clear view of lead status, enrollment stages, or team workload.',
    solution:
      'We implemented a no-code CRM and workflow layer that tracks every applicant from first touch to orientation, with automated reminders.',
    metrics: ['Full-funnel visibility', 'Fewer dropped leads', 'Happier operations team']
  }
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Our onboarding used to take a week. Now it’s less than a day. The system QuitCode built saves us at least 25 hours a month.',
    name: 'Head of Operations',
    role: 'Private School',
    context: 'Verified client'
  },
  {
    id: 2,
    quote:
      'We finally have one source of truth for projects, tasks, and client communication. My team knows exactly what to do every day.',
    name: 'Agency Founder',
    role: 'Creative Agency',
    context: 'Operations transformation'
  },
  {
    id: 3,
    quote:
      'From proposals to reporting, everything is smoother. Our clients feel the difference—and so does our team.',
    name: 'Managing Partner',
    role: 'Consulting Firm',
    context: 'No-code automation roll‑out'
  }
];

const technologies = {
  Databases: ['Airtable', 'Xano', 'Supabase'],
  Logic: ['Make.com', 'n8n', 'Zapier'],
  Interfaces: ['Bubble', 'Softr', 'Stacker']
};

const FORM_DEFAULT = {
  name: '',
  email: '',
  company: '',
  industry: '',
  challenge: '',
  interests: [] as string[]
};

const interestOptions = [
  'Workflow Automation',
  'Data Infrastructure',
  'Custom Web Apps',
  'Discovery & Strategy',
  'Not sure yet'
];

export default function Page() {
  const [activeSolution, setActiveSolution] = useState<SolutionKey>('consulting');
  const [activeCase, setActiveCase] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeSection, setActiveSection] = useState<
    'hero' | 'solutions' | 'services' | 'case-studies' | 'journey'
  >('hero');
  const [form, setForm] = useState(FORM_DEFAULT);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setForm(FORM_DEFAULT);
      setFormStatus('success');
    } catch (error) {
      console.error(error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const sectionIds: Array<typeof activeSection> = [
      'hero',
      'solutions',
      'services',
      'case-studies',
      'journey'
    ];

    const handleScroll = () => {
      let current: typeof activeSection = 'hero';
      let minDistance = Number.POSITIVE_INFINITY;

      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - 96);
        if (distance < minDistance && rect.bottom > 96) {
          minDistance = distance;
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="qc-page">
      <header className="qc-header-shell">
        <div className="qc-header-inner">
          <div className="qc-header-bar">
            <div className="qc-header-left">
              <Image
                src="/quitcode/QuitCode/Horizontal.png"
                alt="QuitCode"
                width={160}
                height={36}
                style={{ height: 'auto', width: 'auto' }}
                priority
              />
            </div>

            <button
              className="qc-header-menu-btn"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>

            <nav className={`qc-header-center${mobileMenuOpen ? ' qc-mobile-open' : ''}`}>
              <div className="qc-nav-links">
                <a
                  href="#solutions"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`qc-nav-link${
                    activeSection === 'solutions' ? ' qc-nav-link-active' : ''
                  }`}
                >
                  Operations
                </a>
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`qc-nav-link${
                    activeSection === 'services' ? ' qc-nav-link-active' : ''
                  }`}
                >
                  Platform
                </a>
                <a
                  href="#case-studies"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`qc-nav-link${
                    activeSection === 'case-studies' ? ' qc-nav-link-active' : ''
                  }`}
                >
                  Resources
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="qc-nav-link"
                >
                  Company
                </a>
                <a
                  href="#case-studies"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`qc-nav-link${
                    activeSection === 'case-studies' ? ' qc-nav-link-active' : ''
                  }`}
                >
                  Case Studies
                </a>
              </div>
            </nav>

            <div className="qc-header-right">
              <a href="#journey" className="qc-header-cta-discovery">
                <span>Get Free Discovery</span>
                <span className="arrow-icon">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="13" x2="13" y2="3" />
                    <polyline points="6 3 13 3 13 10" />
                  </svg>
                </span>
              </a>
              <a
                href="https://calendly.com/quitcode/30min"
                target="_blank"
                rel="noreferrer"
                className="qc-header-cta-book"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="hero" className="qc-section qc-gradient-hero">
          <div className="qc-container">
            <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
              <h1
                style={{
                  fontSize: '3.1rem',
                  lineHeight: 1.02,
                  margin: '1.4rem 0 0.9rem'
                }}
              >
                Turn operational chaos into{' '}
                <span style={{ color: 'var(--qc-purple)' }}>clarity</span> with{' '}
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
                style={{
                  margin: '0 0 1.8rem',
                  color: '#6b7280',
                  fontSize: '0.98rem'
                }}
              >
                We help high-value service firms build intelligent systems that turn
                manual processes into structured, efficient operations.
              </p>

              <div
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
                  style={{
                    textDecoration: 'none'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.35rem 0.4rem 0.35rem 0.35rem',
                      borderRadius: 12,
                      background:
                        'linear-gradient(90deg, var(--qc-blue), var(--qc-pink))',
                      boxShadow:
                        '0 18px 45px rgba(64, 56, 133, 0.45), 0 0 0 1px rgba(255,255,255,0.2)'
                    }}
                  >
                    <div
                      style={{
                        borderRadius: 8,
                        overflow: 'hidden',
                        width: 40,
                        height: 40,
                        border: '2px solid rgba(255,255,255,0.85)'
                      }}
                    >
                      <Image
                        src="/roman-avatar.png"
                        alt="Roman Sydorak"
                        width={40}
                        height={40}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        paddingRight: '1rem',
                        color: 'white'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: 700
                        }}
                      >
                        Book a Call
                      </span>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          opacity: 0.9
                        }}
                      >
                        Let&apos;s discuss your solution
                      </span>
                    </div>
                  </div>
                </a>

                <a href="#journey" className="qc-button-secondary">
                  Get Free Discovery
                </a>
              </div>

              <div
                className="qc-card"
                style={{
                  padding: '1.2rem',
                  borderRadius: '32px',
                  background:
                    'radial-gradient(circle at top left, rgba(204,153,255,0.28), transparent 55%), radial-gradient(circle at bottom, rgba(9,192,255,0.35), #ffffff 60%)',
                  marginBottom: '2.4rem'
                }}
              >
                <Image
                  src="/hero-dashboard.png"
                  alt="Operations dashboard preview"
                  width={960}
                  height={420}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '24px'
                  }}
                />
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
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
                gap: '2.5rem',
                marginTop: '2.5rem'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem'
                }}
              >
                {(['consulting', 'creative', 'education'] as SolutionKey[]).map(
                  key => {
                    const isActive = activeSolution === key;
                    const label =
                      key === 'consulting'
                        ? 'Consulting'
                        : key === 'creative'
                        ? 'Creative'
                        : 'Education';

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setActiveSolution(key)}
                        style={{
                          borderRadius: isActive ? '20px' : '14px',
                          border: isActive
                            ? '2px solid rgba(129, 140, 248, 0.6)'
                            : '1px solid #e5e7eb',
                          background: isActive
                            ? 'linear-gradient(135deg, #f0f4ff 0%, #f5f0ff 100%)'
                            : '#ffffff',
                          padding: isActive ? '2rem 1.6rem' : '1rem 1.4rem',
                          flex: isActive ? '1' : '0 0 auto',
                          textAlign: 'left',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: isActive ? 'flex-end' : 'center',
                          cursor: 'pointer',
                          boxShadow: isActive
                            ? '0 8px 30px rgba(129, 140, 248, 0.15)'
                            : 'none',
                          fontWeight: isActive ? 700 : 600,
                          fontSize: isActive ? '3.5rem' : '1.2rem',
                          color: isActive ? '#3985F8' : '#374151',
                          transition: 'all 0.2s ease',
                          fontFamily: isActive
                            ? "'Karla', 'Montserrat', system-ui, sans-serif"
                            : 'inherit'
                        }}
                      >
                        <span>{label}</span>
                        <span style={{ fontSize: '2.375rem', color: isActive ? '#3985F8' : '#9ca3af' }}>
                          {isActive ? '←' : '→'}
                        </span>
                      </button>
                    );
                  }
                )}
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${Math.min(Math.ceil(solutions[activeSolution].length / 2), 3)}, auto)`,
                  gridTemplateRows: 'repeat(2, auto)',
                  gridAutoFlow: 'column',
                  gap: '1.5rem'
                }}
              >
                {solutions[activeSolution].map(item => (
                  <div
                    key={item}
                    style={{
                      borderRadius: '20px',
                      padding: '1.5rem 1.4rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      background: '#f5f9ff',
                      width: 226,
                      height: 226,
                      justifyContent: 'center'
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <defs>
                          <linearGradient id="icon-grad-lb-pk" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#09C0FF" />
                            <stop offset="100%" stopColor="#CC99FF" />
                          </linearGradient>
                        </defs>
                        <rect x="3" y="3" width="7" height="7" rx="1" stroke="url(#icon-grad-lb-pk)" />
                        <rect x="14" y="3" width="7" height="7" rx="1" stroke="url(#icon-grad-lb-pk)" />
                        <rect x="3" y="14" width="7" height="7" rx="1" stroke="url(#icon-grad-lb-pk)" />
                        <rect x="14" y="14" width="7" height="7" rx="1" stroke="url(#icon-grad-lb-pk)" />
                      </svg>
                    </div>
                    <div style={{ fontWeight: 500, fontSize: '1.25rem', color: '#4300b7' }}>
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
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '1.5rem',
                marginBottom: '1.75rem'
              }}
            >
              <div>
                <h2 className="qc-section-title">Our Services</h2>
                <p className="qc-section-subtitle">
                  From quick wins to full transformation, we partner with your team at
                  every step.
                </p>
              </div>
              <div
                id="about"
                style={{
                  fontSize: '0.85rem',
                  color: '#6b7280',
                  textAlign: 'right'
                }}
              >
                <div style={{ fontWeight: 600 }}>Team of experts</div>
                <div>Tailored to your needs.</div>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '1.5rem'
              }}
            >
              {services.map(service => (
                <article
                  key={service.id}
                  className="qc-card"
                  style={{
                    borderRadius: '28px',
                    padding: '1.9rem 1.8rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem'
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: '1.2rem'
                    }}
                  >
                    {service.title}
                  </h3>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
                      gap: '1.3rem',
                      fontSize: '0.9rem'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.75rem' }}>Pain</div>
                      <p style={{ margin: '0.25rem 0 0.7rem', color: '#4b5563' }}>
                        {service.pain}
                      </p>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.75rem' }}>
                        Solution
                      </div>
                      <p style={{ margin: '0.25rem 0 0.7rem', color: '#4b5563' }}>
                        {service.solution}
                      </p>
                    </div>
                  </div>
                  <div style={{ marginTop: '0.5rem' }}>
                    <a href="#case-studies" className="qc-button-secondary">
                      Learn more
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* From Chaos to Clarity */}
        <section className="qc-section">
          <div className="qc-container">
            <h2 className="qc-section-title">
              From Chaos to{' '}
              <span
                style={{
                  background:
                    'linear-gradient(90deg, var(--qc-blue), var(--qc-purple))',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                Clarity
              </span>
            </h2>
            <p className="qc-section-subtitle">
              See how intelligent automation reshapes your firm’s daily operations—from
              scattered tasks to a centralised system.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                gap: '2.5rem',
                marginTop: '2.5rem'
              }}
            >
              <div>
                <h3
                  style={{
                    margin: '0 0 1rem',
                    fontSize: '1.05rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#ef4444'
                  }}
                >
                  Before – Manual & Reactive
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.8rem'
                  }}
                >
                  {[
                    'Hours lost in proposals and data entry',
                    'Client info scattered across spreadsheets',
                    'Repetitive admin work draining the team',
                    'No visibility into profitability or workload',
                    'Disjointed client experience'
                  ].map(item => (
                    <li
                      key={item}
                      className="qc-card"
                      style={{
                        padding: '0.9rem 1.1rem',
                        borderRadius: '999px',
                        fontSize: '0.9rem'
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3
                  style={{
                    margin: '0 0 1rem',
                    fontSize: '1.05rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#4f46e5'
                  }}
                >
                  After – Structured & Scalable
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.8rem'
                  }}
                >
                  {[
                    'Proposals generated in minutes with auto‑filled data',
                    'Centralised client records and dashboards',
                    'Automated workflows handling routine tasks',
                    'Real‑time reporting and margin tracking',
                    'Smooth, professional onboarding and communication'
                  ].map(item => (
                    <li
                      key={item}
                      className="qc-card"
                      style={{
                        padding: '0.9rem 1.1rem',
                        borderRadius: '999px',
                        fontSize: '0.9rem',
                        background:
                          'linear-gradient(135deg, #eef2ff, #f5f3ff, #e0f2fe)'
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Real Firms – Case studies carousel */}
        <section id="case-studies" className="qc-section qc-gradient-hero">
          <div className="qc-container">
            <div style={{ textAlign: 'center', marginBottom: '2.4rem' }}>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  marginBottom: '0.5rem'
                }}
              >
                Curious what this transformation looks like in real firms?
              </p>
              <a href="#case-studies" style={{ color: '#6366f1', fontSize: '0.9rem' }}>
                See real client results
              </a>
              <h2
                style={{
                  marginTop: '2.1rem',
                  fontSize: '2.2rem',
                  fontWeight: 800
                }}
              >
                Real Firms.{' '}
                <span
                  style={{
                    background:
                      'linear-gradient(90deg, var(--qc-blue), var(--qc-purple))',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  Real Transformations.
                </span>
              </h2>
              <p className="qc-section-subtitle">
                Proof that intelligent automation delivers measurable impact.
              </p>
            </div>

            <div
              style={{
                maxWidth: 880,
                margin: '0 auto'
              }}
            >
              {caseStudies.map((item, index) => {
                const isActive = index === activeCase;
                if (!isActive) return null;
                return (
                  <article
                    key={item.id}
                    className="qc-card"
                    style={{
                      borderRadius: '32px',
                      padding: '2rem 2.1rem',
                      display: 'grid',
                      gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)',
                      gap: '2rem'
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          marginBottom: '0.75rem',
                          color: '#6b7280'
                        }}
                      >
                        {item.label}
                      </div>
                      <h3
                        style={{
                          margin: 0,
                          fontSize: '1.2rem'
                        }}
                      >
                        {item.title}
                      </h3>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                          gap: '1.3rem',
                          marginTop: '1.4rem',
                          fontSize: '0.9rem'
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              marginBottom: '0.25rem'
                            }}
                          >
                            The Challenge
                          </div>
                          <p style={{ margin: 0, color: '#4b5563' }}>
                            {item.challenge}
                          </p>
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              marginBottom: '0.25rem'
                            }}
                          >
                            The Solution
                          </div>
                          <p style={{ margin: 0, color: '#4b5563' }}>
                            {item.solution}
                          </p>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.5rem',
                          marginTop: '1.4rem'
                        }}
                      >
                        {item.metrics.map(metric => (
                          <span
                            key={metric}
                            style={{
                              borderRadius: 999,
                              padding: '0.35rem 0.9rem',
                              fontSize: '0.75rem',
                              background:
                                'linear-gradient(90deg, #eef2ff, #f5f3ff)',
                              color: '#4b5563'
                            }}
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div
                      style={{
                        borderRadius: '24px',
                        overflow: 'hidden',
                        background:
                          'radial-gradient(circle at top, #dbeafe, #eef2ff)'
                      }}
                    >
                      <Image
                        src="/case-study-visual.png"
                        alt="Case study visual"
                        width={520}
                        height={420}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                  </article>
                );
              })}

              <div
                style={{
                  marginTop: '1.75rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div className="qc-dots">
                  {caseStudies.map((item, index) => (
                    <div
                      key={item.id}
                      className={`qc-dot${
                        index === activeCase ? ' qc-dot-active' : ''
                      }`}
                    />
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <button
                    type="button"
                    className="qc-button-secondary"
                    onClick={() =>
                      setActiveCase(
                        (activeCase - 1 + caseStudies.length) % caseStudies.length
                      )
                    }
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    className="qc-button-primary"
                    onClick={() =>
                      setActiveCase((activeCase + 1) % caseStudies.length)
                    }
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real conversation */}
        <section className="qc-section">
          <div className="qc-container">
            <div
              className="qc-card"
              style={{
                padding: '2.4rem 2.1rem',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
                gap: '2rem',
                background:
                  'linear-gradient(135deg, #111827, #1d4ed8 40%, #7c3aed 80%)',
                color: 'white'
              }}
            >
              <div>
                <Image
                  src="/roman-sydorak.png"
                  alt="Roman Sydorak portrait"
                  width={420}
                  height={420}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '24px',
                    marginBottom: '1rem'
                  }}
                />
                <div style={{ fontWeight: 600 }}>Roman Sydorak</div>
                <div style={{ fontSize: '0.85rem', opacity: 0.85 }}>
                  CEO & Strategic Operations Advisor
                </div>
              </div>
              <div>
                <h2
                  style={{
                    margin: '0 0 0.75rem',
                    fontSize: '2.1rem'
                  }}
                >
                  Every project starts with a{' '}
                  <span style={{ color: '#a5b4fc' }}>real conversation</span>
                </h2>
                <p
                  style={{
                    margin: '0 0 1.1rem',
                    fontSize: '0.98rem',
                    maxWidth: 440
                  }}
                >
                  Meet Roman, our founder and automation strategist. With 10+ years in
                  optimising service operations and 50+ projects delivered, he helps
                  firms uncover what&apos;s slowing them down—and map a clear path to
                  automation.
                </p>
                <a
                  href="https://calendly.com/quitcode/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="qc-button-primary"
                  style={{
                    background:
                      'linear-gradient(90deg, #111827, rgba(17,24,39,0.05))',
                    border: '1px solid rgba(156,163,175,0.45)'
                  }}
                >
                  Talk to Roman →
                </a>
                <div
                  style={{
                    marginTop: '1.25rem',
                    fontSize: '0.8rem',
                    opacity: 0.9,
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.9rem'
                  }}
                >
                  <span>Free 30‑minute strategy session</span>
                  <span>No sales pressure—just practical insights</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="qc-section qc-gradient-hero">
          <div className="qc-container">
            <div style={{ textAlign: 'center', marginBottom: '2.4rem' }}>
              <h2 className="qc-section-title">What our clients say</h2>
              <p className="qc-section-subtitle">
                Real feedback from consulting, creative, and education teams we&apos;ve
                helped streamline.
              </p>
            </div>

            <div
              style={{
                maxWidth: 720,
                margin: '0 auto'
              }}
            >
              {testimonials.map((item, index) => {
                if (index !== activeTestimonial) return null;
                return (
                  <article
                    key={item.id}
                    className="qc-card"
                    style={{
                      borderRadius: '28px',
                      padding: '2rem 2.1rem',
                      textAlign: 'center'
                    }}
                  >
                    <div
                      style={{
                        marginBottom: '0.75rem',
                        color: '#f59e0b',
                        fontSize: '1.1rem'
                      }}
                    >
                      ★★★★★
                    </div>
                    <p
                      style={{
                        fontSize: '1.05rem',
                        margin: '0 0 1.2rem',
                        color: '#111827'
                      }}
                    >
                      {item.quote}
                    </p>
                    <div
                      style={{
                        fontSize: '0.9rem',
                        color: '#4b5563'
                      }}
                    >
                      <div style={{ fontWeight: 600 }}>{item.name}</div>
                      <div>{item.role}</div>
                      <div
                        style={{
                          marginTop: '0.35rem',
                          fontSize: '0.8rem',
                          color: '#6366f1',
                          fontWeight: 600
                        }}
                      >
                        {item.context}
                      </div>
                    </div>
                  </article>
                );
              })}

              <div
                style={{
                  marginTop: '1.6rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div className="qc-dots">
                  {testimonials.map((item, index) => (
                    <div
                      key={item.id}
                      className={`qc-dot${
                        index === activeTestimonial ? ' qc-dot-active' : ''
                      }`}
                    />
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <button
                    type="button"
                    className="qc-button-secondary"
                    onClick={() =>
                      setActiveTestimonial(
                        (activeTestimonial - 1 + testimonials.length) %
                          testimonials.length
                      )
                    }
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    className="qc-button-primary"
                    onClick={() =>
                      setActiveTestimonial(
                        (activeTestimonial + 1) % testimonials.length
                      )
                    }
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="qc-section" id="technologies">
          <div className="qc-container">
            <h2 className="qc-section-title">Technologies</h2>
            <p className="qc-section-subtitle">
              We build with trusted no-code platforms.
            </p>

            <div
              style={{
                marginTop: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              {Object.entries(technologies).map(([category, items]) => (
                <div
                  key={category}
                  className="qc-card"
                  style={{
                    padding: '1.6rem 1.8rem',
                    borderRadius: '26px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '1.5rem'
                  }}
                >
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: '1.05rem'
                      }}
                    >
                      {category}
                    </h3>
                    <ul
                      style={{
                        margin: '0.9rem 0 0',
                        padding: 0,
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.3rem',
                        fontSize: '0.9rem',
                        color: '#4b5563'
                      }}
                    >
                      {items.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 24,
                      background:
                        'linear-gradient(145deg, #eef2ff, #e0f2fe, #f5f3ff)'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why no-code */}
        <section
          className="qc-section"
          style={{
            paddingBottom: '4.5rem'
          }}
        >
          <div className="qc-container">
            <div
              className="qc-card"
              style={{
                borderRadius: '40px',
                padding: '2.8rem 2.6rem',
                background:
                  'radial-gradient(circle at top, #1d4ed8 0, #0f172a 45%, #4c1d95 90%)',
                color: 'white',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1.2fr)',
                gap: '2.4rem'
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: '2rem',
                    margin: '0 0 0.5rem'
                  }}
                >
                  Why no-code is the smarter way to scale operations
                </h2>
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.95rem',
                    opacity: 0.88
                  }}
                >
                  We build with trusted no-code platforms—so you can move fast without
                  sacrificing reliability.
                </p>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
                  gap: '1.2rem',
                  fontSize: '0.9rem'
                }}
              >
                {[
                  {
                    title: 'Faster implementation',
                    body: 'No waiting months for development. We design, test, and launch automation systems in weeks—not quarters.'
                  },
                  {
                    title: 'Lower cost, higher ROI',
                    body: 'No-code means no full-time dev teams or expensive maintenance. You pay for business outcomes, not for code.'
                  },
                  {
                    title: 'Flexible and future‑proof',
                    body: 'When your processes change, your system adapts. We build modular workflows that evolve with your firm.'
                  },
                  {
                    title: 'Built for non-technical teams',
                    body: 'Your team can update data, dashboards, and logic on their own—without needing IT to keep it running.'
                  }
                ].map(item => (
                  <div key={item.title}>
                    <div
                      style={{
                        fontWeight: 600,
                        marginBottom: '0.25rem'
                      }}
                    >
                      {item.title}
                    </div>
                    <p
                      style={{
                        margin: 0,
                        opacity: 0.9
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Start your journey – form */}
        <section id="journey" className="qc-section">
          <div className="qc-container">
            <h2 className="qc-section-title">Start your automation journey</h2>
            <p className="qc-section-subtitle">
              Tell us about your biggest operational challenge, and we&apos;ll outline
              how automation could simplify it—in plain language, not tech talk.
            </p>

            <div
              style={{
                marginTop: '2.3rem',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
                gap: '2.5rem'
              }}
            >
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <label
                      htmlFor="name"
                      style={{ fontSize: '0.8rem', fontWeight: 600 }}
                    >
                      Name <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={event =>
                        setForm(current => ({
                          ...current,
                          name: event.target.value
                        }))
                      }
                      style={{
                        width: '100%',
                        marginTop: '0.35rem',
                        borderRadius: '999px',
                        border: '1px solid #e5e7eb',
                        padding: '0.7rem 0.9rem'
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      style={{ fontSize: '0.8rem', fontWeight: 600 }}
                    >
                      Email <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={event =>
                        setForm(current => ({
                          ...current,
                          email: event.target.value
                        }))
                      }
                      style={{
                        width: '100%',
                        marginTop: '0.35rem',
                        borderRadius: '999px',
                        border: '1px solid #e5e7eb',
                        padding: '0.7rem 0.9rem'
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      style={{ fontSize: '0.8rem', fontWeight: 600 }}
                    >
                      Company name
                    </label>
                    <input
                      id="company"
                      value={form.company}
                      onChange={event =>
                        setForm(current => ({
                          ...current,
                          company: event.target.value
                        }))
                      }
                      style={{
                        width: '100%',
                        marginTop: '0.35rem',
                        borderRadius: '999px',
                        border: '1px solid #e5e7eb',
                        padding: '0.7rem 0.9rem'
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="industry"
                      style={{ fontSize: '0.8rem', fontWeight: 600 }}
                    >
                      Industry
                    </label>
                    <input
                      id="industry"
                      value={form.industry}
                      onChange={event =>
                        setForm(current => ({
                          ...current,
                          industry: event.target.value
                        }))
                      }
                      style={{
                        width: '100%',
                        marginTop: '0.35rem',
                        borderRadius: '999px',
                        border: '1px solid #e5e7eb',
                        padding: '0.7rem 0.9rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginTop: '1.3rem' }}>
                  <label
                    htmlFor="challenge"
                    style={{ fontSize: '0.8rem', fontWeight: 600 }}
                  >
                    Tell us about your challenge
                  </label>
                  <textarea
                    id="challenge"
                    value={form.challenge}
                    onChange={event =>
                      setForm(current => ({
                        ...current,
                        challenge: event.target.value
                      }))
                    }
                    rows={4}
                    style={{
                      width: '100%',
                      marginTop: '0.35rem',
                      borderRadius: '18px',
                      border: '1px solid #e5e7eb',
                      padding: '0.8rem 0.9rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ marginTop: '1.3rem' }}>
                  <div
                    style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: 8 }}
                  >
                    Which areas are you interested in?
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.4rem',
                      fontSize: '0.9rem'
                    }}
                  >
                    {interestOptions.map(option => (
                      <label key={option} style={{ display: 'flex', gap: '0.4rem' }}>
                        <input
                          type="checkbox"
                          checked={form.interests.includes(option)}
                          onChange={() => handleToggleInterest(option)}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '1.6rem' }}>
                  <button
                    type="submit"
                    className="qc-button-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending…' : 'Send a request'}
                  </button>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.3rem',
                    fontSize: '0.75rem',
                    color: '#6b7280',
                    marginTop: '1rem'
                  }}
                >
                  <span>• Response within 24 hours</span>
                  <span>• No sales pressure—just practical ideas</span>
                  <span>• Your data is secure</span>
                  {formStatus === 'success' && (
                    <span style={{ color: '#16a34a' }}>
                      Thanks—your request has been sent.
                    </span>
                  )}
                  {formStatus === 'error' && (
                    <span style={{ color: '#dc2626' }}>
                      Something went wrong. Please try again.
                    </span>
                  )}
                </div>
              </form>

              <aside
                style={{
                  fontSize: '0.8rem',
                  color: '#4b5563'
                }}
              >
                <Image
                  src="/journey-side.png"
                  alt="Client working on laptop"
                  width={420}
                  height={560}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '28px',
                    marginBottom: '1rem'
                  }}
                />
                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                  Privacy note
                </div>
                <p style={{ margin: 0 }}>
                  We respect your privacy. Your information is only used to contact you
                  about your inquiry. We never share or sell your data, and we don&apos;t
                  store form submissions in this application after they&apos;re sent to
                  our secure webhook/email.
                </p>
              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: '#f3f4ff',
          padding: '3rem 0 2.2rem',
          marginTop: '1.5rem'
        }}
      >
        <div className="qc-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
              gap: '2.2rem',
              alignItems: 'flex-start'
            }}
          >
            <div>
              <div
                className="qc-card"
                style={{
                  borderRadius: '24px',
                  padding: '1.4rem 1.6rem',
                  marginBottom: '1.7rem'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.6rem'
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 999,
                      background:
                        'conic-gradient(from 210deg, #7b3eff, #2f7bff, #ff6ad5, #7b3eff)'
                    }}
                  />
                  <span style={{ fontWeight: 700 }}>QuitCode</span>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.85rem',
                    color: '#4b5563'
                  }}
                >
                  We help high-value service firms automate operations and scale without
                  chaos through intelligent no-code solutions.
                </p>
              </div>

              <div
                style={{
                  fontSize: '0.9rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.45rem'
                }}
              >
                <div style={{ fontWeight: 600 }}>Services</div>
                <a href="#services">Workflow Automation</a>
                <a href="#services">Data Infrastructure</a>
                <a href="#services">Custom Web Apps</a>
                <a href="#services">Discovery & Strategy</a>
              </div>
            </div>

            <div
              style={{
                fontSize: '0.9rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem'
              }}
            >
              <div style={{ fontWeight: 600 }}>Contact</div>
              <div>hello@company.com</div>
              <div>+1 (555) 123‑4567</div>
              <div>Lviv, Ukraine</div>

              <div
                style={{
                  marginTop: '1.3rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.2rem',
                  fontSize: '0.85rem'
                }}
              >
                <a href="#hero">Top</a>
                <a href="#solutions">Solutions</a>
                <a href="#services">Services</a>
                <a href="#case-studies">Case studies</a>
                <a href="#journey">Get Free Discovery</a>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              gap: '1rem',
              fontSize: '0.75rem',
              color: '#6b7280'
            }}
          >
            <div>© {new Date().getFullYear()} QuitCode. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


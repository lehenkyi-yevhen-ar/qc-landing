import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ProcessStepsSection } from '@/components/ProcessStepsSection';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Custom Web Applications – QuitCode',
  description:
    'Build powerful, scalable web solutions — from client portals to management systems — delivered in weeks.',
};

const whatYouGet = [
  {
    title: 'Custom Web Application',
    description: 'Fully functional, responsive web app built on Bubble.com, tailored to your specific business requirements and branding',
    icon: '/webapp-custom-app.png',
  },
  {
    title: 'Database & Backend Setup',
    description: 'Structured database architecture with secure data management, user authentication, and role-based access',
    icon: '/webapp-database.png',
  },
  {
    title: 'Professional UI/UX Design',
    description: 'Intuitive, mobile-responsive interface optimized for all devices with modern aesthetics and seamless user experience',
    icon: '/webapp-design.png',
  },
  {
    title: 'Third-Party Integrations',
    description: 'Seamless connections to your existing tools (CRM, payment systems, email platforms, analytics) via APIs',
    icon: '/webapp-integrations.png',
  },
  {
    title: 'Admin Panel & Documentation',
    description: 'Comprehensive admin dashboard for content management plus detailed user guides and technical documentation',
    icon: '/webapp-admin.png',
  },
  {
    title: 'End User Training Materials',
    description: 'Comprehensive guides and tutorials for all user types to ensure smooth adoption and maximize application value',
    icon: '/webapp-training.png',
  },
];

const rightForYouItems = [
  {
    title: 'No Standard Solution Exists',
    description: 'Your business processes require custom functionality that off-the-shelf software can\'t provide',
    highlighted: true,
    icon: '/icons/no-standard-icon.png',
  },
  {
    title: 'Client Experience Needs Upgrade',
    description: 'You need a professional platform for client interactions, project tracking, or service delivery',
    highlighted: false,
    icon: '/icons/client-exp-icon.png',
  },
  {
    title: 'Tools Don\'t Integrate',
    description: 'You\'re juggling multiple platforms and need a unified solution that connects everything',
    highlighted: true,
    icon: '/icons/tools-integrate-icon.png',
  },
  {
    title: 'Software Limiting Growth',
    description: 'Current tools can\'t handle increased users, data, or functionality requirements as you scale',
    highlighted: false,
    icon: '/icons/software-growth-icon.png',
  },
  {
    title: 'Need Solution Fast',
    description: 'You want professional web presence without the 6-12 month timeline of traditional development',
    highlighted: true,
    icon: '/icons/need-fast-icon.png',
  },
];

const otherServices = [
  {
    title: 'Custom Workflow Automation',
    description:
      'Transform manual processes into intelligent automated workflows that eliminate bottlenecks and reduce errors.',
    image: '/service-workflow.png',
    href: '/services/custom-workflow-automation',
  },
  {
    title: 'Data Infrastructure Optimization',
    description:
      'Transform disconnected data sources into a unified, intelligent system with real-time analytics and clear visibility.',
    image: '/service-data.png',
    href: '/services/data-infrastructure-optimization',
  },
  {
    title: 'Discovery & Strategy',
    description:
      'Minimize project risks with thorough research, technical validation, and detailed roadmaps before development begins.',
    image: '/service-discovery.png',
    href: '/services/discovery-strategy',
  },
];

export default function CustomWebApplicationsPage() {
  return (
    <div className="qc-page">
      <main>

        {/* ── Hero ── */}
        <section
          className="qc-section qc-gradient-hero"
          style={{ paddingTop: '2.5rem', paddingBottom: '3rem' }}
        >
          <div className="qc-container">
            <Breadcrumb crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/#solutions' },
              { label: 'Custom Web Applications', href: '/services/custom-web-applications' },
            ]} />

            <div className="cwa-hero-grid">
              {/* Left */}
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(90deg, #09c0ff, #cc99ff)',
                    color: '#fff',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '0.3rem 0.85rem',
                    borderRadius: '6px',
                    marginBottom: '1.25rem',
                  }}
                >
                  Services
                </span>
                <h1
                  style={{
                    fontSize: '3.1rem',
                    fontWeight: 800,
                    lineHeight: 1.08,
                    margin: '0 0 1.25rem',
                    color: '#111827',
                  }}
                >
                  Custom Web<br />Applications
                </h1>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#2e2e2e',
                    lineHeight: 1.7,
                    margin: '0 0 2rem',
                    maxWidth: 440,
                  }}
                >
                  Build powerful, scalable web solutions that solve your unique business
                  challenges. From client portals to management systems — delivered in weeks,
                  not months, without traditional coding.
                </p>
                <a
                  href="https://calendly.com/quitcode/30min"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'linear-gradient(90deg, #3985F8, #09c0ff)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                >
                  Build Your Application
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="8" x2="13" y2="8" /><polyline points="9 4 13 8 9 12" />
                  </svg>
                </a>
              </div>

              {/* Right – mockup */}
              <div>
                <Image
                  src="/webapp-hero-mockup.png"
                  alt="Custom web application interface"
                  width={680}
                  height={460}
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── What You Get ── */}
        <section className="qc-section">
          <div className="qc-container">
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 800,
                margin: '0 0 2.5rem',
                color: '#111827',
              }}
            >
              What You Get
            </h2>
            <div className="cwa-wyg-grid">
              {whatYouGet.map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: '1.75rem 1.5rem',
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.9rem',
                    border: '1px solid #e5e7eb',
                    background: '#fff',
                  }}
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={72}
                    height={72}
                    style={{ objectFit: 'contain' }}
                  />
                  <div>
                    <h3
                      style={{
                        margin: '0 0 0.45rem',
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: '#111827',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.875rem',
                        color: '#6b7280',
                        lineHeight: 1.65,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Is This Right for You? ── */}
        <section className="qc-section">
          <div className="qc-container">
            <div className="cwa-rfy-grid">
              {/* Left */}
              <div>
                <h2
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    margin: '0 0 2rem',
                    color: '#111827',
                  }}
                >
                  Is This Right for You?
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {rightForYouItems.map((item) => (
                    <div
                      key={item.title}
                      className="cwa-rfy-item"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '48px 220px 1fr',
                        gap: '1rem',
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        background: item.highlighted
                          ? 'linear-gradient(90deg, rgba(57,133,248,0.06), rgba(204,153,255,0.06))'
                          : 'transparent',
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={40}
                        height={40}
                        style={{ objectFit: 'contain' }}
                      />
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          color: '#111827',
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: '0.85rem',
                          color: item.highlighted ? '#3985F8' : '#6b7280',
                          lineHeight: 1.55,
                        }}
                      >
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right – 3D character */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  minHeight: 380,
                }}
              >
                <Image
                  src="/right-for-you-character.png"
                  alt=""
                  width={420}
                  height={520}
                  style={{ width: '100%', height: 'auto', objectFit: 'contain', maxWidth: 420 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Process ── */}
        <section style={{ padding: '5rem 0', background: '#f5f9ff' }}>
          <div className="qc-container">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2.5rem',
              }}
            >
              <h2 style={{ fontSize: '2rem', fontWeight: 800, margin: 0, color: '#111827' }}>
                Our Process
              </h2>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '0.85rem',
                  color: '#6b7280',
                }}
              >
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 600, color: '#111827' }}>Team of experts</div>
                  <div>Tailored to your needs</div>
                </div>
                <Image
                  src="/team-avatars.png"
                  alt="Team of experts"
                  width={96}
                  height={40}
                  style={{ width: 96, height: 40, objectFit: 'contain' }}
                />
              </div>
            </div>

            <ProcessStepsSection variant="webapp" />
          </div>
        </section>

        {/* ── Not Quite What You're Looking For? ── */}
        <section className="qc-section">
          <div className="qc-container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <img
                src="/glass-cta/Asset_Icon.png"
                alt=""
                style={{ width: 48, height: 48, display: 'block', margin: '0 auto 1rem' }}
              />
              <h2
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  margin: '0 0 0.75rem',
                  color: '#111827',
                }}
              >
                Not Quite What You&apos;re Looking For?
              </h2>
              <p style={{ margin: 0, fontSize: '0.92rem', color: '#6b7280' }}>
                Explore our other services to find the perfect solution for your business
              </p>
            </div>

            <div className="cwa-os-grid">
              {otherServices.map((service) => (
                <div
                  key={service.title}
                  style={{
                    borderRadius: '20px',
                    border: '1px solid #e5e7eb',
                    overflow: 'hidden',
                    background: '#fff',
                  }}
                >
                  <div
                    style={{
                      background: 'linear-gradient(135deg, rgba(57,133,248,0.05), rgba(204,153,255,0.08))',
                      height: 200,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1rem',
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={300}
                      height={180}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>

                  <div style={{ padding: '1.5rem' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        background: '#4300B7',
                        color: '#fff',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '5px',
                        marginBottom: '0.75rem',
                      }}
                    >
                      Services
                    </span>
                    <h3
                      style={{
                        margin: '0 0 0.6rem',
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: '#111827',
                        lineHeight: 1.25,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        margin: '0 0 1.25rem',
                        fontSize: '0.85rem',
                        color: '#6b7280',
                        lineHeight: 1.6,
                      }}
                    >
                      {service.description}
                    </p>
                    <Link href={service.href} className="qc-button-gradient-border">
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
        </section>

        {/* ── Real conversation ── */}
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
                With 10+ years in optimising service operations and 50+ projects delivered, he
                helps firms uncover what&apos;s slowing them down—and map a clear path to
                automation.
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
                  <span className="qc-conversation-star" aria-hidden>☆</span>
                  Free 30‑minute strategy session
                </span>
                <span className="qc-conversation-benefit">
                  <span className="qc-conversation-star" aria-hidden>☆</span>
                  No sales pressure—just practical insights
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

      </main>
    </div>
  );
}

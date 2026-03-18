import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ProcessStepsSection } from '@/components/ProcessStepsSection';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Automation Discovery & Strategy for Service Firms | QuitCode',
  description: 'Validate automation ideas, assess technical feasibility, and build clear product roadmaps before investing in development.',
  alternates: { canonical: 'https://quitcode.com/services/discovery' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Discovery & Strategy | QuitCode',
    description: 'Reduce project risk with automation research, feasibility validation, and strategic roadmaps.',
    url: 'https://quitcode.com/services/discovery',
    images: [{ url: '/ogs/og-discovery-and-strategy.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Discovery & Strategy | QuitCode' },
};

const whatYouGet = [
  {
    title: 'Problem Research Report',
    description: 'Comprehensive analysis of your business challenge, market context, and user needs with validated problem-solution fit',
    icon: '/business-problem-research.png',
    alt: 'business problem research and analysis',
  },
  {
    title: 'Technical Feasibility Assessment',
    description: 'Detailed evaluation of technology options, implementation complexity, and resource requirements for your project',
    icon: '/technical-feasibility-analysis.png',
    alt: 'technical feasibility analysis for software projects',
  },
  {
    title: 'Product Backlog & Roadmap',
    description: 'Prioritized feature list with development timeline, milestones, and clear project phases for implementation',
    icon: '/product-roadmap-planning.png',
    alt: 'product roadmap and feature planning',
  },
  {
    title: 'Risk Assessment & Mitigation',
    description: 'Identification of potential project risks with strategies to minimize costs and avoid common pitfalls',
    icon: '/project-risk-assessment.png',
    alt: 'project risk assessment and mitigation planning',
  },
  {
    title: 'RFP Documentation',
    description: 'Complete request for proposal materials enabling you to confidently engage with vendors and compare solutions',
    icon: '/ds-rfp-docs.png',
    alt: '',
  },
];

const rightForYouItems = [
  {
    title: 'Unsure About Feasibility',
    description: 'You have a business idea but aren\'t sure if it\'s technically feasible or worth the investment',
    highlighted: true,
    icon: '/icons/unsure-feasibility-icon.png',
  },
  {
    title: 'Need Clear Roadmap',
    description: 'Planning a major digital transformation but don\'t know where to start or how to prioritize',
    highlighted: false,
    icon: '/icons/clear-roadmap-icon.png',
  },
  {
    title: 'Want to Avoid Failed Projects',
    description: 'You\'ve had failed projects in the past and need thorough planning and risk assessment to ensure success',
    highlighted: true,
    icon: '/icons/failed-projects-icon.png',
  },
  {
    title: 'Need Stakeholder Buy-In',
    description: 'You need to present a solid business case to stakeholders or investors with detailed analysis and documentation',
    highlighted: false,
    icon: '/icons/stakeholder-buyin-icon.png',
  },
  {
    title: 'Evaluating Multiple Options',
    description: 'You\'re evaluating multiple technology options and vendors and need objective assessment and clear criteria',
    highlighted: true,
    icon: '/icons/evaluating-options-icon.png',
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
    title: 'Custom Web Applications',
    description:
      'Build powerful, scalable web solutions - from client portals to management systems - delivered in weeks.',
    image: '/service-webapp.png',
    href: '/services/custom-web-applications',
  },
];

export default function DiscoveryStrategyPage() {
  return (
    <div className="qc-page">
      <main>

        {/* ── Hero ── */}
        <section
          className="qc-section qc-gradient-hero"
          style={{ paddingTop: '7rem', paddingBottom: '3rem' }}
        >
          <div className="qc-container">
            <div className="cwa-hero-grid">
              {/* Left */}
              <div>
                <Breadcrumb crumbs={[
                  { label: 'Home', href: '/' },
                  { label: 'Services', href: '/services', inactive: true },
                  { label: 'Discovery & Strategy', href: '/services/discovery-strategy' },
                ]} />
                <span
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(90deg, #09c0ff, #cc99ff)',
                    color: '#fff',
                    fontSize: '1rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '0.3rem 0.85rem',
                    borderRadius: '6px',
                    marginBottom: '32px',
                  }}
                >
                  Services
                </span>
                <h1
                  className="type-heading-eb-48"
                  style={{ margin: '0 0 32px', color: '#111827',  fontSize: 64 }}
                >
                  Discovery &amp; Strategy
                </h1>
                <p
                  className="type-body"
                  style={{ color: '#2e2e2e',
                    lineHeight: 1.7,
                    margin: '0 0 2rem',
                    maxWidth: 440,
                  }}
                >
                  Minimize project risks and costs with thorough research, technical validation,
                  and detailed roadmaps. Make confident decisions about technology investments
                  before committing significant resources.
                </p>
                <a
                  href="https://calendly.com/quitcode/30min"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#4300B7',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    padding: '0.75rem 1.75rem',
                    borderRadius: '10px',
                    textDecoration: 'none',
                  }}
                >
                  Validate Your Idea
                  <span aria-hidden>→</span>
                </a>
              </div>

              {/* Right - mockup */}
              <div>
                <Image
                  src="/automation-strategy-workshop.png"
                  alt="automation strategy workshop mapping business processes"
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
              className="type-heading-eb-48"
              style={{ margin: '0 0 2.5rem', color: '#111827' }}
            >
              What You Get
            </h2>
            <div className="cwa-wyg-grid--5">
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
                    alt={item.alt}
                    width={72}
                    height={72}
                    style={{ objectFit: 'contain' }}
                  />
                  <div>
                    <h3
                      className="type-heading-eb-32"
                      style={{ margin: '0 0 16px', color: '#111827' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="type-body"
                      style={{ margin: 0, color: '#6b7280' }}
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
                  className="type-heading-eb-48"
                  style={{ margin: '0 0 4rem', color: '#111827' }}
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
                        width={41}
                        height={41}
                        style={{ objectFit: 'contain' }}
                      />
                      <div
                        className="type-body-semibold"
                        style={{ color: '#111827' }}
                      >
                        {item.title}
                      </div>
                      <div
                        className="type-body"
                        style={{ color: item.highlighted ? '#3985F8' : '#6b7280' }}
                      >
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - 3D character */}
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
        <section style={{ padding: '5rem 0', background: '#fff' }}>
          <div className="qc-container">
            <ProcessStepsSection variant="ds" />
          </div>
        </section>

        {/* ── Not Quite What You're Looking For? ── */}
        <section className="qc-section">
          <div className="qc-container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <img
                src="/glass-cta/Asset_Icon.png"
                alt=""
                style={{ width: 48, height: 48, marginBottom: '1rem', display: 'block', margin: '0 auto 1rem' }}
              />
              <h2
                className="type-heading-eb-48"
                style={{ margin: '0 0 0.75rem', color: '#111827' }}
              >
                Not Quite{' '}
                <span style={{ background: 'linear-gradient(90deg, #3985f8, #9291fc, #cc99ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  What You&apos;re Looking For?
                </span>
              </h2>
              <p className="type-body" style={{ margin: 0, color: '#6b7280' }}>
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
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Image area */}
                  <div
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(57,133,248,0.05), rgba(204,153,255,0.08))',
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

                  {/* Content */}
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <span
                      style={{
                        display: 'inline-block',
                        alignSelf: 'flex-start',
                        background: 'linear-gradient(90deg, #09C0FF, #CC99FF)',
                        color: '#fff',
                        fontSize: '16px',
                        fontWeight: 600,
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
                      className="type-heading-eb-32"
                      style={{ margin: '0 0 0.6rem', color: '#111827' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="type-body"
                      style={{ margin: '0 0 1.25rem', color: '#6b7280' }}
                    >
                      {service.description}
                    </p>
                    <Link href={service.href} className="qc-button-gradient-border" style={{ marginTop: 'auto' }}>
                      Learn more
                      <span style={{ display: 'inline-flex', marginLeft: 6 }}>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="3" y1="8" x2="13" y2="8" />
                          <polyline points="9 4 13 8 9 12" />
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
              <h2 className="type-heading-eb-48">
                Every project starts
                <br />
                with a <span className="qc-conversation-highlight">real conversation</span>
              </h2>
              <p className="qc-conversation-subtitle">
                Meet Roman, our founder and automation strategist.
              </p>
              <p className="qc-conversation-para">
                With 10+ years in optimising service operations and 50+ projects delivered, he
                helps firms uncover what&apos;s slowing them down-and map a clear path to
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

      </main>
    </div>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Workflow Automation – QuitCode',
  description:
    'From three months of manual work to a structured, repeatable system — without spreadsheets, emails, or errors.',
};

const whatYouGet = [
  {
    title: 'Automated System',
    description: 'Fully configured no-code automation platform connecting your key tools and processes',
    icon: '/autom-system.png',
  },
  {
    title: 'Documentation',
    description: 'Detailed guides and step-by-step instructions for every automated workflow',
    icon: '/documentation.png',
  },
  {
    title: 'Integrations',
    description: 'Seamless connections between CRM, email, project management, and more',
    icon: '/integrations.png',
  },
  {
    title: 'Custom Dashboards',
    description: 'Real-time monitoring to track workflow performance and key metrics',
    icon: '/cus-dush.png',
  },
  {
    title: 'Team Training',
    description: 'Comprehensive resources and guides for smooth team adoption',
    icon: '/team-train.png',
  },
  {
    title: 'ROI Report',
    description: 'Analysis of time saved, efficiency gains, and performance optimization',
    icon: '/roi-rep.png',
  },
];

const rightForYouItems = [
  {
    title: 'Repetitive Manual Tasks',
    description: 'Your team spends hours on data entry, file transfers, status updates, or routine communications',
    highlighted: true,
    icon: '/icons/healthy-recognition.png',
  },
  {
    title: 'Disconnected Tools',
    description: 'Information gets lost between systems, requiring manual data re-entry and causing delays',
    highlighted: false,
    icon: '/icons/blockchain.png',
  },
  {
    title: 'Process Bottlenecks',
    description: 'Approvals, onboarding, or handoffs are slowing down your operations',
    highlighted: true,
    icon: '/icons/system.png',
  },
  {
    title: 'Scaling Challenges',
    description: "Current processes work but won't handle increased workload without hiring more staff",
    highlighted: false,
    icon: '/icons/id-card-h.png',
  },
  {
    title: 'Human Errors',
    description: 'Information gets lost between systems, requiring manual data re-entry and causing delays',
    highlighted: true,
    icon: '/icons/click.png',
  },
];

const processSteps = [
  {
    step: '1ST STEP',
    title: 'Discovery &\nAnalysis',
    description:
      'We design the automated workflow structure, select optimal no-code platforms, and create a detailed implementation plan with timeline and milestones.',
    active: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3985F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    step: '2ND STEP',
    title: 'Solution\nArchitecture',
    description:
      'We analyze your current workflows, identify automation opportunities, and map out existing tool integrations to create an optimization roadmap.',
    active: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    step: '3RD STEP',
    title: 'Build &\nIntegration',
    description:
      'We configure the automation system, connect all necessary tools and platforms, and set up custom workflows tailored to your specific business processes.',
    active: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
      </svg>
    ),
  },
  {
    step: '4TH STEP',
    title: 'Testing &\nOptimization',
    description:
      'We thoroughly test all automated workflows, fine-tune performance, and ensure seamless integration with your existing systems.',
    active: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" /><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" /><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" /><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
      </svg>
    ),
  },
  {
    step: '5TH STEP',
    title: 'Training &\nHandover',
    description:
      'We provide comprehensive team training, deliver all documentation, and ensure smooth transition to the new automated processes.',
    active: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    step: '6TH STEP',
    title: 'Maintenance &\nSupport',
    description:
      'We provide ongoing system maintenance, monitor performance, troubleshoot issues, and ensure your automated workflows continue running smoothly as your business evolves.',
    active: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const otherServices = [
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
      'Build powerful, scalable web solutions — from client portals to management systems — delivered in weeks.',
    image: '/service-webapp.png',
    href: '/services/custom-web-applications',
  },
  {
    title: 'Discovery & Strategy',
    description:
      'Minimize project risks with thorough research, technical validation, and detailed roadmaps before development begins.',
    image: '/service-discovery.png',
    href: '/services/discovery-strategy',
  },
];

export default function CustomWorkflowAutomationPage() {
  return (
    <div className="qc-page">
      <main>

        {/* ── Hero ── */}
        <section
          className="qc-section qc-gradient-hero"
          style={{ paddingTop: '2.5rem', paddingBottom: '3rem' }}
        >
          <div className="qc-container">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '2.5rem',
                fontSize: '0.85rem',
                color: '#6b7280',
              }}
            >
              <Link href="/" style={{ color: '#6b7280' }}>Home</Link>
              <span aria-hidden>/</span>
              <Link href="/#solutions" style={{ color: '#6b7280' }}>Operations</Link>
              <span aria-hidden>/</span>
              <span style={{ color: '#3985F8', textDecoration: 'underline', fontWeight: 500 }}>
                Custom Workflow Automation
              </span>
            </nav>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.1fr',
                gap: '3rem',
                alignItems: 'center',
              }}
            >
              {/* Left */}
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#4300B7',
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
                  Custom Workflow<br />Automation
                </h1>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#6b7280',
                    lineHeight: 1.7,
                    margin: 0,
                    maxWidth: 440,
                  }}
                >
                  From three months of manual work to a structured, repeatable system the
                  school can run every year — without spreadsheets, emails, or errors.
                </p>
              </div>

              {/* Right – layered mockup */}
              <div style={{ position: 'relative', minHeight: 360 }}>
                {/* Back placeholder card */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '82%',
                    height: '88%',
                    background: '#f3f4f6',
                    borderRadius: '16px',
                    border: '1px solid #e5e7eb',
                    zIndex: 0,
                  }}
                />
                {/* Front workflow mockup */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow:
                      '0 24px 64px rgba(57,133,248,0.15), 0 4px 16px rgba(0,0,0,0.08)',
                    marginLeft: '1rem',
                    marginTop: '2rem',
                  }}
                >
                  <Image
                    src="/workflow-hero-mockup.png"
                    alt="Make.com workflow automation interface"
                    width={680}
                    height={460}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    priority
                  />
                </div>
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
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.25rem',
              }}
            >
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
                  {/* Icon box – replace Image with actual 3D icon from Figma */}
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, #f0f4ff, #f5f0ff)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={32}
                      height={32}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
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
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'start',
              }}
            >
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {rightForYouItems.map((item) => (
                    <div
                      key={item.title}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '44px 1fr',
                        gap: '1rem',
                        padding: '0.9rem 1rem',
                        borderRadius: '12px',
                        background: item.highlighted
                          ? 'linear-gradient(90deg, rgba(57,133,248,0.06), rgba(204,153,255,0.06))'
                          : 'transparent',
                        alignItems: 'start',
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: '10px',
                          background: 'linear-gradient(135deg, #f0f4ff, #f5f0ff)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Image
                          src={item.icon}
                          alt=""
                          width={22}
                          height={22}
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      <div>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            color: '#111827',
                            marginBottom: '0.2rem',
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
                    </div>
                  ))}
                </div>
              </div>

              {/* Right – 3D character (replace placeholder with actual image from Figma) */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  minHeight: 380,
                }}
              >
             
                <Image src="/right-for-you-character.png" alt="" width={680} height={706} style={{ objectFit: 'contain' }} />

              </div>
            </div>
          </div>
        </section>

        {/* ── Our Process ── */}
        <section style={{ padding: '5rem 0', background: '#f5f9ff' }}>
          <div className="qc-container">
            {/* Header */}
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

            {/* Timeline panel */}
            <div
              style={{
                background: 'linear-gradient(135deg, #eef2ff 0%, #f5f0ff 100%)',
                borderRadius: '24px',
                padding: '2rem 2.5rem',
              }}
            >
              {processSteps.map((step, index) => (
                <div
                  key={step.step}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '260px 60px 1fr',
                    minHeight: index < processSteps.length - 1 ? 150 : 110,
                    position: 'relative',
                  }}
                >
                  {/* Left: step card */}
                  <div
                    style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      padding: '1.1rem 1.4rem',
                      margin: '0.5rem 0',
                      alignSelf: 'start',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: step.active ? '#3985F8' : '#9ca3af',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {step.step}
                    </div>
                    <div
                      style={{
                        fontSize: step.active ? '1.55rem' : '1.3rem',
                        fontWeight: 800,
                        lineHeight: 1.2,
                        whiteSpace: 'pre-line',
                        background: step.active
                          ? 'linear-gradient(135deg, #3985F8, #09C0FF)'
                          : 'none',
                        WebkitBackgroundClip: step.active ? 'text' : 'unset',
                        color: step.active ? 'transparent' : '#111827',
                      }}
                    >
                      {step.title}
                    </div>
                  </div>

                  {/* Center: dot + line */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      paddingTop: '2rem',
                    }}
                  >
                    <div
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: '50%',
                        background: step.active ? '#3985F8' : '#d1d5db',
                        flexShrink: 0,
                        zIndex: 1,
                        boxShadow: step.active
                          ? '0 0 0 5px rgba(57,133,248,0.18)'
                          : 'none',
                      }}
                    />
                    {index < processSteps.length - 1 && (
                      <div
                        style={{
                          width: 2,
                          flex: 1,
                          marginTop: 4,
                          background:
                            index === 0
                              ? 'linear-gradient(180deg, #3985F8 0%, #d1d5db 100%)'
                              : '#d1d5db',
                        }}
                      />
                    )}
                  </div>

                  {/* Right: icon + description */}
                  <div style={{ paddingTop: '1.6rem', paddingLeft: '0.25rem' }}>
                    <div style={{ marginBottom: '0.5rem', lineHeight: 1 }}>{step.icon}</div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.875rem',
                        color: '#6b7280',
                        lineHeight: 1.65,
                        maxWidth: 480,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
              }}
            >
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

        {/* ── Real conversation (reused section) ── */}
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

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ProcessStepsSection } from '@/components/ProcessStepsSection';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Workflow Automation for Service Firms | QuitCode',
  description: 'Automate repetitive business processes with custom no-code workflows. We build automation systems using Airtable, Make, and modern integration tools.',
  alternates: { canonical: 'https://quitcode.com/services/workflow-automation' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Workflow Automation for Service Firms | QuitCode',
    description: 'Replace repetitive manual work with intelligent automation workflows built around your real business processes.',
    url: 'https://quitcode.com/services/workflow-automation',
    images: [{ url: '/ogs/og-custom-workflow-automations.webp', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Workflow Automation for Service Firms | QuitCode' },
};

const whatYouGet = [
  {
    title: 'Automated System',
    description: 'Fully configured no-code automation platform connecting your key tools and processes',
    icon: '/automated-workflow-platform.png',
    alt: 'automated workflow platform connecting business tools',
  },
  {
    title: 'Documentation',
    description: 'Detailed guides and step-by-step instructions for every automated workflow',
    icon: '/documentation.png',
    alt: '',
  },
  {
    title: 'Integrations',
    description: 'Seamless connections between CRM, email, project management, and more',
    icon: '/workflow-integrations.png',
    alt: 'integration between CRM email and project management tools',
  },
  {
    title: 'Custom Dashboards',
    description: 'Real-time monitoring to track workflow performance and key metrics',
    icon: '/automation-dashboard.png',
    alt: 'workflow automation performance dashboard',
  },
  {
    title: 'Team Training',
    description: 'Comprehensive resources and guides for smooth team adoption',
    icon: '/workflow-team-training.png',
    alt: 'team training for automation system adoption',
  },
  {
    title: 'ROI Report',
    description: 'Analysis of time saved, efficiency gains, and performance optimization',
    icon: '/automation-roi-report.png',
    alt: 'automation ROI report showing time saved',
  },
];

const rightForYouItems = [
  {
    title: 'Repetitive Manual Tasks',
    description: 'Your team spends hours on data entry, file transfers, status updates, or routine communications',
    highlighted: true,
    icon: '/icons/repetitive-icon.png',
  },
  {
    title: 'Disconnected Tools',
    description: 'Information gets lost between systems, requiring manual data re-entry and causing delays',
    highlighted: false,
    icon: '/icons/disconnected-icon.png',
  },
  {
    title: 'Process Bottlenecks',
    description: 'Approvals, onboarding, or handoffs are slowing down your operations',
    highlighted: true,
    icon: '/icons/bottlenecks-icon.png',
  },
  {
    title: 'Scaling Challenges',
    description: "Current processes work but won't handle increased workload without hiring more staff",
    highlighted: false,
    icon: '/icons/scaling-icon.png',
  },
  {
    title: 'Human Errors',
    description: 'Information gets lost between systems, requiring manual data re-entry and causing delays',
    highlighted: true,
    icon: '/icons/human-errors-icon.png',
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
      'Build powerful, scalable web solutions - from client portals to management systems - delivered in weeks.',
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
        <section className="qc-section qc-gradient-hero" style={{ paddingTop: "7rem", paddingBottom: "3rem" }}>
          <div className="qc-container">
            <div className="cwa-hero-grid">
              {/* Left */}
              <div>
                <Breadcrumb
                  crumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services", inactive: true },
                    { label: "Custom Workflow Automation", href: "/services/custom-workflow-automation" },
                  ]}
                />
                <span
                  style={{
                    display: "inline-block",
                    background: "linear-gradient(90deg, #09c0ff, #cc99ff)",
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "0.3rem 0.85rem",
                    borderRadius: "6px",
                    marginBottom: "32px",
                  }}
                >
                  Services
                </span>
                <h1 className="type-heading-eb-48" style={{ margin: "0 0 32px", color: "#111827",  fontSize: 64}}>
                  Custom Workflow
                  <br />
                  Automation
                </h1>
                <p className="type-body" style={{ color: "#2e2e2e", margin: 0, maxWidth: 440 }}>
                  From three months of manual work to a structured, repeatable system the school can run every year -
                  without spreadsheets, emails, or errors.
                </p>
              </div>

              {/* Right - mockup */}
              <div>
                <Image
                  src="/workflow-automation-system.png"
                  alt="workflow automation system for service business operations"
                  width={680}
                  height={460}
                  className="cwa-hero-img-desktop"
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
                <Image
                  src="/workflow-automation-system-tablet.png"
                  alt="workflow automation system for service business operations"
                  width={680}
                  height={600}
                  className="cwa-hero-img-tablet"
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── What You Get ── */}
        <section className="qc-section">
          <div className="qc-container">
            <h2 className="type-heading-eb-48" style={{ margin: "0 0 2.5rem", color: "#111827" }}>
              What You Get
            </h2>
            <div className="cwa-wyg-grid">
              {whatYouGet.map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "1.75rem 1.5rem",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.9rem",
                    border: "1px solid #e5e7eb",
                    background: "#fff",
                  }}
                >
                  <Image src={item.icon} alt={item.alt} width={154} height={154} style={{ objectFit: "contain" }} />
                  <div>
                    <h3 className="type-heading-eb-32" style={{ margin: "0 0 16px", color: "#111827" }}>
                      {item.title}
                    </h3>
                    <p className="type-body" style={{ margin: 0, color: "#6b7280" }}>
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
                <h2 className="type-heading-eb-48" style={{ margin: "0 0 4rem", color: "#111827" }}>
                  Is This Right for You?
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {rightForYouItems.map((item) => (
                    <div
                      key={item.title}
                      className="cwa-rfy-item"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "56px 340px 1fr",
                        gap: "1rem",
                        padding: "0.85rem 1rem",
                        borderRadius: "12px",
                        background: item.highlighted
                          ? "linear-gradient(90deg, rgba(57,133,248,0.06), rgba(204,153,255,0.06))"
                          : "transparent",
                        alignItems: "center",
                      }}
                    >
                      <Image src={item.icon} alt="" width={41} height={41} style={{ objectFit: "contain" }} />
                      <div className="type-body-semibold" style={{ color: "#111827", fontSize: 28 }}>
                        {item.title}
                      </div>
                      <div className="type-body" style={{ color: item.highlighted ? "#3985F8" : "#6b7280" }}>
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - 3D character */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  minHeight: 380,
                }}
              >
                <Image
                  src="/right-for-you-character.png"
                  alt=""
                  width={1080}
                  height={1337}
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Process ── */}
        <section style={{ padding: "5rem 0", background: "#fff" }}>
          <div className="qc-container">
            <ProcessStepsSection />
          </div>
        </section>

        {/* ── Not Quite What You're Looking For? ── */}
        <section className="qc-section">
          <div className="qc-container">
            <div style={{ textAlign: "center", marginBottom: "6.25rem" }}>
              <Image
                src="/glass-cta/Asset_Icon.png"
                alt=""
                width={60}
                height={60}
                style={{ display: "block", margin: "0 auto 1rem" }}
              />
              <h2 className="type-heading-eb-56" style={{ margin: "0 0 1rem", color: "#111827", fontSize: 56 }}>
                Not Quite{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #3985f8, #9291fc, #cc99ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  What You&apos;re Looking For?
                </span>
              </h2>
              <p className="type-body" style={{ margin: 0, color: "#6b7280" }}>
                Explore our other services to find the perfect solution for your business
              </p>
            </div>

            <div className="cwa-os-grid">
              {otherServices.map((service) => (
                <div
                  key={service.title}
                  style={{
                    borderRadius: "20px",
                    border: "1px solid #e5e7eb",
                    overflow: "hidden",
                    background: "#fff",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Image area */}
                  <div
                    style={{
                      background: "linear-gradient(135deg, rgba(57,133,248,0.05), rgba(204,153,255,0.08))",
                      height: 200,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "1rem",
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={300}
                      height={180}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                    <span
                      style={{
                        display: "inline-block",
                        alignSelf: "flex-start",
                        background: "linear-gradient(90deg, #09C0FF, #CC99FF)",
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "5px",
                        marginBottom: "2rem",
                      }}
                    >
                      Services
                    </span>
                    <h3
                      className="type-heading-eb-32"
                      style={{ margin: "0 0 0.6rem", color: "#111827" }}
                    >
                      {service.title}
                    </h3>
                    <p className="type-body" style={{ margin: "0 0 1.25rem", color: "#6b7280" }}>
                      {service.description}
                    </p>
                    <Link href={service.href} className="qc-button-gradient-border" style={{ marginTop: "auto" }} aria-label={`Learn more about ${service.title}`}>
                      Learn more
                      <span style={{ display: "inline-flex", marginLeft: 6 }}>
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
              <h2 className="type-heading-eb-48">
                Every project starts
                <br />
                with a <span className="qc-conversation-highlight">real conversation</span>
              </h2>
              <p className="qc-conversation-subtitle">Meet Roman, our founder and automation strategist.</p>
              <p className="qc-conversation-para">
                With 10+ years in optimising service operations and 50+ projects delivered, he helps firms uncover
                what&apos;s slowing them down-and map a clear path to automation.
              </p>
              <a
                href="https://calendly.com/quitcode/30min"
                target="_blank"
                rel="noreferrer"
                className="qc-conversation-cta"
              >
                <span>Talk to Roman</span>
                <Image src="/icons/arrow-right.png" alt="" width={24} height={24} style={{ objectFit: 'contain' }} />
              </a>
              <div className="qc-conversation-benefits">
                <span className="qc-conversation-benefit">
                  <span className="qc-conversation-star" aria-hidden>
                    ☆
                  </span>
                  Free 30‑minute strategy session
                </span>
                <span className="qc-conversation-benefit">
                  <span className="qc-conversation-star" aria-hidden>
                    ☆
                  </span>
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
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

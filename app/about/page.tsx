'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { JourneyFormSection } from '@/components/JourneyFormSection';

const TRACK_RECORD = [
  {
    type: 'title' as const,
    title: 'Official Make Partner',
    highlight: 'Make',
    image: '/about/track-make-badge.png',
    imageAlt: 'Make Silver Professional Service Partner'
  },
  {
    type: 'metric' as const,
    metric: '30+',
    desc: 'automation experts on the team',
    image: '/about/track-avatars.png',
    imageAlt: 'Team'
  },
  {
    type: 'metric' as const,
    metric: '200+',
    desc: 'projects delivered',
    image: '/about/track-projects.png',
    imageAlt: 'Projects delivered'
  },
  {
    type: 'metric' as const,
    metric: '2,000+',
    desc: 'workflows designed and implemented',
    image: '/about/track-workflows.png',
    imageAlt: 'Workflows'
  },
  {
    type: 'upwork' as const,
    title: 'Job Success Score on Upwork',
    highlight: 'Upwork',
    image: '/about/track-upwork-badge.png',
    imageAlt: 'Upwork Top Rated Plus'
  }
];

const VALUES = [
  { title: 'Responsibility', text: 'We take ownership of our work and care about our team. We are accountable for decisions, results, and impact.', icon: '/about/value-checkmark.png' },
  { title: 'Ingenuity', text: 'We constantly improve, explore new approaches, and find smarter ways to build solutions.', icon: '/about/value-connect.png' },
  { title: 'Value Creation', text: 'We focus on solving real business problems and delivering meaningful value, not just projects.', icon: '/about/value-ring.png' },
  { title: 'Work Hard', text: 'We are driven, committed, and ready to put in the effort to achieve high-quality results.', icon: '/about/value-workbench.png' }
];

const PEOPLE = [
  { name: 'Roman Sydorak', role: 'Founder & Lead Automation', image: '/roman-sydorak.png', linkedin: true },
  { name: 'Team Member', role: 'Operations', image: '/testimonials/avatar.png', linkedin: true },
  { name: 'The people you\'ll meet', role: 'Descriptive card', description: 'These are the people you\'ll meet when you work with QuitCode. Experts in no-code platforms and process design.' },
  { name: 'Team Member', role: 'Solutions', image: '/testimonials/avatar.png', linkedin: true },
  { name: 'Team Member', role: 'Delivery', image: '/testimonials/avatar.png', linkedin: true },
  { name: 'Join our team', role: 'See open vacancies', cta: true, image: '/about/avatar-stack.png' }
];

export default function AboutPage() {
  return (
    <div className="qc-page">
      <main>
        {/* About Hero */}
        <section className="qc-about-hero">
          <div className="qc-about-hero-bg" aria-hidden />
          <div className="qc-about-hero-dots" aria-hidden />
          <div className="qc-container qc-about-hero-inner">
            <span className="qc-about-pill">ABOUT US</span>
            <h1 className="qc-about-hero-title">Automation & AI Studio</h1>
            <p className="qc-about-hero-subtitle">
              QuitCode is an Automation & AI Company that helps high-value service firms — from consulting agencies to private schools — transform fragmented operations into connected, intelligent systems.
            </p>
            <Link href="#journey" className="qc-about-hero-cta">
              <span className="qc-about-hero-cta-text">Start your automation journey</span>
              <span className="qc-about-hero-cta-arrow-wrap" aria-hidden>
                <span className="qc-about-hero-cta-arrow">→</span>
              </span>
            </Link>
            <div className="qc-about-node-strip">
              <Image
                src="/about/node-strip.png"
                alt="Platform integrations and automation"
                width={480}
                height={120}
                className="qc-about-node-strip-img"
              />
            </div>
          </div>
        </section>

        {/* Split: Lviv + card */}
        <section className="qc-section qc-about-split">
          <div className="qc-about-split-bg" aria-hidden />
          <div className="qc-about-split-cube">
            <Image src="/about/cube.png?v=2" alt="" width={120} height={120} aria-hidden unoptimized />
          </div>
          <div className="qc-container">
            <div className="qc-about-split-grid">
              <div className="qc-about-split-media">
                <div className="qc-about-split-image-wrap">
                  <Image
                    src="/about/lviv.png?v=2"
                    alt="Lviv, Ukraine"
                    fill
                    sizes="(max-width: 900px) 100vw, 55vw"
                    style={{ objectFit: 'cover' }}
                    className="qc-about-split-image"
                    unoptimized
                  />
                </div>
              </div>
              <div className="qc-about-split-card qc-card">
                <h2 className="qc-about-split-title">
                  We combine <span className="qc-about-split-highlight">no-code technology</span> and <span className="qc-about-split-highlight">AI-driven logic</span> to design workflows that save time, reduce human error, and unlock capacity for sustainable growth.
                </h2>
                <div className="qc-about-split-location">
                  <span className="qc-about-split-location-icon">
                    <Image src="/footer/location.png" alt="" width={16} height={16} />
                  </span>
                  <span>Founded in 2021 in Lviv, Ukraine</span>
                </div>
                <p className="qc-about-split-desc">
                  QuitCode has grown into an international automation studio trusted by teams across the US, UK, Canada, and the EU.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Track Record */}
        <section className="qc-section qc-about-track">
          <div className="qc-container">
            <h2 className="qc-about-track-title">Our Track Record</h2>
            <div className="qc-about-track-grid">
              {TRACK_RECORD.map((item, i) => (
                <div key={i} className="qc-about-track-card qc-card">
                  {item.type === 'title' && (
                    <>
                      <h3 className="qc-about-track-card-title">
                        {item.title.split(item.highlight!).map((part, j) => (
                          <span key={j}>
                            {part}
                            {j < item.title!.split(item.highlight!).length - 1 && (
                              <span className="qc-about-track-highlight">{item.highlight}</span>
                            )}
                          </span>
                        ))}
                      </h3>
                      <div className="qc-about-track-card-img">
                        <Image src={item.image} alt={item.imageAlt} width={140} height={140} style={{ objectFit: 'contain' }} />
                      </div>
                    </>
                  )}
                  {item.type === 'metric' && (
                    <>
                      <div className="qc-about-track-metric">{item.metric}</div>
                      <p className="qc-about-track-desc">{item.desc}</p>
                      <div className="qc-about-track-card-img">
                        <Image src={item.image} alt={item.imageAlt} width={140} height={100} style={{ objectFit: 'contain' }} />
                      </div>
                    </>
                  )}
                  {item.type === 'upwork' && (
                    <>
                      <h3 className="qc-about-track-card-title">
                        {item.title!.split(item.highlight!).map((part, j) => (
                          <span key={j}>
                            {part}
                            {j < item.title!.split(item.highlight!).length - 1 && (
                              <span className="qc-about-track-highlight qc-about-track-highlight-blue">{item.highlight}</span>
                            )}
                          </span>
                        ))}
                      </h3>
                      <div className="qc-about-track-card-img">
                        <Image src={item.image} alt={item.imageAlt} width={140} height={100} style={{ objectFit: 'contain' }} />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission + Values */}
        <section className="qc-section qc-about-mission">
          <div className="qc-container">
            <div className="qc-about-mission-panel">
              <div className="qc-about-mission-bg" aria-hidden />
              <div className="qc-about-mission-dots" aria-hidden />
              <div className="qc-about-mission-content">
                <div className="qc-about-mission-top">
                  <div className="qc-about-mission-left">
                    <span className="qc-about-mission-label">OUR FOUNDATION</span>
                    <h2 className="qc-about-mission-heading">Mission</h2>
                  </div>
                  <div className="qc-about-mission-right">
                    <Image src="/about/mission-cube.png" alt="" width={48} height={48} className="qc-about-mission-icon" aria-hidden />
                    <h3 className="qc-about-mission-title">
                      We deliver <strong>automation solutions</strong> that <strong>slingshot your big ideas.</strong>
                    </h3>
                    <p className="qc-about-mission-para">
                      We help high-value service firms turn operational complexity into a strategic advantage by delivering scalable ways to automate repetitive tasks and accelerate operations, leveraging no-code/low-code technology and AI. Through intelligent, tailored Operational Hubs, we enable growth without compromising the personal touch—delivering tangible results in just 1 month.
                    </p>
                  </div>
                </div>
                <div className="qc-about-mission-values">
                  <div className="qc-about-mission-values-left">
                    <span className="qc-about-mission-label">WHAT WE STAND FOR</span>
                    <h3 className="qc-about-mission-values-heading">Our values</h3>
                  </div>
                  <ul className="qc-about-values-list">
                    {VALUES.map((v, i) => (
                      <li key={i} className="qc-about-value-item">
                        <div className="qc-about-value-icon-wrap">
                          <Image src={v.icon} alt="" width={28} height={28} className="qc-about-value-icon-img" />
                        </div>
                        <div>
                          <strong className="qc-about-value-title">{v.title}</strong>
                          <p className="qc-about-value-text">{v.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* People at QuitCode */}
        <section className="qc-section qc-about-people">
          <div className="qc-container">
            <span className="qc-about-pill">WHAT MAKES US THE BEST</span>
            <h2 className="qc-about-people-title">People at QuitCode</h2>
            <div className="qc-about-people-grid">
              {PEOPLE.map((person, i) => (
                <div
                  key={i}
                  className={`qc-about-person-card qc-card ${person.cta ? 'qc-about-person-card-cta' : ''} ${'description' in person && person.description ? 'qc-about-person-card-desc' : ''}`}
                >
                  {person.cta ? (
                    <>
                      <div className="qc-about-person-avatar-stack">
                        <Image src={person.image} alt="" width={64} height={64} />
                      </div>
                      <h3 className="qc-about-person-name">{person.name}</h3>
                      <a href="/#journey" className="qc-about-person-cta-link">See open vacancies</a>
                    </>
                  ) : 'description' in person && person.description ? (
                    <>
                      <h3 className="qc-about-person-name">These are the people you&apos;ll meet</h3>
                      <p className="qc-about-person-desc">{person.description}</p>
                    </>
                  ) : (
                    <>
                      <div className="qc-about-person-photo-wrap">
                        <Image src={person.image ?? '/testimonials/avatar.png'} alt="" fill sizes="200px" style={{ objectFit: 'cover' }} />
                        {person.linkedin && (
                          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="qc-about-person-linkedin" aria-label="LinkedIn">
                            <Image src="/footer/linkedin.png" alt="" width={20} height={20} />
                          </a>
                        )}
                      </div>
                      <h3 className="qc-about-person-name">{person.name}</h3>
                      <p className="qc-about-person-role">{person.role}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <JourneyFormSection />
      </main>
    </div>
  );
}

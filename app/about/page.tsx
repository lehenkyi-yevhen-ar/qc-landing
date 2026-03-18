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
    image: '/about/make-official-partner-badge.png',
    imageAlt: 'Official Make Partner badge'
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
  { name: 'Roman Sydorak', role: 'CEO & Strategic Operations Advisor', image: '/roman-sydorak.png', linkedin: 'https://www.linkedin.com/in/roman-sydorak/' },
  { name: 'Olenka Leshchyshyn', role: 'Sales Manager', image: '/about/olena-leshchyshyn.webp', linkedin: 'https://www.linkedin.com/in/olena-leshchyshyn-8686a8311/' },
  { name: 'Taras-Vasyl Haioshko', role: 'Project Manager', image: '/about/taras-hayoshko.webp', linkedin: 'https://www.linkedin.com/in/taras-vasyl-haioshko-901494218/' },
  { name: 'Hryhorii Haponiuk', role: 'Automation Expert, Team Lead', image: '/about/hryhorii-haponiuk.jpg', linkedin: 'https://www.linkedin.com/in/hryhorii-haponiuk-131582289/' },
  { name: 'Maryan Andrushchak', role: 'Automation Expert, Tech Lead', image: '/about/maryan-andrushchak.jpg', linkedin: 'https://www.linkedin.com/in/mar-andrushchak/' },
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
            <h1 className="qc-about-hero-title">About QuitCode</h1>
            <p className="qc-about-hero-subtitle">
              QuitCode is an Automation &amp; AI Company that helps high-value service firms - from consulting agencies to private schools - transform fragmented operations into connected, intelligent systems.
            </p>
            <Link href="#journey" className="qc-about-hero-cta">
              <span className="qc-about-hero-cta-text">Start your automation journey</span>
              <span className="qc-about-hero-cta-arrow-wrap" aria-hidden>
                <img src="/icons/arrow-right.png" alt="Arrow right white" style={{width: 28, height: 28}}/>
              </span>
            </Link>
            <div className="qc-about-node-strip">
              <Image
                src="/about/quitcode-automation-ai-company.png"
                alt="QuitCode automation and AI studio for service firms"
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
            <Image src="/about/cube.png" alt="" width={320} height={320}  />
          </div>
          <div className='qc-upcontainer'>
            <div className="qc-container">
          
            <div className="qc-about-split-grid">
              <div className="qc-about-split-media">
                <div className="qc-about-split-image-wrap">
                  <Image
                    src="/about/lviv.webp?v=2"
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
                  <div className='qc-about-split-location-icon-wrap'><span className="qc-about-split-location-icon">
                    <Image src="/icons/location-icon.png" alt="" width={16} height={16} />
                  </span>
                  </div>
                  <p className='qc-about-split-location-text'>Founded in 2021 in Lviv, Ukraine</p>
                </div>
                <p className="qc-about-split-desc">
                  QuitCode has grown into an international automation studio trusted by teams across the <strong style={{fontWeight: 600}}>US, UK, Canada, and the EU.</strong>
                </p>
              </div>
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
                    <h2 className="qc-about-mission-heading">Our Mission</h2>
                  </div>
                  <div className="qc-about-mission-right">
                    <Image src="/about/mission-cube.png" alt="" width={76} height={76} className="qc-about-mission-icon" aria-hidden />
                    <h3 className="qc-about-mission-title">
                      We deliver <strong>automation solutions</strong> that <strong>slingshot your big ideas.</strong>
                    </h3>
                    <p className="qc-about-mission-para">
                      We help high-value service firms turn operational complexity into a strategic advantage by delivering scalable ways to automate repetitive tasks and accelerate operations, leveraging no-code/low-code technology and AI. Through intelligent, tailored Operational Hubs, we enable growth without compromising the personal touch-delivering tangible results in just 1 month.
                    </p>
                  </div>
                </div>
                <div className="qc-about-mission-values">
                  <div className="qc-about-mission-values-left">
                    <span className="qc-about-mission-label">WHAT WE STAND FOR</span>
                    <h2 className="qc-about-mission-values-heading">Our Values</h2>
                  </div>
                  <ul className="qc-about-values-list">
                    {VALUES.map((v, i) => (
                      <li key={i} className="qc-about-value-item">
                        <div className="qc-about-value-icon-wrap">
                          <Image src={v.icon} alt="" width={44} height={44} className="qc-about-value-icon-img" />
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
          <div className="qc-about-people-inner">
            <span className="qc-about-people-badge">WHAT MAKES US THE BEST</span>
            <h2 className="qc-about-people-title">People at QuitCode</h2>
            <div className="qc-about-people-grid">
              {/* Row 1: Roman, Nastia, Description (span 2) */}
              <div className="qc-about-person-card">
                <div className="qc-about-person-photo-wrap">
                  <Image
                    src={PEOPLE[0].image}
                    alt={PEOPLE[0].name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="qc-about-person-overlay" aria-hidden />
                  <p className="qc-about-person-name">{PEOPLE[0].name}</p>
                  <p className="qc-about-person-role">{PEOPLE[0].role}</p>
                  <a href={PEOPLE[0].linkedin} target="_blank" rel="noreferrer" className="qc-about-person-linkedin" aria-label={`${PEOPLE[0].name} on LinkedIn`}>
                    <Image src="/about/linkedin-icon.png" alt="" width={18} height={18} aria-hidden />
                  </a>
                </div>
              </div>
              <div className="qc-about-person-card">
                <div className="qc-about-person-photo-wrap">
                  <Image
                    src={PEOPLE[1].image}
                    alt={PEOPLE[1].name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="qc-about-person-overlay" aria-hidden />
                  <p className="qc-about-person-name">{PEOPLE[1].name}</p>
                  <p className="qc-about-person-role">{PEOPLE[1].role}</p>
                  <a href={PEOPLE[1].linkedin} target="_blank" rel="noreferrer" className="qc-about-person-linkedin" aria-label={`${PEOPLE[1].name} on LinkedIn`}>
                    <Image src="/about/linkedin-icon.png" alt="" width={18} height={18} aria-hidden />
                  </a>
                </div>
              </div>
              <div className="qc-about-people-desc-card">
                <div className="qc-about-people-desc-icon">
                  <Image src="/about/people-desc-icon.png" alt="" width={60} height={60} aria-hidden />
                </div>
                <p className="qc-about-people-desc-text">
                  These are the people you&apos;ll meet on calls and work with day to day.{' '}
                  <span className="qc-about-people-desc-highlight">Real humans</span> with deep <span className="qc-about-people-desc-highlight">automation expertise</span>
                </p>
              </div>
              {/* Row 2: Olenka, Taras, Hryhorii, Join our team */}
              <div className="qc-about-person-card">
                <div className="qc-about-person-photo-wrap">
                  <Image
                    src={PEOPLE[2].image}
                    alt={PEOPLE[2].name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="qc-about-person-overlay" aria-hidden />
                  <p className="qc-about-person-name">{PEOPLE[2].name}</p>
                  <p className="qc-about-person-role">{PEOPLE[2].role}</p>
                  <a href={PEOPLE[2].linkedin} target="_blank" rel="noreferrer" className="qc-about-person-linkedin" aria-label={`${PEOPLE[2].name} on LinkedIn`}>
                    <Image src="/about/linkedin-icon.png" alt="" width={18} height={18} aria-hidden />
                  </a>
                </div>
              </div>
              <div className="qc-about-person-card">
                <div className="qc-about-person-photo-wrap">
                  <Image
                    src={PEOPLE[3].image}
                    alt={PEOPLE[3].name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="qc-about-person-overlay" aria-hidden />
                  <p className="qc-about-person-name">{PEOPLE[3].name}</p>
                  <p className="qc-about-person-role">{PEOPLE[3].role}</p>
                  <a href={PEOPLE[3].linkedin} target="_blank" rel="noreferrer" className="qc-about-person-linkedin" aria-label={`${PEOPLE[3].name} on LinkedIn`}>
                    <Image src="/about/linkedin-icon.png" alt="" width={18} height={18} aria-hidden />
                  </a>
                </div>
              </div>
              <div className="qc-about-person-card">
                <div className="qc-about-person-photo-wrap">
                  <Image
                    src={PEOPLE[4].image}
                    alt={PEOPLE[4].name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="qc-about-person-overlay" aria-hidden />
                  <p className="qc-about-person-name">{PEOPLE[4].name}</p>
                  <p className="qc-about-person-role">{PEOPLE[4].role}</p>
                  <a href={PEOPLE[4].linkedin} target="_blank" rel="noreferrer" className="qc-about-person-linkedin" aria-label={`${PEOPLE[4].name} on LinkedIn`}>
                    <Image src="/about/linkedin-icon.png" alt="" width={18} height={18} aria-hidden />
                  </a>
                </div>
              </div>
              <div className="qc-about-people-join-card">
                <h3 className="qc-about-people-join-title">Join our team</h3>
                <p className="qc-about-people-join-subtitle">and boost your experience</p>
                <div className="qc-about-people-join-avatars">
                  <Image src="/about/join-avatars.png" alt="" width={180} height={48} className="qc-about-people-join-avatars-img" />
                </div>
                <a href="/#journey" className="qc-about-people-join-link">See open vacancies</a>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <JourneyFormSection />
      </main>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SectionId = 'hero' | 'solutions' | 'services' | 'case-studies' | 'journey';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  const isAbout = pathname === '/about';

  useEffect(() => {
    if (pathname !== '/') return;
    const sectionIds: SectionId[] = [
      'hero',
      'solutions',
      'services',
      'case-studies',
      'journey'
    ];
    const handleScroll = () => {
      let current: SectionId = 'hero';
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
  }, [pathname]);

  return (
    <header className="qc-header-shell">
      <div className="qc-header-inner">
        <div className="qc-header-bar">
          <div className="qc-header-left">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/quitcode/QuitCode/Horizontal.png"
                alt="QuitCode"
                width={160}
                height={36}
                style={{ height: 'auto', width: 'auto' }}
                priority
              />
            </Link>
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
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`qc-nav-link${isAbout ? ' qc-nav-link-active' : ''}`}
              >
                Operations
              </Link>
              <a
                href={pathname === '/' ? '#services' : '/#services'}
                onClick={() => setMobileMenuOpen(false)}
                className={`qc-nav-link${!isAbout && activeSection === 'services' ? ' qc-nav-link-active' : ''}`}
              >
                Platform
              </a>
              <a
                href={pathname === '/' ? '#case-studies' : '/#case-studies'}
                onClick={() => setMobileMenuOpen(false)}
                className={`qc-nav-link${!isAbout && activeSection === 'case-studies' ? ' qc-nav-link-active' : ''}`}
              >
                Resources
              </a>
              <a
                href={pathname === '/' ? '#about' : '/#about'}
                onClick={() => setMobileMenuOpen(false)}
                className="qc-nav-link"
              >
                Company
              </a>
              <a
                href={pathname === '/' ? '#case-studies' : '/#case-studies'}
                onClick={() => setMobileMenuOpen(false)}
                className={`qc-nav-link${!isAbout && activeSection === 'case-studies' ? ' qc-nav-link-active' : ''}`}
              >
                Case Studies
              </a>
            </div>
          </nav>

          <div className="qc-header-right">
            <a href={pathname === '/' ? '#journey' : '/#journey'} className="qc-header-cta-discovery">
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
  );
}

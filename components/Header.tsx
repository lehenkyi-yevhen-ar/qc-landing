'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SectionId = 'hero' | 'solutions' | 'services' | 'case-studies' | 'journey';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    const onPointerDown = (e: PointerEvent) => {
      const root = headerRef.current;
      if (!root) return;
      if (e.target instanceof Node && !root.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="qc-header-shell">
      <div className="qc-header-frame" ref={headerRef}>
        <div className={`qc-header-glass${scrolled ? ' qc-header-glass-scrolled' : ''}`}>
          <div className="qc-header-inner">
            <div className="qc-header-bar">
              <div className="qc-header-left">
                <Link href="/" onClick={closeMenu}>
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

              <nav className="qc-header-nav" aria-label="Primary navigation">
                <div className="qc-nav-links">
                  <a
                    href={pathname === '/' ? '#solutions' : '/#solutions'}
                    onClick={closeMenu}
                    className={`qc-nav-link${!isAbout && activeSection === 'solutions' ? ' qc-nav-link-active' : ''}`}
                  >
                    Operations
                  </a>
                  <a
                    href={pathname === '/' ? '#services' : '/#services'}
                    onClick={closeMenu}
                    className={`qc-nav-link${!isAbout && activeSection === 'services' ? ' qc-nav-link-active' : ''}`}
                  >
                    Platform
                  </a>
                  <a
                    href={pathname === '/' ? '#case-studies' : '/#case-studies'}
                    onClick={closeMenu}
                    className={`qc-nav-link${!isAbout && activeSection === 'case-studies' ? ' qc-nav-link-active' : ''}`}
                  >
                    Resources
                  </a>
                  <Link
                    href="/about"
                    onClick={closeMenu}
                    className={`qc-nav-link${isAbout ? ' qc-nav-link-active' : ''}`}
                  >
                    Company
                  </Link>
                  <a
                    href={pathname === '/' ? '#case-studies' : '/#case-studies'}
                    onClick={closeMenu}
                    className={`qc-nav-link${!isAbout && activeSection === 'case-studies' ? ' qc-nav-link-active' : ''}`}
                  >
                    Case Studies
                  </a>
                </div>
              </nav>

              <div className="qc-header-right">
                <a
                  href={pathname === '/' ? '#journey' : '/#journey'}
                  onClick={closeMenu}
                  className="qc-header-cta-discovery"
                >
                  <span>Get Free Discovery</span>
                  <span className="arrow-icon" aria-hidden="true">
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

              <button
                className="qc-header-menu-btn"
                onClick={() => setMobileMenuOpen(prev => !prev)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="qc-header-menu"
                type="button"
              >
                {mobileMenuOpen ? (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="qc-header-menu"
        className={`qc-header-menu${mobileMenuOpen ? ' qc-header-menu-open' : ''}`}
        role="dialog"
        aria-label="Menu"
      >
        <div className="qc-header-menu-links">
          <a href={pathname === '/' ? '#solutions' : '/#solutions'} onClick={closeMenu}>
            Operations
          </a>
          <a href={pathname === '/' ? '#services' : '/#services'} onClick={closeMenu}>
            Platform
          </a>
          <a href={pathname === '/' ? '#case-studies' : '/#case-studies'} onClick={closeMenu}>
            Resources
          </a>
          <Link href="/about" onClick={closeMenu}>
            Company
          </Link>
          <a href={pathname === '/' ? '#case-studies' : '/#case-studies'} onClick={closeMenu}>
            Case Studies
          </a>
        </div>
        <div className="qc-header-menu-ctas">
          <a href={pathname === '/' ? '#journey' : '/#journey'} onClick={closeMenu} className="qc-header-cta-discovery">
            <span>Get Free Discovery</span>
            <span className="arrow-icon" aria-hidden="true">
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
    </header>
  );
}

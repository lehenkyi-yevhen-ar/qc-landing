'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    label: 'Services',
    items: [
      { label: 'Custom Workflow Automation', href: '/services/custom-workflow-automation' },
      { label: 'Data Infrastructure Optimization', href: '/services/data-infrastructure-optimization' },
      { label: 'Custom Web Applications', href: '/services/custom-web-applications' },
      { label: 'Discovery & Strategy', href: '/services/discovery-strategy' },
    ],
  },
  {
    label: 'Platforms',
    items: [
      { label: 'Airtable', href: '/platforms/airtable' },
      { label: 'Make', href: '/platforms/make' },
      { label: 'Bubble', href: '/platforms/bubble' },
    ],
  },
  {
    label: 'Insights',
    items: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Career', href: '/career' },
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

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

  const isNavActive = (items: { href: string }[]) =>
    items.some(item => pathname === item.href || pathname.startsWith(item.href + '/'));

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
                  {navItems.map((nav) => (
                    <div
                      key={nav.label}
                      className="qc-nav-dropdown-wrap"
                      onMouseEnter={() => handleMouseEnter(nav.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        className={`qc-nav-link qc-nav-dropdown-trigger${isNavActive(nav.items) ? ' qc-nav-link-active' : ''}`}
                        aria-expanded={openDropdown === nav.label}
                        type="button"
                      >
                        {nav.label}
                        <svg
                          className={`qc-nav-chevron${openDropdown === nav.label ? ' qc-nav-chevron-open' : ''}`}
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      {openDropdown === nav.label && (
                        <div className="qc-nav-dropdown-panel" role="menu">
                          {nav.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`qc-nav-dropdown-item${pathname === item.href ? ' qc-nav-dropdown-item-active' : ''}`}
                              role="menuitem"
                              onClick={() => { setOpenDropdown(null); closeMenu(); }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </nav>

              <div className="qc-header-right">
                <a
                  href="/#journey"
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
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
          {navItems.map((nav) => (
            <div key={nav.label} className="qc-mobile-nav-section">
              <div className="qc-mobile-nav-label">{nav.label}</div>
              {nav.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`qc-mobile-nav-item${pathname === item.href ? ' qc-mobile-nav-item-active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="qc-header-menu-ctas">
          <a href="/#journey" onClick={closeMenu} className="qc-header-cta-discovery">
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

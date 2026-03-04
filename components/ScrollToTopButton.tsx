'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const SCROLL_THRESHOLD = 200;

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let lastVisible: boolean | null = null;

    function handleScroll() {
      const nowVisible = typeof window !== 'undefined' && window.scrollY > SCROLL_THRESHOLD;
      if (lastVisible !== nowVisible) {
        lastVisible = nowVisible;
        setVisible(nowVisible);
      }
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll, { passive: true });
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      type="button"
      className={`qc-scrolltop${visible ? ' qc-scrolltop--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <Image
        src="/scroll-to-top-arrow.png"
        alt=""
        width={56}
        height={56}
        className="qc-scrolltop-img"
        aria-hidden
      />
    </button>
  );
}

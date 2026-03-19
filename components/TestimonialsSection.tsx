'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { testimonialsData } from '@/lib/data';

type Slide =
  | { type: 'text'; item: (typeof testimonialsData)[0] }
  | { type: 'video'; item: (typeof testimonialsData)[0] };

// Alternate: text, video, text, video …
const slides: Slide[] = testimonialsData.flatMap(item => [
  { type: 'text', item },
  { type: 'video', item },
]);

const SLIDE_RATIO = 0.72; // slide occupies 72% of viewport width
const SLIDE_GAP = 24;     // px gap between slides

function sendYTCommand(iframe: HTMLIFrameElement | null, func: 'playVideo' | 'pauseVideo') {
  iframe?.contentWindow?.postMessage(
    JSON.stringify({ event: 'command', func, args: [] }),
    '*'
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [viewportW, setViewportW] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const iframeRefs = useRef<Record<number, HTMLIFrameElement | null>>({});

  // Measure viewport width
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    setViewportW(el.offsetWidth);
    const ro = new ResizeObserver(() => setViewportW(el.offsetWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const slideW = Math.round(viewportW * SLIDE_RATIO);
  const trackPadding = Math.round((viewportW - slideW) / 2);

  // Pause all videos on slide change (no autoplay)
  useEffect(() => {
    slides.forEach((slide, i) => {
      if (slide.type !== 'video') return;
      sendYTCommand(iframeRefs.current[i] ?? null, 'pauseVideo');
    });
  }, [active]);

  const go = (index: number) => setActive(index);
  const prev = () => go((active - 1 + slides.length) % slides.length);
  const next = () => go((active + 1) % slides.length);

  return (
    <section className="qc-section qc-testimonials">
      <div className="qc-testimonials-outer">

        {/* Header */}
        <div className="qc-testimonials-header-row">
          <Image src="/testimonials/frame-left.webp" alt="" width={400} height={46} className="qc-testimonials-bar qc-testimonials-bar-left" aria-hidden />
          <div className="qc-testimonials-header">
            <h2 className="qc-testimonials-title">Let our clients speak for us</h2>
            <p className="qc-testimonials-subtitle">
              The best way to understand QuitCode isn&apos;t through our words &mdash; it&apos;s through the experiences of the teams we work with.
            </p>
          </div>
          <Image src="/testimonials/frame-right.webp" alt="" width={400} height={46} className="qc-testimonials-bar qc-testimonials-bar-right" aria-hidden />
        </div>

        {/* Single-card viewport */}
        <div className="qc-testimonials-viewport" ref={viewportRef}>
          <div
            className="qc-testimonials-track qc-testimonials-track-single"
            style={{
              transform: `translateX(${-(active * (slideW + SLIDE_GAP))}px)`,
              paddingLeft: `${trackPadding}px`,
              paddingRight: `${trackPadding}px`,
              gap: `${SLIDE_GAP}px`,
            }}
          >
            {slides.map((slide, i) =>
              slide.type === 'text' ? (
                <article
                  key={i}
                  className="qc-testimonials-card qc-testimonials-card-text qc-testimonials-card-active qc-testimonials-slide"
                  aria-hidden={i !== active}
                  style={{ width: slideW || undefined }}
                >
                  <div className="qc-testimonials-stars">
                    {[1, 2, 3, 4, 5].map(j => (
                      <Image
                        key={j}
                        src="/testimonials/star-review.png"
                        alt=""
                        width={40}
                        height={40}
                        className="qc-testimonials-star"
                      />
                    ))}
                  </div>
                  <p className="qc-testimonials-quote">{slide.item.quote}</p>
                  <div className="qc-testimonials-author">
                    <Image
                      src="/testimonials/avatar.png"
                      alt=""
                      width={56}
                      height={56}
                      className="qc-testimonials-avatar"
                    />
                    <div className="qc-testimonials-verified-author-container">
                      <div className="qc-testimonials-verified-name-row">
                        <Image
                          src="/testimonials/verified.png"
                          alt="Verified client"
                          width={75}
                          height={19}
                          className="qc-testimonials-verified"
                        />
                        <div className="qc-testimonials-name">{slide.item.name}</div>
                      </div>
                      <div className="qc-testimonials-role">{slide.item.role}</div>
                    </div>
                  </div>
                </article>
              ) : (
                <div
                  key={i}
                  className="qc-testimonials-slide qc-testimonials-slide-video-wrapper"
                  aria-hidden={i !== active}
                  style={{
                    width: slideW || undefined,
                    ...(i !== active ? {
                      background: '#f3f8ff',
                      border: '1px solid #dfeaf7',
                      borderRadius: '22px',
                      boxShadow: '0 1px 3px rgba(17,24,39,0.04)',
                    } : {}),
                  }}
                >
                  <div className="qc-testimonials-card qc-testimonials-card-video qc-testimonials-card-active">
                    <iframe
                      ref={el => { iframeRefs.current[i] = el; }}
                      src={`https://www.youtube-nocookie.com/embed/${slide.item.videoId}?enablejsapi=1&rel=0&playsinline=1`}
                      title={`Testimonial video - ${slide.item.name}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="qc-testimonials-yt-iframe"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Nav */}
        <div className="qc-testimonials-nav qc-case-nav">
          <div className="qc-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`qc-dot${i === active ? ' qc-dot-active' : ''}`}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="qc-case-nav-buttons">
            <button type="button" className="qc-case-btn qc-case-btn-prev" onClick={prev} aria-label="Previous">
              <Image src="/icons/arrow-left-purple.png" alt="" width={24} height={24} />
            </button>
            <button type="button" className="qc-case-btn qc-case-btn-next" onClick={next} aria-label="Next">
              <Image src="/icons/arrow-right-purple.png" alt="" width={24} height={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

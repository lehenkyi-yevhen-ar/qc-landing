'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { testimonialsData } from '@/lib/data';

const PAIR_WIDTH = 1220; // 600 text + 20 gap + 600 video

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth <= 768
  );
  const [isTablet, setIsTablet] = useState(
    () => typeof window !== 'undefined' && window.innerWidth > 768 && window.innerWidth <= 1024
  );
  const [tabletStep, setTabletStep] = useState(560);
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 768);
      setIsTablet(w > 768 && w <= 1024);
    };
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const recalc = () => {
      if (viewportRef.current && isTablet) {
        setTabletStep(viewportRef.current.offsetWidth - 32);
      }
    };
    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, [isTablet]);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getTranslate = () => {
    if (isMobile) return -activeTestimonial * 280;
    if (isTablet) return -activeTestimonial * tabletStep;
    return -activeTestimonial * PAIR_WIDTH;
  };

  return (
    <section className="qc-section qc-testimonials" ref={sectionRef}>
      <div className="qc-testimonials-outer">
        <div className="qc-testimonials-header-row">
          <img src="/testimonials/frame-left.png" alt="" className="qc-testimonials-bar qc-testimonials-bar-left" aria-hidden />
          <div className="qc-testimonials-header">
            <h2 className="qc-testimonials-title">Let our clients speak for us</h2>
            <p className="qc-testimonials-subtitle">
              The best way to understand QuitCode isn&apos;t through our words &mdash; it&apos;s through the experiences of the teams we work with.
            </p>
          </div>
          <img src="/testimonials/frame-right.png" alt="" className="qc-testimonials-bar qc-testimonials-bar-right" aria-hidden />
        </div>

        <div className="qc-testimonials-viewport" ref={viewportRef}>
          <div
            className="qc-testimonials-track"
            style={{ transform: `translateX(${getTranslate()}px)` }}
          >
            <div className="qc-testimonials-card qc-testimonials-card-peek qc-testimonials-card-peek-left">
              <div className="qc-testimonials-card-faded-content">
                <p>ake a week. The system least 25</p>
              </div>
            </div>

            {testimonialsData.map((item, index) => (
              <div key={item.id} className="qc-testimonials-pair">
                <article
                  className={`qc-testimonials-card qc-testimonials-card-text ${index === activeTestimonial ? 'qc-testimonials-card-active' : ''}`}
                  aria-hidden={index !== activeTestimonial}
                >
                  <div className="qc-testimonials-stars">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Image
                        key={i}
                        src="/testimonials/star-review.png"
                        alt=""
                        width={40}
                        height={40}
                        className="qc-testimonials-star"
                      />
                    ))}
                  </div>
                  <p className="qc-testimonials-quote">{item.quote}</p>
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
                        <div className="qc-testimonials-name">{item.name}</div>
                      </div>
                      <div className="qc-testimonials-role">{item.role}</div>
                    </div>
                  </div>
                </article>
                <div
                  className={`qc-testimonials-card qc-testimonials-card-video ${index === activeTestimonial ? 'qc-testimonials-card-active' : ''}`}
                  aria-hidden={index !== activeTestimonial}
                >
                  <Image
                    src="/testimonials/card-review.png"
                    alt="Client video testimonial"
                    fill
                    sizes="288px"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="qc-testimonials-video-overlay" aria-hidden />
                </div>
              </div>
            ))}

            <div className="qc-testimonials-card qc-testimonials-card-peek qc-testimonials-card-peek-right">
              <div className="qc-testimonials-card-faded-content">
                <p>Before work hours chasin proposals</p>
              </div>
            </div>
          </div>
        </div>

        <div className="qc-testimonials-nav qc-case-nav">
          <div className="qc-dots">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`qc-dot${index === activeTestimonial ? ' qc-dot-active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <div className="qc-case-nav-buttons">
            <button
              type="button"
              className="qc-case-btn qc-case-btn-prev"
              onClick={() => {
                setActiveTestimonial(
                  (activeTestimonial - 1 + testimonialsData.length) % testimonialsData.length
                );
                scrollToSection();
              }}
              aria-label="Previous testimonial"
            >
              <Image src="/icons/arrow-left-purple.png" alt="" width={24} height={24} />
            </button>
            <button
              type="button"
              className="qc-case-btn qc-case-btn-next"
              onClick={() => {
                setActiveTestimonial((activeTestimonial + 1) % testimonialsData.length);
                scrollToSection();
              }}
              aria-label="Next testimonial"
            >
              <Image src="/icons/arrow-right-purple.png" alt="" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

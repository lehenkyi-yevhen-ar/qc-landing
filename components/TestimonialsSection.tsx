'use client';

import { useState } from 'react';
import Image from 'next/image';
import { testimonialsData } from '@/lib/data';

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="qc-section qc-testimonials">
      <div className="qc-testimonials-outer">
        <div className="qc-testimonials-header-row">
          <div className="qc-testimonials-header-bars" aria-hidden>
            <img src="/testimonials/frame-left.png" alt="" className="qc-testimonials-bar qc-testimonials-bar-left" />
            <img src="/testimonials/frame-right.png" alt="" className="qc-testimonials-bar qc-testimonials-bar-right" />
          </div>
          <div className="qc-testimonials-header">
            <h2 className="qc-testimonials-title">What our clients say</h2>
            <p className="qc-testimonials-subtitle">
              Real feedback from consulting, creative, and education teams we&apos;ve helped streamline.
            </p>
          </div>
        </div>

        <div className="qc-testimonials-viewport">
          <div
            className="qc-testimonials-track"
            style={{
              transform: `translateX(${236 - activeTestimonial * 628}px)`
            }}
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
                        width={18}
                        height={18}
                        className="qc-testimonials-star"
                      />
                    ))}
                  </div>
                  <p className="qc-testimonials-quote">{item.quote}</p>
                  <div className="qc-testimonials-author">
                    <Image
                      src="/testimonials/avatar.png"
                      alt=""
                      width={36}
                      height={36}
                      className="qc-testimonials-avatar"
                    />
                    <div className="qc-testimonials-verified-author-container">
                      <Image
                        src="/testimonials/verified.png"
                        alt="Verified client"
                        width={75}
                        height={19}
                        className="qc-testimonials-verified"
                      />
                      <div className="qc-testimonials-role">{item.role}</div>
                    </div>
                    <div className="qc-testimonials-meta">
                      <div className="qc-testimonials-name">{item.name}</div>
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
              onClick={() =>
                setActiveTestimonial(
                  (activeTestimonial - 1 + testimonialsData.length) % testimonialsData.length
                )
              }
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              className="qc-case-btn qc-case-btn-next"
              onClick={() =>
                setActiveTestimonial((activeTestimonial + 1) % testimonialsData.length)
              }
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

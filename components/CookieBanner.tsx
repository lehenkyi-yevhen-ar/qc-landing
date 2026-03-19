'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'qc_cookie_consent';

function injectAnalytics(gaId?: string, clarityId?: string) {
  if (gaId && !document.getElementById('qc-ga')) {
    const s1 = document.createElement('script');
    s1.id = 'qc-ga';
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(s1);

    const s2 = document.createElement('script');
    s2.id = 'qc-ga-init';
    s2.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`;
    document.head.appendChild(s2);
  }

  if (clarityId && !document.getElementById('qc-clarity')) {
    const s = document.createElement('script');
    s.id = 'qc-clarity';
    s.text = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarityId}");`;
    document.head.appendChild(s);
  }
}

export function CookieBanner({
  gaId,
  clarityId,
}: {
  gaId?: string;
  clarityId?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Nothing to consent to — skip the banner entirely
    if (!gaId && !clarityId) return;

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'accepted') {
      injectAnalytics(gaId, clarityId);
    } else if (!stored) {
      setVisible(true);
    }
    // 'declined' → do nothing, banner stays hidden
  }, [gaId, clarityId]);

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    injectAnalytics(gaId, clarityId);
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'linear-gradient(90deg, #EBF3FE 0%, #FAF5FF 100%)',
        borderTop: '3px solid transparent',
        borderImage: 'linear-gradient(90deg, #6C7BFF, #C084FC) 1',
        boxShadow: '0 -4px 24px rgba(67,0,183,0.10)',
        fontFamily: 'var(--font-karla), Arial, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Icon */}
        <span style={{ fontSize: '1.5rem', flexShrink: 0 }} aria-hidden>🍪</span>

        {/* Text */}
        <p
          style={{
            flex: 1,
            minWidth: 220,
            margin: 0,
            fontSize: '0.875rem',
            color: '#374151',
            lineHeight: 1.6,
          }}
        >
          We use analytics cookies (Google Analytics
          {clarityId ? ' & Microsoft Clarity' : ''}) to understand how visitors
          use our site. No advertising or tracking outside this site.{' '}
          <a
            href="/privacy"
            style={{ color: '#4300B7', textDecoration: 'underline', fontWeight: 600 }}
          >
            Privacy Policy
          </a>
          .
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '0.625rem', flexShrink: 0, flexWrap: 'wrap' }}>
          <button
            onClick={decline}
            style={{
              padding: '0.55rem 1.2rem',
              borderRadius: '8px',
              border: '1.5px solid #d1d5db',
              background: 'transparent',
              color: '#6b7280',
              fontFamily: 'inherit',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'border-color 0.15s, color 0.15s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#9ca3af';
              (e.currentTarget as HTMLButtonElement).style.color = '#374151';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#d1d5db';
              (e.currentTarget as HTMLButtonElement).style.color = '#6b7280';
            }}
          >
            Decline
          </button>

          <button
            onClick={accept}
            style={{
              padding: '0.55rem 1.2rem',
              borderRadius: '8px',
              border: 'none',
              background: 'linear-gradient(90deg, #4300b7, #5e00ff, #2200ff)',
              color: '#fff',
              fontFamily: 'inherit',
              fontSize: '0.875rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(64,56,133,0.35)',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.88')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}

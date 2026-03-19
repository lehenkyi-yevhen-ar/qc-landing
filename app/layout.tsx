import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Karla, Montserrat } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { CookieBanner } from '@/components/CookieBanner';
import './globals.css';

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-karla',
  display: 'swap',
  preload: true,
  fallback: ['Arial', 'sans-serif'],
  adjustFontFallback: true,
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
  fallback: ['Arial', 'sans-serif'],
  adjustFontFallback: true,
});

const BASE_URL = 'https://www.quitcode.com';

// ── Metadata (homepage - overridden per page via child layouts) ──────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'AI & No-Code Automation for Service Firms | Operational Systems | QuitCode',
    template: '%s | QuitCode',
  },
  description:
    'We help consulting, creative, and education firms turn manual processes into structured no-code automation systems. Build your operational hub with Airtable, Make, and custom apps.',
  keywords: [
    'AI and no-code automation for service firms',
    'business process automation',
    'workflow automation',
    'airtable automation',
    'operations automation',
    'QuitCode',
  ],
  authors: [{ name: 'QuitCode', url: BASE_URL }],
  creator: 'QuitCode',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/` },
  openGraph: {
    type: 'website',
    siteName: 'QuitCode',
    url: `${BASE_URL}/`,
    title: 'AI & No-Code Automation for Service Firms | QuitCode',
    description:
      'Turn manual operations into structured automation systems using Airtable, Make, and custom no-code apps.',
    images: [{ url: '/ogs/og-main.webp', width: 1200, height: 630, alt: 'QuitCode - Automation & AI Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@QuitCode',
    title: 'AI & No-Code Automation for Service Firms | QuitCode',
    description:
      'Turn manual operations into structured automation systems using Airtable, Make, and custom no-code apps.',
    images: ['/ogs/og-main.webp'],
  },
};

// ── Structured Data (JSON-LD) ─────────────────────────────────────────────────
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'QuitCode',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    founder: {
      '@type': 'Person',
      name: 'Roman Sydorak',
    },
    sameAs: [
      'https://www.linkedin.com/company/quitcode',
      'https://twitter.com/QuitCode',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: BASE_URL,
    name: 'QuitCode',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/search?q={search_term}`,
      'query-input': 'required name=search_term',
    },
  },
];

// GA4 measurement ID  →  set NEXT_PUBLIC_GA_ID in .env.local
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
// Microsoft Clarity project ID  →  set NEXT_PUBLIC_CLARITY_ID in .env.local
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${karla.variable} ${montserrat.variable}`}>
      <head>
        {/* Preconnect for video facades and thumbnails */}
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Analytics scripts are injected by <CookieBanner> only after user consent */}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollToTopButton />
        <CookieBanner gaId={GA_ID} clarityId={CLARITY_ID} />
      </body>
    </html>
  );
}

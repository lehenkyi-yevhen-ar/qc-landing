import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About QuitCode | Automation & AI Company for Service Firms',
  description: 'Learn about QuitCode, an automation and AI studio helping service firms build connected no-code systems for growth, efficiency, and operational clarity.',
  alternates: { canonical: 'https://quitcode.com/about' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'About QuitCode | Automation & AI Company',
    description: 'Meet the team behind QuitCode and learn how we help service firms turn fragmented operations into connected intelligent systems.',
    url: 'https://quitcode.com/about',
    images: [{ url: '/og-about.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About QuitCode | Automation & AI Company',
    description: 'Meet the team behind QuitCode and learn how we help service firms turn fragmented operations into connected intelligent systems.',
  },
};

export default function AboutLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}

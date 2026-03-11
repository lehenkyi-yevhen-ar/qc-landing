import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us – QuitCode | Automation & AI Studio',
  description: 'QuitCode is an Automation & AI studio founded in 2021 in Lviv. We combine no-code technology and AI-driven logic to help service firms scale operations intelligently.',
  alternates: { canonical: 'https://www.quitcode.com/about' },
  openGraph: {
    title: 'About QuitCode – Automation & AI Studio',
    description: 'We combine no-code technology and AI-driven logic to scale operations. Founded in 2021 in Lviv, Ukraine.',
    url: 'https://www.quitcode.com/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About QuitCode – Automation & AI Studio',
    description: 'We combine no-code technology and AI-driven logic to scale operations.',
  },
};

export default function AboutLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}

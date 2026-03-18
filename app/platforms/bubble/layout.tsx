import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bubble App Development | Custom Web Applications Without Code',
  description: 'Build custom web applications with Bubble. We design scalable SaaS platforms, client portals, and internal systems without traditional development overhead.',
  keywords: 'Bubble app development, Bubble web app, Bubble SaaS development, no-code web app development, Bubble platform, custom no-code applications',
  alternates: { canonical: 'https://quitcode.com/bubble-development' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Bubble App Development | Custom No-Code Applications',
    description: 'Build scalable web applications with Bubble — from client portals to SaaS platforms, without traditional engineering overhead.',
    url: 'https://quitcode.com/bubble-development',
    images: [{ url: 'https://quitcode.com/og-bubble.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bubble App Development | Custom No-Code Applications',
    description: 'Build scalable web applications with Bubble — from client portals to SaaS platforms, without traditional engineering overhead.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

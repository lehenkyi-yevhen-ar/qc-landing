import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bubble.io App Development - QuitCode',
  description: 'QuitCode builds scalable no-code web applications on Bubble.io - client portals, internal tools, and SaaS products - without traditional development costs.',
  alternates: { canonical: 'https://www.quitcode.com/platforms/bubble' },
  openGraph: {
    title: 'Bubble.io App Development - QuitCode',
    description: 'Scalable no-code web applications built on Bubble.io for service firms.',
    url: 'https://www.quitcode.com/platforms/bubble',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Bubble.io Development - QuitCode' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

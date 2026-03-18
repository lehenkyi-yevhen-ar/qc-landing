import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at QuitCode | Join Our Automation Team',
  description: 'Explore careers at QuitCode and join a team building real automation systems with no-code and AI. See open roles and growth opportunities.',
  alternates: { canonical: 'https://quitcode.com/careers' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Careers at QuitCode | Join Our Team',
    description: 'Build real automation systems, grow with a strong team, and explore open roles at QuitCode.',
    url: 'https://quitcode.com/careers',
    images: [{ url: '/og-careers.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Careers at QuitCode | Join Our Team' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

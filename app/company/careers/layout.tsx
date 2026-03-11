import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers – Join the QuitCode Team',
  description: 'Join QuitCode and work on real no-code and AI automation projects. We\'re looking for people who want to grow, take ownership, and build systems that matter.',
  alternates: { canonical: 'https://www.quitcode.com/company/careers' },
  openGraph: {
    title: 'Careers at QuitCode – Join Our Automation Team',
    description: 'Work on real no-code and AI automation projects. Join a fast-growing team building the future of operations.',
    url: 'https://www.quitcode.com/company/careers',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Careers at QuitCode' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Position – QuitCode Careers',
  description: 'Apply for an open role at QuitCode. Join a fast-growing no-code and AI automation studio building systems that matter.',
  openGraph: {
    title: 'Open Position – QuitCode Careers',
    description: 'Join QuitCode and work on real automation and AI projects.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Open Position – QuitCode' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

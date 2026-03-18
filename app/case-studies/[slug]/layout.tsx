import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study - QuitCode',
  description: 'See how QuitCode helped a service firm automate operations and achieve measurable results with no-code and AI solutions.',
  openGraph: {
    title: 'Case Study - QuitCode',
    description: 'Real results from no-code automation and AI projects built by QuitCode.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Case Study - QuitCode' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

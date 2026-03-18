import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies - QuitCode Automation Results',
  description: 'See how QuitCode has helped service firms automate operations, reduce admin work, and scale - with real results from real projects.',
  alternates: { canonical: 'https://www.quitcode.com/case-studies' },
  openGraph: {
    title: 'Case Studies - QuitCode Automation Results',
    description: 'Real results from no-code automation and AI projects built by QuitCode.',
    url: 'https://www.quitcode.com/case-studies',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Case Studies - QuitCode' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

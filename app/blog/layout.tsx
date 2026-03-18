import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automation Blog | No-Code, AI & Operations Insights',
  description: 'Insights on automation, no-code tools, and operational systems for service firms. Learn how to scale operations with better workflows and data.',
  alternates: { canonical: 'https://quitcode.com/blog' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Automation Blog | QuitCode',
    description: 'Practical insights on no-code, AI, and automation systems for modern service firms.',
    url: 'https://quitcode.com/blog',
    images: [{ url: '/og-blog.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Automation Blog | QuitCode' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Automation & AI Insights | QuitCode',
  description: 'Practical guides, case studies, and insights on no-code automation, Airtable, Make, Bubble, and AI-powered operations from the QuitCode team.',
  alternates: { canonical: 'https://www.quitcode.com/blog' },
  openGraph: {
    title: 'Blog - Automation & AI Insights | QuitCode',
    description: 'Practical guides on no-code automation, Airtable, Make, Bubble, and AI operations.',
    url: 'https://www.quitcode.com/blog',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Blog - QuitCode' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Airtable Automation Systems | Build a Single Source of Truth',
  description: 'Build a Single Source of Truth with Airtable automation. We design scalable systems for CRM, operations, finance, and reporting with no-code tools.',
  keywords: 'Airtable automation, Airtable CRM, Airtable systems, no-code automation Airtable, Airtable workflows, Airtable operations system',
  alternates: { canonical: 'https://quitcode.com/airtable-automation' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Airtable Automation Systems | QuitCode',
    description: 'Turn Airtable into your operational backbone. Build scalable systems for CRM, operations, and reporting.',
    url: 'https://quitcode.com/airtable-automation',
    images: [{ url: 'https://quitcode.com/og-airtable.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airtable Automation Systems | QuitCode',
    description: 'Turn Airtable into your operational backbone. Build scalable systems for CRM, operations, and reporting.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

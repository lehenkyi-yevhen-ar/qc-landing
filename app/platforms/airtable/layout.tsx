import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Airtable Automation Services - QuitCode',
  description: 'QuitCode builds custom Airtable systems - CRMs, operational dashboards, payroll tools, and client pipelines - for high-value service firms.',
  alternates: { canonical: 'https://www.quitcode.com/platforms/airtable' },
  openGraph: {
    title: 'Airtable Automation Services - QuitCode',
    description: 'Custom Airtable CRMs, dashboards, and automated workflows for service firms.',
    url: 'https://www.quitcode.com/platforms/airtable',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Airtable Automation - QuitCode' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

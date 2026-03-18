import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Make (Integromat) Automation - QuitCode',
  description: 'QuitCode designs and builds powerful Make (Integromat) automation scenarios - connecting your tools, eliminating manual tasks, and syncing data in real time.',
  alternates: { canonical: 'https://www.quitcode.com/platforms/make' },
  openGraph: {
    title: 'Make Automation Services - QuitCode',
    description: 'Powerful Make (Integromat) automation scenarios for service firms.',
    url: 'https://www.quitcode.com/platforms/make',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Make Automation - QuitCode' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

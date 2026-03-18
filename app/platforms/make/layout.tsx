import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Make Automation | Workflow Automation & Process Orchestration',
  description: 'Automate workflows with Make. We design scalable automation systems that connect your tools, enforce business logic, and execute processes reliably.',
  keywords: 'Make automation, Make workflows, Make.com automation, process automation Make, workflow orchestration, no-code automation Make',
  alternates: { canonical: 'https://quitcode.com/make-automation' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Make Automation | Workflow Execution Engine',
    description: 'Build reliable, scalable workflows with Make. Connect tools, automate processes, and enforce business logic across your operations.',
    url: 'https://quitcode.com/make-automation',
    images: [{ url: 'https://quitcode.com/og-make.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Make Automation | Workflow Execution Engine',
    description: 'Build reliable, scalable workflows with Make. Connect tools, automate processes, and enforce business logic across your operations.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

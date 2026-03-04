import type { ReactNode } from 'react';
import Image from 'next/image';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import './globals.css';

export const metadata = {
  title: 'QuitCode – No-code Operations Automation',
  description:
    'Turn operational chaos into clarity with intelligent no-code automation for high-value service teams.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}


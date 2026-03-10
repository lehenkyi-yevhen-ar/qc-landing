import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us – QuitCode | Automation & AI Studio',
  description: 'We combine no-code technology and AI-driven logic to scale operations. Founded in 2021 in Lviv, Ukraine.'
};

export default function AboutLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}

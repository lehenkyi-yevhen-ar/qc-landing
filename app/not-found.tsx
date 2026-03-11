import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found – QuitCode',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', padding: '4rem 1rem', textAlign: 'center' }}>
      <p style={{ fontSize: '5rem', fontWeight: 800, color: '#4300b7', margin: 0, lineHeight: 1 }}>404</p>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', margin: 0 }}>Page not found</h1>
      <p style={{ color: '#6b7280', maxWidth: '400px', margin: 0 }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" style={{ padding: '0.65rem 1.5rem', background: '#4300b7', color: '#fff', borderRadius: '10px', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>
          Go home
        </Link>
        <Link href="/case-studies" style={{ padding: '0.65rem 1.5rem', border: '1.5px solid #e5e7eb', color: '#374151', borderRadius: '10px', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>
          Case studies
        </Link>
        <Link href="/company/careers" style={{ padding: '0.65rem 1.5rem', border: '1.5px solid #e5e7eb', color: '#374151', borderRadius: '10px', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>
          Careers
        </Link>
      </div>
    </div>
  );
}

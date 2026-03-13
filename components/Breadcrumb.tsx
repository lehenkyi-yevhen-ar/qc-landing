import Link from 'next/link';

type Crumb = { label: string; href: string; inactive?: boolean };

export function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '64px',
        fontSize: '16px',
        color: '#6b7280',
      }}
    >
      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={crumb.href + i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            {i > 0 && <span aria-hidden>/</span>}
            {isLast ? (
              <a
                href={crumb.href}
                style={{ color: '#3985F8', textDecoration: 'underline', fontWeight: 500 }}
              >
                {crumb.label}
              </a>
            ) : crumb.inactive ? (
              <span style={{ color: '#6b7280' }}>{crumb.label}</span>
            ) : (
              <Link href={crumb.href} style={{ color: '#6b7280' }}>
                {crumb.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

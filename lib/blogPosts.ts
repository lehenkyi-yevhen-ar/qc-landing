export type BlogPost = {
  slug: string;
  category: string;
  date: string; // DD/MM/YYYY
  title: string;
  image?: string;
  href: string;
};

function parseDate(d: string): number {
  const [day, month, year] = d.split('/').map(Number);
  return new Date(year, month - 1, day).getTime();
}

const ALL_POSTS: BlogPost[] = [
  {
    slug: 'contract-automation-by-airtable-docusign-integration',
    category: 'Integrations',
    date: '20/12/2024',
    title: 'Contract Automation by Airtable Docusign Integration',
    image: '/blog/contract-automation-og.webp',
    href: '/blog/contract-automation-by-airtable-docusign-integration',
  },
  {
    slug: 'employee-birthday-reminder',
    category: 'Integrations',
    date: '11/04/2025',
    title: 'Employee Birthday reminder',
    image: '/blog/employee-birthday-og.webp',
    href: '/blog/employee-birthday-reminder',
  },
  {
    slug: 'how-to-integrate-stripe-to-airtable-and-send-invoices-with-1-click',
    category: 'Integrations',
    date: '11/04/2025',
    title: 'How to integrate Stripe to Airtable and send invoices with 1 click?',
    image: '/blog/how-to-integrate-stripe-og.webp',
    href: '/blog/how-to-integrate-stripe-to-airtable-and-send-invoices-with-1-click',
  },
  {
    slug: 'automated-company-data-search-powered-by-openai-assistant',
    category: 'Integrations',
    date: '20/12/2024',
    title: 'Automated company data search powered by OpenAI Assistant',
    image: '/blog/automated-company-data-search-og.webp',
    href: '/blog/automated-company-data-search-powered-by-openai-assistant',
  },
  {
    slug: 'airtable-docusign-document-workflow-automation',
    category: 'Integrations',
    date: '03/12/2024',
    title: 'Document Workflow Automation Powered by Airtable & Docusign',
    image: '/blog/document-wotfklow-automation-og.webp',
    href: '/blog/airtable-docusign-document-workflow-automation',
  },
];

export const BLOG_POSTS: BlogPost[] = [...ALL_POSTS].sort(
  (a, b) => parseDate(b.date) - parseDate(a.date)
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug);
}

export type BlogPost = {
  slug: string;
  category: string;
  date: string;
  title: string;
  image?: string;
  href: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'contract-automation-airtable-docusign',
    category: 'Integrations',
    date: '12/02/2026',
    title: 'Contract Automation by Airtable Docusign Integration',
    image: '/blog/workflow-automation.png',
    href: '/blog/contract-automation-airtable-docusign',
  },
  {
    slug: 'automated-company-data-search-openai',
    category: 'Integrations',
    date: '12/02/2026',
    title: 'Automated company data search powered by OpenAI Assistant',
    href: '/blog/automated-company-data-search-openai',
  },
  {
    slug: 'employee-birthday-reminder',
    category: 'Integrations',
    date: '12/02/2026',
    title: 'Employee Birthday reminder',
    href: '/blog/employee-birthday-reminder',
  },
  {
    slug: 'stripe-airtable-invoices',
    category: 'Integrations',
    date: '12/02/2026',
    title: 'How to integrate Stripe to Airtable and send invoices with 1 click?',
    href: '/blog/stripe-airtable-invoices',
  },
  {
    slug: 'document-workflow-airtable-docusign',
    category: 'Integrations',
    date: '12/02/2026',
    title: 'Document Workflow Automation Powered by Airtable & Docusign',
    href: '/blog/document-workflow-airtable-docusign',
  },
  {
    slug: 'airtable-make-crm-automation',
    category: 'Integrations',
    date: '12/02/2026',
    title: 'Building a CRM Automation Pipeline with Airtable and Make',
    href: '/blog/airtable-make-crm-automation',
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug);
}

export type StackItem = { name: string; logo: string };
export type ProgressRow = { before: string; after: string };
export type ImpactStat = { value: string; label: string; style: 'number' | 'gradient' };
export type SolutionFeature = { title: string; description: string };

export type CaseStudy = {
  slug: string;
  // Listing card
  industryLabel: string;
  title: string;
  challenge: string;
  solution: string;
  description: string;
  cardImage: string;
  location: string;
  // Detail hero
  titleGradient: string;
  titlePlain: string;
  subtitle: string;
  heroImage: string;
  industry: string;
  process: string;
  stack: StackItem[];
  // Project snapshot
  snapshot: { client: string; challenge: string; solution: string; outcome: string };
  // Sections
  clientContext: string[];
  startingPoint: { intro: string; items: string[] };
  catalystForChange: { subtitle: string; items: string[]; closing: string };
  goalsConstraints: { subtitle: string; items: string[]; closing: string };
  solutionDesign: { intro: string[]; features: SolutionFeature[]; emphasis: string; images: string[] };
  implementation: { intro: string; steps: string[]; closing: string };
  progress: { intro: string; rows: ProgressRow[] };
  measuredImpact: { intro: string; stats: ImpactStat[] };
  summary: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'payroll-private-school',
    industryLabel: 'Education',
    title: 'Automating Annual Payroll for a 200-Person Private School',
    challenge: 'Manual workflows, scattered data, and a once-a-year payroll process that took months of accountant time.',
    solution: 'We built a centralized payroll system using Airtable, Softr, Make, and Zapier - replacing spreadsheets with automated validation and calculations.',
    description: 'From three months of manual work to a structured, repeatable system the school can run every year - without spreadsheets, emails, or errors.',
    cardImage: '/case-studies/getting-business-finances-in-order.png',
    location: 'USA, New York City',
    titleGradient: 'Automating Annual Payroll',
    titlePlain: 'for a 200-Person Private School',
    subtitle: 'From three months of manual work to a structured, repeatable system the school can run every year - without spreadsheets, emails, or errors.',
    heroImage: '/case-studies/case-1-hero.png',
    industry: 'Private education',
    process: 'Annual payroll',
    stack: [
      { name: 'Softr', logo: '/technologies/logo-softr.png' },
      { name: 'Make', logo: '/technologies/logo-make.png' },
      { name: 'Zapier', logo: '/technologies/logo-zapier.png' },
    ],
    snapshot: {
      client: 'Large private school with complex payroll rules',
      challenge: 'Fully manual annual payroll calculation',
      solution: 'Centralized data system with automated validation and calculations',
      outcome: 'Payroll prepared faster, with full transparency and minimal manual effort',
    },
    clientContext: [
      'The client is a private school with around 200 employees, including full-time teachers, part-time instructors, and staff with different compensation rules.',
      'Payroll calculations depended on multiple variables - class types, workloads, individual conditions, and internal policies. Once a year, all this data had to be collected, verified, calculated, and approved manually.',
      'As the school grew, this process became increasingly fragile, slow, and risky.',
    ],
    startingPoint: {
      intro: 'Before automation, the entire payroll process was spreadsheet-driven and handled manually by the internal accounting team.\n\nThe process included:',
      items: [
        'Collecting payroll data via emails and individual Excel files',
        'Manually validating each employee\'s workload and conditions',
        'Entering calculations by hand into large spreadsheets',
        'Re-sending files for review and approval across multiple channels',
      ],
    },
    catalystForChange: {
      subtitle: 'The school needed a way to:',
      items: [
        'Reduce the time and stress around annual payroll',
        'Eliminate human error from calculations',
        'Make the process transparent for both administrators and staff',
      ],
      closing: 'What started as an operational inconvenience had become a bottleneck affecting trust, planning, and internal workload.',
    },
    goalsConstraints: {
      subtitle: 'The system had to:',
      items: [
        'Be usable by non-technical staff',
        'Centralize all payroll data in one place',
        'Validate inputs before calculations',
        'Generate clear outputs for accounting review',
        'Support the unique rules of different employee types',
        'Be repeatable every year with minimal setup',
      ],
      closing: 'What started as an operational inconvenience had become a bottleneck affecting trust, planning, and internal workload.',
    },
    solutionDesign: {
      intro: [
        'We designed a centralized payroll system built around Airtable and automation workflows.',
        'The solution included:',
      ],
      features: [
        { title: 'Structured data collection', description: 'via custom forms' },
        { title: 'A unified database', description: 'for all employees and payroll variables' },
        { title: 'Automated validation rules', description: 'to catch errors at input stage' },
        { title: 'Calculation logic', description: 'applied consistently across all records' },
        { title: 'Dashboards', description: 'for real-time progress tracking' },
      ],
      emphasis: 'All data lived in one system - no duplicate files, no manual copying, no hidden versions.',
      images: [
        '/case-studies/case-1-hero.png',
        '/case-studies/case-1-images-1.png',
        '/case-studies/case-1-images-2.png',
        '/case-studies/case-1-images-3.png',
      ],
    },
    implementation: {
      intro: 'Before automation, the entire payroll process was spreadsheet-driven and handled manually by the internal accounting team.\n\nThe process included:',
      steps: [
        'Process mapping and rule clarification',
        'Small pilot automation to test collaboration and tools',
        'Full data migration and employee record setup',
        'Validation layer and automated calculation rollout',
        'Training, documentation, and first live payroll run',
      ],
      closing: 'This phased approach reduced risk and ensured the system was trusted before full rollout.',
    },
    progress: {
      intro: 'Before automation, the entire payroll process was spreadsheet-driven and handled manually by the internal accounting team.',
      rows: [
        { before: 'Manual spreadsheets', after: 'Centralized system' },
        { before: 'Scattered data across emails', after: 'Real-time data analysis' },
        { before: 'No collaboration tools', after: 'Team communication platform' },
        { before: 'No visibility into calculations', after: 'Interactive dashboards' },
        { before: 'Files sent via email', after: 'Secure file sharing' },
      ],
    },
    measuredImpact: {
      intro: 'At Quitcode, we prioritize post-launch education. We immerse our clients in the full spectrum of their new software stack\'s capabilities, teaching them tips and tricks for handling challenging tasks without breaking a sweat.',
      stats: [
        { value: '~80%', label: 'Payroll preparation time reduced by', style: 'number' },
        { value: '~60%', label: 'Manual accounting effort reduced', style: 'number' },
        { value: 'Input errors virtually eliminated', label: '', style: 'gradient' },
        { value: 'Full transparency for administrators and staff', label: '', style: 'gradient' },
        { value: 'A reusable system for future payroll cycles', label: '', style: 'gradient' },
      ],
    },
    summary: [
      'This project transformed a high-risk, once-a-year manual process into a reliable operational system.',
      'The school now runs payroll with confidence, clarity, and far less internal effort - without adding complexity for the team.',
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find(cs => cs.slug === slug);
}

export type Job = {
  slug: string;
  title: string;
  location: string;
  type: string;
  level: string;
  featured: boolean;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
};

export const JOBS: Job[] = [
  {
    slug: 'project-manager',
    title: 'Project Manager',
    location: 'Lviv',
    type: 'Full time',
    level: 'Trainee / Junior / Middle',
    featured: true,
    about:
      'You will be the bridge between our clients and the delivery team, ensuring projects run smoothly and on time. You\'ll manage timelines, communicate progress, and keep everyone aligned.',
    responsibilities: [
      'Manage project timelines, tasks, and deliverables',
      'Communicate with clients and internal teams daily',
      'Track project scope and flag risks early',
      'Write clear briefs, reports, and documentation',
      'Continuously improve team workflows and processes',
    ],
    requirements: [
      'Ability to work full-time from our office in Lviv',
      'English level: Intermediate / B2 or higher',
      'Responsibility, independence, and clear communication',
      'Willingness to learn and grow',
      'Strong organizational and prioritization skills',
      'Attention to detail and ownership mindset',
    ],
    niceToHave: [
      'Experience in project management tools (Notion, Asana, Jira)',
      'Background in tech, design, or agency environment',
    ],
    benefits: [
      'Paid probation period - 2 months',
      'Competitive salary + bonus system',
      'Professional growth and learning support',
      'Corporate English lessons',
      'Compensation for external training and certifications',
      'Friendly, focused team environment',
      '18 paid vacation days + 15 paid sick leaves per year',
      'Regular team buildings and company events',
    ],
  },
  {
    slug: 'no-code-developer',
    title: 'No-code Developer',
    location: 'Lviv',
    type: 'Full time',
    level: 'Trainee / Junior / Middle',
    featured: false,
    about:
      'This role is a great entry point into the world of no-code development. You\'ll learn how to build automation systems, work with databases, APIs, and business logic - and gradually move into real client projects with mentor support.',
    responsibilities: [
      'Learn and work with no-code platforms (Airtable, Make, Zapier)',
      'Build and maintain automations and databases',
      'Work with APIs (Postman, Webhooks)',
      'Create technical documentation',
      'Continuously learn and improve technical skills',
    ],
    requirements: [
      'Ability to work full-time from our office in Lviv',
      'English level: Intermediate / B2 or higher',
      'Responsibility, independence, and clear communication',
      'Willingness to learn and grow',
      'Technical education or strong technical background',
      'Basic understanding of JavaScript, HTML, CSS',
      'Experience with APIs (Postman, Webhooks)',
    ],
    niceToHave: [
      'Completed relevant courses or certifications',
      'Experience working with international clients',
    ],
    benefits: [
      'Paid probation period - 2 months',
      'Competitive salary + bonus system',
      'Professional growth and learning support',
      'Corporate English lessons',
      'Compensation for external training and certifications',
      'Friendly, focused team environment',
      '18 paid vacation days + 15 paid sick leaves per year',
      'Regular team buildings and company events',
    ],
  },
];

export function getJob(slug: string): Job | undefined {
  return JOBS.find(j => j.slug === slug);
}

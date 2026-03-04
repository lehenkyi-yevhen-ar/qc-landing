export type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  context: string;
};

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      'Our onboarding used to take a week. Now it\'s less than a day. The system QuitCode built saves us at least 25 hours a month.',
    name: 'Head of Operations',
    role: 'Private School',
    context: 'Verified client'
  },
  {
    id: 2,
    quote:
      'We finally have one source of truth for projects, tasks, and client communication. My team knows exactly what to do every day.',
    name: 'Agency Founder',
    role: 'Creative Agency',
    context: 'Operations transformation'
  },
  {
    id: 3,
    quote:
      'From proposals to reporting, everything is smoother. Our clients feel the difference—and so does our team.',
    name: 'Managing Partner',
    role: 'Consulting Firm',
    context: 'No-code automation roll-out'
  }
];

export const FORM_DEFAULT = {
  name: '',
  email: '',
  company: '',
  industry: '',
  challenge: '',
  interests: [] as string[]
};

export const interestOptions = [
  'Project Management Tools',
  'Task Scheduling',
  'Team Collaboration',
  'Progress Tracking',
  'Resource Allocation'
];

export const industryOptions = ['Consulting', 'Creative', 'Education', 'Other'];

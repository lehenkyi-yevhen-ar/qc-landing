export type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  context: string;
  videoId: string;
};

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      'These guys are an absolute pleasure to work with—fast, responsive, and incredibly easy to communicate with. Most importantly, the results are outstanding. They truly take the time to customize everything to your specific needs. If I could give more than five stars, I would. Highly recommended, and I will definitely be coming back again!',
    name: 'Nis Lehmann-Matthaei',
    role: 'The Incredible Company GmbH',
    context: 'Verified client',
    videoId: 'KbwUe4Poah0',
  },
  {
    id: 2,
    quote:
      'QuitCode did an excellent job building our interactive portfolio projection tool in Bubble. The project involved translating fairly complex financial models and formulas into a fully functional Bubble application, while also ensuring the UI matched our Adobe XD designs pixel-perfectly. Overall, a very strong Bubble development agency who can bridge the gap between complex logic and polished front-end execution. I look forward to working with them again on future projects.',
    name: 'Tim Harrison',
    role: 'Unity Property',
    context: 'Verified client',
    videoId: 'qqRpIoO-6VY',
  },
  {
    id: 3,
    quote:
      'We have a unique organization with a lot of information flows required amongst a hundred entities. We are now accurate in our communications with the various participants with much less time needed by management. The QuitCode team had the technical and listening skills to move us into another realm and for a quite reasonable price. They were very transparent in billing and we felt they were modest in their hourly requirements.',
    name: 'Nancy Janin',
    role: 'Regent\'s Park Music Festival',
    context: 'Verified client',
    videoId: 'oPGhtNe3pJs',
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

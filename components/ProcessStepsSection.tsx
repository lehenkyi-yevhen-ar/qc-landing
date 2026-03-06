'use client';

import { useState, useRef, useEffect } from 'react';

type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: (color: string) => React.ReactNode;
};

const cwaSteps: ProcessStep[] = [
  {
    step: '1ST STEP',
    title: 'Discovery &\nAnalysis',
    description:
      'We design the automated workflow structure, select optimal no-code platforms, and create a detailed implementation plan with timeline and milestones.',
    icon: (color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    step: '2ND STEP',
    title: 'Solution\nArchitecture',
    description:
      'We analyze your current workflows, identify automation opportunities, and map out existing tool integrations to create an optimization roadmap.',
    icon: (color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    step: '3RD STEP',
    title: 'Build &\nIntegration',
    description:
      'We configure the automation system, connect all necessary tools and platforms, and set up custom workflows tailored to your specific business processes.',
    icon: (color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
      </svg>
    ),
  },
  {
    step: '4TH STEP',
    title: 'Testing &\nOptimization',
    description:
      'We thoroughly test all automated workflows, fine-tune performance, and ensure seamless integration with your existing systems.',
    icon: (color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" /><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" /><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" /><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
      </svg>
    ),
  },
  {
    step: '5TH STEP',
    title: 'Training &\nHandover',
    description:
      'We provide comprehensive team training, deliver all documentation, and ensure smooth transition to the new automated processes.',
    icon: (color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    step: '6TH STEP',
    title: 'Maintenance &\nSupport',
    description:
      'We provide ongoing system maintenance, monitor performance, troubleshoot issues, and ensure your automated workflows continue running smoothly as your business evolves.',
    icon: (color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const dioSteps: ProcessStep[] = [
  {
    step: '1ST STEP',
    title: 'Data Audit &\nMapping',
    description:
      'We analyze your existing data sources, assess data quality, and map current data flows to identify integration opportunities and optimization points.',
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    step: '2ND STEP',
    title: 'Architecture\nDesign',
    description:
      'We design the unified data infrastructure, select optimal integration tools, and create a detailed roadmap for connecting all systems and data sources.',
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    step: '3RD STEP',
    title: 'Integration &\nPipeline Build',
    description:
      'We implement data connections, build streaming pipelines, and configure automated data processing workflows with real-time synchronization.',
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M13 6h3a2 2 0 0 1 2 2v7" /><line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
  },
  {
    step: '4TH STEP',
    title: 'Dashboard &\nAnalytics Setup',
    description:
      'We create custom analytics dashboards, implement reporting automation, and establish monitoring for data quality and system performance.',
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    step: 'FINAL',
    title: 'Training &\nOptimization',
    description:
      'We provide team training on new analytics capabilities, deliver comprehensive documentation, and fine-tune the system for optimal performance.',
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const webappSteps: ProcessStep[] = [
  {
    step: '1ST STEP',
    title: 'Requirements\n& Planning',
    description:
      'We analyse your business needs, define functionality requirements, and create a detailed project scope with wireframes and user journey mapping.',
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    step: '2ND STEP',
    title: 'Design &\nArchitecture',
    description:
      'We design the user interface, plan database structure, and create the technical architecture for optimal performance and scalability.',
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    step: '3RD STEP',
    title: 'Development &\nIntegration',
    description:
      'We build the web application on Bubble.com platform, implement all features, and integrate with your existing tools and systems.',
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /><polyline points="7 8 10 11 7 14" /><line x1="13" y1="14" x2="17" y2="14" />
      </svg>
    ),
  },
  {
    step: '4TH STEP',
    title: 'Testing &\nQA',
    description:
      'We conduct thorough testing across all features and devices, fix issues, and validate the application meets all business requirements before launch.',
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    step: '5TH STEP',
    title: 'Launch &\nTraining',
    description:
      'We deploy the application, provide comprehensive training for admins and end users, and ensure smooth transition to the new system.',
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    step: 'FINAL',
    title: 'Scaling\nUp',
    description:
      'As your business grows and user base expands, we enhance the application with new features, integrations, and optimizations to support your evolving needs.',
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /><path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
  },
];

const dsSteps: ProcessStep[] = [
  {
    step: '1ST STEP',
    title: 'Client Discovery\n& Goal Setting',
    description:
      'We research your business context, conduct stakeholder interviews to understand high-level goals and map out your business landscape.',
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    step: '2ND STEP',
    title: 'Problem\nResearch',
    description:
      'We conduct comprehensive analysis of your business challenge, validate the problem scope, and ensure we\'re solving the right issue.',
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    step: '3RD STEP',
    title: 'Product Backlog\nCreation',
    description:
      'We define and prioritize features, create detailed user stories, and develop a structured backlog for your future product development.',
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
  {
    step: '4TH STEP',
    title: 'Technical Feasibility\nConfirmation',
    description:
      'We validate that your product/idea is technically possible to develop, assess implementation complexity, and confirm viability.',
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    step: 'FINAL',
    title: 'Solution Architecture\n& Presentation',
    description:
      'We design the solution approach, present comprehensive findings with roadmap, and provide detailed implementation recommendations.',
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

const allSteps: Record<string, ProcessStep[]> = { cwa: cwaSteps, dio: dioSteps, webapp: webappSteps, ds: dsSteps };

export function ProcessStepsSection({ variant = 'cwa' }: { variant?: string }) {
  const data = allSteps[variant] ?? cwaSteps;
  const [activeUpTo, setActiveUpTo] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const intersecting = useRef<Set<number>>(new Set([0]));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            intersecting.current.add(index);
          } else {
            intersecting.current.delete(index);
          }
          const max = intersecting.current.size > 0
            ? Math.max(...intersecting.current)
            : 0;
          setActiveUpTo(max);
        },
        { rootMargin: '-30% 0px -30% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #eef2ff 0%, #f5f0ff 100%)',
        borderRadius: '24px',
        padding: '2rem 2.5rem',
      }}
    >
      {data.map((step, index) => {
        const active = index <= activeUpTo;
        const nextActive = index + 1 <= activeUpTo;
        const iconColor = active ? '#3985F8' : '#9ca3af';

        let lineBackground = '#d1d5db';
        if (active && nextActive) lineBackground = '#3985F8';
        else if (active && !nextActive) lineBackground = 'linear-gradient(180deg, #3985F8 0%, #d1d5db 100%)';

        return (
          <div
            key={step.step}
            ref={el => { stepRefs.current[index] = el; }}
            className="pss-step-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '260px 60px 1fr',
              minHeight: index < data.length - 1 ? 150 : 110,
              position: 'relative',
            }}
          >
            {/* Left: step card */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '3rem 1.4rem',
                margin: '0.5rem 0',
                alignSelf: 'start',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              }}
            >
              <div
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: active ? '#3985F8' : '#9ca3af',
                  marginBottom: '0.4rem',
                }}
              >
                {step.step}
              </div>
              <div
                style={{
                  fontSize: active ? '1.55rem' : '1.3rem',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  whiteSpace: 'pre-line',
                  background: active ? 'linear-gradient(135deg, #3985F8, #09C0FF)' : 'none',
                  WebkitBackgroundClip: active ? 'text' : 'unset',
                  color: active ? 'transparent' : '#111827',
                  transition: 'all 0.4s ease',
                }}
              >
                {step.title}
              </div>
            </div>

            {/* Center: dot + line */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '2rem',
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: active ? '#3985F8' : '#d1d5db',
                  flexShrink: 0,
                  zIndex: 1,
                  boxShadow: active ? '0 0 0 5px rgba(57,133,248,0.18)' : 'none',
                  transition: 'all 0.4s ease',
                }}
              />
              {index < data.length - 1 && (
                <div
                  style={{
                    width: 2,
                    flex: 1,
                    marginTop: 4,
                    background: lineBackground,
                    transition: 'background 0.4s ease',
                  }}
                />
              )}
            </div>

            {/* Right: icon + description */}
            <div style={{ paddingTop: '1.6rem', paddingLeft: '0.25rem' }}>
              <div style={{ marginBottom: '0.5rem', lineHeight: 1, transition: 'all 0.4s ease' }}>
                {step.icon(iconColor)}
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  lineHeight: 1.65,
                  maxWidth: 480,
                }}
              >
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

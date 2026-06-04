import type { IExperience } from '../types';

export const EXPERIENCE: IExperience[] = [
  {
    company: 'Aveosoft',
    role: 'Software Developer',
    period: 'Aug 2024 – Apr 2026',
    color: '#38BDF8',
    points: [
      'Architected role-based enterprise CRM supporting 8+ user roles with robust RBAC system',
      'Built 5 reusable frameworks: Modal Service, Smart Tooltip, Table, Theme & Layout',
      'Developed Dynamic Form Generator, Agreement & Contract Generator via schema-driven architecture',
      'Implemented scheduling, drag-and-drop, media management, Google OAuth & email auth',
      'Established Jest & React Testing Library coverage; deployed via GitLab CI/CD on GCP & Vercel',
    ],
  },
  {
    company: 'VasyERP',
    role: 'Software Developer',
    period: 'Jun 2022 – Aug 2024',
    color: '#6366F1',
    points: [
      'Led full ERP platform migration from legacy JSP to React.js across 4 product lines',
      'Owned complete Nx Monorepo migration — architecting NX Workspace, shared libraries & module boundaries',
      'Implemented Micro Frontend architecture enabling parallel team development & independent releases',
      'Built B2B eCommerce platform and ticketing/workflow management systems',
      'Containerized apps with Docker; managed GitLab CI/CD pipelines & GCP cloud deployments',
      'Optimized rendering for 1,000–2,000+ record datasets using TanStack Query caching & virtualization',
    ],
  },
  {
    company: 'Script All DNA Technologies',
    role: 'Web Designer',
    period: 'Oct 2021 – Jun 2022',
    color: '#10B981',
    points: [
      'Built responsive websites & landing pages improving mobile traffic, engagement & conversion rates',
      'Collaborated directly with clients for requirements, prototyping and delivery feedback loops',
    ],
  },
];

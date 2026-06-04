import { EProjectType } from '../types/index';
import type { IProject } from '../types/index';

export const PROJECTS: IProject[] = [
  {
    title: 'GlowAssist AI CRM',
    description:
      'AI-powered CRM platform for Med Spa & Beauty clinics. Features an AI Chat Receptionist, appointment booking, client management, lead tracking, and Packages & Membership modules — built end-to-end as a scalable personal product.',
    tags: ['React.js', 'TypeScript', 'Supabase', 'Redux Toolkit', 'React Hook Form', 'Zod'],
    type: EProjectType.LIVE,
    link: 'https://fe.zenithflow.in',
    highlights: ['AI Chat Receptionist', 'Appointment Booking', 'Lead Tracking', 'Packages & Memberships'],
  },
  {
    title: 'AI WhatsApp Automation Platform',
    description:
      'End-to-end AI automation platform where agents handle appointment scheduling, lead nurturing, follow-ups, and CRM data sync via WhatsApp — zero manual intervention using n8n workflow orchestration.',
    tags: ['n8n', 'AI Automation', 'WhatsApp API', 'CRM Integration', 'Pipeline Automation'],
    type: EProjectType.DEMO,
    highlights: ['AI Agent Workflows', 'WhatsApp Automation', 'CRM Pipeline Sync', 'Appointment Booking'],
  },
  {
    title: 'Enterprise ERP Suite',
    description:
      'Full platform migration from legacy JSP to React.js, delivering ERP, POS, CRM, and Omnichannel B2B eCommerce on a unified modern stack. Architected with Nx Monorepo and Micro Frontends across independent portals.',
    tags: ['React.js', 'Nx Monorepo', 'Micro Frontends', 'Docker', 'GitLab CI/CD', 'GCP'],
    type: EProjectType.DEMO,
    highlights: ['JSP → React Migration', 'Nx Monorepo', 'Micro Frontends', 'Multi-Portal'],
  },
  {
    title: 'Dynamic Form Generator SDK',
    description:
      'Schema-driven form engine powering onboarding flows, agreement generation, and contract management — no code changes needed per business requirement. Runtime configurable with Zod validation.',
    tags: ['React.js', 'TypeScript', 'Zod', 'React Hook Form', 'Schema-Driven Dev'],
    type: EProjectType.DEMO,
    highlights: ['Schema-Driven Forms', 'Agreement Generator', 'Contract Generator', 'No-code Updates'],
  },
  {
    title: 'Multi-Role Enterprise CRM',
    description:
      'CRM platform supporting 8+ user roles with RBAC, scheduling systems, drag-and-drop interfaces, media management, and a full reusable framework suite: Modal Service, Smart Tooltip, Table, Theme & Layout.',
    tags: ['React.js', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'RBAC', 'Material UI'],
    type: EProjectType.DEMO,
    highlights: ['8+ User Roles', 'RBAC System', 'Reusable Frameworks', 'Drag & Drop'],
  },
  {
    title: 'B2B eCommerce Platform',
    description:
      'Full B2B eCommerce with product catalogues, bulk ordering, client-specific pricing, and order management — fully integrated with ERP backend via REST APIs and built inside the Nx Monorepo.',
    tags: ['React.js', 'TypeScript', 'REST APIs', 'Redux Toolkit', 'Vite', 'Nx Monorepo'],
    type: EProjectType.DEMO,
    highlights: ['Bulk Ordering', 'Client Pricing', 'ERP Integration', 'Order Mgmt'],
  },
];

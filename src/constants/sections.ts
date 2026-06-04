import { ESection } from '../types';
import type { INavLink, IStat } from '../types';

export const NAV_LINKS: INavLink[] = [
  { label: 'About', id: ESection.ABOUT },
  { label: 'Skills', id: ESection.SKILLS },
  { label: 'Projects', id: ESection.PROJECTS },
  { label: 'Experience', id: ESection.EXPERIENCE },
  { label: 'Contact', id: ESection.CONTACT },
];

export const HERO_STATS: IStat[] = [
  { value: '4+', label: 'Years Experience' },
  { value: '3+', label: 'Enterprise Platforms' },
  { value: '8+', label: 'Reusable Frameworks Built' },
  { value: '2k+', label: 'Records Optimized' },
];

export const HERO_ROLES: string[] = [
  'Software Developer',
  'Frontend Architect',
  'React.js Expert',
  'Enterprise Systems',
];

export const ARCHITECTURE_DEPTH_TAGS: string[] = [
  'Nx Monorepo',
  'Micro Frontends',
  'Schema-Driven Dev',
  'RBAC',
  'Design Systems',
  'CI/CD Pipelines',
  'Multi-Portal Architecture',
  'n8n Automation',
  'Docker Containerization',
];

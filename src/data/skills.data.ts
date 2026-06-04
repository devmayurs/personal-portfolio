import type { ISkill } from '../types';

export const SKILLS: ISkill[] = [
  {
    category: 'Frontend Core',
    icon: '⬡',
    items: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Material UI', 'Vite'],
  },
  {
    category: 'Architecture',
    icon: '◈',
    items: [
      'Nx Monorepo',
      'Micro Frontends',
      'Shared Libraries',
      'Design Systems',
      'Feature-Based Architecture',
      'Modular Architecture',
      'Multi-Portal Systems',
    ],
  },
  {
    category: 'State & Data',
    icon: '◎',
    items: ['Redux Toolkit', 'Redux', 'Context API', 'TanStack Query', 'React Query', 'Axios', 'REST APIs', 'GraphQL (Basic)'],
  },
  {
    category: 'Forms & Schema',
    icon: '◻',
    items: ['React Hook Form', 'Formik', 'Zod', 'Schema-Driven Development', 'Dynamic Form Generator', 'Agreement Generator'],
  },
  {
    category: 'Testing',
    icon: '◈',
    items: ['Jest', 'React Testing Library', 'Unit Testing', 'Integration Testing'],
  },
  {
    category: 'DevOps & Cloud',
    icon: '⬡',
    items: ['Docker', 'GitLab CI/CD', 'GitHub', 'Git', 'Google Cloud Platform (GCP)', 'Vercel', 'Render', 'Supabase', 'Hostinger'],
  },
  {
    category: 'Backend & DB',
    icon: '◎',
    items: ['Supabase', 'PostgreSQL (Basic)', 'SQL (Basic)', 'REST API Design', 'Google OAuth', 'Email Auth'],
  },
  {
    category: 'Automation & AI',
    icon: '◈',
    items: ['n8n Workflow Automation', 'AI Integration', 'WhatsApp API', 'CRM Pipeline Automation', 'Cursor AI', 'Claude AI'],
  },
  {
    category: 'Other',
    icon: '◻',
    items: ['Python (Basic)', 'Jira', 'Agile / Scrum', 'Code Reviews', 'Technical Documentation'],
  },
];

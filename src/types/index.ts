// ─── ENUMS ───────────────────────────────────────────────────────────────────

export enum ESection {
  ABOUT = 'about',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  EXPERIENCE = 'experience',
  CONTACT = 'contact',
}

export enum EThemeMode {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum EProjectType {
  LIVE = 'live',
  DEMO = 'demo',
}

// ─── INTERFACES ──────────────────────────────────────────────────────────────

export interface IProject {
  title: string;
  description: string;
  tags: string[];
  type: EProjectType;
  link?: string;
  highlights: string[];
}

export interface ISkill {
  category: string;
  icon: string;
  items: string[];
}

export interface IExperience {
  company: string;
  role: string;
  period: string;
  color: string;
  points: string[];
}

export interface IContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
  isExternal?: boolean;
}

export interface INavLink {
  label: string;
  id: ESection;
}

export interface IStat {
  value: string;
  label: string;
}

import type { IProject, ISkill, IExperience } from '../types';
import { PROJECTS } from '../data/projects.data';
import { SKILLS } from '../data/skills.data';
import { EXPERIENCE } from '../data/experience.data';

const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

const getProjects = async (): Promise<IProject[]> => {
  await delay(0);
  return PROJECTS;
};

const getSkills = async (): Promise<ISkill[]> => {
  await delay(0);
  return SKILLS;
};

const getExperience = async (): Promise<IExperience[]> => {
  await delay(0);
  return EXPERIENCE;
};

export const portfolioService = {
  getProjects,
  getSkills,
  getExperience,
};

import { useQuery } from '@tanstack/react-query';
import { portfolioService } from '../services/portfolio.service';

const QUERY_KEYS = {
  PROJECTS: ['projects'] as const,
  SKILLS: ['skills'] as const,
  EXPERIENCE: ['experience'] as const,
};

export const useProjects = () =>
  useQuery({
    queryKey: QUERY_KEYS.PROJECTS,
    queryFn: portfolioService.getProjects,
    staleTime: Infinity,
  });

export const useSkills = () =>
  useQuery({
    queryKey: QUERY_KEYS.SKILLS,
    queryFn: portfolioService.getSkills,
    staleTime: Infinity,
  });

export const useExperience = () =>
  useQuery({
    queryKey: QUERY_KEYS.EXPERIENCE,
    queryFn: portfolioService.getExperience,
    staleTime: Infinity,
  });

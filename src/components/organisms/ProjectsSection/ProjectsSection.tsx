import React from 'react';
import { Box, Container } from '@mui/material';
import SectionLabel from '../../atoms/SectionLabel/SectionLabel';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';
import { useProjects } from '../../../hooks/usePortfolioData';
import { ESection } from '../../../types';
import './ProjectsSection.style.css';

const ProjectsSection: React.FC = () => {
  const { data: projects = [] } = useProjects();

  return (
    <Box
      component="section"
      id={ESection.PROJECTS}
      className="projects-section"
      aria-label="Projects"
    >
      <Container maxWidth="xl">
        <SectionLabel>Projects</SectionLabel>
        <Box className="projects-section__grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;

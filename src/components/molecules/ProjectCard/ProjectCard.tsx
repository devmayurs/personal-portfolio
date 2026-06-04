import React, { useState } from 'react';
import { Card, CardContent, Box, Typography, Stack } from '@mui/material';
import TechChip from '../../atoms/TechChip/TechChip';
import type { IProject } from '../../../types';
import { EProjectType } from '../../../types';
import './ProjectCard.style.css';

interface IProjectCardProps {
  project: IProject;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const isLive = project.type === EProjectType.LIVE;

  return (
    <Card
      className={`project-card ${hovered ? 'project-card--hovered' : ''}`}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <CardContent className="project-card__content">
        <Box className="project-card__header">
          <Typography variant="h3" className="project-card__title">
            {project.title}
          </Typography>
          <Box className={`project-card__badge project-card__badge--${isLive ? 'live' : 'demo'}`}>
            {isLive ? 'LIVE' : 'PROJECT'}
          </Box>
        </Box>

        <Typography variant="body2" className="project-card__description">
          {project.description}
        </Typography>

        <Stack sx={{ direction: 'row', flexWrap: 'wrap', gap: '6px' }}>
          {project.highlights.map((highlight) => (
            <TechChip key={highlight} label={highlight} variant="primary" />
          ))}
        </Stack>

        <Stack className="project-card__tags" sx={{ direction: 'row', flexWrap: 'wrap', gap: '6px' }}>
          {project.tags.map((tag) => (
            <TechChip key={tag} label={tag} variant="mono" />
          ))}
        </Stack>

        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className="project-card__link">
            View Live ↗
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

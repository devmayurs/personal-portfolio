import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import type { IExperience } from '../../../types';
import './ExperienceItem.style.css';

interface IExperienceItemProps {
  experience: IExperience;
  isLast: boolean;
}

const ExperienceItem: React.FC<IExperienceItemProps> = ({ experience, isLast }) => {
  return (
    <Box className="exp-item">
      {/* Timeline dot + line */}
      <Box className="exp-item__timeline">
        <Box
          className="exp-item__dot"
          style={{
            background: experience.color,
            boxShadow: `0 0 14px ${experience.color}88`,
          }}
        />
        {!isLast && (
          <Box
            className="exp-item__line"
            style={{ background: `linear-gradient(${experience.color}55, transparent)` }}
          />
        )}
      </Box>

      {/* Content */}
      <Box className={`exp-item__body ${isLast ? '' : 'exp-item__body--spaced'}`}>
        <Stack direction="row" flexWrap="wrap" gap="0.5rem 1rem" alignItems="baseline" className="exp-item__meta">
          <Typography variant="h3" className="exp-item__company">
            {experience.company}
          </Typography>
          <Typography
            component="span"
            className="exp-item__role"
            style={{ color: experience.color }}
          >
            · {experience.role}
          </Typography>
          <Typography variant="caption" className="exp-item__period">
            {experience.period}
          </Typography>
        </Stack>

        <Box component="ul" className="exp-item__points">
          {experience.points.map((point) => (
            <Box component="li" key={point} className="exp-item__point">
              <Typography
                component="span"
                className="exp-item__bullet"
                style={{ color: experience.color }}
              >
                ▸
              </Typography>
              <Typography component="span" className="exp-item__point-text">
                {point}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ExperienceItem;

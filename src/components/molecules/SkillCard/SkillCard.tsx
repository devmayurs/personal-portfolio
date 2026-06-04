import React, { useState } from 'react';
import { Card, CardContent, Box, Typography, Stack } from '@mui/material';
import TechChip from '../../atoms/TechChip/TechChip';
import type { ISkill } from '../../../types';
import './SkillCard.style.css';

interface ISkillCardProps {
  skill: ISkill;
}

const SkillCard: React.FC<ISkillCardProps> = ({ skill }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      className={`skill-card ${hovered ? 'skill-card--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardContent className="skill-card__content">
        <Box className="skill-card__header">
          <Typography component="span" className="skill-card__icon">
            {skill.icon}
          </Typography>
          <Typography variant="h3" className="skill-card__title">
            {skill.category}
          </Typography>
        </Box>
        <Stack direction="row" flexWrap="wrap" gap="6px">
          {skill.items.map((item) => (
            <TechChip key={item} label={item} variant="muted" />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SkillCard;

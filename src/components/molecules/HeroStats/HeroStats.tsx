import React from 'react';
import { Stack } from '@mui/material';
import StatItem from '../../atoms/StatItem/StatItem';
import { HERO_STATS } from '../../../constants/sections';
import './HeroStats.style.css';

const HeroStats: React.FC = () => {
  return (
    <Stack
      className="hero-stats"
      sx={{
        direction: 'row',
        flexWrap: 'wrap',
        gap: '2.5rem',
      }}
    >
      {HERO_STATS.map((stat) => (
        <StatItem key={stat.label} stat={stat} />
      ))}
    </Stack>
  );
};

export default HeroStats;

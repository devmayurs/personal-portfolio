import React from 'react';
import { Box, Typography } from '@mui/material';
import type { IStat } from '../../../types';
import './StatItem.style.css';

interface IStatItemProps {
  stat: IStat;
}

const StatItem: React.FC<IStatItemProps> = ({ stat }) => {
  return (
    <Box className="stat-item">
      <Typography className="stat-item__value">{stat.value}</Typography>
      <Typography variant="caption" className="stat-item__label">
        {stat.label}
      </Typography>
    </Box>
  );
};

export default StatItem;

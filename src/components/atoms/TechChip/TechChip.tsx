import React from 'react';
import { Chip } from '@mui/material';
import './TechChip.style.css';

interface ITechChipProps {
  label: string;
  variant?: 'primary' | 'muted' | 'mono';
}

const TechChip: React.FC<ITechChipProps> = ({ label, variant = 'muted' }) => {
  return (
    <Chip
      label={label}
      size="small"
      className={`tech-chip tech-chip--${variant}`}
    />
  );
};

export default TechChip;

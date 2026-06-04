import React from 'react';
import { Box, Typography } from '@mui/material';
import './SectionLabel.style.css';

interface ISectionLabelProps {
  children: string;
}

const SectionLabel: React.FC<ISectionLabelProps> = ({ children }) => {
  return (
    <Box className="section-label">
      <Box className="section-label__line-left" />
      <Typography variant="h2" className="section-label__title">
        {children}
      </Typography>
      <Box className="section-label__line-right" />
    </Box>
  );
};

export default SectionLabel;

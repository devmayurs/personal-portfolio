import React from 'react';
import { Box, Typography } from '@mui/material';
import './Footer.style.css';

const Footer: React.FC = () => {
  return (
    <Box component="footer" className="footer">
      <Typography variant="caption" className="footer__text">
        © 2026 Mayur Solanki &nbsp;·&nbsp; Built with React + TypeScript + Three.js + Material UI
      </Typography>
    </Box>
  );
};

export default Footer;

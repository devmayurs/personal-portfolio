import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.style.css';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box className="not-found" role="main">
      <Typography variant="h1" className="not-found__code">
        404
      </Typography>
      <Typography variant="h2" className="not-found__title">
        Page Not Found
      </Typography>
      <Typography variant="body1" className="not-found__body">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate('/')}
        className="not-found__btn"
        id="not-found-go-home-btn"
      >
        Go Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;

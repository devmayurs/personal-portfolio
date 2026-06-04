import { Box, CircularProgress } from '@mui/material';
export const PageLoader = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      bgcolor: '#0A0A1A',
    }}
  >
    <CircularProgress sx={{ color: '#38BDF8' }} />
  </Box>
);

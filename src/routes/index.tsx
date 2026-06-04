import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import MainLayout from '../layouts/MainLayout/MainLayout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const PageLoader = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    bgcolor="#0A0A1A"
  >
    <CircularProgress sx={{ color: '#38BDF8' }} />
  </Box>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

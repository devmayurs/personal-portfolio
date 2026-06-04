import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      '@mui/material',
      '@mui/icons-material',
      '@emotion/react',
      '@emotion/styled',
      'three',
      '@reduxjs/toolkit',
      'react-redux',
    ],
  },
  build: {
    rollupOptions: {
      output: {
        // Converted manualChunks to a function to prevent Rolldown crash
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Group 1: Material UI & Emotion Ecosystem
            if (
              id.includes('@mui/material') ||
              id.includes('@mui/icons-material') ||
              id.includes('@emotion/react') ||
              id.includes('@emotion/styled')
            ) {
              return 'mui';
            }

            // Group 2: Three.js
            if (id.includes('three')) {
              return 'three';
            }

            // Group 3: Global State & Data Fetching Libraries
            if (id.includes('@reduxjs/toolkit') || id.includes('react-redux') || id.includes('@tanstack/react-query')) {
              return 'state';
            }

            // Group 4: Core Framework Architecture
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor';
            }
          }
        },
      },
    },
  },
});

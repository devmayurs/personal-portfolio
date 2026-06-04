import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
        manualChunks: {
          mui: ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
          three: ['three'],
          vendor: ['react', 'react-dom', 'react-router-dom'],
          state: ['@reduxjs/toolkit', 'react-redux', '@tanstack/react-query'],
        },
      },
    },
  },
})

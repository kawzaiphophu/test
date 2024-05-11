import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import { defineConfig } from 'vite';

// run package config
dotenv.config();

// Vite configuration
export default defineConfig({
  plugins: [react()],
  // define process env
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils',
      '@api': '/src/api',
      '@assets': '/src/assets',
      '@data': '/src/data',
      '@types': '/src/types',
    },
  },
});

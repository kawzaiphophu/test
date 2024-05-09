
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import { defineConfig } from 'vite';


// run package config
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // define process env
  define: {
    'process.env': process.env
  }
});
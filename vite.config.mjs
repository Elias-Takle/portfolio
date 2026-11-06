import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// VITE_BASE is "/" locally and on Netlify; the GitHub Pages workflow sets "/<repo-name>/".
export default defineConfig({ base: process.env.VITE_BASE || '/', plugins: [react()] });

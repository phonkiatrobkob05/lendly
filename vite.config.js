import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Allow external access
    allowedHosts: ['lendlyofficial.onrender.com'] // Add your Render domain here
  }
});

import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Ensure you're using the correct port
    host: '0.0.0.0', // Allow external access
    allowedHosts: ['lendly.onrender.com'] // Add your Render domain here
  }
});

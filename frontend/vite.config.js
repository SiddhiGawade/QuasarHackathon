import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    allowedHosts: ['5b54-182-48-215-93.ngrok-free.app'] // Add the allowed host here
  }
});

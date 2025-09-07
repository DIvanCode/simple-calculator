import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import EnvironmentPlugin from 'vite-plugin-environment';


export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [react(), EnvironmentPlugin(['BACKEND_URL'])],
  publicDir: 'public',
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

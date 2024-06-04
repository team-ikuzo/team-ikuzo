import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: path.resolve(__dirname, '/src/components') },
      { find: '@utils', replacement: path.resolve(__dirname, '/src/utils') },
      { find: '@hooks', replacement: path.resolve(__dirname, '/src/hooks') },
      { find: '@pages', replacement: path.resolve(__dirname, '/src/pages') },
      { find: '@redux', replacement: path.resolve(__dirname, '/src/redux') }
    ]
  }
});

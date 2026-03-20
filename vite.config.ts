import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'  ← Раскомментируйте!

export default defineConfig({
  base: '/CourseWithFigma/',
  plugins: [
    react(),
    tailwindcss(),  ← Раскомментируйте!
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
});

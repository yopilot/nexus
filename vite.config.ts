import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.mjs', // or 'postcss.config.cjs' if you chose Option 2
  },
});

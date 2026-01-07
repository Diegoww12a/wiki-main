import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/wiki-main/', // <-- nome exato do repositório
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      // In dev inoltra le chiamate Gravity Forms al WordPress reale (evita il CORS).
      // In produzione la vetrina è su asteryslab.com → /inner/wp-json è stesso dominio.
      proxy: {
        '/inner/wp-json': {
          target: 'https://asteryslab.com',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});

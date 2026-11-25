
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const omgeving = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],

    server: {
      proxy: {
        '/api/dieren': {
          target: 'https://api.api-ninjas.com',
          changeOrigin: true,
          rewrite: (pad) =>
            pad.replace(/^\/api\/dieren/, '/v1/animals'),
          headers: {
            'X-Api-Key': omgeving.API_NINJAS_KEY || '',
          },
        },
      },
    },
  };
});

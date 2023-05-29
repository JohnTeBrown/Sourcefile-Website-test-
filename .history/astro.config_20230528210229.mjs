import { defineConfig } from 'astro/config';
import { transform } from '@astrojs/esbuild';

export default defineConfig({
  buildOptions: {
    astro: {
      esbuildOptions: {
        loader: {
          '.ts': 'tsx',
        },
      },
    },
  },
});

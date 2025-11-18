import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react-swc';
import { glob } from 'glob';
import { extname, relative, resolve } from 'path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

export default defineConfig({
  server: {
    port: 3333,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    dts({ include: ['lib'], rollupTypes: true }),
  ],
  resolve: {
    alias: {
      '@ui': resolve(__dirname, 'lib/main.ts'),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'motion'],
      input: Object.fromEntries(
        glob.sync('lib/**/*.{ts,tsx}', {
          ignore: [
            'lib/**/*.d.ts',
            'lib/**/*.stories.tsx',
            'lib/**/*.stories.ts',
          ],
        }).map(file => [
          relative(
            'lib',
            file.slice(0, file.length - extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        globals: {
          react: 'React',
        },
      }
    },
    sourcemap: true,
    emptyOutDir: true,
  }
});

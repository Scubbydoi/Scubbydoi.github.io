import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// `npm run dev` works as before. `npm run build` inlines all JS/CSS into a single
// self-contained `docs/index.html`. That one file:
//   - can be double-clicked / opened directly from the filesystem (file://), and
//   - is what GitHub Pages serves (set Pages -> Deploy from branch -> /docs).
// `base: './'` keeps any URLs relative so it works at any path / on a project site.
export default defineConfig({
  base: './',
  plugins: [viteSingleFile()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});

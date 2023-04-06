import { defineConfig } from 'tsup';

const entries = [
  'src/atoms/index.ts',
  'src/molecules/index.ts',
  'src/organisms/index.ts',
  'src/pages/index.ts',
  'src/templates/index.ts',
];

export default defineConfig((opts) => ({
  entry: entries,
  format: ['esm', 'cjs'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: !opts.watch,
  minify: true,
  treeshake: true,
  platform: 'browser',
}));

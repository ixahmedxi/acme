import { defineConfig } from 'tsup';

import { baseConfig } from './src/base';

export default defineConfig((opts) => ({
  ...baseConfig(opts),
  entry: ['src/base.ts'],
  format: 'cjs',
}));

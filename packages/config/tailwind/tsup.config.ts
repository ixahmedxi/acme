import { defineConfig } from 'tsup';

import { baseConfig } from '@acme/tsup';

export default defineConfig((opts) => ({
  ...baseConfig(opts),
  format: 'cjs',
  entry: ['./tailwind.ts'],
}));

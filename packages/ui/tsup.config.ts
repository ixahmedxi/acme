import { defineConfig } from 'tsup';

import { baseConfig } from '@acme/tsup';

const entries = [
  'src/atoms/index.ts',
  'src/molecules/index.ts',
  'src/organisms/index.ts',
  'src/pages/index.ts',
  'src/templates/index.ts',
];

export default defineConfig((opts) => ({
  ...baseConfig(opts),
  entry: entries,
  platform: 'browser',
}));

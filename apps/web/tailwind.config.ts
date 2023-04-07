import { Config } from 'tailwindcss';

import basePreset from '@acme/tailwind';

export default {
  content: ['./src/**/*.{tsx,ts,jsx,js,mdx}'],
  presets: [basePreset],
  darkMode: 'class',
} satisfies Config;

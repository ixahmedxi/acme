import { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('windy-radix-palette')],
} satisfies Config;

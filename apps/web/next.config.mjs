/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: [],
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: !!process.env.CI ?? false,
  },
  typescript: {
    ignoreBuildErrors: !!process.env.CI ?? false,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
};

export default config;

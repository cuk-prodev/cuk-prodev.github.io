/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/cuk-prodev',
  assetPrefix: '/'
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: "/cuk-prodev",          // <- sesuai nama repo
  assetPrefix: "/cuk-prodev",       // <- supaya file CSS/JS bisa ditemukan
};

module.exports = nextConfig;

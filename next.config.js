// // next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true,
//   },
//   basePath: "",       // ✅ kosongkan
//   assetPrefix: "",     // ✅ kosongkan
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true // wajib untuk GitHub Pages
  }
}

module.exports = nextConfig



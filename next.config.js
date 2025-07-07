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


// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/web',
  images: {
    unoptimized: true
  }
}
module.exports = nextConfig;


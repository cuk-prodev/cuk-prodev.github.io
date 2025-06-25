// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Hapus `output: 'export'`
//   images: { unoptimized: true } // kalau perlu, atau bisa dihapus juga
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // penting untuk App Router
  },
};

module.exports = nextConfig;

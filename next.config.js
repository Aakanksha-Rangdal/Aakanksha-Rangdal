// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     jsonImports: true, 
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    jsonImports: true,
  },
  images: {
    domains: ['aakanksha-public-files.s3.us-east-2.amazonaws.com'],
  },
};

module.exports = nextConfig;

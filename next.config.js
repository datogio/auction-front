/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      `localhost`,
      `vercel.app`,
      'toy-store-2021.s3.amazonaws.com',
      'toy-store-2021.s3.eu-central-1.amazonaws.com',
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

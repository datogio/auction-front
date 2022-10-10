/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      `localhost`,
      `vercel.app`,
      // `decora-cms.s3.eu-central-1.amazonaws.com`,
      // `framemasters.io`,
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

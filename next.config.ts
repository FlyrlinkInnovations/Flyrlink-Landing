import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.leorix.com',
      },
      {
        protocol: 'https',
        hostname: 'foundershub-bucket.s3.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;

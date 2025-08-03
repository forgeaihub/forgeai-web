import type { NextConfig } from "next";

// Determine if we're in development or production
const isDevelopment = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  output: 'export',

  // Only use basePath and assetPrefix in production (for GitHub Pages)
  basePath: isDevelopment ? '' : '/forgeai-web',
  assetPrefix: isDevelopment ? '' : '/forgeai-web/',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

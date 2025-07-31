import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: 'export',

  basePath: '/forgeai-web',
  assetPrefix: '/forgeai-web/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

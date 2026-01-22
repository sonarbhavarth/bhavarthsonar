import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/bhavarthsonar',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

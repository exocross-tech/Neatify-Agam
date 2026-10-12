import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  webpack: (config, { dev }) => {
    if (dev) {
      // Use memory cache during dev on Windows to prevent pack.gz rename file lock collisions
      config.cache = {
        type: "memory",
      };
    }
    return config;
  },
};

export default nextConfig;

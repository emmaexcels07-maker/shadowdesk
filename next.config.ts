import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Standard Next.js server runner exclusion
  serverExternalPackages: ["@prisma/client", "@prisma/adapter-pg", "pg"],

  // 2. Fallback explicit webpack rule to treat them as externals
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push("@prisma/adapter-pg", "pg");
    }
    return config;
  },
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Directly instruct Turbopack to leave these packages entirely to the runtime environment
  serverExternalPackages: ["@prisma/client", "@prisma/adapter-pg", "pg"],
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tell Turbopack NOT to bundle or resolve these native dependencies
  serverExternalPackages: ["@prisma/client", "@prisma/adapter-pg", "pg"],
};

module.exports = nextConfig;
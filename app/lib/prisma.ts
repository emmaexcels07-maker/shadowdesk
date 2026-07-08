import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as {
  prisma?: PrismaClient;
};

let prisma: PrismaClient;

if (globalForPrisma.prisma) {
  prisma = globalForPrisma.prisma;
} else {
  // 1. Prisma 7 fallback check for Next.js build workers
  // During 'next build', DATABASE_URL might be a placeholder or empty, 
  // and Turbopack runs evaluation cycles.
  if (typeof window === "undefined" && process.env.DATABASE_URL) {
    // Dynamic imports prevent Turbopack from aggressively bundling these 
    // modules during early build worker phases.
    const { Pool } = require("pg");
    const { PrismaPg } = require("@prisma/adapter-pg");

    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const adapter = new PrismaPg(pool);
    
    prisma = new PrismaClient({ adapter });
  } else {
    // Fallback instance so the build worker doesn't crash during evaluation 
    // if env variables are missing on the Render build machine.
    prisma = new PrismaClient({
      datasourceUrl: "postgresql://placeholder:placeholder@localhost:5432/db"
    });
  }

  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
  }
}

export { prisma };
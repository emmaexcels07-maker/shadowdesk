import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = globalThis as {
  prisma?: PrismaClient;
};

let prisma: PrismaClient;

if (globalForPrisma.prisma) {
  prisma = globalForPrisma.prisma;
} else {
  // If we are at server runtime and have a DB connection URL
  if (typeof window === "undefined" && process.env.DATABASE_URL) {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const adapter = new PrismaPg(pool);
    prisma = new PrismaClient({ adapter });
  } else {
    // Structural fallback so page generation workers do not throw a constructor exception
    prisma = new PrismaClient({
      accelerateUrl: "prisma://bootstrap-placeholder.prisma-hq.com/?api_key=mock"
    });
  }

  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
  }
}

export { prisma };
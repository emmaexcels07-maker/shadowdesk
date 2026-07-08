import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as {
  prisma?: PrismaClient;
};

let prisma: PrismaClient;

if (globalForPrisma.prisma) {
  prisma = globalForPrisma.prisma;
} else {
  if (typeof window === "undefined" && process.env.DATABASE_URL) {
    // Obfuscate module strings to keep Turbopack from scanning them
    const pgModule = "pg";
    const adapterModule = "@prisma/adapter-pg";

    const { Pool } = require(pgModule);
    const { PrismaPg } = require(adapterModule);

    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const adapter = new PrismaPg(pool);
    
    prisma = new PrismaClient({ adapter });
  } else {
    // FIXED FOR PRISMA 7: Pass a syntactically valid mock accelerate URL.
    // This allows the build worker to instantiate the class safely without a real DB.
    prisma = new PrismaClient({
      accelerateUrl: "prisma://bootstrap-placeholder.prisma-hq.com/?api_key=mock"
    });
  }

  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
  }
}

export { prisma };
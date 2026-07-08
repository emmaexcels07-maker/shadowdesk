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
  // 1. Create a standard connection pool using your Env Variable
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  
  // 2. Wrap it in Prisma's driver adapter
  const adapter = new PrismaPg(pool);
  
  // 3. Pass the adapter to the constructor (Required in Prisma 7)
  prisma = new PrismaClient({ adapter });

  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
  }
}

export { prisma };
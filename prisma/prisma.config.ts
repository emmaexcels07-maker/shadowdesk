import * as PrismaClientPkg from "@prisma/client";

const PrismaClient =
  (PrismaClientPkg as any).PrismaClient ||
  (PrismaClientPkg as any).default ||
  PrismaClientPkg;

const DATABASE_URL = process.env.DATABASE_URL;

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL,
    },
  },
});

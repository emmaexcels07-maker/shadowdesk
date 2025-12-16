import PrismaClientPkg from "@prisma/client";

const PrismaClient = (PrismaClientPkg as any).PrismaClient || PrismaClientPkg.default || PrismaClientPkg;

const globalForPrisma = global as unknown as { prisma?: typeof PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"], // optional
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

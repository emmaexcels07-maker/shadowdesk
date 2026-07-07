import PrismaClientPkg from "@prisma/client";

type PrismaClientConstructor = new (...args: readonly unknown[]) => {
  $disconnect: () => Promise<void>;
};

type PrismaClientPackage = {
  PrismaClient?: PrismaClientConstructor;
  default?: PrismaClientConstructor;
};

const prismaClientPkg = PrismaClientPkg as unknown as PrismaClientPackage;
const PrismaClient =
  prismaClientPkg.PrismaClient ||
  prismaClientPkg.default ||
  (PrismaClientPkg as unknown as PrismaClientConstructor);

const globalForPrisma =
  global as unknown as { prisma?: InstanceType<PrismaClientConstructor> };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
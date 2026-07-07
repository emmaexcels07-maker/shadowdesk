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

const DATABASE_URL = process.env.DATABASE_URL;

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL,
    },
  },
});

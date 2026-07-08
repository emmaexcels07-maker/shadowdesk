import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as {
  prisma?: PrismaClient;
};

// 1. We declare a proxy helper rather than evaluating the client immediately
let prismaInstance: PrismaClient | null = null;

async function getPrismaClient(): Promise<PrismaClient> {
  if (prismaInstance) return prismaInstance;
  if (globalForPrisma.prisma) {
    prismaInstance = globalForPrisma.prisma;
    return prismaInstance;
  }

  if (typeof window === "undefined" && process.env.DATABASE_URL) {
    // 2. Pure runtime runtime dynamic imports. 
    // This splits the code chunk away from the Turbopack build collector entirely.
    const [{ Pool }, { PrismaPg }] = await Promise.all([
      import("pg"),
      import("@prisma/adapter-pg"),
    ]);

    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const adapter = new PrismaPg(pool);
    
    prismaInstance = new PrismaClient({ adapter });
  } else {
    // Fallback block so page collectors/pre-renderers initialize happily 
    prismaInstance = new PrismaClient({
      datasourceUrl: "postgresql://placeholder:placeholder@localhost:5432/db",
    });
  }

  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prismaInstance;
  }

  return prismaInstance;
}

// 3. Export a type-safe Proxy. Your API routes can continue using 
// `import { prisma } from "@/app/lib/prisma"` without modifying any route logic.
export const prisma = new Proxy({} as PrismaClient, {
  get(target, prop, receiver) {
    // Handle promises/thenable checking internally by Next.js
    if (prop === "then") return undefined;
    
    // Trap any method calls (like prisma.task.findMany) and route them lazily
    return (...args: any[]) => {
      return getPrismaClient().then((client) => {
        return (client as any)[prop](...args);
      });
    };
  },
});
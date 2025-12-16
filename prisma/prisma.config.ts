import { PrismaConfig } from '@prisma/client/edge';

export const prismaConfig: PrismaConfig = {
  datasource: {
    provider: 'postgresql',
    url: process.env.DATABASE_URL, // Must be defined in .env
  },
};

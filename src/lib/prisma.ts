import { PrismaClient } from '@prisma/client';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

// eslint-disable-next-line import/prefer-default-export, operator-linebreak
export const prisma =
// eslint-disable-next-line operator-linebreak
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['error', 'warn', 'query'], // CAM: is this the right level of logging?
    datasources: {
      db: {
        url: process.env.POSTGRES_URL_NON_POOLING,
      },
    },
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

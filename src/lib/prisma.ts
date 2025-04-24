import { PrismaClient } from '@prisma/client';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// eslint-disable-next-line import/prefer-default-export, operator-linebreak
export const prisma =
  // eslint-disable-next-line operator-linebreak
  process.env.NODE_ENV === 'production'
    ? new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
    })
    : globalForPrisma.prisma || new PrismaClient();

// Store it in global for dev environment to avoid exhausting connections
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;

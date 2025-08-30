import { PrismaClient } from '@prisma/client'

const globalForPrisma = global

// Prevent multiple instances of Prisma Client in development
export const prisma = globalForPrisma.prisma || new PrismaClient({
  log: ['query', 'error', 'warn'],
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// lib/prisma.js
import { PrismaClient } from '@prisma/client';

const globalForPrisma: any = global;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') globalForPrisma.prisma = prisma;

export { prisma };

import { PrismaClient } from '@prisma/client';

// Validate environment variables
if (!process.env.DATABASE_URL) {
  throw new Error(
    'DATABASE_URL environment variable is not defined. ' +
    'Please create a .env file with DATABASE_URL or set it in your environment.'
  );
}

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Helper functions for database operations

/**
 * Get all service categories with their services
 */
export async function getAllServiceCategories() {
  return prisma.serviceCategory.findMany({
    include: {
      services: true,
    },
  });
}

/**
 * Get a specific service category by ID with its services
 */
export async function getServiceCategoryById(id: string) {
  return prisma.serviceCategory.findUnique({
    where: { id },
    include: {
      services: true,
    },
  });
}

/**
 * Get a specific service by ID
 */
export async function getServiceById(id: string) {
  return prisma.service.findUnique({
    where: { id },
    include: {
      category: true,
    },
  });
}

/**
 * Create a new contact submission
 */
export async function createContactSubmission(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return prisma.contactSubmission.create({
    data,
  });
}
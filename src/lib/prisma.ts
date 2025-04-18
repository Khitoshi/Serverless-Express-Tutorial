import { PrismaClient } from '@prisma/client';

declare global {
  // 開発環境のホットリロード対策
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  globalThis.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error'] : ['error'],
  });

if (process.env.NODE_ENV === 'development') {
  globalThis.prisma = prisma;
}

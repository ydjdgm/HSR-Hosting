import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { env } from '$env/dynamic/private';
if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

console.log("DATABASE_URL:", env.DATABASE_URL); // 로그 추가

const client = createClient({ url: env.DATABASE_URL });
export const db = drizzle(client);
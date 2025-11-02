/**
 * tRPC Context
 *
 * This context is created for each request and contains:
 * - User session (from NextAuth)
 * - Database client
 * - Request headers
 */

import type { Session } from 'next-auth'
import { auth } from '@/auth'
import { db } from '@/lib/db/client'

/**
 * Create context for tRPC requests
 * This runs on every request
 */
export async function createContext() {
  const session = await auth()

  return {
    session,
    db,
  }
}

export type Context = Awaited<ReturnType<typeof createContext>>

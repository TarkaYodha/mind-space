/**
 * tRPC Instance Configuration
 *
 * This file sets up the core tRPC instance and procedures.
 * Use these to create routers and procedures throughout the app.
 */

import { initTRPC, TRPCError } from '@trpc/server'
import superjson from 'superjson'
import { ZodError } from 'zod'

type Context = {
  session: {
    user?: {
      id?: string | null
      [key: string]: unknown
    } | null
  } | null
  db: any
}

/**
 * Initialize tRPC with context type
 */
const t = initTRPC.context<Context>().create({
  /**
   * SuperJSON for serialization (handles Date, Map, Set, etc.)
   */
  transformer: superjson,

  /**
   * Custom error formatter for better error messages
   */
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }
  },
})

/**
 * Export reusable router and procedure helpers
 */
export const router = t.router
export const middleware = t.middleware

/**
 * Public procedure - accessible without authentication
 */
export const publicProcedure = t.procedure

/**
 * Protected procedure - requires authentication
 * Automatically checks for valid session and adds user to context
 */
export const protectedProcedure = t.procedure.use(
  middleware(async ({ ctx, next }) => {
    if (!ctx.session || !ctx.session.user || !ctx.session.user.id) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'You must be logged in to access this resource',
      })
    }

    return next({
      ctx: {
        // Infers the `session` as non-nullable with required user.id
        session: { ...ctx.session, user: { ...ctx.session.user, id: ctx.session.user.id } },
        db: ctx.db,
      },
    })
  }),
)

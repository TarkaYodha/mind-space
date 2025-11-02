/**
 * tRPC Client Configuration
 *
 * Client-side tRPC setup for React components
 */

import { createTRPCReact } from '@trpc/react-query'
import type { AppRouter } from './routers/_app'

/**
 * Create typed tRPC hooks
 */
export const trpc = createTRPCReact<AppRouter>()

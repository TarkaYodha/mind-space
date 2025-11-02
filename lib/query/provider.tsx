'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { type ReactNode, useState } from 'react'
import { getQueryClient } from './client'

/**
 * Query Provider Component
 * Wraps the app with TanStack Query context
 * Includes devtools in development mode
 */
export function QueryProvider({ children }: { children: ReactNode }) {
  // Create a new query client instance for this component tree
  // This prevents state sharing between different users on the server
  const [queryClient] = useState(() => getQueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Only show devtools in development */}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
      )}
    </QueryClientProvider>
  )
}

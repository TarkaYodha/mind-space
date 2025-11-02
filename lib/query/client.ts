import { QueryClient } from '@tanstack/react-query'

/**
 * Create a new QueryClient instance with optimized defaults
 * for the MindSpace application
 */
export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Data is considered fresh for 1 minute
        staleTime: 60 * 1000,
        // Keep unused data in cache for 5 minutes
        gcTime: 5 * 60 * 1000,
        // Retry failed requests up to 3 times
        retry: 3,
        // Don't refetch on window focus in development
        refetchOnWindowFocus: process.env.NODE_ENV === 'production',
        // Don't refetch on mount if data is fresh
        refetchOnMount: false,
      },
      mutations: {
        // Retry failed mutations once
        retry: 1,
      },
    },
  })
}

// Global query client instance (singleton for client-side)
let browserQueryClient: QueryClient | undefined

export function getQueryClient() {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient()
  }

  // Browser: make a new query client if we don't already have one
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient()
  }

  return browserQueryClient
}

'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error boundary caught:', error)
    }

    // TODO: Send to error tracking service (Sentry, etc.) in production
    // trackError(error, { digest: error.digest })
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 px-6 py-12 dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-md space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Something went wrong
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            We encountered an unexpected error. This has been logged and we'll look into it.
          </p>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-left dark:border-red-900 dark:bg-red-950">
            <p className="text-xs font-mono text-red-800 dark:text-red-200">{error.message}</p>
            {error.digest && (
              <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button onClick={reset} className="w-full sm:w-auto">
            Try again
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = '/')}
            className="w-full sm:w-auto"
          >
            Go home
          </Button>
        </div>

        <div className="pt-4">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            If this problem persists, please contact support or try again later.
          </p>
        </div>
      </div>
    </div>
  )
}

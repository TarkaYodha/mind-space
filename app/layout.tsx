import type { Metadata, Viewport } from 'next'
import type React from 'react'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { SessionProvider } from 'next-auth/react'
import { Suspense } from 'react'
import { featureFlags } from '@/lib/config'
import { validateEnv } from '@/lib/env-validation'
import { QueryProvider } from '@/lib/query/provider'
import { TRPCProvider } from '@/lib/trpc/provider'

// Validate environment variables on server startup
if (typeof window === 'undefined') {
  const validation = validateEnv()

  if (!validation.isValid) {
    console.error('❌ Missing required environment variables:')
    validation.missing.forEach((v) => console.error(`  - ${v}`))
    console.error('\n📝 Please create a .env.local file based on .env.example')
  }

  if (validation.warnings.length > 0) {
    console.warn('⚠️  Environment Configuration Warnings:')
    validation.warnings.forEach((w) => console.warn(`  - ${w}`))
  }
}

export const metadata: Metadata = {
  title: 'MindSpace - Confidential Mental Health Support for Students',
  description:
    'Anonymous, stigma-free mental health platform for college students. AI-powered support, clinical assessments, and crisis intervention resources.',
  keywords: [
    'mental health',
    'college students',
    'counseling',
    'anonymous support',
    'crisis intervention',
  ],
  authors: [{ name: 'MindSpace Team' }],
  openGraph: {
    title: 'MindSpace - Mental Health Support for Students',
    description: 'Anonymous, stigma-free mental health platform for college students',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SessionProvider>
          <TRPCProvider>
            <QueryProvider>
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
              {featureFlags.ENABLE_ANALYTICS && (
                <>
                  <Analytics />
                  <SpeedInsights />
                </>
              )}
            </QueryProvider>
          </TRPCProvider>
        </SessionProvider>
      </body>
    </html>
  )
}

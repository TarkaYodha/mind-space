/**
 * Feature Flags Configuration
 *
 * Use these flags to gradually roll out new features or switch between implementations.
 * All flags are controlled via environment variables.
 */

export const featureFlags = {
  /**
   * Authentication Provider
   * - true: Use Clerk (legacy)
   * - false: Use NextAuth (new)
   */
  USE_CLERK: process.env.NEXT_PUBLIC_USE_CLERK === 'true',

  /**
   * API Layer
   * - true: Use tRPC (new, type-safe)
   * - false: Use REST API routes (legacy)
   */
  USE_TRPC: process.env.NEXT_PUBLIC_USE_TRPC !== 'false', // Default to true

  /**
   * Database
   * - true: Use Supabase + Drizzle (new)
   * - false: No database (legacy)
   */
  USE_SUPABASE: process.env.NEXT_PUBLIC_USE_SUPABASE !== 'false', // Default to true

  /**
   * Analytics
   * - true: Enable Vercel Analytics
   * - false: Disable analytics
   */
  ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',

  /**
   * Maintenance Mode
   * - true: Show maintenance page
   * - false: Normal operation
   */
  MAINTENANCE_MODE: process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true',

  /**
   * Development Features
   * - true: Enable dev-only features
   * - false: Production mode
   */
  DEV_MODE: process.env.NODE_ENV === 'development',
} as const

/**
 * Helper function to check if a feature is enabled for a specific user
 * Useful for gradual rollouts (10% → 50% → 100%)
 */
export function isFeatureEnabledForUser(userId: string, percentage: number): boolean {
  if (percentage >= 100) return true
  if (percentage <= 0) return false

  const hash = userId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return hash % 100 < percentage
}

/**
 * Log feature flag status (for debugging)
 */
export function logFeatureFlags() {
  if (featureFlags.DEV_MODE) {
    console.log('🏁 Feature Flags:', {
      'Auth Provider': featureFlags.USE_CLERK ? 'Clerk' : 'NextAuth',
      'API Layer': featureFlags.USE_TRPC ? 'tRPC' : 'REST',
      Database: featureFlags.USE_SUPABASE ? 'Enabled' : 'Disabled',
      Analytics: featureFlags.ENABLE_ANALYTICS ? 'Enabled' : 'Disabled',
      Maintenance: featureFlags.MAINTENANCE_MODE ? 'Active' : 'Inactive',
    })
  }
}

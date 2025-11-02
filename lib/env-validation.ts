/**
 * Environment Variable Validation Utility
 * Validates required environment variables at application startup
 */

const requiredEnvVars = [
  'DATABASE_URL',
  'NEXTAUTH_SECRET',
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
] as const

interface ValidationResult {
  isValid: boolean
  missing: string[]
  warnings: string[]
}

/**
 * Validates environment variables and provides helpful error messages
 */
export function validateEnv(): ValidationResult {
  const missing: string[] = []
  const warnings: string[] = []

  // Check required variables
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missing.push(envVar)
    }
  }

  // Check optional but recommended variables
  if (!process.env.GEMINI_API_KEY) {
    warnings.push(
      'GEMINI_API_KEY not set. Chat functionality requires Gemini API key to be configured.',
    )
  }

  if (!process.env.NEXT_PUBLIC_APP_URL) {
    warnings.push(
      'NEXT_PUBLIC_APP_URL not set. Using default value. Set this for production deployments.',
    )
  }

  return {
    isValid: missing.length === 0,
    missing,
    warnings,
  }
}

/**
 * Validates environment and throws error if critical variables are missing
 */
export function requireEnv(): void {
  const result = validateEnv()

  if (!result.isValid) {
    const errorMessage = [
      '❌ Missing required environment variables:',
      ...result.missing.map((v) => `  - ${v}`),
      '',
      '📝 Please create a .env.local file based on .env.example',
      'See README.md for setup instructions.',
    ].join('\n')

    throw new Error(errorMessage)
  }

  if (result.warnings.length > 0) {
    console.warn('⚠️  Environment Configuration Warnings:')
    result.warnings.forEach((warning) => console.warn(`  - ${warning}`))
    console.warn('')
  }
}

/**
 * Gets environment variable with fallback
 */
export function getEnv(key: string, fallback?: string): string {
  return process.env[key] || fallback || ''
}

/**
 * Checks if running in production
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production'
}

/**
 * Checks if running in development
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development'
}

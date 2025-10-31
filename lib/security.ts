/**
 * Security utilities for input validation and sanitization
 */

/**
 * Sanitizes user input to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
    .slice(0, 10000) // Limit length to prevent abuse
}

/**
 * Validates message input
 */
export function validateMessage(message: unknown): { valid: boolean; error?: string; sanitized?: string } {
  if (typeof message !== 'string') {
    return { valid: false, error: 'Message must be a string' }
  }

  const trimmed = message.trim()

  if (trimmed.length === 0) {
    return { valid: false, error: 'Message cannot be empty' }
  }

  if (trimmed.length > 10000) {
    return { valid: false, error: 'Message is too long (max 10,000 characters)' }
  }

  // Check for suspicious patterns
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /onerror=/i,
    /onclick=/i,
    /onload=/i,
  ]

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(trimmed)) {
      return { valid: false, error: 'Message contains invalid content' }
    }
  }

  return { valid: true, sanitized: sanitizeInput(trimmed) }
}

/**
 * Validates email format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

/**
 * Validates JSON structure
 */
export function validateJSON(data: unknown): boolean {
  try {
    JSON.stringify(data)
    return true
  } catch {
    return false
  }
}

/**
 * Rate limit helper (works with middleware)
 */
export function createRateLimitKey(userId: string, endpoint: string): string {
  return `${endpoint}:${userId}`
}

/**
 * Escapes HTML special characters
 */
export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, m => map[m])
}

/**
 * Validates diet planner profile data
 */
export function validateDietProfile(profile: unknown): { valid: boolean; error?: string } {
  if (!profile || typeof profile !== 'object') {
    return { valid: false, error: 'Profile must be an object' }
  }

  const p = profile as Record<string, unknown>

  // Validate numeric fields if present
  const numericFields = ['age', 'weight', 'height', 'mealsPerDay']
  for (const field of numericFields) {
    if (p[field] !== undefined) {
      const value = Number(p[field])
      if (isNaN(value) || value < 0 || value > 1000) {
        return { valid: false, error: `Invalid ${field} value` }
      }
    }
  }

  // Validate arrays if present
  if (p.goals && !Array.isArray(p.goals)) {
    return { valid: false, error: 'Goals must be an array' }
  }

  if (p.allergies && !Array.isArray(p.allergies)) {
    return { valid: false, error: 'Allergies must be an array' }
  }

  if (p.healthConditions && !Array.isArray(p.healthConditions)) {
    return { valid: false, error: 'Health conditions must be an array' }
  }

  return { valid: true }
}

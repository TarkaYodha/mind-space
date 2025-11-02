import { describe, expect, it } from 'vitest'
import {
  createRateLimitKey,
  escapeHtml,
  sanitizeInput,
  validateDietProfile,
  validateEmail,
  validateJSON,
  validateMessage,
} from '@/lib/security'

describe('sanitizeInput', () => {
  it('should remove HTML tags', () => {
    const input = '<script>alert("XSS")</script>Hello'
    const result = sanitizeInput(input)
    expect(result).not.toContain('<')
    expect(result).not.toContain('>')
    expect(result).toBe('scriptalert("XSS")/scriptHello')
  })

  it('should remove javascript: protocol', () => {
    const input = 'javascript:alert("XSS")'
    const result = sanitizeInput(input)
    expect(result).not.toContain('javascript:')
    expect(result).toBe('alert("XSS")')
  })

  it('should remove event handlers', () => {
    const input = 'onclick=alert("XSS")'
    const result = sanitizeInput(input)
    expect(result).not.toContain('onclick=')
    expect(result).toBe('alert("XSS")')
  })

  it('should trim whitespace', () => {
    const input = '   Hello World   '
    const result = sanitizeInput(input)
    expect(result).toBe('Hello World')
  })

  it('should limit string length to 10000 characters', () => {
    const input = 'a'.repeat(15000)
    const result = sanitizeInput(input)
    expect(result.length).toBe(10000)
  })

  it('should handle normal input without changes', () => {
    const input = 'Hello, this is a normal message!'
    const result = sanitizeInput(input)
    expect(result).toBe(input)
  })

  it('should handle empty string', () => {
    const result = sanitizeInput('')
    expect(result).toBe('')
  })

  it('should remove multiple event handlers', () => {
    const input = 'onload=hack() onerror=steal() onmouseover=bad()'
    const result = sanitizeInput(input)
    expect(result).not.toContain('onload=')
    expect(result).not.toContain('onerror=')
    expect(result).not.toContain('onmouseover=')
  })
})

describe('validateMessage', () => {
  it('should validate a correct message', () => {
    const result = validateMessage('Hello, how can I help you?')
    expect(result.valid).toBe(true)
    expect(result.sanitized).toBe('Hello, how can I help you?')
    expect(result.error).toBeUndefined()
  })

  it('should reject non-string input', () => {
    const result = validateMessage(123)
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Message must be a string')
  })

  it('should reject empty messages', () => {
    const result = validateMessage('   ')
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Message cannot be empty')
  })

  it('should reject messages that are too long', () => {
    const longMessage = 'a'.repeat(10001)
    const result = validateMessage(longMessage)
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Message is too long (max 10,000 characters)')
  })

  it('should reject messages with script tags', () => {
    const result = validateMessage('<script>alert("XSS")</script>')
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Message contains invalid content')
  })

  it('should reject messages with javascript: protocol', () => {
    const result = validateMessage('Click here: javascript:alert("XSS")')
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Message contains invalid content')
  })

  it('should reject messages with onerror event', () => {
    const result = validateMessage('<img src=x onerror=alert("XSS")>')
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Message contains invalid content')
  })

  it('should reject messages with onclick event', () => {
    const result = validateMessage('<a onclick=alert("XSS")>Click</a>')
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Message contains invalid content')
  })

  it('should reject messages with onload event', () => {
    const result = validateMessage('<body onload=alert("XSS")>')
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Message contains invalid content')
  })

  it('should handle case-insensitive pattern matching', () => {
    const result = validateMessage('<SCRIPT>alert("XSS")</SCRIPT>')
    expect(result.valid).toBe(false)
  })

  it('should sanitize valid messages', () => {
    const result = validateMessage('Hello <world>')
    expect(result.valid).toBe(true)
    expect(result.sanitized).toBe('Hello world')
  })
})

describe('validateEmail', () => {
  it('should validate correct email addresses', () => {
    expect(validateEmail('test@example.com')).toBe(true)
    expect(validateEmail('user.name@example.co.uk')).toBe(true)
    expect(validateEmail('user+tag@example.com')).toBe(true)
    expect(validateEmail('test123@test-domain.com')).toBe(true)
  })

  it('should reject invalid email addresses', () => {
    expect(validateEmail('invalid')).toBe(false)
    expect(validateEmail('@example.com')).toBe(false)
    expect(validateEmail('user@')).toBe(false)
    expect(validateEmail('user@.com')).toBe(false)
    expect(validateEmail('user @example.com')).toBe(false)
    expect(validateEmail('')).toBe(false)
  })

  it('should reject emails longer than 254 characters', () => {
    const longEmail = `${'a'.repeat(250)}@test.com`
    expect(validateEmail(longEmail)).toBe(false)
  })

  it('should handle edge cases', () => {
    expect(validateEmail('a@b.c')).toBe(true) // Minimal valid email
    expect(validateEmail('user@domain')).toBe(false) // No TLD
  })
})

describe('validateJSON', () => {
  it('should validate valid JSON structures', () => {
    expect(validateJSON({ name: 'test', value: 123 })).toBe(true)
    expect(validateJSON([1, 2, 3])).toBe(true)
    expect(validateJSON('string')).toBe(true)
    expect(validateJSON(123)).toBe(true)
    expect(validateJSON(true)).toBe(true)
    expect(validateJSON(null)).toBe(true)
  })

  it('should handle complex nested objects', () => {
    const complexObj = {
      user: {
        name: 'John',
        profile: {
          age: 30,
          hobbies: ['reading', 'coding'],
        },
      },
    }
    expect(validateJSON(complexObj)).toBe(true)
  })

  it('should reject circular references', () => {
    const circular: any = { name: 'test' }
    circular.self = circular
    expect(validateJSON(circular)).toBe(false)
  })

  it('should handle undefined', () => {
    expect(validateJSON(undefined)).toBe(true)
  })
})

describe('createRateLimitKey', () => {
  it('should create a rate limit key with endpoint and userId', () => {
    const key = createRateLimitKey('user123', '/api/chat')
    expect(key).toBe('/api/chat:user123')
  })

  it('should handle different endpoints', () => {
    const key1 = createRateLimitKey('user456', '/api/assessment')
    const key2 = createRateLimitKey('user456', '/api/chat')
    expect(key1).toBe('/api/assessment:user456')
    expect(key2).toBe('/api/chat:user456')
    expect(key1).not.toBe(key2)
  })

  it('should handle different users on same endpoint', () => {
    const key1 = createRateLimitKey('user1', '/api/chat')
    const key2 = createRateLimitKey('user2', '/api/chat')
    expect(key1).toBe('/api/chat:user1')
    expect(key2).toBe('/api/chat:user2')
    expect(key1).not.toBe(key2)
  })

  it('should handle special characters in userId', () => {
    const key = createRateLimitKey('user-123_abc', '/api/endpoint')
    expect(key).toBe('/api/endpoint:user-123_abc')
  })
})

describe('escapeHtml', () => {
  it('should escape HTML special characters', () => {
    expect(escapeHtml('&')).toBe('&amp;')
    expect(escapeHtml('<')).toBe('&lt;')
    expect(escapeHtml('>')).toBe('&gt;')
    expect(escapeHtml('"')).toBe('&quot;')
    expect(escapeHtml("'")).toBe('&#039;')
  })

  it('should escape multiple special characters', () => {
    const input = '<script>alert("XSS & malicious")</script>'
    const expected = '&lt;script&gt;alert(&quot;XSS &amp; malicious&quot;)&lt;/script&gt;'
    expect(escapeHtml(input)).toBe(expected)
  })

  it('should handle normal text without changes', () => {
    const input = 'Hello World 123'
    expect(escapeHtml(input)).toBe(input)
  })

  it('should handle empty string', () => {
    expect(escapeHtml('')).toBe('')
  })

  it('should handle mixed content', () => {
    const input = 'Price: $100 & "free" shipping'
    const expected = 'Price: $100 &amp; &quot;free&quot; shipping'
    expect(escapeHtml(input)).toBe(expected)
  })
})

describe('validateDietProfile', () => {
  it('should validate a correct profile', () => {
    const profile = {
      age: 25,
      weight: 70,
      height: 175,
      mealsPerDay: 3,
      goals: ['weight-loss', 'muscle-gain'],
      allergies: ['peanuts'],
      healthConditions: ['diabetes'],
    }
    const result = validateDietProfile(profile)
    expect(result.valid).toBe(true)
    expect(result.error).toBeUndefined()
  })

  it('should reject non-object input', () => {
    expect(validateDietProfile(null).valid).toBe(false)
    expect(validateDietProfile(undefined).valid).toBe(false)
    expect(validateDietProfile('string').valid).toBe(false)
    expect(validateDietProfile(123).valid).toBe(false)
  })

  it('should reject invalid age values', () => {
    expect(validateDietProfile({ age: -5 }).valid).toBe(false)
    expect(validateDietProfile({ age: 1001 }).valid).toBe(false)
    expect(validateDietProfile({ age: NaN }).valid).toBe(false)
  })

  it('should reject invalid weight values', () => {
    expect(validateDietProfile({ weight: -10 }).valid).toBe(false)
    expect(validateDietProfile({ weight: 1001 }).valid).toBe(false)
  })

  it('should reject invalid height values', () => {
    expect(validateDietProfile({ height: -5 }).valid).toBe(false)
    expect(validateDietProfile({ height: 1001 }).valid).toBe(false)
  })

  it('should reject invalid mealsPerDay values', () => {
    expect(validateDietProfile({ mealsPerDay: -1 }).valid).toBe(false)
    expect(validateDietProfile({ mealsPerDay: 1001 }).valid).toBe(false)
  })

  it('should reject non-array goals', () => {
    const result = validateDietProfile({ goals: 'weight-loss' })
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Goals must be an array')
  })

  it('should reject non-array allergies', () => {
    const result = validateDietProfile({ allergies: 'peanuts' })
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Allergies must be an array')
  })

  it('should reject non-array healthConditions', () => {
    const result = validateDietProfile({ healthConditions: 'diabetes' })
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Health conditions must be an array')
  })

  it('should accept empty profile object', () => {
    const result = validateDietProfile({})
    expect(result.valid).toBe(true)
  })

  it('should accept profile with only some fields', () => {
    const result = validateDietProfile({ age: 30, goals: ['fitness'] })
    expect(result.valid).toBe(true)
  })

  it('should accept valid numeric boundaries', () => {
    const profile = { age: 0, weight: 0, height: 0, mealsPerDay: 0 }
    expect(validateDietProfile(profile).valid).toBe(true)
  })

  it('should accept maximum valid values', () => {
    const profile = { age: 1000, weight: 1000, height: 1000, mealsPerDay: 1000 }
    expect(validateDietProfile(profile).valid).toBe(true)
  })
})

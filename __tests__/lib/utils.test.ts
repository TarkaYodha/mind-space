import { describe, expect, it } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn (className utility)', () => {
  it('should merge class names', () => {
    const result = cn('px-4', 'py-2')
    expect(result).toBe('px-4 py-2')
  })

  it('should handle conditional classes', () => {
    const isActive = true
    const result = cn('base-class', isActive && 'active-class')
    expect(result).toBe('base-class active-class')
  })

  it('should filter out falsy values', () => {
    const result = cn('class1', false, 'class2', null, undefined, 'class3')
    expect(result).toBe('class1 class2 class3')
  })

  it('should merge Tailwind classes correctly', () => {
    // Later classes should override earlier ones
    const result = cn('px-4 py-2', 'px-8')
    expect(result).toContain('px-8')
    expect(result).not.toContain('px-4')
    expect(result).toContain('py-2')
  })

  it('should handle empty input', () => {
    const result = cn()
    expect(result).toBe('')
  })

  it('should handle arrays of classes', () => {
    const result = cn(['class1', 'class2'], 'class3')
    expect(result).toBe('class1 class2 class3')
  })

  it('should handle objects with boolean values', () => {
    const result = cn({
      class1: true,
      class2: false,
      class3: true,
    })
    expect(result).toContain('class1')
    expect(result).not.toContain('class2')
    expect(result).toContain('class3')
  })

  it('should handle complex Tailwind class conflicts', () => {
    const result = cn('bg-red-500 text-white', 'bg-blue-500')
    expect(result).toContain('bg-blue-500')
    expect(result).not.toContain('bg-red-500')
    expect(result).toContain('text-white')
  })

  it('should handle responsive modifiers', () => {
    const result = cn('px-4 md:px-8 lg:px-12')
    expect(result).toBe('px-4 md:px-8 lg:px-12')
  })

  it('should merge hover and focus states correctly', () => {
    const result = cn('hover:bg-blue-500', 'hover:bg-red-500')
    expect(result).toContain('hover:bg-red-500')
    expect(result).not.toContain('hover:bg-blue-500')
  })

  it('should handle dark mode classes', () => {
    const result = cn('bg-white dark:bg-black', 'text-gray-900 dark:text-white')
    expect(result).toBe('bg-white dark:bg-black text-gray-900 dark:text-white')
  })

  it('should deduplicate identical classes', () => {
    const result = cn('px-4', 'px-4', 'py-2')
    expect(result).toBe('px-4 py-2')
  })

  it('should handle state variants properly', () => {
    const isLoading = true
    const isError = false
    const result = cn(
      'button',
      isLoading && 'opacity-50 cursor-not-allowed',
      isError && 'border-red-500',
    )
    expect(result).toContain('button')
    expect(result).toContain('opacity-50')
    expect(result).toContain('cursor-not-allowed')
    expect(result).not.toContain('border-red-500')
  })

  it('should handle nested arrays and objects', () => {
    const result = cn(
      'base',
      ['array1', 'array2'],
      {
        obj1: true,
        obj2: false,
      },
      'final',
    )
    expect(result).toContain('base')
    expect(result).toContain('array1')
    expect(result).toContain('array2')
    expect(result).toContain('obj1')
    expect(result).not.toContain('obj2')
    expect(result).toContain('final')
  })

  it('should handle arbitrary values in Tailwind', () => {
    const result = cn('bg-[#1234567]', 'bg-[#abcdef]')
    expect(result).toContain('bg-[#abcdef]')
    expect(result).not.toContain('bg-[#1234567]')
  })

  it('should preserve important modifier', () => {
    const result = cn('!text-red-500', 'text-blue-500')
    expect(result).toContain('!text-red-500')
    expect(result).toContain('text-blue-500')
  })

  it('should handle multiple responsive breakpoints', () => {
    const result = cn('w-full', 'sm:w-1/2', 'md:w-1/3', 'lg:w-1/4', 'xl:w-1/5')
    expect(result).toBe('w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5')
  })

  it('should handle peer and group modifiers', () => {
    const result = cn('peer-checked:bg-blue-500', 'group-hover:text-white')
    expect(result).toBe('peer-checked:bg-blue-500 group-hover:text-white')
  })

  it('should work with shadcn/ui variant patterns', () => {
    const variant = 'destructive'
    const size = 'lg'
    const result = cn(
      'button-base',
      variant === 'destructive' && 'bg-red-500 text-white',
      size === 'lg' && 'px-8 py-4 text-lg',
    )
    expect(result).toContain('button-base')
    expect(result).toContain('bg-red-500')
    expect(result).toContain('text-white')
    expect(result).toContain('px-8')
    expect(result).toContain('py-4')
    expect(result).toContain('text-lg')
  })
})

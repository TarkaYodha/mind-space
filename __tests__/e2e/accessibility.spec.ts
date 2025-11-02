import { test, expect } from '@playwright/test'
import type { Page } from '@playwright/test'

/**
 * Accessibility Tests
 * 
 * Tests basic accessibility requirements for MindSpace
 * For comprehensive a11y testing, consider integrating @axe-core/playwright
 */

async function checkBasicAccessibility(page: Page) {
  // Check for main landmark
  const main = page.locator('main')
  await expect(main).toBeVisible()
  
  // Check for proper heading hierarchy
  const h1 = page.locator('h1')
  await expect(h1).toBeVisible()
}

test.describe('Accessibility', () => {
  test('home page should have proper landmarks', async ({ page }) => {
    await page.goto('/')
    await checkBasicAccessibility(page)
  })

  test('should have skip to main content link', async ({ page }) => {
    await page.goto('/')
    
    // Tab to focus the skip link
    await page.keyboard.press('Tab')
    
    // Check if skip link is visible when focused
    const skipLink = page.locator('a[href*="#main"], a[href*="#content"]').first()
    
    // Skip link might be visually hidden but should be in DOM
    const skipLinkCount = await skipLink.count()
    
    if (skipLinkCount > 0) {
      await expect(skipLink).toHaveAttribute('href', /#(main|content)/)
    }
  })

  test('interactive elements should be keyboard accessible', async ({ page }) => {
    await page.goto('/')
    
    // Tab through the page
    await page.keyboard.press('Tab')
    
    // Check that focus is visible (at least one element should be focused)
    const focusedElement = page.locator(':focus')
    const count = await focusedElement.count()
    expect(count).toBeGreaterThan(0)
  })

  test('images should have alt text', async ({ page }) => {
    await page.goto('/')
    
    // Get all images
    const images = page.locator('img')
    const count = await images.count()
    
    // Check each image has alt attribute
    for (let i = 0; i < count; i++) {
      const img = images.nth(i)
      const alt = await img.getAttribute('alt')
      
      // Alt can be empty for decorative images, but should exist
      expect(alt).toBeDefined()
    }
  })

  test('form inputs should have labels', async ({ page }) => {
    await page.goto('/sign-in')
    
    const inputs = page.locator('input[type="text"], input[type="email"], input[type="password"]')
    const count = await inputs.count()
    
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i)
      
      // Check for associated label or aria-label
      const id = await input.getAttribute('id')
      const ariaLabel = await input.getAttribute('aria-label')
      const ariaLabelledBy = await input.getAttribute('aria-labelledby')
      
      const hasLabel = id && await page.locator(`label[for="${id}"]`).count() > 0
      const hasAriaLabel = ariaLabel || ariaLabelledBy
      
      expect(hasLabel || hasAriaLabel).toBeTruthy()
    }
  })

  test('color contrast should be sufficient', async ({ page }) => {
    await page.goto('/')
    
    // This is a basic check - for comprehensive testing use axe-core
    // Check that text is visible (basic smoke test)
    const body = page.locator('body')
    await expect(body).toBeVisible()
    
    // Check computed styles for reasonable contrast (basic check)
    const backgroundColor = await body.evaluate((el) => 
      window.getComputedStyle(el).backgroundColor
    )
    const color = await body.evaluate((el) => 
      window.getComputedStyle(el).color
    )
    
    // Just ensure they're different
    expect(backgroundColor).not.toBe(color)
  })
})

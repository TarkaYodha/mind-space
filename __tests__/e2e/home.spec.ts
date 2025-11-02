import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load the home page successfully', async ({ page }) => {
    await page.goto('/')
    
    // Check that the page loads
    await expect(page).toHaveTitle(/MindSpace/)
    
    // Check for main heading or content
    const heading = page.getByRole('heading', { level: 1 })
    await expect(heading).toBeVisible()
  })

  test('should have navigation menu', async ({ page }) => {
    await page.goto('/')
    
    // Check for navigation links
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()
  })

  test('should have sign in button', async ({ page }) => {
    await page.goto('/')
    
    // Look for sign in link or button
    const signInButton = page.getByRole('link', { name: /sign in/i })
    await expect(signInButton).toBeVisible()
  })

  test('should be responsive on mobile', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    // Page should still be accessible
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })
})

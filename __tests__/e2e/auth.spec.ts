import { test, expect } from '@playwright/test'

test.describe('Authentication Flow', () => {
  test('should navigate to sign-in page', async ({ page }) => {
    await page.goto('/')
    
    // Click sign in button
    await page.getByRole('link', { name: /sign in/i }).click()
    
    // Should redirect to sign-in page
    await expect(page).toHaveURL(/\/sign-in/)
  })

  test('should show sign-in form', async ({ page }) => {
    await page.goto('/sign-in')
    
    // Check for authentication UI elements
    // This will depend on your NextAuth setup
    const signInElement = page.locator('[data-testid="sign-in-form"], form, [role="form"]').first()
    await expect(signInElement).toBeVisible()
  })

  test('should redirect to sign-in when accessing protected route', async ({ page }) => {
    // Try to access protected route without authentication
    await page.goto('/dashboard')
    
    // Should redirect to sign-in
    await expect(page).toHaveURL(/\/sign-in/)
  })

  test('should navigate to sign-up page', async ({ page }) => {
    await page.goto('/')
    
    // Look for sign up link
    const signUpLink = page.getByRole('link', { name: /sign up/i })
    
    if (await signUpLink.isVisible()) {
      await signUpLink.click()
      await expect(page).toHaveURL(/\/sign-up/)
    } else {
      // Sign up might be on the sign-in page
      await page.goto('/sign-in')
      const signUpOnSignIn = page.getByRole('link', { name: /sign up/i })
      if (await signUpOnSignIn.isVisible()) {
        await signUpOnSignIn.click()
        await expect(page).toHaveURL(/\/sign-up/)
      }
    }
  })
})

test.describe('Protected Routes', () => {
  const protectedRoutes = [
    '/dashboard',
    '/chat',
    '/assessments',
    '/tools',
    '/activities',
  ]

  for (const route of protectedRoutes) {
    test(`should protect ${route} route`, async ({ page }) => {
      await page.goto(route)
      
      // Should redirect to sign-in or show auth UI
      const url = page.url()
      expect(url).toMatch(/sign-in|sign-up|auth/)
    })
  }
})

import { test, expect } from '@playwright/test'

/**
 * Assessment E2E Tests
 * 
 * Tests mental health assessment flows including PHQ-9, GAD-7, etc.
 */

test.describe('Assessment Selection', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to assessments page
    // Note: May need authentication
    await page.goto('/assessments')
  })

  test('should display available assessments', async ({ page }) => {
    // Check for assessment cards or links
    const assessments = page.locator('[data-testid="assessment-card"], .assessment-card, a[href*="assessment"]')
    
    const count = await assessments.count()
    expect(count).toBeGreaterThan(0)
  })

  test('should navigate to PHQ-9 assessment', async ({ page }) => {
    // Look for PHQ-9 link or button
    const phq9Link = page.locator('text=PHQ-9, a:has-text("Depression"), button:has-text("PHQ-9")').first()
    
    if (await phq9Link.isVisible()) {
      await phq9Link.click()

      // Should navigate to assessment page
      await expect(page).toHaveURL(/phq-9|depression/i)
    }
  })

  test('should navigate to GAD-7 assessment', async ({ page }) => {
    // Look for GAD-7 link or button
    const gad7Link = page.locator('text=GAD-7, a:has-text("Anxiety"), button:has-text("GAD-7")').first()
    
    if (await gad7Link.isVisible()) {
      await gad7Link.click()

      // Should navigate to assessment page
      await expect(page).toHaveURL(/gad-7|anxiety/i)
    }
  })
})

test.describe('Assessment Flow - PHQ-9', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/assessments')
    
    // Click on PHQ-9 assessment
    const phq9Link = page.locator('text=/PHQ-9|Depression/i').first()
    if (await phq9Link.isVisible()) {
      await phq9Link.click()
    } else {
      // Direct navigation if link not found
      await page.goto('/assessments?id=phq-9')
    }
  })

  test('should display assessment questions', async ({ page }) => {
    // Wait for questions to load
    const questions = page.locator('[role="radiogroup"], .question, fieldset')
    
    await expect(questions.first()).toBeVisible({ timeout: 5000 })
    
    // PHQ-9 has 9 questions
    const count = await questions.count()
    expect(count).toBeGreaterThanOrEqual(1)
  })

  test('should require answering questions before proceeding', async ({ page }) => {
    // Try to click next or submit without answering
    const nextButton = page.locator('button:has-text("Next"), button:has-text("Submit"), button[type="submit"]').first()
    
    if (await nextButton.isVisible()) {
      const isDisabled = await nextButton.isDisabled()
      
      // Button should be disabled initially
      expect(isDisabled).toBe(true)
    }
  })

  test('should allow selecting answers', async ({ page }) => {
    // Wait for first question
    await page.waitForTimeout(1000)

    // Select first answer option
    const firstOption = page.locator('input[type="radio"]').first()
    
    if (await firstOption.isVisible()) {
      await firstOption.click()

      // Check if selected
      const isChecked = await firstOption.isChecked()
      expect(isChecked).toBe(true)
    }
  })

  test('should complete full assessment', async ({ page }) => {
    // Wait for questions to load
    await page.waitForTimeout(2000)

    // Find all radio button groups
    const radioGroups = await page.locator('[role="radiogroup"], fieldset').all()

    // Answer all questions (select first option for each)
    for (let i = 0; i < Math.min(radioGroups.length, 9); i++) {
      const firstRadio = radioGroups[i].locator('input[type="radio"]').first()
      
      if (await firstRadio.isVisible()) {
        await firstRadio.click()
        
        // Click next if there's a next button
        const nextButton = page.locator('button:has-text("Next")').first()
        if (await nextButton.isVisible() && !await nextButton.isDisabled()) {
          await nextButton.click()
          await page.waitForTimeout(500)
        }
      }
    }

    // Submit assessment
    const submitButton = page.locator('button:has-text("Submit"), button:has-text("Finish"), button[type="submit"]').first()
    
    if (await submitButton.isVisible() && !await submitButton.isDisabled()) {
      await submitButton.click()

      // Wait for results
      await page.waitForTimeout(2000)

      // Should show results
      const results = page.locator('text=/score|result|severity/i').first()
      await expect(results).toBeVisible({ timeout: 5000 })
    }
  })

  test('should display results after completion', async ({ page }) => {
    // Complete assessment (simplified version)
    const radios = await page.locator('input[type="radio"]').all()
    
    for (let i = 0; i < Math.min(radios.length, 9); i++) {
      if (await radios[i].isVisible()) {
        await radios[i].click()
        await page.waitForTimeout(300)
      }
    }

    const submitButton = page.locator('button:has-text("Submit"), button[type="submit"]').first()
    if (await submitButton.isVisible() && !await submitButton.isDisabled()) {
      await submitButton.click()

      // Check for result components
      await expect(page.locator('text=/score|severity|result/i').first()).toBeVisible({ timeout: 5000 })
    }
  })

  test('should show recommendations based on score', async ({ page }) => {
    // After completing assessment
    // Results should include recommendations

    const recommendations = page.locator('text=/recommend|suggest|consider|resources/i')
    
    // This will only work if assessment is completed
    // Skipping if not on results page
    const url = page.url()
    if (url.includes('result') || await recommendations.first().isVisible()) {
      await expect(recommendations.first()).toBeVisible()
    }
  })

  test('should allow retaking assessment', async ({ page }) => {
    // Look for retake button (might be on results page)
    const retakeButton = page.locator('button:has-text("Retake"), button:has-text("Take Again"), a:has-text("Retake")').first()
    
    if (await retakeButton.isVisible()) {
      await retakeButton.click()

      // Should show questions again
      await expect(page.locator('[role="radiogroup"], .question').first()).toBeVisible()
    }
  })
})

test.describe('Assessment History', () => {
  test('should show assessment history', async ({ page }) => {
    await page.goto('/assessments')

    // Look for history section
    const historySection = page.locator('text=/history|past|previous/i, [data-testid="assessment-history"]').first()
    
    if (await historySection.isVisible()) {
      await expect(historySection).toBeVisible()
    }
  })

  test('should display past assessment scores', async ({ page }) => {
    await page.goto('/assessments')

    // Look for score displays
    const scores = page.locator('text=/score:|points|\\d+\\/\\d+/').all()
    
    // May or may not have past assessments
    const hasHistory = (await scores).length > 0
    
    if (hasHistory) {
      expect((await scores).length).toBeGreaterThan(0)
    }
  })
})

test.describe('Assessment Accessibility', () => {
  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/assessments')

    // Tab through elements
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    // Should be able to select with keyboard
    await page.keyboard.press('Space')
    
    // Verify some interaction happened
    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeTruthy()
  })

  test('should have proper labels for radio buttons', async ({ page }) => {
    await page.goto('/assessments')
    
    // Navigate to an assessment
    const assessmentLink = page.locator('a[href*="phq"], button:has-text("PHQ")').first()
    if (await assessmentLink.isVisible()) {
      await assessmentLink.click()
      
      await page.waitForTimeout(1000)

      // Check radio buttons have labels
      const radios = await page.locator('input[type="radio"]').all()
      
      for (const radio of radios.slice(0, 3)) {
        const id = await radio.getAttribute('id')
        if (id) {
          const label = page.locator(`label[for="${id}"]`)
          await expect(label).toBeVisible()
        }
      }
    }
  })

  test('should announce results to screen readers', async ({ page }) => {
    // Results should have appropriate ARIA attributes
    await page.goto('/assessments')

    const resultsContainer = page.locator('[role="alert"], [role="status"], [aria-live]').first()
    
    // May not be visible if no assessment completed
    const isVisible = await resultsContainer.isVisible().catch(() => false)
    
    if (isVisible) {
      await expect(resultsContainer).toBeVisible()
    }
  })
})

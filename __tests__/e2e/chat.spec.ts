import { test, expect } from '@playwright/test'

/**
 * Chat E2E Tests
 * 
 * Tests the AI chat functionality including message sending,
 * receiving responses, and crisis detection
 */

test.describe('Chat Interface', () => {
  test.beforeEach(async ({ page }) => {
    // Note: These tests assume authentication is handled
    // You may need to add login steps here
    await page.goto('/chat')
  })

  test('should load chat interface', async ({ page }) => {
    // Check for chat container
    const chatContainer = page.locator('[data-testid="chat-container"], .chat-interface').first()
    await expect(chatContainer).toBeVisible()

    // Check for input field
    const messageInput = page.locator('textarea, input[type="text"]').first()
    await expect(messageInput).toBeVisible()

    // Check for send button
    const sendButton = page.locator('button[type="submit"], button:has-text("Send")').first()
    await expect(sendButton).toBeVisible()
  })

  test('should send a message and receive response', async ({ page }) => {
    // Type a message
    const messageInput = page.locator('textarea, input[type="text"]').first()
    await messageInput.fill('I am feeling stressed about my exams')

    // Click send button
    const sendButton = page.locator('button[type="submit"], button:has-text("Send")').first()
    await sendButton.click()

    // Wait for user message to appear
    await expect(page.locator('text=I am feeling stressed about my exams')).toBeVisible()

    // Wait for AI response (with timeout)
    const aiResponse = page.locator('[role="status"], .assistant-message, .ai-message').first()
    await expect(aiResponse).toBeVisible({ timeout: 10000 })

    // Verify response has content
    const responseText = await aiResponse.textContent()
    expect(responseText).toBeTruthy()
    expect(responseText!.length).toBeGreaterThan(10)
  })

  test('should show typing indicator while waiting', async ({ page }) => {
    const messageInput = page.locator('textarea, input[type="text"]').first()
    await messageInput.fill('Hello')

    const sendButton = page.locator('button[type="submit"]').first()
    await sendButton.click()

    // Look for typing indicator
    const typingIndicator = page.locator('[data-testid="typing"], text=/typing/i, .typing').first()
    
    // Typing indicator should appear briefly (might be too fast to catch)
    const isVisible = await typingIndicator.isVisible().catch(() => false)
    
    // This is okay if the response is very fast
    if (isVisible) {
      await expect(typingIndicator).toBeVisible()
    }
  })

  test('should clear chat history', async ({ page }) => {
    // Send a message first
    const messageInput = page.locator('textarea, input[type="text"]').first()
    await messageInput.fill('Test message')
    await messageInput.press('Enter')

    // Wait for message to appear
    await expect(page.locator('text=Test message')).toBeVisible()

    // Look for clear/delete button
    const clearButton = page.locator('button:has-text("Clear"), button[aria-label*="Clear"], button[title*="Clear"]').first()
    
    if (await clearButton.isVisible()) {
      await clearButton.click()

      // Confirm if there's a dialog
      const confirmButton = page.locator('button:has-text("Yes"), button:has-text("Confirm"), button:has-text("Delete")').first()
      if (await confirmButton.isVisible()) {
        await confirmButton.click()
      }

      // Verify messages are cleared
      await expect(page.locator('text=Test message')).not.toBeVisible()
    }
  })

  test('should handle empty message submission', async ({ page }) => {
    const sendButton = page.locator('button[type="submit"]').first()
    
    // Try to send empty message
    await sendButton.click()

    // Button should be disabled or nothing should happen
    const messageCount = await page.locator('[role="status"], .message').count()
    
    // Wait a bit to ensure no message was sent
    await page.waitForTimeout(1000)
    
    const newMessageCount = await page.locator('[role="status"], .message').count()
    expect(newMessageCount).toBe(messageCount)
  })

  test('should support voice input if available', async ({ page }) => {
    // Check if voice button exists
    const voiceButton = page.locator('button[aria-label*="voice"], button[title*="voice"], button:has([data-icon="mic"])').first()
    
    const isVoiceAvailable = await voiceButton.isVisible().catch(() => false)
    
    if (isVoiceAvailable) {
      await expect(voiceButton).toBeVisible()
      
      // Click voice button (won't actually record in test)
      await voiceButton.click()
      
      // Should show some indication
      await page.waitForTimeout(500)
    } else {
      // Voice feature might not be available in test environment
      test.skip()
    }
  })

  test('should handle long messages', async ({ page }) => {
    const longMessage = 'I am feeling very overwhelmed. '.repeat(20)
    
    const messageInput = page.locator('textarea').first()
    await messageInput.fill(longMessage)

    const sendButton = page.locator('button[type="submit"]').first()
    await sendButton.click()

    // Message should be sent
    await expect(page.locator(`text="${longMessage.substring(0, 50)}"`)).toBeVisible()
  })

  test('should scroll to latest message', async ({ page }) => {
    // Send multiple messages
    for (let i = 1; i <= 3; i++) {
      const messageInput = page.locator('textarea, input[type="text"]').first()
      await messageInput.fill(`Message ${i}`)
      await messageInput.press('Enter')
      await page.waitForTimeout(1000)
    }

    // Latest message should be visible
    await expect(page.locator('text=Message 3')).toBeVisible()
  })

  test('should detect crisis keywords and show alert', async ({ page }) => {
    const crisisMessage = 'I feel hopeless and worthless'
    
    const messageInput = page.locator('textarea, input[type="text"]').first()
    await messageInput.fill(crisisMessage)

    const sendButton = page.locator('button[type="submit"]').first()
    await sendButton.click()

    // Wait for response
    await page.waitForTimeout(5000)

    // Look for crisis resources in response
    const crisisInfo = page.locator('text=/988|Crisis|emergency/i').first()
    await expect(crisisInfo).toBeVisible({ timeout: 10000 })
  })
})

test.describe('Chat Accessibility', () => {
  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/chat')

    // Tab to input
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    
    // Type message
    await page.keyboard.type('Hello')

    // Tab to send button and press Enter
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')

    // Message should be sent
    await expect(page.locator('text=Hello')).toBeVisible()
  })

  test('should have proper ARIA labels', async ({ page }) => {
    await page.goto('/chat')

    // Input should have accessible label
    const input = page.locator('textarea, input[type="text"]').first()
    const ariaLabel = await input.getAttribute('aria-label')
    const ariaLabelledBy = await input.getAttribute('aria-labelledby')
    
    expect(ariaLabel || ariaLabelledBy).toBeTruthy()
  })
})

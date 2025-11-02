/**
 * Root tRPC Router
 *
 * Combines all sub-routers into the main app router
 */

import { router } from '../trpc'
import { assessmentRouter } from './assessment'
import { chatRouter } from './chat'
import { chatHistoryRouter } from './chat-history'
import { moodRouter } from './mood'
import { streamingChatRouter } from './chat-streaming'

/**
 * Main application router
 * Add new routers here as they are created
 */
export const appRouter = router({
  chat: chatRouter,
  chatStreaming: streamingChatRouter,
  chatHistory: chatHistoryRouter,
  mood: moodRouter,
  assessment: assessmentRouter,
})

/**
 * Export type definition of API for client
 */
export type AppRouter = typeof appRouter

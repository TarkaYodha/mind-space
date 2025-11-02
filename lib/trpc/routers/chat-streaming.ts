/**
 * Streaming Chat Router (tRPC + Vercel AI SDK)
 *
 * Handles AI chat with streaming responses for better UX
 */

import { google } from '@ai-sdk/google'
import { streamText } from 'ai'
import { z } from 'zod'
import { TRPCError } from '@trpc/server'
import { router, protectedProcedure } from '../trpc'
import { validateMessage } from '@/lib/security'
import { chatHistory } from '@/lib/db/schema'

// Mental health focused system prompt
const SYSTEM_PROMPT = `You are a compassionate AI mental health assistant specifically designed for college students. Your role is to provide empathetic, evidence-based support while maintaining appropriate boundaries.

CORE GUIDELINES:
- Be warm, empathetic, and non-judgmental in every response
- Use active listening techniques and validate emotions genuinely
- Ask thoughtful open-ended questions to encourage deeper sharing
- Suggest evidence-based coping strategies appropriate for college students
- Focus on common college stressors: academics, social pressures, financial stress, future anxiety, identity exploration
- Encourage professional help when situations exceed peer support levels
- NEVER provide medical advice, diagnoses, or medication recommendations

CRISIS DETECTION & RESPONSE:
- Watch carefully for expressions of suicidal ideation, self-harm intentions, or immediate danger
- If crisis language is detected, acknowledge their pain with empathy and guide to immediate professional resources
- Always prioritize safety over continuing the conversation
- Be direct but compassionate about the need for professional intervention

COMMUNICATION STYLE:
- Keep responses concise but thoughtful (2-4 sentences typically, longer when needed for crisis situations)
- Use validating language: "That sounds incredibly difficult", "It makes complete sense you'd feel that way", "Your feelings are completely valid"
- Avoid clinical jargon; use accessible, relatable language that resonates with college students
- Ask follow-up questions that show genuine interest in understanding their specific situation
- Reflect back what you hear to show you're truly listening

MENTAL HEALTH FOCUS AREAS:
- Anxiety and stress management techniques
- Depression symptoms and coping strategies  
- Sleep hygiene and academic stress
- Social anxiety and relationship concerns
- Homesickness and adjustment issues
- Imposter syndrome and self-worth
- Healthy boundaries and self-care
- Time management and overwhelm

Remember: You're a supportive companion and first line of support, not a replacement for professional mental health care. Your goal is to provide immediate comfort, practical coping strategies, and appropriate referrals when needed.`

// Crisis keywords for detection
const CRISIS_KEYWORDS = [
  'suicide',
  'kill myself',
  'end it all',
  'want to die',
  'better off dead',
  'self-harm',
  'hurt myself',
  'cut myself',
  'harm myself',
  'give up',
  'no reason to live',
  'hopeless',
  'worthless',
  'overdose',
  'pills',
  'jump',
  'bridge',
]

/**
 * Detect crisis language in message
 */
function detectCrisis(message: string): boolean {
  const lowerMessage = message.toLowerCase()
  return CRISIS_KEYWORDS.some((keyword) => lowerMessage.includes(keyword.toLowerCase()))
}

/**
 * Get AI model - Using only Gemini 2.0 Flash
 */
function getAIModel() {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY

  if (!GEMINI_API_KEY) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'GEMINI_API_KEY not configured. Please set it in your environment variables.',
    })
  }

  // Use Gemini 2.5 Flash (Stable - Production Ready)
  return google('gemini-2.5-flash')
}

export const streamingChatRouter = router({
  /**
   * Send a message with streaming response
   */
  sendMessageStream: protectedProcedure
    .input(
      z.object({
        message: z.string().min(1).max(10000),
        sessionId: z.string().uuid().optional(),
        conversationHistory: z
          .array(
            z.object({
              role: z.enum(['user', 'assistant']),
              content: z.string(),
            }),
          )
          .optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Validate and sanitize message
      const validation = validateMessage(input.message)
      if (!validation.valid) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: validation.error || 'Invalid message',
        })
      }

      const sanitizedMessage = validation.sanitized || ''
      const hasCrisisContent = detectCrisis(sanitizedMessage)

      try {
        const model = getAIModel()

        // Build conversation history
        const messages = [
          { role: 'system' as const, content: SYSTEM_PROMPT },
          ...(input.conversationHistory || []),
          { role: 'user' as const, content: sanitizedMessage },
        ]

        // Generate streaming response
        const result = await streamText({
          model,
          messages,
          temperature: 0.7,
        })

        // Collect full response for storage
        let fullResponse = ''
        for await (const textPart of result.textStream) {
          fullResponse += textPart
        }

        // Add crisis resources if needed
        let finalResponse = fullResponse
        if (hasCrisisContent) {
          finalResponse +=
            "\n\n🚨 I'm concerned about your safety. Please reach out for immediate help:\n• Call 988 (Suicide & Crisis Lifeline)\n• Text HOME to 741741 (Crisis Text Line)\n• Visit your nearest emergency room\n• Contact campus counseling services"
        }

        // Save to database if sessionId provided
        if (input.sessionId) {
          try {
            await ctx.db.insert(chatHistory).values({
              userId: ctx.session.user.id!,
              sessionId: input.sessionId,
              message: sanitizedMessage,
              response: finalResponse,
              isEmergency: hasCrisisContent,
              crisisKeywords: hasCrisisContent
                ? CRISIS_KEYWORDS.filter((k) =>
                    sanitizedMessage.toLowerCase().includes(k.toLowerCase()),
                  )
                : undefined,
            })
          } catch (error) {
            console.error('Failed to save chat to database:', error)
          }
        }

        return {
          response: finalResponse,
          hasCrisisContent,
          service: 'gemini-2.5-flash',
        }
      } catch (error) {
        console.error('Streaming chat error:', error)

        if (error instanceof TRPCError) throw error

        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to generate AI response',
          cause: error,
        })
      }
    }),
})

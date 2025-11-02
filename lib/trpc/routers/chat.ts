/**
 * Chat Router (tRPC)
 *
 * Handles AI chat interactions with Google Gemini and OpenAI fallback
 */

import { z } from 'zod'
import { TRPCError } from '@trpc/server'
import { router, protectedProcedure } from '../trpc'
import { validateMessage } from '@/lib/security'
import { db } from '@/lib/db/client'
import { chatHistory } from '@/lib/db/schema'

// AI Service Configuration - Using only Gemini 2.5 Flash (Stable)
const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const GEMINI_MODEL = 'gemini-2.5-flash'
const GEMINI_BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`

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
 * Call Google Gemini API
 */
async function callGemini(message: string): Promise<string | null> {
  if (!GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY not configured')
    return null
  }

  try {
    console.log('Using Gemini 2.5 Flash (Stable)...')
    const response = await fetch(`${GEMINI_BASE_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${SYSTEM_PROMPT}\n\nUser message: ${message}`,
              },
            ],
          },
        ],
      }),
    })

    if (response.ok) {
      const completion = await response.json()
      const aiResponse = completion.candidates?.[0]?.content?.parts?.[0]?.text
      console.log('Gemini response successful')
      return aiResponse || null
    }

    console.warn(`Gemini API error: ${response.status}`)
    return null
  } catch (error) {
    console.warn('Gemini failed:', error)
    return null
  }
}

/**
 * Get fallback response when AI service fails
 */
function getFallbackResponse(): string {
  const fallbackResponses = [
    "I understand you're reaching out for support, and I want you to know that's a brave step. While I'm having technical difficulties right now, please know that your feelings are valid and you're not alone.",
    "I'm sorry I'm having connection issues right now. In the meantime, remember that it's normal to feel overwhelmed sometimes, especially as a student. Taking deep breaths and reaching out for support are positive steps.",
    "I appreciate you sharing with me, even though I'm experiencing technical problems. Remember that seeking help is a sign of strength, not weakness. You deserve support and care.",
  ]

  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
}

/**
 * Detect crisis language in message
 */
function detectCrisis(message: string): boolean {
  const lowerMessage = message.toLowerCase()
  return CRISIS_KEYWORDS.some((keyword) => lowerMessage.includes(keyword.toLowerCase()))
}

export const chatRouter = router({
  /**
   * Send a message to the AI assistant
   */
  sendMessage: protectedProcedure
    .input(
      z.object({
        message: z.string().min(1).max(10000),
        sessionId: z.string().uuid().optional(),
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

      // Detect crisis language
      const hasCrisisContent = detectCrisis(sanitizedMessage)

      try {
        // Try Gemini - our only AI service
        let aiResponse = await callGemini(sanitizedMessage)
        let service = 'gemini'

        // Use fallback if Gemini failed
        if (!aiResponse) {
          aiResponse = getFallbackResponse()
          service = 'fallback'
        }

        // Add crisis resources if needed
        let finalResponse = aiResponse
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
            // Don't throw - still return the response
          }
        }

        return {
          response: finalResponse,
          hasCrisisContent,
          service,
        }
      } catch (error) {
        console.error('Chat error:', error)
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to process chat message',
          cause: error,
        })
      }
    }),
})

import { type NextRequest } from 'next/server'
import { streamText } from 'ai'
import { google } from '@ai-sdk/google'
import { auth } from '@/auth'
import { validateMessage } from '@/lib/security'

// Mental health focused system prompt for AI chat
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

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await auth()

    if (!session?.user) {
      return new Response(
        JSON.stringify({ error: 'Authentication required. Please sign in to access AI chat.' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } },
      )
    }

    // Parse and validate request body
    let body: { message?: unknown } = {}
    try {
      body = await request.json()
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid request body' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      )
    }

    const { message } = body

    // Validate and sanitize message
    const validation = validateMessage(message)
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: validation.error || 'Invalid message' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      )
    }

    const sanitizedMessage = validation.sanitized || ''

    // Check for crisis keywords for enhanced detection
    const crisisKeywords = [
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

    const containsCrisisLanguage = crisisKeywords.some((keyword) =>
      sanitizedMessage.toLowerCase().includes(keyword.toLowerCase()),
    )

    // Add crisis warning to system prompt if needed
    const systemPrompt = containsCrisisLanguage
      ? `${SYSTEM_PROMPT}\n\n⚠️ IMPORTANT: Crisis language detected. After your empathetic response, include crisis resources.`
      : SYSTEM_PROMPT

    // Check if API key is configured
    if (!process.env.GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY not configured')
      return new Response(
        JSON.stringify({
          response:
            "Hello! I'm here to support you. While I'm experiencing some technical difficulties (AI service not configured), I want you to know that you're taking a positive step by reaching out. If you're in crisis, please call 988 (Suicide & Crisis Lifeline) immediately.",
          hasCrisisContent: containsCrisisLanguage,
          service: 'fallback',
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      )
    }

    try {
      console.log('🤖 Streaming response from Gemini 2.5 Flash...')

      // Use Vercel AI SDK for streaming
      const result = await streamText({
        model: google('gemini-2.0-flash-exp'),
        prompt: sanitizedMessage,
        system: systemPrompt,
        temperature: 0.7,
      })

      // Return streaming response
      return result.toTextStreamResponse({
        headers: {
          'X-Crisis-Detected': containsCrisisLanguage ? 'true' : 'false',
        },
      })
    } catch (error) {
      console.error('Gemini streaming error:', error)

      // Fallback to non-streaming response
      return new Response(
        JSON.stringify({
          response:
            "I'm having some technical difficulties right now, but I want you to know I'm here for you. If you're experiencing a crisis, please reach out immediately:\n\n🚨 Call 988 (Suicide & Crisis Lifeline)\n📱 Text HOME to 741741 (Crisis Text Line)\n🏥 Visit your nearest emergency room\n\nYour wellbeing matters.",
          hasCrisisContent: containsCrisisLanguage,
          service: 'fallback',
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      )
    }
  } catch (error) {
    console.error('AI API error:', error)

    // Provide a helpful fallback response for mental health support
    const fallbackResponses = [
      "I understand you're reaching out for support, and I want you to know that's a brave step. While I'm having technical difficulties right now, please know that your feelings are valid and you're not alone.",
      "I'm sorry I'm having connection issues right now. In the meantime, remember that it's normal to feel overwhelmed sometimes, especially as a student. Taking deep breaths and reaching out for support are positive steps.",
      "I appreciate you sharing with me, even though I'm experiencing technical problems. Remember that seeking help is a sign of strength, not weakness. You deserve support and care.",
    ]

    const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]

    return new Response(
      JSON.stringify({
        response: `${randomResponse}\n\nIf you're in crisis, please call 988 (Suicide & Crisis Lifeline) or visit your campus counseling center. You can also try chatting again in a moment.`,
        hasCrisisContent: false,
        service: 'fallback',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    )
  }
}

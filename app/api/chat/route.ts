import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { validateMessage } from '@/lib/security'

// Primary service: Google Gemini
const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const GEMINI_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent'

// Backup service: OpenAI
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const OPENAI_BASE_URL = 'https://api.openai.com/v1'

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
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required. Please sign in to access AI chat.' },
        { status: 401 }
      )
    }

    // Parse and validate request body
    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      )
    }

    const { message } = body

    // Validate and sanitize message
    const validation = validateMessage(message)
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error || 'Invalid message' },
        { status: 400 }
      )
    }

    const sanitizedMessage = validation.sanitized!

    // Check for crisis keywords for enhanced detection
    const crisisKeywords = [
      'suicide', 'kill myself', 'end it all', 'want to die', 'better off dead',
      'self-harm', 'hurt myself', 'cut myself', 'harm myself',
      'give up', 'no reason to live', 'hopeless', 'worthless',
      'overdose', 'pills', 'jump', 'bridge'
    ]
    
    const containsCrisisLanguage = crisisKeywords.some(keyword => 
      sanitizedMessage.toLowerCase().includes(keyword.toLowerCase())
    )

    let aiResponse: string | null = null
    let usedService = 'gemini'

    // Try Gemini first (primary service)
    if (GEMINI_API_KEY) {
      try {
        console.log('Using Gemini as primary service...')
        const response = await fetch(`${GEMINI_BASE_URL}?key=${GEMINI_API_KEY}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are a compassionate AI mental health assistant. Respond helpfully to: ${sanitizedMessage}`
              }]
            }]
          })
        })

        if (response.ok) {
          const completion = await response.json()
          aiResponse = completion.candidates?.[0]?.content?.parts?.[0]?.text
          console.log('Gemini response successful')
        } else {
          console.warn(`Gemini API error: ${response.status}`)
          throw new Error(`Gemini API error: ${response.status}`)
        }
      } catch (error) {
        console.warn('Gemini failed, falling back to OpenAI:', error)
        usedService = 'openai'
      }
    } else if (!aiResponse) {
      usedService = 'openai'
    }

    // Secondary fallback to OpenAI if OpenRouter failed
    if (!aiResponse && OPENAI_API_KEY) {
      try {
        console.log('Using OpenAI as secondary backup service...')
        const response = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini', // Use GPT-4o Mini (cost-effective backup)
            messages: [
              {
                role: 'system',
                content: SYSTEM_PROMPT
              },
              {
                role: 'user',
                content: sanitizedMessage
              }
            ],
            max_tokens: 300,
            temperature: 0.7,
          })
        })

        if (!response.ok) {
          throw new Error(`OpenAI API error: ${response.status}`)
        }

        const completion = await response.json()
        aiResponse = completion.choices[0]?.message?.content
        console.log('OpenAI backup response successful')
      } catch (error) {
        console.error('All AI services failed:', error)
        throw error
      }
    }

    // If all services failed, provide a helpful response
    if (!aiResponse) {
      if (!GEMINI_API_KEY && !OPENAI_API_KEY) {
        console.error('No API keys configured for AI services')
        aiResponse = "Hello! I'm here to support you. While I'm experiencing some technical difficulties with my AI services, I want you to know that you're taking a positive step by reaching out. How are you feeling today?"
      } else {
        console.error('All configured AI services are currently unavailable')
        aiResponse = "I understand you're reaching out for support, and that takes courage. I'm having some connectivity issues right now, but I'm here to listen. What's on your mind today?"
      }
    }

    // If crisis language detected, append crisis resources
    let finalResponse = aiResponse
    if (containsCrisisLanguage) {
      finalResponse += "\n\n🚨 I'm concerned about your safety. Please reach out for immediate help:\n• Call 988 (Suicide & Crisis Lifeline)\n• Text HOME to 741741 (Crisis Text Line)\n• Visit your nearest emergency room\n• Contact campus counseling services"
    }

    return NextResponse.json({
      response: finalResponse,
      hasCrisisContent: containsCrisisLanguage,
      service: usedService
    })

  } catch (error) {
    console.error('AI API error:', error)
    
    // Provide a helpful fallback response for mental health support
    const fallbackResponses = [
      "I understand you're reaching out for support, and I want you to know that's a brave step. While I'm having technical difficulties right now, please know that your feelings are valid and you're not alone.",
      "I'm sorry I'm having connection issues right now. In the meantime, remember that it's normal to feel overwhelmed sometimes, especially as a student. Taking deep breaths and reaching out for support are positive steps.",
      "I appreciate you sharing with me, even though I'm experiencing technical problems. Remember that seeking help is a sign of strength, not weakness. You deserve support and care.",
    ]
    
    const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
    
    return NextResponse.json({
      response: `${randomResponse}\n\nIf you're in crisis, please call 988 (Suicide & Crisis Lifeline) or visit your campus counseling center. You can also try chatting again in a moment.`,
      hasCrisisContent: false,
      service: 'fallback'
    }, { status: 200 }) // Return 200 to avoid breaking the chat flow
  }
}
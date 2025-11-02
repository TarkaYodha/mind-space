/**
 * AI Provider Configuration
 *
 * Centralized configuration for AI services used in mental health support
 */

import { google } from '@ai-sdk/google'
import { openai } from '@ai-sdk/openai'

export const SYSTEM_PROMPT = `You are a compassionate AI mental health assistant specifically designed for college students. Your role is to provide empathetic, evidence-based support while maintaining appropriate boundaries.

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

CRISIS RESOURCES:
If you detect crisis language, always include:
- 988 Suicide & Crisis Lifeline
- Crisis Text Line: Text HOME to 741741
- Campus counseling services
- Emergency room for immediate danger

Remember: You're a supportive companion and first line of support, not a replacement for professional mental health care. Your goal is to provide immediate comfort, practical coping strategies, and appropriate referrals when needed.`

export const CRISIS_KEYWORDS = [
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

export const AI_PROVIDERS = {
  gemini: {
    name: 'Google Gemini',
    model: 'gemini-2.0-flash-exp',
    apiKey: process.env.GEMINI_API_KEY,
    enabled: !!process.env.GEMINI_API_KEY,
    getModel: () => google('gemini-2.0-flash-exp'),
  },
  openai: {
    name: 'OpenAI GPT-4',
    model: 'gpt-4-turbo',
    apiKey: process.env.OPENAI_API_KEY,
    enabled: !!process.env.OPENAI_API_KEY,
    getModel: () => openai('gpt-4-turbo'),
  },
} as const

export const AI_CONFIG = {
  // Primary provider
  primaryProvider: 'gemini' as keyof typeof AI_PROVIDERS,

  // Fallback order
  fallbackOrder: ['gemini', 'openai'] as (keyof typeof AI_PROVIDERS)[],

  // Model parameters
  temperature: 0.7,
  maxRetries: 2,

  // Rate limiting
  maxRequestsPerMinute: 20,
  maxRequestsPerHour: 200,
} as const

/**
 * Get the first available AI provider
 */
export function getAvailableProvider() {
  for (const providerKey of AI_CONFIG.fallbackOrder) {
    const provider = AI_PROVIDERS[providerKey]
    if (provider.enabled) {
      return provider
    }
  }
  return null
}

/**
 * Check if a message contains crisis keywords
 */
export function detectCrisisLanguage(message: string): boolean {
  const lowerMessage = message.toLowerCase()
  return CRISIS_KEYWORDS.some((keyword) => lowerMessage.includes(keyword.toLowerCase()))
}

/**
 * Get system prompt with optional crisis warning
 */
export function getSystemPrompt(hasCrisisLanguage: boolean): string {
  if (hasCrisisLanguage) {
    return `${SYSTEM_PROMPT}\n\n⚠️ IMPORTANT: Crisis language detected. After your empathetic response, include crisis resources.`
  }
  return SYSTEM_PROMPT
}

/**
 * Get crisis resources message
 */
export function getCrisisResourcesMessage(): string {
  return `\n\n🚨 I'm concerned about your safety. Please reach out for immediate help:
• Call 988 (Suicide & Crisis Lifeline)
• Text HOME to 741741 (Crisis Text Line)
• Visit your nearest emergency room
• Contact campus counseling services

Your life matters, and help is available 24/7.`
}

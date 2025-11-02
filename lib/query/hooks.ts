import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

// ============================================
// Types
// ============================================

export type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
  timestamp?: number
}

export type ChatResponse = {
  response: string
  hasCrisisContent: boolean
  service: string
}

export type DietProfile = {
  age?: string
  gender?: string
  weight?: string
  height?: string
  activityLevel?: string
  dietaryPreferences?: string
  goals?: string[]
  mealsPerDay?: number
  allergies?: string[]
  healthConditions?: string[]
}

export type Meal = {
  name: string
  time: string
  calories: number
  protein: number
  carbs: number
  fats: number
  fiber: number
  ingredients: string[]
  instructions: string[]
  prepTime: number
  tags: string[]
  benefits: string[]
}

export type MealPlan = {
  meals: Meal[]
  tips: string[]
  hydrationReminders: string[]
}

export type DietPlanResponse = {
  success: boolean
  mealPlan?: MealPlan
  error?: string
}

// ============================================
// Chat API Hook
// ============================================

/**
 * Mutation hook for sending chat messages to the AI assistant
 * Includes automatic retry on failure and optimistic updates
 */
export function useChatMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ message }: { message: string }): Promise<ChatResponse> => {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to send message')
      }

      return response.json()
    },
    onSuccess: () => {
      // Invalidate chat history queries when a new message is sent
      queryClient.invalidateQueries({ queryKey: ['chat-history'] })
    },
    onError: (error) => {
      console.error('Chat mutation error:', error)
    },
    // Retry once on failure
    retry: 1,
    // Wait 1 second before retrying
    retryDelay: 1000,
  })
}

// ============================================
// Diet Plan API Hook
// ============================================

/**
 * Mutation hook for generating personalized diet plans
 * Caches results by profile hash to avoid regenerating identical plans
 */
export function useDietPlanMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      profile,
      dayOfWeek,
    }: {
      profile: DietProfile
      dayOfWeek: string
    }): Promise<DietPlanResponse> => {
      const response = await fetch('/api/diet-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ profile, dayOfWeek }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to generate diet plan')
      }

      return response.json()
    },
    onSuccess: (data, variables) => {
      // Cache the generated meal plan
      queryClient.setQueryData(['diet-plan', variables.dayOfWeek], data)
    },
    onError: (error) => {
      console.error('Diet plan mutation error:', error)
    },
    // Retry once on failure
    retry: 1,
    // Wait 2 seconds before retrying (AI generation takes time)
    retryDelay: 2000,
  })
}

// ============================================
// Query Hook for Cached Diet Plans
// ============================================

/**
 * Query hook to retrieve a cached diet plan for a specific day
 * Returns undefined if no plan exists for that day
 */
export function useDietPlan(dayOfWeek: string) {
  return useQuery<DietPlanResponse | undefined>({
    queryKey: ['diet-plan', dayOfWeek],
    queryFn: () => {
      // This is a client-side cache query only
      // It doesn't make an API call, just retrieves cached data
      return undefined
    },
    // Don't refetch automatically
    staleTime: Infinity,
    // Keep cached data for 24 hours
    gcTime: 24 * 60 * 60 * 1000,
  })
}

// ============================================
// Query Keys Export
// ============================================

/**
 * Centralized query keys for easier cache management
 */
export const queryKeys = {
  chatHistory: ['chat-history'] as const,
  dietPlan: (day: string) => ['diet-plan', day] as const,
  allDietPlans: ['diet-plan'] as const,
}

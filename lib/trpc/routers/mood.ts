/**
 * Mood Tracking Router
 *
 * Handles mood logging, retrieval, and analytics
 */

import { z } from 'zod'
import { desc, eq, gte, sql } from 'drizzle-orm'
import { TRPCError } from '@trpc/server'
import { router, protectedProcedure } from '../trpc'
import { userMoods } from '@/lib/db/schema'

export const moodRouter = router({
  /**
   * Create a new mood entry
   */
  create: protectedProcedure
    .input(
      z.object({
        mood: z.enum(['happy', 'sad', 'anxious', 'calm', 'stressed', 'neutral', 'excited', 'angry']),
        intensity: z.enum(['low', 'medium', 'high']),
        notes: z.string().max(1000).optional(),
        triggers: z.array(z.string()).max(10).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const result = await ctx.db
          .insert(userMoods)
          .values({
            userId: ctx.session.user.id!,
            mood: input.mood,
            intensity: input.intensity,
            notes: input.notes,
            triggers: input.triggers,
          })
          .returning()

        return {
          success: true,
          mood: result[0],
        }
      } catch (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to create mood entry',
          cause: error,
        })
      }
    }),

  /**
   * Get mood history for the current user
   */
  getHistory: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(30),
        offset: z.number().min(0).default(0),
      }),
    )
    .query(async ({ ctx, input }) => {
      try {
        const moods = await ctx.db
          .select()
          .from(userMoods)
          .where(eq(userMoods.userId, ctx.session.user.id!))
          .orderBy(desc(userMoods.createdAt))
          .limit(input.limit)
          .offset(input.offset)

        return {
          moods,
          hasMore: moods.length === input.limit,
        }
      } catch (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to fetch mood history',
          cause: error,
        })
      }
    }),

  /**
   * Get mood analytics for the current user
   */
  getAnalytics: protectedProcedure
    .input(
      z.object({
        days: z.number().min(1).max(365).default(30),
      }),
    )
    .query(async ({ ctx, input }) => {
      try {
        const startDate = new Date()
        startDate.setDate(startDate.getDate() - input.days)

        const moods = await ctx.db
          .select()
          .from(userMoods)
          .where(
            sql`${userMoods.userId} = ${ctx.session.user.id} AND ${userMoods.createdAt} >= ${startDate}`,
          )
          .orderBy(userMoods.createdAt)

        // Calculate mood distribution
        const moodCounts = moods.reduce(
          (acc: Record<string, number>, mood: any) => {
            acc[mood.mood] = (acc[mood.mood] || 0) + 1
            return acc
          },
          {} as Record<string, number>,
        )

        // Calculate average intensity
        const intensityMap: Record<string, number> = { low: 1, medium: 2, high: 3 }
        const avgIntensity =
          moods.reduce((sum: number, mood: any) => sum + (intensityMap[mood.intensity] || 0), 0) /
            moods.length || 0

        return {
          totalEntries: moods.length,
          moodDistribution: moodCounts,
          averageIntensity: avgIntensity,
          recentMoods: moods.slice(-7), // Last 7 entries
        }
      } catch (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to fetch mood analytics',
          cause: error,
        })
      }
    }),

  /**
   * Delete a mood entry
   */
  delete: protectedProcedure
    .input(
      z.object({
        id: z.string().uuid(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const result = await ctx.db
          .delete(userMoods)
          .where(sql`${userMoods.id} = ${input.id} AND ${userMoods.userId} = ${ctx.session.user.id}`)
          .returning()

        if (result.length === 0) {
          throw new TRPCError({
            code: 'NOT_FOUND',
            message: 'Mood entry not found or you do not have permission to delete it',
          })
        }

        return {
          success: true,
          message: 'Mood entry deleted successfully',
        }
      } catch (error) {
        if (error instanceof TRPCError) throw error
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to delete mood entry',
          cause: error,
        })
      }
    }),
})

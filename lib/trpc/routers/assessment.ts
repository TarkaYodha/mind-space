/**
 * Assessment tRPC Router
 *
 * Handles mental health assessment submissions, scoring, and history tracking
 */

import { z } from 'zod'
import { eq, desc } from 'drizzle-orm'
import { router, protectedProcedure } from '../trpc'
import { db } from '@/lib/db/client'
import { assessmentResults } from '@/lib/db/schema'

// Validation schemas
const assessmentTypeSchema = z.enum(['PHQ-9', 'GAD-7', 'PSS-10', 'WHO-5'])

const severitySchema = z.enum(['minimal', 'mild', 'moderate', 'moderately-severe', 'severe'])

const submitAssessmentSchema = z.object({
  assessmentType: assessmentTypeSchema,
  answers: z.record(z.string(), z.number()),
  score: z.number().int().min(0),
  severity: severitySchema,
  recommendations: z.array(z.string()).optional(),
})

export const assessmentRouter = router({
  /**
   * Submit a new assessment result
   */
  submit: protectedProcedure
    .input(submitAssessmentSchema)
    .mutation(async ({ ctx, input }) => {
      const result = await db
        .insert(assessmentResults)
        .values({
          userId: ctx.session.user.id,
          assessmentType: input.assessmentType,
          score: input.score,
          severity: input.severity,
          answers: input.answers,
          recommendations: input.recommendations || [],
          createdAt: new Date(),
        })
        .returning()

      return {
        success: true,
        result: result[0],
        message: 'Assessment saved successfully',
      }
    }),

  /**
   * Get assessment history for the current user
   */
  getHistory: protectedProcedure
    .input(
      z
        .object({
          limit: z.number().min(1).max(100).default(20),
          assessmentType: assessmentTypeSchema.optional(),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      const { limit = 20, assessmentType } = input || {}

      const results = await db.query.assessmentResults.findMany({
        where: assessmentType
          ? (results, { and, eq }) =>
              and(eq(results.userId, ctx.session.user.id), eq(results.assessmentType, assessmentType))
          : (results, { eq }) => eq(results.userId, ctx.session.user.id),
        limit,
        orderBy: (results, { desc }) => [desc(results.createdAt)],
      })

      return {
        results,
        count: results.length,
      }
    }),

  /**
   * Get latest assessment by type
   */
  getLatest: protectedProcedure
    .input(
      z.object({
        assessmentType: assessmentTypeSchema,
      }),
    )
    .query(async ({ ctx, input }) => {
      const result = await ctx.db.query.assessmentResults.findFirst({
        where: (results: any, { and, eq }: any) =>
          and(
            eq(results.userId, ctx.session.user.id),
            eq(results.assessmentType, input.assessmentType),
          ),
        orderBy: (results: any, { desc }: any) => [desc(results.createdAt)],
      })

      return result || null
    }),

  /**
   * Get assessment statistics and trends
   */
  getStats: protectedProcedure
    .input(
      z
        .object({
          assessmentType: assessmentTypeSchema.optional(),
          days: z.number().min(7).max(365).default(30),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      const { assessmentType, days = 30 } = input || {}

      const cutoffDate = new Date()
      cutoffDate.setDate(cutoffDate.getDate() - days)

      const allResults = await ctx.db.query.assessmentResults.findMany({
        where: (results: any, { and, eq, gte }: any) =>
          assessmentType
            ? and(
                eq(results.userId, ctx.session.user.id),
                eq(results.assessmentType, assessmentType),
                gte(results.createdAt, cutoffDate),
              )
            : and(eq(results.userId, ctx.session.user.id), gte(results.createdAt, cutoffDate)),
        orderBy: (results: any, { asc }: any) => [asc(results.createdAt)],
      })

      // Calculate statistics
      const scores = allResults.map((r: { score: number }) => r.score)
      const avgScore = scores.length > 0 ? scores.reduce((a: number, b: number) => a + b, 0) / scores.length : 0

      const latestScore = scores[0] || 0
      const previousScore = scores[1] || latestScore

      const trend =
        previousScore === 0
          ? 'stable'
          : latestScore < previousScore
            ? 'improving'
            : latestScore > previousScore
              ? 'declining'
              : 'stable'

      // Count by severity
      const severityCounts = allResults.reduce(
        (acc: Record<string, number>, r: { severity: string }) => {
          acc[r.severity] = (acc[r.severity] || 0) + 1
          return acc
        },
        {} as Record<string, number>,
      )

      return {
        totalAssessments: allResults.length,
        averageScore: Math.round(avgScore * 10) / 10,
        latestScore,
        trend,
        severityCounts,
        assessments: allResults,
      }
    }),

  /**
   * Delete an assessment result
   */
  delete: protectedProcedure
    .input(
      z.object({
        id: z.string().uuid(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Verify ownership before deleting
      const result = await db.query.assessmentResults.findFirst({
        where: (results, { and, eq }) =>
          and(eq(results.id, input.id), eq(results.userId, ctx.session.user.id)),
      })

      if (!result) {
        throw new Error('Assessment not found or unauthorized')
      }

      await db.delete(assessmentResults).where(eq(assessmentResults.id, input.id))

      return {
        success: true,
        message: 'Assessment deleted successfully',
      }
    }),
})

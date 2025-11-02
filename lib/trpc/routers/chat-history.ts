/**
 * Chat History Router
 *
 * Handles chat message persistence and retrieval
 */

import { z } from 'zod'
import { desc, eq, sql } from 'drizzle-orm'
import { TRPCError } from '@trpc/server'
import { router, protectedProcedure } from '../trpc'
import { chatHistory } from '@/lib/db/schema'

export const chatHistoryRouter = router({
  /**
   * Save a chat message and response
   */
  save: protectedProcedure
    .input(
      z.object({
        sessionId: z.string().uuid(),
        message: z.string().min(1).max(10000),
        response: z.string().min(1),
        isEmergency: z.boolean().default(false),
        crisisKeywords: z.array(z.string()).optional(),
        sentiment: z.enum(['positive', 'negative', 'neutral']).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const result = await ctx.db
          .insert(chatHistory)
          .values({
            userId: ctx.session.user.id!,
            sessionId: input.sessionId,
            message: input.message,
            response: input.response,
            isEmergency: input.isEmergency,
            crisisKeywords: input.crisisKeywords,
            sentiment: input.sentiment,
          })
          .returning()

        return {
          success: true,
          chat: result[0],
        }
      } catch (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to save chat message',
          cause: error,
        })
      }
    }),

  /**
   * Get chat sessions for the current user
   */
  getSessions: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(50).default(20),
        offset: z.number().min(0).default(0),
      }),
    )
    .query(async ({ ctx, input }) => {
      try {
        const sessions = await ctx.db
          .selectDistinct({ sessionId: chatHistory.sessionId })
          .from(chatHistory)
          .where(eq(chatHistory.userId, ctx.session.user.id!))
          .orderBy(desc(chatHistory.createdAt))
          .limit(input.limit)
          .offset(input.offset)

        return {
          sessions: sessions.map((s: any) => s.sessionId),
          hasMore: sessions.length === input.limit,
        }
      } catch (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to fetch chat sessions',
          cause: error,
        })
      }
    }),

  /**
   * Get messages for a specific session
   */
  getSession: protectedProcedure
    .input(
      z.object({
        sessionId: z.string().uuid(),
      }),
    )
    .query(async ({ ctx, input }) => {
      try {
        const messages = await ctx.db
          .select()
          .from(chatHistory)
          .where(
            sql`${chatHistory.sessionId} = ${input.sessionId} AND ${chatHistory.userId} = ${ctx.session.user.id}`,
          )
          .orderBy(chatHistory.createdAt)

        return {
          messages,
        }
      } catch (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to fetch chat session',
          cause: error,
        })
      }
    }),

  /**
   * Delete a chat session
   */
  deleteSession: protectedProcedure
    .input(
      z.object({
        sessionId: z.string().uuid(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const result = await ctx.db
          .delete(chatHistory)
          .where(
            sql`${chatHistory.sessionId} = ${input.sessionId} AND ${chatHistory.userId} = ${ctx.session.user.id}`,
          )
          .returning()

        if (result.length === 0) {
          throw new TRPCError({
            code: 'NOT_FOUND',
            message: 'Chat session not found or you do not have permission to delete it',
          })
        }

        return {
          success: true,
          message: 'Chat session deleted successfully',
          deletedCount: result.length,
        }
      } catch (error) {
        if (error instanceof TRPCError) throw error
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to delete chat session',
          cause: error,
        })
      }
    }),

  /**
   * Get chat statistics
   */
  getStats: protectedProcedure.query(async ({ ctx }) => {
    try {
      const messages = await ctx.db
        .select()
        .from(chatHistory)
        .where(eq(chatHistory.userId, ctx.session.user.id!))

      const totalMessages = messages.length
      const emergencyMessages = messages.filter((m: any) => m.isEmergency).length
      const sentimentCounts = messages.reduce(
        (acc: Record<string, number>, msg: any) => {
          if (msg.sentiment) {
            acc[msg.sentiment] = (acc[msg.sentiment] || 0) + 1
          }
          return acc
        },
        {},
      )

      return {
        totalMessages,
        emergencyMessages,
        sentimentDistribution: sentimentCounts,
      }
    } catch (error) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to fetch chat statistics',
        cause: error,
      })
    }
  }),
})

import { relations } from 'drizzle-orm'
import {
  boolean,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core'

// ============================================
// Authentication Tables (NextAuth required)
// ============================================

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull().unique(),
  name: text('name'),
  emailVerified: timestamp('email_verified', { mode: 'date' }),
  image: text('image'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const accounts = pgTable('accounts', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id')
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull(),
  type: text('type').notNull(),
  provider: text('provider').notNull(),
  providerAccountId: text('provider_account_id').notNull(),
  refresh_token: text('refresh_token'),
  access_token: text('access_token'),
  expires_at: integer('expires_at'),
  token_type: text('token_type'),
  scope: text('scope'),
  id_token: text('id_token'),
  session_state: text('session_state'),
})

export const sessions = pgTable('sessions', {
  id: uuid('id').primaryKey().defaultRandom(),
  sessionToken: text('session_token').notNull().unique(),
  userId: uuid('user_id')
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull(),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
})

export const verificationTokens = pgTable('verification_tokens', {
  identifier: text('identifier').notNull(),
  token: text('token').notNull().unique(),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
})

// ============================================
// Enums for Mental Health Data
// ============================================

export const moodEnum = pgEnum('mood', [
  'happy',
  'sad',
  'anxious',
  'calm',
  'stressed',
  'neutral',
  'excited',
  'angry',
])
export const intensityEnum = pgEnum('intensity', ['low', 'medium', 'high'])
export const assessmentTypeEnum = pgEnum('assessment_type', ['PHQ-9', 'GAD-7', 'PSS-10', 'WHO-5'])
export const severityEnum = pgEnum('severity', [
  'minimal',
  'mild',
  'moderate',
  'moderately-severe',
  'severe',
])
export const goalCategoryEnum = pgEnum('goal_category', [
  'mental-health',
  'physical-health',
  'social',
  'academic',
  'career',
  'personal',
])
export const goalStatusEnum = pgEnum('goal_status', [
  'not-started',
  'in-progress',
  'completed',
  'abandoned',
])

// ============================================
// Mental Health Tables
// ============================================

export const userMoods = pgTable(
  'user_moods',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    mood: moodEnum('mood').notNull(),
    intensity: intensityEnum('intensity').notNull(),
    notes: text('notes'),
    triggers: text('triggers').array(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => ({
    userIdIdx: index('user_moods_user_id_idx').on(table.userId),
    createdAtIdx: index('user_moods_created_at_idx').on(table.createdAt),
  }),
)

export const chatHistory = pgTable(
  'chat_history',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    sessionId: uuid('session_id').notNull(),
    message: text('message').notNull(),
    response: text('response').notNull(),
    isEmergency: boolean('is_emergency').default(false),
    crisisKeywords: text('crisis_keywords').array(),
    sentiment: text('sentiment'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => ({
    userIdIdx: index('chat_history_user_id_idx').on(table.userId),
    sessionIdIdx: index('chat_history_session_id_idx').on(table.sessionId),
    createdAtIdx: index('chat_history_created_at_idx').on(table.createdAt),
  }),
)

export const assessmentResults = pgTable(
  'assessment_results',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    assessmentType: assessmentTypeEnum('assessment_type').notNull(),
    score: integer('score').notNull(),
    severity: severityEnum('severity').notNull(),
    answers: jsonb('answers').notNull(),
    recommendations: text('recommendations').array(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => ({
    userIdIdx: index('assessment_results_user_id_idx').on(table.userId),
    typeIdx: index('assessment_results_type_idx').on(table.assessmentType),
    createdAtIdx: index('assessment_results_created_at_idx').on(table.createdAt),
  }),
)

export const wellnessJournals = pgTable(
  'wellness_journals',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    entry: text('entry').notNull(),
    gratitude: text('gratitude').array(),
    goals: text('goals').array(),
    sleepHours: integer('sleep_hours'),
    exerciseMinutes: integer('exercise_minutes'),
    waterIntake: integer('water_intake'),
    mood: text('mood'),
    isPrivate: boolean('is_private').default(true),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => ({
    userIdIdx: index('wellness_journals_user_id_idx').on(table.userId),
    createdAtIdx: index('wellness_journals_created_at_idx').on(table.createdAt),
  }),
)

export const userGoals = pgTable(
  'user_goals',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    title: text('title').notNull(),
    description: text('description'),
    category: goalCategoryEnum('category').notNull(),
    targetDate: timestamp('target_date'),
    status: goalStatusEnum('status').default('not-started').notNull(),
    progress: integer('progress').default(0),
    milestones: jsonb('milestones'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    completedAt: timestamp('completed_at'),
  },
  (table) => ({
    userIdIdx: index('user_goals_user_id_idx').on(table.userId),
    statusIdx: index('user_goals_status_idx').on(table.status),
  }),
)

export const stressMonitoring = pgTable(
  'stress_monitoring',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    stressLevel: integer('stress_level').notNull(),
    stressors: text('stressors').array(),
    physicalSymptoms: text('physical_symptoms').array(),
    copingStrategies: text('coping_strategies').array(),
    effectivenessRating: integer('effectiveness_rating'),
    notes: text('notes'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => ({
    userIdIdx: index('stress_monitoring_user_id_idx').on(table.userId),
    createdAtIdx: index('stress_monitoring_created_at_idx').on(table.createdAt),
  }),
)

// ============================================
// User Preferences & Settings
// ============================================

export const userPreferences = pgTable('user_preferences', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id')
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull()
    .unique(),
  theme: text('theme', { enum: ['light', 'dark', 'system'] }).default('system'),
  notifications: boolean('notifications').default(true),
  emailDigest: boolean('email_digest').default(false),
  digestFrequency: text('digest_frequency', { enum: ['daily', 'weekly', 'monthly'] }),
  crisisAlerts: boolean('crisis_alerts').default(true),
  dataSharing: boolean('data_sharing').default(false),
  language: text('language').default('en'),
  timezone: text('timezone'),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// ============================================
// Relations
// ============================================

export const usersRelations = relations(users, ({ many, one }) => ({
  accounts: many(accounts),
  sessions: many(sessions),
  moods: many(userMoods),
  chatHistory: many(chatHistory),
  assessments: many(assessmentResults),
  journals: many(wellnessJournals),
  goals: many(userGoals),
  stressRecords: many(stressMonitoring),
  preferences: one(userPreferences, {
    fields: [users.id],
    references: [userPreferences.userId],
  }),
}))

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}))

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}))

export const userMoodsRelations = relations(userMoods, ({ one }) => ({
  user: one(users, {
    fields: [userMoods.userId],
    references: [users.id],
  }),
}))

export const chatHistoryRelations = relations(chatHistory, ({ one }) => ({
  user: one(users, {
    fields: [chatHistory.userId],
    references: [users.id],
  }),
}))

export const assessmentResultsRelations = relations(assessmentResults, ({ one }) => ({
  user: one(users, {
    fields: [assessmentResults.userId],
    references: [users.id],
  }),
}))

export const wellnessJournalsRelations = relations(wellnessJournals, ({ one }) => ({
  user: one(users, {
    fields: [wellnessJournals.userId],
    references: [users.id],
  }),
}))

export const userGoalsRelations = relations(userGoals, ({ one }) => ({
  user: one(users, {
    fields: [userGoals.userId],
    references: [users.id],
  }),
}))

export const stressMonitoringRelations = relations(stressMonitoring, ({ one }) => ({
  user: one(users, {
    fields: [stressMonitoring.userId],
    references: [users.id],
  }),
}))

export const userPreferencesRelations = relations(userPreferences, ({ one }) => ({
  user: one(users, {
    fields: [userPreferences.userId],
    references: [users.id],
  }),
}))

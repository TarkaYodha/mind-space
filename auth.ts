import { DrizzleAdapter } from '@auth/drizzle-adapter'
import NextAuth from 'next-auth'
import { db } from '@/lib/db/client'
import { accounts, users, verificationTokens } from '@/lib/db/schema'
import { authConfig } from './auth.config'

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    verificationTokensTable: verificationTokens,
  }),
  ...authConfig,
})

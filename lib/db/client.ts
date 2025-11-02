import { createClient } from '@supabase/supabase-js'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

// Validate environment variables
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set in environment variables')
}

// For server-side queries (migrations, etc.)
const connectionString = process.env.DATABASE_URL

// Create PostgreSQL client
const client = postgres(connectionString, { prepare: false })

// Create Drizzle instance
export const db = drizzle(client, { schema })

// Supabase client for auth and storage (optional, for future use)
export const supabase =
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ? createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    : null

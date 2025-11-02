'use server'

import { AuthError } from 'next-auth'
import { signIn as naSignIn, signOut as naSignOut } from '@/auth'

export async function signInWithGoogle() {
  try {
    await naSignIn('google', { redirectTo: '/dashboard' })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'AccessDenied':
          return { error: 'Access denied. Please try again.' }
        case 'CredentialsSignin':
          return { error: 'Invalid credentials.' }
        default:
          return { error: 'Something went wrong. Please try again.' }
      }
    }
    throw error
  }
}

export async function signOutAction() {
  try {
    await naSignOut({ redirectTo: '/' })
  } catch (error) {
    console.error('Sign out error:', error)
    throw error
  }
}

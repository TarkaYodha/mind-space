import { redirect } from 'next/navigation'

// Simple redirect page for auth - Clerk handles all authentication in modals
export default function AuthPage() {
  redirect('/')
}
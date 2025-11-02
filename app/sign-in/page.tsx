'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'

export default function SignInPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'

  useEffect(() => {
    if (status === 'authenticated') {
      router.push(callbackUrl)
    }
  }, [status, router, callbackUrl])

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    try {
      await signIn('google', { callbackUrl })
    } catch (error) {
      console.error('Sign in error:', error)
      setIsLoading(false)
    }
  }

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#001f4d] mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (session) {
    return null
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome to MindSpace</h1>
          <p className="text-slate-600">Sign in / Sign up to access your wellness dashboard</p>
        </div>

        {/* Error message */}
        {searchParams.get('error') && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">
              {searchParams.get('error') === 'OAuthAccountNotLinked'
                ? 'This email is already associated with another account.'
                : 'An error occurred. Please try again.'}
            </p>
          </div>
        )}

        {/* Sign In Button */}
        <Button
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="w-full h-12 bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-300 shadow-sm font-semibold"
          size="lg"
        >
          {isLoading ? (
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-slate-700"></div>
              <span>Signing in...</span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Icons.google className="h-5 w-5" />
              <span>Continue with Google</span>
            </div>
          )}
        </Button>

        {/* Privacy Notice */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex gap-2">
            <Icons.lock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 text-sm mb-1">Privacy Protected</h3>
              <p className="text-xs text-blue-700">
                Your data is encrypted and never shared. We only use your email for account
                creation.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-6 space-y-3">
          {[
            { icon: '💬', text: '24/7 AI Mental Health Support' },
            { icon: '📊', text: 'Track Mood & Wellness Progress' },
            { icon: '🎯', text: 'Personalized Assessments & Tools' },
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
              <span className="text-lg">{feature.icon}</span>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Terms */}
        <p className="mt-6 text-xs text-center text-slate-500">
          By signing in, you agree to our{' '}
          <a href="/terms" className="text-[#001f4d] hover:underline">
            Terms
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-[#001f4d] hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  )
}

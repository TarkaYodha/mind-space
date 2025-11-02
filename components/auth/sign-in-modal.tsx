'use client'

import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Icons } from '@/components/ui/icons'

interface SignInModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SignInModal({ open, onOpenChange }: SignInModalProps) {
  const handleGoogleSignIn = async () => {
    await signIn('google', { callbackUrl: '/dashboard' })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Welcome to MindSpace</DialogTitle>
          <DialogDescription className="text-center">
            Sign in / Sign up for mental wellness and support
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-4">
          <Button onClick={handleGoogleSignIn} variant="outline" className="w-full gap-2" size="lg">
            <Icons.google className="h-5 w-5" />
            Continue with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Why sign in?</span>
            </div>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <Icons.lock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <p>Your conversations are private and encrypted</p>
            </div>
            <div className="flex items-start gap-2">
              <svg
                className="h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Track your wellness journey over time</p>
            </div>
            <div className="flex items-start gap-2">
              <svg
                className="h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <p>Personalized tools and assessments</p>
            </div>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-2">
            By continuing, you agree to our{' '}
            <a href="/terms" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function SignUpPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to sign-in page (which now handles both sign-in and sign-up)
    router.replace('/sign-in')
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#001f4d]"></div>
    </div>
  )
}

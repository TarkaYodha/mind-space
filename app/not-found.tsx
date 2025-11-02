import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#001f4d] dark:text-indigo-400 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on
          track.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="bg-[#001f4d] hover:bg-[#001437]">
              Go Home
            </Button>
          </Link>
          <Link href="/resources">
            <Button variant="outline" size="lg">
              Browse Resources
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { auth } from '@/auth'

const protectedPaths = ['/dashboard', '/chat', '/assessments', '/tools', '/activities']

function isProtectedRoute(pathname: string): boolean {
  return protectedPaths.some((path) => pathname.startsWith(path))
}

// Simple rate limiting using in-memory store (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function rateLimit(ip: string, limit = 100, windowMs = 60000): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= limit) {
    return false
  }

  record.count++
  return true
}

export default async function middleware(req: NextRequest) {
  return applyMiddlewareLogic(req, async () => {
    if (isProtectedRoute(req.nextUrl.pathname)) {
      const session = await auth()
      if (!session) {
        return NextResponse.redirect(new URL('/sign-in', req.url))
      }
    }
  })
}

async function applyMiddlewareLogic(
  req: NextRequest,
  authCheck: () => Promise<NextResponse | void>,
): Promise<NextResponse> {
  // Get client IP
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0] || req.headers.get('x-real-ip') || 'unknown'

  // Apply rate limiting to API routes
  if (req.nextUrl.pathname.startsWith('/api/')) {
    if (!rateLimit(ip, 100, 60000)) {
      return new NextResponse('Too Many Requests', {
        status: 429,
        headers: {
          'Retry-After': '60',
        },
      })
    }
  }

  // Check authentication
  const authResult = await authCheck()
  if (authResult) return authResult

  // Get response
  const response = NextResponse.next()

  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  // Content Security Policy
  const cspDirectives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net https://va.vercel-scripts.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: https: blob:",
    "font-src 'self' data: https://fonts.gstatic.com",
    "connect-src 'self' https://api.openai.com https://generativelanguage.googleapis.com https://openrouter.ai https://vitals.vercel-insights.com",
    "frame-ancestors 'none'",
  ]

  response.headers.set('Content-Security-Policy', cspDirectives.join('; '))

  // HTTPS redirect in production
  if (process.env.NODE_ENV === 'production' && req.headers.get('x-forwarded-proto') !== 'https') {
    return NextResponse.redirect(`https://${req.headers.get('host')}${req.nextUrl.pathname}`, 301)
  }

  // Cache control for static assets
  if (req.nextUrl.pathname.startsWith('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }

  return response
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}

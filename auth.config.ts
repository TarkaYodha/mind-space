import type { NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'

export const authConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    // GitHub can be added later
    // GitHub({
    //   clientId: process.env.GITHUB_CLIENT_ID!,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    // }),
  ],
  pages: {
    signIn: '/sign-in',
    error: '/sign-in',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
      const isOnChat = nextUrl.pathname.startsWith('/chat')
      const isOnAssessment = nextUrl.pathname.startsWith('/assessments')
      const isOnTools = nextUrl.pathname.startsWith('/tools')

      const protectedRoutes = isOnDashboard || isOnChat || isOnAssessment || isOnTools

      if (protectedRoutes) {
        if (isLoggedIn) return true
        return false // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        // Logged in users trying to access sign-in page
        if (nextUrl.pathname.startsWith('/sign-in') || nextUrl.pathname.startsWith('/sign-up')) {
          return Response.redirect(new URL('/dashboard', nextUrl))
        }
      }
      return true
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id
      }
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  trustHost: true,
} satisfies NextAuthConfig

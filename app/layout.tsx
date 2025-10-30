import type React from "react"
// import type { Metadata } from "next"
import "./globals.css"
import { Suspense } from "react"
import { ClerkProvider } from "@clerk/nextjs"

// export const metadata: Metadata = {
//   title: "MindSpace - Confidential Mental Health Support for Students",
//   description:
//     "Anonymous, stigma-free mental health platform for college students. AI-powered support, clinical assessments, and crisis intervention resources.",
//   generator: "v0.app",
//   keywords: ["mental health", "college students", "counseling", "anonymous support", "crisis intervention"],
// }

const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (!clerkPublishableKey) {
    return (
      <html lang="en">
        <body className="font-sans antialiased">
          <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-center text-slate-100">
            <div className="max-w-xl space-y-4">
              <h1 className="text-3xl font-semibold">Clerk configuration required</h1>
              <p className="text-sm text-slate-300">
                Set the environment variables <code>CLERK_SECRET_KEY</code> and <code>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> to enable authentication. Refer to the Clerk quickstart guide at <a href="https://clerk.com/docs/quickstarts/nextjs" className="underline">clerk.com/docs/quickstarts/nextjs</a>.
              </p>
            </div>
          </main>
        </body>
      </html>
    )
  }

  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <html lang="en">
        <body className="font-sans antialiased">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </body>
      </html>
    </ClerkProvider>
  )
}

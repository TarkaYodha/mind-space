import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Suspense } from "react"
import { ClerkProvider } from '@clerk/nextjs'
import { Abril_Fatface, Pacifico, Inter } from "next/font/google"

// Configure Google Fonts
const abrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-abril-fatface",
})

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "MindSpace - Confidential Mental Health Support for Students",
  description:
    "Anonymous, stigma-free mental health platform for college students. AI-powered support, clinical assessments, and crisis intervention resources.",
  generator: "v0.app",
  keywords: ["mental health", "college students", "counseling", "anonymous support", "crisis intervention"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable} ${abrilFatface.variable} ${pacifico.variable}`}>
        <body className="font-sans antialiased">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </body>
      </html>
    </ClerkProvider>
  )
}

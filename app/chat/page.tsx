"use client"

import Link from "next/link"
import { ChatInterface } from "@/components/chat/chat-interface"
import { NavBar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ChatPage() {
  const { isLoaded, isSignedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in')
    }
  }, [isLoaded, isSignedIn, router])

  if (!isLoaded || !isSignedIn) {
    return (
      <>
  <NavBar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
  <NavBar />

      {/* Chat Section with Homepage Styling */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50 pt-24 pb-12 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold text-black">
              AI Mental Health
            </h1>
            <h2 className="text-2xl sm:text-3xl mb-4 font-bold text-[#090847be]">
              Support Chat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Get immediate, empathetic support from our AI assistant trained on mental health best practices. 
              Available 24/7 for confidential conversations and crisis support.
            </p>
          </div>

          {/* Chat Interface Container */}
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-4xl mx-auto">
            <ChatInterface />
          </div>

          {/* Support Info Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 border border-slate-100 rounded-2xl p-6 shadow hover:shadow-lg transition text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">24/7 Available</h3>
              <p className="text-sm text-slate-500">Always here when you need support, any time of day or night.</p>
            </div>

            <div className="bg-indigo-50 border border-slate-100 rounded-2xl p-6 shadow hover:shadow-lg transition text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Completely Private</h3>
              <p className="text-sm text-slate-500">Your conversations are confidential and never stored permanently.</p>
            </div>

            <div className="bg-indigo-50 border border-slate-100 rounded-2xl p-6 shadow hover:shadow-lg transition text-center">
              <div className="w-12 h-12 bg-red-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Crisis Support</h3>
              <p className="text-sm text-slate-500">Automatic detection and immediate connection to emergency resources.</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Need additional support?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/emergency" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Crisis Resources
              </Link>
              <Link href="/assessments" className="bg-[#001f4d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#001437] transition-colors">
                Take Assessment
              </Link>
              <Link href="/dashboard" className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer className="mt-16" />
    </>
  )
}
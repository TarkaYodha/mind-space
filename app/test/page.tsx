"use client"

import { NavBar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      <NavBar currentPage="home" />
      
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Test Page
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            This is a test page for development and debugging purposes.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-slate-800">System Status</h2>
            <div className="space-y-2">
              <p className="text-slate-600">✅ Next.js App Router: Active</p>
              <p className="text-slate-600">✅ TypeScript: Enabled</p>
              <p className="text-slate-600">✅ Tailwind CSS: Configured</p>
              <p className="text-slate-600">✅ Security Middleware: Active</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

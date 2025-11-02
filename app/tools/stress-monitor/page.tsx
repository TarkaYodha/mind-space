'use client'

import { motion } from 'framer-motion'
import { Activity, ArrowLeft, Menu, Shield, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { StressMonitor } from '@/components/tools/stress-monitor'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function StressMonitorPage() {
  const [open, setOpen] = useState(false)
  const { data: session } = useSession()
  const isSignedIn = !!session

  return (
    <>
      {/* Navbar - Matching Homepage */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F172A] text-white px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="https://i.ibb.co/5WLNwykj/Gemini-Generated-Image-mfgcowmfgcowmfgc.png"
              alt="MindSpace logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-2xl font-bold text-white">MindSpace</span>
          </div>

          <div className="hidden sm:flex items-center space-x-8">
            <Link href="/" style={{ color: 'white' }} className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/activities" style={{ color: 'white' }} className="hover:text-gray-300">
              Activities
            </Link>
            <Link href="/chat" style={{ color: 'white' }} className="hover:text-gray-300">
              AI Chat
            </Link>
            <Link href="/dashboard" style={{ color: 'white' }} className="hover:text-gray-300">
              Dashboard
            </Link>
            <Link href="/assessments" style={{ color: 'white' }} className="hover:text-gray-300">
              Assessments
            </Link>
            <Link
              href="/tools"
              className="font-semibold bg-gray-800 px-3 py-1 rounded-lg text-white hover:text-gray-300"
            >
              Tools
            </Link>
            <a href="#" style={{ color: 'white' }} className="hover:text-gray-300">
              Reference
            </a>

            <Link
              href={isSignedIn ? '/chat' : '/sign-in'}
              style={{
                backgroundColor: '#001f4d',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
              }}
              className="hover:bg-[#001437] transition-colors duration-200"
            >
              Start Free Chat
            </Link>
            <svg
              className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-5 5-5-5h5v-12"
              ></path>
            </svg>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/12225/12225881.png"
              alt="User avatar"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border border-gray-600 bg-white p-1 object-cover"
            />
          </div>

          <button className="sm:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="sm:hidden absolute top-full left-0 w-full bg-[#0F172A] shadow-lg px-6 py-4 space-y-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" style={{ color: 'white' }} className="hover:text-gray-300">
                Home
              </Link>
              <Link href="/activities" style={{ color: 'white' }} className="hover:text-gray-300">
                Activities
              </Link>
              <Link href="/chat" style={{ color: 'white' }} className="hover:text-gray-300">
                AI Chat
              </Link>
              <Link href="/dashboard" style={{ color: 'white' }} className="hover:text-gray-300">
                Dashboard
              </Link>
              <Link href="/assessments" style={{ color: 'white' }} className="hover:text-gray-300">
                Assessments
              </Link>
              <Link
                href="/tools"
                className="font-semibold bg-gray-800 px-3 py-1 rounded-lg text-white hover:text-gray-300"
              >
                Tools
              </Link>
              <a href="#" style={{ color: 'white' }} className="hover:text-gray-300">
                Reference
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 pt-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Back Button & Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/tools">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Tools
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
                Stress <span className="text-[#090847be]">Monitor</span>
              </h1>
              <Badge className="bg-[#001f4d] text-white hover:bg-[#001437]">Check-in Tool</Badge>
            </div>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-6">
              Regular check-ins to monitor and manage your stress levels with personalized
              recommendations. Understanding your stress patterns helps you take proactive steps
              toward better wellness.
            </p>
          </motion.div>

          {/* Quick Tips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Stress Management Tip</h3>
                <p className="text-amber-700">
                  Regular monitoring helps you catch stress early and develop effective coping
                  strategies. Be honest about your stress levels - there's no judgment here, only
                  support.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StressMonitor />
          </motion.div>
        </div>
      </section>
    </>
  )
}

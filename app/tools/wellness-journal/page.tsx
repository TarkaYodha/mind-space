"use client"

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useAuth } from '@clerk/nextjs'
import { WellnessJournal } from "@/components/tools/wellness-journal"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Menu,
  X,
  ArrowLeft,
  Lock
} from "lucide-react"

export default function WellnessJournalPage() {
  const [open, setOpen] = useState(false)
  const { isSignedIn } = useAuth()

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
            <Link href="/" style={{color: 'white'}} className="hover:text-gray-300">Home</Link>
            <Link href="/activities" style={{color: 'white'}} className="hover:text-gray-300">Activities</Link>
            <Link href="/chat" style={{color: 'white'}} className="hover:text-gray-300">AI Chat</Link>
            <Link href="/dashboard" style={{color: 'white'}} className="hover:text-gray-300">Dashboard</Link>
            <Link href="/assessments" style={{color: 'white'}} className="hover:text-gray-300">Assessments</Link>
            <Link href="/tools" className="font-semibold bg-gray-800 px-3 py-1 rounded-lg text-white hover:text-gray-300">Tools</Link>
            <a href="#" style={{color: 'white'}} className="hover:text-gray-300">Reference</a>

            <Link 
              href={isSignedIn ? "/chat" : "/sign-in"} 
              style={{backgroundColor: '#001f4d', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px'}} 
              className="hover:bg-[#001437] transition-colors duration-200"
            >
              Start Free Chat
            </Link>
            <svg className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5-5-5h5v-12"></path>
            </svg>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/12225/12225881.png"
              alt="User avatar"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border border-gray-600 bg-white p-1 object-cover"
            />
          </div>

          <button
            className="sm:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="sm:hidden absolute top-full left-0 w-full bg-[#0F172A] shadow-lg px-6 py-4 space-y-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" style={{color: 'white'}} className="hover:text-gray-300">Home</Link>
              <Link href="/activities" style={{color: 'white'}} className="hover:text-gray-300">Activities</Link>
              <Link href="/chat" style={{color: 'white'}} className="hover:text-gray-300">AI Chat</Link>
              <Link href="/dashboard" style={{color: 'white'}} className="hover:text-gray-300">Dashboard</Link>
              <Link href="/assessments" style={{color: 'white'}} className="hover:text-gray-300">Assessments</Link>
              <Link href="/tools" className="font-semibold bg-gray-800 px-3 py-1 rounded-lg text-white hover:text-gray-300">Tools</Link>
              <a href="#" style={{color: 'white'}} className="hover:text-gray-300">Reference</a>
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
            <Button
              variant="ghost"
              asChild
              className="mb-4"
            >
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
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
                Wellness <span className="text-[#090847be]">Journal</span>
              </h1>
              <Badge className="bg-[#001f4d] text-white hover:bg-[#001437]">Private</Badge>
            </div>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-6">
              A private, secure space to reflect on your thoughts, feelings, and daily experiences.
              Regular journaling can improve mental clarity, emotional processing, and self-awareness.
            </p>
          </motion.div>
          
          {/* Privacy Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-100">
                <Lock className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Your Privacy is Protected
                </h3>
                <p className="text-green-700">
                  All journal entries are stored securely on your device only. No one else can access your private thoughts and reflections.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <WellnessJournal />
          </motion.div>
        </div>
      </section>
    </>
  )
}
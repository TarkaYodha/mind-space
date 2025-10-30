"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MoodTracker } from "@/components/tools/mood-tracker"
import { NavBar } from "@/components/layout/navbar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Sparkles, ArrowLeft } from "lucide-react"

export default function MoodTrackerPage() {
  return (
    <>
      <NavBar currentPage="tools" />

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
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
                Mood <span className="text-[#090847be]">Tracker</span>
              </h1>
              <Badge className="bg-[#001f4d] text-white hover:bg-[#001437]">Daily Tool</Badge>
            </div>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-6">
              Track your daily mood and emotions to identify patterns and triggers over time. 
              Understanding your emotional patterns is the first step to better mental health.
            </p>
          </motion.div>
          
          {/* Quick Tips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100">
                <Sparkles className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  Pro Tip: Track consistently for better insights
                </h3>
                <p className="text-blue-700">
                  Try to log your mood at the same time each day. Even tracking for a week can reveal helpful patterns.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MoodTracker />
          </motion.div>
        </div>
      </section>
    </>
  )
}
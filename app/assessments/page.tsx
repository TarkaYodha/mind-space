"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import { AssessmentInterface } from '@/components/assessments/assessment-interface'
import { NavBar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import {
  ClipboardList,
  MessageCircle,
  BookOpen,
  Sparkles,
  Check,
  Heart
} from 'lucide-react'
import { assessmentSeedData } from '@/lib/assessments/seed-data'

type Assessment = (typeof assessmentSeedData)[number]

export default function AssessmentsPage() {
  const [assessments, setAssessments] = useState<Assessment[]>([])
  const [selectedAssessment, setSelectedAssessment] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadAssessments()
  }, [])

  async function loadAssessments() {
    try {
      // Use seed data for now instead of database
      setAssessments(assessmentSeedData)
    } catch (error) {
      console.error('Error loading assessments:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <>
        <NavBar currentPage="assessments" />
        
        <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 pt-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-slate-200 rounded w-1/4 mx-auto"></div>
              <div className="h-4 bg-slate-200 rounded w-2/3 mx-auto"></div>
              <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
                <div className="h-32 bg-slate-200 rounded"></div>
                <div className="h-32 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  if (selectedAssessment) {
    return (
      <>
        <NavBar currentPage="assessments" />
        
        <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 pt-28">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <Button
              variant="ghost"
              onClick={() => setSelectedAssessment(null)}
              className="mb-6"
            >
              ← Back to Assessments
            </Button>
            <AssessmentInterface assessmentId={selectedAssessment} />
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <NavBar currentPage="assessments" />

      {/* Main Content - Matching Homepage Style */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 pt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              Mental Health <span className="text-[#090847be]">Assessments</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-6">
              Take validated mental health screenings to better understand your current wellbeing. 
              These assessments use clinical tools trusted by healthcare professionals.
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="bg-[#001f4d] text-white text-sm px-3 py-1 rounded-full">Evidence-Based</span>
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-12 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-100">
                <Sparkles className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  Why take an assessment?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Get personalized insights into your mental health</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Identify areas where you might need support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Track your progress over time</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Assessments Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
              Available <span className="text-[#081947d7]">Assessments</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Choose from our selection of validated mental health screening tools.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 mb-12 max-w-6xl mx-auto">
            {assessments.map((assessment, idx) => (
              <motion.div
                key={assessment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-indigo-50 border border-slate-100 rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50">
                    <ClipboardList className="h-6 w-6 text-[#E59866]" />
                  </div>
                  <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                    {assessment.questions?.length || 10} questions
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{assessment.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{assessment.description}</p>
                <div className="mb-4">
                  <p className="text-xs text-slate-500">
                    <strong>Time:</strong> 5-10 minutes | <strong>Validated:</strong> Clinical tool
                  </p>
                </div>
                <button
                  onClick={() => setSelectedAssessment(assessment.id)}
                  className="w-full bg-[#001f4d] text-white py-2 rounded-lg font-semibold hover:bg-[#001437] transition-colors"
                >
                  Start Assessment
                </button>
              </motion.div>
            ))}
          </div>

          {/* What to do after */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
              After Your <span className="text-[#090847be]">Assessment</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Get the most out of your assessment results with these next steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 * 0.1 }}
              className="bg-indigo-50 rounded-2xl p-6 text-center shadow hover:shadow-md transition"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4 mx-auto">
                <MessageCircle className="h-8 w-8 text-indigo-600" />
              </div>
              <h4 className="text-lg font-semibold text-blue-950 mb-2">Discuss Results</h4>
              <p className="text-sm text-slate-600 mb-4">
                Talk through your results with our AI support
              </p>
              <Link
                href="/chat"
                className="inline-block border border-[#001f4d] text-[#001f4d] hover:bg-[#001f4d] hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Start Chat
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 * 0.1 }}
              className="bg-indigo-50 rounded-2xl p-6 text-center shadow hover:shadow-md transition"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4 mx-auto">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-blue-950 mb-2">Use Wellness Tools</h4>
              <p className="text-sm text-slate-600 mb-4">
                Apply tools based on your assessment
              </p>
              <Link
                href="/tools"
                className="inline-block border border-[#001f4d] text-[#001f4d] hover:bg-[#001f4d] hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Explore Tools
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 * 0.1 }}
              className="bg-indigo-50 rounded-2xl p-6 text-center shadow hover:shadow-md transition"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4 mx-auto">
                <BookOpen className="h-8 w-8 text-[#E59866]" />
              </div>
              <h4 className="text-lg font-semibold text-blue-950 mb-2">Learn More</h4>
              <p className="text-sm text-slate-600 mb-4">
                Read relevant resources and articles
              </p>
              <Link
                href="/tools"
                className="inline-block border border-[#001f4d] text-[#001f4d] hover:bg-[#001f4d] hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Browse Resources
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer className="mt-16" />
    </>
  )
}
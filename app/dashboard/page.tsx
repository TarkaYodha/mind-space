"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { NavBar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { OnboardingGuide } from "@/components/ui/onboarding-guide"
import { 
  MessageCircle, 
  ClipboardList, 
  Phone, 
  Heart,
  TrendingUp,
  Calendar,
  LayoutDashboard,
  FileText
} from "lucide-react"

export default function DashboardPage() {
  const quickActions = [
    {
      title: "Start AI Chat",
      description: "Get immediate support",
      href: "/chat",
      icon: <MessageCircle className="h-5 w-5" />,
      variant: "default" as const,
      badge: "24/7 Available"
    },
    {
      title: "Take Assessment", 
      description: "Understand your mental health",
      href: "/assessments",
      icon: <ClipboardList className="h-5 w-5" />,
      variant: "outline" as const
    },
    {
      title: "Track Your Mood",
      description: "Log daily emotions", 
      href: "/tools/mood-tracker",
      icon: <Heart className="h-5 w-5" />,
      variant: "outline" as const
    },
    {
      title: "Wellness Tools",
      description: "Explore all tools",
      href: "/tools", 
      icon: <LayoutDashboard className="h-5 w-5" />,
      variant: "outline" as const
    }
  ]

  const wellnessTools = [
    {
      title: "Mood Tracker",
      description: "Track daily emotions and identify patterns",
      href: "/tools/mood-tracker",
      icon: <Heart className="h-4 w-4" />,
      status: "Continue tracking"
    },
    {
      title: "Stress Monitor", 
      description: "Monitor and manage stress levels",
      href: "/tools/stress-monitor",
      icon: <TrendingUp className="h-4 w-4" />,
      status: "Check stress level"
    },
    {
      title: "Wellness Journal",
      description: "Private reflection space",
      href: "/tools/wellness-journal", 
      icon: <FileText className="h-4 w-4" />,
      status: "Write new entry"
    },
    {
      title: "Self-Care Planner",
      description: "Plan your self-care activities",
      href: "/tools/self-care-planner",
      icon: <Calendar className="h-4 w-4" />,
      status: "Schedule activities"
    }
  ]

  const learningResources = [
    {
      title: "AI Chat Support",
      description: "Get personalized mental health assistance",
      href: "/chat",
      category: "Support"
    },
    {
      title: "Mental Health Tools",
      description: "Track your progress with wellness tools",
      href: "/tools", 
      category: "Tools"
    },
    {
      title: "Emergency Resources",
      description: "Access crisis support when needed",
      href: "/emergency",
      category: "Crisis"
    }
  ]

  return (
    <>
  <NavBar />

      {/* Main Content - Matching Homepage Style */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 pt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Welcome Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              Your Wellness <span className="text-[#090847be]">Dashboard</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Your central hub for mental health support, tools, and resources. Take control of your wellness journey.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 * 0.1 }}
              className="bg-indigo-50 border border-slate-100 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm">Weekly Check-ins</p>
                  <p className="text-slate-800 text-2xl font-bold">5</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50">
                  <Calendar className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 * 0.1 }}
              className="bg-indigo-50 border border-slate-100 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm">Mood Entries</p>
                  <p className="text-slate-800 text-2xl font-bold">12</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 * 0.1 }}
              className="bg-indigo-50 border border-slate-100 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm">Tools Used</p>
                  <p className="text-slate-800 text-2xl font-bold">8</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50">
                  <LayoutDashboard className="h-6 w-6 text-[#E59866]" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3 * 0.1 }}
              className="bg-indigo-50 border border-slate-100 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm">Wellness Score</p>
                  <p className="text-slate-800 text-2xl font-bold">78%</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
              Quick <span className="text-[#081947d7]">Actions</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Easy access to your most used mental wellness tools and features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {quickActions.map((action, idx) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-indigo-50 border border-slate-100 rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 mb-4">
                  {action.icon}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-800">{action.title}</h3>
                  {action.badge && (
                    <span className="bg-[#001f4d] text-white text-xs px-2 py-1 rounded">
                      {action.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-500 mb-4">{action.description}</p>
                <Link
                  href={action.href}
                  className={`block w-full text-center py-2 rounded-lg font-semibold transition-colors ${
                    action.variant === "default" 
                      ? "bg-[#001f4d] text-white hover:bg-[#001437]" 
                      : "border border-[#001f4d] text-[#001f4d] hover:bg-[#001f4d] hover:text-white"
                  }`}
                >
                  {action.variant === "default" ? "Start Now" : "Open"}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Wellness Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
              Your Wellness <span className="text-[#090847be]">Tools</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Track, understand, and improve your mental wellness with these personalized tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {wellnessTools.map((tool, idx) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-indigo-50 rounded-2xl p-6 text-left shadow hover:shadow-md transition"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 mb-4">
                  {tool.icon}
                </div>
                <h4 className="text-lg font-semibold text-blue-950 mb-2">{tool.title}</h4>
                <p className="text-sm text-slate-600 mb-4">{tool.description}</p>
                <Link
                  href={tool.href}
                  className="text-[#001f4d] hover:text-[#001437] text-sm font-semibold transition-colors"
                >
                  {tool.status} →
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Emergency Support Section */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center mb-12">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4 mx-auto">
              <Phone className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-red-700 mb-2">Crisis Support Available 24/7</h3>
            <p className="text-red-600 mb-6 max-w-md mx-auto">
              If you're experiencing a mental health emergency, immediate help is available.
            </p>
            <Link
              href="/emergency"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Crisis Help Now
            </Link>
          </div>

          {/* Learning Resources */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {learningResources.map((resource, idx) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-semibold text-slate-800">{resource.title}</h5>
                  <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                    {resource.category}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-4">{resource.description}</p>
                <Link
                  href={resource.href}
                  className="text-[#001f4d] hover:text-[#001437] text-sm font-semibold transition-colors"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Guided Onboarding */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow hover:shadow-lg transition mb-12"
          >
            <OnboardingGuide variant="dashboard" />
          </motion.div>
        </div>
      </section>

      <Footer className="mt-16" />
    </>
  )
}
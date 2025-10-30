"use client"

import Link from 'next/link'
import { motion } from "framer-motion"
import { NavBar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import {
  HeartIcon,
  BrainIcon,
  ActivityIcon,
  ClipboardIcon,
  TrendingUpIcon,
  CalendarIcon,
  Clock,
  ArrowRight,
  Check,
  Zap,
  UtensilsCrossed
} from "lucide-react"

export default function ToolsPage() {

  const tools = [
    {
      title: "AI Diet Planner",
      description: "Get personalized nutrition plans based on your goals, preferences, and lifestyle",
      icon: <UtensilsCrossed className="h-6 w-6" />,
      features: ["Personalized meal plans", "Nutritional analysis", "Recipe instructions", "Shopping lists"],
      available: true,
      href: "/tools/diet-planner",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Mood Tracker",
      description: "Track your daily mood and emotions to identify patterns and triggers",
      icon: <HeartIcon className="h-6 w-6" />,
      features: ["Daily mood logging", "Pattern recognition", "Trigger identification", "Progress visualization"],
      available: true,
      href: "/tools/mood-tracker",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      title: "Stress Level Monitor", 
      description: "Regular check-ins to monitor and manage your stress levels",
      icon: <ActivityIcon className="h-6 w-6" />,
      features: ["Stress assessment", "Coping suggestions", "Relaxation reminders", "Weekly reports"],
      available: true,
      href: "/tools/stress-monitor",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      title: "Wellness Journal",
      description: "Private space to reflect on your thoughts, feelings, and experiences",
      icon: <ClipboardIcon className="h-6 w-6" />,
      features: ["Secure journaling", "Guided prompts", "Reflection exercises", "Progress tracking"],
      available: true,
      href: "/tools/wellness-journal",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      title: "Goal Setting & Progress",
      description: "Set mental health goals and track your progress over time", 
      icon: <TrendingUpIcon className="h-6 w-6" />,
      features: ["SMART goals", "Progress tracking", "Milestone celebrations", "Accountability features"],
      available: true,
      href: "/tools/goal-setting",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Self-Care Planner",
      description: "Plan and schedule self-care activities tailored to your needs",
      icon: <CalendarIcon className="h-6 w-6" />,
      features: ["Activity suggestions", "Schedule integration", "Habit building", "Reminder system"],
      available: true,
      href: "/tools/self-care-planner",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Mindfulness Coach",
      description: "Guided mindfulness and meditation exercises for daily practice",
      icon: <BrainIcon className="h-6 w-6" />,
      features: ["Guided meditations", "Breathing exercises", "Progressive relaxation", "Sleep stories"],
      available: true,
      href: "/tools/mindfulness-coach",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200"
    }
  ]

  return (
    <>
      <NavBar />
      
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 pt-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              Wellness <span className="text-[#090847be]">Tools</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-6">
              Interactive tools and trackers to help you monitor, understand, and improve your mental health over time.
              Start your journey with evidence-based wellness practices.
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="bg-[#001f4d] text-white text-sm px-3 py-1 rounded-full">7 Available Tools</span>
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
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  Why use wellness tools?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Track progress over time</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Identify patterns and triggers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Build healthy habits</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tools Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
            id="wellness-tools"
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
              Available <span className="text-[#081947d7]">Tools</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Choose the tools that best fit your wellness goals and start building healthier habits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tools.map((tool, idx) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center mb-4`}>
                  <div className="text-white">
                    {tool.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{tool.title}</h3>
                <p className="text-slate-600 mb-4">{tool.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-slate-700 mb-2">Features:</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center text-sm text-slate-500 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Available now</span>
                </div>

                <Button 
                  className={`w-full bg-gradient-to-r ${tool.color} text-white hover:opacity-90 transition-all duration-300 font-medium`}
                  asChild
                >
                  <Link href={tool.href}>
                    Use Tool
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Tool Combinations Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
              Tool <span className="text-[#090847be]">Combinations</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Use these tools together for maximum benefit on your wellness journey.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <HeartIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">Track & Reflect Combo</h3>
                  <p className="text-blue-700 text-sm">Perfect for understanding your emotional patterns</p>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-blue-700">
                  <Check className="h-4 w-4 text-blue-600" />
                  <span>Use Mood Tracker daily to log emotions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-700">
                  <Check className="h-4 w-4 text-blue-600" />
                  <span>Reflect on patterns in Wellness Journal</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-700">
                  <Check className="h-4 w-4 text-blue-600" />
                  <span>Set goals based on insights</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <Link href="/tools/mood-tracker">Mood Tracker</Link>
                </Button>
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <Link href="/tools/wellness-journal">Journal</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-green-50 border border-green-200 rounded-2xl p-6 shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <ActivityIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-900">Stress Management Flow</h3>
                  <p className="text-green-700 text-sm">Comprehensive approach to managing stress</p>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-green-700">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Monitor stress with Stress Level Monitor</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-700">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Practice with Mindfulness Coach</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-700">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Schedule relief activities</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <Link href="/tools/stress-monitor">Stress Monitor</Link>
                </Button>
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <Link href="/tools/mindfulness-coach">Mindfulness</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Get Started Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
              Start Your <span className="text-[#090847be]">Wellness Journey</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Begin with our AI chat support and assessments, then explore these tools as you progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-[#001f4d] hover:bg-[#001437]" asChild>
                <Link href="/chat">Start AI Chat</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/assessments">Take Assessment</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/dashboard">View Dashboard</Link>
              </Button>
            </div>
          </motion.div>
          </div>
        </section>
      </div>
      
      <Footer className="mt-16" />
    </>
  )
}
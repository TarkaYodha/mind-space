"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen, Compass, ArrowUpRight, Sparkles, Clock } from "lucide-react"
import { NavBar } from "@/components/layout/navbar"
import { Badge } from "@/components/ui/badge"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const ARTICLES = [
  {
    slug: "academic-accommodations",
    title: "Academic Accommodations",
    category: "Campus Support",
    readTime: "14 min read",
    summary: "Understand your rights, documentation needs, and how to navigate accommodation offices with confidence.",
  },
  {
    slug: "anxiety-management-for-students",
    title: "Anxiety and Academic Pressure",
    category: "Anxiety Relief",
    readTime: "12 min read",
    summary: "Practical tools to manage coursework worry, perfectionism, and exam stress without burning out.",
  },
  {
    slug: "breathing-techniques-for-anxiety",
    title: "Breathing Techniques for Anxiety",
    category: "Quick Calm",
    readTime: "5 min read",
    summary: "Step-by-step breathing exercises that ground you fast when panic or overwhelm hits.",
  },
  {
    slug: "building-support-networks",
    title: "Building Support Networks",
    category: "Relationships",
    readTime: "10 min read",
    summary: "Cultivate meaningful peer, mentor, and campus connections that protect your mental health.",
  },
  {
    slug: "dealing-with-loneliness",
    title: "Dealing with Loneliness",
    category: "Emotional Health",
    readTime: "12 min read",
    summary: "Normalize loneliness in college and explore small steps that rebuild a sense of belonging.",
  },
  {
    slug: "depression-in-college-students",
    title: "Depression in College Students",
    category: "Mood Support",
    readTime: "8 min read",
    summary: "Spot the signs of depression, understand contributing factors, and map out pathways to care.",
  },
  {
    slug: "grounding-techniques-for-crisis",
    title: "Grounding Techniques for Crisis",
    category: "Crisis Toolkit",
    readTime: "3 min read",
    summary: "Immediate sensory and orientation skills to steady yourself during spikes of panic or dissociation.",
  },
  {
    slug: "healthy-communication",
    title: "Healthy Communication",
    category: "Relationships",
    readTime: "7 min read",
    summary: "Learn clear, compassionate communication frameworks for roommates, friends, and partners.",
  },
  {
    slug: "mindfulness-and-meditation",
    title: "Mindfulness and Meditation",
    category: "Mindfulness",
    readTime: "10 min read",
    summary: "Simple present-moment practices that fit between classes and improve focus, sleep, and mood.",
  },
  {
    slug: "stress-and-time-management",
    title: "Stress and Time Management",
    category: "Academic Skills",
    readTime: "15 min read",
    summary: "Design a sustainable schedule, tame overload, and balance priorities without losing yourself.",
  },
  {
    slug: "study-stress-management",
    title: "Study Stress Management",
    category: "Academic Skills",
    readTime: "15 min read",
    summary: "Evidence-backed study routines that lower cortisol, sharpen memory, and boost academic stamina.",
  },
  {
    slug: "work-life-balance-in-college",
    title: "Work-Life Balance in College",
    category: "Life Design",
    readTime: "13 min read",
    summary: "Balance jobs, classes, and relationships by aligning choices with the season you are in.",
  },
]

export default function ResourcesPage() {
  return (
    <>
      <NavBar />

      <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-indigo-600/90 hover:bg-indigo-600 text-indigo-50 border border-indigo-400/40">
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Resource Library
              </span>
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Evidence-based guides for <br className="hidden md:block" />
              every season of campus life
            </h1>
            <p className="mt-5 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Dive into curated playbooks written with students in mind—from crisis breathing to balancing work, study, and rest.
              Save what helps, share with friends, and return whenever you need a refresher.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-700 justify-center">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <Compass className="h-4 w-4 text-indigo-600" />
                Tailored to student realities
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <BookOpen className="h-4 w-4 text-indigo-600" />
                Actionable worksheets & prompts
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <Clock className="h-4 w-4 text-indigo-600" />
                Designed for quick reads
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.06, delayChildren: 0.1 },
              },
            }}
          >
            {ARTICLES.map((article) => (
              <motion.div
                key={article.slug}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="group h-full"
              >
                <Link
                  href={`/resources/articles/${article.slug}`}
                  className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-indigo-50 p-6 shadow hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span className="inline-flex items-center gap-2 text-indigo-600 font-medium">
                        <span className="h-2 w-2 rounded-full bg-indigo-400" />
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-indigo-600 text-sm font-medium group-hover:text-indigo-700">
                    Read guide
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900">Looking for a specific topic?</h3>
              <p className="mt-2 text-sm text-slate-600">
                We are expanding the library based on student requests. Let us know what you would like to see next and we will prioritize it.
              </p>
              <Link
                href="/feedback"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                Request a guide
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900">Need immediate support?</h3>
              <p className="mt-2 text-sm text-slate-700">
                These guides are for learning, not crisis response. Connect with trained help right away if you are in danger or feel unsafe.
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-800">
                <span>Call <strong>988</strong> – Suicide & Crisis Lifeline</span>
                <span>Text <strong>HOME</strong> to <strong>741741</strong> – Crisis Text Line</span>
                <span>On campus? Contact your counseling center or campus security</span>
              </div>
              <Link
                href="/emergency"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700"
              >
                Visit emergency resources
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#05112e] text-white h-[144px] flex flex-col items-center justify-center">
        <div className="text-2xl font-bold mb-4">MindSpace</div>
        <div className="flex space-x-6 mb-4">
          <a href="https://www.facebook.com/profile.php?id=61581178740012" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors">
            <FaFacebookF size={24} />
          </a>
          <a href="https://x.com/MindSpace125868" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/mindspace550/#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="http://www.linkedin.com/in/mindspace-web-48200a386" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700 transition-colors">
            <FaLinkedinIn size={24} />
          </a>
        </div>
        <p className="text-sm text-center">&copy; {new Date().getFullYear()} MindSpace. All rights reserved.</p>
      </footer>
    </>
  )
}

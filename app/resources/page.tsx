"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen, Compass, ArrowUpRight, Sparkles, Clock } from "lucide-react"
import { NavBar } from "@/components/layout/navbar"
import { Badge } from "@/components/ui/badge"

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
    <div className="min-h-screen bg-gradient-to-b from-[#030616] via-[#071128] to-[#0F172A] text-slate-100">
  <NavBar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#3b82f6_0%,_transparent_55%)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-24 flex flex-col gap-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="w-fit bg-indigo-600/90 hover:bg-indigo-600 text-indigo-50 border border-indigo-400/40">
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Resource Library
              </span>
            </Badge>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mt-6">
              Evidence-based guides for every season of campus life
            </h1>
            <p className="mt-5 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
              Dive into curated playbooks written with students in mind
   from crisis breathing to balancing work, study, and rest.
              Save what helps, share with friends, and return whenever you need a refresher.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
              <div className="flex items-center gap-2 rounded-full border border-slate-700/70 px-4 py-2 backdrop-blur-sm">
                <Compass className="h-4 w-4 text-indigo-300" />
                Tailored to student realities
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-700/70 px-4 py-2 backdrop-blur-sm">
                <BookOpen className="h-4 w-4 text-indigo-300" />
                Actionable worksheets & prompts
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-700/70 px-4 py-2 backdrop-blur-sm">
                <Clock className="h-4 w-4 text-indigo-300" />
                Designed for quick reads
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
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
                className="flex h-full flex-col justify-between rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 transition hover:-translate-y-1 hover:border-indigo-500/60 hover:bg-slate-900/60"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span className="inline-flex items-center gap-2 text-indigo-200">
                      <span className="h-2 w-2 rounded-full bg-indigo-400" />
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-white leading-tight group-hover:text-indigo-200 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-indigo-300 text-sm font-medium group-hover:text-indigo-100">
                  Read guide
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6">
            <h3 className="text-lg font-semibold text-white">Looking for a specific topic?</h3>
            <p className="mt-2 text-sm text-slate-300">
              We're expanding the library based on student requests. Let us know what you'd like to see next and we'll prioritize it.
            </p>
            <Link
              href="/feedback"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
            >
              Request a guide
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-2xl border border-red-500/40 bg-gradient-to-br from-red-500/10 via-transparent to-transparent p-6">
            <h3 className="text-lg font-semibold text-white">Need immediate support?</h3>
            <p className="mt-2 text-sm text-slate-200">
              These guides are for learning, not crisis response. Connect with trained help right away if youre in danger or feel unsafe.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-100">
              <span>Call <strong>988</strong> 7 Suicide & Crisis Lifeline</span>
              <span>Text <strong>HOME</strong> to <strong>741741</strong> 7 Crisis Text Line</span>
              <span>On campus? Contact your counseling center or campus security</span>
            </div>
            <Link
              href="/emergency"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-200 hover:text-red-100"
            >
              Visit emergency resources
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

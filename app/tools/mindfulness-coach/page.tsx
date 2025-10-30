"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { NavBar } from "@/components/layout/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BrainIcon, PlayIcon, PauseIcon, RotateCcwIcon, ClockIcon, ArrowLeft, Sparkles } from "lucide-react"

interface MindfulnessExercise {
  id: string
  title: string
  description: string
  duration: number
  type: string
}

export default function MindfulnessCoachPage() {
  const [currentExercise, setCurrentExercise] = useState<MindfulnessExercise | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [totalTime, setTotalTime] = useState(0)

  const mindfulnessExercises: MindfulnessExercise[] = [
    {
      id: 'breathing',
      title: 'Deep Breathing',
      description: 'Simple breath awareness for relaxation',
      duration: 300,
      type: 'breathing'
    },
    {
      id: 'body-scan',
      title: 'Body Scan',
      description: 'Progressive relaxation meditation',
      duration: 600,
      type: 'meditation'
    },
    {
      id: 'visualization',
      title: 'Peaceful Visualization',
      description: 'Guided imagery for calm and peace',
      duration: 480,
      type: 'visualization'
    },
    {
      id: 'mindful-walk',
      title: 'Mindful Walking',
      description: 'Walking meditation practice',
      duration: 420,
      type: 'movement'
    },
    {
      id: 'loving-kindness',
      title: 'Loving Kindness',
      description: 'Compassion meditation practice',
      duration: 540,
      type: 'meditation'
    },
    {
      id: 'quick-reset',
      title: 'Quick Reset',
      description: 'Fast 3-minute mindfulness break',
      duration: 180,
      type: 'breathing'
    }
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    
    if (isPlaying && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsPlaying(false)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying, timeLeft])

  const startExercise = (exercise: MindfulnessExercise) => {
    setCurrentExercise(exercise)
    setTimeLeft(exercise.duration)
    setTotalTime(exercise.duration)
    setIsPlaying(true)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const resetTimer = () => {
    if (currentExercise) {
      setTimeLeft(currentExercise.duration)
      setTotalTime(currentExercise.duration)
      setIsPlaying(false)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const progress = totalTime > 0 ? ((totalTime - timeLeft) / totalTime) * 100 : 0

  return (
    <>
      <NavBar currentPage="tools" />

      {/* Main Content */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 pt-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Back Button */}
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

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                <BrainIcon className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
                Mindfulness <span className="text-[#090847be]">Coach</span>
              </h1>
              <Badge className="bg-[#001f4d] text-white hover:bg-[#001437]">Wellness Tool</Badge>
            </div>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-6">
              Practice guided mindfulness exercises to reduce stress, improve focus, and cultivate inner peace.
              Take a moment to breathe and center yourself.
            </p>
          </motion.div>

          {/* Quick Tip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-8 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100">
                <Sparkles className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-800 mb-2">
                  Mindfulness Tip
                </h3>
                <p className="text-purple-700">
                  Find a quiet space where you won't be disturbed. Sit comfortably with your back straight. Focus on your breath and gently return your attention when your mind wanders.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Active Session */}
          {currentExercise && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <Card className="bg-white border border-slate-100 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{currentExercise.title}</h2>
                    <p className="text-slate-600">{currentExercise.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-center mb-4">
                      <div className="text-5xl font-bold text-indigo-600 mb-2">
                        {formatTime(timeLeft)}
                      </div>
                      <p className="text-sm text-slate-500">Time Remaining</p>
                    </div>
                    <Progress value={progress} className="h-3" />
                  </div>

                  <div className="flex justify-center gap-4">
                    <Button
                      onClick={togglePlayPause}
                      size="lg"
                      className="bg-indigo-600 hover:bg-indigo-700"
                    >
                      {isPlaying ? (
                        <>
                          <PauseIcon className="w-5 h-5 mr-2" />
                          Pause
                        </>
                      ) : (
                        <>
                          <PlayIcon className="w-5 h-5 mr-2" />
                          {timeLeft === totalTime ? 'Start' : 'Resume'}
                        </>
                      )}
                    </Button>
                    <Button
                      onClick={resetTimer}
                      variant="outline"
                      size="lg"
                    >
                      <RotateCcwIcon className="w-5 h-5 mr-2" />
                      Reset
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Exercise Library */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Guided Exercises</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mindfulnessExercises.map((exercise) => (
                <Card 
                  key={exercise.id} 
                  className={`bg-white border shadow hover:shadow-lg transition-all ${
                    currentExercise?.id === exercise.id ? 'border-indigo-400 ring-2 ring-indigo-200' : 'border-slate-100'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">{exercise.title}</h3>
                      <p className="text-sm text-slate-600 mb-3">{exercise.description}</p>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <ClockIcon className="w-4 h-4" />
                        <span>{Math.floor(exercise.duration / 60)} minutes</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => startExercise(exercise)}
                    >
                      <PlayIcon className="w-4 h-4 mr-2" />
                      Begin Exercise
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

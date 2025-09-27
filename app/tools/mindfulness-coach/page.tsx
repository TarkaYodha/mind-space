"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BrainIcon, PlayIcon, PauseIcon, RotateCcwIcon, ClockIcon, StarIcon, HeartIcon, ArrowLeftIcon, HomeIcon, SettingsIcon, BookOpenIcon } from "lucide-react"

interface MindfulnessExercise {
  id: string
  title: string
  description: string
  type: 'meditation' | 'breathing' | 'body-scan' | 'visualization' | 'sleep'
  duration: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  benefits: string[]
  instructions: string[]
  audioGuide?: string
}

interface SessionHistory {
  id: string
  exerciseId: string
  date: string
  duration: number
  completed: boolean
}

export default function MindfulnessCoachPage() {
  const [selectedType, setSelectedType] = useState<string>('all')
  const [currentExercise, setCurrentExercise] = useState<MindfulnessExercise | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [sessionHistory, setSessionHistory] = useState<SessionHistory[]>([
    {
      id: '1',
      exerciseId: 'basic-breathing',
      date: '2025-09-20',
      duration: 300,
      completed: true
    },
    {
      id: '2',
      exerciseId: 'body-scan',
      date: '2025-09-19',
      duration: 600,
      completed: true
    }
  ])

  const mindfulnessExercises: MindfulnessExercise[] = [
    {
      id: 'basic-breathing',
      title: 'Basic Breathing',
      description: 'Simple breath awareness meditation for beginners',
      type: 'breathing',
      duration: 300, // 5 minutes
      difficulty: 'beginner',
      benefits: ['Reduces anxiety', 'Improves focus', 'Calms the mind'],
      instructions: [
        'Find a comfortable seated position',
        'Close your eyes gently',
        'Take a deep breath in through your nose',
        'Slowly exhale through your mouth',
        'Focus your attention on your natural breath',
        'When your mind wanders, gently return to the breath',
        'Continue for the full duration'
      ]
    },
    {
      id: 'body-scan',
      title: 'Progressive Body Scan',
      description: 'Systematic relaxation of each part of your body',
      type: 'body-scan',
      duration: 600, // 10 minutes
      difficulty: 'beginner',
      benefits: ['Releases tension', 'Body awareness', 'Deep relaxation'],
      instructions: [
        'Lie down comfortably on your back',
        'Close your eyes and take three deep breaths',
        'Start by focusing on your toes',
        'Notice any sensations without judgment',
        'Gradually move attention up through each body part',
        'Spend 30 seconds on each area',
        'End with awareness of your whole body'
      ]
    },
    {
      id: 'loving-kindness',
      title: 'Loving-Kindness Meditation',
      description: 'Cultivate compassion for yourself and others',
      type: 'meditation',
      duration: 900, // 15 minutes
      difficulty: 'intermediate',
      benefits: ['Increases empathy', 'Reduces negative emotions', 'Builds self-compassion'],
      instructions: [
        'Sit comfortably with eyes closed',
        'Begin by sending loving thoughts to yourself',
        'Repeat: "May I be happy, may I be healthy, may I be at peace"',
        'Extend these wishes to loved ones',
        'Include neutral people in your life',
        'Send loving-kindness to difficult people',
        'End by including all living beings'
      ]
    },
    {
      id: 'mountain-visualization',
      title: 'Mountain Visualization',
      description: 'Embody the strength and stillness of a mountain',
      type: 'visualization',
      duration: 720, // 12 minutes
      difficulty: 'intermediate',
      benefits: ['Builds inner strength', 'Increases stability', 'Develops patience'],
      instructions: [
        'Sit with a straight, dignified posture',
        'Close your eyes and breathe naturally',
        'Visualize yourself as a majestic mountain',
        'Feel the solid base rooted deep in the earth',
        'Notice the peak reaching toward the sky',
        'Observe weather passing around you without moving',
        'Maintain this mountain-like stillness'
      ]
    },
    {
      id: 'sleep-preparation',
      title: 'Sleep Preparation',
      description: 'Gentle meditation to prepare for restful sleep',
      type: 'sleep',
      duration: 1200, // 20 minutes
      difficulty: 'beginner',
      benefits: ['Improves sleep quality', 'Reduces racing thoughts', 'Physical relaxation'],
      instructions: [
        'Lie in bed in your preferred sleeping position',
        'Take several slow, deep breaths',
        'Progressive relax each muscle group',
        'Count your breaths from 10 down to 1',
        'If your mind wanders, gently return to counting',
        'Allow yourself to drift naturally toward sleep',
        'Let go of the day\'s worries and tensions'
      ]
    },
    {
      id: 'walking-meditation',
      title: 'Walking Meditation',
      description: 'Mindful movement practice connecting mind and body',
      type: 'meditation',
      duration: 600, // 10 minutes
      difficulty: 'intermediate',
      benefits: ['Integrates mindfulness into movement', 'Improves coordination', 'Connects with nature'],
      instructions: [
        'Find a quiet path 10-20 steps long',
        'Begin walking very slowly',
        'Focus on the sensation of each step',
        'Feel your feet touching the ground',
        'Notice the lifting, moving, and placing of each foot',
        'Turn mindfully at the end of your path',
        'Continue with full awareness of movement'
      ]
    }
  ]

  const exerciseTypes = [
    { value: 'all', label: 'All Exercises' },
    { value: 'meditation', label: 'Meditation' },
    { value: 'breathing', label: 'Breathing' },
    { value: 'body-scan', label: 'Body Scan' },
    { value: 'visualization', label: 'Visualization' },
    { value: 'sleep', label: 'Sleep' }
  ]

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      beginner: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
      intermediate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300',
      advanced: 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300'
    }
    return colors[difficulty as keyof typeof colors]
  }

  const getTypeColor = (type: string) => {
    const colors = {
      meditation: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
      breathing: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
      'body-scan': 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
      visualization: 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300',
      sleep: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

  const filteredExercises = selectedType === 'all' 
    ? mindfulnessExercises 
    : mindfulnessExercises.filter(exercise => exercise.type === selectedType)

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const startSession = (exercise: MindfulnessExercise) => {
    setCurrentExercise(exercise)
    setTimeLeft(exercise.duration)
    setIsPlaying(false)
  }

  const toggleSession = () => {
    setIsPlaying(!isPlaying)
  }

  const resetSession = () => {
    if (currentExercise) {
      setTimeLeft(currentExercise.duration)
      setIsPlaying(false)
    }
  }

  const completeSession = () => {
    if (currentExercise) {
      const newSession: SessionHistory = {
        id: Date.now().toString(),
        exerciseId: currentExercise.id,
        date: new Date().toISOString().split('T')[0],
        duration: currentExercise.duration - timeLeft,
        completed: timeLeft === 0
      }
      setSessionHistory(prev => [newSession, ...prev])
      setCurrentExercise(null)
      setTimeLeft(0)
      setIsPlaying(false)
    }
  }

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    
    if (isPlaying && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsPlaying(false)
            // Auto-complete session when timer reaches 0
            setTimeout(completeSession, 1000)
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

  const totalSessions = sessionHistory.length
  const completedSessions = sessionHistory.filter(s => s.completed).length
  const totalMinutes = Math.round(sessionHistory.reduce((acc, session) => acc + session.duration, 0) / 60)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-6">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg"></div>
                <span className="text-xl font-bold text-white">MindSpace</span>
              </Link>
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <HomeIcon size={16} />
                  Home
                </Link>
                <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</Link>
                <Link href="/tools" className="text-blue-400 font-medium flex items-center gap-2">
                  <SettingsIcon size={16} />
                  Tools
                </Link>
                <Link href="/assessments" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <BookOpenIcon size={16} />
                  Assessments
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/tools" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                <ArrowLeftIcon size={16} />
                Back to Tools
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#001f4d] via-[#003d82] to-[#0066cc]">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="flex justify-center mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <BrainIcon className="h-12 w-12 text-white" />
                </div>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Mindfulness Coach
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Guided mindfulness exercises, meditations, and breathing techniques to reduce stress and improve mental clarity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Progress Overview */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <StarIcon className="h-5 w-5 text-[#001f4d]" />
                        Total Sessions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-[#001f4d]">
                        {totalSessions}
                      </div>
                      <p className="text-sm text-gray-600">Mindfulness sessions</p>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <HeartIcon className="h-5 w-5 text-green-600" />
                        Completed
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-green-600">
                        {completedSessions}
                      </div>
                      <p className="text-sm text-gray-600">Full sessions completed</p>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <ClockIcon className="h-5 w-5 text-blue-600" />
                        Total Time
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-blue-600">
                        {totalMinutes}
                      </div>
                      <p className="text-sm text-gray-600">Minutes practiced</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Active Session */}
        {currentExercise && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div 
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Card className="border-[#001f4d]/20 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center text-gray-900">{currentExercise.title}</CardTitle>
                    <CardDescription className="text-center text-lg text-gray-600">
                      {currentExercise.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-6">
                    <div className="text-6xl font-bold text-[#001f4d]">
                      {formatTime(timeLeft)}
                    </div>
                    
                    <Progress 
                      value={((currentExercise.duration - timeLeft) / currentExercise.duration) * 100} 
                      className="max-w-md mx-auto h-2"
                    />
                    
                    <div className="flex gap-4 justify-center">
                      <Button 
                        size="lg" 
                        onClick={toggleSession} 
                        className="min-w-32 bg-gradient-to-r from-[#001f4d] to-[#003d82] hover:from-[#003d82] hover:to-[#0066cc] text-white rounded-xl"
                      >
                        {isPlaying ? (
                          <>
                            <PauseIcon className="h-5 w-5 mr-2" />
                            Pause
                          </>
                        ) : (
                          <>
                            <PlayIcon className="h-5 w-5 mr-2" />
                            {timeLeft === currentExercise.duration ? 'Start' : 'Resume'}
                          </>
                        )}
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg" 
                        onClick={resetSession}
                        className="rounded-xl border-gray-200 text-gray-600 hover:bg-gray-50"
                      >
                        <RotateCcwIcon className="h-5 w-5 mr-2" />
                        Reset
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg" 
                        onClick={completeSession}
                        className="rounded-xl border-gray-200 text-gray-600 hover:bg-gray-50"
                      >
                        Complete Session
                      </Button>
                    </div>
                    
                    <div className="max-w-2xl mx-auto">
                      <p className="text-sm font-medium mb-3 text-gray-700">Instructions:</p>
                      <ol className="text-sm text-left space-y-2">
                        {currentExercise.instructions.map((instruction, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-[#001f4d]/10 text-[#001f4d] rounded-full flex items-center justify-center text-xs font-medium">
                              {index + 1}
                            </span>
                            <span className="text-gray-600">{instruction}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        )}

        {/* Exercise Library */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="flex justify-between items-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: currentExercise ? 1.1 : 0.7, duration: 0.6 }}
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Mindfulness Exercises</h2>
                  <p className="text-gray-600">
                    Choose from guided exercises for different needs and experience levels
                  </p>
                </div>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-48 rounded-xl border-gray-200">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    {exerciseTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredExercises.map((exercise, index) => (
                  <motion.div
                    key={exercise.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (currentExercise ? 1.2 : 0.8) + index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl text-gray-900">{exercise.title}</CardTitle>
                          <div className="flex gap-2">
                            <Badge className={getTypeColor(exercise.type) + " rounded-full"}>
                              {exercise.type}
                            </Badge>
                            <Badge className={getDifficultyColor(exercise.difficulty) + " rounded-full"}>
                              {exercise.difficulty}
                            </Badge>
                          </div>
                        </div>
                        <CardDescription className="text-base text-gray-600">{exercise.description}</CardDescription>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                          <span className="flex items-center gap-1">
                            <ClockIcon className="h-4 w-4" />
                            {Math.round(exercise.duration / 60)} minutes
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium mb-2 text-gray-700">Benefits:</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {exercise.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-[#001f4d] rounded-full flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <Button 
                            className="w-full bg-gradient-to-r from-[#001f4d] to-[#003d82] hover:from-[#003d82] hover:to-[#0066cc] text-white rounded-xl"
                            onClick={() => startSession(exercise)}
                            disabled={currentExercise?.id === exercise.id}
                          >
                            {currentExercise?.id === exercise.id ? 'Session Active' : 'Start Session'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-3xl font-bold text-center mb-8 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                Mindfulness Tips
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">Getting Started</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Start with just 5 minutes daily</li>
                        <li>• Choose a quiet, comfortable space</li>
                        <li>• Practice at the same time each day</li>
                        <li>• Be patient with your wandering mind</li>
                        <li>• Consistency is more important than perfection</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7, duration: 0.6 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">Common Challenges</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Racing thoughts are normal - gently return to focus</li>
                        <li>• Feeling restless? Try walking meditation</li>
                        <li>• Drowsy? Sit up straighter or open eyes slightly</li>
                        <li>• Can't find time? Even 2 minutes helps</li>
                        <li>• Remember: there's no "perfect" meditation</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
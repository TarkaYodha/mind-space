"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarIcon, HeartIcon, BookIcon, MusicIcon, TreesIcon, CoffeeIcon, Users2Icon, ActivityIcon, ArrowLeftIcon, HomeIcon, SettingsIcon, BookOpenIcon, XIcon } from "lucide-react"

interface SelfCareActivity {
  id: string
  title: string
  description: string
  category: string
  duration: number
  difficulty: 'easy' | 'moderate' | 'challenging'
  benefits: string[]
  icon: React.ReactNode
}

interface ScheduledActivity {
  id: string
  activityId: string
  date: string
  time: string
  completed: boolean
}

export default function SelfCarePlannerPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showScheduleModal, setShowScheduleModal] = useState<string | null>(null)
  const [scheduleDate, setScheduleDate] = useState<string>('')
  const [scheduleTime, setScheduleTime] = useState<string>('09:00')
  const [scheduledActivities, setScheduledActivities] = useState<ScheduledActivity[]>([])

  // Load scheduled activities from localStorage on component mount
  useEffect(() => {
    const savedActivities = localStorage.getItem('mindspace-scheduled-activities')
    if (savedActivities) {
      setScheduledActivities(JSON.parse(savedActivities))
    } else {
      // Set default activities if no saved data
      const defaultActivities = [
        {
          id: '1',
          activityId: 'meditation',
          date: new Date().toISOString().split('T')[0],
          time: '07:00',
          completed: false
        },
        {
          id: '2',
          activityId: 'walk',
          date: new Date().toISOString().split('T')[0],
          time: '18:00',
          completed: false
        }
      ]
      setScheduledActivities(defaultActivities)
      localStorage.setItem('mindspace-scheduled-activities', JSON.stringify(defaultActivities))
    }
  }, [])

  // Save to localStorage whenever scheduledActivities changes
  useEffect(() => {
    if (scheduledActivities.length > 0) {
      localStorage.setItem('mindspace-scheduled-activities', JSON.stringify(scheduledActivities))
    }
  }, [scheduledActivities])

  const selfCareActivities: SelfCareActivity[] = [
    {
      id: 'meditation',
      title: 'Mindful Meditation',
      description: 'Practice mindfulness with guided meditation',
      category: 'mindfulness',
      duration: 10,
      difficulty: 'easy',
      benefits: ['Reduces stress', 'Improves focus', 'Emotional regulation'],
      icon: <HeartIcon className="h-5 w-5" />
    },
    {
      id: 'walk',
      title: 'Nature Walk',
      description: 'Take a peaceful walk outdoors',
      category: 'physical',
      duration: 30,
      difficulty: 'easy',
      benefits: ['Physical exercise', 'Fresh air', 'Vitamin D'],
      icon: <TreesIcon className="h-5 w-5" />
    },
    {
      id: 'journaling',
      title: 'Gratitude Journaling',
      description: 'Write down things you\'re grateful for',
      category: 'emotional',
      duration: 15,
      difficulty: 'easy',
      benefits: ['Positive mindset', 'Self-reflection', 'Emotional processing'],
      icon: <BookIcon className="h-5 w-5" />
    },
    {
      id: 'music',
      title: 'Listen to Music',
      description: 'Enjoy your favorite calming music',
      category: 'creative',
      duration: 20,
      difficulty: 'easy',
      benefits: ['Mood boost', 'Stress relief', 'Emotional expression'],
      icon: <MusicIcon className="h-5 w-5" />
    },
    {
      id: 'tea',
      title: 'Mindful Tea Time',
      description: 'Prepare and enjoy tea mindfully',
      category: 'mindfulness',
      duration: 15,
      difficulty: 'easy',
      benefits: ['Relaxation', 'Mindful practice', 'Warmth & comfort'],
      icon: <CoffeeIcon className="h-5 w-5" />
    },
    {
      id: 'friends',
      title: 'Connect with Friends',
      description: 'Reach out to supportive friends',
      category: 'social',
      duration: 45,
      difficulty: 'moderate',
      benefits: ['Social support', 'Shared experiences', 'Reduced isolation'],
      icon: <Users2Icon className="h-5 w-5" />
    },
    {
      id: 'exercise',
      title: 'Light Exercise',
      description: 'Yoga, stretching, or gentle workout',
      category: 'physical',
      duration: 25,
      difficulty: 'moderate',
      benefits: ['Physical health', 'Endorphin release', 'Better sleep'],
      icon: <ActivityIcon className="h-5 w-5" />
    },
    {
      id: 'art',
      title: 'Creative Expression',
      description: 'Draw, paint, or any creative activity',
      category: 'creative',
      duration: 40,
      difficulty: 'moderate',
      benefits: ['Self-expression', 'Flow state', 'Emotional release'],
      icon: <HeartIcon className="h-5 w-5" />
    }
  ]

  const categories = [
    { value: 'all', label: 'All Activities' },
    { value: 'mindfulness', label: 'Mindfulness' },
    { value: 'physical', label: 'Physical' },
    { value: 'emotional', label: 'Emotional' },
    { value: 'social', label: 'Social' },
    { value: 'creative', label: 'Creative' }
  ]

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      easy: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
      moderate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300',
      challenging: 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300'
    }
    return colors[difficulty as keyof typeof colors]
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      mindfulness: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
      physical: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
      emotional: 'bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300',
      social: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
      creative: 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

  const filteredActivities = selectedCategory === 'all' 
    ? selfCareActivities 
    : selfCareActivities.filter(activity => activity.category === selectedCategory)

  const toggleActivityCompletion = (activityId: string) => {
    setScheduledActivities(prev => 
      prev.map(activity => 
        activity.id === activityId 
          ? { ...activity, completed: !activity.completed }
          : activity
      )
    )
  }

  const scheduleActivity = (activityId: string) => {
    if (!scheduleDate) {
      alert('Please select a date for scheduling')
      return
    }
    
    const newScheduledActivity: ScheduledActivity = {
      id: Date.now().toString(),
      activityId,
      date: scheduleDate,
      time: scheduleTime,
      completed: false
    }
    setScheduledActivities(prev => [...prev, newScheduledActivity])
    setShowScheduleModal(null)
    setScheduleDate('')
    setScheduleTime('09:00')
  }

  const removeScheduledActivity = (activityId: string) => {
    setScheduledActivities(prev => prev.filter(activity => activity.id !== activityId))
  }

  const clearAllScheduledActivities = () => {
    setScheduledActivities([])
    localStorage.removeItem('mindspace-scheduled-activities')
  }

  const getActivityById = (id: string) => selfCareActivities.find(a => a.id === id)

  const todayScheduled = scheduledActivities.filter(
    activity => activity.date === new Date().toISOString().split('T')[0]
  )
  const completedToday = todayScheduled.filter(activity => activity.completed).length

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
                  <CalendarIcon className="h-12 w-12 text-white" />
                </div>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Self-Care Planner
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Plan and schedule personalized self-care activities to nurture your mental health and wellbeing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Today's Overview */}
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
                      <CardTitle className="text-lg text-gray-900">Today's Plan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-[#001f4d]">
                        {todayScheduled.length}
                      </div>
                      <p className="text-sm text-gray-600">Activities scheduled</p>
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
                      <CardTitle className="text-lg text-gray-900">Completed</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-green-600">
                        {completedToday}
                      </div>
                      <p className="text-sm text-gray-600">Activities done today</p>
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
                      <CardTitle className="text-lg text-gray-900">Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-blue-600">
                        {todayScheduled.length > 0 ? Math.round((completedToday / todayScheduled.length) * 100) : 0}%
                      </div>
                      <p className="text-sm text-gray-600">Daily completion</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* All Scheduled Activities */}
              {scheduledActivities.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65, duration: 0.6 }}
                  className="mb-8"
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-gray-900">All Scheduled Activities</CardTitle>
                          <CardDescription className="text-gray-600">
                            Your complete self-care schedule
                          </CardDescription>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={clearAllScheduledActivities}
                        >
                          Clear All
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {scheduledActivities
                          .sort((a, b) => new Date(a.date + ' ' + a.time).getTime() - new Date(b.date + ' ' + b.time).getTime())
                          .map((scheduled) => {
                            const activity = getActivityById(scheduled.activityId)
                            if (!activity) return null
                            
                            const isToday = scheduled.date === new Date().toISOString().split('T')[0]
                            const isPast = new Date(scheduled.date + ' ' + scheduled.time) < new Date()
                            
                            return (
                              <div 
                                key={scheduled.id} 
                                className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                                  scheduled.completed ? 'bg-green-50/80 border-green-200' : 
                                  isToday ? 'bg-blue-50/80 border-blue-200' :
                                  'bg-white/50 border-gray-200'
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <Checkbox 
                                    checked={scheduled.completed}
                                    onCheckedChange={() => toggleActivityCompletion(scheduled.id)}
                                  />
                                  <div className="flex items-center gap-2">
                                    <div className="text-[#001f4d]">{activity.icon}</div>
                                    <span className={`${scheduled.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                                      {activity.title}
                                    </span>
                                  </div>
                                  <Badge variant="outline" className="text-xs rounded-full">
                                    {new Date(scheduled.date).toLocaleDateString()}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs rounded-full">
                                    {scheduled.time}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs rounded-full">
                                    {activity.duration} min
                                  </Badge>
                                  {isToday && <Badge className="text-xs rounded-full bg-blue-100 text-blue-700">Today</Badge>}
                                </div>
                                <Button
                                  variant="outline"
                                  size="icon-sm"
                                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                  onClick={() => removeScheduledActivity(scheduled.id)}
                                >
                                  <XIcon className="h-4 w-4" />
                                </Button>
                              </div>
                            )
                          })}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Today's Schedule */}
              {todayScheduled.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Today's Self-Care Schedule</CardTitle>
                      <CardDescription className="text-gray-600">
                        Your planned self-care activities for today
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {todayScheduled.map((scheduled) => {
                          const activity = getActivityById(scheduled.activityId)
                          if (!activity) return null
                          
                          return (
                            <div 
                              key={scheduled.id} 
                              className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                                scheduled.completed ? 'bg-green-50/80 border-green-200' : 'bg-white/50 border-gray-200'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <Checkbox 
                                  checked={scheduled.completed}
                                  onCheckedChange={() => toggleActivityCompletion(scheduled.id)}
                                />
                                <div className="flex items-center gap-2">
                                  <div className="text-[#001f4d]">{activity.icon}</div>
                                  <span className={`${scheduled.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                                    {activity.title}
                                  </span>
                                </div>
                                <Badge variant="outline" className="text-xs rounded-full">
                                  {scheduled.time}
                                </Badge>
                                <Badge variant="outline" className="text-xs rounded-full">
                                  {activity.duration} min
                                </Badge>
                              </div>
                              <Button
                                variant="outline"
                                size="icon-sm"
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                onClick={() => removeScheduledActivity(scheduled.id)}
                              >
                                <XIcon className="h-4 w-4" />
                              </Button>
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Activity Library */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="flex justify-between items-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Self-Care Activities</h2>
                  <p className="text-gray-600">
                    Choose from our curated collection of wellness activities
                  </p>
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48 rounded-xl border-gray-200">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredActivities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-[#001f4d]/10 rounded-xl">
                            <div className="text-[#001f4d]">
                              {activity.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg text-gray-900">{activity.title}</CardTitle>
                            <div className="flex gap-2 mt-1">
                              <Badge className={getCategoryColor(activity.category) + " rounded-full"}>
                                {activity.category}
                              </Badge>
                              <Badge className={getDifficultyColor(activity.difficulty) + " rounded-full"}>
                                {activity.difficulty}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-gray-600">{activity.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Duration:</span>
                            <span className="font-medium text-gray-900">{activity.duration} minutes</span>
                          </div>
                          
                          <div>
                            <p className="text-sm font-medium mb-2 text-gray-700">Benefits:</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {activity.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-[#001f4d] rounded-full flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <Button 
                            variant="outline" 
                            className="w-full rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-[#001f4d] transition-colors"
                            onClick={() => setShowScheduleModal(activity.id)}
                          >
                            Schedule Activity
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

        {/* Schedule Activity Modal */}
        {showScheduleModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Schedule Activity</h3>
                <Button
                  variant="outline"
                  size="icon-sm"
                  className="rounded-full"
                  onClick={() => setShowScheduleModal(null)}
                >
                  <XIcon className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">
                    {selfCareActivities.find(a => a.id === showScheduleModal)?.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    Duration: {selfCareActivities.find(a => a.id === showScheduleModal)?.duration} minutes
                  </p>
                </div>
                
                <div>
                  <Label htmlFor="schedule-date" className="text-sm font-medium text-gray-700">Date</Label>
                  <Input
                    id="schedule-date"
                    type="date"
                    value={scheduleDate}
                    onChange={(e) => setScheduleDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="schedule-time" className="text-sm font-medium text-gray-700">Time</Label>
                  <Input
                    id="schedule-time"
                    type="time"
                    value={scheduleTime}
                    onChange={(e) => setScheduleTime(e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setShowScheduleModal(null)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="flex-1 bg-[#001f4d] hover:bg-[#001437]"
                    onClick={() => scheduleActivity(showScheduleModal)}
                  >
                    Schedule
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

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
                Self-Care Tips
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">Daily Habits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Start with 10-15 minutes daily</li>
                        <li>• Choose activities you genuinely enjoy</li>
                        <li>• Be consistent rather than perfect</li>
                        <li>• Listen to your body and mood</li>
                        <li>• Celebrate small self-care wins</li>
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
                      <CardTitle className="text-lg text-gray-900">Building Your Routine</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Mix different types of activities</li>
                        <li>• Schedule self-care like appointments</li>
                        <li>• Prepare for busy days with quick options</li>
                        <li>• Include activities for different moods</li>
                        <li>• Remember: self-care isn't selfish</li>
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
'use client'

import { motion } from 'framer-motion'
import {
  ActivityIcon,
  ArrowLeft,
  BookIcon,
  CalendarIcon,
  CoffeeIcon,
  HeartIcon,
  MusicIcon,
  Sparkles,
  TreesIcon,
  Users2Icon,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { NavBar } from '@/components/layout/navbar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'

interface SelfCareActivity {
  id: string
  title: string
  description: string
  category: string
  duration: number
  icon: React.ReactNode
}

interface ScheduledActivity {
  id: string
  activityId: string
  date: string
  completed: boolean
}

export default function SelfCarePlannerPage() {
  const [scheduledActivities, setScheduledActivities] = useState<ScheduledActivity[]>([
    { id: '1', activityId: 'meditation', date: '2025-10-19', completed: true },
    { id: '2', activityId: 'walk', date: '2025-10-19', completed: false },
  ])

  const selfCareActivities: SelfCareActivity[] = [
    {
      id: 'meditation',
      title: 'Mindful Meditation',
      description: 'Practice mindfulness with guided meditation',
      category: 'mindfulness',
      duration: 10,
      icon: <HeartIcon className="h-5 w-5" />,
    },
    {
      id: 'walk',
      title: 'Nature Walk',
      description: 'Take a peaceful walk outdoors',
      category: 'physical',
      duration: 30,
      icon: <TreesIcon className="h-5 w-5" />,
    },
    {
      id: 'journaling',
      title: 'Gratitude Journaling',
      description: "Write down things you're grateful for",
      category: 'emotional',
      duration: 15,
      icon: <BookIcon className="h-5 w-5" />,
    },
    {
      id: 'music',
      title: 'Listen to Music',
      description: 'Enjoy your favorite calming music',
      category: 'creative',
      duration: 20,
      icon: <MusicIcon className="h-5 w-5" />,
    },
    {
      id: 'tea',
      title: 'Mindful Tea Time',
      description: 'Prepare and enjoy tea mindfully',
      category: 'mindfulness',
      duration: 15,
      icon: <CoffeeIcon className="h-5 w-5" />,
    },
    {
      id: 'friends',
      title: 'Connect with Friends',
      description: 'Reach out to supportive friends',
      category: 'social',
      duration: 45,
      icon: <Users2Icon className="h-5 w-5" />,
    },
    {
      id: 'exercise',
      title: 'Light Exercise',
      description: 'Yoga, stretching, or gentle workout',
      category: 'physical',
      duration: 25,
      icon: <ActivityIcon className="h-5 w-5" />,
    },
  ]

  const toggleActivityCompletion = (activityId: string) => {
    setScheduledActivities((prev) =>
      prev.map((activity) =>
        activity.id === activityId ? { ...activity, completed: !activity.completed } : activity,
      ),
    )
  }

  const scheduleActivity = (activityId: string) => {
    const newScheduledActivity: ScheduledActivity = {
      id: Date.now().toString(),
      activityId,
      date: new Date().toISOString().split('T')[0],
      completed: false,
    }
    setScheduledActivities((prev) => [...prev, newScheduledActivity])
  }

  const getActivityById = (id: string) => selfCareActivities.find((a) => a.id === id)

  const todayScheduled = scheduledActivities.filter(
    (activity) => activity.date === new Date().toISOString().split('T')[0],
  )
  const completedToday = todayScheduled.filter((activity) => activity.completed).length

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
            <Button variant="ghost" asChild className="mb-4">
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
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                <CalendarIcon className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
                Self-Care <span className="text-[#090847be]">Planner</span>
              </h1>
              <Badge className="bg-[#001f4d] text-white hover:bg-[#001437]">Wellness Tool</Badge>
            </div>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-6">
              Plan and schedule personalized self-care activities to nurture your mental health and
              wellbeing. Small daily actions lead to lasting positive change.
            </p>
          </motion.div>

          {/* Quick Tips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-8 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100">
                <Sparkles className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-teal-800 mb-2">
                  Daily Self-Care Reminder
                </h3>
                <p className="text-teal-700">
                  Schedule at least 15 minutes of self-care each day. Remember, taking care of
                  yourself isn't selfish - it's essential for your wellbeing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Today's Progress */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          >
            <Card className="bg-white border border-slate-100 shadow">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-blue-600 mb-1">{todayScheduled.length}</div>
                <p className="text-sm text-slate-600">Planned Today</p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-slate-100 shadow">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-green-600 mb-1">{completedToday}</div>
                <p className="text-sm text-slate-600">Completed</p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-slate-100 shadow">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {todayScheduled.length > 0
                    ? Math.round((completedToday / todayScheduled.length) * 100)
                    : 0}
                  %
                </div>
                <p className="text-sm text-slate-600">Progress</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Today's Activities */}
          {todayScheduled.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <Card className="bg-white border border-slate-100 shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">Today's Schedule</h2>
                  <div className="space-y-3">
                    {todayScheduled.map((scheduled) => {
                      const activity = getActivityById(scheduled.activityId)
                      if (!activity) return null

                      return (
                        <div
                          key={scheduled.id}
                          className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                            scheduled.completed
                              ? 'bg-green-50 border-green-200'
                              : 'bg-slate-50 border-slate-200'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Checkbox
                              checked={scheduled.completed}
                              onCheckedChange={() => toggleActivityCompletion(scheduled.id)}
                            />
                            <div className="text-slate-700">{activity.icon}</div>
                            <div>
                              <p
                                className={`font-medium ${scheduled.completed ? 'line-through text-slate-500' : 'text-slate-900'}`}
                              >
                                {activity.title}
                              </p>
                              <p className="text-sm text-slate-500">{activity.duration} min</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Activity Library */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Self-Care Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selfCareActivities.map((activity) => (
                <Card
                  key={activity.id}
                  className="bg-white border border-slate-100 shadow hover:shadow-lg transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 mb-1">{activity.title}</h3>
                        <p className="text-sm text-slate-600 mb-2">{activity.description}</p>
                        <p className="text-xs text-slate-500">{activity.duration} minutes</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => scheduleActivity(activity.id)}
                    >
                      Schedule
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

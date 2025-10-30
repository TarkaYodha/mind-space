"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { NavBar } from "@/components/layout/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TargetIcon, CheckCircleIcon, ClockIcon, StarIcon, ArrowLeft, Lightbulb } from "lucide-react"

interface Goal {
  id: string
  title: string
  description: string
  category: string
  targetDate: string
  progress: number
  status: 'active' | 'completed' | 'paused'
  milestones: string[]
  createdAt: string
}

export default function GoalSettingPage() {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      title: 'Daily Meditation Practice',
      description: 'Meditate for 10 minutes every morning to reduce stress and anxiety',
      category: 'mindfulness',
      targetDate: '2025-12-31',
      progress: 65,
      status: 'active',
      milestones: ['Week 1: Establish routine', 'Week 4: Increase to 10 minutes', 'Week 8: Notice stress reduction'],
      createdAt: '2025-09-01'
    },
    {
      id: '2',
      title: 'Improve Sleep Schedule',
      description: 'Go to bed by 11 PM and wake up at 7 AM consistently',
      category: 'wellness',
      targetDate: '2025-11-30',
      progress: 40,
      status: 'active',
      milestones: ['Week 1: Set bedtime alarm', 'Week 2: No screens 1hr before bed', 'Week 4: Consistent schedule'],
      createdAt: '2025-09-15'
    }
  ])

  const [showNewGoalForm, setShowNewGoalForm] = useState(false)
  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    category: '',
    targetDate: '',
    milestones: ['', '', '']
  })

  const categories = [
    { value: 'mindfulness', label: 'Mindfulness & Meditation' },
    { value: 'wellness', label: 'Physical Wellness' },
    { value: 'social', label: 'Social Connection' },
    { value: 'academic', label: 'Academic Success' },
    { value: 'emotional', label: 'Emotional Health' },
    { value: 'habits', label: 'Healthy Habits' }
  ]

  const handleCreateGoal = () => {
    if (newGoal.title && newGoal.description && newGoal.category && newGoal.targetDate) {
      const goal: Goal = {
        id: Date.now().toString(),
        title: newGoal.title,
        description: newGoal.description,
        category: newGoal.category,
        targetDate: newGoal.targetDate,
        progress: 0,
        status: 'active',
        milestones: newGoal.milestones.filter(m => m.trim() !== ''),
        createdAt: new Date().toISOString().split('T')[0]
      }
      setGoals([...goals, goal])
      setNewGoal({ title: '', description: '', category: '', targetDate: '', milestones: ['', '', ''] })
      setShowNewGoalForm(false)
    }
  }

  const updateGoalProgress = (goalId: string, progress: number) => {
    setGoals(goals.map(goal => 
      goal.id === goalId 
        ? { ...goal, progress, status: progress === 100 ? 'completed' : 'active' }
        : goal
    ))
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      mindfulness: 'bg-purple-100 text-purple-700',
      wellness: 'bg-green-100 text-green-700',
      social: 'bg-blue-100 text-blue-700',
      academic: 'bg-orange-100 text-orange-700',
      emotional: 'bg-pink-100 text-pink-700',
      habits: 'bg-indigo-100 text-indigo-700'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

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
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                <TargetIcon className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
                Goal <span className="text-[#090847be]">Setting</span>
              </h1>
              <Badge className="bg-[#001f4d] text-white hover:bg-[#001437]">Progress Tool</Badge>
            </div>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-6">
              Set SMART mental health goals and track your progress with personalized milestones.
              Achieve meaningful change through structured goal-setting and consistent tracking.
            </p>
          </motion.div>
          
          {/* Quick Tips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-8 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100">
                <Lightbulb className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-800 mb-2">
                  SMART Goal Framework
                </h3>
                <p className="text-indigo-700">
                  Make your goals Specific, Measurable, Achievable, Relevant, and Time-bound for the best results.
                  Start small and build momentum - even 1% improvement daily adds up to amazing progress!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Progress Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <Card className="bg-white border border-slate-100 shadow hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2 text-slate-900">
                  <TargetIcon className="h-5 w-5 text-blue-600" />
                  Active Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">
                  {goals.filter(g => g.status === 'active').length}
                </div>
                <p className="text-sm text-slate-600">Goals in progress</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-slate-100 shadow hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2 text-slate-900">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  Completed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">
                  {goals.filter(g => g.status === 'completed').length}
                </div>
                <p className="text-sm text-slate-600">Goals achieved</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-slate-100 shadow hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2 text-slate-900">
                  <StarIcon className="h-5 w-5 text-yellow-600" />
                  Average Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-yellow-600">
                  {goals.length > 0 ? Math.round(goals.reduce((acc, goal) => acc + goal.progress, 0) / goals.length) : 0}%
                </div>
                <p className="text-sm text-slate-600">Across all goals</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Goals Management */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white border border-slate-100 shadow-lg rounded-2xl">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-2xl text-slate-900">Your Goals</CardTitle>
                    <CardDescription className="text-slate-600">
                      Track your mental health and wellness goals
                    </CardDescription>
                  </div>
                  <Button 
                    onClick={() => setShowNewGoalForm(!showNewGoalForm)}
                    className="bg-[#001f4d] hover:bg-[#001437] text-white"
                  >
                    {showNewGoalForm ? 'Cancel' : 'Create New Goal'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* New Goal Form */}
                {showNewGoalForm && (
                  <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900">Create New Goal</h3>
                    
                    <div>
                      <Label htmlFor="title" className="text-slate-700 font-medium">Goal Title</Label>
                      <Input
                        id="title"
                        placeholder="e.g., Practice daily gratitude"
                        value={newGoal.title}
                        onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="description" className="text-slate-700 font-medium">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe what you want to achieve and why it's important to you"
                        value={newGoal.description}
                        onChange={(e) => setNewGoal({...newGoal, description: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="category" className="text-slate-700 font-medium">Category</Label>
                        <Select value={newGoal.category} onValueChange={(value) => setNewGoal({...newGoal, category: value})}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((cat) => (
                              <SelectItem key={cat.value} value={cat.value}>
                                {cat.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="targetDate" className="text-slate-700 font-medium">Target Date</Label>
                        <Input
                          id="targetDate"
                          type="date"
                          value={newGoal.targetDate}
                          onChange={(e) => setNewGoal({...newGoal, targetDate: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-slate-700 font-medium">Milestones (Optional)</Label>
                      {newGoal.milestones.map((milestone, index) => (
                        <Input
                          key={index}
                          placeholder={`Milestone ${index + 1}`}
                          value={milestone}
                          onChange={(e) => {
                            const newMilestones = [...newGoal.milestones]
                            newMilestones[index] = e.target.value
                            setNewGoal({...newGoal, milestones: newMilestones})
                          }}
                          className="mt-2"
                        />
                      ))}
                    </div>
                    
                    <Button 
                      onClick={handleCreateGoal}
                      className="w-full bg-[#001f4d] hover:bg-[#001437] text-white"
                    >
                      Create Goal
                    </Button>
                  </div>
                )}

                {/* Goals List */}
                <div className="space-y-4">
                  {goals.map((goal) => (
                    <div
                      key={goal.id}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4"
                    >
                      <div className="flex justify-between items-start">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-semibold text-slate-900">{goal.title}</h3>
                            <Badge className={getCategoryColor(goal.category)}>
                              {categories.find(c => c.value === goal.category)?.label}
                            </Badge>
                            {goal.status === 'completed' && (
                              <Badge className="bg-green-100 text-green-700">
                                <CheckCircleIcon className="h-3 w-3 mr-1" />
                                Completed
                              </Badge>
                            )}
                          </div>
                          <p className="text-slate-600">{goal.description}</p>
                          <div className="flex items-center gap-4 text-sm text-slate-500">
                            <span className="flex items-center gap-1">
                              <ClockIcon className="h-4 w-4" />
                              Target: {new Date(goal.targetDate).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <Label className="text-sm font-medium text-slate-700">Progress</Label>
                          <span className="text-sm font-medium text-slate-900">{goal.progress}%</span>
                        </div>
                        <Progress value={goal.progress} className="mb-2 h-2" />
                        <div className="flex gap-2">
                          {[0, 25, 50, 75, 100].map((value) => (
                            <Button
                              key={value}
                              variant={goal.progress === value ? "default" : "outline"}
                              size="sm"
                              onClick={() => updateGoalProgress(goal.id, value)}
                              className={goal.progress === value 
                                ? "bg-[#001f4d] hover:bg-[#001437] text-white" 
                                : ""
                              }
                            >
                              {value}%
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      {goal.milestones.length > 0 && (
                        <div>
                          <Label className="text-sm font-medium mb-2 block text-slate-700">Milestones</Label>
                          <ul className="space-y-1">
                            {goal.milestones.map((milestone, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                                <div className="w-2 h-2 bg-[#001f4d] rounded-full flex-shrink-0" />
                                {milestone}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  )
}

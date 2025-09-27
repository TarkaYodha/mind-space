"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUpIcon, TargetIcon, CheckCircleIcon, ClockIcon, StarIcon, ArrowLeftIcon, HomeIcon, SettingsIcon, BookOpenIcon } from "lucide-react"

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
      mindfulness: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
      wellness: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
      social: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
      academic: 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300',
      emotional: 'bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300',
      habits: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

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
                  <TrendingUpIcon className="h-12 w-12 text-white" />
                </div>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Goal Setting & Progress
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Set SMART mental health goals and track your progress with personalized milestones and achievements.
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
                        <TargetIcon className="h-5 w-5 text-[#001f4d]" />
                        Active Goals
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-[#001f4d]">
                        {goals.filter(g => g.status === 'active').length}
                      </div>
                      <p className="text-sm text-gray-600">Goals in progress</p>
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
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                        Completed
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-green-600">
                        {goals.filter(g => g.status === 'completed').length}
                      </div>
                      <p className="text-sm text-gray-600">Goals achieved</p>
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
                        <StarIcon className="h-5 w-5 text-yellow-600" />
                        Average Progress
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-yellow-600">
                        {goals.length > 0 ? Math.round(goals.reduce((acc, goal) => acc + goal.progress, 0) / goals.length) : 0}%
                      </div>
                      <p className="text-sm text-gray-600">Across all goals</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Goals Management */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="flex justify-between items-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Goals</h2>
                  <p className="text-gray-600">
                    Track your mental health and wellness goals
                  </p>
                </div>
                <Button 
                  onClick={() => setShowNewGoalForm(true)}
                  className="bg-gradient-to-r from-[#001f4d] to-[#003d82] hover:from-[#003d82] hover:to-[#0066cc] text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Create New Goal
                </Button>
              </motion.div>

              {/* New Goal Form */}
              {showNewGoalForm && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">Create New Goal</CardTitle>
                      <CardDescription className="text-gray-600">
                        Set a SMART goal to improve your mental health and wellbeing
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="title" className="text-gray-700 font-medium">Goal Title</Label>
                        <Input
                          id="title"
                          placeholder="e.g., Practice daily gratitude"
                          value={newGoal.title}
                          onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
                          className="mt-1 rounded-xl border-gray-200 focus:border-[#001f4d] focus:ring-[#001f4d]"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="description" className="text-gray-700 font-medium">Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Describe what you want to achieve and why it's important to you"
                          value={newGoal.description}
                          onChange={(e) => setNewGoal({...newGoal, description: e.target.value})}
                          className="mt-1 rounded-xl border-gray-200 focus:border-[#001f4d] focus:ring-[#001f4d]"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="category" className="text-gray-700 font-medium">Category</Label>
                          <Select value={newGoal.category} onValueChange={(value) => setNewGoal({...newGoal, category: value})}>
                            <SelectTrigger className="mt-1 rounded-xl border-gray-200 focus:border-[#001f4d] focus:ring-[#001f4d]">
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
                          <Label htmlFor="targetDate" className="text-gray-700 font-medium">Target Date</Label>
                          <Input
                            id="targetDate"
                            type="date"
                            value={newGoal.targetDate}
                            onChange={(e) => setNewGoal({...newGoal, targetDate: e.target.value})}
                            className="mt-1 rounded-xl border-gray-200 focus:border-[#001f4d] focus:ring-[#001f4d]"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label className="text-gray-700 font-medium">Milestones (Optional)</Label>
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
                            className="mt-2 rounded-xl border-gray-200 focus:border-[#001f4d] focus:ring-[#001f4d]"
                          />
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          onClick={handleCreateGoal}
                          className="bg-gradient-to-r from-[#001f4d] to-[#003d82] hover:from-[#003d82] hover:to-[#0066cc] text-white rounded-xl"
                        >
                          Create Goal
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => setShowNewGoalForm(false)}
                          className="rounded-xl border-gray-200 text-gray-600 hover:bg-gray-50"
                        >
                          Cancel
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Goals List */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                {goals.map((goal, index) => (
                  <motion.div
                    key={goal.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <CardTitle className="text-xl text-gray-900">{goal.title}</CardTitle>
                              <Badge className={getCategoryColor(goal.category)}>
                                {categories.find(c => c.value === goal.category)?.label}
                              </Badge>
                              {goal.status === 'completed' && (
                                <Badge variant="secondary" className="bg-green-100 text-green-700 rounded-full">
                                  <CheckCircleIcon className="h-3 w-3 mr-1" />
                                  Completed
                                </Badge>
                              )}
                            </div>
                            <CardDescription className="text-gray-600">{goal.description}</CardDescription>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <ClockIcon className="h-4 w-4" />
                                Target: {new Date(goal.targetDate).toLocaleDateString()}
                              </span>
                              <span>Created: {new Date(goal.createdAt).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {/* Progress */}
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <Label className="text-sm font-medium text-gray-700">Progress</Label>
                              <span className="text-sm font-medium text-gray-900">{goal.progress}%</span>
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
                                    ? "bg-gradient-to-r from-[#001f4d] to-[#003d82] text-white rounded-lg" 
                                    : "rounded-lg border-gray-200 text-gray-600 hover:bg-gray-50"
                                  }
                                >
                                  {value}%
                                </Button>
                              ))}
                            </div>
                          </div>
                          
                          {/* Milestones */}
                          {goal.milestones.length > 0 && (
                            <div>
                              <Label className="text-sm font-medium mb-2 block text-gray-700">Milestones</Label>
                              <ul className="space-y-1">
                                {goal.milestones.map((milestone, index) => (
                                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#001f4d] rounded-full flex-shrink-0" />
                                    {milestone}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
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
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                Goal Setting Tips
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">Make it SMART</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li><strong className="text-gray-900">Specific:</strong> Clear and well-defined</li>
                        <li><strong className="text-gray-900">Measurable:</strong> Track your progress</li>
                        <li><strong className="text-gray-900">Achievable:</strong> Realistic and attainable</li>
                        <li><strong className="text-gray-900">Relevant:</strong> Meaningful to your life</li>
                        <li><strong className="text-gray-900">Time-bound:</strong> Has a deadline</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">Success Strategies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Start with small, manageable goals</li>
                        <li>• Celebrate small wins along the way</li>
                        <li>• Be flexible and adjust as needed</li>
                        <li>• Share your goals with supportive friends</li>
                        <li>• Review and update progress regularly</li>
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
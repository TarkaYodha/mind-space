'use client'

import { motion } from 'framer-motion'
import {
  Activity,
  AlertTriangle,
  BarChart,
  Lightbulb,
  MessageCircle,
  Phone,
  Target,
  TrendingUp,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { useToast } from '@/hooks/use-toast'

interface StressEntry {
  date: string
  level: number
  triggers: string[]
  coping_used: string[]
  notes?: string
  timestamp: string
}

const stressTriggers = [
  'Academic workload',
  'Exams/Tests',
  'Financial concerns',
  'Social relationships',
  'Family issues',
  'Health concerns',
  'Future planning',
  'Time management',
  'Sleep deprivation',
  'Work/Job stress',
]

const copingStrategies = [
  'Deep breathing',
  'Exercise/Walking',
  'Talking to friends',
  'Listening to music',
  'Meditation',
  'Journaling',
  'Taking a break',
  'Getting fresh air',
  'Seeking help',
  'Organizing tasks',
]

export function StressMonitor() {
  const [stressLevel, setStressLevel] = useState([5])
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([])
  const [selectedCoping, setSelectedCoping] = useState<string[]>([])
  const [notes, setNotes] = useState('')
  const [stressHistory, setStressHistory] = useState<StressEntry[]>([])
  const [showRecommendations, setShowRecommendations] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    loadStressHistory()
  }, [])

  function loadStressHistory() {
    const saved = localStorage.getItem('stress_history')
    if (saved) {
      setStressHistory(JSON.parse(saved) as StressEntry[])
    }
  }

  function toggleTrigger(trigger: string) {
    setSelectedTriggers((prev) =>
      prev.includes(trigger) ? prev.filter((t) => t !== trigger) : [...prev, trigger],
    )
  }

  function toggleCoping(strategy: string) {
    setSelectedCoping((prev) =>
      prev.includes(strategy) ? prev.filter((s) => s !== strategy) : [...prev, strategy],
    )
  }

  function saveStressEntry() {
    const newEntry: StressEntry = {
      date: new Date().toISOString().split('T')[0],
      level: stressLevel[0],
      triggers: selectedTriggers,
      coping_used: selectedCoping,
      notes: notes.trim(),
      timestamp: new Date().toISOString(),
    }

    const updatedHistory = [...stressHistory, newEntry]
    setStressHistory(updatedHistory)
    localStorage.setItem('stress_history', JSON.stringify(updatedHistory))

    // Reset form
    setStressLevel([5])
    setSelectedTriggers([])
    setSelectedCoping([])
    setNotes('')

    toast({
      title: 'Stress Level Logged',
      description: 'Your stress assessment has been saved!',
    })

    // Show recommendations for high stress
    if (stressLevel[0] >= 7) {
      setShowRecommendations(true)
    }
  }

  function getStressLabel(level: number) {
    if (level <= 2) return 'Very Low'
    if (level <= 4) return 'Low'
    if (level <= 6) return 'Moderate'
    if (level <= 8) return 'High'
    return 'Very High'
  }

  const averageStress =
    stressHistory.length > 0
      ? (stressHistory.reduce((sum, entry) => sum + entry.level, 0) / stressHistory.length).toFixed(
          1,
        )
      : null

  const recentTrends = stressHistory.slice(-5)

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-indigo-100"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
            <Activity className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#001f4d]">Current Stress Level</h2>
            <p className="text-slate-600">
              Rate your current stress level and identify what's affecting you
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-sm font-semibold text-slate-700">
                Stress Level: {stressLevel[0]}/10
              </label>
              <div
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  stressLevel[0] <= 3
                    ? 'bg-green-100 text-green-700'
                    : stressLevel[0] <= 6
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                }`}
              >
                {getStressLabel(stressLevel[0])}
              </div>
            </div>
            <Slider
              value={stressLevel}
              onValueChange={setStressLevel}
              max={10}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>No stress</span>
              <span>Extreme stress</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold mb-3 block text-slate-700">
              What's causing stress? (Select all that apply)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {stressTriggers.map((trigger, idx) => (
                <motion.button
                  key={trigger}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => toggleTrigger(trigger)}
                  className={`text-left p-3 rounded-xl border-2 text-sm transition-all duration-200 hover:shadow-md ${
                    selectedTriggers.includes(trigger)
                      ? 'border-orange-400 bg-orange-50 text-orange-800 shadow-lg'
                      : 'border-slate-200 hover:border-orange-200 hover:bg-orange-50/50'
                  }`}
                >
                  {trigger}
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold mb-3 block text-slate-700">
              What coping strategies are you using? (Select all that apply)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {copingStrategies.map((strategy, idx) => (
                <motion.button
                  key={strategy}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (idx + stressTriggers.length) * 0.05 }}
                  onClick={() => toggleCoping(strategy)}
                  className={`text-left p-3 rounded-xl border-2 text-sm transition-all duration-200 hover:shadow-md ${
                    selectedCoping.includes(strategy)
                      ? 'border-green-400 bg-green-50 text-green-800 shadow-lg'
                      : 'border-slate-200 hover:border-green-200 hover:bg-green-50/50'
                  }`}
                >
                  {strategy}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <label className="text-sm font-semibold mb-3 block text-slate-700">
              Additional notes (optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Anything else you'd like to note about your stress today?"
              className="w-full min-h-[80px] p-4 border border-slate-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#001f4d]/20 focus:border-[#001f4d] transition-all duration-200"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              onClick={saveStressEntry}
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Log Stress Assessment
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {showRecommendations && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8 shadow-lg"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-800">
                  Stress Management Recommendations
                </h3>
                <p className="text-amber-700">
                  Your stress level is high. Here are some immediate strategies to help:
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowRecommendations(false)}
              className="text-amber-600 hover:text-amber-800 hover:bg-amber-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 bg-white rounded-xl border border-amber-200 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">Immediate Relief</h4>
              </div>
              <p className="text-amber-700">
                Take 5 deep breaths, step outside for fresh air, or do a quick 2-minute meditation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-4 bg-white rounded-xl border border-amber-200 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">Longer-term Support</h4>
              </div>
              <p className="text-amber-700">
                Consider talking to a mental health professional, prioritizing sleep, and breaking
                large tasks into smaller steps.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-2 pt-2">
              <Button size="sm" className="bg-[#001f4d] hover:bg-[#001437]" asChild>
                <a href="/chat">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Talk to AI Support
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/emergency">
                  <Phone className="w-4 h-4 mr-2" />
                  Get Crisis Resources
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {stressHistory.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-indigo-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <BarChart className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#001f4d]">Stress Insights</h2>
              <p className="text-slate-600">Track your stress patterns and triggers over time</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200"
            >
              <div className="text-3xl font-bold text-[#001f4d] mb-1">{stressHistory.length}</div>
              <div className="text-sm font-medium text-slate-600">Total Entries</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200"
            >
              <div className="text-3xl font-bold text-[#001f4d] mb-1">{averageStress}</div>
              <div className="text-sm font-medium text-slate-600">Average Stress</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200"
            >
              <div
                className={`text-3xl font-bold mb-1 ${
                  (recentTrends[recentTrends.length - 1]?.level || 5) <= 3
                    ? 'text-green-600'
                    : (recentTrends[recentTrends.length - 1]?.level || 5) <= 6
                      ? 'text-yellow-600'
                      : 'text-red-600'
                }`}
              >
                {getStressLabel(recentTrends[recentTrends.length - 1]?.level || 5)}
              </div>
              <div className="text-sm font-medium text-slate-600">Current Level</div>
            </motion.div>
          </div>

          {recentTrends.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-indigo-600" />
                <h4 className="font-semibold text-slate-800">Recent Entries</h4>
              </div>
              <div className="space-y-3">
                {recentTrends.reverse().map((entry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.9 }}
                    className="flex items-center justify-between p-4 bg-indigo-50 rounded-xl border border-indigo-100 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex-1">
                      <div className="font-semibold text-slate-800">
                        {new Date(entry.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                      {entry.triggers.length > 0 && (
                        <div className="text-sm text-slate-600 mt-1">
                          Triggers: {entry.triggers.slice(0, 2).join(', ')}
                          {entry.triggers.length > 2 ? '...' : ''}
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-xl font-bold ${
                          entry.level <= 3
                            ? 'text-green-600'
                            : entry.level <= 6
                              ? 'text-yellow-600'
                              : 'text-red-600'
                        }`}
                      >
                        {entry.level}/10
                      </div>
                      <div
                        className={`text-sm ${
                          entry.level <= 3
                            ? 'text-green-600'
                            : entry.level <= 6
                              ? 'text-yellow-600'
                              : 'text-red-600'
                        }`}
                      >
                        {getStressLabel(entry.level)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

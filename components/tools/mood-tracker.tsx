"use client"

import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { 
  BarChart, 
  Calendar, 
  TrendingUp, 
  Eye, 
  EyeOff,
  Sparkles,
  Heart
} from 'lucide-react'

interface MoodEntry {
  date: string
  mood: number
  notes?: string
  timestamp: string
}

const moodEmojis = [
  { value: 1, emoji: '😢', label: 'Very Bad' },
  { value: 2, emoji: '😞', label: 'Bad' },
  { value: 3, emoji: '😐', label: 'Okay' },
  { value: 4, emoji: '🙂', label: 'Good' },
  { value: 5, emoji: '😊', label: 'Great' }
]

export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null)
  const [notes, setNotes] = useState('')
  const [moodHistory, setMoodHistory] = useState<MoodEntry[]>([])
  const [showHistory, setShowHistory] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    loadMoodHistory()
  }, [])

  function loadMoodHistory() {
    const saved = localStorage.getItem('mood_history')
    if (saved) {
      setMoodHistory(JSON.parse(saved) as MoodEntry[])
    }
  }

  function saveMoodEntry() {
    if (!selectedMood) return

    const newEntry: MoodEntry = {
      date: new Date().toISOString().split('T')[0],
      mood: selectedMood,
      notes: notes.trim(),
      timestamp: new Date().toISOString()
    }

    const updatedHistory = [...moodHistory, newEntry]
    setMoodHistory(updatedHistory)
    localStorage.setItem('mood_history', JSON.stringify(updatedHistory))

    setSelectedMood(null)
    setNotes('')
    
    toast({
      title: "Mood Logged",
      description: "Your mood has been saved successfully!"
    })
  }

  const recentEntries = moodHistory.slice(-7).reverse()
  const averageMood = moodHistory.length > 0 
    ? (moodHistory.reduce((sum, entry) => sum + entry.mood, 0) / moodHistory.length).toFixed(1)
    : null

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-indigo-100"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#001f4d]">How are you feeling today?</h2>
            <p className="text-slate-600">Select your current mood and add any notes you'd like to remember</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-5 gap-3">
            {moodEmojis.map((mood, idx) => (
              <motion.button
                key={mood.value}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedMood(mood.value)}
                className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-md ${
                  selectedMood === mood.value
                    ? 'border-[#001f4d] bg-indigo-50 shadow-lg transform scale-105'
                    : 'border-slate-200 hover:border-indigo-300'
                }`}
              >
                <span className="text-4xl mb-2 transform transition-transform duration-200 hover:scale-110">{mood.emoji}</span>
                <span className="text-sm font-semibold text-slate-700">{mood.label}</span>
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label className="text-sm font-semibold mb-3 block text-slate-700">
              Notes (optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="What's on your mind today? Any thoughts or feelings you'd like to remember..."
              className="w-full min-h-[100px] p-4 border border-slate-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#001f4d]/20 focus:border-[#001f4d] transition-all duration-200"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button 
              onClick={saveMoodEntry} 
              disabled={!selectedMood}
              className={`w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 ${
                selectedMood ? 'shadow-lg hover:shadow-xl transform hover:-translate-y-0.5' : ''
              }`}
            >
              {selectedMood ? `Log ${moodEmojis.find(m => m.value === selectedMood)?.label} Mood` : 'Select a mood to continue'}
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {moodHistory.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-indigo-100"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <BarChart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#001f4d]">Mood Insights</h2>
                <p className="text-slate-600">Your mood patterns over time</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowHistory(!showHistory)}
              className="border-indigo-200 hover:bg-indigo-50"
            >
              {showHistory ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
              {showHistory ? 'Hide' : 'Show'} History
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl mx-auto mb-3">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#001f4d] mb-1">{moodHistory.length}</div>
              <div className="text-sm font-medium text-slate-600">Total Entries</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#001f4d] mb-1">{averageMood}</div>
              <div className="text-sm font-medium text-slate-600">Average Mood</div>
            </motion.div>
          </div>

          {showHistory && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-indigo-600" />
                <h4 className="font-semibold text-slate-800">Recent Entries</h4>
              </div>
              {recentEntries.map((entry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100 hover:shadow-md transition-all duration-200"
                >
                  <div className="text-3xl transform transition-transform duration-200 hover:scale-110">
                    {moodEmojis.find(m => m.value === entry.mood)?.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">{new Date(entry.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</div>
                    {entry.notes && (
                      <div className="text-sm text-slate-600 mt-1 italic">"{entry.notes}"</div>
                    )}
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-slate-700">
                      {moodEmojis.find(m => m.value === entry.mood)?.label}
                    </div>
                    <div className="text-xs text-slate-500">
                      {new Date(entry.timestamp).toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  )
}
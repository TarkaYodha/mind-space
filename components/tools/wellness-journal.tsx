"use client"

import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { 
  BookOpen,
  Calendar,
  Edit,
  Trash2,
  Tag,
  Plus,
  Filter,
  Sparkles,
  Heart,
  Target,
  TrendingUp
} from 'lucide-react'

interface JournalEntry {
  id: string
  date: string
  title: string
  content: string
  mood?: number
  tags: string[]
  timestamp: string
}

const journalPrompts = [
  "What am I grateful for today?",
  "What was the best part of my day?",
  "What challenged me today and how did I handle it?",
  "What did I learn about myself today?",
  "What are three things I accomplished today?",
  "How am I feeling right now and why?",
  "What do I want to remember about today?",
  "What is one thing I want to improve tomorrow?",
  "Who made a positive impact on my day?",
  "What made me smile today?"
]

const tagOptions = [
  'Gratitude', 'Stress', 'Achievement', 'Relationships', 'Learning',
  'Health', 'Goals', 'Challenges', 'Joy', 'Reflection'
]

export function WellnessJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([])
  const [showNewEntry, setShowNewEntry] = useState(false)
  const [currentTitle, setCurrentTitle] = useState('')
  const [currentContent, setCurrentContent] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [filter, setFilter] = useState<string>('all')
  const { toast } = useToast()

  useEffect(() => {
    loadEntries()
  }, [])

  function loadEntries() {
    const saved = localStorage.getItem('journal_entries')
    if (saved) {
      setEntries(JSON.parse(saved) as JournalEntry[])
    }
  }

  function saveEntry() {
    if (!currentTitle.trim() || !currentContent.trim()) {
      toast({
        title: "Missing Information",
        description: "Please add both a title and content for your entry.",
        variant: "destructive"
      })
      return
    }

    const newEntry: JournalEntry = {
      id: crypto.randomUUID(),
      date: new Date().toISOString().split('T')[0],
      title: currentTitle.trim(),
      content: currentContent.trim(),
      tags: selectedTags,
      timestamp: new Date().toISOString()
    }

    const updatedEntries = [newEntry, ...entries]
    setEntries(updatedEntries)
    localStorage.setItem('journal_entries', JSON.stringify(updatedEntries))

    // Reset form
    setCurrentTitle('')
    setCurrentContent('')
    setSelectedTags([])
    setShowNewEntry(false)

    toast({
      title: "Entry Saved",
      description: "Your journal entry has been saved securely."
    })
  }

  function deleteEntry(id: string) {
    const updatedEntries = entries.filter(entry => entry.id !== id)
    setEntries(updatedEntries)
    localStorage.setItem('journal_entries', JSON.stringify(updatedEntries))
    
    toast({
      title: "Entry Deleted",
      description: "Your journal entry has been removed."
    })
  }

  function toggleTag(tag: string) {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  function selectPrompt(prompt: string) {
    setCurrentTitle(prompt)
  }

  const filteredEntries = filter === 'all' 
    ? entries 
    : entries.filter(entry => entry.tags.includes(filter))

  const recentEntry = entries[0]
  const entryCount = entries.length
  const streakDays = calculateStreak()

  function calculateStreak() {
    if (entries.length === 0) return 0
    
    let streak = 0
    const today = new Date()
    
    for (let i = 0; i < entries.length; i++) {
      const entryDate = new Date(entries[i].date)
      const daysDiff = Math.floor((today.getTime() - entryDate.getTime()) / (1000 * 60 * 60 * 24))
      
      if (daysDiff === streak) {
        streak++
      } else {
        break
      }
    }
    
    return streak
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl mx-auto mb-3">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div className="text-3xl font-bold text-[#001f4d] mb-1">{entryCount}</div>
          <div className="text-sm font-medium text-slate-600">Total Entries</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl mx-auto mb-3">
            <Target className="h-6 w-6 text-white" />
          </div>
          <div className="text-3xl font-bold text-[#001f4d] mb-1">{streakDays}</div>
          <div className="text-sm font-medium text-slate-600">Day Streak</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl mx-auto mb-3">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-[#001f4d] mb-1">
            {recentEntry ? new Date(recentEntry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'None'}
          </div>
          <div className="text-sm font-medium text-slate-600">Last Entry</div>
        </motion.div>
      </div>

      {/* New Entry Button */}
      {!showNewEntry && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-indigo-100 text-center"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl mx-auto mb-4">
            <Plus className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-[#001f4d] mb-2">Start Writing</h3>
          <p className="text-slate-600 mb-6">Take a moment to reflect and capture your thoughts</p>
          <Button 
            onClick={() => setShowNewEntry(true)} 
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <Edit className="w-5 h-5 mr-2" />
            New Journal Entry
          </Button>
        </motion.div>
      )}

      {/* New Entry Form */}
      {showNewEntry && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-indigo-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Edit className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#001f4d]">New Journal Entry</h2>
              <p className="text-slate-600">Take a moment to reflect on your thoughts and feelings</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Prompts */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label className="text-sm font-semibold mb-3 block text-slate-700">
                Need inspiration? Try a prompt:
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {journalPrompts.slice(0, 4).map((prompt, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => selectPrompt(prompt)}
                    className="text-left p-3 text-sm border-2 border-slate-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200"
                  >
                    <Sparkles className="w-4 h-4 inline mr-2 text-emerald-600" />
                    {prompt}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="text-sm font-semibold mb-3 block text-slate-700">
                Entry Title
              </label>
              <input
                type="text"
                value={currentTitle}
                onChange={(e) => setCurrentTitle(e.target.value)}
                placeholder="What's on your mind today?"
                className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#001f4d]/20 focus:border-[#001f4d] transition-all duration-200"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="text-sm font-semibold mb-3 block text-slate-700">
                Your Thoughts
              </label>
              <textarea
                value={currentContent}
                onChange={(e) => setCurrentContent(e.target.value)}
                placeholder="Write freely about your thoughts, feelings, experiences..."
                className="w-full min-h-[180px] p-4 border border-slate-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#001f4d]/20 focus:border-[#001f4d] transition-all duration-200"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="text-sm font-semibold mb-3 block text-slate-700">
                Tags (optional)
              </label>
              <div className="flex flex-wrap gap-2">
                {tagOptions.map((tag, idx) => (
                  <motion.button
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 text-sm rounded-full border-2 transition-all duration-200 hover:shadow-md ${
                      selectedTags.includes(tag)
                        ? 'border-emerald-400 bg-emerald-50 text-emerald-800'
                        : 'border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/50'
                    }`}
                  >
                    <Tag className="w-3 h-3 inline mr-1" />
                    {tag}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-3 pt-2"
            >
              <Button 
                onClick={saveEntry} 
                className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <Heart className="w-4 h-4 mr-2" />
                Save Entry
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowNewEntry(false)
                  setCurrentTitle('')
                  setCurrentContent('')
                  setSelectedTags([])
                }}
                className="px-6 border-slate-300 hover:bg-slate-50"
              >
                Cancel
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Entries List */}
      {entries.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-indigo-100"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#001f4d]">Your Journal Entries</h2>
                <p className="text-slate-600">Your private thoughts and reflections</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-500" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#001f4d]/20 focus:border-[#001f4d]"
              >
                <option value="all">All Entries</option>
                {tagOptions.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {filteredEntries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-indigo-100 rounded-xl p-6 hover:shadow-md transition-all duration-200 bg-indigo-50/30"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 text-lg mb-1">{entry.title}</h3>
                    <p className="text-sm text-slate-500 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(entry.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteEntry(entry.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                
                <p className="text-slate-700 mb-4 whitespace-pre-wrap leading-relaxed">{entry.content}</p>
                
                {entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-emerald-100 text-emerald-800 rounded-full font-medium"
                      >
                        <Tag className="w-3 h-3 inline mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
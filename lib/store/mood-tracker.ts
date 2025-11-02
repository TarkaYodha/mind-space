import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * Mood Tracker Store
 * Manages mood entries and tracking state
 */

export type MoodType =
  | 'happy'
  | 'sad'
  | 'anxious'
  | 'calm'
  | 'stressed'
  | 'neutral'
  | 'excited'
  | 'angry'
export type MoodIntensity = 'low' | 'medium' | 'high'

export interface MoodEntry {
  id: string
  mood: MoodType
  intensity: MoodIntensity
  notes?: string
  triggers?: string[]
  timestamp: number
  synced: boolean // Whether it's been synced to the database
}

interface MoodTrackerState {
  // Current mood entries (local cache)
  entries: MoodEntry[]

  // Current mood being edited
  currentMood: MoodType | null
  currentIntensity: MoodIntensity | null
  currentNotes: string
  currentTriggers: string[]

  // UI state
  isTracking: boolean
  showHistory: boolean
  selectedDate: Date | null

  // Actions - Current mood
  setCurrentMood: (mood: MoodType | null) => void
  setCurrentIntensity: (intensity: MoodIntensity | null) => void
  setCurrentNotes: (notes: string) => void
  addTrigger: (trigger: string) => void
  removeTrigger: (trigger: string) => void
  clearCurrentTriggers: () => void

  // Actions - Entries
  addEntry: (entry: Omit<MoodEntry, 'id' | 'timestamp' | 'synced'>) => void
  updateEntry: (id: string, updates: Partial<MoodEntry>) => void
  deleteEntry: (id: string) => void
  markAsSynced: (id: string) => void
  getUnsyncedEntries: () => MoodEntry[]

  // Actions - UI
  startTracking: () => void
  cancelTracking: () => void
  finishTracking: () => void
  toggleHistory: () => void
  setSelectedDate: (date: Date | null) => void

  // Utilities
  getEntriesForDate: (date: Date) => MoodEntry[]
  getEntriesForRange: (startDate: Date, endDate: Date) => MoodEntry[]
  getLatestEntry: () => MoodEntry | null
  getMoodStreak: () => number // Days in a row with tracked mood

  // Reset
  reset: () => void
}

export const useMoodTracker = create<MoodTrackerState>()(
  persist(
    (set, get) => ({
      // Initial state
      entries: [],
      currentMood: null,
      currentIntensity: null,
      currentNotes: '',
      currentTriggers: [],
      isTracking: false,
      showHistory: false,
      selectedDate: null,

      // Current mood actions
      setCurrentMood: (mood) => set({ currentMood: mood }),
      setCurrentIntensity: (intensity) => set({ currentIntensity: intensity }),
      setCurrentNotes: (notes) => set({ currentNotes: notes }),
      addTrigger: (trigger) =>
        set((state) => ({
          currentTriggers: [...state.currentTriggers, trigger],
        })),
      removeTrigger: (trigger) =>
        set((state) => ({
          currentTriggers: state.currentTriggers.filter((t) => t !== trigger),
        })),
      clearCurrentTriggers: () => set({ currentTriggers: [] }),

      // Entry actions
      addEntry: (entry) =>
        set((state) => ({
          entries: [
            {
              ...entry,
              id: `mood-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
              timestamp: Date.now(),
              synced: false,
            },
            ...state.entries,
          ],
        })),

      updateEntry: (id, updates) =>
        set((state) => ({
          entries: state.entries.map((entry) =>
            entry.id === id ? { ...entry, ...updates, synced: false } : entry,
          ),
        })),

      deleteEntry: (id) =>
        set((state) => ({
          entries: state.entries.filter((entry) => entry.id !== id),
        })),

      markAsSynced: (id) =>
        set((state) => ({
          entries: state.entries.map((entry) =>
            entry.id === id ? { ...entry, synced: true } : entry,
          ),
        })),

      getUnsyncedEntries: () => get().entries.filter((entry) => !entry.synced),

      // UI actions
      startTracking: () =>
        set({
          isTracking: true,
          currentMood: null,
          currentIntensity: null,
          currentNotes: '',
          currentTriggers: [],
        }),

      cancelTracking: () =>
        set({
          isTracking: false,
          currentMood: null,
          currentIntensity: null,
          currentNotes: '',
          currentTriggers: [],
        }),

      finishTracking: () => {
        const { currentMood, currentIntensity, currentNotes, currentTriggers } = get()

        if (currentMood && currentIntensity) {
          get().addEntry({
            mood: currentMood,
            intensity: currentIntensity,
            notes: currentNotes || undefined,
            triggers: currentTriggers.length > 0 ? currentTriggers : undefined,
          })

          set({
            isTracking: false,
            currentMood: null,
            currentIntensity: null,
            currentNotes: '',
            currentTriggers: [],
          })
        }
      },

      toggleHistory: () => set((state) => ({ showHistory: !state.showHistory })),
      setSelectedDate: (date) => set({ selectedDate: date }),

      // Utility functions
      getEntriesForDate: (date) => {
        const startOfDay = new Date(date).setHours(0, 0, 0, 0)
        const endOfDay = new Date(date).setHours(23, 59, 59, 999)

        return get().entries.filter(
          (entry) => entry.timestamp >= startOfDay && entry.timestamp <= endOfDay,
        )
      },

      getEntriesForRange: (startDate, endDate) => {
        const start = new Date(startDate).setHours(0, 0, 0, 0)
        const end = new Date(endDate).setHours(23, 59, 59, 999)

        return get().entries.filter((entry) => entry.timestamp >= start && entry.timestamp <= end)
      },

      getLatestEntry: () => {
        const entries = get().entries
        return entries.length > 0 ? entries[0] : null
      },

      getMoodStreak: () => {
        const entries = get().entries
        if (entries.length === 0) return 0

        let streak = 0
        const today = new Date().setHours(0, 0, 0, 0)

        // Check if there's an entry for today
        const hasToday = entries.some((entry) => {
          const entryDate = new Date(entry.timestamp).setHours(0, 0, 0, 0)
          return entryDate === today
        })

        if (!hasToday) return 0

        // Count consecutive days
        let currentDate = today
        while (true) {
          const hasEntry = entries.some((entry) => {
            const entryDate = new Date(entry.timestamp).setHours(0, 0, 0, 0)
            return entryDate === currentDate
          })

          if (!hasEntry) break

          streak++
          currentDate -= 24 * 60 * 60 * 1000 // Go back one day
        }

        return streak
      },

      // Reset
      reset: () =>
        set({
          entries: [],
          currentMood: null,
          currentIntensity: null,
          currentNotes: '',
          currentTriggers: [],
          isTracking: false,
          showHistory: false,
          selectedDate: null,
        }),
    }),
    {
      name: 'mindspace-mood-tracker',
      version: 1,
    },
  ),
)

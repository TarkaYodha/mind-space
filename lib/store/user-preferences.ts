import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * User Preferences Store
 * Manages user settings with localStorage persistence
 */

export type Theme = 'light' | 'dark' | 'system'
export type DigestFrequency = 'daily' | 'weekly' | 'monthly'

interface UserPreferences {
  // Theme settings
  theme: Theme
  setTheme: (theme: Theme) => void

  // Notification settings
  notifications: boolean
  toggleNotifications: () => void
  setNotifications: (enabled: boolean) => void

  // Email digest settings
  emailDigest: boolean
  digestFrequency: DigestFrequency
  toggleEmailDigest: () => void
  setDigestFrequency: (frequency: DigestFrequency) => void

  // Crisis alerts
  crisisAlerts: boolean
  toggleCrisisAlerts: () => void
  setCrisisAlerts: (enabled: boolean) => void

  // Data sharing (for research/analytics)
  dataSharing: boolean
  toggleDataSharing: () => void
  setDataSharing: (enabled: boolean) => void

  // Language & accessibility
  language: string
  setLanguage: (lang: string) => void

  fontSize: 'small' | 'medium' | 'large'
  setFontSize: (size: 'small' | 'medium' | 'large') => void

  reducedMotion: boolean
  toggleReducedMotion: () => void

  // Sound settings
  soundEnabled: boolean
  toggleSound: () => void

  // Reset to defaults
  reset: () => void
}

const defaultPreferences = {
  theme: 'system' as Theme,
  notifications: true,
  emailDigest: false,
  digestFrequency: 'weekly' as DigestFrequency,
  crisisAlerts: true,
  dataSharing: false,
  language: 'en',
  fontSize: 'medium' as const,
  reducedMotion: false,
  soundEnabled: true,
}

export const useUserPreferences = create<UserPreferences>()(
  persist(
    (set) => ({
      ...defaultPreferences,

      // Theme
      setTheme: (theme) => set({ theme }),

      // Notifications
      toggleNotifications: () => set((state) => ({ notifications: !state.notifications })),
      setNotifications: (enabled) => set({ notifications: enabled }),

      // Email digest
      toggleEmailDigest: () => set((state) => ({ emailDigest: !state.emailDigest })),
      setDigestFrequency: (frequency) => set({ digestFrequency: frequency }),

      // Crisis alerts
      toggleCrisisAlerts: () => set((state) => ({ crisisAlerts: !state.crisisAlerts })),
      setCrisisAlerts: (enabled) => set({ crisisAlerts: enabled }),

      // Data sharing
      toggleDataSharing: () => set((state) => ({ dataSharing: !state.dataSharing })),
      setDataSharing: (enabled) => set({ dataSharing: enabled }),

      // Language
      setLanguage: (lang) => set({ language: lang }),

      // Accessibility
      setFontSize: (size) => set({ fontSize: size }),
      toggleReducedMotion: () => set((state) => ({ reducedMotion: !state.reducedMotion })),

      // Sound
      toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),

      // Reset
      reset: () => set(defaultPreferences),
    }),
    {
      name: 'mindspace-preferences',
      version: 1,
    },
  ),
)

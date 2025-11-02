import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * Chat Store
 * Manages chat interface state and message history
 */

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: number
  hasCrisisContent?: boolean
  service?: string // Which AI service responded (gemini, openai, fallback)
  isError?: boolean
  synced: boolean // Whether it's been synced to the database
}

export interface ChatSession {
  id: string
  title: string
  messages: ChatMessage[]
  createdAt: number
  updatedAt: number
  isActive: boolean
}

interface ChatState {
  // Sessions
  sessions: ChatSession[]
  currentSessionId: string | null

  // UI state
  isTyping: boolean
  isSending: boolean
  showHistory: boolean
  showCrisisWarning: boolean
  inputValue: string

  // Scroll behavior
  shouldAutoScroll: boolean

  // Suggested prompts
  suggestedPrompts: string[]
  showSuggestions: boolean

  // Actions - Sessions
  createSession: (title?: string) => string
  deleteSession: (sessionId: string) => void
  setCurrentSession: (sessionId: string) => void
  updateSessionTitle: (sessionId: string, title: string) => void
  getSession: (sessionId: string) => ChatSession | undefined
  getCurrentSession: () => ChatSession | undefined

  // Actions - Messages
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp' | 'synced'>) => void
  updateMessage: (messageId: string, updates: Partial<ChatMessage>) => void
  deleteMessage: (messageId: string) => void
  markAsSynced: (messageId: string) => void
  getUnsyncedMessages: () => ChatMessage[]
  clearCurrentSession: () => void

  // Actions - UI
  setInputValue: (value: string) => void
  setIsTyping: (typing: boolean) => void
  setIsSending: (sending: boolean) => void
  toggleHistory: () => void
  setShowCrisisWarning: (show: boolean) => void
  setShouldAutoScroll: (should: boolean) => void
  setShowSuggestions: (show: boolean) => void

  // Suggested prompts
  addSuggestedPrompt: (prompt: string) => void
  removeSuggestedPrompt: (prompt: string) => void
  clearSuggestedPrompts: () => void

  // Utilities
  getMessageCount: () => number
  getLastMessage: () => ChatMessage | null
  hasMessages: () => boolean
  exportSession: (sessionId: string) => string | null

  // Reset
  reset: () => void
}

const defaultSuggestedPrompts = [
  "I'm feeling overwhelmed with school work",
  'How can I manage stress better?',
  'I need help with anxiety',
  "I'm having trouble sleeping",
  'How do I balance work and personal life?',
]

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      // Initial state
      sessions: [],
      currentSessionId: null,
      isTyping: false,
      isSending: false,
      showHistory: false,
      showCrisisWarning: false,
      inputValue: '',
      shouldAutoScroll: true,
      suggestedPrompts: defaultSuggestedPrompts,
      showSuggestions: true,

      // Session actions
      createSession: (title) => {
        const id = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        const newSession: ChatSession = {
          id,
          title: title || `Chat ${new Date().toLocaleDateString()}`,
          messages: [],
          createdAt: Date.now(),
          updatedAt: Date.now(),
          isActive: true,
        }

        set((state) => ({
          sessions: [newSession, ...state.sessions.map((s) => ({ ...s, isActive: false }))],
          currentSessionId: id,
        }))

        return id
      },

      deleteSession: (sessionId) =>
        set((state) => {
          const newSessions = state.sessions.filter((s) => s.id !== sessionId)
          const newCurrentId =
            state.currentSessionId === sessionId
              ? newSessions.length > 0
                ? newSessions[0].id
                : null
              : state.currentSessionId

          return {
            sessions: newSessions,
            currentSessionId: newCurrentId,
          }
        }),

      setCurrentSession: (sessionId) =>
        set((state) => ({
          currentSessionId: sessionId,
          sessions: state.sessions.map((s) => ({
            ...s,
            isActive: s.id === sessionId,
          })),
        })),

      updateSessionTitle: (sessionId, title) =>
        set((state) => ({
          sessions: state.sessions.map((s) =>
            s.id === sessionId ? { ...s, title, updatedAt: Date.now() } : s,
          ),
        })),

      getSession: (sessionId) => get().sessions.find((s) => s.id === sessionId),

      getCurrentSession: () => {
        const { sessions, currentSessionId } = get()
        return sessions.find((s) => s.id === currentSessionId)
      },

      // Message actions
      addMessage: (message) => {
        const { currentSessionId, sessions } = get()

        // Create a new session if none exists
        if (!currentSessionId) {
          get().createSession()
        }

        const sessionId = get().currentSessionId

        if (!sessionId) return

        const newMessage: ChatMessage = {
          ...message,
          id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          timestamp: Date.now(),
          synced: false,
        }

        set((state) => ({
          sessions: state.sessions.map((s) =>
            s.id === sessionId
              ? {
                  ...s,
                  messages: [...s.messages, newMessage],
                  updatedAt: Date.now(),
                }
              : s,
          ),
          showSuggestions: false,
        }))
      },

      updateMessage: (messageId, updates) =>
        set((state) => ({
          sessions: state.sessions.map((s) => ({
            ...s,
            messages: s.messages.map((m) =>
              m.id === messageId ? { ...m, ...updates, synced: false } : m,
            ),
          })),
        })),

      deleteMessage: (messageId) =>
        set((state) => ({
          sessions: state.sessions.map((s) => ({
            ...s,
            messages: s.messages.filter((m) => m.id !== messageId),
          })),
        })),

      markAsSynced: (messageId) =>
        set((state) => ({
          sessions: state.sessions.map((s) => ({
            ...s,
            messages: s.messages.map((m) => (m.id === messageId ? { ...m, synced: true } : m)),
          })),
        })),

      getUnsyncedMessages: () => {
        const sessions = get().sessions
        return sessions.flatMap((s) => s.messages.filter((m) => !m.synced))
      },

      clearCurrentSession: () => {
        const { currentSessionId } = get()
        if (!currentSessionId) return

        set((state) => ({
          sessions: state.sessions.map((s) =>
            s.id === currentSessionId ? { ...s, messages: [], updatedAt: Date.now() } : s,
          ),
        }))
      },

      // UI actions
      setInputValue: (value) => set({ inputValue: value }),
      setIsTyping: (typing) => set({ isTyping: typing }),
      setIsSending: (sending) => set({ isSending: sending }),
      toggleHistory: () => set((state) => ({ showHistory: !state.showHistory })),
      setShowCrisisWarning: (show) => set({ showCrisisWarning: show }),
      setShouldAutoScroll: (should) => set({ shouldAutoScroll: should }),
      setShowSuggestions: (show) => set({ showSuggestions: show }),

      // Suggested prompts
      addSuggestedPrompt: (prompt) =>
        set((state) => ({
          suggestedPrompts: [...state.suggestedPrompts, prompt],
        })),

      removeSuggestedPrompt: (prompt) =>
        set((state) => ({
          suggestedPrompts: state.suggestedPrompts.filter((p) => p !== prompt),
        })),

      clearSuggestedPrompts: () => set({ suggestedPrompts: [] }),

      // Utilities
      getMessageCount: () => {
        const session = get().getCurrentSession()
        return session ? session.messages.length : 0
      },

      getLastMessage: () => {
        const session = get().getCurrentSession()
        if (!session || session.messages.length === 0) return null
        return session.messages[session.messages.length - 1]
      },

      hasMessages: () => {
        const session = get().getCurrentSession()
        return session ? session.messages.length > 0 : false
      },

      exportSession: (sessionId) => {
        const session = get().getSession(sessionId)
        if (!session) return null

        const exportData = {
          title: session.title,
          date: new Date(session.createdAt).toLocaleDateString(),
          messages: session.messages.map((m) => ({
            role: m.role,
            content: m.content,
            timestamp: new Date(m.timestamp).toLocaleString(),
          })),
        }

        return JSON.stringify(exportData, null, 2)
      },

      // Reset
      reset: () =>
        set({
          sessions: [],
          currentSessionId: null,
          isTyping: false,
          isSending: false,
          showHistory: false,
          showCrisisWarning: false,
          inputValue: '',
          shouldAutoScroll: true,
          suggestedPrompts: defaultSuggestedPrompts,
          showSuggestions: true,
        }),
    }),
    {
      name: 'mindspace-chat',
      version: 1,
      // Only persist sessions and current session ID
      partialize: (state) => ({
        sessions: state.sessions,
        currentSessionId: state.currentSessionId,
        suggestedPrompts: state.suggestedPrompts,
      }),
    },
  ),
)

"use client"

import { useState, useRef, useEffect } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogAction, AlertDialogCancel } from '@/components/ui/alert-dialog'
import { SendIcon } from '@/components/ui/icons'
import { Trash2, Mic, MicOff, Volume2, VolumeX } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
  isHighRisk?: boolean
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showCrisisAlert, setShowCrisisAlert] = useState(false)
  const [showClearConfirm, setShowClearConfirm] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [speechSupported, setSpeechSupported] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const [speechRate, setSpeechRate] = useState(0.85)
  const [showVoiceSettings, setShowVoiceSettings] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const recognitionRef = useRef<any>(null)
  const synthRef = useRef<any>(null)

  useEffect(() => {
    loadChatHistory()
    initializeSpeech()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  // Initialize speech recognition and synthesis
  function initializeSpeech() {
    if (typeof window !== 'undefined') {
      // Check for speech recognition support
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = false
        recognitionRef.current.interimResults = true
        recognitionRef.current.lang = 'en-US'

        recognitionRef.current.onstart = () => {
          setIsListening(true)
        }

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript
          setInput(transcript)
        }

        recognitionRef.current.onend = () => {
          setIsListening(false)
        }

        recognitionRef.current.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error)
          setIsListening(false)
        }

        setSpeechSupported(true)
      }

      // Check for speech synthesis support
      if ('speechSynthesis' in window) {
        synthRef.current = window.speechSynthesis

        // Ensure voices are loaded
        const loadVoices = () => {
          const voices = synthRef.current.getVoices()
          if (voices.length === 0) {
            // Voices not loaded yet, try again
            setTimeout(loadVoices, 100)
          }
        }

        // Load voices immediately and on voiceschanged event
        loadVoices()
        synthRef.current.addEventListener('voiceschanged', loadVoices)
      }
    }
  }

  // Start voice recording
  function startListening() {
    if (recognitionRef.current && !isListening) {
      try {
        recognitionRef.current.start()
      } catch (error) {
        console.error('Error starting speech recognition:', error)
      }
    }
  }

  // Stop voice recording
  function stopListening() {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop()
    }
  }

  // Speak AI response with improved clarity
  function speakText(text: string) {
    if (synthRef.current && voiceEnabled) {
      // Cancel any ongoing speech
      synthRef.current.cancel()

      // Clean and prepare text for better speech output
      const cleanedText = preprocessTextForSpeech(text)

      const utterance = new SpeechSynthesisUtterance(cleanedText)

      // Get the best available voice
      const voices = synthRef.current.getVoices()
      const preferredVoice = getBestVoice(voices)
      if (preferredVoice) {
        utterance.voice = preferredVoice
      }

      // Optimized settings for clarity
      utterance.rate = speechRate  // User-adjustable speech rate
      utterance.pitch = 0.95       // Slightly lower pitch for natural sound
      utterance.volume = 1         // Full volume
      utterance.lang = 'en-US'     // Explicit language setting

      utterance.onstart = () => {
        setIsSpeaking(true)
      }

      utterance.onend = () => {
        setIsSpeaking(false)
      }

      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event.error)
        setIsSpeaking(false)
      }

      // Small delay to ensure voices are loaded
      setTimeout(() => {
        synthRef.current.speak(utterance)
      }, 100)
    }
  }

  // Preprocess text for clearer speech output
  function preprocessTextForSpeech(text: string): string {
    let cleanedText = text

    // Remove or replace problematic characters and formatting
    cleanedText = cleanedText.replace(/\*\*/g, '')          // Remove markdown bold
    cleanedText = cleanedText.replace(/\*/g, '')            // Remove markdown italic
    cleanedText = cleanedText.replace(/`/g, '')             // Remove code backticks
    cleanedText = cleanedText.replace(/#{1,6}\s/g, '')      // Remove markdown headers
    cleanedText = cleanedText.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')  // Convert links to just text

    // Improve pronunciation of common terms
    cleanedText = cleanedText.replace(/\bAI\b/g, 'A I')     // Spell out AI
    cleanedText = cleanedText.replace(/\bAPI\b/g, 'A P I')  // Spell out API
    cleanedText = cleanedText.replace(/\bURL\b/g, 'U R L')  // Spell out URL

    // Add pauses for better pacing
    cleanedText = cleanedText.replace(/\. /g, '. ')         // Ensure space after periods
    cleanedText = cleanedText.replace(/\? /g, '? ')         // Ensure space after questions
    cleanedText = cleanedText.replace(/! /g, '! ')          // Ensure space after exclamations

    // Replace common abbreviations with full words
    cleanedText = cleanedText.replace(/\be\.g\./g, 'for example')
    cleanedText = cleanedText.replace(/\bi\.e\./g, 'that is')
    cleanedText = cleanedText.replace(/\betc\./g, 'et cetera')

    return cleanedText.trim()
  }

  // Get the best available voice for speech synthesis
  function getBestVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
    if (!voices.length) return null

    // Prefer English voices
    const englishVoices = voices.filter(voice =>
      voice.lang.startsWith('en-') && voice.localService
    )

    // Priority order for voice selection
    const preferredNames = [
      'Samantha',      // macOS high quality
      'Alex',          // macOS natural
      'Karen',         // Windows natural
      'Hazel',         // macOS UK English
      'Daniel',        // macOS UK English male
      'Zira',          // Windows female
      'David',         // Windows male
      'Google US English', // Chrome/Android
      'Microsoft Aria Online', // Edge/Windows
    ]

    // Try to find preferred voices
    for (const preferredName of preferredNames) {
      const voice = englishVoices.find(v => v.name.includes(preferredName))
      if (voice) return voice
    }

    // Fallback to first local English voice
    const localEnglishVoice = englishVoices.find(voice => voice.localService)
    if (localEnglishVoice) return localEnglishVoice

    // Fallback to any English voice
    const anyEnglishVoice = voices.find(voice => voice.lang.startsWith('en-'))
    if (anyEnglishVoice) return anyEnglishVoice

    // Last resort: first available voice
    return voices[0] || null
  }

  // Stop speaking
  function stopSpeaking() {
    if (synthRef.current) {
      synthRef.current.cancel()
      setIsSpeaking(false)
    }
  }

  async function loadChatHistory() {
    // Load chat history from localStorage instead of Supabase
    const savedMessages = localStorage.getItem('chat-history')
    if (savedMessages) {
      const parsedMessages = JSON.parse(savedMessages).map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }))
      setMessages(parsedMessages)
    }
  }

  function clearChat() {
    setMessages([])
    localStorage.removeItem('chat-history')
    setShowClearConfirm(false)
  }

  function handleClearClick() {
    setShowClearConfirm(true)
  }

  async function handleSendMessage(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return

    const newMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, newMessage])
    setInput('')
    setIsTyping(true)

    try {
      // Send message to AI service
      const response = await processMessage(newMessage.content)

      // Check for crisis keywords locally as backup
      const isCrisis = detectCrisis(newMessage.content)
      if (isCrisis) {
        setShowCrisisAlert(true)
      }

      const aiResponse: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
        isHighRisk: isCrisis
      }

      setMessages(prev => [...prev, aiResponse])

      // Speak the AI response if voice is enabled
      if (voiceEnabled && response) {
        speakText(response)
      }

      // Save conversation to localStorage instead of Supabase
      const updatedMessages = [...messages, newMessage, aiResponse]
      localStorage.setItem('chat-history', JSON.stringify(updatedMessages))
    } catch (error) {
      console.error('Error processing message:', error)
    } finally {
      setIsTyping(false)
    }
  }

  async function processMessage(content: string): Promise<string> {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: content }),
      })

      if (!response.ok) {
        throw new Error('Failed to get AI response')
      }

      const data = await response.json()

      // Show crisis alert if AI detected crisis content
      if (data.hasCrisisContent) {
        setShowCrisisAlert(true)
      }

      return data.response
    } catch (error) {
      console.error('Error calling AI API:', error)
      // Fallback response if API fails
      return "I'm sorry, I'm having trouble connecting right now. If you're in crisis, please call 988 or visit the emergency page for immediate help."
    }
  }

  function detectCrisis(content: string): boolean {
    const crisisKeywords = [
      'suicide', 'kill myself', 'end it all', 'want to die',
      'self-harm', 'hurt myself', 'give up', 'no reason to live'
    ]
    return crisisKeywords.some(keyword =>
      content.toLowerCase().includes(keyword.toLowerCase())
    )
  }

  return (
    <div className="flex flex-col h-[600px] w-full">
      {/* Chat Header with Clear Button */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-indigo-200">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">AI Mental Health Assistant</h2>
          <p className="text-sm text-slate-500 mt-1">Share your thoughts safely and get personalized support</p>
        </div>
        {messages.length > 0 && (
          <button
            onClick={handleClearClick}
            className="flex items-center gap-2 px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium"
          >
            <Trash2 className="h-4 w-4" />
            Clear Chat
          </button>
        )}
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 bg-indigo-50/30 rounded-xl p-4 mb-6 overflow-hidden">
        <ScrollArea className="h-full" ref={scrollRef}>
          <div className="space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Welcome to MindSpace AI Chat</h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  I'm here to listen and support you. Share what's on your mind, ask questions, or just talk about how you're feeling today.
                </p>
              </div>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                    message.role === 'user'
                      ? 'bg-[#001f4d] text-white ml-4'
                      : 'bg-white border border-indigo-100 text-slate-800'
                  }`}
                >
                  <div className="text-sm leading-relaxed">{message.content}</div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex-1">
                      {message.role === 'user' && (
                        <div className="text-xs text-blue-200 opacity-75">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      )}
                      {message.role === 'assistant' && (
                        <div className="text-xs text-slate-400">
                          AI Assistant • {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      )}
                    </div>
                    {message.role === 'assistant' && speechSupported && (
                      <button
                        onClick={() => speakText(message.content)}
                        disabled={isSpeaking}
                        className="ml-3 p-1.5 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Listen to this message"
                      >
                        <Volume2 className="h-3 w-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-indigo-100 rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                    <span className="text-sm text-slate-500 ml-2">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Voice Controls */}
      {speechSupported ? (
        <div className="flex justify-center gap-4 mb-4 p-3 bg-indigo-50/50 rounded-xl">
          <button
            onClick={isListening ? stopListening : startListening}
            disabled={isTyping}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              isListening
                ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            {isListening ? 'Stop Recording' : 'Voice Input'}
          </button>

          <button
            onClick={() => setVoiceEnabled(!voiceEnabled)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              voiceEnabled
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'bg-gray-400 hover:bg-gray-500 text-white'
            }`}
          >
            {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            {voiceEnabled ? 'Voice On' : 'Voice Off'}
          </button>

          <button
            onClick={() => setShowVoiceSettings(!showVoiceSettings)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors"
          >
            ⚙️ Voice Settings
          </button>

          {isSpeaking && (
            <button
              onClick={stopSpeaking}
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
            >
              <VolumeX className="h-4 w-4" />
              Stop Speaking
            </button>
          )}
        </div>
      ) : (
        <div className="text-center mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="text-sm text-yellow-800">
            🎤 Voice features are not supported in this browser. Please use a modern browser like Chrome, Edge, or Safari for voice functionality.
          </p>
        </div>
      )}

      {/* Voice Settings Panel */}
      {showVoiceSettings && (
        <div className="mb-4 p-4 bg-indigo-50 border border-indigo-200 rounded-xl">
          <h3 className="text-sm font-semibold text-slate-800 mb-3">Voice Settings</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-2">
                Speech Speed: {speechRate.toFixed(2)}x
              </label>
              <input
                type="range"
                min="0.5"
                max="1.5"
                step="0.05"
                value={speechRate}
                onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>Slow (0.5x)</span>
                <span>Normal (1.0x)</span>
                <span>Fast (1.5x)</span>
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => speakText("This is a test of the speech quality. The AI assistant is now speaking more clearly with improved settings.")}
                disabled={isSpeaking}
                className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50"
              >
                🔊 Test Voice
              </button>
              <button
                onClick={stopSpeaking}
                disabled={!isSpeaking}
                className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50"
              >
                ⏹️ Stop
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Voice Status Indicator */}
      {(isListening || isSpeaking) && (
        <div className="text-center mb-4">
          {isListening && (
            <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              Listening... Speak clearly into your microphone
            </div>
          )}
          {isSpeaking && (
            <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              AI is speaking...
            </div>
          )}
        </div>
      )}

      {/* Input Form */}
      <form onSubmit={handleSendMessage} className="flex gap-3">
        <div className="flex-1 relative">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isListening ? "Listening for your voice..." : "Type your message... (Press Enter to send)"}
            className={`w-full px-4 py-3 border border-indigo-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-slate-800 placeholder-slate-400 ${
              isListening ? 'bg-blue-50 border-blue-300' : ''
            }`}
            disabled={isTyping || isListening}
          />
          {speechSupported && (
            <button
              type="button"
              onClick={isListening ? stopListening : startListening}
              disabled={isTyping}
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1.5 rounded-lg transition-colors ${
                isListening
                  ? 'text-red-500 hover:bg-red-100'
                  : 'text-gray-400 hover:text-blue-500 hover:bg-blue-100'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </button>
          )}
        </div>
        <button
          type="submit"
          disabled={!input.trim() || isTyping || isListening}
          className="px-6 py-3 bg-[#001f4d] text-white rounded-xl font-medium hover:bg-[#001437] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <SendIcon className="h-4 w-4" />
          Send
        </button>
      </form>

      <AlertDialog open={showCrisisAlert} onOpenChange={setShowCrisisAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Would you like to talk to someone right now?</AlertDialogTitle>
            <AlertDialogDescription>
              We've detected that you might be in crisis. We have crisis resources and professional help available 24/7 to help you through this.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-end gap-2">
            <AlertDialogCancel>Continue with AI Chat</AlertDialogCancel>
            <AlertDialogAction onClick={() => window.location.href = '/emergency'}>
              Get Crisis Resources
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showClearConfirm} onOpenChange={setShowClearConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Clear Chat History?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete all your chat messages. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-end gap-2">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={clearChat} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Clear Chat
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
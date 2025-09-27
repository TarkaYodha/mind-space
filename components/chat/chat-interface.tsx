"use client"

import { useState, useRef, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogAction, AlertDialogCancel } from '@/components/ui/alert-dialog'
import { SendIcon } from '@/components/ui/icons'
import { Trash2 } from 'lucide-react'

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
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    loadChatHistory()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

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
                  {message.role === 'user' && (
                    <div className="text-xs text-blue-200 mt-2 opacity-75">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  )}
                  {message.role === 'assistant' && (
                    <div className="text-xs text-slate-400 mt-2">
                      AI Assistant • {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  )}
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

      {/* Input Form */}
      <form onSubmit={handleSendMessage} className="flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message... (Press Enter to send)"
          className="flex-1 px-4 py-3 border border-indigo-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-slate-800 placeholder-slate-400"
          disabled={isTyping}
        />
        <button
          type="submit"
          disabled={!input.trim() || isTyping}
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
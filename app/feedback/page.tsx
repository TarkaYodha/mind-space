'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Lightbulb, Mail, MessageSquare, Sparkles, Star, User } from 'lucide-react'
import { type ChangeEvent, type FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import { NavBar } from '@/components/layout/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { FEEDBACK_CATEGORIES } from '@/lib/constants/home'

type FullFeedbackFormData = {
  name: string
  email: string
  category: string
  rating: string
  subject: string
  message: string
}

type FeedbackRatingOption = {
  value: string
  label: string
}

const INITIAL_FORM_STATE: FullFeedbackFormData = {
  name: '',
  email: '',
  category: '',
  rating: '',
  subject: '',
  message: '',
}

const FEEDBACK_RATING_OPTIONS: FeedbackRatingOption[] = [
  { value: '5', label: '⭐⭐⭐⭐⭐ Excellent' },
  { value: '4', label: '⭐⭐⭐⭐ Good' },
  { value: '3', label: '⭐⭐⭐ Average' },
  { value: '2', label: '⭐⭐ Poor' },
  { value: '1', label: '⭐ Very Poor' },
]

export default function FeedbackPage() {
  const [formData, setFormData] = useState<FullFeedbackFormData>(() => ({ ...INITIAL_FORM_STATE }))
  const [isSubmitted, setIsSubmitted] = useState(false)
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current)
      }
    }
  }, [])

  const handleInputChange = useCallback(
    (field: keyof FullFeedbackFormData) =>
      (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target
        setFormData((prev) => ({ ...prev, [field]: value }))
      },
    [],
  )

  const handleSelectChange = useCallback(
    (field: keyof FullFeedbackFormData) => (value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }))
    },
    [],
  )

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // TODO: integrate with backend feedback endpoint
    setIsSubmitted(true)

    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current)
    }

    resetTimeoutRef.current = setTimeout(() => {
      setIsSubmitted(false)
      setFormData(() => ({ ...INITIAL_FORM_STATE }))
      resetTimeoutRef.current = null
    }, 3000)
  }, [])

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.category &&
    formData.rating &&
    formData.subject &&
    formData.message

  return (
    <>
      <NavBar />

      {/* Main Content */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 pt-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              Share Your <span className="text-[#090847be]">Feedback</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-6">
              Your feedback helps us improve MindSpace and provide better mental health support. We
              value your thoughts, suggestions, and experiences.
            </p>
          </motion.div>

          {/* Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-12"
          >
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100">
                <Sparkles className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-800 mb-2">
                  Why Your Feedback Matters
                </h3>
                <ul className="text-indigo-700 space-y-1 text-sm">
                  <li>• Helps us understand your needs better</li>
                  <li>• Guides us in developing new features</li>
                  <li>• Improves the overall user experience</li>
                  <li>• Shapes the future of mental health support</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Main Feedback Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white border border-slate-200 shadow-lg">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                    <p className="text-slate-600">
                      Your feedback has been submitted successfully. We appreciate you taking the
                      time to help us improve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Feedback Form</h2>

                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange('name')}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        required
                      />
                      <p className="text-xs text-slate-500">
                        We'll only use this to follow up on your feedback if needed
                      </p>
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                      <Label htmlFor="category" className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Feedback Category
                      </Label>
                      <Select
                        value={formData.category}
                        onValueChange={handleSelectChange('category')}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {FEEDBACK_CATEGORIES.map(({ value, label, icon: Icon }) => (
                            <SelectItem key={value} value={value}>
                              <span className="flex items-center gap-2">
                                <Icon className="h-4 w-4 text-slate-500" />
                                {label}
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Rating */}
                    <div className="space-y-2">
                      <Label htmlFor="rating" className="flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Overall Experience Rating
                      </Label>
                      <Select value={formData.rating} onValueChange={handleSelectChange('rating')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Rate your experience" />
                        </SelectTrigger>
                        <SelectContent>
                          {FEEDBACK_RATING_OPTIONS.map(({ value, label }) => (
                            <SelectItem key={value} value={value}>
                              {label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Brief summary of your feedback"
                        value={formData.subject}
                        onChange={handleInputChange('subject')}
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Feedback</Label>
                      <Textarea
                        id="message"
                        placeholder="Please share your thoughts, suggestions, or report any issues in detail..."
                        value={formData.message}
                        onChange={handleInputChange('message')}
                        rows={6}
                        required
                      />
                      <p className="text-xs text-slate-500">Minimum 10 characters</p>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg"
                      disabled={!isFormValid}
                    >
                      Submit Feedback
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Feedback Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <Card className="bg-white border border-slate-200 shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">1,247</h3>
                <p className="text-sm text-slate-600">Feedback Received</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-slate-200 shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">89</h3>
                <p className="text-sm text-slate-600">Features Implemented</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-slate-200 shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">4.8/5</h3>
                <p className="text-sm text-slate-600">Average Rating</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Alternative Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Other Ways to Reach Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white border border-slate-200 shadow hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Email Us</h3>
                      <p className="text-sm text-slate-600 mb-2">
                        For detailed feedback or inquiries, send us an email
                      </p>
                      <a
                        href="mailto:feedback@mindspace.com"
                        className="text-sm text-indigo-600 hover:underline"
                      >
                        feedback@mindspace.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-slate-200 shadow hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Live Chat</h3>
                      <p className="text-sm text-slate-600 mb-2">
                        Chat with our support team in real-time
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/chat">Start Chat</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

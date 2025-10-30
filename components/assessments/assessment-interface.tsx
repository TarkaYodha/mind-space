"use client"

import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { assessmentSeedData } from '@/lib/assessments/seed-data'
import { useToast } from '@/hooks/use-toast'
import { CheckCircle, AlertTriangle, Clock, Brain, Heart, Shield } from 'lucide-react'

interface Question {
  id: number
  text: string
  options: {
    value: number
    text: string
  }[]
}

interface Assessment {
  id: string
  name: string
  description: string
  type: string
  questions: Question[]
  scoring_logic: {
    scoring_method: string
    ranges: {
      min: number
      max: number
      severity: string
      interpretation: string
    }[]
  }
}

interface AssessmentRecommendations {
  resources: string[]
  actions: string[]
  professional_help: boolean
}

interface AssessmentResult {
  assessment_id: string
  responses: Record<number, number>
  score: number
  interpretation?: string
  severity?: string
  recommendations: AssessmentRecommendations
  completed_at: string
}

export function AssessmentInterface({ assessmentId }: { assessmentId: string }) {
  const [assessment, setAssessment] = useState<Assessment | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<AssessmentResult | null>(null)
  
  const { toast } = useToast()

  useEffect(() => {
    async function loadAssessment() {
      try {
        // Find assessment in seed data
        const foundAssessment = assessmentSeedData.find(a => a.id === assessmentId)
        if (!foundAssessment) {
          throw new Error('Assessment not found')
        }
        setAssessment(foundAssessment)
      } catch {
        toast({
          title: "Error",
          description: "Failed to load assessment",
          variant: "destructive"
        })
      } finally {
        setLoading(false)
      }
    }

    loadAssessment()
  }, [assessmentId, toast])

  async function submitAssessment() {
    if (!assessment) return

    setSubmitting(true)
    try {
      // Calculate score
      const score = Object.values(answers).reduce((sum, value) => sum + value, 0)
      
      // Find interpretation based on score
      const interpretation = assessment.scoring_logic.ranges.find(
        range => score >= range.min && score <= range.max
      )

      const assessmentResult = {
        assessment_id: assessmentId,
        responses: answers,
        score,
        interpretation: interpretation?.interpretation,
        severity: interpretation?.severity,
        recommendations: generateRecommendations(score, interpretation?.severity),
        completed_at: new Date().toISOString()
      }

      // Store result in localStorage for now (in production, this would go to database)
      const existingResults = JSON.parse(localStorage.getItem('assessment_results') || '[]')
      existingResults.push(assessmentResult)
      localStorage.setItem('assessment_results', JSON.stringify(existingResults))

      setResult(assessmentResult)
      toast({
        title: "Assessment Complete",
        description: "Your results have been saved locally"
      })
    } catch {
      toast({
        title: "Error",
        description: "Failed to submit assessment",
        variant: "destructive"
      })
    } finally {
      setSubmitting(false)
    }
  }

  function generateRecommendations(score: number, severity?: string): AssessmentRecommendations {
    // Generate personalized recommendations based on score and severity
    const recommendations: AssessmentRecommendations = {
      resources: [],
      actions: [],
      professional_help: false
    }

    if (severity === 'moderate' || severity === 'moderately_severe' || severity === 'severe') {
      recommendations.professional_help = true
      recommendations.actions.push('Consider seeking professional mental health support')
    }

    // Add relevant resources and self-help actions
    recommendations.resources.push('Mindfulness exercises', 'Stress management techniques')
    recommendations.actions.push('Practice regular exercise', 'Maintain a consistent sleep schedule')

    return recommendations
  }

  if (loading) {
    return (
      <div className="bg-indigo-50 border border-slate-100 rounded-2xl p-8 shadow">
        <div className="animate-pulse space-y-6">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-200 mb-4 mx-auto" />
          <div className="h-8 bg-slate-200 rounded-lg w-3/4 mx-auto" />
          <div className="h-4 bg-slate-200 rounded w-1/2 mx-auto" />
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 rounded" />
            <div className="h-4 bg-slate-200 rounded" />
            <div className="h-4 bg-slate-200 rounded w-3/4" />
          </div>
          <div className="flex justify-between">
            <div className="h-10 bg-slate-200 rounded w-20" />
            <div className="h-10 bg-slate-200 rounded w-20" />
          </div>
        </div>
      </div>
    )
  }

  if (!assessment) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center shadow">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4 mx-auto">
          <AlertTriangle className="h-8 w-8 text-red-600" />
        </div>
        <h3 className="text-lg font-semibold text-red-800 mb-2">Assessment Not Found</h3>
        <p className="text-red-600">The requested assessment could not be loaded. Please try again.</p>
      </div>
    )
  }

  if (result) {
    const getSeverityColor = (severity?: string) => {
      if (!severity) return 'blue'

      switch (severity) {
        case 'minimal': 
        case 'low': 
        case 'no_burnout':
        case 'excellent_wellness':
        case 'good_wellness': return 'green'
        case 'mild': 
        case 'moderate': 
        case 'mild_burnout':
        case 'moderate_wellness': return 'yellow'
        case 'moderately_severe': 
        case 'high': 
        case 'severe': 
        case 'very_high':
        case 'moderate_burnout':
        case 'high_burnout':
        case 'low_wellness': return 'red'
        default: return 'blue'
      }
    }

  const severityColor = getSeverityColor(result.severity)
  const severityLabel = result.severity ? result.severity.replace('_', ' ') : 'Not available'

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Results Header */}
        <div className="bg-indigo-50 border border-slate-100 rounded-2xl p-8 text-center shadow">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4 mx-auto">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Assessment Complete</h2>
          <p className="text-slate-600 mb-4">{assessment.name}</p>
          <div className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
            Score: {result.score}
          </div>
        </div>

        {/* Interpretation */}
        <div className={`bg-${severityColor}-50 border border-${severityColor}-200 rounded-2xl p-6`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-${severityColor}-100`}>
              <Brain className={`h-6 w-6 text-${severityColor}-600`} />
            </div>
            <h3 className={`text-lg font-semibold text-${severityColor}-800`}>Your Results</h3>
          </div>
          <p className={`text-${severityColor}-700 mb-3`}>{result.interpretation}</p>
          <p className={`text-sm font-medium text-${severityColor}-800`}>
            Severity Level: <span className="capitalize">{severityLabel}</span>
          </p>
        </div>

        {/* Professional Help Alert */}
        {result.recommendations.professional_help && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-red-50 border border-red-200 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-100">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-red-800">Professional Support Recommended</h3>
            </div>
            <p className="text-red-700 mb-4">
              Based on your results, we recommend seeking professional support from a mental health professional. 
              Remember, seeking help is a sign of strength, not weakness.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
              Find Professional Help
            </button>
          </motion.div>
        )}

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recommended Actions */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-blue-800">Recommended Actions</h3>
            </div>
            <ul className="space-y-2">
              {result.recommendations.actions.map((action: string, index: number) => (
                <li key={index} className="flex items-start gap-2 text-sm text-blue-700">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  {action}
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Resources */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-100">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-800">Helpful Resources</h3>
            </div>
            <ul className="space-y-2">
              {result.recommendations.resources.map((resource: string, index: number) => (
                <li key={index} className="flex items-start gap-2 text-sm text-green-700">
                  <Shield className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  {resource}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => {
              setResult(null)
              setCurrentQuestionIndex(0)
              setAnswers({})
            }}
            className="border border-[#001f4d] text-[#001f4d] hover:bg-[#001f4d] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Retake Assessment
          </button>
          <button className="bg-[#001f4d] hover:bg-[#001437] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            View Resources
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Get Support
          </button>
        </div>
      </motion.div>
    )
  }

  const currentQuestion = assessment.questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / assessment.questions.length) * 100
  const isLastQuestion = currentQuestionIndex === assessment.questions.length - 1
  const canProceed = answers[currentQuestion.id] !== undefined

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-indigo-50 border border-slate-100 rounded-2xl p-8 shadow"
    >
      {/* Assessment Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4 mx-auto">
          <Brain className="h-8 w-8 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 mb-2">{assessment.name}</h2>
        <p className="text-slate-600 mb-6">{assessment.description}</p>
        
        {/* Progress */}
        <div className="max-w-md mx-auto">
          <div className="flex justify-between text-sm text-slate-600 mb-2">
            <span>Progress</span>
            <span>{currentQuestionIndex + 1} of {assessment.questions.length}</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <motion.div 
              className="bg-[#001f4d] h-2 rounded-full transition-all duration-300"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <motion.div
        key={currentQuestionIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        <div className="text-center">
          <div className="inline-block bg-[#001f4d] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Question {currentQuestionIndex + 1}
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-6 leading-relaxed">
            {currentQuestion.text}
          </h3>
        </div>

        {/* Answer Options */}
        <RadioGroup
          value={answers[currentQuestion.id]?.toString()}
          onValueChange={(value) => {
            setAnswers(prev => ({
              ...prev,
              [currentQuestion.id]: parseInt(value)
            }))
          }}
          className="space-y-3"
        >
          {currentQuestion.options.map((option, idx) => (
            <motion.div
              key={option.value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: idx * 0.1 }}
              className={`flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                answers[currentQuestion.id] === option.value
                  ? 'border-[#001f4d] bg-blue-50'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <RadioGroupItem
                value={option.value.toString()}
                id={`option-${option.value}`}
                className="data-[state=checked]:bg-[#001f4d] data-[state=checked]:border-[#001f4d]"
              />
              <Label
                htmlFor={`option-${option.value}`}
                className="text-slate-700 font-medium cursor-pointer flex-1"
              >
                {option.text}
              </Label>
            </motion.div>
          ))}
        </RadioGroup>
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
        <button
          onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
          disabled={currentQuestionIndex === 0}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            currentQuestionIndex === 0
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'border border-slate-300 text-slate-600 hover:bg-slate-50'
          }`}
        >
          Previous
        </button>
        
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Clock className="h-4 w-4" />
          <span>~{assessment.questions.length - currentQuestionIndex} questions left</span>
        </div>

        {isLastQuestion ? (
          <button
            onClick={submitAssessment}
            disabled={!canProceed || submitting}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              !canProceed || submitting
                ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                : 'bg-[#001f4d] text-white hover:bg-[#001437]'
            }`}
          >
            {submitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Submitting...
              </div>
            ) : (
              'Complete Assessment'
            )}
          </button>
        ) : (
          <button
            onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
            disabled={!canProceed}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              !canProceed
                ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                : 'bg-[#001f4d] text-white hover:bg-[#001437]'
            }`}
          >
            Next Question
          </button>
        )}
      </div>
    </motion.div>
  )
}
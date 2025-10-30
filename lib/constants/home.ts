import { Brain, Leaf, Shield, Users, MessageSquare, Lightbulb, Star as StarIcon, Bug, Heart } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type MoodType = "happy" | "default" | "anxious" | "sad" | "lonely"

type EmojiOption = {
  emoji: string
  label: string
  type: MoodType
}

type MoodResponses = Record<MoodType | "default", string[]>

type FeatureItem = {
  icon: LucideIcon
  title: string
  desc: string
  iconClass: string
}

type StepItem = {
  step: string
  title: string
  desc: string
}

type FeedbackCategory = {
  value: string
  label: string
  icon: LucideIcon
}

type FeedbackStat = {
  value: string
  label: string
  gradient: string
  icon: LucideIcon
}

export const EMOJI_OPTIONS: EmojiOption[] = [
  { emoji: "😊", label: "Amazing", type: "happy" },
  { emoji: "🙂", label: "Good", type: "default" },
  { emoji: "😐", label: "Okay", type: "anxious" },
  { emoji: "😔", label: "Low", type: "sad" },
  { emoji: "😢", label: "Struggling", type: "lonely" },
]

export const MOOD_RESPONSES: MoodResponses = {
  happy: [
    "That's wonderful to hear! 😊 Keep embracing those positive moments.",
    "Amazing! 🌟 Your positive energy is inspiring. Keep it up!",
  ],
  anxious: [
    "I hear the anxiety in your words 💙. Take a slow breath… You're safe.",
    "Anxiety can feel overwhelming 🌱. Try naming 3 things you can see around you.",
  ],
  sad: [
    "I'm sorry you're feeling low 💜. It's okay to let the sadness be here.",
    "Sadness can feel heavy 🌧. Sharing a little lightens it—thank you.",
  ],
  lonely: [
    "Loneliness can really hurt 💔. Remember you're not alone.",
    "Feeling disconnected is tough 🌙. One small comforting step can help.",
  ],
  default: [
    "Thanks for sharing 💙. I'm listening. Want to tell me more?",
    "I hear you 🌸. That takes courage to put into words.",
  ],
}

export const FEATURE_LIST: FeatureItem[] = [
  {
    icon: Leaf,
    title: "Personal Growth",
    desc: "Track your emotions and build resilience with daily check-ins.",
    iconClass: "text-green-600",
  },
  {
    icon: Users,
    title: "Community Support",
    desc: "Join a safe student community, share experiences, and grow together.",
    iconClass: "text-indigo-600",
  },
  {
    icon: Brain,
    title: "AI Insights",
    desc: "Smart suggestions and emotional trends powered by AI insights.",
    iconClass: "text-[#E59866]",
  },
  {
    icon: Shield,
    title: "Privacy First",
    desc: "Your data is fully protected and remains confidential at all times.",
    iconClass: "text-blue-600",
  },
]

export const STEP_LIST: StepItem[] = [
  { step: "1", title: "Check-In Daily", desc: "Share how you feel in seconds." },
  { step: "2", title: "Get Insights", desc: "Understand your emotional patterns with AI." },
  { step: "3", title: "Take Action", desc: "Explore guided activities and expert resources." },
  { step: "4", title: "Grow Together", desc: "Connect with peers and supportive communities." },
]

export const FEEDBACK_CATEGORIES: FeedbackCategory[] = [
  { value: "general", label: "General Feedback", icon: MessageSquare },
  { value: "feature", label: "Feature Request", icon: Lightbulb },
  { value: "bug", label: "Bug Report", icon: Bug },
  { value: "appreciation", label: "Appreciation", icon: Heart },
]

export const FEEDBACK_STATS: FeedbackStat[] = [
  {
    value: "1,247",
    label: "Feedback Received",
    gradient: "from-blue-500 to-indigo-600",
    icon: MessageSquare,
  },
  {
    value: "89",
    label: "Features Implemented",
    gradient: "from-green-500 to-teal-600",
    icon: Lightbulb,
  },
  {
    value: "4.8/5",
    label: "Average Rating",
    gradient: "from-pink-500 to-rose-600",
    icon: StarIcon,
  },
]

export type { EmojiOption, MoodResponses, FeatureItem, StepItem, FeedbackCategory, FeedbackStat, MoodType }

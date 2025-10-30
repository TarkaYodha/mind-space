"use client"

import * as React from "react"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  MessageCircleIcon, 
  ClipboardIcon, 
  HeartIcon,
  BookOpenIcon,
  CheckIcon,
  SparklesIcon,
  PhoneIcon
} from "@/components/ui/icons"
import { TypographyH2, TypographyP } from "@/components/ui/typography"
import { cn } from "@/lib/utils"

interface OnboardingStep {
  id: string
  title: string
  description: string
  href: string
  icon: React.ReactNode
  badge?: string
  estimated?: string
  completed?: boolean
}

interface OnboardingGuideProps {
  className?: string
  variant?: "homepage" | "dashboard"
}

const onboardingSteps: OnboardingStep[] = [
  {
    id: "chat",
    title: "Start with AI Chat",
    description: "Get immediate support and learn how MindSpace can help you",
    href: "/chat",
    icon: <MessageCircleIcon className="h-5 w-5" />,
    badge: "Start Here",
    estimated: "5 min"
  },
  {
    id: "assessment",
    title: "Take a Mental Health Assessment", 
    description: "Get personalized insights into your mental health status",
    href: "/assessments",
    icon: <ClipboardIcon className="h-5 w-5" />,
    estimated: "10-15 min"
  },
  {
    id: "explore-tools",
    title: "Explore Wellness Tools",
    description: "Discover tools for tracking mood, stress, and self-care",
    href: "/tools",
    icon: <HeartIcon className="h-5 w-5" />,
    estimated: "5 min"
  },
  {
    id: "resources",
    title: "Read Resource Guides",
    description: "Learn evidence-based strategies from counselors and peers",
    href: "/resources", 
    icon: <BookOpenIcon className="h-5 w-5" />,
    estimated: "Browse guides"
  }
]

export function OnboardingGuide({ className, variant = "homepage" }: OnboardingGuideProps) {
  const { isSignedIn } = useAuth()
  const completedSteps: string[] = []

  // For homepage variant, only show if user is signed in
  if (variant === "homepage" && !isSignedIn) {
    return null
  }

  const isHomepage = variant === "homepage"

  return (
    <div className={cn("space-y-6", className)}>
      <div className="text-center space-y-2">
        <TypographyH2 className={cn(
          "flex items-center justify-center gap-2",
          isHomepage ? "text-2xl sm:text-3xl" : "text-xl"
        )}>
          <SparklesIcon className="h-6 w-6" />
          {isHomepage ? "Welcome to MindSpace!" : "Get Started Guide"}
        </TypographyH2>
        <TypographyP className="text-muted-foreground max-w-2xl mx-auto">
          {isHomepage 
            ? "Follow these steps to get the most out of your mental health journey"
            : "New to MindSpace? Start here to explore everything we have to offer"
          }
        </TypographyP>
      </div>

      <div className={cn(
        "grid gap-4",
        isHomepage ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1 sm:grid-cols-2"
      )}>
        {onboardingSteps.map((step, index) => {
          const isCompleted = completedSteps.includes(step.id)
          
          return (
            <Card 
              key={step.id} 
              className={cn(
                "relative transition-all duration-200",
                isCompleted ? "bg-green-50/50 border-green-200 dark:bg-green-950/20 dark:border-green-900/30" : "hover:shadow-md"
              )}
            >
              {step.badge && (
                <Badge 
                  variant="secondary" 
                  className="absolute -top-2 -right-2 z-10 shadow-sm"
                >
                  {step.badge}
                </Badge>
              )}
              
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className={cn(
                    "flex-shrink-0 p-2 rounded-lg transition-colors",
                    isCompleted 
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-primary/10 text-primary"
                  )}>
                    {isCompleted ? (
                      <CheckIcon className="h-5 w-5" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-muted-foreground">
                        Step {index + 1}
                      </span>
                      {step.estimated && (
                        <Badge variant="outline" className="text-xs">
                          {step.estimated}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-base leading-tight">
                      {step.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-sm mb-4">
                  {step.description}
                </CardDescription>
                
                <Button 
                  className="w-full" 
                  variant={step.badge === "Start Here" ? "default" : "outline"}
                  size="sm"
                  asChild
                  disabled={isCompleted}
                >
                  <Link href={step.href}>
                    {isCompleted ? "Completed" : step.badge === "Start Here" ? "Get Started" : "Explore"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Emergency Support Notice */}
      <Card className="border-amber-200 bg-amber-50/30 dark:border-amber-900/30 dark:bg-amber-950/20">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <PhoneIcon className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-amber-800 dark:text-amber-200 mb-1">
                Need immediate help?
              </p>
              <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
                If you're experiencing a mental health crisis, we have 24/7 emergency resources available.
              </p>
              <Button variant="outline" size="sm" asChild className="border-amber-300 hover:bg-amber-100 dark:border-amber-700">
                <Link href="/emergency">Access Crisis Support</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
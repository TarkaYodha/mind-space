'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type * as React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  BookOpenIcon,
  CalendarIcon,
  ClipboardIcon,
  FileTextIcon,
  HeartIcon,
  LayoutDashboardIcon,
  MessageCircleIcon,
  PhoneIcon,
  SparklesIcon,
  TrendingUpIcon,
} from '@/components/ui/icons'
import { cn } from '@/lib/utils'

interface SuggestedAction {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  variant?: 'default' | 'outline' | 'secondary'
  badge?: string
  category?: string
}

interface ContextualNavigationProps {
  className?: string
  variant?: 'compact' | 'full'
}

const navigationMap: Record<string, SuggestedAction[]> = {
  '/chat': [
    {
      title: 'Take Assessment',
      description: 'Get deeper insights into your mental health',
      href: '/assessments',
      icon: <ClipboardIcon className="h-4 w-4" />,
      badge: 'Recommended',
    },
    {
      title: 'Track Your Mood',
      description: 'Monitor daily emotions and patterns',
      href: '/tools/mood-tracker',
      icon: <HeartIcon className="h-4 w-4" />,
    },
    {
      title: 'View Dashboard',
      description: 'See your wellness overview',
      href: '/dashboard',
      icon: <LayoutDashboardIcon className="h-4 w-4" />,
    },
  ],
  '/assessments': [
    {
      title: 'Start AI Chat',
      description: 'Discuss your results with AI support',
      href: '/chat',
      icon: <MessageCircleIcon className="h-4 w-4" />,
      badge: 'Next Step',
    },
    {
      title: 'Wellness Tools',
      description: 'Use tools based on your assessment',
      href: '/tools',
      icon: <LayoutDashboardIcon className="h-4 w-4" />,
    },
    {
      title: 'Emergency Support',
      description: 'Access crisis resources if needed',
      href: '/emergency',
      icon: <PhoneIcon className="h-4 w-4" />,
    },
  ],
  '/tools': [
    {
      title: 'Dashboard Overview',
      description: 'See all your progress in one place',
      href: '/dashboard',
      icon: <LayoutDashboardIcon className="h-4 w-4" />,
    },
    {
      title: 'AI Chat Support',
      description: 'Get personalized guidance',
      href: '/chat',
      icon: <MessageCircleIcon className="h-4 w-4" />,
    },
    {
      title: 'Emergency Support',
      description: 'Get immediate crisis help',
      href: '/emergency',
      icon: <BookOpenIcon className="h-4 w-4" />,
    },
  ],
  '/tools/mood-tracker': [
    {
      title: 'Wellness Journal',
      description: 'Reflect on your mood patterns',
      href: '/tools/wellness-journal',
      icon: <FileTextIcon className="h-4 w-4" />,
      badge: 'Great Combo',
    },
    {
      title: 'Stress Monitor',
      description: 'Track stress alongside mood',
      href: '/tools/stress-monitor',
      icon: <TrendingUpIcon className="h-4 w-4" />,
    },
    {
      title: 'Self-Care Planner',
      description: 'Plan activities based on your mood',
      href: '/tools/self-care-planner',
      icon: <CalendarIcon className="h-4 w-4" />,
    },
  ],
  '/tools/wellness-journal': [
    {
      title: 'Mood Tracker',
      description: 'Track emotions mentioned in your entries',
      href: '/tools/mood-tracker',
      icon: <HeartIcon className="h-4 w-4" />,
      badge: 'Perfect Match',
    },
    {
      title: 'AI Chat',
      description: 'Discuss your journal insights',
      href: '/chat',
      icon: <MessageCircleIcon className="h-4 w-4" />,
    },
    {
      title: 'Goal Setting',
      description: 'Set goals based on reflections',
      href: '/tools/goal-setting',
      icon: <TrendingUpIcon className="h-4 w-4" />,
    },
  ],
  '/tools/stress-monitor': [
    {
      title: 'Mood Tracker',
      description: 'Monitor mood changes with stress',
      href: '/tools/mood-tracker',
      icon: <HeartIcon className="h-4 w-4" />,
    },
    {
      title: 'Mindfulness Coach',
      description: 'Learn stress-reduction techniques',
      href: '/tools/mindfulness-coach',
      icon: <SparklesIcon className="h-4 w-4" />,
      badge: 'Stress Relief',
    },
    {
      title: 'Self-Care Planner',
      description: 'Schedule stress-busting activities',
      href: '/tools/self-care-planner',
      icon: <CalendarIcon className="h-4 w-4" />,
    },
  ],
}

// Universal suggestions for any page
const universalSuggestions: SuggestedAction[] = [
  {
    title: 'Crisis Support',
    description: "Get immediate help if you're in crisis",
    href: '/emergency',
    icon: <PhoneIcon className="h-4 w-4" />,
    variant: 'secondary',
    badge: '24/7',
  },
  {
    title: 'Dashboard',
    description: 'View your wellness overview',
    href: '/dashboard',
    icon: <LayoutDashboardIcon className="h-4 w-4" />,
  },
]

export function ContextualNavigation({ className, variant = 'full' }: ContextualNavigationProps) {
  const pathname = usePathname()

  // Get suggestions for current path
  const pathSuggestions = navigationMap[pathname] || []

  // Don't show on homepage or dashboard
  if (pathname === '/' || pathname === '/dashboard') {
    return null
  }

  const suggestions = variant === 'compact' ? pathSuggestions.slice(0, 2) : pathSuggestions

  if (suggestions.length === 0) {
    return null
  }

  return (
    <Card className={cn('mt-8', className)}>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <SparklesIcon className="h-5 w-5" />
          {variant === 'compact' ? 'Next Steps' : 'Suggested Next Steps'}
        </CardTitle>
        <CardDescription>
          Continue your wellness journey with these related features
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            'grid gap-4',
            variant === 'compact'
              ? 'grid-cols-1 sm:grid-cols-2'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
          )}
        >
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.href}
              className="group p-4 rounded-lg border hover:shadow-md transition-all duration-200 hover:border-primary/20"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                    {suggestion.icon}
                  </div>
                  <h4 className="font-medium text-sm">{suggestion.title}</h4>
                </div>
                {suggestion.badge && (
                  <Badge variant="secondary" className="text-xs">
                    {suggestion.badge}
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground mb-3">{suggestion.description}</p>
              <Button
                variant={suggestion.variant || 'outline'}
                size="sm"
                className="w-full"
                asChild
              >
                <Link href={suggestion.href}>
                  {suggestion.variant === 'default' ? 'Start Now' : 'Explore'}
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {variant === 'full' && (
          <div className="mt-6 pt-4 border-t border-border/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {universalSuggestions.map((suggestion) => (
                <Button
                  key={suggestion.href}
                  variant={suggestion.variant || 'ghost'}
                  size="sm"
                  className="justify-start h-auto p-3"
                  asChild
                >
                  <Link href={suggestion.href}>
                    <div className="flex items-center gap-3">
                      <div className="p-1 bg-muted rounded">{suggestion.icon}</div>
                      <div className="text-left">
                        <div className="font-medium text-sm flex items-center gap-2">
                          {suggestion.title}
                          {suggestion.badge && (
                            <Badge variant="outline" className="text-xs">
                              {suggestion.badge}
                            </Badge>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {suggestion.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

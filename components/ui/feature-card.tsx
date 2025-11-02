'use client'

import type * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from './button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  action?: {
    label: string
    href?: string
    onClick?: () => void
  }
  className?: string
  variant?: 'default' | 'primary' | 'accent' | 'elevated'
}

export function FeatureCard({
  title,
  description,
  icon,
  action,
  className,
  variant = 'default',
}: FeatureCardProps) {
  const variantClasses = {
    default:
      'border-border/50 hover:border-border transition-all duration-300 hover:shadow-medium bg-card',
    primary:
      'border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300 hover:shadow-medium hover:shadow-primary/10',
    accent:
      'border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10 hover:from-accent/10 hover:to-accent/15 transition-all duration-300 hover:shadow-medium hover:shadow-accent/10',
    elevated:
      'border-border/30 bg-card shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1',
  }

  const iconVariants = {
    default: 'bg-muted text-foreground group-hover:bg-primary/10 group-hover:text-primary',
    primary:
      'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground',
    accent: 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground',
    elevated:
      'bg-gradient-to-br from-primary/10 to-accent/10 text-primary group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground',
  }

  return (
    <Card
      className={cn(
        'group cursor-pointer relative overflow-hidden',
        variantClasses[variant],
        className,
      )}
    >
      {/* Subtle gradient overlay for elevation */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <CardHeader className="text-center space-y-4 relative">
        <div
          className={cn(
            'mx-auto flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110',
            iconVariants[variant],
          )}
        >
          <div className="text-lg [&>svg]:h-6 [&>svg]:w-6">{icon}</div>
        </div>

        <div className="space-y-2">
          <CardTitle className="text-lg sm:text-xl font-semibold text-balance leading-tight">
            {title}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base text-muted-foreground text-balance leading-relaxed">
            {description}
          </CardDescription>
        </div>
      </CardHeader>

      {action && (
        <CardContent className="pt-0 relative">
          {action.href ? (
            <Button
              variant="ghost"
              asChild
              className="w-full font-medium group-hover:bg-primary/10 group-hover:text-primary transition-all duration-200"
            >
              <a href={action.href}>{action.label}</a>
            </Button>
          ) : action.onClick ? (
            <Button
              variant="ghost"
              onClick={action.onClick}
              className="w-full font-medium group-hover:bg-primary/10 group-hover:text-primary transition-all duration-200"
            >
              {action.label}
            </Button>
          ) : null}
        </CardContent>
      )}

      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300 -z-10" />
    </Card>
  )
}

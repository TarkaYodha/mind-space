import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

import { cn } from '@/lib/utils'

const cardVariants = cva(
  'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-border transition-all duration-300 ease-out',
  {
    variants: {
      variant: {
        default: 'shadow-medium hover:shadow-large hover:-translate-y-1',
        elevated: 'shadow-large hover:shadow-xl hover:-translate-y-2',
        flat: 'shadow-none border-border/50 hover:border-border hover:shadow-subtle',
        glass: 'glass border-white/20 backdrop-blur-xl hover:bg-opacity-20',
        gradient: 'bg-gradient-to-br from-card via-card to-accent/5 hover:to-accent/10',
        outlined: 'border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow',
      },
      padding: {
        none: '',
        sm: 'py-4',
        default: 'py-6',
        lg: 'py-8',
      },
      interactive: {
        true: 'cursor-pointer active:scale-[0.98] hover:shadow-xl',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'default',
      interactive: false,
    },
  },
)

function Card({
  className,
  variant,
  padding,
  interactive,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, padding, interactive }), className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold text-lg', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm leading-relaxed', className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('px-6 space-y-4', className)} {...props} />
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent }

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/30 focus-visible:ring-2 aria-invalid:ring-destructive/20 aria-invalid:border-destructive transition-all duration-200 ease-out overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow-subtle [a&]:hover:bg-primary/90 [a&]:hover:shadow-medium',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground shadow-subtle [a&]:hover:bg-secondary/90 [a&]:hover:shadow-medium',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow-subtle [a&]:hover:bg-destructive/90 [a&]:hover:shadow-medium focus-visible:ring-destructive/30',
        success:
          'border-transparent bg-success text-success-foreground shadow-subtle [a&]:hover:bg-success/90 [a&]:hover:shadow-medium',
        warning:
          'border-transparent bg-warning text-warning-foreground shadow-subtle [a&]:hover:bg-warning/90 [a&]:hover:shadow-medium',
        outline:
          'text-foreground border-border bg-background [a&]:hover:bg-accent [a&]:hover:text-accent-foreground [a&]:hover:border-accent',
        accent:
          'border-transparent bg-accent text-accent-foreground shadow-subtle [a&]:hover:bg-accent/90 [a&]:hover:shadow-medium',
        ghost:
          'border-transparent text-foreground [a&]:hover:bg-muted [a&]:hover:text-foreground',
        gradient:
          'border-transparent bg-gradient-to-r from-primary to-accent text-white shadow-medium [a&]:hover:shadow-large [a&]:hover:scale-105',
      },
      size: {
        sm: 'px-1.5 py-0.5 text-xs rounded-md',
        default: 'px-2 py-0.5 text-xs rounded-md',
        lg: 'px-3 py-1 text-sm rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Badge }

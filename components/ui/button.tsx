import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-medium hover:bg-primary/90 hover:shadow-large focus-visible:ring-primary/50',
        destructive:
          'bg-destructive text-destructive-foreground shadow-medium hover:bg-destructive/90 hover:shadow-large focus-visible:ring-destructive/50',
        outline:
          'border-2 border-border bg-background shadow-subtle hover:bg-accent hover:text-accent-foreground hover:border-primary/30 hover:shadow-medium focus-visible:ring-primary/50',
        secondary:
          'bg-secondary text-secondary-foreground shadow-subtle hover:bg-secondary/80 hover:shadow-medium focus-visible:ring-secondary/50',
        ghost:
          'hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent/50',
        link: 
          'text-primary underline-offset-4 hover:underline focus-visible:ring-primary/50',
        success:
          'bg-success text-success-foreground shadow-medium hover:bg-success/90 hover:shadow-large focus-visible:ring-success/50',
        warning:
          'bg-warning text-warning-foreground shadow-medium hover:bg-warning/90 hover:shadow-large focus-visible:ring-warning/50',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-lg px-6 text-base font-semibold',
        xl: 'h-14 rounded-xl px-8 text-lg font-semibold',
        icon: 'h-10 w-10',
        'icon-sm': 'h-8 w-8 rounded-md',
        'icon-lg': 'h-12 w-12 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

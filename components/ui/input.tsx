import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const inputVariants = cva(
  'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input flex w-full min-w-0 border bg-transparent px-3 py-1 text-base shadow-subtle transition-all duration-200 ease-out outline-none file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/30 focus-visible:ring-2 focus-visible:ring-offset-1 aria-invalid:ring-destructive/30 aria-invalid:border-destructive hover:border-border/80 hover:shadow-medium',
  {
    variants: {
      size: {
        sm: 'h-8 rounded-md px-2 text-xs',
        default: 'h-10 rounded-lg px-3',
        lg: 'h-12 rounded-lg px-4 text-base',
      },
      variant: {
        default: 'bg-background/50',
        filled: 'bg-muted/50 border-transparent hover:bg-muted/70 focus-visible:bg-background',
        ghost:
          'border-transparent shadow-none hover:bg-muted/30 focus-visible:border-border focus-visible:bg-background',
        search:
          'pl-10 bg-muted/30 border-transparent rounded-full hover:bg-muted/50 focus-visible:bg-background focus-visible:border-border',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
  },
)

interface InputProps
  extends Omit<React.ComponentProps<'input'>, 'size'>,
    VariantProps<typeof inputVariants> {
  icon?: React.ReactNode
  suffix?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, variant, icon, suffix, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={type}
          ref={ref}
          data-slot="input"
          className={cn(
            inputVariants({ size, variant }),
            icon && 'pl-10',
            suffix && 'pr-10',
            className,
          )}
          {...props}
        />
        {suffix && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {suffix}
          </div>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }

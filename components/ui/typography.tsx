import type React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn(
      "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl text-balance font-sans",
      "bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent",
      className
    )}>
      {children}
    </h1>
  )
}

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn(
      "scroll-m-20 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-balance font-sans",
      "first:mt-0",
      className
    )}>
      {children}
    </h2>
  )
}

export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn(
      "scroll-m-20 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-balance font-sans",
      className
    )}>
      {children}
    </h3>
  )
}

export function TypographyH4({ children, className }: TypographyProps) {
  return (
    <h4 className={cn(
      "scroll-m-20 text-lg sm:text-xl font-semibold tracking-tight text-balance font-sans",
      className
    )}>
      {children}
    </h4>
  )
}

export function TypographyP({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "leading-relaxed text-pretty max-w-prose",
      "[&:not(:first-child)]:mt-4",
      className
    )}>
      {children}
    </p>
  )
}

export function TypographyLead({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "text-lg sm:text-xl lg:text-2xl text-muted-foreground text-pretty max-w-3xl",
      "leading-relaxed",
      className
    )}>
      {children}
    </p>
  )
}

export function TypographyMuted({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "text-sm text-muted-foreground text-pretty leading-relaxed",
      className
    )}>
      {children}
    </p>
  )
}

export function TypographyLarge({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "text-lg font-semibold text-pretty",
      className
    )}>
      {children}
    </p>
  )
}

export function TypographySmall({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "text-sm font-medium leading-relaxed text-pretty",
      className
    )}>
      {children}
    </p>
  )
}

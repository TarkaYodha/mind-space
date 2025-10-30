import type * as React from "react"
import { cn } from "@/lib/utils"
import { Header } from "./header"
import { Footer } from "./footer"
import { CrisisButton } from "@/components/ui/crisis-alert"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { ContextualNavigation } from "@/components/ui/contextual-navigation"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
  showHeader?: boolean
  showFooter?: boolean
  showAuth?: boolean
  showCrisisButton?: boolean
  showBreadcrumbs?: boolean
  showContextualNav?: boolean
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
}

export function PageLayout({
  children,
  className,
  showHeader = true,
  showFooter = true,
  showAuth = true,
  showCrisisButton = false,
  showBreadcrumbs = true,
  showContextualNav = true,
  maxWidth = "full",
}: PageLayoutProps) {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-none",
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-link"
        tabIndex={0}
      >
        Skip to main content
      </a>

      {showHeader && <Header showAuth={showAuth} />}

      <main 
        id="main-content"
        className={cn(
          "flex-1 focus:outline-none", 
          showCrisisButton && "pb-24 sm:pb-20", 
          className
        )}
        tabIndex={-1}
      >
        <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", maxWidthClasses[maxWidth])}>
          {showBreadcrumbs && <Breadcrumb className="pt-6" />}
          {children}
          {showContextualNav && <ContextualNavigation />}
        </div>
      </main>

      {showFooter && <Footer />}
      
      {/* Crisis Button - Properly positioned outside header */}
      {showCrisisButton && <CrisisButton />}
    </div>
  )
}

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: "default" | "muted" | "primary" | "accent" | "gradient"
  padding?: "none" | "sm" | "md" | "lg" | "xl"
  as?: "section" | "div" | "article" | "aside"
}

export function Section({ 
  children, 
  className, 
  background = "default", 
  padding = "lg",
  as: Component = "section"
}: SectionProps) {
  const backgroundClasses = {
    default: "bg-background",
    muted: "bg-muted/30",
    primary: "bg-primary/5",
    accent: "bg-accent/5",
    gradient: "bg-gradient-to-br from-background via-background to-muted/20",
  }

  const paddingClasses = {
    none: "",
    sm: "py-8",
    md: "py-12 sm:py-16",
    lg: "py-16 sm:py-20",
    xl: "py-20 sm:py-24 lg:py-32",
  }

  return (
    <Component className={cn(
      backgroundClasses[background], 
      paddingClasses[padding], 
      "relative",
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </Component>
  )
}

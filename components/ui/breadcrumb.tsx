"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronRightIcon, HomeIcon } from "@/components/ui/icons"

interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

interface BreadcrumbProps {
  className?: string
  items?: BreadcrumbItem[]
}

const breadcrumbMap: Record<string, string> = {
  "dashboard": "Dashboard",
  "chat": "AI Chat Support",
  "tools": "Wellness Tools",
  "mood-tracker": "Mood Tracker",
  "stress-monitor": "Stress Monitor",
  "wellness-journal": "Wellness Journal",
  "goal-setting": "Goal Setting",
  "self-care-planner": "Self-Care Planner",
  "mindfulness-coach": "Mindfulness Coach",
  "assessments": "Mental Health Assessments",
  "resources": "Resources",
  "articles": "Articles",
  "emergency": "Crisis Support",
  "about": "About",
  "privacy": "Privacy",
  "profile": "Profile",
  "settings": "Settings",
  "forums": "Community Forums",
  "partners": "Partners",
  "help": "Help Center",
  "contact": "Contact",
  "sign-in": "Sign In",
  "sign-up": "Sign Up",
  "auth": "Authentication"
}

export function Breadcrumb({ className, items }: BreadcrumbProps) {
  const pathname = usePathname()

  const generateBreadcrumbs = React.useMemo((): BreadcrumbItem[] => {
    if (items) return items

    // Don't show breadcrumbs on home page
    if (pathname === "/") return []

    const pathSegments = pathname.split("/").filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Home", href: "/" }
    ]

    let currentPath = ""
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const label = breadcrumbMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")
      
      breadcrumbs.push({
        label,
        href: currentPath,
        current: index === pathSegments.length - 1
      })
    })

    return breadcrumbs
  }, [pathname, items])

  if (generateBreadcrumbs.length <= 1) return null

  return (
    <nav 
      className={cn(
        "flex items-center space-x-1 text-sm text-muted-foreground mb-6",
        className
      )}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        {generateBreadcrumbs.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <ChevronRightIcon className="h-4 w-4 mx-2 text-muted-foreground/50" />
            )}
            
            {item.current ? (
              <span className="text-foreground font-medium">
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.href}
                className="hover:text-foreground transition-colors duration-200 flex items-center gap-1"
              >
                {index === 0 && <HomeIcon className="h-4 w-4" />}
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
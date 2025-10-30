"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CrisisButton } from "@/components/ui/crisis-alert"
import {
  HeartIcon,
  MessageCircleIcon,
  ClipboardIcon,
  UsersIcon,
  BookOpenIcon,
  MenuIcon,
  XIcon,
} from "@/components/ui/icons"

interface DashboardLayoutProps {
  children: React.ReactNode
  className?: string
}

interface DashboardUser {
  id: string
  email?: string
  first_name?: string
}

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HeartIcon },
  { name: "AI Chat", href: "/chat", icon: MessageCircleIcon },
  { name: "Assessments", href: "/assessments", icon: ClipboardIcon },
  { name: "Wellness Tools", href: "/tools", icon: BookOpenIcon },
  { name: "Mood Tracking", href: "/mood", icon: HeartIcon },
  { name: "Forums", href: "/forums", icon: UsersIcon },
]

export function DashboardLayout({ children, className }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [user, setUser] = React.useState<DashboardUser | null>(null)
  const [profile] = React.useState<DashboardUser | null>(null)

  React.useEffect(() => {
    // Simplified - no auth required for dashboard access
    setLoading(false)
    setUser({ id: 'anonymous', email: 'anonymous@mindspace.app' })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSignOut = async () => {
    // Simplified logout - just redirect to home
    window.location.href = "/"
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
              M
            </div>
            <span className="font-bold text-xl text-foreground">MindSpace</span>
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <XIcon />
          </Button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Emergency Resources */}
        <div className="p-4 border-t">
          <div className="bg-destructive/10 rounded-lg p-3 text-center">
            <p className="text-xs text-muted-foreground mb-2">Need immediate help?</p>
            <Link href="/emergency">
              <Button variant="destructive" size="sm" className="w-full">
                Crisis Resources
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-30 flex h-16 items-center justify-between bg-background/95 backdrop-blur border-b px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <MenuIcon />
          </Button>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {profile?.first_name || user.email?.split("@")[0]}
            </span>
            <Button asChild variant="ghost" size="sm">
              <Link href="/emergency">Crisis Support</Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>

        {/* Page content */}
        <main className={cn("p-4 sm:p-6 lg:p-8", className)}>{children}</main>
      </div>

      {/* Crisis Button */}
      <CrisisButton
        onClick={() => {
          window.location.href = "/emergency"
        }}
      />
    </div>
  )
}

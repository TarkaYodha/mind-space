"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CrisisButton } from "@/components/ui/crisis-alert"
import {
  MessageCircleIcon,
  ClipboardIcon,
  BookOpenIcon,
  MenuIcon,
  XIcon,
  LayoutDashboardIcon,
  SettingsIcon,
} from "@/components/ui/icons"

interface AppLayoutProps {
  children: React.ReactNode
  className?: string
  showCrisisButton?: boolean
}

const navigation = [
  { name: "Home", href: "/", icon: LayoutDashboardIcon },
  { name: "AI Chat", href: "/chat", icon: MessageCircleIcon },
  { name: "Assessments", href: "/assessments", icon: ClipboardIcon },
  { name: "Wellness Tools", href: "/tools", icon: SettingsIcon },
  { name: "Emergency Help", href: "/emergency", icon: BookOpenIcon },
]

export function AppLayout({ children, className, showCrisisButton = true }: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
              M
            </div>
            <span className="font-bold text-xl text-foreground">MindSpace</span>
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
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
                onClick={() => setIsSidebarOpen(false)}
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

        {/* Privacy Notice */}
        <div className="p-4 border-t">
          <div className="bg-muted rounded-lg p-3 text-center">
            <p className="text-xs text-muted-foreground">
              💚 Anonymous & Confidential
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-30 flex h-16 items-center justify-between bg-background/95 backdrop-blur border-b px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
            <MenuIcon />
          </Button>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Anonymous User
            </span>
            <Button asChild variant="ghost" size="sm">
              <Link href="/tools">Wellness Tools</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/emergency">Emergency Help</Link>
            </Button>
          </div>
        </div>

        {/* Page content */}
        <main className={cn("p-4 sm:p-6 lg:p-8", className)}>{children}</main>
      </div>

      {/* Crisis Button */}
      {showCrisisButton && (
        <CrisisButton
          onClick={() => {
            window.location.href = "/emergency"
          }}
        />
      )}
    </div>
  )
}
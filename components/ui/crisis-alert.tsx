"use client"

import { AlertTriangle, Phone, MessageCircle, HeartIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CrisisAlertProps {
  className?: string
  onCallHotline?: () => void
  onGetResources?: () => void
}

export function CrisisAlert({ className, onCallHotline, onGetResources }: CrisisAlertProps) {
  return (
    <Card className={cn("border-destructive bg-destructive/5 shadow-large", className)}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive shadow-medium">
              <AlertTriangle className="h-7 w-7 text-destructive-foreground" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-destructive mb-3">
              Crisis Support Available 24/7
            </h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              If you're having thoughts of self-harm or are in immediate danger, please reach out for help right now.
              You are not alone, and support is available.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="destructive"
                onClick={onCallHotline}
                size="lg"
                className="flex items-center gap-2 shadow-medium hover:shadow-large"
              >
                <Phone className="h-4 w-4" />
                Call 988 - Crisis Lifeline
              </Button>
              <Button
                variant="outline"
                onClick={onGetResources}
                size="lg"
                className="flex items-center gap-2 border-destructive/30 text-destructive hover:bg-destructive/10"
              >
                <MessageCircle className="h-4 w-4" />
                Get Crisis Resources
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface CrisisButtonProps {
  className?: string
  onCallHotline?: () => void
  onClick?: () => void
}

export function CrisisButton({ className, onCallHotline, onClick }: CrisisButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (onCallHotline) {
      onCallHotline()
    } else {
      window.open("tel:988")
    }
  }

  return (
    <Button
      variant="destructive"
      size="lg"
      onClick={handleClick}
      className={cn(
        "fixed z-50 shadow-large hover:shadow-xl transition-all duration-200",
        "bottom-6 right-6",
        "bg-red-600 hover:bg-red-700 focus:bg-red-700",
        "text-white font-semibold",
        "px-6 py-3 rounded-xl",
        "hover:scale-105 active:scale-95",
        "focus-visible:ring-4 focus-visible:ring-red-500/50",
        className
      )}
      aria-label="Get immediate crisis help - Call 988"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
          <HeartIcon className="h-4 w-4" />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm font-bold leading-none">Crisis Help</span>
          <span className="text-xs opacity-90 leading-none mt-1">Call 988</span>
        </div>
      </div>
    </Button>
  )
}
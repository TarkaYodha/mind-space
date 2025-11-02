import { Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PrivacyBadgeProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function PrivacyBadge({ className, showText = true, size = 'md' }: PrivacyBadgeProps) {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-2 text-sm',
  }

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-3 w-3',
    lg: 'h-4 w-4',
  }

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full bg-green-100 dark:bg-green-900/20 font-medium text-green-800 dark:text-green-300',
        sizeClasses[size],
        className,
      )}
    >
      <Shield className={iconSizes[size]} />
      {showText && 'Anonymous & Secure'}
    </div>
  )
}

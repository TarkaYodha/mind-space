import { cn } from '@/lib/utils'

interface MoodSelectorProps {
  value: number | null
  onChange: (value: number) => void
  className?: string
}

export function MoodSelector({ value, onChange, className }: MoodSelectorProps) {
  const moods = [
    { value: 1, emoji: '😞', label: 'Very Bad', color: 'hover:bg-red-100 hover:border-red-300' },
    { value: 2, emoji: '😔', label: 'Bad', color: 'hover:bg-red-100 hover:border-red-300' },
    { value: 3, emoji: '😟', label: 'Poor', color: 'hover:bg-orange-100 hover:border-orange-300' },
    {
      value: 4,
      emoji: '😕',
      label: 'Below Average',
      color: 'hover:bg-orange-100 hover:border-orange-300',
    },
    {
      value: 5,
      emoji: '😐',
      label: 'Neutral',
      color: 'hover:bg-yellow-100 hover:border-yellow-300',
    },
    { value: 6, emoji: '🙂', label: 'Okay', color: 'hover:bg-yellow-100 hover:border-yellow-300' },
    { value: 7, emoji: '😊', label: 'Good', color: 'hover:bg-green-100 hover:border-green-300' },
    { value: 8, emoji: '😄', label: 'Great', color: 'hover:bg-green-100 hover:border-green-300' },
    {
      value: 9,
      emoji: '😁',
      label: 'Excellent',
      color: 'hover:bg-green-100 hover:border-green-300',
    },
    {
      value: 10,
      emoji: '🤗',
      label: 'Amazing',
      color: 'hover:bg-green-100 hover:border-green-300',
    },
  ]

  return (
    <div className={cn('space-y-4', className)}>
      <div className="text-center">
        <div className="text-sm font-medium text-muted-foreground mb-4">
          Select your mood (1 = Very Bad, 10 = Amazing)
        </div>
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
        {moods.map((mood) => (
          <button
            key={mood.value}
            onClick={() => onChange(mood.value)}
            className={cn(
              'flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all duration-200',
              'hover:scale-105 active:scale-95',
              mood.color,
              value === mood.value
                ? 'border-primary bg-primary/10 shadow-md'
                : 'border-border bg-background',
            )}
            type="button"
          >
            <div className="text-2xl mb-1">{mood.emoji}</div>
            <div className="text-xs font-medium text-center leading-tight">{mood.value}</div>
          </button>
        ))}
      </div>

      {value && (
        <div className="text-center">
          <div className="text-sm text-muted-foreground">
            {moods.find((m) => m.value === value)?.label}
          </div>
        </div>
      )}
    </div>
  )
}

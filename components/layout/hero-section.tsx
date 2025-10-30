import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { TypographyH1, TypographyLead } from "@/components/ui/typography"
import { Badge } from "@/components/ui/badge"
import { CheckIcon, ShieldCheckIcon, ClockIcon, UsersIcon } from "@/components/ui/icons"

interface HeroSectionProps {
  title: string
  subtitle: string
  description?: string
  primaryAction?: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
  className?: string
  background?: "default" | "gradient" | "muted"
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  className,
  background = "gradient",
}: HeroSectionProps) {
  const backgroundClasses = {
    default: "bg-background",
    gradient: "bg-gradient-to-br from-background via-primary/5 to-accent/10",
    muted: "bg-muted/30",
  }

  const trustIndicators = [
    { icon: ShieldCheckIcon, text: "100% Anonymous" },
    { icon: ClockIcon, text: "24/7 Available" },
    { icon: UsersIcon, text: "10k+ Helped" },
  ]

  const benefits = [
    "No registration required",
    "HIPAA compliant platform", 
    "Crisis intervention available",
    "AI-powered support"
  ]

  return (
    <section className={cn(
      "relative py-20 sm:py-24 lg:py-32 overflow-hidden",
      backgroundClasses[background], 
      className
    )}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-subtle-grid [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-full blur-3xl animate-gradient" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Trust Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105">
              <ShieldCheckIcon className="h-4 w-4 mr-2" />
              Trusted by mental health professionals
            </Badge>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <TypographyH1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto animate-fade-up">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient bg-size-200">
                  {title}
                </span>
              </TypographyH1>
              <TypographyLead className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-muted-foreground animate-fade-up animation-delay-200">
                {subtitle}
              </TypographyLead>
              {description && (
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed animate-fade-up animation-delay-400">
                  {description}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            {(primaryAction || secondaryAction) && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animation-delay-600">
                {primaryAction && (
                  <Button 
                    size="lg" 
                    asChild 
                    className="h-14 px-8 text-base font-semibold shadow-large hover:shadow-glow transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group"
                  >
                    <a href={primaryAction.href}>
                      <span className="relative z-10">{primaryAction.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </Button>
                )}
                {secondaryAction && (
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild
                    className="h-14 px-8 text-base font-semibold border-2 hover:border-primary/50 hover:shadow-medium transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <a href={secondaryAction.href}>{secondaryAction.label}</a>
                  </Button>
                )}
              </div>
            )}

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 pt-8 animate-fade-up animation-delay-800">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group">
                  <indicator.icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">{indicator.text}</span>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto pt-8 animate-fade-up animation-delay-1000">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group">
                  <CheckIcon className="h-4 w-4 text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

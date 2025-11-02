'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import * as React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { MenuIcon, XIcon } from '@/components/ui/icons'
import { NAV_LINKS } from '@/lib/constants/navigation'
import { cn } from '@/lib/utils'

interface HeaderProps {
  className?: string
  showAuth?: boolean
}

export function Header({ className, showAuth = true }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const { data: session } = useSession()
  const isSignedIn = !!session
  const pathname = usePathname()

  const isActive = React.useCallback(
    (href: string) => {
      if (href === '/') {
        return pathname === '/'
      }

      return pathname.startsWith(href)
    },
    [pathname],
  )

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-border/20 bg-background/60 backdrop-blur-xl',
        'supports-[backdrop-filter]:bg-background/40',
        'shadow-sm supports-[backdrop-filter]:shadow-glass',
        'transition-all duration-300 ease-out',
        className,
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 group transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/logo.png"
              alt="MindSpace Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover group-hover:shadow-glow transition-all duration-300"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground leading-none group-hover:text-primary transition-colors duration-300">
                MindSpace
              </span>
              <span className="text-xs text-muted-foreground font-medium">Anonymous Support</span>
            </div>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-6"
            role="navigation"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  'group flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200',
                  'hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                  isActive(item.href) && 'bg-muted/40',
                )}
              >
                <span
                  className={cn(
                    'text-sm font-medium text-foreground group-hover:text-primary transition-colors',
                    isActive(item.href) && 'text-primary',
                  )}
                >
                  {item.label}
                </span>
                {item.description && (
                  <span className="text-xs text-muted-foreground hidden xl:block">
                    {item.description}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {showAuth && (
            <div className="hidden lg:flex items-center gap-3">
              {isSignedIn ? (
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={session?.user?.image || ''}
                      alt={session?.user?.name || 'User'}
                    />
                    <AvatarFallback>{session?.user?.name?.charAt(0) || 'U'}</AvatarFallback>
                  </Avatar>
                  <Button variant="ghost" size="sm" onClick={() => signOut({ callbackUrl: '/' })}>
                    Sign Out
                  </Button>
                </div>
              ) : (
                <>
                  <Link href="/sign-in">
                    <Button variant="ghost" size="default" className="font-medium">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button
                      size="default"
                      className="font-medium shadow-medium hover:shadow-large transition-shadow"
                    >
                      Get Started Free
                    </Button>
                  </Link>
                </>
              )}
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl animate-fade-in"
          >
            <div className="px-4 py-6 space-y-6">
              <nav className="space-y-3" role="navigation" aria-label="Mobile navigation">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                      'flex flex-col gap-1 px-4 py-3 rounded-lg transition-all duration-200',
                      'hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                      isActive(item.href) && 'bg-muted/40',
                    )}
                    onClick={closeMobileMenu}
                  >
                    <span
                      className={cn(
                        'font-medium text-foreground',
                        isActive(item.href) && 'text-primary',
                      )}
                    >
                      {item.label}
                    </span>
                    {item.description && (
                      <span className="text-sm text-muted-foreground">{item.description}</span>
                    )}
                  </Link>
                ))}
              </nav>

              {showAuth && (
                <div className="pt-4 border-t border-border/50 space-y-3">
                  {isSignedIn ? (
                    <div className="flex justify-center">
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          closeMobileMenu()
                          signOut({ callbackUrl: '/' })
                        }}
                      >
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Link href="/sign-in" onClick={closeMobileMenu}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start h-12 text-base font-medium"
                        >
                          Sign In
                        </Button>
                      </Link>
                      <Link href="/sign-up" onClick={closeMobileMenu}>
                        <Button className="w-full h-12 text-base font-medium shadow-medium">
                          Get Started Free
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

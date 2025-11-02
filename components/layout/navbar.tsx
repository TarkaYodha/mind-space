'use client'

import Image from 'next/image'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { SignInModal } from '@/components/auth/sign-in-modal'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { NAV_LINKS, type NavLinkId } from '@/lib/constants/navigation'

interface NavBarProps {
  currentPage?: NavLinkId
}

export function NavBar({ currentPage }: NavBarProps) {
  const [open, setOpen] = useState(false)
  const [signInOpen, setSignInOpen] = useState(false)
  const { data: session } = useSession()

  const getNavLinkClass = (page: NavLinkId) =>
    currentPage === page
      ? 'font-semibold text-white bg-white/10 px-3 py-1 rounded-lg'
      : 'text-white/80 hover:text-white'

  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-[#0F172A] text-white px-6 py-3 shadow-md relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
        >
          <Image
            src="/logo.png"
            alt="MindSpace logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-2xl font-bold text-white">MindSpace</span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          {NAV_LINKS.map(({ id, label, href }) => (
            <Link key={id} href={href} className={getNavLinkClass(id)}>
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/appointments"
            className="hidden md:block rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 shadow-md"
          >
            📅 Book Appointment
          </Link>
          {session ? (
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src={session.user?.image || ''} alt={session.user?.name || 'User'} />
                <AvatarFallback>{session.user?.name?.charAt(0) || 'U'}</AvatarFallback>
              </Avatar>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => signOut({ callbackUrl: '/' })}
                className="hidden md:block text-white hover:bg-white/20"
              >
                Sign out
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Button
                size="sm"
                className="bg-[#4F46E5] text-white hover:bg-[#4338CA]"
                onClick={() => setSignInOpen(true)}
              >
                Sign in / Sign up
              </Button>
            </div>
          )}
          <button
            onClick={() => setOpen((prev) => !prev)}
            style={{ backgroundColor: '#001f4d', color: 'white', border: '1px solid #ffffff' }}
            className="focus:outline-none p-2 rounded-md md:hidden"
            aria-label="Toggle navigation menu"
          >
            <span className="text-2xl">{open ? '✖' : '☰'}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0F172A] shadow-lg px-6 py-4 space-y-4">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map(({ id, label, href }) => (
              <Link
                key={id}
                href={href}
                className={getNavLinkClass(id)}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/appointments"
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 text-center"
              onClick={() => setOpen(false)}
            >
              📅 Book Appointment
            </Link>
          </div>
          <div className="border-t border-gray-700 pt-3 mt-3 space-y-3">
            {session ? (
              <div className="space-y-3">
                <Link
                  href="/tools"
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 inline-block text-center w-full"
                  onClick={() => setOpen(false)}
                >
                  Explore Tools
                </Link>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/20"
                  onClick={() => {
                    setOpen(false)
                    signOut({ callbackUrl: '/' })
                  }}
                >
                  Sign out
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Button
                  className="w-full bg-[#4F46E5] text-white hover:bg-[#4338CA]"
                  onClick={() => {
                    setOpen(false)
                    setSignInOpen(true)
                  }}
                >
                  Sign in / Sign up
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      <SignInModal open={signInOpen} onOpenChange={setSignInOpen} />
    </nav>
  )
}

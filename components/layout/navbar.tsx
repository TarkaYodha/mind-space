"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { NAV_LINKS, type NavLinkId } from '@/lib/constants/navigation'

interface NavBarProps {
  currentPage?: NavLinkId
}

export function NavBar({ currentPage }: NavBarProps) {
  const [open, setOpen] = useState(false)

  const getNavLinkClass = (page: NavLinkId) =>
    currentPage === page
      ? 'font-semibold text-white bg-white/10 px-3 py-1 rounded-lg'
      : 'text-white/80 hover:text-white'

  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-[#0F172A] text-white px-6 py-3 shadow-md relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
          <Image
            src="https://i.ibb.co/5WLNwykj/Gemini-Generated-Image-mfgcowmfgcowmfgc.png"
            alt="MindSpace logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-2xl font-bold text-white">MindSpace</span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          {NAV_LINKS.map(({ id, label, href }) => (
            <Link
              key={id}
              href={href}
              className={getNavLinkClass(id)}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10'
                }
              }}
            />
          </SignedIn>
          <SignedOut>
            <div className="hidden md:flex items-center gap-3">
              <SignInButton mode="modal">
                <button className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="rounded-lg bg-[#4F46E5] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4338CA]">
                  Create account
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
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
          </div>
          <div className="border-t border-gray-700 pt-3 mt-3 space-y-3">
            <SignedIn>
              <Link
                href="/tools"
                className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 inline-block text-center"
                onClick={() => setOpen(false)}
              >
                Explore Tools
              </Link>
            </SignedIn>
            <SignedOut>
              <div className="flex flex-col gap-3">
                <SignInButton mode="modal">
                  <button
                    style={{ backgroundColor: '#001f4d', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px' }}
                    className="hover:bg-[#001437] transition-colors duration-200 inline-block w-full text-center"
                    onClick={() => setOpen(false)}
                  >
                    Sign in
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button
                    style={{ backgroundColor: '#4F46E5', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px' }}
                    className="hover:bg-[#4338CA] transition-colors duration-200 inline-block w-full text-center"
                    onClick={() => setOpen(false)}
                  >
                    Create account
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  )
}
"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { UserButton, useAuth } from '@clerk/nextjs'

interface NavBarProps {
  currentPage?: string
}

export function NavBar({ currentPage = '' }: NavBarProps) {
  const [open, setOpen] = useState(false)
  const { isSignedIn } = useAuth()

  const getNavLinkClass = (page: string) => {
    return currentPage === page 
      ? "font-semibold bg-gray-800 px-3 py-1 rounded-lg text-white hover:text-gray-300"
      : "hover:text-gray-300"
  }

  const getNavLinkStyle = (page: string) => {
    return currentPage === page ? {} : { color: 'white' }
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F172A] text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
          <img
            src="https://i.ibb.co/5WLNwykj/Gemini-Generated-Image-mfgcowmfgcowmfgc.png"
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-heading text-2xl font-bold text-white">MindSpace</span>
        </Link>

        <div className="sm:hidden">
          <button
            onClick={() => setOpen(!open)}
            style={{backgroundColor: '#001f4d', color: 'white', border: '1px solid #ffffff'}}
            className="focus:outline-none p-2 rounded-md"
          >
            <span className="text-2xl">{open ? "✖" : "☰"}</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center space-x-6">
          <Link href="/" className={getNavLinkClass('home')} style={getNavLinkStyle('home')}>Home</Link>
          <Link href="/activities" className={getNavLinkClass('activities')} style={getNavLinkStyle('activities')}>Activities</Link>
          <Link href="/chat" className={getNavLinkClass('chat')} style={getNavLinkStyle('chat')}>AI Chat</Link>
          <Link href="/dashboard" className={getNavLinkClass('dashboard')} style={getNavLinkStyle('dashboard')}>Dashboard</Link>
          <Link href="/assessments" className={getNavLinkClass('assessments')} style={getNavLinkStyle('assessments')}>Assessments</Link>
          <Link href="/tools" className={getNavLinkClass('tools')} style={getNavLinkStyle('tools')}>Tools</Link>
          <Link href="/reference" className={getNavLinkClass('reference')} style={getNavLinkStyle('reference')}>Reference</Link>

          <Link 
            href={isSignedIn ? "/chat" : "/sign-in"} 
            style={{backgroundColor: '#001f4d', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px'}} 
            className="hover:bg-[#001437] transition-colors duration-200"
          >
            Start Free Chat
          </Link>
          <svg className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 2a6 6 0 016 6c0 7 3 9 3 9H1s3-2 3-9a6 6 0 016-6zM9 21a3 3 0 106 0"></path>
          </svg>
          {isSignedIn ? (
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10"
                }
              }}
            />
          ) : (
            <Link href="/sign-in">
              <img
                src="https://cdn-icons-png.flaticon.com/128/12225/12225881.png"
                alt="User"
                className="w-10 h-10 rounded-full border border-gray-600 bg-white p-1 hover:opacity-80 cursor-pointer"
              />
            </Link>
          )}
        </div>
      </div>

      {open && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-[#0F172A] shadow-lg px-6 py-4 space-y-4">
          <div className="flex flex-col space-y-3">
            <Link href="/" className={getNavLinkClass('home')} style={getNavLinkStyle('home')}>Home</Link>
            <Link href="/activities" className={getNavLinkClass('activities')} style={getNavLinkStyle('activities')}>Activities</Link>
            <Link href="/chat" className={getNavLinkClass('chat')} style={getNavLinkStyle('chat')}>AI Chat</Link>
            <Link href="/dashboard" className={getNavLinkClass('dashboard')} style={getNavLinkStyle('dashboard')}>Dashboard</Link>
            <Link href="/assessments" className={getNavLinkClass('assessments')} style={getNavLinkStyle('assessments')}>Assessments</Link>
            <Link href="/tools" className={getNavLinkClass('tools')} style={getNavLinkStyle('tools')}>Tools</Link>
            <Link href="/reference" className={getNavLinkClass('reference')} style={getNavLinkStyle('reference')}>Reference</Link>
          </div>
          <div className="flex items-center justify-start space-x-4 border-t border-gray-700 pt-3 mt-3">
            <Link 
              href={isSignedIn ? "/chat" : "/sign-in"} 
              style={{backgroundColor: '#001f4d', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px'}} 
              className="hover:bg-[#001437] transition-colors duration-200"
            >
              Start Free Chat
            </Link>
            <svg className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 2a6 6 0 016 6c0 7 3 9 3 9H1s3-2 3-9a6 6 0 016-6zM9 21a3 3 0 106 0"></path>
            </svg>
            {isSignedIn ? (
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10"
                  }
                }}
              />
            ) : (
              <Link href="/sign-in">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/12225/12225881.png"
                  alt="User"
                  className="w-10 h-10 rounded-full border border-gray-600 bg-white p-1 hover:opacity-80 cursor-pointer"
                />
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
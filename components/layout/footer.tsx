"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { PrivacyBadge } from "@/components/ui/privacy-badge"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Dashboard", href: "/dashboard" },
        { name: "Wellness Tools", href: "/tools" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Resource Library", href: "/resources" },
        { name: "Expert Directory", href: "/reference" },
        { name: "Emergency Help", href: "/emergency" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Appointments", href: "/appointments" },
        { name: "Contact Support", href: "/contact" },
        { name: "Share Feedback", href: "/feedback" },
      ],
    },
  ]

  return (
    <footer className={cn("bg-gradient-to-br from-muted/20 via-background to-muted/30 border-t border-border/30", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4 md:text-left text-center">
            <Link href="/" className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105 md:justify-start justify-center">
              <Image
                src="/logo.png"
                alt="MindSpace Logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover group-hover:shadow-glow transition-all duration-300"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">MindSpace</span>
                <span className="text-xs text-muted-foreground">Anonymous Support</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Confidential, stigma-free mental health support designed specifically for college students.
            </p>
            <div className="md:flex md:justify-start justify-center flex">
              <PrivacyBadge size="sm" className="shadow-subtle" />
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4 md:text-left text-center">
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-border/30">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 gap-4">
            <div className="text-sm text-muted-foreground text-center lg:text-left">© {currentYear} MindSpace. All rights reserved.</div>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-6 flex-wrap justify-center">
              <div className="text-xs text-muted-foreground font-medium">Follow us:</div>
              <div className="flex space-x-4">
                <Link
                  href="https://x.com/MindSpace125868"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 p-2 rounded-lg hover:bg-muted/50"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on X (Twitter)"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/mindspace550/"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 p-2 rounded-lg hover:bg-muted/50"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
                <Link
                  href="http://www.linkedin.com/in/mindspace-web-48200a386"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 p-2 rounded-lg hover:bg-muted/50"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with us on LinkedIn"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61581178740012"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 p-2 rounded-lg hover:bg-muted/50"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-end w-full lg:w-auto">
              <div className="text-xs text-muted-foreground bg-muted/50 px-3 py-2 rounded-full border border-border/30 text-center">
                Crisis Support: Call 988 or Text HOME to 741741
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

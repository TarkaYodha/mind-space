'use client'

import { AlertTriangleIcon, ClockIcon, MailIcon, PhoneIcon, ShieldIcon } from 'lucide-react'
import { PageLayout, Section } from '@/components/layout/page-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { TypographyH1, TypographyH2, TypographyLead, TypographyP } from '@/components/ui/typography'

export default function ContactPage() {
  const contactMethods = [
    {
      title: 'Crisis Support',
      description: 'Immediate help for mental health emergencies',
      icon: <AlertTriangleIcon className="h-6 w-6" />,
      contact: 'Call 988 or Text HOME to 741741',
      availability: '24/7',
      urgent: true,
    },
    {
      title: 'Technical Support',
      description: 'Help with platform issues or account problems',
      icon: <MailIcon className="h-6 w-6" />,
      contact: 'support@mindspace.app',
      availability: 'Response within 24 hours',
      urgent: false,
    },
    {
      title: 'Partnership Inquiries',
      description: 'University or organization partnerships',
      icon: <PhoneIcon className="h-6 w-6" />,
      contact: 'partnerships@mindspace.app',
      availability: 'Response within 48 hours',
      urgent: false,
    },
    {
      title: 'Privacy & Security',
      description: 'Questions about data protection and privacy',
      icon: <ShieldIcon className="h-6 w-6" />,
      contact: 'privacy@mindspace.app',
      availability: 'Response within 24 hours',
      urgent: false,
    },
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <Section padding="xl">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <TypographyH1 className="text-4xl sm:text-5xl lg:text-6xl">Contact Us</TypographyH1>
          <TypographyLead className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our support team, report issues, or inquire about partnerships. We're
            here to help.
          </TypographyLead>
        </div>
      </Section>

      {/* Emergency Notice */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <Card className="border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                <AlertTriangleIcon className="h-5 w-5" />
                Mental Health Emergency?
              </CardTitle>
              <CardDescription className="text-red-600 dark:text-red-300">
                If you're in immediate danger or having thoughts of suicide, please contact
                emergency services immediately.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-red-600 hover:bg-red-700" asChild>
                  <a href="tel:988">Call 988 - Suicide & Crisis Lifeline</a>
                </Button>
                <Button
                  variant="outline"
                  className="border-red-300 text-red-700 hover:bg-red-50"
                  asChild
                >
                  <a href="/emergency">View All Crisis Resources</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact Methods */}
      <Section background="muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <TypographyH2 className="text-3xl sm:text-4xl mb-4">How to Reach Us</TypographyH2>
            <TypographyP className="text-muted-foreground max-w-2xl mx-auto">
              Choose the best contact method for your needs. All inquiries are handled
              confidentially.
            </TypographyP>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method) => (
              <Card
                key={method.title}
                className={
                  method.urgent ? 'border-orange-200 bg-orange-50 dark:bg-orange-950/20' : ''
                }
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`p-2 rounded-lg ${method.urgent ? 'bg-orange-100 dark:bg-orange-900/50' : 'bg-primary/10'}`}
                    >
                      <div
                        className={
                          method.urgent ? 'text-orange-600 dark:text-orange-400' : 'text-primary'
                        }
                      >
                        {method.icon}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{method.title}</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <ClockIcon className="h-3 w-3" />
                        {method.availability}
                      </div>
                    </div>
                  </div>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-mono text-sm bg-muted p-3 rounded-lg">{method.contact}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Form */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <TypographyH2 className="text-3xl sm:text-4xl mb-4">Send Us a Message</TypographyH2>
            <TypographyP className="text-muted-foreground">
              For non-urgent inquiries, use the form below. We'll respond within 24-48 hours.
            </TypographyP>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>All form submissions are confidential and secure.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name (Optional)</Label>
                    <Input id="name" placeholder="Your name or 'Anonymous'" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@university.edu" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="feedback">Feedback or Suggestion</SelectItem>
                      <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                      <SelectItem value="privacy">Privacy Question</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your question or issue..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="text-sm text-muted-foreground bg-muted p-4 rounded-lg">
                  <strong>Privacy Note:</strong> This form is secure and confidential. We never
                  share personal information and will only use your contact details to respond to
                  your inquiry.
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Additional Resources */}
      <Section background="muted">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <TypographyH2 className="text-3xl sm:text-4xl">Connect With Us</TypographyH2>
            <TypographyP className="text-muted-foreground">
              Follow us on social media for mental health tips, resources, and community updates.
            </TypographyP>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://x.com/MindSpace125868"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg border border-border hover:bg-background transition-colors"
            >
              <svg className="h-6 w-6 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="text-sm font-medium">X (Twitter)</span>
            </a>
            <a
              href="https://www.instagram.com/mindspace550/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg border border-border hover:bg-background transition-colors"
            >
              <svg className="h-6 w-6 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="text-sm font-medium">Instagram</span>
            </a>
            <a
              href="http://www.linkedin.com/in/mindspace-web-48200a386"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg border border-border hover:bg-background transition-colors"
            >
              <svg className="h-6 w-6 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61581178740012"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg border border-border hover:bg-background transition-colors"
            >
              <svg className="h-6 w-6 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-sm font-medium">Facebook</span>
            </a>
          </div>

          <TypographyP className="text-muted-foreground">
            Access our AI chat support or crisis resources anytime, day or night.
          </TypographyP>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/chat">Start AI Chat</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/help">Visit Help Center</a>
            </Button>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}

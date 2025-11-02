'use client'

import {
  ArrowLeftIcon,
  BookOpenIcon,
  BrainIcon,
  ClockIcon,
  HeartIcon,
  SparklesIcon,
  UsersIcon,
} from 'lucide-react'
import Link from 'next/link'
import { Footer } from '@/components/layout/footer'
import { NavBar } from '@/components/layout/navbar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TypographyH1, TypographyH2, TypographyP } from '@/components/ui/typography'

export default function ArticlesPage() {
  const articles = [
    {
      title: 'Anxiety Management for Students',
      description: 'Learn practical strategies to manage anxiety and academic pressure in college.',
      href: '/resources/articles/anxiety-management-for-students',
      category: 'Mental Health',
      readTime: '8 min read',
      icon: BrainIcon,
    },
    {
      title: 'Depression in College Students',
      description: 'Understanding depression, recognizing symptoms, and finding support.',
      href: '/resources/articles/depression-in-college-students',
      category: 'Mental Health',
      readTime: '10 min read',
      icon: HeartIcon,
    },
    {
      title: 'Stress and Time Management',
      description: 'Effective techniques for managing stress and balancing your college workload.',
      href: '/resources/articles/stress-and-time-management',
      category: 'Academic',
      readTime: '12 min read',
      icon: ClockIcon,
    },
    {
      title: 'Building Support Networks',
      description: 'How to create and maintain meaningful connections in college.',
      href: '/resources/articles/building-support-networks',
      category: 'Social',
      readTime: '9 min read',
      icon: UsersIcon,
    },
    {
      title: 'Mindfulness and Meditation',
      description: 'Introduction to mindfulness practices for mental wellness.',
      href: '/resources/articles/mindfulness-and-meditation',
      category: 'Wellness',
      readTime: '11 min read',
      icon: SparklesIcon,
    },
    {
      title: 'Breathing Techniques for Anxiety',
      description: 'Simple breathing exercises to calm anxiety and reduce stress.',
      href: '/resources/articles/breathing-techniques-for-anxiety',
      category: 'Wellness',
      readTime: '6 min read',
      icon: SparklesIcon,
    },
    {
      title: 'Grounding Techniques for Crisis',
      description: 'Quick grounding methods to manage overwhelming emotions and panic.',
      href: '/resources/articles/grounding-techniques-for-crisis',
      category: 'Crisis Support',
      readTime: '7 min read',
      icon: HeartIcon,
    },
    {
      title: 'Dealing with Loneliness',
      description: 'Understanding loneliness in college and strategies to combat it.',
      href: '/resources/articles/dealing-with-loneliness',
      category: 'Social',
      readTime: '10 min read',
      icon: UsersIcon,
    },
    {
      title: 'Healthy Communication',
      description: 'Building better relationships through effective communication skills.',
      href: '/resources/articles/healthy-communication',
      category: 'Social',
      readTime: '9 min read',
      icon: UsersIcon,
    },
    {
      title: 'Work-Life Balance in College',
      description: 'Strategies for maintaining balance between academics, work, and personal life.',
      href: '/resources/articles/work-life-balance-in-college',
      category: 'Academic',
      readTime: '11 min read',
      icon: ClockIcon,
    },
    {
      title: 'Study Stress Management',
      description: 'Techniques to reduce study-related stress and improve focus.',
      href: '/resources/articles/study-stress-management',
      category: 'Academic',
      readTime: '10 min read',
      icon: BookOpenIcon,
    },
    {
      title: 'Academic Accommodations',
      description: 'Understanding your rights and how to access academic accommodations.',
      href: '/resources/articles/academic-accommodations',
      category: 'Academic',
      readTime: '13 min read',
      icon: BookOpenIcon,
    },
  ]

  // Categories for future filtering implementation
  // const categories = ["All", "Mental Health", "Academic", "Social", "Wellness", "Crisis Support"]

  return (
    <>
      <NavBar />

      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/resources" className="hover:text-primary flex items-center gap-1">
                <ArrowLeftIcon className="h-4 w-4" />
                Resources
              </Link>
              <span>/</span>
              <span className="text-foreground">All Articles</span>
            </div>

            <div className="max-w-3xl">
              <TypographyH1 className="mb-4">Mental Health Articles</TypographyH1>
              <TypographyP className="text-lg text-muted-foreground">
                Explore our comprehensive collection of articles covering mental health, wellness,
                and student life. Each article provides evidence-based strategies and practical tips
                to support your well-being.
              </TypographyP>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => {
                const Icon = article.icon
                return (
                  <Link key={article.href} href={article.href}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 group">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {article.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {article.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <ClockIcon className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <TypographyH2 className="mb-4">Need Personalized Support?</TypographyH2>
            <TypographyP className="text-muted-foreground mb-8">
              Our AI chat support is available 24/7 to provide personalized guidance and support.
            </TypographyP>
            <div className="flex gap-4 justify-center">
              <Link href="/chat">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                  Chat with AI Support
                </button>
              </Link>
              <Link href="/emergency">
                <button className="px-6 py-3 bg-destructive/10 text-destructive rounded-lg hover:bg-destructive/20 transition-colors font-medium">
                  Get Emergency Help
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

'use client'

import { ArrowLeftIcon, BookOpenIcon, ClockIcon } from 'lucide-react'
import Link from 'next/link'
import { Footer } from '@/components/layout/footer'
import { NavBar } from '@/components/layout/navbar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyLead,
  TypographyP,
} from '@/components/ui/typography'

export default function DepressionInCollegeStudentsPage() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-background">
        {/* Breadcrumb Navigation */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link href="/resources" className="hover:text-primary flex items-center gap-1">
                  <ArrowLeftIcon className="h-4 w-4" />
                  Resources
                </Link>
                <span>/</span>
                <span>Understanding Mental Health</span>
                <span>/</span>
                <span className="text-foreground">Depression in College Students</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">Article</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <ClockIcon className="h-4 w-4" />8 min read
                  </div>
                </div>

                <TypographyH1 className="text-4xl sm:text-5xl">
                  Depression in College Students
                </TypographyH1>

                <TypographyLead className="text-xl text-muted-foreground">
                  Recognizing symptoms, understanding causes, and finding help for depression during
                  your college years.
                </TypographyLead>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <TypographyH2>Understanding Depression in College</TypographyH2>

              <TypographyP>
                College can be one of the most exciting times in your life, but it can also be
                incredibly challenging. The combination of academic pressure, social changes,
                financial stress, and newfound independence can contribute to feelings of
                depression. You're not alone—studies show that approximately 30% of college students
                experience significant symptoms of depression during their academic career.
              </TypographyP>

              <TypographyH3>Common Signs and Symptoms</TypographyH3>

              <TypographyP>
                Depression in college students can manifest in various ways. It's important to
                recognize that depression isn't just feeling sad—it's a persistent condition that
                affects your thoughts, emotions, and daily functioning.
              </TypographyP>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="text-lg">Key Warning Signs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Emotional Symptoms:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Persistent sadness or empty feelings</li>
                        <li>• Loss of interest in activities you used to enjoy</li>
                        <li>• Feelings of hopelessness or worthlessness</li>
                        <li>• Increased irritability or mood swings</li>
                        <li>• Excessive guilt or self-criticism</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Physical & Behavioral:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Changes in sleep patterns (too much or too little)</li>
                        <li>• Appetite changes leading to weight loss or gain</li>
                        <li>• Fatigue or loss of energy</li>
                        <li>• Difficulty concentrating on studies</li>
                        <li>• Social withdrawal from friends and activities</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <TypographyH3>Unique Challenges in College</TypographyH3>

              <TypographyP>
                College presents unique stressors that can trigger or worsen depression:
              </TypographyP>

              <div className="space-y-4 my-6">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Academic Pressure</h4>
                  <p className="text-sm text-muted-foreground">
                    Increased workload, competitive environment, and fear of failure can overwhelm
                    students who previously excelled in high school.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Social Transitions</h4>
                  <p className="text-sm text-muted-foreground">
                    Leaving familiar social circles, difficulty making new friends, and relationship
                    challenges can lead to isolation and loneliness.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Independence & Identity</h4>
                  <p className="text-sm text-muted-foreground">
                    Sudden independence can be overwhelming, while questions about identity, career,
                    and future goals can create existential anxiety.
                  </p>
                </div>
              </div>

              <TypographyH3>When to Seek Help</TypographyH3>

              <TypographyP>
                If you've been experiencing several symptoms for more than two weeks, or if your
                symptoms are interfering with your academic performance, relationships, or daily
                life, it's time to seek professional help. Remember, seeking help is a sign of
                strength, not weakness.
              </TypographyP>

              <Card className="my-6 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-800 dark:text-orange-200">
                    Immediate Help Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Campus Counseling:</strong> Most colleges offer free counseling
                      services
                    </p>
                    <p>
                      <strong>Crisis Hotline:</strong> 988 Suicide & Crisis Lifeline (call or text)
                    </p>
                    <p>
                      <strong>Crisis Text Line:</strong> Text HOME to 741741
                    </p>
                    <p>
                      <strong>Emergency:</strong> Call 911 or go to your nearest emergency room
                    </p>
                  </div>
                </CardContent>
              </Card>

              <TypographyH3>Treatment and Coping Strategies</TypographyH3>

              <TypographyP>
                Depression is highly treatable. Effective treatments include:
              </TypographyP>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Professional Treatment</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Cognitive Behavioral Therapy (CBT)</li>
                      <li>• Interpersonal Therapy</li>
                      <li>• Medication (if appropriate)</li>
                      <li>• Support groups</li>
                      <li>• Campus counseling services</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Self-Care Strategies</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Regular exercise (even 20 min walks)</li>
                      <li>• Consistent sleep schedule</li>
                      <li>• Healthy eating habits</li>
                      <li>• Mindfulness and meditation</li>
                      <li>• Social connections and support</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <TypographyH3>Supporting Academic Success</TypographyH3>

              <TypographyP>
                Depression can significantly impact academic performance, but there are resources
                available:
              </TypographyP>

              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Contact your academic advisor about accommodations</li>
                <li>Explore disability services for mental health accommodations</li>
                <li>Consider a reduced course load if needed</li>
                <li>Utilize tutoring and academic support services</li>
                <li>Communicate with professors about your situation</li>
              </ul>

              <TypographyH3>Building Your Support Network</TypographyH3>

              <TypographyP>Recovery from depression is easier with support. Consider:</TypographyP>

              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Joining student organizations or clubs</li>
                <li>Participating in study groups</li>
                <li>Maintaining connections with family and high school friends</li>
                <li>Building relationships with roommates and classmates</li>
                <li>Engaging with campus communities and activities</li>
              </ul>

              <Card className="my-8 bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <h4 className="font-semibold text-lg">Remember</h4>
                    <p className="text-muted-foreground">
                      Depression is a medical condition, not a personal failure. With proper support
                      and treatment, you can recover and thrive in college and beyond. Take it one
                      day at a time, and don't hesitate to reach out for help.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <TypographyH2 className="text-2xl mb-6">Related Articles</TypographyH2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Guide</Badge>
                      <span className="text-xs text-muted-foreground">12 min</span>
                    </div>
                    <CardTitle className="text-lg">Anxiety and Academic Pressure</CardTitle>
                    <CardDescription>
                      Managing anxiety related to coursework, exams, and academic performance.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                      <Link href="/resources/articles/anxiety-academic-pressure">
                        Read Article →
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Guide</Badge>
                      <span className="text-xs text-muted-foreground">10 min</span>
                    </div>
                    <CardTitle className="text-lg">Building Support Networks</CardTitle>
                    <CardDescription>
                      How to identify and build meaningful support relationships in college.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                      <Link href="/resources/articles/building-support-networks">
                        Read Article →
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" asChild>
                  <Link href="/resources">
                    <BookOpenIcon className="h-4 w-4 mr-2" />
                    Browse All Resources
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

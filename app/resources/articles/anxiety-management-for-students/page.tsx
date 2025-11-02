'use client'

import { AlertTriangleIcon, ArrowLeftIcon, BookOpenIcon, ClockIcon } from 'lucide-react'
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

export default function AnxietyAcademicPressurePage() {
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
                <span className="text-foreground">Anxiety and Academic Pressure</span>
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
                  <Badge variant="secondary">Guide</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <ClockIcon className="h-4 w-4" />
                    12 min read
                  </div>
                </div>

                <TypographyH1 className="text-4xl sm:text-5xl">
                  Anxiety and Academic Pressure
                </TypographyH1>

                <TypographyLead className="text-xl text-muted-foreground">
                  Managing anxiety related to coursework, exams, and academic performance in
                  college.
                </TypographyLead>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <TypographyH2>Understanding Academic Anxiety</TypographyH2>

              <TypographyP>
                Academic anxiety is more than just pre-test jitters. It's a persistent feeling of
                worry, fear, or unease about academic performance that can significantly impact your
                college experience. Research shows that over 60% of college students experience
                academic anxiety at some point during their studies.
              </TypographyP>

              <Card className="my-6 border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertTriangleIcon className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                    <CardTitle className="text-lg text-yellow-800 dark:text-yellow-200">
                      Recognize the Signs
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <TypographyP className="text-sm text-yellow-800 dark:text-yellow-200 mb-0">
                    Academic anxiety can manifest as physical symptoms (racing heart, sweating),
                    emotional symptoms (fear of failure, perfectionism), and behavioral symptoms
                    (procrastination, avoidance of challenging tasks).
                  </TypographyP>
                </CardContent>
              </Card>

              <TypographyH3>Common Triggers of Academic Anxiety</TypographyH3>

              <div className="space-y-4 my-6">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Performance Pressure</h4>
                  <p className="text-sm text-muted-foreground">
                    Fear of not meeting expectations (your own or others'), worry about grades, and
                    comparison with peers can create intense pressure.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Test and Exam Anxiety</h4>
                  <p className="text-sm text-muted-foreground">
                    Specific fear about testing situations, including worrying about blanking out,
                    running out of time, or not being adequately prepared.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Perfectionism</h4>
                  <p className="text-sm text-muted-foreground">
                    Setting unrealistically high standards for yourself and fearing any mistakes or
                    perceived failures in academic work.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Imposter Syndrome</h4>
                  <p className="text-sm text-muted-foreground">
                    Feeling like you don't belong in college or that you're not as capable as your
                    peers, despite evidence of your achievements.
                  </p>
                </div>
              </div>

              <TypographyH3>Physical and Emotional Symptoms</TypographyH3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Physical Symptoms</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Rapid heartbeat or palpitations</li>
                      <li>• Sweating or hot flashes</li>
                      <li>• Muscle tension or headaches</li>
                      <li>• Stomach problems or nausea</li>
                      <li>• Difficulty sleeping</li>
                      <li>• Fatigue or restlessness</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Emotional & Behavioral</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Persistent worry about grades</li>
                      <li>• Fear of failure or disappointment</li>
                      <li>• Procrastination or avoidance</li>
                      <li>• Difficulty concentrating</li>
                      <li>• Irritability or mood swings</li>
                      <li>• Social withdrawal</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <TypographyH3>Effective Coping Strategies</TypographyH3>

              <TypographyH2 className="text-xl mt-8 mb-4">
                Immediate Anxiety Management
              </TypographyH2>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Relief Techniques</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Deep Breathing (4-7-8 Technique)</h4>
                      <p className="text-sm text-muted-foreground">
                        Inhale for 4 counts, hold for 7 counts, exhale for 8 counts. Repeat 3-4
                        times.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Grounding Exercise (5-4-3-2-1)</h4>
                      <p className="text-sm text-muted-foreground">
                        Notice 5 things you can see, 4 you can touch, 3 you can hear, 2 you can
                        smell, 1 you can taste.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Progressive Muscle Relaxation</h4>
                      <p className="text-sm text-muted-foreground">
                        Tense and then relax each muscle group starting from your toes and working
                        upward.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <TypographyH2 className="text-xl mt-8 mb-4">Long-term Strategies</TypographyH2>

              <TypographyH3>Study and Time Management</TypographyH3>

              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>Break large projects into smaller tasks:</strong> This makes them feel
                  more manageable and provides regular opportunities for success.
                </li>
                <li>
                  <strong>Use active study techniques:</strong> Practice testing yourself, teaching
                  others, and creating mind maps rather than just re-reading notes.
                </li>
                <li>
                  <strong>Create a realistic study schedule:</strong> Include buffer time for
                  unexpected challenges and regular breaks.
                </li>
                <li>
                  <strong>Establish a consistent routine:</strong> Regular sleep, study, and meal
                  times can reduce overall stress.
                </li>
                <li>
                  <strong>Prepare thoroughly but know when to stop:</strong> Over-studying can
                  increase anxiety rather than reduce it.
                </li>
              </ul>

              <TypographyH3>Cognitive Strategies</TypographyH3>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="text-lg">Challenging Anxious Thoughts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Question Your Thoughts:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Is this thought realistic or am I catastrophizing?</li>
                        <li>• What would I tell a friend in this situation?</li>
                        <li>• What's the worst that could realistically happen?</li>
                        <li>• Have I handled difficult situations before?</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Reframe Negative Thoughts:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• "I'm going to fail" → "I'm prepared and will do my best"</li>
                        <li>• "I should be perfect" → "Making mistakes is part of learning"</li>
                        <li>• "Everyone is smarter than me" → "We all have different strengths"</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <TypographyH3>Test-Taking Strategies</TypographyH3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Before the Test</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Review material regularly, not just before exams</li>
                      <li>• Get adequate sleep the night before</li>
                      <li>• Eat a nutritious breakfast</li>
                      <li>• Arrive early to settle in</li>
                      <li>• Bring all necessary materials</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">During the Test</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Read instructions carefully</li>
                      <li>• Start with easier questions</li>
                      <li>• Manage your time wisely</li>
                      <li>• Use deep breathing if you feel panicked</li>
                      <li>• Focus on one question at a time</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <TypographyH3>Building Resilience</TypographyH3>

              <TypographyP>
                Developing resilience helps you bounce back from academic setbacks and reduces
                overall anxiety:
              </TypographyP>

              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>Maintain perspective:</strong> Remember that grades don't define your
                  worth as a person
                </li>
                <li>
                  <strong>Practice self-compassion:</strong> Treat yourself with the same kindness
                  you'd show a friend
                </li>
                <li>
                  <strong>Celebrate small wins:</strong> Acknowledge your efforts and progress, not
                  just perfect outcomes
                </li>
                <li>
                  <strong>Learn from setbacks:</strong> View challenges as opportunities to grow
                  rather than failures
                </li>
                <li>
                  <strong>Maintain balance:</strong> Engage in activities outside of academics that
                  bring you joy
                </li>
              </ul>

              <TypographyH3>When to Seek Professional Help</TypographyH3>

              <Card className="my-6 border-red-200 bg-red-50 dark:bg-red-950/20">
                <CardHeader>
                  <CardTitle className="text-lg text-red-800 dark:text-red-200">
                    Consider Professional Support If:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
                    <li>• Anxiety significantly impacts your academic performance</li>
                    <li>• You're avoiding classes or dropping courses due to anxiety</li>
                    <li>• Physical symptoms are severe or persistent</li>
                    <li>• You're using substances to cope with anxiety</li>
                    <li>• Self-help strategies aren't providing sufficient relief</li>
                    <li>• Anxiety is affecting your relationships or daily life</li>
                  </ul>
                </CardContent>
              </Card>

              <TypographyH3>Campus and Professional Resources</TypographyH3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">On-Campus Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Counseling and Psychological Services</li>
                      <li>• Academic Success Centers</li>
                      <li>• Disability Services (for accommodations)</li>
                      <li>• Student Health Centers</li>
                      <li>• Peer Support Groups</li>
                      <li>• Study Skills Workshops</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Treatment Options</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Cognitive Behavioral Therapy (CBT)</li>
                      <li>• Acceptance and Commitment Therapy</li>
                      <li>• Mindfulness-Based Stress Reduction</li>
                      <li>• Medication (if appropriate)</li>
                      <li>• Relaxation training</li>
                      <li>• Academic coaching</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="my-8 bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <h4 className="font-semibold text-lg">Remember</h4>
                    <p className="text-muted-foreground">
                      Academic anxiety is treatable and manageable. With the right strategies and
                      support, you can reduce your anxiety and improve both your academic
                      performance and overall well-being. It's okay to ask for help—seeking support
                      is a sign of wisdom, not weakness.
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
                      <Badge variant="secondary">Toolkit</Badge>
                      <span className="text-xs text-muted-foreground">15 min</span>
                    </div>
                    <CardTitle className="text-lg">Stress and Time Management</CardTitle>
                    <CardDescription>
                      Healthy strategies for managing stress and balancing responsibilities.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                      <Link href="/resources/articles/stress-time-management">Read Article →</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Exercise</Badge>
                      <span className="text-xs text-muted-foreground">5 min</span>
                    </div>
                    <CardTitle className="text-lg">Breathing Techniques for Anxiety</CardTitle>
                    <CardDescription>
                      Step-by-step breathing exercises to reduce anxiety and panic.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                      <Link href="/resources/articles/breathing-techniques">Read Article →</Link>
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

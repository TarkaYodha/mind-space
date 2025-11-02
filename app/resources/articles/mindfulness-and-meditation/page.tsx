'use client'

import { ArrowLeftIcon, BookOpenIcon, BrainIcon, ClockIcon, HeartIcon } from 'lucide-react'
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

export default function MindfulnessMeditationPage() {
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
                <span>Coping Strategies</span>
                <span>/</span>
                <span className="text-foreground">Mindfulness and Meditation</span>
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
                  <Badge variant="secondary">Interactive</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <ClockIcon className="h-4 w-4" />
                    10 min read
                  </div>
                </div>

                <TypographyH1 className="text-4xl sm:text-5xl">
                  Mindfulness and Meditation
                </TypographyH1>

                <TypographyLead className="text-xl text-muted-foreground">
                  Simple mindfulness exercises you can do anywhere, anytime to reduce stress and
                  improve well-being.
                </TypographyLead>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <TypographyH2>What is Mindfulness?</TypographyH2>

              <TypographyP>
                Mindfulness is the practice of purposefully paying attention to the present moment
                without judgment. For college students, it's a powerful tool to manage stress,
                improve focus, and enhance emotional well-being. Research shows that regular
                mindfulness practice can reduce anxiety, improve academic performance, and increase
                overall life satisfaction.
              </TypographyP>

              <Card className="my-6 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BrainIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
                      Benefits for College Students
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800 dark:text-blue-200">
                    <div>
                      <ul className="space-y-1">
                        <li>• Reduced test anxiety and stress</li>
                        <li>• Improved concentration and focus</li>
                        <li>• Better emotional regulation</li>
                        <li>• Enhanced sleep quality</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-1">
                        <li>• Increased self-awareness</li>
                        <li>• Better relationships with others</li>
                        <li>• Reduced symptoms of depression</li>
                        <li>• Greater overall well-being</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <TypographyH2>Simple Mindfulness Exercises</TypographyH2>

              <TypographyH3>1. The 5-Minute Morning Mindfulness</TypographyH3>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Perfect for: Starting your day with intention
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">Step-by-Step Instructions:</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong>1.</strong> Sit comfortably in bed or a chair
                        </div>
                        <div>
                          <strong>2.</strong> Take three deep breaths to center yourself
                        </div>
                        <div>
                          <strong>3.</strong> Set an intention for your day (e.g., "I will approach
                          challenges with curiosity")
                        </div>
                        <div>
                          <strong>4.</strong> Spend 2-3 minutes focusing on your breath
                        </div>
                        <div>
                          <strong>5.</strong> Notice any thoughts without judging them, then return
                          to your breath
                        </div>
                        <div>
                          <strong>6.</strong> End by taking a moment to appreciate starting your day
                          mindfully
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <TypographyH3>2. Walking Meditation Between Classes</TypographyH3>

              <TypographyP>Turn your walk between classes into a mindfulness practice:</TypographyP>

              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>Mindful Steps:</strong> Feel your feet touching the ground with each step
                </li>
                <li>
                  <strong>Sensory Awareness:</strong> Notice sounds, sights, and sensations around
                  you
                </li>
                <li>
                  <strong>Breath Connection:</strong> Coordinate your breathing with your walking
                  rhythm
                </li>
                <li>
                  <strong>Present Moment:</strong> When your mind wanders to upcoming classes,
                  gently return to the walking experience
                </li>
              </ul>

              <TypographyH3>3. The STOP Technique for Stress</TypographyH3>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Use when feeling overwhelmed or stressed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center">
                            <span className="text-red-600 dark:text-red-400 font-bold text-sm">
                              S
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Stop</h4>
                            <p className="text-sm text-muted-foreground">
                              Pause whatever you're doing
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/50 rounded-full flex items-center justify-center">
                            <span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm">
                              T
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Take a breath</h4>
                            <p className="text-sm text-muted-foreground">
                              Take one or more conscious breaths
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">
                              O
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Observe</h4>
                            <p className="text-sm text-muted-foreground">
                              Notice your thoughts and feelings
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                            <span className="text-green-600 dark:text-green-400 font-bold text-sm">
                              P
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Proceed</h4>
                            <p className="text-sm text-muted-foreground">
                              Continue with awareness and intention
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <TypographyH2>Meditation Practices for Students</TypographyH2>

              <TypographyH3>Body Scan Meditation</TypographyH3>

              <TypographyP>Perfect for stress relief and better sleep:</TypographyP>

              <div className="bg-muted/50 p-6 rounded-lg my-6">
                <h4 className="font-semibold mb-4">10-Minute Body Scan:</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>1.</strong> Lie down comfortably in your dorm room
                  </div>
                  <div>
                    <strong>2.</strong> Close your eyes and take several deep breaths
                  </div>
                  <div>
                    <strong>3.</strong> Start at the top of your head, noticing any sensations
                  </div>
                  <div>
                    <strong>4.</strong> Slowly move your attention down through your body
                  </div>
                  <div>
                    <strong>5.</strong> Spend 30 seconds on each body part (forehead, eyes, jaw,
                    neck, shoulders, etc.)
                  </div>
                  <div>
                    <strong>6.</strong> Don't try to change anything, just notice what you feel
                  </div>
                  <div>
                    <strong>7.</strong> End by taking a few deep breaths and slowly opening your
                    eyes
                  </div>
                </div>
              </div>

              <TypographyH3>Loving-Kindness Meditation</TypographyH3>

              <TypographyP>
                Especially helpful for dealing with difficult relationships or social stress:
              </TypographyP>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="text-lg">Practice Steps (5-10 minutes)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">1. Start with yourself:</h4>
                      <p className="text-muted-foreground italic">
                        "May I be happy. May I be healthy. May I be at peace. May I be free from
                        suffering."
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">2. Think of someone you love:</h4>
                      <p className="text-muted-foreground italic">
                        "May you be happy. May you be healthy. May you be at peace. May you be free
                        from suffering."
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        3. Think of a neutral person (classmate, cashier):
                      </h4>
                      <p className="text-muted-foreground italic">Repeat the same phrases</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">4. Think of someone difficult:</h4>
                      <p className="text-muted-foreground italic">
                        Repeat the same phrases (this may feel challenging)
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">5. Extend to all beings:</h4>
                      <p className="text-muted-foreground italic">
                        "May all beings be happy, healthy, at peace, and free from suffering."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <TypographyH2>Integrating Mindfulness into College Life</TypographyH2>

              <TypographyH3>Mindful Study Sessions</TypographyH3>

              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>Before studying:</strong> Take 2 minutes to set an intention and clear
                  your mind
                </li>
                <li>
                  <strong>During breaks:</strong> Practice mindful breathing instead of scrolling
                  social media
                </li>
                <li>
                  <strong>When frustrated:</strong> Use the STOP technique before continuing
                </li>
                <li>
                  <strong>After studying:</strong> Take a moment to appreciate your effort,
                  regardless of results
                </li>
              </ul>

              <TypographyH3>Mindful Eating in Dining Halls</TypographyH3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Before Eating</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Take three conscious breaths</li>
                      <li>• Notice your hunger level</li>
                      <li>• Look at your food with appreciation</li>
                      <li>• Set an intention to eat mindfully</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">While Eating</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Eat the first few bites slowly</li>
                      <li>• Notice flavors, textures, temperatures</li>
                      <li>• Put down utensils between bites</li>
                      <li>• Minimize distractions (phone, TV)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <TypographyH3>Mindful Technology Use</TypographyH3>

              <TypographyP>Create healthy boundaries with technology:</TypographyP>

              <div className="space-y-4 my-6">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Phone Mindfulness</h4>
                  <p className="text-sm text-muted-foreground">
                    Before picking up your phone, pause and ask: "What am I hoping to find?" Set a
                    time limit and stick to it.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Social Media Awareness</h4>
                  <p className="text-sm text-muted-foreground">
                    Notice how you feel before, during, and after using social media. Take mindful
                    breaks from comparing yourself to others.
                  </p>
                </div>
              </div>

              <TypographyH2>Building a Sustainable Practice</TypographyH2>

              <TypographyH3>Start Small and Be Consistent</TypographyH3>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="text-lg">Weekly Practice Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Week 1-2:</strong> 5 minutes daily morning mindfulness
                    </div>
                    <div>
                      <strong>Week 3-4:</strong> Add mindful walking between classes
                    </div>
                    <div>
                      <strong>Week 5-6:</strong> Include STOP technique during stressful moments
                    </div>
                    <div>
                      <strong>Week 7+:</strong> Experiment with longer meditations (10-15 minutes)
                    </div>
                  </div>
                </CardContent>
              </Card>

              <TypographyH3>Common Challenges and Solutions</TypographyH3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Challenge: "I don't have time"</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p>
                      <strong>Solution:</strong> Start with just 2-3 minutes. Practice during
                      activities you already do (walking, waiting, eating).
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Challenge: "My mind is too busy"</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p>
                      <strong>Solution:</strong> A busy mind is normal! The goal isn't to stop
                      thoughts, but to notice them without judgment.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Challenge: "I keep forgetting"</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p>
                      <strong>Solution:</strong> Set phone reminders, use apps, or tie practice to
                      existing habits (after brushing teeth).
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Challenge: "I don't feel different"</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p>
                      <strong>Solution:</strong> Benefits often develop gradually. Keep a simple
                      journal noting your stress levels and mood.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <TypographyH2>Resources and Apps</TypographyH2>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="text-lg">Recommended Apps for Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Free Options:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Insight Timer (large free library)</li>
                        <li>• UCLA Mindful app</li>
                        <li>• Smiling Mind</li>
                        <li>• Ten Percent Happier (some free content)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Student Discounts:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Headspace (often free through universities)</li>
                        <li>• Calm (student pricing available)</li>
                        <li>• Waking Up (scholarship program)</li>
                        <li>• Check if your campus offers free access</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="my-8 bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-2">
                      <HeartIcon className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-lg">Remember</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Mindfulness is a practice, not a performance. Be patient and kind with
                      yourself as you develop this skill. Even a few minutes of mindfulness can make
                      a meaningful difference in your college experience. Start where you are, and
                      let your practice grow naturally over time.
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
                      <Link href="/resources/articles/breathing-techniques-for-anxiety">
                        Read Article →
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

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
                      <Link href="/resources/articles/stress-and-time-management">
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

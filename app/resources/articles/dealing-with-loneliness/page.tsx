'use client'

import {
  ArrowLeftIcon,
  BookOpenIcon,
  ClockIcon,
  HeartIcon,
  PhoneIcon,
  UsersIcon,
} from 'lucide-react'
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

export default function DealingWithLonelinessPage() {
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
                <span>Relationship & Social Support</span>
                <span>/</span>
                <span className="text-foreground">Dealing with Loneliness</span>
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
                  <Badge variant="secondary">Toolkit</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <ClockIcon className="h-4 w-4" />
                    12 min read
                  </div>
                </div>

                <TypographyH1 className="text-4xl sm:text-5xl">
                  Dealing with Loneliness
                </TypographyH1>

                <TypographyLead className="text-xl text-muted-foreground">
                  Strategies for coping with loneliness and social isolation during your college
                  experience.
                </TypographyLead>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <TypographyH2>Understanding Loneliness in College</TypographyH2>

              <TypographyP>
                Loneliness is one of the most common experiences among college students, yet it's
                often kept secret due to shame or stigma. Studies show that over 60% of college
                students report feeling lonely, and these feelings have increased significantly in
                recent years. Understanding that loneliness is both normal and manageable is the
                first step toward addressing it.
              </TypographyP>

              <Card className="my-6 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <HeartIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
                      You're Not Alone in Feeling Alone
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <TypographyP className="text-sm text-blue-800 dark:text-blue-200 mb-0">
                    Loneliness doesn't mean you're antisocial, weird, or unlikeable. It's a natural
                    human emotion that signals our need for connection. Even people who appear
                    popular and social can experience deep loneliness. Recognizing this is part of
                    your healing journey.
                  </TypographyP>
                </CardContent>
              </Card>

              <TypographyH2>Types of Loneliness</TypographyH2>

              <TypographyP>
                Understanding what type of loneliness you're experiencing can help you choose the
                most effective strategies:
              </TypographyP>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Social Loneliness</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="mb-3">
                      <strong>What it is:</strong> Lacking a network of friends or social
                      connections
                    </p>
                    <p className="mb-3">
                      <strong>Common triggers:</strong> Moving away from home, difficulty making new
                      friends, social anxiety
                    </p>
                    <p className="text-muted-foreground italic">
                      Focus on building new friendships and social networks.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Emotional Loneliness</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="mb-3">
                      <strong>What it is:</strong> Missing deep, intimate connections and
                      understanding
                    </p>
                    <p className="mb-3">
                      <strong>Common triggers:</strong> Distance from family, lack of close
                      confidants, surface-level relationships
                    </p>
                    <p className="text-muted-foreground italic">
                      Focus on deepening existing relationships and finding meaningful connections.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Existential Loneliness</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="mb-3">
                      <strong>What it is:</strong> Feeling disconnected from purpose, meaning, or
                      your authentic self
                    </p>
                    <p className="mb-3">
                      <strong>Common triggers:</strong> Major life transitions, questioning
                      identity, feeling misunderstood
                    </p>
                    <p className="text-muted-foreground italic">
                      Focus on self-discovery, values exploration, and finding your place in the
                      world.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Situational Loneliness</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="mb-3">
                      <strong>What it is:</strong> Temporary loneliness due to specific
                      circumstances
                    </p>
                    <p className="mb-3">
                      <strong>Common triggers:</strong> Roommate conflicts, relationship breakups,
                      friend group changes
                    </p>
                    <p className="text-muted-foreground italic">
                      Focus on addressing the specific situation and building resilience.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <TypographyH2>Common Causes of College Loneliness</TypographyH2>

              <TypographyH3>Transition Challenges</TypographyH3>

              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>Leaving home support systems:</strong> Distance from family and high
                  school friends
                </li>
                <li>
                  <strong>New environment:</strong> Unfamiliar campus, different culture, academic
                  pressures
                </li>
                <li>
                  <strong>Identity shifts:</strong> Questioning who you are without familiar roles
                  and relationships
                </li>
                <li>
                  <strong>Independence overwhelm:</strong> Sudden responsibility for all aspects of
                  life
                </li>
              </ul>

              <TypographyH3>Social Barriers</TypographyH3>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="text-lg">What Makes Connection Difficult</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Surface-Level Interactions:</h4>
                      <p className="text-muted-foreground">
                        Many college social interactions remain at small-talk level, leaving you
                        feeling unseen.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Comparison and Competition:</h4>
                      <p className="text-muted-foreground">
                        Academic and social pressure can make relationships feel competitive rather
                        than supportive.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Digital Connection Paradox:</h4>
                      <p className="text-muted-foreground">
                        Being constantly "connected" online while feeling emotionally disconnected.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Mismatched Expectations:</h4>
                      <p className="text-muted-foreground">
                        Expecting college friendships to immediately match the depth of long-term
                        relationships.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <TypographyH2>Strategies for Building Connection</TypographyH2>

              <TypographyH3>Start Small and Be Consistent</TypographyH3>

              <TypographyP>
                Building meaningful connections takes time. Focus on consistency rather than grand
                gestures:
              </TypographyP>

              <div className="bg-muted/50 p-6 rounded-lg my-6">
                <h4 className="font-semibold mb-4">The 5-Minute Connection Rule:</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Day 1:</strong> Make eye contact and smile at someone in class
                  </div>
                  <div>
                    <strong>Day 2:</strong> Say hello to the same person
                  </div>
                  <div>
                    <strong>Day 3:</strong> Ask a simple question ("How did you find today's
                    lecture?")
                  </div>
                  <div>
                    <strong>Day 4:</strong> Share something small about yourself
                  </div>
                  <div>
                    <strong>Day 5:</strong> Suggest studying together or grabbing coffee
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 italic">
                  Small, consistent interactions build familiarity and comfort over time.
                </p>
              </div>

              <TypographyH3>Quality Over Quantity</TypographyH3>

              <TypographyP>
                You don't need dozens of friends. Focus on building a few meaningful relationships:
              </TypographyP>

              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>One close confidant:</strong> Someone you can be vulnerable with
                </li>
                <li>
                  <strong>2-3 regular companions:</strong> People you enjoy spending time with
                </li>
                <li>
                  <strong>Several acquaintances:</strong> Friendly faces who brighten your day
                </li>
                <li>
                  <strong>Study partners:</strong> People who share your academic goals
                </li>
                <li>
                  <strong>Activity partners:</strong> Those who share your interests and hobbies
                </li>
              </ul>

              <TypographyH2>Practical Connection Strategies</TypographyH2>

              <TypographyH3>Join Interest-Based Groups</TypographyH3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Low-Pressure Activities</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Book clubs or discussion groups</li>
                      <li>• Study groups for challenging classes</li>
                      <li>• Volunteer organizations</li>
                      <li>• Campus fitness classes</li>
                      <li>• Art, music, or creative workshops</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Structured Social Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Residence hall programming</li>
                      <li>• Campus job or work-study</li>
                      <li>• Academic clubs in your major</li>
                      <li>• Religious or spiritual communities</li>
                      <li>• Support groups or therapy groups</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <TypographyH3>Leverage Your Living Situation</TypographyH3>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="text-lg">Building Connections Where You Live</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Dorm Life:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Keep your door open when you're home and available to chat</li>
                        <li>• Attend floor meetings and residence hall events</li>
                        <li>• Use common spaces like lounges and kitchens</li>
                        <li>• Offer to share snacks or help with technology</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Off-Campus Living:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Introduce yourself to neighbors</li>
                        <li>• Use community spaces like gyms or study rooms</li>
                        <li>• Attend building or neighborhood events</li>
                        <li>• Be friendly in shared spaces like laundry rooms</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <TypographyH2>Coping with Loneliness in the Moment</TypographyH2>

              <TypographyH3>Immediate Comfort Strategies</TypographyH3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Self-Soothing Activities</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Take a warm shower or bath</li>
                      <li>• Listen to comforting music or podcasts</li>
                      <li>• Practice gentle movement or stretching</li>
                      <li>• Create art, write, or journal</li>
                      <li>• Cook or bake something special</li>
                      <li>• Watch comfort shows or movies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Reaching Out Virtually</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Video call family or old friends</li>
                      <li>• Send a thoughtful text to someone you care about</li>
                      <li>• Join online communities related to your interests</li>
                      <li>• Participate in virtual study groups</li>
                      <li>• Use apps for virtual companionship (study apps, etc.)</li>
                      <li>• Write letters or emails to distant friends</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <TypographyH3>Reframing Alone Time</TypographyH3>

              <TypographyP>
                Learning to enjoy your own company is crucial for mental health:
              </TypographyP>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="text-lg">Turning Solitude into Self-Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Mindful Solitude:</h4>
                      <p className="text-muted-foreground">
                        Practice meditation, mindfulness, or quiet reflection to connect with
                        yourself.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Solo Adventures:</h4>
                      <p className="text-muted-foreground">
                        Visit museums, take walks, try new restaurants, or explore campus alone.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Skill Development:</h4>
                      <p className="text-muted-foreground">
                        Learn something new, practice hobbies, or work on personal projects.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Self-Reflection:</h4>
                      <p className="text-muted-foreground">
                        Journal about your experiences, values, and goals to deepen
                        self-understanding.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <TypographyH2>When Loneliness Becomes Concerning</TypographyH2>

              <TypographyP>
                While loneliness is normal, it becomes problematic when it significantly impacts
                your daily functioning or mental health. Consider seeking professional help if you
                experience:
              </TypographyP>

              <Card className="my-6 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-800 dark:text-orange-200">
                    Warning Signs to Watch For
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
                    <div>• Persistent sadness or depression lasting more than two weeks</div>
                    <div>• Avoiding all social situations or academic responsibilities</div>
                    <div>• Thoughts of self-harm or suicide</div>
                    <div>• Significant changes in eating or sleeping patterns</div>
                    <div>• Using alcohol or substances to cope with loneliness</div>
                    <div>• Inability to function in daily activities</div>
                    <div>• Feeling hopeless about ever connecting with others</div>
                  </div>
                </CardContent>
              </Card>

              <TypographyH2>Building Long-Term Resilience</TypographyH2>

              <TypographyH3>Developing Social Skills</TypographyH3>

              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>Practice active listening:</strong> Focus fully on others when they speak
                </li>
                <li>
                  <strong>Ask open-ended questions:</strong> Show genuine interest in others'
                  experiences
                </li>
                <li>
                  <strong>Share appropriately:</strong> Gradually open up as relationships develop
                </li>
                <li>
                  <strong>Be reliable:</strong> Follow through on plans and commitments
                </li>
                <li>
                  <strong>Show appreciation:</strong> Thank people and acknowledge their kindness
                </li>
              </ul>

              <TypographyH3>Creating a Support Network</TypographyH3>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="text-lg">Your Personal Connection Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Immediate Circle (1-2 people):</h4>
                      <p className="text-muted-foreground">
                        Close friends or family you can call during difficult times.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Regular Contact (3-5 people):</h4>
                      <p className="text-muted-foreground">
                        Friends you see weekly or communicate with regularly.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Activity Partners (5-10 people):</h4>
                      <p className="text-muted-foreground">
                        Classmates, club members, or hobby partners you enjoy spending time with.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Professional Support:</h4>
                      <p className="text-muted-foreground">
                        Mental health professionals, advisors, or mentors you can turn to for
                        guidance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <TypographyH2>Getting Professional Help</TypographyH2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Campus Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Counseling and psychological services</li>
                      <li>• Support groups for loneliness or social anxiety</li>
                      <li>• Peer mentoring programs</li>
                      <li>• Student involvement offices</li>
                      <li>• Residence life staff</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Crisis Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <PhoneIcon className="h-4 w-4" />
                        <span>
                          <strong>988</strong> - Suicide & Crisis Lifeline
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PhoneIcon className="h-4 w-4" />
                        <span>
                          <strong>Text HOME to 741741</strong> - Crisis Text Line
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        Available 24/7 for anyone experiencing emotional distress.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="my-8 bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-2">
                      <UsersIcon className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-lg">Remember</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Loneliness is a temporary experience, not a permanent state. Every person you
                      see on campus has felt lonely at some point. Building meaningful connections
                      takes time, patience, and self-compassion. Start small, be authentic, and
                      remember that the right people will appreciate you for who you are. You
                      deserve connection and belonging.
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

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Article</Badge>
                      <span className="text-xs text-muted-foreground">8 min</span>
                    </div>
                    <CardTitle className="text-lg">Depression in College Students</CardTitle>
                    <CardDescription>
                      Recognizing symptoms, understanding causes, and finding help for depression.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                      <Link href="/resources/articles/depression-in-college-students">
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

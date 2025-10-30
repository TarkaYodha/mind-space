"use client"

import { NavBar } from "@/components/layout/page-layout"
import { TypographyH1, TypographyH2, TypographyH3, TypographyP, TypographyLead } from "@/components/ui/typography"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, ClockIcon, BookOpenIcon, UsersIcon, HeartIcon, CheckCircleIcon } from "lucide-react"
import Link from "next/link"

export default function BuildingSupportNetworksPage() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <section className="py-16"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/resources" className="hover:text-primary flex items-center gap-1">
              <ArrowLeftIcon className="h-4 w-4" />
              Resources
            </Link>
            <span>/</span>
            <span>Relationship & Social Support</span>
            <span>/</span>
            <span className="text-foreground">Building Support Networks</span>
          </div>
        </div>
      </div></section>

      {/* Article Header */}
      <section className="py-16"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Badge variant="secondary">Guide</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <ClockIcon className="h-4 w-4" />
                10 min read
              </div>
            </div>
            
            <TypographyH1 className="text-4xl sm:text-5xl">
              Building Support Networks
            </TypographyH1>
            
            <TypographyLead className="text-xl text-muted-foreground">
              How to identify and build meaningful support relationships in college to enhance your mental health and well-being.
            </TypographyLead>
          </div>
        </div>
      </div></section>

      {/* Article Content */}
      <section className="py-16"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <TypographyH2>Why Support Networks Matter in College</TypographyH2>
          
          <TypographyP>
            College can be an isolating experience, especially when you're navigating academic pressure, 
            financial stress, and major life decisions. Having a strong support network isn't just nice to have—
            it's essential for mental health and academic success. Research shows that students with strong 
            social connections have lower rates of depression and anxiety, better academic performance, 
            and greater overall life satisfaction.
          </TypographyP>

          <Card className="my-6 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <HeartIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
                  Benefits of Strong Support Networks
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800 dark:text-blue-200">
                <div>
                  <ul className="space-y-1">
                    <li>• Reduced stress and anxiety</li>
                    <li>• Better emotional regulation</li>
                    <li>• Increased sense of belonging</li>
                    <li>• Improved academic motivation</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-1">
                    <li>• Enhanced problem-solving skills</li>
                    <li>• Greater resilience during challenges</li>
                    <li>• Opportunities for personal growth</li>
                    <li>• Reduced risk of mental health issues</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH2>Types of Support You Need</TypographyH2>
          
          <TypographyP>
            A healthy support network includes different types of relationships that serve various needs. 
            You don't need dozens of people—quality matters more than quantity.
          </TypographyP>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Emotional Support</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="mb-3"><strong>What it provides:</strong> Listening, empathy, caring, love</p>
                <p className="mb-3"><strong>Who provides it:</strong> Close friends, family, romantic partners, trusted mentors</p>
                <p className="text-muted-foreground italic">These are your safe people who you can be vulnerable with.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Informational Support</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="mb-3"><strong>What it provides:</strong> Advice, guidance, information, suggestions</p>
                <p className="mb-3"><strong>Who provides it:</strong> Academic advisors, professors, older students, career services staff</p>
                <p className="text-muted-foreground italic">These people help you navigate college systems and make decisions.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Instrumental Support</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="mb-3"><strong>What it provides:</strong> Practical help, resources, assistance with tasks</p>
                <p className="mb-3"><strong>Who provides it:</strong> Study partners, roommates, classmates, campus services</p>
                <p className="text-muted-foreground italic">These connections help with day-to-day college life.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Social Support</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="mb-3"><strong>What it provides:</strong> Fun, belonging, shared activities, companionship</p>
                <p className="mb-3"><strong>Who provides it:</strong> Friend groups, club members, teammates, social circles</p>
                <p className="text-muted-foreground italic">These relationships provide enjoyment and social connection.</p>
              </CardContent>
            </Card>
          </div>

          <TypographyH2>Where to Find Support in College</TypographyH2>

          <TypographyH3>Academic Connections</TypographyH3>
          
          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Building Academic Support</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Study Groups:</h4>
                  <p className="text-muted-foreground">Form or join study groups in your challenging classes. These often evolve into meaningful friendships.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Professor Office Hours:</h4>
                  <p className="text-muted-foreground">Regular visits can lead to mentorship relationships and academic guidance.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Teaching Assistants:</h4>
                  <p className="text-muted-foreground">TAs understand the student experience and can provide both academic and personal insights.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Academic Success Centers:</h4>
                  <p className="text-muted-foreground">Tutors and staff become familiar faces who understand your academic journey.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH3>Campus Organizations and Activities</TypographyH3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interest-Based Groups</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Academic clubs related to your major</li>
                  <li>• Hobby groups (gaming, crafts, music)</li>
                  <li>• Cultural and ethnic organizations</li>
                  <li>• Religious or spiritual groups</li>
                  <li>• Special interest societies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Service and Leadership</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Volunteer organizations</li>
                  <li>• Student government</li>
                  <li>• Peer mentoring programs</li>
                  <li>• Community service groups</li>
                  <li>• Campus advocacy organizations</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <TypographyH3>Living Environment Support</TypographyH3>
          
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>Roommates and floormates:</strong> Start with casual conversations and shared activities</li>
            <li><strong>Resident Advisors (RAs):</strong> Trained to provide support and connect you with resources</li>
            <li><strong>Residence hall programming:</strong> Floor events and activities create natural connection opportunities</li>
            <li><strong>Off-campus neighbors:</strong> Building relationships in your apartment complex or neighborhood</li>
          </ul>

          <TypographyH2>How to Build Meaningful Connections</TypographyH2>

          <TypographyH3>Starting Conversations</TypographyH3>
          
          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Conversation Starters That Work</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">In Class:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• "How did you find that assignment?"</li>
                    <li>• "Are you planning to go to the study session?"</li>
                    <li>• "What did you think of today's lecture?"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">At Events:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• "How long have you been involved with this group?"</li>
                    <li>• "What made you interested in joining?"</li>
                    <li>• "Have you been to one of these events before?"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">In Common Areas:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• "Is this your first year living here?"</li>
                    <li>• "Do you know if the dining hall is still open?"</li>
                    <li>• "I love your [item] - where did you get it?"</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH3>Moving from Acquaintance to Friend</TypographyH3>
          
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">The Progression of Friendship:</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <span className="font-medium">Repeated Positive Interactions:</span> Say hello when you see them, make small talk
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <span className="font-medium">Shared Activities:</span> Study together, attend events, grab meals
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <span className="font-medium">Personal Sharing:</span> Gradually share more about yourself and listen actively
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <span className="font-medium">Mutual Support:</span> Be there for each other during both good and difficult times
                </div>
              </div>
            </div>
          </div>

          <TypographyH3>Being a Good Friend</TypographyH3>
          
          <TypographyP>
            Building a support network isn't just about what others can do for you—it's about mutual care and support:
          </TypographyP>

          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>Listen actively:</strong> Give your full attention when someone is sharing with you</li>
            <li><strong>Show up consistently:</strong> Be reliable and follow through on commitments</li>
            <li><strong>Offer support:</strong> Check in during stressful times like finals or personal challenges</li>
            <li><strong>Celebrate successes:</strong> Share in joy and accomplishments, not just difficulties</li>
            <li><strong>Respect boundaries:</strong> Understand that everyone has different comfort levels with sharing</li>
            <li><strong>Be yourself:</strong> Authentic connections are stronger than trying to be someone you're not</li>
          </ul>

          <TypographyH2>Overcoming Common Barriers</TypographyH2>

          <TypographyH3>Social Anxiety</TypographyH3>
          
          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Strategies for Anxious Socializers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Start Small:</h4>
                  <p className="text-muted-foreground">Begin with one-on-one interactions or small groups rather than large social events.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Use Structured Activities:</h4>
                  <p className="text-muted-foreground">Join clubs or activities where there's a clear purpose beyond just socializing.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Practice Self-Compassion:</h4>
                  <p className="text-muted-foreground">Remember that most people are focused on themselves, not judging you.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Prepare Conversation Topics:</h4>
                  <p className="text-muted-foreground">Having a few go-to questions can help when you feel stuck.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH3>Time Constraints</TypographyH3>
          
          <TypographyP>
            Busy academic schedules can make socializing feel impossible, but relationships actually help you manage stress better:
          </TypographyP>

          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>Combine activities:</strong> Study with friends, work out together, or meal prep as a group</li>
            <li><strong>Quality over quantity:</strong> A few deep connections are better than many superficial ones</li>
            <li><strong>Schedule social time:</strong> Put friend time on your calendar like any other important commitment</li>
            <li><strong>Use transition times:</strong> Walk together between classes or chat while doing laundry</li>
          </ul>

          <TypographyH3>Feeling Different or Misunderstood</TypographyH3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">If You're a First-Generation Student</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Look for first-gen student organizations</li>
                  <li>• Connect with academic advisors who understand your experience</li>
                  <li>• Find mentors who've navigated similar challenges</li>
                  <li>• Remember your unique perspective is valuable</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">If You're an International Student</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Join international student organizations</li>
                  <li>• Participate in cultural exchange programs</li>
                  <li>• Connect with students from your home country</li>
                  <li>• Build bridges with domestic students through shared interests</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <TypographyH2>Maintaining Your Support Network</TypographyH2>

          <TypographyH3>Staying Connected</TypographyH3>
          
          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Simple Ways to Maintain Relationships</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Regular Check-ins:</h4>
                  <p className="text-muted-foreground">Send a text asking how someone's week is going, especially during stressful times.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Shared Rituals:</h4>
                  <p className="text-muted-foreground">Weekly coffee dates, study sessions, or watching a show together.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Thoughtful Gestures:</h4>
                  <p className="text-muted-foreground">Remember important events, bring soup when someone's sick, share relevant memes.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Be Present:</h4>
                  <p className="text-muted-foreground">Put away phones during conversations and give your full attention.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH3>When Relationships Change</TypographyH3>
          
          <TypographyP>
            It's normal for friendships to evolve throughout college. People grow, interests change, and life circumstances shift:
          </TypographyP>

          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>Accept natural drift:</strong> Not every friendship will last forever, and that's okay</li>
            <li><strong>Address conflicts directly:</strong> Have honest conversations when issues arise</li>
            <li><strong>Make space for growth:</strong> Allow friends to change without taking it personally</li>
            <li><strong>Stay open to new connections:</strong> Continue building relationships throughout your college years</li>
          </ul>

          <TypographyH2>Professional Support Resources</TypographyH2>
          
          <TypographyP>
            While peer relationships are crucial, professional support should also be part of your network:
          </TypographyP>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Campus Resources</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Counseling and psychological services</li>
                  <li>• Academic advisors and success coaches</li>
                  <li>• Career services staff</li>
                  <li>• Student affairs professionals</li>
                  <li>• Peer support groups and programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Faculty and Staff</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Professors in your field of interest</li>
                  <li>• Research supervisors</li>
                  <li>• Campus ministry or spiritual advisors</li>
                  <li>• Residence hall staff</li>
                  <li>• Alumni mentors</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <TypographyH2>Red Flags in Relationships</TypographyH2>
          
          <Card className="my-6 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
            <CardHeader>
              <CardTitle className="text-lg text-orange-800 dark:text-orange-200">
                Signs of Unhealthy Relationships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
                <div>• Consistently drains your energy without giving back</div>
                <div>• Pressures you to engage in activities you're uncomfortable with</div>
                <div>• Dismisses your feelings or experiences</div>
                <div>• Creates drama or conflict regularly</div>
                <div>• Makes you feel worse about yourself</div>
                <div>• Violates your boundaries repeatedly</div>
                <div>• Isolates you from other friends or family</div>
              </div>
              <p className="text-sm text-orange-700 dark:text-orange-300 mt-4">
                <strong>Remember:</strong> It's okay to distance yourself from relationships that consistently harm your well-being.
              </p>
            </CardContent>
          </Card>

          <Card className="my-8 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <UsersIcon className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-lg">Remember</h4>
                </div>
                <p className="text-muted-foreground">
                  Building a support network takes time and effort, but it's one of the most important investments 
                  you can make in your mental health and college success. Start small, be patient with yourself, 
                  and remember that meaningful connections often develop gradually. You deserve to have people in 
                  your corner who care about your well-being and celebrate your growth.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div></section>

      {/* Related Articles */}
      <section className="py-16 bg-muted/30"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <TypographyH2 className="text-2xl mb-6">Related Articles</TypographyH2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Article</Badge>
                  <span className="text-xs text-muted-foreground">7 min</span>
                </div>
                <CardTitle className="text-lg">Healthy Communication</CardTitle>
                <CardDescription>
                  Communicating your needs and boundaries in relationships.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                  <Link href="/resources/articles/healthy-communication">
                    Read Article →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Toolkit</Badge>
                  <span className="text-xs text-muted-foreground">12 min</span>
                </div>
                <CardTitle className="text-lg">Dealing with Loneliness</CardTitle>
                <CardDescription>
                  Strategies for coping with loneliness and social isolation.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                  <Link href="/resources/articles/dealing-with-loneliness">
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
      </div></section>
    </div>
      <Footer />
    </>
  )
}
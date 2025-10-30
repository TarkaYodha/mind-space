"use client"

import { NavBar } from "@/components/layout/page-layout"
import { TypographyH1, TypographyH2, TypographyH3, TypographyP, TypographyLead } from "@/components/ui/typography"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, ClockIcon, BookOpenIcon, MessageCircleIcon, CheckCircleIcon, XCircleIcon } from "lucide-react"
import Link from "next/link"

export default function HealthyCommunicationPage() {
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
            <span className="text-foreground">Healthy Communication</span>
          </div>
        </div>
      </div></section>

      {/* Article Header */}
      <section className="py-16"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Badge variant="secondary">Article</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <ClockIcon className="h-4 w-4" />
                7 min read
              </div>
            </div>
            
            <TypographyH1 className="text-4xl sm:text-5xl">
              Healthy Communication
            </TypographyH1>
            
            <TypographyLead className="text-xl text-muted-foreground">
              Learn to communicate your needs and boundaries effectively in relationships for better mental health and stronger connections.
            </TypographyLead>
          </div>
        </div>
      </div></section>

      {/* Article Content */}
      <section className="py-16"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <TypographyH2>Why Communication Skills Matter</TypographyH2>
          
          <TypographyP>
            Healthy communication is the foundation of all strong relationships. In college, you'll navigate relationships 
            with roommates, friends, romantic partners, professors, and family members—often while dealing with stress, 
            new independence, and changing identities. Learning to communicate effectively can reduce conflict, strengthen 
            bonds, and protect your mental health.
          </TypographyP>

          <Card className="my-6 border-green-200 bg-green-50 dark:bg-green-950/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <MessageCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
                <CardTitle className="text-lg text-green-800 dark:text-green-200">
                  Benefits of Healthy Communication
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-800 dark:text-green-200">
                <div>
                  <ul className="space-y-1">
                    <li>• Reduced relationship stress and conflict</li>
                    <li>• Stronger, more authentic connections</li>
                    <li>• Better emotional regulation</li>
                    <li>• Increased self-advocacy skills</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-1">
                    <li>• Improved problem-solving abilities</li>
                    <li>• Greater sense of being understood</li>
                    <li>• Enhanced academic and career success</li>
                    <li>• Better mental health outcomes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH2>The Foundation: Active Listening</TypographyH2>
          
          <TypographyP>
            Before learning to express yourself better, it's crucial to become a better listener. Active listening 
            builds trust and understanding, making others more receptive to what you have to say.
          </TypographyP>

          <TypographyH3>Active Listening Techniques</TypographyH3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-lg">Do This</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Make eye contact and face the speaker</li>
                  <li>• Put away phones and distractions</li>
                  <li>• Use verbal encouragers ("mm-hmm," "I see")</li>
                  <li>• Ask clarifying questions</li>
                  <li>• Reflect back what you heard</li>
                  <li>• Validate their emotions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <XCircleIcon className="h-5 w-5 text-red-600" />
                  <CardTitle className="text-lg">Avoid This</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Planning your response while they speak</li>
                  <li>• Interrupting or finishing sentences</li>
                  <li>• Checking your phone or multitasking</li>
                  <li>• Judging or giving unsolicited advice</li>
                  <li>• Making it about your experience</li>
                  <li>• Dismissing their feelings</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <TypographyH3>Reflective Listening Examples</TypographyH3>
          
          <Card className="my-6">
            <CardContent className="pt-6">
              <div className="space-y-4 text-sm">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p><strong>Friend says:</strong> "I'm so stressed about this chemistry exam. I've been studying for hours and I still don't get it."</p>
                  <p className="mt-2"><strong>Reflective response:</strong> "It sounds like you're feeling really overwhelmed with chemistry, even though you've put in a lot of effort. That must be frustrating."</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p><strong>Roommate says:</strong> "You never clean up after yourself in the kitchen."</p>
                  <p className="mt-2"><strong>Reflective response:</strong> "It sounds like you're feeling frustrated about the kitchen situation. Can you help me understand what specific things are bothering you?"</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH2>Expressing Yourself Effectively</TypographyH2>

          <TypographyH3>Using "I" Statements</TypographyH3>
          
          <TypographyP>
            "I" statements help you express your feelings and needs without putting the other person on the defensive. 
            They focus on your experience rather than blaming or attacking.
          </TypographyP>

          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">"I" Statement Formula</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                <p className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                  "I feel [emotion] when [specific behavior] because [impact on you]. I would like [specific request]."
                </p>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <p><strong>Instead of:</strong> "You always interrupt me!"</p>
                    <p><strong>Try:</strong> "I feel unheard when I get interrupted because I can't finish expressing my thoughts. I would like to be able to complete my sentences."</p>
                  </div>
                  <div>
                    <p><strong>Instead of:</strong> "You're so messy!"</p>
                    <p><strong>Try:</strong> "I feel stressed when dishes pile up because it makes the space feel chaotic. I would like us to clean up within 24 hours of cooking."</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH3>Setting Boundaries</TypographyH3>
          
          <TypographyP>
            Boundaries are limits you set to protect your well-being. They're not walls to keep people out, but guidelines 
            for how you want to be treated.
          </TypographyP>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Types of Boundaries</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li><strong>Time:</strong> When you're available to hang out or study</li>
                  <li><strong>Emotional:</strong> What topics you're comfortable discussing</li>
                  <li><strong>Physical:</strong> Personal space and touch preferences</li>
                  <li><strong>Digital:</strong> Social media interaction and response times</li>
                  <li><strong>Academic:</strong> Study habits and collaboration limits</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Boundary Scripts</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>"I need some quiet time to recharge"</li>
                  <li>"I'm not comfortable discussing that topic"</li>
                  <li>"I can't lend money, but I'm here for emotional support"</li>
                  <li>"I need to focus on my studies tonight"</li>
                  <li>"I prefer to handle this conversation in person"</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <TypographyH2>Difficult Conversations</TypographyH2>

          <TypographyH3>Before the Conversation</TypographyH3>
          
          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Preparation Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">1. Clarify Your Goals:</h4>
                  <p className="text-muted-foreground">What do you hope to achieve? Better understanding? Behavior change? Problem-solving?</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Choose the Right Time and Place:</h4>
                  <p className="text-muted-foreground">Private setting, when both parties are calm and have time to talk.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Practice Your Opening:</h4>
                  <p className="text-muted-foreground">"I'd like to talk about something that's been on my mind. Is now a good time?"</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4. Manage Your Emotions:</h4>
                  <p className="text-muted-foreground">Use calming techniques if you're feeling very upset or angry.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH3>During the Conversation</TypographyH3>
          
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>Start with connection:</strong> Acknowledge the relationship's importance</li>
            <li><strong>Focus on one issue:</strong> Don't bring up multiple grievances at once</li>
            <li><strong>Use specific examples:</strong> Avoid generalizations like "always" or "never"</li>
            <li><strong>Take breaks if needed:</strong> "I need a few minutes to think about this"</li>
            <li><strong>Look for common ground:</strong> Find areas where you agree</li>
            <li><strong>Be open to feedback:</strong> Listen to their perspective without getting defensive</li>
          </ul>

          <TypographyH2>Communication in Different Relationships</TypographyH2>

          <TypographyH3>With Roommates</TypographyH3>
          
          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Common Issues and Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Cleanliness Standards:</h4>
                  <p className="text-muted-foreground">Create clear agreements about shared spaces and cleaning schedules.</p>
                  <p className="italic">"I'd like to talk about keeping our common areas clean. What standards work for both of us?"</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Noise and Study Time:</h4>
                  <p className="text-muted-foreground">Establish quiet hours and respect each other's study needs.</p>
                  <p className="italic">"I have a big exam tomorrow. Could we keep it quieter after 9 PM?"</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Guests and Social Life:</h4>
                  <p className="text-muted-foreground">Discuss expectations about overnight guests and parties.</p>
                  <p className="italic">"I'm planning to have some friends over this weekend. What works for you?"</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH3>With Professors and Academic Staff</TypographyH3>
          
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>Be proactive:</strong> Reach out early if you're struggling, don't wait until crisis point</li>
            <li><strong>Come prepared:</strong> Have specific questions and show you've tried to solve problems first</li>
            <li><strong>Be respectful of time:</strong> Make appointments and be punctual</li>
            <li><strong>Follow up appropriately:</strong> Send thank-you emails and update them on progress</li>
            <li><strong>Advocate for yourself:</strong> Ask for clarification, extensions, or accommodations when needed</li>
          </ul>

          <TypographyH3>With Family</TypographyH3>
          
          <TypographyP>
            College is a time of changing family dynamics. You're becoming more independent while still maintaining 
            important family connections.
          </TypographyP>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">Common Family Communication Challenges:</h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Academic pressure:</strong> "I appreciate that you care about my grades. I'm working hard, and I'd like your support rather than pressure."
              </div>
              <div>
                <strong>Major/career choices:</strong> "I understand you have concerns about my major. Can we talk about what's driving my interest in this field?"
              </div>
              <div>
                <strong>Independence:</strong> "I'm learning to make my own decisions, but I still value your input. Can we find a balance?"
              </div>
            </div>
          </div>

          <TypographyH2>When Communication Breaks Down</TypographyH2>

          <TypographyH3>Repairing Relationships</TypographyH3>
          
          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Steps to Rebuild</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">1. Take Responsibility:</h4>
                  <p className="text-muted-foreground">Acknowledge your part in the conflict without making excuses.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Genuine Apology:</h4>
                  <p className="text-muted-foreground">"I'm sorry for [specific behavior]. I understand it affected you by [impact]."</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Make Amends:</h4>
                  <p className="text-muted-foreground">Ask what you can do to repair the damage and rebuild trust.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4. Change Behavior:</h4>
                  <p className="text-muted-foreground">Follow through on commitments to do things differently.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH3>Knowing When to Step Back</TypographyH3>
          
          <TypographyP>
            Sometimes, despite your best efforts, communication doesn't improve relationships. It's important to recognize 
            when to step back for your own well-being:
          </TypographyP>

          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>The other person consistently refuses to engage in healthy communication</li>
            <li>Conversations frequently become hostile or abusive</li>
            <li>Your mental health is being significantly impacted</li>
            <li>There's a pattern of disrespecting your boundaries</li>
            <li>The relationship is consistently one-sided</li>
          </ul>

          <TypographyH2>Building Communication Skills</TypographyH2>

          <TypographyH3>Practice Opportunities</TypographyH3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Low-Stakes Practice</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Order coffee and make small talk</li>
                  <li>• Participate in class discussions</li>
                  <li>• Join conversation-based clubs</li>
                  <li>• Practice with supportive friends</li>
                  <li>• Role-play difficult scenarios</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Campus Resources</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Communication workshops</li>
                  <li>• Counseling services for relationship skills</li>
                  <li>• Peer mediation programs</li>
                  <li>• Leadership development programs</li>
                  <li>• Public speaking groups (Toastmasters)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="my-8 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <MessageCircleIcon className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-lg">Remember</h4>
                </div>
                <p className="text-muted-foreground">
                  Healthy communication is a skill that improves with practice. Be patient with yourself as you learn 
                  to express your needs and listen to others more effectively. Good communication takes effort from 
                  both parties, and you can only control your part of the conversation. Focus on being authentic, 
                  respectful, and open to growth.
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
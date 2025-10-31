"use client"

import { NavBar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { TypographyH1, TypographyH2, TypographyH3, TypographyP, TypographyLead } from "@/components/ui/typography"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, ClockIcon, BookOpenIcon, CheckCircleIcon } from "lucide-react"
import Link from "next/link"

export default function StressTimeManagementPage() {
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
            <span>Understanding Mental Health</span>
            <span>/</span>
            <span className="text-foreground">Stress and Time Management</span>
          </div>
        </div>
      </div></section>

      {/* Article Header */}
      <section className="py-16"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Badge variant="secondary">Toolkit</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <ClockIcon className="h-4 w-4" />
                15 min read
              </div>
            </div>
            
            <TypographyH1 className="text-4xl sm:text-5xl">
              Stress and Time Management
            </TypographyH1>
            
            <TypographyLead className="text-xl text-muted-foreground">
              Healthy strategies for managing stress and balancing responsibilities in college life.
            </TypographyLead>
          </div>
        </div>
      </div></section>

      {/* Article Content */}
      <section className="py-16"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <TypographyH2>Understanding Stress in College</TypographyH2>
          
          <TypographyP>
            College stress is nearly universal—studies show that 85% of students feel overwhelmed by their 
            responsibilities. While some stress can be motivating, chronic stress can negatively impact your 
            health, relationships, and academic performance. Learning effective stress and time management 
            strategies is crucial for college success and long-term well-being.
          </TypographyP>

          <TypographyH3>Common Sources of College Stress</TypographyH3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Academic Stressors</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Heavy course loads and deadlines</li>
                  <li>• Exam preparation and performance pressure</li>
                  <li>• Choosing majors and career paths</li>
                  <li>• Competition with peers</li>
                  <li>• Research projects and presentations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Life Stressors</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Financial pressures and student loans</li>
                  <li>• Social relationships and dating</li>
                  <li>• Living independently for the first time</li>
                  <li>• Work-study balance</li>
                  <li>• Family expectations and obligations</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <TypographyH2>Effective Time Management Strategies</TypographyH2>

          <TypographyH3>1. Planning and Organization</TypographyH3>
          
          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Essential Planning Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Academic Calendar</h4>
                  <p className="text-sm text-muted-foreground">
                    Mark all important dates: exams, project deadlines, registration periods, and breaks.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Weekly Schedule</h4>
                  <p className="text-sm text-muted-foreground">
                    Include classes, study time, work, meals, exercise, and social activities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Daily To-Do Lists</h4>
                  <p className="text-sm text-muted-foreground">
                    Prioritize tasks using methods like the Eisenhower Matrix (urgent vs. important).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH3>2. The Pomodoro Technique</TypographyH3>
          
          <TypographyP>
            This time management method can help you maintain focus and prevent burnout:
          </TypographyP>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">How to Use the Pomodoro Technique:</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <span className="font-medium">Step 1:</span> Choose a task to work on
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <span className="font-medium">Step 2:</span> Set a timer for 25 minutes
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <span className="font-medium">Step 3:</span> Work on the task until the timer rings
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <span className="font-medium">Step 4:</span> Take a 5-minute break
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <span className="font-medium">Step 5:</span> After 4 pomodoros, take a longer 15-30 minute break
                </div>
              </div>
            </div>
          </div>

          <TypographyH3>3. Time Blocking</TypographyH3>
          
          <TypographyP>
            Assign specific time blocks to different activities throughout your day:
          </TypographyP>

          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>Study blocks:</strong> Schedule dedicated study time for each subject</li>
            <li><strong>Buffer time:</strong> Include extra time between activities for transitions</li>
            <li><strong>Self-care blocks:</strong> Schedule time for meals, exercise, and relaxation</li>
            <li><strong>Social time:</strong> Plan time for friends and social activities</li>
            <li><strong>Flex time:</strong> Keep some unscheduled time for unexpected tasks</li>
          </ul>

          <TypographyH2>Stress Management Techniques</TypographyH2>

          <TypographyH3>1. Physical Stress Relief</TypographyH3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Exercise and Movement</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• 20-30 minutes of daily physical activity</li>
                  <li>• Campus gym or fitness classes</li>
                  <li>• Walking between classes</li>
                  <li>• Yoga or stretching routines</li>
                  <li>• Intramural sports</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Relaxation Techniques</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Deep breathing exercises</li>
                  <li>• Progressive muscle relaxation</li>
                  <li>• Meditation and mindfulness</li>
                  <li>• Listening to calming music</li>
                  <li>• Taking warm baths or showers</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <TypographyH3>2. Mental and Emotional Strategies</TypographyH3>
          
          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Cognitive Strategies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Reframe Negative Thoughts</h4>
                  <p className="text-muted-foreground">
                    Instead of "I can't handle this," try "This is challenging, but I can break it down into manageable steps."
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Practice Gratitude</h4>
                  <p className="text-muted-foreground">
                    Keep a daily gratitude journal to focus on positive aspects of your life.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Accept What You Can't Control</h4>
                  <p className="text-muted-foreground">
                    Focus your energy on what you can influence rather than worrying about external factors.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH3>3. Lifestyle Factors</TypographyH3>
          
          <TypographyP>
            Your daily habits significantly impact your stress levels:
          </TypographyP>

          <div className="space-y-4 my-6">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Sleep Hygiene</h4>
              <p className="text-sm text-muted-foreground">
                Aim for 7-9 hours per night. Establish a consistent bedtime routine and limit screen time before bed.
              </p>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Nutrition</h4>
              <p className="text-sm text-muted-foreground">
                Eat regular, balanced meals. Limit caffeine and sugar, which can increase anxiety and energy crashes.
              </p>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Social Support</h4>
              <p className="text-sm text-muted-foreground">
                Maintain connections with friends and family. Don't be afraid to ask for help when you need it.
              </p>
            </div>
          </div>

          <TypographyH2>Creating Work-Life Balance</TypographyH2>

          <TypographyH3>Setting Boundaries</TypographyH3>
          
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>Study boundaries:</strong> Have a designated study space and specific study hours</li>
            <li><strong>Technology boundaries:</strong> Set limits on social media and entertainment</li>
            <li><strong>Social boundaries:</strong> Learn to say no to activities that don't align with your priorities</li>
            <li><strong>Academic boundaries:</strong> Know when you've studied enough and when to take breaks</li>
          </ul>

          <TypographyH3>The Importance of Downtime</TypographyH3>
          
          <TypographyP>
            Regular downtime isn't lazy—it's essential for mental health and academic performance:
          </TypographyP>

          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Healthy Downtime Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Creative Activities:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Drawing, painting, or crafting</li>
                    <li>• Playing musical instruments</li>
                    <li>• Creative writing or journaling</li>
                    <li>• Photography</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Social Activities:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Coffee with friends</li>
                    <li>• Game nights or movie nights</li>
                    <li>• Campus events and activities</li>
                    <li>• Volunteer work</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH2>Emergency Stress Management</TypographyH2>
          
          <TypographyP>
            When you're feeling overwhelmed, try these immediate relief techniques:
          </TypographyP>

          <Card className="my-6 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
            <CardHeader>
              <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
                Quick Stress Relief (5 minutes or less)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-blue-800 dark:text-blue-200">
                <div>
                  <strong>Box Breathing:</strong> Inhale for 4, hold for 4, exhale for 4, hold for 4. Repeat 4 times.
                </div>
                <div>
                  <strong>5-4-3-2-1 Grounding:</strong> Name 5 things you see, 4 you hear, 3 you feel, 2 you smell, 1 you taste.
                </div>
                <div>
                  <strong>Progressive Relaxation:</strong> Tense and release each muscle group from toes to head.
                </div>
                <div>
                  <strong>Quick Walk:</strong> Take a 5-minute walk outside or around the building.
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH3>When to Seek Additional Support</TypographyH3>
          
          <TypographyP>
            Consider reaching out for professional help if:
          </TypographyP>

          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>Stress is significantly impacting your academic performance</li>
            <li>You're experiencing physical symptoms like chronic headaches or stomach problems</li>
            <li>You're using substances to cope with stress</li>
            <li>You feel overwhelmed most of the time despite trying various strategies</li>
            <li>Stress is affecting your relationships or daily functioning</li>
          </ul>

          <Card className="my-8 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h4 className="font-semibold text-lg">Remember</h4>
                <p className="text-muted-foreground">
                  Managing stress and time effectively is a skill that improves with practice. Be patient with 
                  yourself as you develop these abilities. What works for others might not work for you—experiment 
                  to find your optimal strategies. The goal isn't to eliminate all stress, but to manage it in 
                  healthy ways that support your success and well-being.
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
                  <Badge variant="secondary">Study Guide</Badge>
                  <span className="text-xs text-muted-foreground">15 min</span>
                </div>
                <CardTitle className="text-lg">Study Stress Management</CardTitle>
                <CardDescription>
                  Healthy study habits that reduce stress and improve performance.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                  <Link href="/resources/articles/study-stress-management">
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
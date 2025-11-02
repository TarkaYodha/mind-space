'use client'

import {
  AlertTriangleIcon,
  ArrowLeftIcon,
  BookOpenIcon,
  CheckCircleIcon,
  ClockIcon,
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

export default function StudyStressManagementPage() {
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
                <span>Academic & Study Resources</span>
                <span>/</span>
                <span className="text-foreground">Study Stress Management</span>
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
                    15 min read
                  </div>
                </div>

                <TypographyH1 className="text-4xl sm:text-5xl">
                  Study Stress Management
                </TypographyH1>

                <TypographyLead className="text-xl text-muted-foreground">
                  Evidence-based strategies for managing academic stress, improving study
                  effectiveness, and maintaining well-being during demanding periods.
                </TypographyLead>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <TypographyH2>Understanding Study Stress</TypographyH2>

              <TypographyP>
                Study stress is the psychological and physical tension that arises from academic
                demands, deadlines, and performance pressure. While some stress can motivate
                learning, chronic study stress can impair cognitive function, memory consolidation,
                and overall academic performance. Understanding how to manage this stress is
                essential for both academic success and mental health.
              </TypographyP>

              <Card className="my-6 border-amber-200 bg-amber-50 dark:bg-amber-950/20">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertTriangleIcon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    <CardTitle className="text-lg text-amber-800 dark:text-amber-200">
                      The Stress-Performance Connection
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <TypographyP className="text-sm text-amber-800 dark:text-amber-200 mb-0">
                    Research shows that moderate stress can enhance focus and memory formation, but
                    excessive stress floods the brain with cortisol, impairing the hippocampus
                    (memory center) and prefrontal cortex (executive function). The key is finding
                    your optimal stress level for peak performance.
                  </TypographyP>
                </CardContent>
              </Card>

              <TypographyH2>Common Sources of Study Stress</TypographyH2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Academic Pressures</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Heavy course loads and competing deadlines</li>
                      <li>• Difficult subject matter or new learning challenges</li>
                      <li>• High performance expectations (self-imposed or external)</li>
                      <li>• Fear of failure or perfectionist tendencies</li>
                      <li>• Imposter syndrome and comparison to peers</li>
                      <li>• Major exams, presentations, or project deadlines</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Environmental & Lifestyle Factors</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Poor study environments or constant distractions</li>
                      <li>• Irregular sleep schedules and sleep deprivation</li>
                      <li>• Inadequate nutrition or excessive caffeine</li>
                      <li>• Financial pressures and work-study balance</li>
                      <li>• Social isolation or relationship conflicts</li>
                      <li>• Technology overload and information overwhelm</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <TypographyH2>Recognizing Study Stress Symptoms</TypographyH2>

              <TypographyP>
                Early recognition of stress symptoms allows for proactive intervention before stress
                becomes overwhelming:
              </TypographyP>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Physical Symptoms</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-1">
                      <li>• Headaches or tension</li>
                      <li>• Muscle stiffness</li>
                      <li>• Fatigue or exhaustion</li>
                      <li>• Sleep disturbances</li>
                      <li>• Appetite changes</li>
                      <li>• Digestive issues</li>
                      <li>• Frequent illness</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Cognitive Symptoms</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-1">
                      <li>• Difficulty concentrating</li>
                      <li>• Memory problems</li>
                      <li>• Racing thoughts</li>
                      <li>• Indecisiveness</li>
                      <li>• Negative self-talk</li>
                      <li>• Mental fog</li>
                      <li>• Catastrophic thinking</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Behavioral Symptoms</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-1">
                      <li>• Procrastination</li>
                      <li>• Social withdrawal</li>
                      <li>• Increased substance use</li>
                      <li>• Irritability or mood swings</li>
                      <li>• Nervous habits</li>
                      <li>• Avoiding responsibilities</li>
                      <li>• All-or-nothing behaviors</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <TypographyH2>Effective Study Stress Management Strategies</TypographyH2>

              <TypographyH3>Time Management and Planning</TypographyH3>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="text-lg">The POWER Planning Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs">
                          P
                        </span>
                        Prioritize Tasks
                      </h4>
                      <p className="text-muted-foreground">
                        Use the Eisenhower Matrix: Urgent/Important, Important/Not Urgent,
                        Urgent/Not Important, Neither
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs">
                          O
                        </span>
                        Organize Your Schedule
                      </h4>
                      <p className="text-muted-foreground">
                        Block time for studying, breaks, meals, and personal care. Include buffer
                        time for unexpected challenges.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs">
                          W
                        </span>
                        Work in Focused Blocks
                      </h4>
                      <p className="text-muted-foreground">
                        Use techniques like Pomodoro (25 min work, 5 min break) to maintain
                        concentration and prevent burnout.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs">
                          E
                        </span>
                        Evaluate Progress Regularly
                      </h4>
                      <p className="text-muted-foreground">
                        Weekly reviews help adjust your approach and celebrate accomplishments.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs">
                          R
                        </span>
                        Rest and Recharge
                      </h4>
                      <p className="text-muted-foreground">
                        Schedule adequate sleep, exercise, and relaxation. Recovery time is
                        productive time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <TypographyH3>Study Environment Optimization</TypographyH3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Physical Environment</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>
                        <strong>Lighting:</strong> Natural light when possible, consistent bright
                        lighting for evening study
                      </li>
                      <li>
                        <strong>Temperature:</strong> Slightly cool (68-72°F) to promote alertness
                      </li>
                      <li>
                        <strong>Seating:</strong> Comfortable but not too relaxed; good posture
                        support
                      </li>
                      <li>
                        <strong>Organization:</strong> Clean, clutter-free space with necessary
                        materials accessible
                      </li>
                      <li>
                        <strong>Noise:</strong> Find your optimal level - silence, white noise, or
                        instrumental music
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Digital Environment</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>
                        <strong>Device management:</strong> Use website blockers during study
                        sessions
                      </li>
                      <li>
                        <strong>Notification control:</strong> Turn off non-essential notifications
                      </li>
                      <li>
                        <strong>App organization:</strong> Remove distracting apps from immediate
                        access
                      </li>
                      <li>
                        <strong>Study apps:</strong> Use tools like Forest, Cold Turkey, or Freedom
                      </li>
                      <li>
                        <strong>Digital notes:</strong> Organize files clearly; backup regularly
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <TypographyH2>Stress-Reducing Study Techniques</TypographyH2>

              <TypographyH3>Active Learning Strategies</TypographyH3>

              <TypographyP>
                Active learning not only improves retention but also reduces stress by making study
                time more effective:
              </TypographyP>

              <div className="bg-muted/50 p-6 rounded-lg my-6">
                <h4 className="font-semibold mb-4">The SQ3R Method for Reading:</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Survey:</strong> Skim headings, summaries, and key points before reading
                  </div>
                  <div>
                    <strong>Question:</strong> Turn headings into questions you want to answer
                  </div>
                  <div>
                    <strong>Read:</strong> Read actively, looking for answers to your questions
                  </div>
                  <div>
                    <strong>Recite:</strong> Summarize what you've learned in your own words
                  </div>
                  <div>
                    <strong>Review:</strong> Go back over material to reinforce learning
                  </div>
                </div>
              </div>

              <TypographyH3>Memory and Retention Techniques</TypographyH3>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="text-lg">Evidence-Based Memory Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Spaced Repetition:</h4>
                      <p className="text-muted-foreground">
                        Review material at increasing intervals (1 day, 3 days, 1 week, 2 weeks) for
                        long-term retention.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Interleaving:</h4>
                      <p className="text-muted-foreground">
                        Mix different types of problems or subjects within study sessions to improve
                        pattern recognition.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Elaborative Interrogation:</h4>
                      <p className="text-muted-foreground">
                        Ask "why" and "how" questions about the material to deepen understanding.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Dual Coding:</h4>
                      <p className="text-muted-foreground">
                        Combine visual and verbal information through diagrams, mind maps, and
                        mnemonics.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <TypographyH2>Managing Test Anxiety</TypographyH2>

              <TypographyH3>Pre-Test Preparation</TypographyH3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Study Preparation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Create and follow a study schedule leading up to exams</li>
                      <li>• Practice with old exams or practice tests</li>
                      <li>• Form study groups for different perspectives</li>
                      <li>• Clarify expectations with instructors</li>
                      <li>• Organize notes and materials well in advance</li>
                      <li>• Identify and focus on high-yield topics</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Mental Preparation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Visualize successful test performance</li>
                      <li>• Practice relaxation techniques</li>
                      <li>• Challenge negative thought patterns</li>
                      <li>• Plan reward for completing the exam</li>
                      <li>• Get adequate sleep before test day</li>
                      <li>• Prepare test-day logistics in advance</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <TypographyH3>During-Test Strategies</TypographyH3>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="text-lg">Anxiety Management During Exams</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Immediate Calming Techniques:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Deep breathing: 4 counts in, hold 4, out 6</li>
                        <li>• Progressive muscle relaxation: tense and release muscle groups</li>
                        <li>• Positive self-talk: "I am prepared," "I can handle this"</li>
                        <li>• Grounding: 5 things you can see, 4 you can hear, 3 you can touch</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Strategic Test-Taking:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Read all directions carefully before beginning</li>
                        <li>• Start with easier questions to build confidence</li>
                        <li>• Budget your time and stick to it</li>
                        <li>• If stuck, move on and return later</li>
                        <li>• Use elimination strategies for multiple choice</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <TypographyH2>Healthy Study Habits</TypographyH2>

              <TypographyH3>Physical Health and Study Performance</TypographyH3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Sleep and Study</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>
                        <strong>Sleep debt impairs:</strong> Memory consolidation, attention,
                        decision-making
                      </li>
                      <li>
                        <strong>Optimal sleep:</strong> 7-9 hours per night for most college
                        students
                      </li>
                      <li>
                        <strong>Sleep hygiene:</strong> Consistent bedtime, cool dark room, no
                        screens 1 hour before bed
                      </li>
                      <li>
                        <strong>Power naps:</strong> 10-20 minutes can restore alertness without
                        grogginess
                      </li>
                      <li>
                        <strong>Sleep before exams:</strong> Better than pulling all-nighters
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Nutrition for Brain Function</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>
                        <strong>Regular meals:</strong> Prevent blood sugar crashes that impair
                        concentration
                      </li>
                      <li>
                        <strong>Brain foods:</strong> Omega-3s, berries, nuts, leafy greens, whole
                        grains
                      </li>
                      <li>
                        <strong>Hydration:</strong> Even mild dehydration affects cognitive
                        performance
                      </li>
                      <li>
                        <strong>Limit caffeine:</strong> 1-2 cups coffee max; avoid late in day
                      </li>
                      <li>
                        <strong>Study snacks:</strong> Protein + complex carbs for sustained energy
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <TypographyH3>Exercise and Mental Health</TypographyH3>

              <Card className="my-6 border-green-200 bg-green-50 dark:bg-green-950/20">
                <CardHeader>
                  <CardTitle className="text-lg text-green-800 dark:text-green-200">
                    Exercise as Study Medicine
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-green-800 dark:text-green-200">
                    <p>
                      <strong>Immediate benefits:</strong> 20 minutes of moderate exercise increases
                      focus and mood for up to 2 hours
                    </p>
                    <p>
                      <strong>Long-term benefits:</strong> Regular exercise improves memory, reduces
                      anxiety, and increases stress resilience
                    </p>
                    <p>
                      <strong>Study integration:</strong> Walking meetings, standing desk, exercise
                      breaks between study sessions
                    </p>
                    <p>
                      <strong>Stress relief:</strong> Physical activity is one of the most effective
                      stress reduction strategies
                    </p>
                  </div>
                </CardContent>
              </Card>

              <TypographyH2>Building Study Resilience</TypographyH2>

              <TypographyH3>Developing a Growth Mindset</TypographyH3>

              <div className="bg-muted/50 p-6 rounded-lg my-6">
                <h4 className="font-semibold mb-4">Fixed vs. Growth Mindset in Studying:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                      Fixed Mindset (Increases Stress):
                    </h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• "I'm just not good at math"</li>
                      <li>• "Smart people don't need to study"</li>
                      <li>• "If I have to work hard, I must be stupid"</li>
                      <li>• "Failure means I'm not capable"</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                      Growth Mindset (Reduces Stress):
                    </h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• "I can improve my math skills with practice"</li>
                      <li>• "Effort leads to mastery"</li>
                      <li>• "Challenges help me grow"</li>
                      <li>• "Mistakes are learning opportunities"</li>
                    </ul>
                  </div>
                </div>
              </div>

              <TypographyH3>Self-Compassion in Academic Struggles</TypographyH3>

              <TypographyP>
                Treating yourself with kindness during difficult academic periods reduces stress and
                improves performance:
              </TypographyP>

              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>Self-kindness:</strong> Speak to yourself as you would a good friend
                  facing the same challenge
                </li>
                <li>
                  <strong>Common humanity:</strong> Remember that struggling with difficult material
                  is part of the learning process
                </li>
                <li>
                  <strong>Mindfulness:</strong> Acknowledge difficult emotions without being
                  overwhelmed by them
                </li>
                <li>
                  <strong>Perspective:</strong> View setbacks as temporary and specific, not
                  permanent and global
                </li>
              </ul>

              <TypographyH2>When to Seek Additional Support</TypographyH2>

              <Card className="my-6 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-800 dark:text-orange-200">
                    Signs You Need Extra Help
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
                    <div>
                      • Study stress significantly impacts daily functioning or relationships
                    </div>
                    <div>• Physical symptoms persist despite stress management efforts</div>
                    <div>• Academic performance declines despite increased effort</div>
                    <div>• Using substances to cope with study pressure</div>
                    <div>• Thoughts of self-harm or feeling hopeless about academic success</div>
                    <div>• Sleep, appetite, or mood changes lasting more than two weeks</div>
                    <div>• Panic attacks or severe anxiety around academic tasks</div>
                  </div>
                </CardContent>
              </Card>

              <TypographyH2>Campus and Professional Resources</TypographyH2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Academic Support</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Tutoring centers and peer tutoring</li>
                      <li>• Study skills workshops</li>
                      <li>• Writing centers and research help</li>
                      <li>• Academic advisors and success coaches</li>
                      <li>• Professor office hours</li>
                      <li>• Study groups and supplemental instruction</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Mental Health Support</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li>• Counseling and psychological services</li>
                      <li>• Stress management workshops</li>
                      <li>• Support groups for academic anxiety</li>
                      <li>• Disability services for accommodations</li>
                      <li>• Campus recreation and wellness programs</li>
                      <li>• Crisis intervention services</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="my-8 bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-lg">Remember</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Effective study stress management is about working smarter, not just harder.
                      The goal isn't to eliminate all stress—some stress motivates learning.
                      Instead, focus on building sustainable habits that support both your academic
                      success and overall well-being. Small, consistent changes in how you approach
                      studying can lead to significant improvements in both performance and stress
                      levels.
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
                      <span className="text-xs text-muted-foreground">8 min</span>
                    </div>
                    <CardTitle className="text-lg">Managing Stress and Overwhelm</CardTitle>
                    <CardDescription>
                      Comprehensive strategies for managing stress in all areas of college life.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                      <Link href="/resources/articles/managing-stress-and-overwhelm">
                        Read Article →
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Article</Badge>
                      <span className="text-xs text-muted-foreground">6 min</span>
                    </div>
                    <CardTitle className="text-lg">Anxiety Management for Students</CardTitle>
                    <CardDescription>
                      Understanding and managing anxiety in academic and social situations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                      <Link href="/resources/articles/anxiety-management-for-students">
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

"use client"

import { NavBar } from "@/components/layout/page-layout"
import { TypographyH1, TypographyH2, TypographyH3, TypographyP, TypographyLead } from "@/components/ui/typography"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, ClockIcon, BookOpenIcon, ScaleIcon, CheckCircleIcon } from "lucide-react"
import Link from "next/link"

export default function WorkLifeBalanceCollegePage() {
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
            <span>Academic & Study Resources</span>
            <span>/</span>
            <span className="text-foreground">Work-Life Balance in College</span>
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
                13 min read
              </div>
            </div>
            
            <TypographyH1 className="text-4xl sm:text-5xl">
              Work-Life Balance in College
            </TypographyH1>
            
            <TypographyLead className="text-xl text-muted-foreground">
              Strategies for managing academics, work, social life, and personal well-being while maintaining mental health and achieving your goals.
            </TypographyLead>
          </div>
        </div>
      </div></section>

      {/* Article Content */}
      <section className="py-16"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <TypographyH2>Understanding Work-Life Balance in College</TypographyH2>
          
          <TypographyP>
            Work-life balance in college looks different from traditional adult work-life balance. College students 
            often juggle multiple domains: academics, part-time or full-time work, social relationships, family 
            obligations, personal health, and future planning. The challenge is integrating these domains 
            harmoniously rather than seeing them as competing forces.
          </TypographyP>

          <Card className="my-6 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <ScaleIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
                  Rethinking "Balance"
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <TypographyP className="text-sm text-blue-800 dark:text-blue-200 mb-0">
                Work-life balance doesn't mean equal time in all areas. It means intentional allocation of time 
                and energy based on your current priorities, values, and goals. Some seasons of college may 
                require more focus on academics, others on work or relationships. The key is conscious choice 
                rather than reactive overwhelm.
              </TypographyP>
            </CardContent>
          </Card>

          <TypographyH2>The College Life Domains</TypographyH2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Academic Domain</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Class attendance and active participation</li>
                  <li>• Studying, homework, and project completion</li>
                  <li>• Test and exam preparation</li>
                  <li>• Research, internships, and practical experience</li>
                  <li>• Academic relationships with professors and peers</li>
                  <li>• Planning for graduation and career transition</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Work & Financial Domain</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Part-time or full-time employment</li>
                  <li>• Work-study positions on campus</li>
                  <li>• Internships and professional development</li>
                  <li>• Financial planning and budgeting</li>
                  <li>• Scholarship and financial aid management</li>
                  <li>• Building professional networks</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Social & Relationship Domain</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Building and maintaining friendships</li>
                  <li>• Romantic relationships and dating</li>
                  <li>• Family relationships and obligations</li>
                  <li>• Community involvement and service</li>
                  <li>• Campus organizations and activities</li>
                  <li>• Networking and professional relationships</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Personal Well-being Domain</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Physical health, exercise, and nutrition</li>
                  <li>• Mental health and stress management</li>
                  <li>• Sleep and rest</li>
                  <li>• Hobbies and personal interests</li>
                  <li>• Spiritual or philosophical development</li>
                  <li>• Personal reflection and growth</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <TypographyH2>Common Work-Life Balance Challenges</TypographyH2>

          <TypographyH3>Time and Energy Constraints</TypographyH3>
          
          <Card className="my-6 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
            <CardHeader>
              <CardTitle className="text-lg text-orange-800 dark:text-orange-200">
                The College Time Crunch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-orange-800 dark:text-orange-200">
                <p><strong>Academic overload:</strong> Heavy course loads, especially in demanding majors, can consume most available time</p>
                <p><strong>Financial pressures:</strong> Need to work many hours to pay for school and living expenses</p>
                <p><strong>Social expectations:</strong> Pressure to maintain active social life and participate in campus activities</p>
                <p><strong>Future anxiety:</strong> Time spent worrying about career prospects and post-graduation plans</p>
              </div>
            </CardContent>
          </Card>

          <TypographyH3>Role Conflicts and Competing Priorities</TypographyH3>
          
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">Common Conflict Scenarios:</h4>
            <div className="space-y-3 text-sm">
              <div><strong>Work vs. Study:</strong> Employer schedules conflicting with class times or study needs</div>
              <div><strong>Family vs. College:</strong> Family expectations or emergencies interfering with academic commitments</div>
              <div><strong>Social vs. Academic:</strong> Friends' social plans conflicting with study time or sleep schedules</div>
              <div><strong>Present vs. Future:</strong> Immediate financial needs versus long-term career preparation</div>
              <div><strong>Individual vs. Relationship:</strong> Personal goals conflicting with partner or family expectations</div>
            </div>
          </div>

          <TypographyH2>Strategies for Achieving Balance</TypographyH2>

          <TypographyH3>Values-Based Priority Setting</TypographyH3>
          
          <TypographyP>
            Effective work-life balance starts with understanding your core values and using them to guide decisions:
          </TypographyP>

          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Values Clarification Exercise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Step 1: Identify Your Top 5 Values</h4>
                  <p className="text-muted-foreground">Examples: Achievement, relationships, creativity, security, adventure, service, learning, autonomy</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Step 2: Rate Current Time Allocation</h4>
                  <p className="text-muted-foreground">How much time do you currently spend on activities that align with each value? (1-10 scale)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Step 3: Identify Misalignments</h4>
                  <p className="text-muted-foreground">Where are your values and time allocation out of sync?</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Step 4: Make Adjustments</h4>
                  <p className="text-muted-foreground">What changes would better align your time with your values?</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH3>Time Management and Scheduling</TypographyH3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Weekly Planning System</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li><strong>Sunday review:</strong> Plan the upcoming week based on priorities</li>
                  <li><strong>Time blocking:</strong> Assign specific time slots to different activities</li>
                  <li><strong>Buffer time:</strong> Include 15-30 minute buffers between activities</li>
                  <li><strong>Energy mapping:</strong> Schedule demanding tasks during high-energy times</li>
                  <li><strong>Flexibility:</strong> Keep 20% of schedule open for unexpected needs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Daily Balance Practices</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li><strong>Morning routine:</strong> 30 minutes for personal well-being</li>
                  <li><strong>Transition rituals:</strong> 5-minute breaks between activities</li>
                  <li><strong>Lunch breaks:</strong> Step away from work/study for proper meals</li>
                  <li><strong>Evening wind-down:</strong> 30 minutes before bed for relaxation</li>
                  <li><strong>Weekend recharge:</strong> At least one full day for non-academic activities</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <TypographyH2>Managing Academic and Work Integration</TypographyH2>

          <TypographyH3>Strategic Work Choices</TypographyH3>
          
          <TypographyP>
            When work is necessary, making strategic choices can minimize negative impacts on other life domains:
          </TypographyP>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Campus-Based Work</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="space-y-3">
                  <p><strong>Advantages:</strong></p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Flexible scheduling around classes</li>
                    <li>• Understanding of academic priorities</li>
                    <li>• On-campus location saves commute time</li>
                    <li>• Opportunities to study during slow periods</li>
                    <li>• Professional development relevant to career goals</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Career-Relevant Work</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="space-y-3">
                  <p><strong>Benefits:</strong></p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Builds resume and professional network</li>
                    <li>• Practical application of academic learning</li>
                    <li>• Potential for future full-time opportunities</li>
                    <li>• Higher pay often justifies fewer hours</li>
                    <li>• Develops skills needed for career success</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <TypographyH3>Setting Boundaries at Work</TypographyH3>
          
          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Professional Boundary Setting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Communicate Your Student Status:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Be upfront about your academic schedule during hiring</li>
                    <li>• Provide your class schedule and exam dates</li>
                    <li>• Request advance notice for schedule changes</li>
                    <li>• Negotiate time off for major academic commitments</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Manage Work Expectations:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Clarify your availability and limitations</li>
                    <li>• Don't take on extra shifts during exam periods</li>
                    <li>• Learn to say no to excessive overtime requests</li>
                    <li>• Suggest alternative solutions when you can't work</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH2>Maintaining Relationships and Social Life</TypographyH2>

          <TypographyH3>Quality Over Quantity in Relationships</TypographyH3>
          
          <TypographyP>
            When time is limited, focus on deepening meaningful relationships rather than trying to maintain 
            superficial connections with everyone:
          </TypographyP>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">Relationship Investment Strategy:</h4>
            <div className="space-y-3 text-sm">
              <div><strong>Inner circle (2-3 people):</strong> Close friends or family who get most of your social time and emotional energy</div>
              <div><strong>Regular contact (5-7 people):</strong> Good friends you see regularly but less intensively</div>
              <div><strong>Occasional connection (10-15 people):</strong> Broader network you stay in touch with less frequently</div>
              <div><strong>Professional network:</strong> Colleagues, classmates, and career contacts maintained through structured activities</div>
            </div>
          </div>

          <TypographyH3>Efficient Social Activities</TypographyH3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Multi-Purpose Activities</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Study groups that combine socializing with academics</li>
                  <li>• Exercise partners for fitness and friendship</li>
                  <li>• Meal sharing to maintain connections efficiently</li>
                  <li>• Campus job that provides both income and social interaction</li>
                  <li>• Volunteer work that serves personal values and community</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Low-Pressure Social Options</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Coffee dates between classes</li>
                  <li>• Walking and talking instead of sitting activities</li>
                  <li>• Group activities that don't require individual attention</li>
                  <li>• Video calls with distant friends while doing other tasks</li>
                  <li>• Text or message check-ins to maintain connection</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <TypographyH2>Self-Care and Personal Well-being</TypographyH2>

          <TypographyH3>Non-Negotiable Self-Care</TypographyH3>
          
          <TypographyP>
            Certain aspects of self-care should be protected even during busy periods, as they're essential 
            for maintaining performance in other life domains:
          </TypographyP>

          <Card className="my-6 border-green-200 bg-green-50 dark:bg-green-950/20">
            <CardHeader>
              <CardTitle className="text-lg text-green-800 dark:text-green-200">
                The Big Four Self-Care Pillars
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-800 dark:text-green-200">
                <div>
                  <h4 className="font-semibold mb-2">Sleep (7-9 hours nightly):</h4>
                  <p className="text-muted-foreground text-green-700 dark:text-green-300">Essential for memory consolidation, emotional regulation, and immune function</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Nutrition (regular, balanced meals):</h4>
                  <p className="text-muted-foreground text-green-700 dark:text-green-300">Maintains energy levels and cognitive function throughout demanding days</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Movement (30 min daily activity):</h4>
                  <p className="text-muted-foreground text-green-700 dark:text-green-300">Reduces stress hormones and improves mood and focus</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Breathing space (10 min daily quiet time):</h4>
                  <p className="text-muted-foreground text-green-700 dark:text-green-300">Meditation, prayer, or reflection to process experiences and maintain perspective</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH3>Stress Management Integration</TypographyH3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Micro-Recovery Techniques</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li><strong>Between classes:</strong> 5-minute breathing exercises or brief walks</li>
                  <li><strong>During commutes:</strong> Listen to calming music or practice mindfulness</li>
                  <li><strong>Work breaks:</strong> Step outside, stretch, or do progressive muscle relaxation</li>
                  <li><strong>Study sessions:</strong> Pomodoro technique with relaxing break activities</li>
                  <li><strong>Transition times:</strong> Use rituals to mentally shift between life domains</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Weekly Recovery Practices</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li><strong>Technology detox:</strong> 2-4 hours weekly without screens</li>
                  <li><strong>Nature time:</strong> Spend time outdoors for restoration</li>
                  <li><strong>Creative expression:</strong> Art, music, writing for personal enjoyment</li>
                  <li><strong>Physical activity:</strong> Exercise that feels playful rather than obligatory</li>
                  <li><strong>Social recharge:</strong> Quality time with supportive people</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <TypographyH2>Seasonal and Cyclical Balance</TypographyH2>

          <TypographyH3>Adjusting for Academic Cycles</TypographyH3>
          
          <TypographyP>
            Recognize that balance will look different throughout the academic year and adjust expectations accordingly:
          </TypographyP>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">High-Intensity Periods</CardTitle>
                <CardDescription className="text-xs">Finals, midterms, major projects</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Temporarily reduce social commitments</li>
                  <li>• Maintain minimum self-care (sleep, nutrition)</li>
                  <li>• Communicate with employers about reduced availability</li>
                  <li>• Plan recovery time after intense periods</li>
                  <li>• Accept "good enough" in non-critical areas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Lower-Intensity Periods</CardTitle>
                <CardDescription className="text-xs">Breaks, lighter semesters, summer</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Reconnect with neglected relationships</li>
                  <li>• Pursue personal interests and hobbies</li>
                  <li>• Take on additional work hours if needed</li>
                  <li>• Focus on long-term goals and planning</li>
                  <li>• Recharge and prepare for upcoming challenges</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <TypographyH2>Recognizing When Balance Is Off</TypographyH2>
          
          <Card className="my-6 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
            <CardHeader>
              <CardTitle className="text-lg text-orange-800 dark:text-orange-200">
                Warning Signs of Imbalance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
                <div>• Chronic exhaustion despite adequate sleep</div>
                <div>• Declining performance in multiple life areas</div>
                <div>• Loss of interest in previously enjoyed activities</div>
                <div>• Frequent illness or physical symptoms of stress</div>
                <div>• Relationship conflicts or social isolation</div>
                <div>• Increased reliance on caffeine, alcohol, or other substances</div>
                <div>• Feeling overwhelmed by routine tasks</div>
                <div>• Persistent anxiety or mood changes</div>
              </div>
            </CardContent>
          </Card>

          <TypographyH2>Building Support Systems</TypographyH2>

          <TypographyH3>Creating Your Balance Support Network</TypographyH3>
          
          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Your Support Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Academic Support:</h4>
                  <p className="text-muted-foreground">Advisors, study groups, tutors, professors who understand your goals</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Personal Support:</h4>
                  <p className="text-muted-foreground">Friends, family, mental health professionals who provide emotional encouragement</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Professional Support:</h4>
                  <p className="text-muted-foreground">Mentors, supervisors, career services who guide professional development</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Practical Support:</h4>
                  <p className="text-muted-foreground">People who help with daily tasks, carpools, meal sharing, study assistance</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH2>When to Seek Professional Help</TypographyH2>
          
          <TypographyP>
            Sometimes work-life balance challenges require professional intervention, especially when they 
            significantly impact mental health or academic/professional performance.
          </TypographyP>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Campus Resources</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Academic advisors for course load management</li>
                  <li>• Career services for work-life integration</li>
                  <li>• Mental health professionals for stress and anxiety</li>
                  <li>• Financial aid advisors for money management</li>
                  <li>• Time management workshops and seminars</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Professional Services</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Therapy for chronic stress or mental health concerns</li>
                  <li>• Life coaching for goal setting and priorities</li>
                  <li>• Financial planning services</li>
                  <li>• Medical care for stress-related health issues</li>
                  <li>• Support groups for students with similar challenges</li>
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
                  Work-life balance in college is about intentional choices, not perfect equilibrium. Some days 
                  will be more balanced than others, and that's normal. The goal is developing skills and systems 
                  that help you navigate competing demands while maintaining your overall well-being and moving 
                  toward your long-term goals. Be patient with yourself as you learn what balance looks like 
                  for your unique situation.
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
                  <span className="text-xs text-muted-foreground">15 min</span>
                </div>
                <CardTitle className="text-lg">Study Stress Management</CardTitle>
                <CardDescription>
                  Strategies for managing academic stress while maintaining performance.
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

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Article</Badge>
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
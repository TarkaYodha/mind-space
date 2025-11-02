'use client'

import {
  AlertCircleIcon,
  ArrowLeftIcon,
  BookOpenIcon,
  ClockIcon,
  HeartHandshakeIcon,
  ShieldCheckIcon,
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

export default function AcademicAccommodationsPage() {
  return (
    <>
      <NavBar />

      <div className="min-h-screen bg-background">
        {/* Breadcrumb Navigation */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/resources" className="hover:text-primary flex items-center gap-1">
                <ArrowLeftIcon className="h-4 w-4" />
                Resources
              </Link>
              <span>/</span>
              <span>Academic & Study Resources</span>
              <span>/</span>
              <span className="text-foreground">Academic Accommodations</span>
            </div>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="secondary">Guide</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <ClockIcon className="h-4 w-4" />
                  14 min read
                </div>
              </div>

              <TypographyH1 className="text-4xl sm:text-5xl">Academic Accommodations</TypographyH1>

              <TypographyLead className="text-xl text-muted-foreground">
                Understanding your rights, navigating the accommodation process, and accessing
                support services for learning differences and disabilities.
              </TypographyLead>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <TypographyH2>Understanding Academic Accommodations</TypographyH2>

            <TypographyP>
              Academic accommodations are modifications or adjustments to educational policies,
              practices, and procedures that provide students with disabilities equal access to
              educational opportunities. These accommodations level the playing field by removing
              barriers that might prevent students from demonstrating their knowledge and abilities,
              without fundamentally altering the academic requirements of courses or programs.
            </TypographyP>

            <Card className="my-6 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
                    Your Legal Rights
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <TypographyP className="text-sm text-blue-800 dark:text-blue-200 mb-0">
                  Under Section 504 of the Rehabilitation Act and the Americans with Disabilities
                  Act (ADA), qualified students with disabilities have the right to equal access to
                  educational programs. Colleges are required to provide reasonable accommodations
                  that don't fundamentally alter the nature of their programs or create an undue
                  burden on the institution.
                </TypographyP>
              </CardContent>
            </Card>

            <TypographyH2>Who Can Receive Accommodations</TypographyH2>

            <TypographyH3>Qualifying Disabilities</TypographyH3>

            <TypographyP>
              The ADA defines disability broadly to include conditions that substantially limit one
              or more major life activities. In the academic context, this includes conditions that
              affect learning, reading, concentrating, thinking, communicating, or other cognitive
              functions.
            </TypographyP>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Learning and Cognitive Conditions</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li>• Specific Learning Disabilities (dyslexia, dyscalculia, dysgraphia)</li>
                    <li>• Attention Deficit/Hyperactivity Disorder (ADHD)</li>
                    <li>• Autism Spectrum Disorders</li>
                    <li>• Traumatic Brain Injury</li>
                    <li>• Executive functioning disorders</li>
                    <li>• Processing speed disorders</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mental Health Conditions</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li>• Depression and anxiety disorders</li>
                    <li>• Bipolar disorder</li>
                    <li>• Post-Traumatic Stress Disorder (PTSD)</li>
                    <li>• Obsessive-Compulsive Disorder (OCD)</li>
                    <li>• Eating disorders</li>
                    <li>• Other psychiatric conditions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Physical and Sensory Conditions</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li>• Visual or hearing impairments</li>
                    <li>• Mobility impairments</li>
                    <li>• Chronic illnesses (diabetes, epilepsy, autoimmune disorders)</li>
                    <li>• Temporary injuries affecting academic performance</li>
                    <li>• Speech and language disorders</li>
                    <li>• Fine motor coordination difficulties</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Temporary Conditions</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li>• Recovery from surgery or injury</li>
                    <li>• Medication side effects affecting cognition</li>
                    <li>• Acute mental health episodes</li>
                    <li>• Pregnancy-related complications</li>
                    <li>• Concussion or head injury recovery</li>
                    <li>• Other temporary impairments</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <TypographyH2>The Accommodation Process</TypographyH2>

            <TypographyH3>Step-by-Step Guide</TypographyH3>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-lg">Accommodation Request Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs">
                        1
                      </span>
                      Contact Disability Services
                    </h4>
                    <p className="text-muted-foreground">
                      Reach out to your college's disability services office as early as possible,
                      ideally before classes begin.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs">
                        2
                      </span>
                      Submit Documentation
                    </h4>
                    <p className="text-muted-foreground">
                      Provide professional documentation of your disability from qualified
                      healthcare providers.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs">
                        3
                      </span>
                      Interactive Process
                    </h4>
                    <p className="text-muted-foreground">
                      Meet with disability services staff to discuss your needs and determine
                      appropriate accommodations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs">
                        4
                      </span>
                      Receive Accommodation Letter
                    </h4>
                    <p className="text-muted-foreground">
                      Get official accommodation letters to provide to your professors and other
                      relevant college staff.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs">
                        5
                      </span>
                      Implement and Monitor
                    </h4>
                    <p className="text-muted-foreground">
                      Work with professors to implement accommodations and follow up with disability
                      services as needed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <TypographyH3>Documentation Requirements</TypographyH3>

            <TypographyP>
              Effective documentation should be recent, comprehensive, and from qualified
              professionals. Requirements vary by institution and type of disability, but generally
              include:
            </TypographyP>

            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <h4 className="font-semibold mb-4">Essential Documentation Elements:</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Professional credentials:</strong> Licensed healthcare provider qualified
                  to diagnose your specific condition
                </div>
                <div>
                  <strong>Clear diagnosis:</strong> Specific diagnostic criteria met, using current
                  diagnostic standards (DSM-5, ICD-11)
                </div>
                <div>
                  <strong>Functional limitations:</strong> How the condition impacts your academic
                  performance and daily activities
                </div>
                <div>
                  <strong>Treatment history:</strong> Current and past treatments, medications, and
                  their effects
                </div>
                <div>
                  <strong>Recommended accommodations:</strong> Professional's suggestions for
                  academic support and modifications
                </div>
                <div>
                  <strong>Current impact:</strong> Recent assessment of how the condition affects
                  your current functioning
                </div>
              </div>
            </div>

            <TypographyH2>Common Types of Accommodations</TypographyH2>

            <TypographyH3>Testing Accommodations</TypographyH3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Time and Environment</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li>
                      <strong>Extended time:</strong> Typically 1.5x or 2x the standard time
                    </li>
                    <li>
                      <strong>Reduced distraction environment:</strong> Separate testing room
                    </li>
                    <li>
                      <strong>Flexible scheduling:</strong> Alternative test dates or times
                    </li>
                    <li>
                      <strong>Frequent breaks:</strong> Ability to pause during exams
                    </li>
                    <li>
                      <strong>Alternative location:</strong> Disability services testing center
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Format and Assistance</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li>
                      <strong>Reader services:</strong> Having test questions read aloud
                    </li>
                    <li>
                      <strong>Scribe services:</strong> Someone to write dictated answers
                    </li>
                    <li>
                      <strong>Computer use:</strong> Typing instead of handwriting
                    </li>
                    <li>
                      <strong>Large print materials:</strong> Enlarged test fonts
                    </li>
                    <li>
                      <strong>Alternative formats:</strong> Digital or Braille materials
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <TypographyH3>Classroom and Learning Accommodations</TypographyH3>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-lg">In-Class Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Note-Taking Support:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Peer note-takers or professional note-taking services</li>
                      <li>• Permission to record lectures</li>
                      <li>• Access to instructor's lecture notes or slides</li>
                      <li>• Note-taking technology or software</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Classroom Environment:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Preferential seating (front of class, near exit)</li>
                      <li>• Permission to step out briefly if needed</li>
                      <li>• Use of noise-canceling headphones</li>
                      <li>• Lighting or temperature accommodations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Participation Modifications:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Alternative ways to demonstrate participation</li>
                      <li>• Modified attendance policies</li>
                      <li>• Advance notice of cold calling</li>
                      <li>• Written responses instead of verbal participation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <TypographyH3>Assignment and Project Accommodations</TypographyH3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Time and Deadline Flexibility</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li>• Extended deadlines for assignments</li>
                    <li>• Staggered due dates for multiple assignments</li>
                    <li>• Priority registration for course scheduling</li>
                    <li>• Reduced course load without academic penalty</li>
                    <li>• Incomplete grades with extended completion time</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Alternative Formats</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li>• Oral presentations instead of written assignments</li>
                    <li>• Written reports instead of oral presentations</li>
                    <li>• Project-based learning alternatives</li>
                    <li>• Portfolio assessment options</li>
                    <li>• Technology-assisted assignment completion</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <TypographyH2>Working with Professors</TypographyH2>

            <TypographyH3>Disclosure and Communication</TypographyH3>

            <TypographyP>
              You are not required to disclose your specific disability to professors, but you do
              need to provide them with your accommodation letter. Effective communication can help
              ensure your accommodations are implemented properly.
            </TypographyP>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-lg">
                  Best Practices for Professor Communication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Initial Contact:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Schedule a private meeting early in the semester</li>
                      <li>• Bring your accommodation letter from disability services</li>
                      <li>• Discuss how accommodations will work in their specific class</li>
                      <li>• Ask about their preferred method of ongoing communication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ongoing Communication:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Provide advance notice for testing accommodations</li>
                      <li>• Keep professors informed of any changes in needs</li>
                      <li>• Address concerns or issues promptly</li>
                      <li>• Express appreciation for their cooperation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <TypographyH3>When Accommodations Aren't Working</TypographyH3>

            <TypographyP>
              If you're experiencing difficulties with accommodation implementation, there are steps
              you can take:
            </TypographyP>

            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <h4 className="font-semibold mb-4">Problem-Solving Steps:</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Step 1:</strong> Communicate directly with the professor about specific
                  concerns
                </div>
                <div>
                  <strong>Step 2:</strong> Contact your disability services coordinator for guidance
                </div>
                <div>
                  <strong>Step 3:</strong> Request a meeting between you, the professor, and
                  disability services
                </div>
                <div>
                  <strong>Step 4:</strong> Consider modification of accommodations if current ones
                  aren't effective
                </div>
                <div>
                  <strong>Step 5:</strong> If needed, pursue formal grievance procedures through
                  your college
                </div>
              </div>
            </div>

            <TypographyH2>Technology and Assistive Tools</TypographyH2>

            <TypographyH3>Learning Support Software</TypographyH3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Reading and Writing Support</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li>
                      <strong>Text-to-speech:</strong> Natural Reader, Read&Write, Voice Dream
                    </li>
                    <li>
                      <strong>Speech-to-text:</strong> Dragon NaturallySpeaking, voice recognition
                    </li>
                    <li>
                      <strong>Grammar and writing:</strong> Grammarly, Ginger, Hemingway Editor
                    </li>
                    <li>
                      <strong>Organization:</strong> MindMeister, Inspiration, concept mapping
                    </li>
                    <li>
                      <strong>PDF accessibility:</strong> Kurzweil, NVDA, screen readers
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Focus and Organization</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li>
                      <strong>Task management:</strong> Todoist, Any.do, Microsoft To-Do
                    </li>
                    <li>
                      <strong>Time blocking:</strong> Google Calendar, Outlook, time-tracking apps
                    </li>
                    <li>
                      <strong>Distraction blocking:</strong> Cold Turkey, Freedom, FocusMe
                    </li>
                    <li>
                      <strong>Note-taking:</strong> OneNote, Notion, Evernote, audio recording
                    </li>
                    <li>
                      <strong>Study aids:</strong> Quizlet, Anki, flashcard applications
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <TypographyH3>Physical and Environmental Supports</TypographyH3>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-lg">Adaptive Equipment and Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Writing and Input:</h4>
                    <p className="text-muted-foreground">
                      Ergonomic keyboards, pencil grips, alternative computer mice, tablet writing
                      tools
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Visual and Audio:</h4>
                    <p className="text-muted-foreground">
                      Magnification software, colored overlays, noise-canceling headphones, FM
                      systems
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Mobility and Access:</h4>
                    <p className="text-muted-foreground">
                      Adjustable desks, ergonomic seating, portable ramps, accessibility features
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Environmental:</h4>
                    <p className="text-muted-foreground">
                      Light filters, desk organizers, fidget tools, sensory supports
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <TypographyH2>Financial Considerations</TypographyH2>

            <TypographyH3>Funding for Assistive Technology</TypographyH3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Institutional Support</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li>• Disability services equipment loans</li>
                    <li>• Computer lab accessibility software</li>
                    <li>• Library assistive technology</li>
                    <li>• Campus technology grants</li>
                    <li>• Work-study positions with technology access</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">External Resources</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li>• Vocational rehabilitation services</li>
                    <li>• Private foundation grants</li>
                    <li>• Technology lending libraries</li>
                    <li>• Disability-specific organizations</li>
                    <li>• Employer accommodation funds</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <TypographyH2>Mental Health Accommodations</TypographyH2>

            <TypographyH3>Supporting Psychological Well-being</TypographyH3>

            <TypographyP>
              Mental health conditions can significantly impact academic performance, and
              accommodations can provide crucial support during difficult periods.
            </TypographyP>

            <Card className="my-6 border-purple-200 bg-purple-50 dark:bg-purple-950/20">
              <CardHeader>
                <CardTitle className="text-lg text-purple-800 dark:text-purple-200">
                  Common Mental Health Accommodations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-purple-800 dark:text-purple-200">
                  <div>
                    <strong>Flexibility during episodes:</strong> Modified attendance, extended
                    deadlines during acute symptoms
                  </div>
                  <div>
                    <strong>Testing support:</strong> Reduced distraction environment, breaks for
                    anxiety management
                  </div>
                  <div>
                    <strong>Communication preferences:</strong> Email over in-person meetings,
                    advance notice of changes
                  </div>
                  <div>
                    <strong>Crisis planning:</strong> Clear procedures for mental health emergencies
                  </div>
                  <div>
                    <strong>Therapeutic support:</strong> Time for counseling appointments, mental
                    health days
                  </div>
                </div>
              </CardContent>
            </Card>

            <TypographyH2>Advocacy and Self-Determination</TypographyH2>

            <TypographyH3>Developing Self-Advocacy Skills</TypographyH3>

            <TypographyP>
              Learning to advocate for yourself is a crucial skill that will serve you throughout
              college and in your future career. Effective self-advocacy involves understanding your
              needs, communicating them clearly, and working collaboratively to find solutions.
            </TypographyP>

            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <h4 className="font-semibold mb-4">Self-Advocacy Components:</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Self-awareness:</strong> Understanding your strengths, challenges, and
                  learning style
                </div>
                <div>
                  <strong>Rights knowledge:</strong> Knowing your legal rights and institutional
                  policies
                </div>
                <div>
                  <strong>Communication skills:</strong> Expressing needs clearly and professionally
                </div>
                <div>
                  <strong>Problem-solving:</strong> Working collaboratively to address challenges
                </div>
                <div>
                  <strong>Goal setting:</strong> Identifying specific outcomes you want to achieve
                </div>
                <div>
                  <strong>Resource awareness:</strong> Knowing where to find help and support
                </div>
              </div>
            </div>

            <TypographyH2>Transition Planning</TypographyH2>

            <TypographyH3>From High School to College</TypographyH3>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-lg">Key Transition Considerations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Legal Differences:</h4>
                    <p className="text-muted-foreground">
                      College accommodation laws differ from K-12 special education laws. You must
                      self-identify and advocate for your needs.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Documentation Updates:</h4>
                    <p className="text-muted-foreground">
                      High school IEP/504 plans may not be sufficient. You may need new assessments
                      from qualified professionals.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Independence Expectations:</h4>
                    <p className="text-muted-foreground">
                      Greater responsibility for managing your accommodations, communicating with
                      professors, and monitoring your progress.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Support Network Changes:</h4>
                    <p className="text-muted-foreground">
                      Building new relationships with disability services staff, professors, and
                      peer support networks.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <TypographyH3>From College to Career</TypographyH3>

            <TypographyP>
              Planning for workplace accommodations and career success is an important part of your
              college experience:
            </TypographyP>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Internship preparation:</strong> Practice requesting accommodations in work
                settings
              </li>
              <li>
                <strong>Career counseling:</strong> Work with career services to identify
                disability-friendly employers
              </li>
              <li>
                <strong>Workplace rights:</strong> Learn about ADA requirements for employers
              </li>
              <li>
                <strong>Disclosure decisions:</strong> Develop strategies for when and how to
                disclose in job interviews
              </li>
              <li>
                <strong>Skills documentation:</strong> Build portfolio showing your abilities and
                achievements
              </li>
            </ul>

            <TypographyH2>Crisis and Emergency Planning</TypographyH2>

            <Card className="my-6 border-red-200 bg-red-50 dark:bg-red-950/20">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertCircleIcon className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <CardTitle className="text-lg text-red-800 dark:text-red-200">
                    When to Seek Emergency Support
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-red-800 dark:text-red-200">
                  <div>• Significant worsening of symptoms affecting daily functioning</div>
                  <div>• Inability to attend classes or complete essential assignments</div>
                  <div>• Mental health crisis or thoughts of self-harm</div>
                  <div>• Discrimination or harassment related to your disability</div>
                  <div>• Accommodation breakdown affecting academic progress</div>
                  <div>• Medical emergency affecting your ability to continue studies</div>
                </div>
              </CardContent>
            </Card>

            <TypographyH2>Resources and Support</TypographyH2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Campus Resources</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li>• Disability Services Office</li>
                    <li>• Counseling and Psychological Services</li>
                    <li>• Academic Success Centers</li>
                    <li>• Career Services and Counseling</li>
                    <li>• Student Health Centers</li>
                    <li>• Ombudsman or Student Advocacy</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">External Organizations</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li>• Association on Higher Education and Disability (AHEAD)</li>
                    <li>• National Center for Learning Disabilities</li>
                    <li>• Disability Rights Education & Defense Fund</li>
                    <li>• Job Accommodation Network (JAN)</li>
                    <li>• National Alliance on Mental Illness (NAMI)</li>
                    <li>• Condition-specific advocacy organizations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="my-8 bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <HeartHandshakeIcon className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-lg">Remember</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Requesting accommodations is not asking for special treatment—it's ensuring
                    equal access to educational opportunities. Your disability does not define your
                    potential for success. With the right supports and accommodations, you can
                    achieve your academic and career goals. Be patient with the process, advocate
                    for your needs, and remember that seeking help is a sign of strength, not
                    weakness.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-muted/30">
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
                    <Link href="/resources/articles/study-stress-management">Read Article →</Link>
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
        </section>
      </div>
      <Footer />
    </>
  )
}

"use client"

import { NavBar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { TypographyH1, TypographyH2, TypographyH3, TypographyP, TypographyLead } from "@/components/ui/typography"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, ClockIcon, BookOpenIcon } from "lucide-react"
import Link from "next/link"

export default function BreathingTechniquesPage() {
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
            <span>Coping Strategies</span>
            <span>/</span>
            <span className="text-foreground">Breathing Techniques for Anxiety</span>
          </div>
        </div>
      </div></section>

      {/* Article Header */}
      <section className="py-16"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Badge variant="secondary">Exercise</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <ClockIcon className="h-4 w-4" />
                5 min read
              </div>
            </div>
            
            <TypographyH1 className="text-4xl sm:text-5xl">
              Breathing Techniques for Anxiety
            </TypographyH1>
            
            <TypographyLead className="text-xl text-muted-foreground">
              Step-by-step breathing exercises to reduce anxiety and panic in the moment.
            </TypographyLead>
          </div>
        </div>
      </div></section>

      {/* Article Content */}
      <section className="py-16"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <TypographyH2>Why Breathing Techniques Work</TypographyH2>
          
          <TypographyP>
            When you're anxious, your breathing often becomes shallow and rapid, which can make anxiety 
            worse. Controlled breathing exercises activate your parasympathetic nervous system, which 
            promotes relaxation and helps counteract the body's stress response. These techniques are 
            free, always available, and can provide relief in just a few minutes.
          </TypographyP>

          <Card className="my-6 border-green-200 bg-green-50 dark:bg-green-950/20">
            <CardHeader>
              <CardTitle className="text-lg text-green-800 dark:text-green-200">
                Quick Start Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP className="text-sm text-green-800 dark:text-green-200 mb-0">
                Find a comfortable position (sitting or standing), place one hand on your chest and one on your belly. 
                The hand on your belly should move more than the one on your chest as you breathe properly from your diaphragm.
              </TypographyP>
            </CardContent>
          </Card>

          <TypographyH2>Essential Breathing Techniques</TypographyH2>

          <TypographyH3>1. Box Breathing (4-4-4-4)</TypographyH3>
          
          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Perfect for: Test anxiety, before presentations, general stress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Step-by-Step Instructions:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <span><strong>Inhale</strong> slowly through your nose for 4 counts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <span><strong>Hold</strong> your breath for 4 counts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <span><strong>Exhale</strong> slowly through your mouth for 4 counts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                      <span><strong>Hold</strong> empty lungs for 4 counts</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>Duration:</strong> Repeat for 5-10 cycles (about 2-3 minutes)
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH3>2. 4-7-8 Breathing</TypographyH3>
          
          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Perfect for: Panic attacks, falling asleep, intense anxiety</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Step-by-Step Instructions:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <span><strong>Exhale</strong> completely through your mouth</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <span><strong>Inhale</strong> quietly through your nose for 4 counts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <span><strong>Hold</strong> your breath for 7 counts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                      <span><strong>Exhale</strong> completely through your mouth for 8 counts (making a whoosh sound)</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>Duration:</strong> Repeat for 4 cycles, can be done up to twice daily
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH3>3. Belly Breathing (Diaphragmatic Breathing)</TypographyH3>
          
          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Perfect for: Daily stress relief, improving overall breathing habits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Step-by-Step Instructions:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <span>Place one hand on your chest, one on your belly</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <span><strong>Inhale</strong> slowly through your nose, expanding your belly (bottom hand should rise more)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <span><strong>Exhale</strong> slowly through pursed lips, gently contracting belly muscles</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                      <span>Focus on making your exhale longer than your inhale</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>Duration:</strong> Practice for 5-10 minutes daily to build the habit
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH3>4. Coherent Breathing (5-5)</TypographyH3>
          
          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Perfect for: Building resilience, daily practice, general anxiety management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Step-by-Step Instructions:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <span><strong>Inhale</strong> gently through your nose for 5 counts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <span><strong>Exhale</strong> gently through your nose for 5 counts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <span>Maintain a smooth, effortless rhythm</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                      <span>Focus on the gentle rise and fall of your breath</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>Duration:</strong> Practice for 10-20 minutes for maximum benefit
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH2>When and Where to Practice</TypographyH2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Emergency Situations</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Before exams or presentations</li>
                  <li>• During panic attacks</li>
                  <li>• When feeling overwhelmed</li>
                  <li>• Before difficult conversations</li>
                  <li>• In crowded or stressful environments</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Daily Practice Locations</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• In your dorm room before sleep</li>
                  <li>• On campus in quiet outdoor areas</li>
                  <li>• In the library study rooms</li>
                  <li>• While walking between classes</li>
                  <li>• During study breaks</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <TypographyH2>Tips for Success</TypographyH2>
          
          <div className="space-y-4 my-6">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Start Small</h4>
              <p className="text-sm text-muted-foreground">
                Begin with just 2-3 minutes daily. As breathing exercises become more natural, gradually increase duration.
              </p>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Be Patient</h4>
              <p className="text-sm text-muted-foreground">
                It may feel awkward at first. Most people see benefits within a week of consistent practice.
              </p>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Practice When Calm</h4>
              <p className="text-sm text-muted-foreground">
                Regular practice when you're not anxious makes these techniques more effective during stressful moments.
              </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Use Technology</h4>
              <p className="text-sm text-muted-foreground">
                Apps like Calm, Headspace, or simple breathing timers can help guide your practice.
              </p>
            </div>
          </div>

          <TypographyH2>Common Mistakes to Avoid</TypographyH2>
          
          <Card className="my-6 border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20">
            <CardContent className="pt-6">
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-yellow-800 dark:text-yellow-200">Forcing the breath:</strong> 
                  <span className="text-yellow-700 dark:text-yellow-300"> Breathing should feel natural and comfortable, not strained.</span>
                </div>
                <div>
                  <strong className="text-yellow-800 dark:text-yellow-200">Breathing too fast:</strong> 
                  <span className="text-yellow-700 dark:text-yellow-300"> Slow, controlled breaths are more effective than rapid ones.</span>
                </div>
                <div>
                  <strong className="text-yellow-800 dark:text-yellow-200">Expecting immediate results:</strong> 
                  <span className="text-yellow-700 dark:text-yellow-300"> Benefits increase with consistent practice over time.</span>
                </div>
                <div>
                  <strong className="text-yellow-800 dark:text-yellow-200">Only practicing during crises:</strong> 
                  <span className="text-yellow-700 dark:text-yellow-300"> Regular practice makes techniques more effective when you need them most.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH2>Building a Daily Practice</TypographyH2>
          
          <TypographyP>
            To get the most benefit from breathing exercises, consider incorporating them into your daily routine:
          </TypographyP>

          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>Morning routine:</strong> Start your day with 5 minutes of coherent breathing</li>
            <li><strong>Before studying:</strong> Use box breathing to improve focus and reduce stress</li>
            <li><strong>Between classes:</strong> Practice belly breathing while walking</li>
            <li><strong>Before bed:</strong> Use 4-7-8 breathing to promote better sleep</li>
            <li><strong>Stressful moments:</strong> Keep a go-to technique ready for immediate use</li>
          </ul>

          <TypographyH2>When Breathing Isn't Enough</TypographyH2>
          
          <TypographyP>
            While breathing techniques are powerful tools for managing anxiety, they work best as part of a 
            comprehensive approach to mental health. Consider seeking additional support if:
          </TypographyP>

          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>Anxiety significantly interferes with your daily life or academic performance</li>
            <li>Panic attacks are frequent or severe</li>
            <li>You're avoiding situations or activities due to anxiety</li>
            <li>Breathing exercises alone aren't providing sufficient relief</li>
            <li>You're experiencing other concerning symptoms</li>
          </ul>

          <Card className="my-8 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h4 className="font-semibold text-lg">Remember</h4>
                <p className="text-muted-foreground">
                  Breathing techniques are a simple but powerful tool that you always have with you. With 
                  regular practice, these exercises can become second nature and provide reliable relief 
                  when anxiety strikes. Start with the technique that feels most comfortable, and don't 
                  be afraid to experiment to find what works best for you.
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
                  <Badge variant="secondary">Interactive</Badge>
                  <span className="text-xs text-muted-foreground">10 min</span>
                </div>
                <CardTitle className="text-lg">Mindfulness and Meditation</CardTitle>
                <CardDescription>
                  Simple mindfulness exercises you can do anywhere, anytime.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                  <Link href="/resources/articles/mindfulness-and-meditation">
                    Read Article →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Emergency Tool</Badge>
                  <span className="text-xs text-muted-foreground">3 min</span>
                </div>
                <CardTitle className="text-lg">Grounding Techniques for Crisis</CardTitle>
                <CardDescription>
                  Immediate techniques to use when feeling overwhelmed or in crisis.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                  <Link href="/resources/articles/grounding-techniques-for-crisis">
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
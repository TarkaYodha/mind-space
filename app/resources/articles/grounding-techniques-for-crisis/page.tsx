"use client"

import { NavBar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { TypographyH1, TypographyH2, TypographyH3, TypographyP, TypographyLead } from "@/components/ui/typography"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, ClockIcon, BookOpenIcon, AlertTriangleIcon, PhoneIcon } from "lucide-react"
import Link from "next/link"

export default function GroundingTechniquesPage() {
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
            <span className="text-foreground">Grounding Techniques for Crisis</span>
          </div>
        </div>
      </div></section>

      {/* Article Header */}
      <section className="py-16"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Badge variant="secondary">Emergency Tool</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <ClockIcon className="h-4 w-4" />
                3 min read
              </div>
            </div>
            
            <TypographyH1 className="text-4xl sm:text-5xl">
              Grounding Techniques for Crisis
            </TypographyH1>
            
            <TypographyLead className="text-xl text-muted-foreground">
              Immediate techniques to use when feeling overwhelmed, panicked, or in emotional crisis.
            </TypographyLead>
          </div>
        </div>
      </div></section>

      {/* Emergency Resources Banner */}
      <section className="py-16"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangleIcon className="h-6 w-6 text-red-600 dark:text-red-400" />
                <CardTitle className="text-xl text-red-800 dark:text-red-200">
                  If You're in Immediate Crisis
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-red-800 dark:text-red-200">
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-4 w-4" />
                  <span><strong>Call 988</strong> - Suicide & Crisis Lifeline (available 24/7)</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-4 w-4" />
                  <span><strong>Text HOME to 741741</strong> - Crisis Text Line</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-4 w-4" />
                  <span><strong>Call 911</strong> - For immediate medical emergencies</span>
                </div>
                <p className="text-sm">
                  <strong>Campus Resources:</strong> Contact your campus counseling center or campus security for immediate support.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div></section>

      {/* Article Content */}
      <section className="py-16"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <TypographyH2>What Are Grounding Techniques?</TypographyH2>
          
          <TypographyP>
            Grounding techniques are simple tools that help you reconnect with the present moment when you're 
            feeling overwhelmed, panicked, dissociated, or experiencing intense emotions. These techniques work 
            by redirecting your attention away from distressing thoughts or feelings and anchoring you to the 
            here and now.
          </TypographyP>

          <TypographyH2>The 5-4-3-2-1 Technique</TypographyH2>
          
          <TypographyP>
            This is the most widely used grounding technique. It engages all your senses to bring you back to the present moment.
          </TypographyP>

          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Step-by-Step Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">5</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">5 Things You Can See</h4>
                        <p className="text-sm text-muted-foreground">Look around and name 5 things you can see. Describe them in detail (color, shape, texture).</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                        <span className="text-green-600 dark:text-green-400 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">4 Things You Can Touch</h4>
                        <p className="text-sm text-muted-foreground">Notice the texture of your clothes, the temperature of your skin, the surface you're sitting on.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/50 rounded-full flex items-center justify-center">
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">3 Things You Can Hear</h4>
                        <p className="text-sm text-muted-foreground">Listen for sounds around you - air conditioning, voices, traffic, your own breathing.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 dark:text-purple-400 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">2 Things You Can Smell</h4>
                        <p className="text-sm text-muted-foreground">Take a moment to notice any scents - coffee, fresh air, cleaning products, your perfume.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 dark:text-orange-400 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">1 Thing You Can Taste</h4>
                        <p className="text-sm text-muted-foreground">Notice any taste in your mouth, or have a sip of water or piece of gum.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH2>Physical Grounding Techniques</TypographyH2>

          <TypographyH3>Temperature Techniques</TypographyH3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cold Water Method</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Splash cold water on your face</li>
                  <li>• Hold ice cubes in your hands</li>
                  <li>• Drink cold water slowly</li>
                  <li>• Step outside in cool air</li>
                </ul>
                <p className="mt-3 text-muted-foreground italic">The cold helps activate your body's dive response, naturally calming your nervous system.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pressure Point Grounding</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>• Press your feet firmly into the ground</li>
                  <li>• Squeeze your hands together</li>
                  <li>• Hug yourself tightly</li>
                  <li>• Press your back against a wall</li>
                </ul>
                <p className="mt-3 text-muted-foreground italic">Physical pressure helps you feel more connected to your body and surroundings.</p>
              </CardContent>
            </Card>
          </div>

          <TypographyH3>Movement-Based Grounding</TypographyH3>
          
          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Quick Movement Techniques</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Finger Counting:</h4>
                  <p className="text-muted-foreground">Touch each finger to your thumb, counting from 1 to 10 and back down. Focus on the sensation of each touch.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Muscle Tension and Release:</h4>
                  <p className="text-muted-foreground">Clench your fists for 5 seconds, then release. Notice the contrast between tension and relaxation.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Gentle Stretching:</h4>
                  <p className="text-muted-foreground">Roll your shoulders, stretch your arms, or do simple neck rolls. Focus on how your body feels.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH2>Mental Grounding Techniques</TypographyH2>

          <TypographyH3>Category Naming</TypographyH3>
          
          <TypographyP>
            Choose a category and name as many items as you can. This redirects your mind to neutral, concrete thinking:
          </TypographyP>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            <Card className="p-4">
              <h4 className="font-semibold text-sm mb-2">Animals</h4>
              <p className="text-xs text-muted-foreground">Dogs, cats, elephants, birds...</p>
            </Card>
            <Card className="p-4">
              <h4 className="font-semibold text-sm mb-2">Colors</h4>
              <p className="text-xs text-muted-foreground">Red, blue, turquoise, magenta...</p>
            </Card>
            <Card className="p-4">
              <h4 className="font-semibold text-sm mb-2">Foods</h4>
              <p className="text-xs text-muted-foreground">Pizza, apples, chocolate, soup...</p>
            </Card>
            <Card className="p-4">
              <h4 className="font-semibold text-sm mb-2">Movies</h4>
              <p className="text-xs text-muted-foreground">Action, comedy, sci-fi, romance...</p>
            </Card>
          </div>

          <TypographyH3>The Alphabet Game</TypographyH3>
          
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">Choose a category and go through the alphabet:</h4>
            <div className="space-y-2 text-sm">
              <div><strong>Example - Food:</strong> Apple, Banana, Carrot, Donut, Eggplant, Fig...</div>
              <div><strong>Example - Places:</strong> Australia, Brazil, Canada, Denmark, Egypt, France...</div>
              <div><strong>Example - Names:</strong> Alice, Ben, Carly, David, Emma, Frank...</div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Don't worry if you get stuck on a letter - just move to the next one. The goal is engagement, not perfection.
            </p>
          </div>

          <TypographyH2>Emotional Grounding Techniques</TypographyH2>

          <TypographyH3>Self-Compassion Statements</TypographyH3>
          
          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Gentle Reminders for Yourself</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                  <p className="italic">"This feeling is temporary. I am safe right now."</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                  <p className="italic">"I am doing the best I can with what I have right now."</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded">
                  <p className="italic">"I have survived difficult moments before, and I will get through this one."</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-950/20 p-3 rounded">
                  <p className="italic">"It's okay to feel overwhelmed. I'm going to take this one moment at a time."</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH3>Reality Orientation</TypographyH3>
          
          <TypographyP>
            When feeling disconnected or experiencing a panic attack, remind yourself of basic facts:
          </TypographyP>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">State These Facts Out Loud or Write Them Down:</h4>
            <div className="space-y-2 text-sm">
              <div>• My name is [your name]</div>
              <div>• I am [age] years old</div>
              <div>• Today is [day, date, year]</div>
              <div>• I am at [location - dorm, library, etc.]</div>
              <div>• I am a student at [university name]</div>
              <div>• I am safe right now</div>
            </div>
          </div>

          <TypographyH2>Grounding for Specific Situations</TypographyH2>

          <TypographyH3>In Your Dorm Room</TypographyH3>
          
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>Hold a familiar object (stuffed animal, blanket, jewelry)</li>
            <li>Look at photos of loved ones</li>
            <li>Play calming music or nature sounds</li>
            <li>Use aromatherapy (essential oils, candles, familiar scents)</li>
            <li>Wrap yourself in a heavy blanket for deep pressure</li>
          </ul>

          <TypographyH3>In Public Spaces (Classroom, Library, Dining Hall)</TypographyH3>
          
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>Press your feet firmly on the floor</li>
            <li>Hold your water bottle or coffee cup and focus on its temperature</li>
            <li>Count objects in the room (ceiling tiles, books, people in red)</li>
            <li>Practice the 5-4-3-2-1 technique silently</li>
            <li>Take slow, deep breaths through your nose</li>
          </ul>

          <TypographyH2>Creating Your Personal Grounding Kit</TypographyH2>
          
          <Card className="my-6">
            <CardHeader>
              <CardTitle className="text-lg">Items to Keep Handy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">In Your Backpack:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Stress ball or fidget toy</li>
                    <li>• Essential oil roller</li>
                    <li>• Gum or mints</li>
                    <li>• Small smooth stone</li>
                    <li>• Emergency contact list</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">On Your Phone:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Calming playlist</li>
                    <li>• Photos of loved ones</li>
                    <li>• Voice recordings of supportive messages</li>
                    <li>• Crisis hotline numbers</li>
                    <li>• Grounding apps or reminders</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <TypographyH2>When to Use Different Techniques</TypographyH2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Panic Attacks</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-1">
                  <li>• 5-4-3-2-1 technique</li>
                  <li>• Cold water method</li>
                  <li>• Deep breathing</li>
                  <li>• Reality orientation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dissociation</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-1">
                  <li>• Temperature techniques</li>
                  <li>• Physical movement</li>
                  <li>• Naming categories</li>
                  <li>• Holding textured objects</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Emotional Overwhelm</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-1">
                  <li>• Self-compassion statements</li>
                  <li>• Gentle movement</li>
                  <li>• Sensory grounding</li>
                  <li>• Connection with support person</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="my-8 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h4 className="font-semibold text-lg">Remember</h4>
                <p className="text-muted-foreground">
                  Grounding techniques are tools that work best with practice. Try different techniques when you're 
                  calm to see what works for you. During a crisis, use whatever technique you can remember - 
                  there's no wrong way to ground yourself. If one technique doesn't help, try another. 
                  You're not broken if grounding takes time to work.
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
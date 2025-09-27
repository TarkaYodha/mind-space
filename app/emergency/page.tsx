"use client"

import { PageLayout } from "@/components/layout/page-layout"
import { Section } from "@/components/layout/page-layout"
import { CrisisAlert } from "@/components/ui/crisis-alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneIcon, MessageCircleIcon, HeartIcon } from "@/components/ui/icons"
import { useAuth } from '@clerk/nextjs'

export default function EmergencyPage() {
  const { isSignedIn } = useAuth()
  const crisisResources = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 crisis support for anyone in suicidal crisis or emotional distress",
      action: () => window.open("tel:988"),
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "24/7 crisis support via text message",
      action: () => window.open("sms:741741?body=HOME"),
    },
    {
      name: "National Sexual Assault Hotline",
      number: "1-800-656-4673",
      description: "24/7 support for survivors of sexual assault",
      action: () => window.open("tel:18006564673"),
    },
    {
      name: "LGBTQ National Hotline",
      number: "1-888-843-4564",
      description: "Support for LGBTQ+ individuals in crisis",
      action: () => window.open("tel:18888434564"),
    },
  ]

  const copingStrategies = [
    {
      title: "Grounding Technique (5-4-3-2-1)",
      description: "Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste.",
      icon: <HeartIcon className="h-5 w-5" />,
    },
    {
      title: "Deep Breathing",
      description: "Breathe in for 4 counts, hold for 4, breathe out for 6. Repeat until you feel calmer.",
      icon: <HeartIcon className="h-5 w-5" />,
    },
    {
      title: "Safe Person Contact",
      description: "Reach out to a trusted friend, family member, or mental health professional who can provide support.",
      icon: <MessageCircleIcon className="h-5 w-5" />,
    },
    {
      title: "Remove Means",
      description: "If you're having thoughts of self-harm, remove or secure any means of harm from your environment.",
      icon: <PhoneIcon className="h-5 w-5" />,
    },
  ]

  return (
    <PageLayout showHeader={false} showFooter={false}>
      {/* Emergency Header */}
      <div className="bg-destructive text-destructive-foreground py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold">Crisis Support Resources</h1>
          <p className="text-destructive-foreground/90">Immediate help is available 24/7</p>
        </div>
      </div>

      {/* Immediate Crisis Support */}
      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          <CrisisAlert
            className="mb-12"
            onCallHotline={() => window.open("tel:988")}
            onGetResources={() => (window.location.href = "/tools")}
          />

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-balance mb-4">You Are Not Alone</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              If you're in crisis or having thoughts of self-harm, please reach out for help immediately. These
              resources are available 24/7.
            </p>
          </div>

          {/* Crisis Hotlines */}
          <div className="grid gap-6 md:grid-cols-2 mb-16">
            {crisisResources.map((resource, index) => (
              <Card key={index} className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-lg">{resource.name}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="destructive" onClick={resource.action} className="w-full">
                    <PhoneIcon className="h-4 w-4 mr-2" />
                    {resource.number}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Immediate Coping Strategies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-balance mb-8">Immediate Coping Strategies</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {copingStrategies.map((strategy, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      {strategy.icon}
                      {strategy.title}
                    </CardTitle>
                    <CardDescription className="text-pretty">{strategy.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Safety Planning */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl">Create a Safety Plan</CardTitle>
              <CardDescription>
                A safety plan can help you stay safe during difficult times. Consider these steps:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Recognize Warning Signs</h4>
                    <p className="text-sm text-muted-foreground">
                      Identify thoughts, feelings, or situations that might lead to crisis.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Use Coping Strategies</h4>
                    <p className="text-sm text-muted-foreground">
                      Practice healthy ways to manage stress and difficult emotions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Contact Support People</h4>
                    <p className="text-sm text-muted-foreground">
                      Have a list of trusted friends, family, or professionals to call.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">Make Environment Safe</h4>
                    <p className="text-sm text-muted-foreground">
                      Remove or secure items that could be used for self-harm.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold">Contact Professional Help</h4>
                    <p className="text-sm text-muted-foreground">
                      Know how to reach crisis services, mental health professionals, or emergency services.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Return to Platform */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Continue Your Journey?</h3>
            <p className="text-muted-foreground mb-6">
              When you're ready, MindSpace is here to support your ongoing mental health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/dashboard">Return to Dashboard</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={isSignedIn ? "/chat" : "/sign-in"}>Start AI Chat</a>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}

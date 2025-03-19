"use client"

import { Search, HelpCircle, Book, FileText, MessageSquare, ChevronRight, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Librory/card"
import { Input } from "@/components/ui/Librory/input"
import { Button } from "@/components/ui/Librory/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Librory/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Librory/tabs"

export function HelpCenter() {
  const popularTopics = [
    {
      id: 1,
      title: "Getting Started",
      icon: Book,
      description: "Learn how to navigate the platform and start your learning journey",
    },
    {
      id: 2,
      title: "Account & Billing",
      icon: FileText,
      description: "Manage your account settings, subscription, and payment methods",
    },
    {
      id: 3,
      title: "Technical Issues",
      icon: HelpCircle,
      description: "Troubleshoot common problems and find solutions",
    },
    {
      id: 4,
      title: "Contact Support",
      icon: MessageSquare,
      description: "Get in touch with our support team for personalized assistance",
    },
  ]

  const faqs = [
    {
      id: "faq-1",
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on the &apos;Forgot Password&apos; link on the login page. Enter your email address, and we&apos;ll send you instructions to reset your password. Follow the link in the email to create a new password.",
    },
    {
      id: "faq-2",
      question: "How do I download course materials?",
      answer:
        "You can download course materials by navigating to the course page and clicking on the &apos;Resources&apos; tab. From there, you&apos;ll see a list of downloadable materials. Click the download icon next to each item to save it to your device.",
    },
    {
      id: "faq-3",
      question: "Can I access courses offline?",
      answer:
        "Yes, with our Premium subscription, you can download courses for offline viewing. Go to the course page, click the download button, and the content will be available in the &apos;Downloads&apos; section of your account even when you&apos;re offline.",
    },
    {
      id: "faq-4",
      question: "How do I get a certificate?",
      answer: (
        <p>
          Certificates are automatically issued upon completion of a course. To receive your certificate, you must complete all required lessons and pass any quizzes or assessments with a score of at least 70%. Once completed, you can access your certificate from the &apos;Achievements&apos; section.
        </p>
      ),
    },
    {
      id: "faq-5",
      question: "How do I cancel my subscription?",
      answer:
        "To cancel your subscription, go to the &apos;Billing&apos; section in your account settings. Click on &apos;Cancel Subscription&apos; and follow the prompts. Your subscription will remain active until the end of the current billing period.",
    },
  ]

  const guides = [
    {
      id: 1,
      title: "Complete Guide to Course Navigation",
      category: "Getting Started",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "How to Track Your Learning Progress",
      category: "Getting Started",
      readTime: "3 min read",
    },
    {
      id: 3,
      title: "Understanding Your Subscription Options",
      category: "Account & Billing",
      readTime: "4 min read",
    },
    {
      id: 4,
      title: "Troubleshooting Video Playback Issues",
      category: "Technical Issues",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "How to Earn and Share Certificates",
      category: "Achievements",
      readTime: "4 min read",
    },
  ]

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Help Center</h1>
        <p className="text-muted-foreground">Find answers to your questions and get support</p>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search for help articles..." className="pl-10 h-12" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {popularTopics.map((topic) => (
          <Card key={topic.id} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <topic.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{topic.title}</h3>
              <p className="text-sm text-muted-foreground">{topic.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="faq" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
          <TabsTrigger value="guides">Help Guides</TabsTrigger>
          <TabsTrigger value="contact">Contact Support</TabsTrigger>
        </TabsList>

        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guides">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Help Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {guides.map((guide) => (
                  <div
                    key={guide.id}
                    className="flex items-center justify-between p-4 border rounded-md cursor-pointer hover:bg-muted/50"
                  >
                    <div>
                      <h3 className="font-medium">{guide.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-muted rounded-full">{guide.category}</span>
                        <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contact Support</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our support team is available to help you with any questions or issues you may have.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <MessageSquare className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold mb-2">Chat Support</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Chat with our support team for immediate assistance.
                      </p>
                      <Button>Start Chat</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Mail className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold mb-2">Email Support</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Send us an email and we&apos;ll get back to you within 24 hours.
                      </p>
                      <Button variant="outline">Send Email</Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 p-4 bg-muted rounded-md">
                  <h3 className="font-semibold mb-2">Support Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM EST
                    <br />
                    Saturday - Sunday: 10:00 AM - 4:00 PM EST
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
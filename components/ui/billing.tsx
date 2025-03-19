"use client"

import { CreditCard, ShoppingCart, CheckCircle, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/Librory/card"
import { Button } from "@/components/ui/Librory/button"
import { Badge } from "@/components/ui/Librory/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Librory/tabs"
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  instructor: string;
  price: string;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  description: string;
}

interface BillingProps {
  onPurchaseCourse: (course: Course) => void;
}

export function Billing({ onPurchaseCourse }: BillingProps) {
  const paymentMethods = [
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiry: "04/25",
      isDefault: true,
    },
  ]

  const subscriptionDetails = {
    plan: "Premium",
    price: "$15.99",
    billingCycle: "Monthly",
    nextBillingDate: "April 15, 2023",
    status: "Active",
  }

  const billingHistory = [
    {
      id: 1,
      date: "March 15, 2023",
      description: "Premium Plan - Monthly",
      amount: "$15.99",
      status: "Paid",
    },
    {
      id: 2,
      date: "February 15, 2023",
      description: "Premium Plan - Monthly",
      amount: "$15.99",
      status: "Paid",
    },
    {
      id: 3,
      date: "January 15, 2023",
      description: "Premium Plan - Monthly",
      amount: "$15.99",
      status: "Paid",
    },
  ]

  const availableCourses = [
    {
      id: 1,
      title: "React.js: Building Modern Web Applications",
      instructor: "Alex Morgan",
      price: "$49.99",
      rating: 4.8,
      reviews: 14280,
      category: "Development",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Learn to build modern, responsive web applications with React.js. This comprehensive course covers everything from fundamentals to advanced concepts.",
    },
    {
      id: 2,
      title: "Digital Marketing Strategy Masterclass",
      instructor: "Jessica Williams",
      price: "$59.99",
      rating: 4.6,
      reviews: 9870,
      category: "Marketing",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Master digital marketing strategies that drive results. Learn SEO, social media marketing, content strategy, and analytics in this comprehensive masterclass.",
    },
    {
      id: 3,
      title: "Advanced CSS and Sass: Flexbox, Grid, Animations",
      instructor: "David Miller",
      price: "$39.99",
      rating: 4.7,
      reviews: 8540,
      category: "Development",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Take your CSS skills to the next level with advanced techniques. Learn Flexbox, CSS Grid, animations, and Sass to create stunning web designs.",
    },
  ]

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Billing & Payments</h1>
        <p className="text-muted-foreground">Manage your subscription, payment methods, and purchase courses</p>
      </div>

      <Tabs defaultValue="subscription" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="billing-history">Billing History</TabsTrigger>
          <TabsTrigger value="purchase-courses">Purchase Courses</TabsTrigger>
        </TabsList>

        <TabsContent value="subscription">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Current Plan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{subscriptionDetails.plan}</h3>
                      <p className="text-sm text-muted-foreground">{subscriptionDetails.billingCycle} billing</p>
                    </div>
                    <Badge variant="default">{subscriptionDetails.status}</Badge>
                  </div>

                  <div className="h-px bg-border my-4" />

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Unlimited access to all courses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Offline viewing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Priority support</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Next billing date: {subscriptionDetails.nextBillingDate}
                    </p>
                  </div>
                  <Button variant="outline">Change Plan</Button>
                </CardFooter>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Billing Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Plan</span>
                    <span className="font-medium">{subscriptionDetails.plan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Price</span>
                    <span className="font-medium">{subscriptionDetails.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Billing Cycle</span>
                    <span className="font-medium">{subscriptionDetails.billingCycle}</span>
                  </div>

                  <div className="h-px bg-border my-2" />

                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>{subscriptionDetails.price}/month</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="destructive" className="w-full">
                    Cancel Subscription
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="payment-methods">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Payment Methods</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between p-4 border rounded-md">
                  <div className="flex items-center gap-4">
                    <CreditCard className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium">
                        {method.type} •••• {method.last4}
                      </p>
                      <p className="text-sm text-muted-foreground">Expires {method.expiry}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {method.isDefault && <Badge variant="outline">Default</Badge>}
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm">
                      Remove
                    </Button>
                  </div>
                </div>
              ))}

              <Button className="mt-4">
                <CreditCard className="h-4 w-4 mr-2" />
                Add Payment Method
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing-history">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Billing History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {billingHistory.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-md">
                    <div>
                      <p className="font-medium">{item.description}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{item.amount}</p>
                      <Badge variant="outline" className="mt-1">
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="purchase-courses">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {availableCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="h-40 bg-muted">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-full w-full object-cover"
                    width={300}
                    height={200}
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>

                  <div className="flex items-center mt-2">
                    <div className="flex items-center text-yellow-500">
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-xs text-muted-foreground ml-1">
                        ({course.reviews.toLocaleString()} reviews)
                      </span>
                    </div>
                  </div>

                  <p className="text-sm mt-2 line-clamp-2">{course.description}</p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">{course.price}</span>
                    <Button onClick={() => onPurchaseCourse(course)}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Purchase
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
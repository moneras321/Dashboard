"use client"

import { X, Play, Clock, Calendar, User, BarChart } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/Librory/dialog"
import { Button } from "@/components/ui/Librory/button"
import { Badge } from "@/components/ui/Librory/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Librory/tabs"
import Image from "next/image";

interface CourseDetailProps {
  course: {
    id: number;
    title: string;
    description: string;
    instructor: string;
    category: string;
    progress: number;
    rating: number;
  };
  onClose: () => void;
  onPlayVideo: (title: string) => void;
}

export function CourseDetail({ course, onClose, onPlayVideo }: CourseDetailProps) {
  const lessons = [
    { id: 1, title: "Introduction to the Course", duration: "10:15", completed: true },
    { id: 2, title: "Setting Up Your Environment", duration: "15:30", completed: true },
    { id: 3, title: "Basic Concepts and Syntax", duration: "20:45", completed: true },
    { id: 4, title: "Working with Functions", duration: "25:10", completed: course.progress >= 50 },
    { id: 5, title: "Async/Await and Promises", duration: "30:20", completed: false },
    { id: 6, title: "Error Handling", duration: "18:40", completed: false },
    { id: 7, title: "Advanced Techniques", duration: "22:15", completed: false },
    { id: 8, title: "Project: Building a Real Application", duration: "45:30", completed: false },
    { id: 9, title: "Testing and Debugging", duration: '28  duration: "45:30"', completed: false },
    { id: 9, title: "Testing and Debugging", duration: "28:15", completed: false },
    { id: 10, title: "Course Conclusion and Next Steps", duration: "15:45", completed: false },
  ]

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center justify-between">
            Course Details
            <button onClick={onClose} className="rounded-full p-1 hover:bg-muted">
              <X className="h-5 w-5" />
            </button>
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          <div className="h-48 bg-muted rounded-md relative mb-4">
            <Image
              src="/placeholder.svg?height=300&width=800"
              alt={course.title}
              className="h-full w-full object-cover rounded-md"
              width={800}
              height={300}
            />
            <Badge variant="secondary" className="absolute top-2 right-2">
              {course.category}
            </Badge>
            <Button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              size="lg"
              onClick={() => onPlayVideo(course.title)}
            >
              <Play className="mr-2 h-5 w-5" /> Play Course
            </Button>
          </div>

          <h2 className="text-2xl font-bold">{course.title}</h2>
          <p className="text-muted-foreground mt-1">Instructor: {course.instructor}</p>

          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">3h 15m total length</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Last updated: 2 months ago</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">5,280 students enrolled</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{course.progress}% complete</span>
            </div>
          </div>

          <div className="mt-6">
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: `${course.progress}%` }}></div>
            </div>
          </div>

          <Tabs defaultValue="curriculum" className="mt-6">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="curriculum" className="space-y-4">
              <div className="space-y-2">
                {lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center justify-between p-3 rounded-md hover:bg-muted cursor-pointer"
                    onClick={() => onPlayVideo(`${course.title} - ${lesson.title}`)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center ${lesson.completed ? "bg-primary text-primary-foreground" : "bg-muted-foreground/20 text-muted-foreground"}`}
                      >
                        {lesson.completed ? (
                          <span className="text-xs">✓</span>
                        ) : (
                          <span className="text-xs">{lesson.id}</span>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{lesson.title}</p>
                        <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="overview" className="space-y-4">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <h3>About This Course</h3>
                <p>
                  This comprehensive course will take you from the fundamentals to advanced concepts. Whether you;re a beginner or looking to refresh your skills, this course provides a structured learning path with practical examples and hands-on projects.
                </p>

                <h3 className="mt-4">What You'll Learn</h3>
                <ul>
                  <li>Master the core concepts and syntax</li>
                  <li>Build real-world applications with best practices</li>
                  <li>Understand advanced patterns and techniques</li>
                  <li>Implement error handling and debugging strategies</li>
                  <li>Deploy your applications to production</li>
                </ul>

                <h3 className="mt-4">Prerequisites</h3>
                <p>
                  Basic computer skills and familiarity with web technologies is recommended, but not required. This
                  course is designed to accommodate beginners while still providing value to more experienced students.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl font-bold">{course.rating}</div>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden mr-2">
                      <div className="h-full bg-yellow-500 w-[90%]"></div>
                    </div>
                    <span className="text-xs">5 stars</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden mr-2">
                      <div className="h-full bg-yellow-500 w-[70%]"></div>
                    </div>
                    <span className="text-xs">4 stars</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden mr-2">
                      <div className="h-full bg-yellow-500 w-[20%]"></div>
                    </div>
                    <span className="text-xs">3 stars</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden mr-2">
                      <div className="h-full bg-yellow-500 w-[5%]"></div>
                    </div>
                    <span className="text-xs">2 stars</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden mr-2">
                      <div className="h-full bg-yellow-500 w-[2%]"></div>
                    </div>
                    <span className="text-xs">1 star</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 border rounded-md">
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">John D.</div>
                    <div className="text-yellow-500 text-sm">★★★★★</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Excellent course! The instructor explains complex concepts in a way thats easy to understand. I;ve learned so much and feel confident applying these skills to my projects.
                  </p>
                </div>

                <div className="p-4 border rounded-md">
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">Sarah M.</div>
                    <div className="text-yellow-500 text-sm">★★★★☆</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Great content and well-structured. I would have liked more practical exercises, but overall it was
                    very informative and helpful for my career.
                  </p>
                </div>

                <div className="p-4 border rounded-md">
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">Robert K.</div>
                    <div className="text-yellow-500 text-sm">★★★★★</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This course exceeded my expectations. The projects were challenging but doable, and I feel like I ve gained valuable skills that I can immediately apply at work.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}
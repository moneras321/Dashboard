"use client"
import { Clock } from "lucide-react"
import { Button } from "@/components/ui/Librory/button"
import { Badge } from "@/components/ui/Librory/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Librory/tabs"

interface MyCoursesProps {
  onPlayVideo: (title: string) => void
  onOpenAllCourses: () => void
  onViewCertificate: (title: string) => void
}

export function MyCourses({ onPlayVideo, onOpenAllCourses, onViewCertificate }: MyCoursesProps) {
  const inProgressCourses = [
    {
      id: 1,
      title: "Modern JavaScript: From Fundamentals to Advanced",
      instructor: "Alex Morgan",
      progress: 68,
      category: "Development",
      lastAccessed: "2 hours ago",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "UI/UX Design Principles and Best Practices",
      instructor: "Sarah Johnson",
      progress: 42,
      category: "Design",
      lastAccessed: "Yesterday",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Data Science and Machine Learning with Python",
      instructor: "Michael Chen",
      progress: 15,
      category: "Data Science",
      lastAccessed: "3 days ago",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const completedCourses = [
    {
      id: 4,
      title: "HTML & CSS Fundamentals",
      instructor: "Jessica Williams",
      progress: 100,
      category: "Development",
      completedDate: "Last month",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Introduction to Digital Marketing",
      instructor: "Robert Smith",
      progress: 100,
      category: "Marketing",
      completedDate: "2 months ago",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const archivedCourses = [
    {
      id: 6,
      title: "Photography Basics",
      instructor: "Emma Davis",
      progress: 35,
      category: "Photography",
      archivedDate: "3 months ago",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My Courses</h1>
        <Button onClick={() => onOpenAllCourses()}>Browse More Courses</Button>
      </div>

      <Tabs defaultValue="in-progress" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <TabsContent value="in-progress">
          <div className="space-y-4">
            {inProgressCourses.map((course) => (
              <div
                key={course.id}
                className="border rounded-md overflow-hidden bg-card cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onPlayVideo(course.title)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/4 h-40 md:h-auto">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                      </div>
                      <Badge className="self-start md:self-center mt-2 md:mt-0" variant="secondary">
                        {course.category}
                      </Badge>
                    </div>

                    <div className="mt-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${course.progress}%` }}></div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-auto pt-4">
                      <div className="flex items-center text-sm text-muted-foreground mb-2 md:mb-0">
                        <Clock className="h-4 w-4 mr-1" />
                        Last accessed {course.lastAccessed}
                      </div>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation()
                          onPlayVideo(course.title)
                        }}
                      >
                        Continue Learning
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="space-y-4">
            {completedCourses.map((course) => (
              <div
                key={course.id}
                className="border rounded-md overflow-hidden bg-card cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onPlayVideo(course.title)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/4 h-40 md:h-auto">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                      </div>
                      <Badge className="self-start md:self-center mt-2 md:mt-0" variant="secondary">
                        {course.category}
                      </Badge>
                    </div>

                    <div className="mt-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Completed</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: `${course.progress}%` }}></div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-auto pt-4">
                      <div className="flex items-center text-sm text-muted-foreground mb-2 md:mb-0">
                        <span>Completed {course.completedDate}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation()
                            onPlayVideo(course.title)
                          }}
                        >
                          Review Course
                        </Button>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation()
                            onViewCertificate(course.title)
                          }}
                        >
                          View Certificate
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="archived">
          <div className="space-y-4">
            {archivedCourses.map((course) => (
              <div
                key={course.id}
                className="border rounded-md overflow-hidden bg-card cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onPlayVideo(course.title)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/4 h-40 md:h-auto">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                      </div>
                      <Badge className="self-start md:self-center mt-2 md:mt-0" variant="secondary">
                        {course.category}
                      </Badge>
                    </div>

                    <div className="mt-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress before archiving</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${course.progress}%` }}></div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-auto pt-4">
                      <div className="flex items-center text-sm text-muted-foreground mb-2 md:mb-0">
                        <span>Archived {course.archivedDate}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation()
                            onPlayVideo(course.title)
                          }}
                        >
                          Resume Course
                        </Button>
                        <Button variant="secondary" onClick={(e) => e.stopPropagation()}>
                          Unarchive
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


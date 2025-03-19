"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/Librory/dialog"
import { Input } from "@/components/ui/Librory/input"
import { Button } from "@/components/ui/Librory/button"
import { Badge } from "@/components/ui/Librory/badge"
import { Card, CardContent } from "@/components/ui/Librory/card"
import Image from "next/image";

interface AllCoursesProps {
  onClose: () => void
  onPlayVideo: (title: string) => void
}

export function AllCourses({ onClose, onPlayVideo }: AllCoursesProps) {
  const allCourses = [
    {
      id: 1,
      title: "Modern JavaScript: From Fundamentals to Advanced",
      instructor: "Alex Morgan",
      progress: 68,
      category: "Development",
      rating: 4.8,
      reviews: 1240,
      image: "/placeholder.svg?height=200&width=300",
      status: "in-progress",
    },
    {
      id: 2,
      title: "UI/UX Design Principles and Best Practices",
      instructor: "Sarah Johnson",
      progress: 42,
      category: "Design",
      rating: 4.7,
      reviews: 980,
      image: "/placeholder.svg?height=200&width=300",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Data Science and Machine Learning with Python",
      instructor: "Michael Chen",
      progress: 15,
      category: "Data Science",
      rating: 4.9,
      reviews: 1560,
      image: "/placeholder.svg?height=200&width=300",
      status: "in-progress",
    },
    {
      id: 4,
      title: "React.js: Building Modern Web Applications",
      instructor: "Alex Morgan",
      progress: 0,
      category: "Development",
      rating: 4.8,
      reviews: 14280,
      image: "/placeholder.svg?height=200&width=300",
      status: "new",
    },
    {
      id: 5,
      title: "Digital Marketing Strategy Masterclass",
      instructor: "Jessica Williams",
      progress: 0,
      category: "Marketing",
      rating: 4.6,
      reviews: 9870,
      image: "/placeholder.svg?height=200&width=300",
      status: "new",
    },
    {
      id: 6,
      title: "Advanced CSS and Sass: Flexbox, Grid, Animations",
      instructor: "David Miller",
      progress: 0,
      category: "Development",
      rating: 4.7,
      reviews: 8540,
      image: "/placeholder.svg?height=200&width=300",
      status: "new",
    },
    {
      id: 7,
      title: "HTML & CSS Fundamentals",
      instructor: "Jessica Williams",
      progress: 100,
      category: "Development",
      rating: 4.5,
      reviews: 7650,
      image: "/placeholder.svg?height=200&width=300",
      status: "completed",
    },
    {
      id: 8,
      title: "Introduction to Digital Marketing",
      instructor: "Robert Smith",
      progress: 100,
      category: "Marketing",
      rating: 4.4,
      reviews: 5230,
      image: "/placeholder.svg?height=200&width=300",
      status: "completed",
    },
    {
      id: 9,
      title: "Photography Basics",
      instructor: "Emma Davis",
      progress: 35,
      category: "Photography",
      rating: 4.3,
      reviews: 3120,
      image: "/placeholder.svg?height=200&width=300",
      status: "archived",
    },
  ]

  const [searchQuery, setSearchQuery] = useState("")
  const [filteredCourses, setFilteredCourses] = useState(allCourses)

  useEffect(() => {
    let result = allCourses

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.instructor.toLowerCase().includes(query) ||
          course.category.toLowerCase().includes(query),
      )
    }

    setFilteredCourses(result)
  }, [searchQuery, allCourses])

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center justify-between">
            All Courses
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-2">
          <p className="text-sm text-muted-foreground">
            {filteredCourses.length} {filteredCourses.length === 1 ? "course" : "courses"} found
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden border rounded-md cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onPlayVideo(course.title)}
            >
              <div className="h-40 bg-muted relative">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="h-full w-full object-cover"
                  width={300}
                  height={200}
                />
                <Badge variant="secondary" className="absolute top-2 right-2">
                  {course.category}
                </Badge>
                {course.progress > 0 && course.progress < 100 && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                    <div className="h-full bg-primary" style={{ width: `${course.progress}%` }}></div>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold line-clamp-1">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">Instructor: {course.instructor}</p>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center text-yellow-500">
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-xs text-muted-foreground ml-1">({course.reviews.toLocaleString()})</span>
                  </div>
                  {course.progress > 0 ? (
                    <span className="text-xs text-muted-foreground">{course.progress}% complete</span>
                  ) : (
                    <Badge variant="outline">
                      New
                    </Badge>
                  )}
                </div>

                <Button
                  className="w-full mt-4"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    onPlayVideo(course.title)
                  }}
                >
                  {course.progress > 0 && course.progress < 100
                    ? "Continue Learning"
                    : course.progress === 100
                      ? "Review Course"
                      : "Start Course"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <p>No courses found matching your search.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
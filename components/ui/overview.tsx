"use client"

import { ArrowRight, CheckCircle, Clock, FileText, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Librory/card"
import { Button } from "@/components/ui/Librory/button"
import { Badge } from "@/components/ui/Librory/badge"

interface OverviewProps {
  onOpenAllCourses: () => void
  onOpenAllAchievements: () => void
  onOpenCourseDetail: (course: any) => void
  onOpenAchievementDetail: (achievement: any) => void
  onPlayVideo: (title: string) => void
}

export function Overview({
  onOpenAllCourses,
  onOpenAllAchievements,
  onOpenCourseDetail,
  onOpenAchievementDetail,
  onPlayVideo,
}: OverviewProps) {
  const stats = [
    {
      id: "courses",
      label: "Courses Completed",
      value: "5",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      id: "hours",
      label: "Hours Watched",
      value: "87",
      icon: Clock,
      color: "text-blue-500",
    },
    {
      id: "certificates",
      label: "Certificates",
      value: "2",
      icon: FileText,
      color: "text-yellow-500",
    },
    {
      id: "streak",
      label: "Current Streak",
      value: "7 days",
      icon: Zap,
      color: "text-purple-500",
    },
  ]

  const courses = [
    {
      id: 1,
      title: "Modern JavaScript: From Fundamentals to Advanced",
      instructor: "Alex Morgan",
      progress: 68,
      category: "Development",
      lastAccessed: "2 hours ago",
      nextLesson: "Async/Await and Promises",
    },
    {
      id: 2,
      title: "UI/UX Design Principles and Best Practices",
      instructor: "Sarah Johnson",
      progress: 42,
      category: "Design",
      lastAccessed: "Yesterday",
      nextLesson: "Creating User Personas",
    },
    {
      id: 3,
      title: "Data Science and Machine Learning with Python",
      instructor: "Michael Chen",
      progress: 15,
      category: "Data Science",
      lastAccessed: "3 days ago",
      nextLesson: "Introduction to NumPy",
    },
  ]

  const achievements = [
    {
      id: 1,
      title: "Fast Learner",
      description: "Completed 5 lessons in one day",
      date: "Today",
      icon: Zap,
      color: "bg-yellow-500",
      details:
        "You've shown exceptional dedication by completing 5 lessons in a single day. This achievement is awarded to students who demonstrate a strong commitment to learning and make rapid progress.",
    },
    {
      id: 2,
      title: "Consistent Learner",
      description: "Maintained a 7-day learning streak",
      date: "Yesterday",
      icon: CheckCircle,
      color: "bg-green-500",
      details:
        "Consistency is key to mastery! You've maintained your learning streak for 7 consecutive days, showing dedication and forming good learning habits.",
    },
    {
      id: 3,
      title: "Quiz Master",
      description: "Scored 100% on 3 consecutive quizzes",
      date: "Last week",
      icon: FileText,
      color: "bg-purple-500",
      details:
        "Your knowledge retention is impressive! You've scored 100% on 3 consecutive quizzes, demonstrating excellent understanding of the course material.",
    },
  ]

  const recommendedCourses = [
    {
      id: 1,
      title: "React.js: Building Modern Web Applications",
      instructor: "Alex Morgan",
      rating: 4.8,
      reviews: "14,280",
      category: "Development",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Learn to build modern, responsive web applications with React.js. This comprehensive course covers everything from fundamentals to advanced concepts.",
    },
    {
      id: 2,
      title: "Digital Marketing Strategy Masterclass",
      instructor: "Jessica Williams",
      rating: 4.6,
      reviews: "9,870",
      category: "Marketing",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Master digital marketing strategies that drive results. Learn SEO, social media marketing, content strategy, and analytics in this comprehensive masterclass.",
    },
  ]

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome back, Alex!</h1>
        <p className="text-muted-foreground">You're making great progress. Keep up the good work!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.id} className="border rounded-md">
            <CardContent className="p-4 flex items-center gap-4">
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
              <div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Continue Learning</h2>
          <Button variant="ghost" size="sm" className="gap-1" onClick={onOpenAllCourses}>
            View All Courses <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden border rounded-md cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onOpenCourseDetail(course)}
            >
              <div className="h-32 bg-muted flex items-center justify-center relative">
                <Badge variant="secondary" className="absolute top-2 right-2">
                  {course.category}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold line-clamp-1">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">Instructor: {course.instructor}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${course.progress}%` }}></div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t flex justify-between text-xs text-muted-foreground">
                  <div>
                    <p>Last accessed</p>
                    <p>{course.lastAccessed}</p>
                  </div>
                  <div className="text-right">
                    <p>Next:</p>
                    <p>{course.nextLesson}</p>
                  </div>
                </div>

                <Button
                  className="w-full mt-4"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    onPlayVideo(course.title)
                  }}
                >
                  Continue Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Recent Achievements</h2>
          <Button variant="ghost" size="sm" className="gap-1" onClick={onOpenAllAchievements}>
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className="border rounded-md cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onOpenAchievementDetail(achievement)}
            >
              <CardContent className="p-4 flex items-start gap-4">
                <div
                  className={`${achievement.color} h-10 w-10 rounded-full flex items-center justify-center text-white flex-shrink-0`}
                >
                  <achievement.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Recommended For You</h2>
          <Button variant="ghost" size="sm" className="gap-1" onClick={onOpenAllCourses}>
            Browse Courses <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendedCourses.map((course) => (
            <Card
              key={course.id}
              className="flex overflow-hidden border rounded-md cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onPlayVideo(course.title)}
            >
              <div className="w-1/3 bg-muted">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-4 w-2/3">
                <h3 className="font-semibold line-clamp-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground">{course.instructor}</p>

                <div className="flex items-center mt-2">
                  <div className="flex items-center text-yellow-500">
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-xs text-muted-foreground ml-1">({course.reviews})</span>
                  </div>
                </div>

                <Badge variant="outline" className="mt-2">
                  {course.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


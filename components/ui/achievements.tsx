"use client"

import { Share2, CheckCircle, Zap, FileText, Trophy, Lock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Librory/card"
import { Button } from "@/components/ui/Librory/button"
import { Badge } from "@/components/ui/Librory/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Librory/tabs"

interface AchievementsProps {
  onViewAchievementDetail: (achievement: any) => void
  onViewCertificate: (title: string) => void
  onShare: (title: string) => void
}

export function Achievements({ onViewAchievementDetail, onViewCertificate, onShare }: AchievementsProps) {
  const certificates = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      issueDate: "June 15, 2023",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Advanced CSS and Sass",
      issueDate: "March 22, 2023",
      image: "/placeholder.svg?height=200&width=400",
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
      category: "progress",
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
      category: "streak",
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
      category: "assessment",
    },
  ]

  const lockedAchievements = [
    {
      id: 4,
      title: "Course Champion",
      description: "Complete 10 courses to unlock this achievement",
      icon: Trophy,
      color: "bg-gray-400",
    },
  ]

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Achievements & Certificates</h1>
        <p className="text-muted-foreground">Track your learning progress and accomplishments</p>
      </div>

      <Tabs defaultValue="certificates" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="certificates">Your Certificates</TabsTrigger>
          <TabsTrigger value="achievements">Badges & Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="certificates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((certificate) => (
              <Card key={certificate.id} className="overflow-hidden border">
                <div className="h-48 bg-gradient-to-b from-gray-200 to-gray-300 relative">
                  <img
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{certificate.title}</h3>
                  <p className="text-sm text-muted-foreground">Issued on {certificate.issueDate}</p>

                  <div className="flex justify-between mt-4">
                    <Button variant="outline" onClick={() => onViewCertificate(certificate.title)}>
                      View Certificate
                    </Button>
                    <Button variant="ghost" onClick={() => onShare(certificate.title)}>
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <Card
                key={achievement.id}
                className="border rounded-md cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onViewAchievementDetail(achievement)}
              >
                <CardContent className="p-4 flex items-start gap-4">
                  <div
                    className={`${achievement.color} h-10 w-10 rounded-full flex items-center justify-center text-white flex-shrink-0`}
                  >
                    <achievement.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 w-full"
                      onClick={(e) => {
                        e.stopPropagation()
                        onShare(achievement.title)
                      }}
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {lockedAchievements.map((achievement) => (
              <Card key={achievement.id} className="border rounded-md opacity-70">
                <CardContent className="p-4 flex items-start gap-4">
                  <div
                    className={`${achievement.color} h-10 w-10 rounded-full flex items-center justify-center text-white flex-shrink-0`}
                  >
                    <Lock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    <Badge variant="outline" className="mt-2">
                      Locked
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Achievement Progress</h3>
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Total Achievements</span>
                <span className="text-sm font-medium">3/10</span>
              </div>
              <div className="h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: "30%" }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Keep learning to unlock more achievements and badges!
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
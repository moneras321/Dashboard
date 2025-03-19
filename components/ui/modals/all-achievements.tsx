"use client"

import { X, CheckCircle, Zap, FileText, Award, Trophy, Star, Clock } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/Librory/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Librory/tabs"
import { Card, CardContent } from "@/components/ui/Librory/card"

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: React.ElementType;
  color: string;
  details: string;
  category: string;
}

interface AllAchievementsProps {
  onClose: () => void;
  onViewDetail: (achievement: Achievement) => void;
}

export function AllAchievements({ onClose, onViewDetail }: AllAchievementsProps) {
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
    {
      id: 4,
      title: "First Certificate",
      description: "Earned your first course certificate",
      date: "2 weeks ago",
      icon: Award,
      color: "bg-blue-500",
      details:
        "Congratulations on earning your first certificate! This achievement marks the successful completion of your first course and the beginning of your learning journey.",
      category: "completion",
    },
    {
      id: 5,
      title: "Early Bird",
      description: "Completed a lesson before 7 AM",
      date: "3 weeks ago",
      icon: Clock,
      color: "bg-orange-500",
      details:
        "You're an early riser committed to learning! This achievement is awarded to students who start their day with education, completing lessons before 7 AM.",
      category: "special",
    },
    {
      id: 6,
      title: "Night Owl",
      description: "Completed a lesson after 11 PM",
      date: "1 month ago",
      icon: Star,
      color: "bg-indigo-500",
      details:
        "You're dedicated to learning at all hours! This achievement is awarded to students who continue their education late into the night, completing lessons after 11 PM.",
      category: "special",
    },
    {
      id: 7,
      title: "Course Champion",
      description: "Completed a course in the top 10% of students",
      date: "2 months ago",
      icon: Trophy,
      color: "bg-red-500",
      details:
        "You're among the elite learners! This achievement is awarded to students who complete a course faster than 90% of other students while maintaining high assessment scores.",
      category: "completion",
    },
  ]

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center justify-between">
            Achievements
            <button onClick={onClose} className="rounded-full p-1 hover:bg-muted">
              <X className="h-5 w-5" />
            </button>
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="all" className="mt-4">
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="streak">Streaks</TabsTrigger>
            <TabsTrigger value="assessment">Assessments</TabsTrigger>
            <TabsTrigger value="completion">Completion</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className="border rounded-md cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => onViewDetail(achievement)}
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
          </TabsContent>

          {["progress", "streak", "assessment", "completion"].map((category) => (
            <TabsContent key={category} value={category} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements
                  .filter((a) => a.category === category)
                  .map((achievement) => (
                    <Card
                      key={achievement.id}
                      className="border rounded-md cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => onViewDetail(achievement)}
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
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
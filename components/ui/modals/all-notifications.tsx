"use client"

import { X, Bell, CheckCircle, FileText, Award, Calendar } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/Librory/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Librory/tabs"
import { Button } from "@/components/ui/Librory/button"

interface AllNotificationsProps {
  onClose: () => void
}

export function AllNotifications({ onClose }: AllNotificationsProps) {
  const notifications = [
    {
      id: 1,
      title: "New lesson available",
      description: "A new lesson has been added to your JavaScript course",
      time: "10 minutes ago",
      type: "course",
      icon: Bell,
    },
    {
      id: 2,
      title: "Achievement unlocked",
      description: "You've earned the 'Fast Learner' badge!",
      time: "2 hours ago",
      type: "achievement",
      icon: Award,
    },
    {
      id: 3,
      title: "Assignment graded",
      description: "Your latest assignment has been graded",
      time: "3 hours ago",
      type: "course",
      icon: FileText,
    },
    {
      id: 4,
      title: "Course completed",
      description: "Congratulations! You've completed the HTML & CSS Fundamentals course",
      time: "Yesterday",
      type: "course",
      icon: CheckCircle,
    },
    {
      id: 5,
      title: "Upcoming deadline",
      description: "Your project submission is due in 2 days",
      time: "Yesterday",
      type: "reminder",
      icon: Calendar,
    },
    {
      id: 6,
      title: "New certificate available",
      description: "Your certificate for JavaScript Basics is ready to download",
      time: "3 days ago",
      type: "achievement",
      icon: Award,
    },
    {
      id: 7,
      title: "Weekly progress report",
      description: "Check out your learning progress for this week",
      time: "5 days ago",
      type: "reminder",
      icon: Bell,
    },
  ]

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center justify-between">
            Notifications
            <button onClick={onClose} className="rounded-full p-1 hover:bg-muted">
              <X className="h-5 w-5" />
            </button>
          </DialogTitle>
        </DialogHeader>

        <div className="flex justify-between items-center mt-2 mb-4">
          <span className="text-sm text-muted-foreground">{notifications.length} notifications</span>
          <Button variant="ghost" size="sm">
            Mark all as read
          </Button>
        </div>

        <Tabs defaultValue="all" className="mt-4">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="reminders">Reminders</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex gap-3 p-3 hover:bg-muted rounded-md cursor-pointer">
                <div className="flex-shrink-0 mt-1">
                  <notification.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-sm">{notification.title}</p>
                  <p className="text-sm text-muted-foreground">{notification.description}</p>
                  <p className="text-xs text-muted-foreground">{notification.time}</p>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="courses" className="space-y-4">
            {notifications
              .filter((n) => n.type === "course")
              .map((notification) => (
                <div key={notification.id} className="flex gap-3 p-3 hover:bg-muted rounded-md cursor-pointer">
                  <div className="flex-shrink-0 mt-1">
                    <notification.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-sm">{notification.title}</p>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              ))}
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4">
            {notifications
              .filter((n) => n.type === "achievement")
              .map((notification) => (
                <div key={notification.id} className="flex gap-3 p-3 hover:bg-muted rounded-md cursor-pointer">
                  <div className="flex-shrink-0 mt-1">
                    <notification.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-sm">{notification.title}</p>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              ))}
          </TabsContent>

          <TabsContent value="reminders" className="space-y-4">
            {notifications
              .filter((n) => n.type === "reminder")
              .map((notification) => (
                <div key={notification.id} className="flex gap-3 p-3 hover:bg-muted rounded-md cursor-pointer">
                  <div className="flex-shrink-0 mt-1">
                    <notification.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-sm">{notification.title}</p>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              ))}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}


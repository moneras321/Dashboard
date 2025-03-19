"use client"

import { Bell, Moon, Play } from "lucide-react"
import { Button } from "@/components/ui/Librory/button"
import { Switch } from "@/components/ui/Librory/switch"

interface RightSidebarProps {
  onOpenAllSettings: () => void
  onOpenAllNotifications: () => void
  emailNotifications: boolean
  setEmailNotifications: (value: boolean) => void
  darkMode: boolean
  toggleDarkMode: () => void
  autoplayVideos: boolean
  setAutoplayVideos: (value: boolean) => void
}

export function RightSidebar({
  onOpenAllSettings,
  onOpenAllNotifications,
  emailNotifications,
  setEmailNotifications,
  darkMode,
  toggleDarkMode,
  autoplayVideos,
  setAutoplayVideos,
}: RightSidebarProps) {
  const notifications = [
    {
      id: 1,
      title: "Assignment graded",
      description: "Your UI/UX project has been graded. You scored 95%!",
      time: "Yesterday",
    },
    {
      id: 2,
      title: "New message from instructor",
      description: "Sarah Johnson: Great question! Let me explain...",
      time: "2 days ago",
    },
  ]

  return (
    <div className="w-[300px] border-l shrink-0 h-screen sticky top-0 overflow-y-auto bg-background lg:block hidden">
      <div className="flex flex-col h-full">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <Button variant="ghost" size="sm" className="text-xs">
            Mark all as read
          </Button>
        </div>

        <div className="p-4 space-y-4 flex-1">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-sm">{notification.title}</p>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
                <p className="text-xs text-muted-foreground">{notification.time}</p>
              </div>
            </div>
          ))}

          <Button variant="outline" className="w-full mt-4" size="sm" onClick={onOpenAllNotifications}>
            View All Notifications
          </Button>

          <div className="h-px bg-border my-6" />

          <div className="space-y-4">
            <h3 className="font-semibold">Learning Streak</h3>
            <p className="text-sm text-muted-foreground">You&apos;re on a 7-day streak!</p>

            <div className="flex justify-between">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                <div key={day} className="flex flex-col items-center gap-2">
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center ${i <= 6 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                  >
                    {i + 1}
                  </div>
                  <span className="text-xs">{day}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-center text-muted-foreground mt-2">
              Keep learning daily to maintain your streak!
            </p>
          </div>

          <div className="h-px bg-border my-6" />

          <div className="space-y-4">
            <h3 className="font-semibold">Quick Settings</h3>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span className="text-sm">Email Notifications</span>
              </div>
              <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Moon className="h-4 w-4" />
                <span className="text-sm">Dark Mode</span>
              </div>
              <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                <span className="text-sm">Autoplay Videos</span>
              </div>
              <Switch checked={autoplayVideos} onCheckedChange={setAutoplayVideos} />
            </div>

            <Button variant="ghost" className="w-full" size="sm" onClick={onOpenAllSettings}>
              All Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


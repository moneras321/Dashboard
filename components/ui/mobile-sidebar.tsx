"use client"

import { Bell, Moon, Play } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/Librory/switch"
import { Button } from "@/components/ui/Librory/button"

interface MobileSidebarProps {
  onOpenAllSettings: () => void
  onOpenAllNotifications: () => void
}

export function MobileSidebar({ onOpenAllSettings, onOpenAllNotifications }: MobileSidebarProps) {
  const { theme, setTheme } = useTheme()

  const notifications = [
    {
      id: 1,
      title: "New lesson available",
      description: "A new lesson has been added to your JavaScript course",
      time: "10 minutes ago",
    },
    {
      id: 2,
      title: "Achievement unlocked",
      description: "You've earned the 'Fast Learner' badge!",
      time: "2 hours ago",
    },
    {
      id: 3,
      title: "Assignment graded",
      description: "Your latest assignment has been graded",
      time: "3 hours ago",
    },
  ]

  return (
    <div className="border-t lg:hidden">
      <div className="p-4 space-y-6 bg-background">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Notifications</h2>
            <Button variant="ghost" size="sm" className="text-xs">
              Mark all as read
            </Button>
          </div>

          <div className="space-y-4">
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
          </div>
        </div>

        <div className="h-px bg-border" />

        <div className="space-y-4">
          <h3 className="font-semibold">Learning Streak</h3>
          <p className="text-sm text-muted-foreground">You're on a 7-day streak!</p>

          <div className="flex justify-between">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
              <div key={day} className="flex flex-col items-center gap-2">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center ${i <= 4 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  {i + 1}
                </div>
                <span className="text-xs">{day}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-center text-muted-foreground mt-2">Keep learning daily to maintain your streak!</p>
        </div>

        <div className="h-px bg-border" />

        <div className="space-y-4">
          <h3 className="font-semibold">Quick Settings</h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span className="text-sm">Email Notifications</span>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Moon className="h-4 w-4" />
              <span className="text-sm">Dark Mode</span>
            </div>
            <Switch checked={theme === "dark"} onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              <span className="text-sm">Autoplay Videos</span>
            </div>
            <Switch />
          </div>

          <Button variant="ghost" className="w-full" size="sm" onClick={onOpenAllSettings}>
            All Settings
          </Button>
        </div>
      </div>
    </div>
  )
}
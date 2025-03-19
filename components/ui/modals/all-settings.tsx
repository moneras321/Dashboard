"use client"

import { X, Bell, Moon, Play, Volume2, Globe, Lock, Eye, Clock, Laptop } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/Librory/dialog"
import { Switch } from "@/components/ui/Librory/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Librory/tabs"
import { useTheme } from "next-themes"

interface AllSettingsProps {
  onClose: () => void
}

export function AllSettings({ onClose }: AllSettingsProps) {
  const { theme, setTheme } = useTheme()

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center justify-between">
            Settings
            <button onClick={onClose} className="rounded-full p-1 hover:bg-muted">
              <X className="h-5 w-5" />
            </button>
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="general" className="mt-4">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <div className="space-y-4">
              <h3 className="font-medium">Learning Preferences</h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  <span className="text-sm">Autoplay Videos</span>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4" />
                  <span className="text-sm">Mute Video Sound</span>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Show Estimated Time</span>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t">
              <h3 className="font-medium">Language & Region</h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">Language</span>
                </div>
                <select className="text-sm bg-background border rounded-md px-2 py-1">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <div className="space-y-4">
              <h3 className="font-medium">Email Notifications</h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  <span className="text-sm">Course Updates</span>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  <span className="text-sm">New Achievements</span>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  <span className="text-sm">Promotions and Offers</span>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  <span className="text-sm">Learning Reminders</span>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t">
              <h3 className="font-medium">In-App Notifications</h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  <span className="text-sm">Course Updates</span>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  <span className="text-sm">New Achievements</span>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-4">
            <div className="space-y-4">
              <h3 className="font-medium">Privacy Settings</h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span className="text-sm">Show Profile to Others</span>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  <span className="text-sm">Two-Factor Authentication</span>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span className="text-sm">Share Learning Activity</span>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-4">
            <div className="space-y-4">
              <h3 className="font-medium">Theme</h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Moon className="h-4 w-4" />
                  <span className="text-sm">Dark Mode</span>
                </div>
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Laptop className="h-4 w-4" />
                  <span className="text-sm">Use System Theme</span>
                </div>
                <Switch
                  checked={theme === "system"}
                  onCheckedChange={(checked) => setTheme(checked ? "system" : "light")}
                />
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t">
              <h3 className="font-medium">Font Size</h3>

              <div className="flex items-center gap-4">
                <span className="text-sm">A</span>
                <input type="range" className="flex-1" min="1" max="3" step="1" defaultValue="2" />
                <span className="text-lg">A</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}


"use client"

import {
  BarChart,
  BookOpen,
  Calendar,
  HelpCircle,
  MessageSquare,
  Settings,
  Trophy,
  User,
  CreditCard,
  LogOut,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Librory/button"

interface LeftSidebarProps {
  currentView: string
  setCurrentView: (view: string) => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function LeftSidebar({ currentView, setCurrentView, isOpen, setIsOpen }: LeftSidebarProps) {
  const dashboardItems = [
    { id: "overview", label: "Overview", icon: BarChart },
    { id: "courses", label: "My Courses", icon: BookOpen },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "calendar", label: "Calendar", icon: Calendar },
  ]

  const accountItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "billing", label: "Billing", icon: CreditCard },
  ]

  const supportItems = [
    { id: "help", label: "Help Center", icon: HelpCircle },
    { id: "messages", label: "Messages", icon: MessageSquare },
  ]

  const handleItemClick = (id: string) => {
    setCurrentView(id)
    // Close sidebar on mobile when an item is clicked
    if (window.innerWidth < 1024) {
      setIsOpen(false)
    }
  }

  return (
    <div
      className={cn(
        "w-[204px] border-r shrink-0 h-screen bg-background z-20",
        "fixed top-0 left-0 transition-transform duration-300 ease-in-out",
        "lg:relative lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="flex flex-col h-">
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="lg:hidden h-8 w-8">
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>

        <nav className="flex-1 px-2 space-y-2">
          {dashboardItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={cn(
                "flex items-center w-full gap-3 px-3 py-2 text-sm rounded-md",
                currentView === item.id
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-foreground hover:bg-muted",
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="px-4 py-2 mt-4">
          <div className="h-px bg-border" />
        </div>

        <div className="px-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Account</h3>
        </div>

        <nav className="px-2 space-y-1">
          {accountItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={cn(
                "flex items-center w-full gap-3 px-3 py-2 text-sm rounded-md",
                currentView === item.id
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-foreground hover:bg-muted",
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="px-4 py-2 mt-4">
          <div className="h-px bg-border" />
        </div>

        <div className="px-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Support</h3>
        </div>

        <nav className="px-2 space-y-1">
          {supportItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={cn(
                "flex items-center w-full gap-3 px-3 py-2 text-sm rounded-md",
                currentView === item.id
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-foreground hover:bg-muted",
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto p-4">
          <button className="flex items-center w-full gap-3 px-3 py-2 text-sm rounded-md text-destructive hover:bg-destructive/10">
            <LogOut className="h-5 w-5" />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  )
}
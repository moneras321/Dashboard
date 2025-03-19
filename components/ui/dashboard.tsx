"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { LeftSidebar } from "./left-sidebar"
import { RightSidebar } from "./right-sidebar"
import { Overview } from "./overview"
import { MyCourses } from "./my-courses"
import { Achievements } from "./achievements"
import { Calendar } from "./calendar"
import { Profile } from "./profile"
import { Settings } from "./settings"
import { Billing } from "./billing"
import { HelpCenter } from "./help-center"
import { Messages } from "./messages"
import { Button } from "@/components/ui/Librory/button"
import { AllSettings } from "./modals/all-settings"
import { AllNotifications } from "./modals/all-notifications"
import { AllCourses } from "./modals/all-courses"
import { AllAchievements } from "./modals/all-achievements"
import { CourseDetail } from "./modals/course-detail"
import { AchievementDetail } from "./modals/achievement-detail"
import { VideoPlayer } from "./modals/video-player"
import { CertificateViewer } from "./modals/certificate-viewer"
import { useTheme } from "next-themes"

export function Dashboard() {
  const [currentView, setCurrentView] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  // Modal states
  const [showAllSettings, setShowAllSettings] = useState(false)
  const [showAllNotifications, setShowAllNotifications] = useState(false)
  const [showAllCourses, setShowAllCourses] = useState(false)
  const [showAllAchievements, setShowAllAchievements] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<any>(null)
  const [selectedAchievement, setSelectedAchievement] = useState<any>(null)
  const [showVideoPlayer, setShowVideoPlayer] = useState(false)
  const [videoTitle, setVideoTitle] = useState("")
  const [showCertificate, setShowCertificate] = useState(false)
  const [certificateTitle, setCertificateTitle] = useState("")

  // Settings state
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [autoplayVideos, setAutoplayVideos] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const openVideoPlayer = (title: string) => {
    setVideoTitle(title)
    setShowVideoPlayer(true)
  }

  const openCertificate = (title: string) => {
    setCertificateTitle(title)
    setShowCertificate(true)
  }

  const handleShare = (title: string) => {
    // In a real app, this would use the Web Share API or create a shareable link
    alert(`Sharing "${title}" with your network!`)
  }

  // Toggle dark mode
  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Add course to My Courses
  const addCourseToMyCourses = (course: any) => {
    // In a real app, this would add the course to the user's courses
    alert(`Course "${course.title}" has been added to your courses!`)
  }

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Mobile sidebar toggle - only show when sidebar is closed */}
      {!sidebarOpen && (
        <div className="lg:hidden fixed top-0 left-0 z-30 p-4">
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="h-10 w-10">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      )}

      {/* Mobile overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={toggleSidebar} />}

      {/* Left sidebar */}
      <LeftSidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Main content */}
      <main className="flex-1 border-x overflow-y-auto pt-16 lg:pt-0">
        {currentView === "overview" && (
          <Overview
            onOpenAllCourses={() => setShowAllCourses(true)}
            onOpenAllAchievements={() => setShowAllAchievements(true)}
            onOpenCourseDetail={(course) => setSelectedCourse(course)}
            onOpenAchievementDetail={(achievement) => setSelectedAchievement(achievement)}
            onPlayVideo={openVideoPlayer}
          />
        )}
        {currentView === "courses" && (
          <MyCourses
            onPlayVideo={openVideoPlayer}
            onOpenAllCourses={() => setShowAllCourses(true)}
            onViewCertificate={openCertificate}
          />
        )}
        {currentView === "achievements" && (
          <Achievements
            onViewAchievementDetail={(achievement) => setSelectedAchievement(achievement)}
            onViewCertificate={openCertificate}
            onShare={handleShare}
          />
        )}
        {currentView === "calendar" && <Calendar />}
        {currentView === "profile" && <Profile />}
        {currentView === "settings" && (
          <Settings
            emailNotifications={emailNotifications}
            setEmailNotifications={setEmailNotifications}
            darkMode={theme === "dark"}
            toggleDarkMode={toggleDarkMode}
            autoplayVideos={autoplayVideos}
            setAutoplayVideos={setAutoplayVideos}
          />
        )}
        {currentView === "billing" && <Billing onPurchaseCourse={addCourseToMyCourses} />}
        {currentView === "help" && <HelpCenter />}
        {currentView === "messages" && <Messages />}
      </main>

      {/* Right sidebar - only visible on desktop */}
      <RightSidebar
        onOpenAllSettings={() => setShowAllSettings(true)}
        onOpenAllNotifications={() => setShowAllNotifications(true)}
        emailNotifications={emailNotifications}
        setEmailNotifications={setEmailNotifications}
        darkMode={theme === "dark"}
        toggleDarkMode={toggleDarkMode}
        autoplayVideos={autoplayVideos}
        setAutoplayVideos={setAutoplayVideos}
      />

      {/* Mobile sidebar content - appears below main content on mobile */}
      <div className="lg:hidden border-t">
        <div className="p-4 space-y-6 bg-background">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Notifications</h2>
              <Button variant="ghost" size="sm" className="text-xs">
                Mark all as read
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-sm">Assignment graded</p>
                  <p className="text-sm text-muted-foreground">Your UI/UX project has been graded. You scored 95%!</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-sm">New message from instructor</p>
                  <p className="text-sm text-muted-foreground">Sarah Johnson: Great question! Let me explain...</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4" size="sm" onClick={() => setShowAllNotifications(true)}>
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

          <div className="h-px bg-border" />

          <div className="space-y-4">
            <h3 className="font-semibold">Quick Settings</h3>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm">Email Notifications</span>
              </div>
              <button
                onClick={() => setEmailNotifications(!emailNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${emailNotifications ? "bg-primary" : "bg-input"}`}
              >
                <span
                  className={`inline-block h-5 w-5 rounded-full bg-background transition-transform ${emailNotifications ? "translate-x-5" : "translate-x-0"}`}
                ></span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm">Dark Mode</span>
              </div>
              <button
                onClick={toggleDarkMode}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${theme === "dark" ? "bg-primary" : "bg-input"}`}
              >
                <span
                  className={`inline-block h-5 w-5 rounded-full bg-background transition-transform ${theme === "dark" ? "translate-x-5" : "translate-x-0"}`}
                ></span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm">Autoplay Videos</span>
              </div>
              <button
                onClick={() => setAutoplayVideos(!autoplayVideos)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${autoplayVideos ? "bg-primary" : "bg-input"}`}
              >
                <span
                  className={`inline-block h-5 w-5 rounded-full bg-background transition-transform ${autoplayVideos ? "translate-x-5" : "translate-x-0"}`}
                ></span>
              </button>
            </div>

            <Button variant="ghost" className="w-full" size="sm" onClick={() => setShowAllSettings(true)}>
              All Settings
            </Button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showAllSettings && <AllSettings onClose={() => setShowAllSettings(false)} />}
      {showAllNotifications && <AllNotifications onClose={() => setShowAllNotifications(false)} />}
      {showAllCourses && <AllCourses onClose={() => setShowAllCourses(false)} onPlayVideo={openVideoPlayer} />}
      {showAllAchievements && (
        <AllAchievements
          onClose={() => setShowAllAchievements(false)}
          onViewDetail={(achievement) => {
            setSelectedAchievement(achievement)
            setShowAllAchievements(false)
          }}
        />
      )}
      {selectedCourse && (
        <CourseDetail course={selectedCourse} onClose={() => setSelectedCourse(null)} onPlayVideo={openVideoPlayer} />
      )}
      {selectedAchievement && (
        <AchievementDetail
          achievement={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
          onViewCertificate={openCertificate}
          onShare={() => handleShare(selectedAchievement.title)}
        />
      )}
      {showVideoPlayer && <VideoPlayer title={videoTitle} onClose={() => setShowVideoPlayer(false)} />}
      {showCertificate && (
        <CertificateViewer
          title={certificateTitle}
          onClose={() => setShowCertificate(false)}
          onShare={() => handleShare(certificateTitle)}
        />
      )}
    </div>
  )
}


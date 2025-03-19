"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, CalendarIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Librory/card"
import { Button } from "@/components/ui/Librory/button"
import { Badge } from "@/components/ui/Librory/badge"

export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Get current month and year
  const month = currentMonth.toLocaleString("default", { month: "long" })
  const year = currentMonth.getFullYear()

  // Generate calendar days
  const generateCalendarDays = () => {
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
    const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
    const daysInMonth = lastDayOfMonth.getDate()
    const startDay = firstDayOfMonth.getDay() // 0 = Sunday, 1 = Monday, etc.

    // Get days from previous month to fill the first row
    const prevMonthDays = []
    const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0)
    const prevMonthDaysCount = prevMonth.getDate()

    for (let i = startDay - 1; i >= 0; i--) {
      prevMonthDays.push({
        date: prevMonthDaysCount - i,
        isCurrentMonth: false,
        hasEvent: false,
      })
    }

    // Current month days
    const currentMonthDays = []
    for (let i = 1; i <= daysInMonth; i++) {
      // Check if this day has an event (for demo purposes)
      const hasEvent = [5, 12, 15, 22].includes(i)
      const isToday =
        new Date().getDate() === i &&
        new Date().getMonth() === currentMonth.getMonth() &&
        new Date().getFullYear() === currentMonth.getFullYear()

      currentMonthDays.push({
        date: i,
        isCurrentMonth: true,
        hasEvent,
        isToday,
      })
    }

    // Next month days to fill the last row
    const nextMonthDays = []
    const totalDaysShown = prevMonthDays.length + currentMonthDays.length
    const remainingCells = 42 - totalDaysShown // 6 rows x 7 days = 42 cells

    for (let i = 1; i <= remainingCells; i++) {
      nextMonthDays.push({
        date: i,
        isCurrentMonth: false,
        hasEvent: false,
      })
    }

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays]
  }

  const calendarDays = generateCalendarDays()

  // Navigate to previous month
  const goToPrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Format date as "Month Day, Year"
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  // Sample deadlines
  const deadlines = [
    {
      id: 1,
      title: "JavaScript Project Submission",
      course: "Modern JavaScript",
      date: "Mar 15",
      time: "12:00 AM",
      type: "assignment",
      color: "bg-red-500",
    },
    {
      id: 2,
      title: "Live Q&A with UI/UX Instructor",
      course: "UI/UX Design Principles",
      date: "Mar 18",
      time: "12:00 AM",
      type: "live-session",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Data Science Quiz",
      course: "Data Science and Machine Learning",
      date: "Mar 22",
      time: "11:59 PM",
      type: "quiz",
      color: "bg-blue-500",
    },
  ]

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Calendar & Deadlines</h1>
        <p className="text-muted-foreground">Keep track of your upcoming deadlines, live sessions, and assignments</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Course Schedule</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Keep track of your upcoming deadlines, live sessions, and assignments
              </p>

              <div className="flex items-center justify-between mb-4">
                <Button variant="outline" size="icon" onClick={goToPrevMonth}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <h3 className="text-lg font-medium">
                  {month} {year}
                </h3>
                <Button variant="outline" size="icon" onClick={goToNextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-7 gap-1">
                {/* Day headers */}
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <div key={day} className="text-center text-sm font-medium py-2">
                    {day}
                  </div>
                ))}

                {/* Calendar days */}
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`
                      relative h-12 border rounded-md flex items-center justify-center cursor-pointer
                      ${!day.isCurrentMonth ? "text-muted-foreground opacity-50" : ""}
                      ${day.isToday ? "bg-primary/10 font-bold" : ""}
                      ${day.hasEvent ? "font-semibold" : ""}
                      ${selectedDate.getDate() === day.date && day.isCurrentMonth ? "bg-primary text-primary-foreground" : ""}
                      hover:bg-muted
                    `}
                    onClick={() =>
                      day.isCurrentMonth &&
                      setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day.date))
                    }
                  >
                    <span>{day.date}</span>
                    {day.hasEvent && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-primary"></div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Events for {formatDate(selectedDate)}</h2>

              <div className="flex flex-col items-center justify-center py-8 text-center">
                <CalendarIcon className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No events scheduled</h3>
                <p className="text-sm text-muted-foreground mt-1">There are no events scheduled for this day.</p>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-xl font-semibold mt-6 mb-4">Upcoming Deadlines</h2>

          <div className="space-y-3">
            {deadlines.map((deadline) => (
              <Card key={deadline.id} className="overflow-hidden">
                <div className="flex border-l-4" style={{ borderColor: deadline.color.replace("bg-", "") }}>
                  <CardContent className="p-4 flex-1">
                    <h3 className="font-medium">{deadline.title}</h3>
                    <p className="text-sm text-muted-foreground">{deadline.course}</p>
                    <div className="flex justify-between items-center mt-2">
                      <Badge variant="outline">{deadline.type}</Badge>
                      <p className="text-sm font-medium">
                        {deadline.date} • {deadline.time}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
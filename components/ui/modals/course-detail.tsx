"use client"

import { X, Play, Clock, Calendar, User, BarChart } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/Librory/dialog";
import { Button } from "@/components/ui/Librory/button";
import { Badge } from "@/components/ui/Librory/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Librory/tabs";
import Image from "next/image";

interface CourseDetailProps {
  course: {
    id: number;
    title: string;
    description: string;
    instructor: string;
    category: string;
    progress: number;
    rating: number;
  };
  onClose: () => void;
  onPlayVideo: (title: string) => void;
}

export function CourseDetail({ course, onClose, onPlayVideo }: CourseDetailProps) {
  const lessons = [
    { id: 1, title: "Introduction to the Course", duration: "10:15", completed: true },
    { id: 2, title: "Setting Up Your Environment", duration: "15:30", completed: true },
    { id: 3, title: "Basic Concepts and Syntax", duration: "20:45", completed: true },
    { id: 4, title: "Working with Functions", duration: "25:10", completed: course.progress >= 50 },
    { id: 5, title: "Async/Await and Promises", duration: "30:20", completed: false },
    { id: 6, title: "Error Handling", duration: "18:40", completed: false },
    { id: 7, title: "Advanced Techniques", duration: "22:15", completed: false },
    { id: 8, title: "Project: Building a Real Application", duration: "45:30", completed: false },
    { id: 9, title: "Testing and Debugging", duration: "28:15", completed: false },
    { id: 10, title: "Course Conclusion and Next Steps", duration: "15:45", completed: false },
  ];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center justify-between">
            Course Details
            <button onClick={onClose} className="rounded-full p-1 hover:bg-muted">
              <X className="h-5 w-5" />
            </button>
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          <div className="h-48 bg-muted rounded-md relative mb-4">
            <Image
              src="/placeholder.svg?height=300&width=800"
              alt={course.title}
              className="h-full w-full object-cover rounded-md"
              width={800}
              height={300}
            />
            <Badge variant="secondary" className="absolute top-2 right-2">
              {course.category}
            </Badge>
            <Button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              size="lg"
              onClick={() => onPlayVideo(course.title)}
            >
              <Play className="mr-2 h-5 w-5" /> Play Course
            </Button>
          </div>

          <h2 className="text-2xl font-bold">{course.title}</h2>
          <p className="text-muted-foreground mt-1">Instructor: {course.instructor}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

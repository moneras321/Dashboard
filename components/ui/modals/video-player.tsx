"use client"

import { X, Maximize2, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Settings } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/Librory/dialog"
import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/Librory/slider"

interface VideoPlayerProps {
  title: string
  onClose: () => void
}

export function VideoPlayer({ title, onClose }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(300) // 5 minutes in seconds

  // Simulate video progress
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= duration) {
          setIsPlaying(false)
          return duration
        }
        return prev + 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isPlaying, duration])

  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const togglePlay = () => setIsPlaying(!isPlaying)
  const toggleMute = () => setIsMuted(!isMuted)

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden">
        <div className="relative">
          {/* Video container */}
          <div className="bg-black aspect-video flex items-center justify-center">
            <div className="text-white text-center">
              <p className="text-lg font-medium mb-2">{title}</p>
              <p className="text-sm text-gray-400">Video is playing in simulation mode</p>
            </div>
          </div>

          {/* Video controls overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {/* Progress bar */}
            <div className="mb-2">
              <Slider
                value={[currentTime]}
                max={duration}
                step={1}
                onValueChange={(value) => setCurrentTime(value[0])}
                className="cursor-pointer"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="text-white p-1 rounded-full hover:bg-white/20">
                  <SkipBack className="h-5 w-5" />
                </button>

                <button className="text-white p-2 rounded-full hover:bg-white/20" onClick={togglePlay}>
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </button>

                <button className="text-white p-1 rounded-full hover:bg-white/20">
                  <SkipForward className="h-5 w-5" />
                </button>

                <div className="text-white text-sm ml-2">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="text-white p-1 rounded-full hover:bg-white/20" onClick={toggleMute}>
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </button>

                <button className="text-white p-1 rounded-full hover:bg-white/20">
                  <Settings className="h-5 w-5" />
                </button>

                <button className="text-white p-1 rounded-full hover:bg-white/20">
                  <Maximize2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white p-1 rounded-full bg-black/50 hover:bg-black/70"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}


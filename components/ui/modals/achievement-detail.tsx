"use client"

import { X, Share2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/Librory/dialog"
import { Button } from "@/components/ui/Librory/button"

interface AchievementDetailProps {
  achievement: any
  onClose: () => void
  onViewCertificate?: (title: string) => void
  onShare: () => void
}

export function AchievementDetail({ achievement, onClose, onViewCertificate, onShare }: AchievementDetailProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center justify-between">
            Achievement Details
            <button onClick={onClose} className="rounded-full p-1 hover:bg-muted">
              <X className="h-5 w-5" />
            </button>
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center py-6">
          <div
            className={`${achievement.color} h-24 w-24 rounded-full flex items-center justify-center text-white mb-4`}
          >
            <achievement.icon className="h-12 w-12" />
          </div>

          <h2 className="text-2xl font-bold text-center">{achievement.title}</h2>
          <p className="text-muted-foreground text-center mt-2">{achievement.description}</p>
          <p className="text-sm text-muted-foreground mt-1">Earned: {achievement.date}</p>

          <div className="mt-6 text-center">
            <p className="text-sm">{achievement.details}</p>
          </div>

          <div className="mt-8 flex gap-4">
            <Button variant="outline" className="gap-2" onClick={onShare}>
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            {onViewCertificate && (
              <Button onClick={() => onViewCertificate(achievement.title)}>View Certificate</Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}


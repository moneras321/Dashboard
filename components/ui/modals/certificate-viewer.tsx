"use client"

import { X, Download, Share2 } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/Librory/dialog"
import { Button } from "@/components/ui/Librory/button"

interface CertificateViewerProps {
  title: string
  onClose: () => void
  onShare: () => void
}

export function CertificateViewer({ title, onClose, onShare }: CertificateViewerProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <div className="relative">
          {/* Certificate display */}
          <div className="bg-white p-8">
            <div className="border-8 border-double border-gray-300 p-8 text-center">
              <div className="mb-6">
                <h2 className="text-3xl font-serif mb-2">Certificate of Completion</h2>
                <div className="h-px bg-gray-300 w-full my-4"></div>
                <p className="text-lg">This certifies that</p>
                <p className="text-2xl font-bold my-2">Alex Johnson</p>
                <p className="text-lg">has successfully completed</p>
                <p className="text-2xl font-bold my-4">{title}</p>
                <div className="h-px bg-gray-300 w-full my-4"></div>
                <div className="flex justify-between items-center mt-8">
                  <div className="text-left">
                    <p className="text-sm">Date Issued</p>
                    <p className="font-medium">June 15, 2023</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Certificate ID</p>
                    <p className="font-medium">CERT-12345-ABC</p>
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <img src="/placeholder.svg?height=60&width=120" alt="Certificate Seal" className="h-16" />
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4 flex justify-between">
            <Button variant="outline" className="gap-2 bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Download className="h-4 w-4" />
              Download
            </Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="gap-2 bg-white/10 text-white border-white/20 hover:bg-white/20"
                onClick={onShare}
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
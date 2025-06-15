"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { Eye, Download, Trash2, ImageIcon, Check } from "lucide-react"
import { formatDate, downloadImage } from "@/lib/utils"
import { VisibilityToggle } from "@/components/dashboard/visibility-toggle"
import { ImagePreviewModal } from "@/components/ui/image-preview-modal"
import { ConfirmationDialog } from "@/components/ui/confirmation-dialog"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface ImageCardProps {
  id: string
  imageUrl: string
  aspectRatio: string
  createdAt: string
  isPublic?: boolean
  showVisibilityToggle?: boolean
  showDeleteButton?: boolean
  isDeleting?: boolean
  originalImageUrl?: string | null
  tableType?: "images" | "gemini_images"
  selectable?: boolean
  isSelected?: boolean
  onVisibilityToggle?: (isPublic: boolean) => void
  onDelete?: (id: string) => Promise<void>
  onSelectToggle?: () => void
}

export function ImageCard({
  id,
  imageUrl,
  aspectRatio,
  createdAt,
  isPublic = false,
  showVisibilityToggle = false,
  showDeleteButton = false,
  isDeleting = false,
  originalImageUrl,
  tableType = "images",
  selectable = false,
  isSelected = false,
  onVisibilityToggle,
  onDelete,
  onSelectToggle,
}: ImageCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [isOriginalPreviewOpen, setIsOriginalPreviewOpen] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const filename = `coloring-page-${Date.now()}.png`

    try {
      await downloadImage(imageUrl, filename)
      toast.success("Image downloaded successfully! 🎨")
    } catch (error) {
      console.error("Download error:", error)
      toast.error("Failed to download image")
    }
  }

  const handlePreview = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsPreviewOpen(true)
  }

  const handleOriginalPreview = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOriginalPreviewOpen(true)
  }

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDeleteDialogOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (onDelete) {
      await onDelete(id)
    }
  }

  const handleCardClick = () => {
    if (selectable && onSelectToggle) {
      onSelectToggle()
    }
  }

  return (
    <>
      <Card
        className={cn(
          "group overflow-hidden w-full h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white border border-gray-100",
          isDeleting ? "opacity-50" : "",
          selectable ? "cursor-pointer" : "",
          selectable && isSelected ? "ring-2 ring-pastel-pink shadow-lg" : "",
        )}
        onClick={handleCardClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`relative overflow-hidden ${
            aspectRatio === "portrait" ? "aspect-[3/4]" : aspectRatio === "landscape" ? "aspect-[4/3]" : "aspect-square"
          }`}
        >
          {/* Loading State */}
          {(!imageLoaded || isDeleting) && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink/20 to-orange-400/20 rounded-xl flex items-center justify-center">
                <Icons.spinner className="h-6 w-6 animate-spin text-pastel-pink" />
              </div>
            </div>
          )}

          {/* Main Image */}
          <img
            src={imageUrl || "/placeholder.svg"}
            alt="Coloring page"
            className={cn(
              "object-cover w-full h-full transition-all duration-500 group-hover:scale-105",
              imageLoaded && !isDeleting ? "opacity-100" : "opacity-0",
            )}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />

          {/* Gradient Overlay on Hover */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0",
            )}
          />

          {/* Selection Indicator */}
          {selectable && isSelected && (
            <div className="absolute top-3 left-3 bg-pastel-pink text-white rounded-full p-2 shadow-lg animate-in zoom-in-50 duration-200">
              <Check className="h-4 w-4" />
            </div>
          )}

          {/* Action Buttons */}
          {!selectable && (
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300",
                isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
            >
              <Button
                size="icon"
                className="h-11 w-11 rounded-full bg-white/95 text-gray-700 hover:bg-white hover:text-pastel-pink shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105"
                onClick={handlePreview}
                aria-label="Preview image"
                disabled={isDeleting}
              >
                <Eye className="h-5 w-5" />
              </Button>

              <Button
                size="icon"
                className="h-11 w-11 rounded-full bg-white/95 text-gray-700 hover:bg-white hover:text-green-600 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105"
                onClick={handleDownload}
                aria-label="Download image"
                disabled={isDeleting}
              >
                <Download className="h-5 w-5" />
              </Button>

              {originalImageUrl && (
                <Button
                  size="icon"
                  className="h-11 w-11 rounded-full bg-white/95 text-gray-700 hover:bg-white hover:text-blue-600 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105"
                  onClick={handleOriginalPreview}
                  aria-label="View original image"
                  disabled={isDeleting}
                >
                  <ImageIcon className="h-5 w-5" />
                </Button>
              )}
            </div>
          )}

          {/* Delete Button */}
          {showDeleteButton && !selectable && (
            <div className="absolute top-3 left-3">
              <Button
                size="icon"
                className="h-9 w-9 rounded-full bg-white/95 text-red-500 hover:bg-red-500 hover:text-white shadow-md backdrop-blur-sm transition-all duration-200"
                onClick={handleDeleteClick}
                aria-label="Delete image"
                disabled={isDeleting}
              >
                {isDeleting ? <Icons.spinner className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
              </Button>
            </div>
          )}
        </div>

        {/* Card Footer */}
        <CardFooter className="p-4 bg-white">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">{formatDate(createdAt)}</span>
              <span className="text-xs text-gray-400 capitalize mt-1">{aspectRatio} format</span>
            </div>

            {showVisibilityToggle && !selectable && (
              <VisibilityToggle
                imageId={id}
                isPublic={isPublic}
                onToggle={onVisibilityToggle}
                disabled={isDeleting}
                tableType={tableType}
              />
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Modals */}
      <ImagePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        imageUrl={imageUrl}
        prompt="Coloring page"
      />

      {originalImageUrl && (
        <ImagePreviewModal
          isOpen={isOriginalPreviewOpen}
          onClose={() => setIsOriginalPreviewOpen(false)}
          imageUrl={originalImageUrl}
          prompt="Original Image"
        />
      )}

      <ConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Image"
        description="Are you sure you want to delete this image? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        variant="destructive"
      />
    </>
  )
}

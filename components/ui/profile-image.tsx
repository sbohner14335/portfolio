"use client"

import Image from "next/image"
import { useState } from "react"

interface ProfileImageProps {
  src: string
  alt: string
  className?: string
}

export default function ProfileImage({ src, alt, className = "" }: ProfileImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <div className={`relative profile-image-container ${className}`}>
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 rounded-full border-4 border-primary/20 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 overflow-hidden">
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent"></div>
          
          {/* Pulsing circle */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 animate-pulse"></div>
          
          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin"></div>
          </div>
        </div>
      )}
      
      {imageError && (
        <div className="absolute inset-0 rounded-full border-4 border-primary/20 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 flex flex-col items-center justify-center">
          <div className="w-8 h-8 text-red-400 mb-2">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <div className="text-red-400 dark:text-red-300 text-xs text-center font-medium">
            Failed to load
          </div>
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        fill
        priority={true}
        className={`object-cover rounded-full border-4 border-primary/20 profile-image transition-opacity duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
    </div>
  )
}
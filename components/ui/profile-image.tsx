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
    <div className={`profile-image-container relative ${className}`}>
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-primary/20 bg-linear-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/30 to-transparent dark:via-white/10"></div>
          
          {/* Pulsing circle */}
          <div className="absolute inset-4 animate-pulse rounded-full bg-linear-to-br from-primary/10 to-primary/5"></div>
          
          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-8 animate-spin rounded-full border-2 border-primary/30 border-t-primary"></div>
          </div>
        </div>
      )}
      
      {imageError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full border-4 border-primary/20 bg-linear-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20">
          <div className="mb-2 size-8 text-red-400">
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
          <div className="text-center text-xs font-medium text-red-400 dark:text-red-300">
            Failed to load
          </div>
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 768px) 10rem, (max-width: 1024px) 12rem, 14rem"
        className={`profile-image rounded-full border-4 border-primary/20 object-cover transition-opacity duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
    </div>
  )
}

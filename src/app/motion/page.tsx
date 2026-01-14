'use client'

import { useState, useRef, useEffect } from 'react'
import { videos } from '@/lib/motion-data'

export default function Motion() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const currentVideo = videos[currentIndex]

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1))
  }

  // Auto-play when video changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play()
    }
  }, [currentIndex])

  return (
    <div className="h-screen bg-white lg:pl-64 overflow-hidden">
      <div className="h-full grid grid-cols-1 lg:grid-cols-[3fr_1fr]">
        {/* Video Player Section - Left (75%) */}
        <div className="h-[50vh] lg:h-full bg-white flex flex-col items-center justify-center p-6 lg:p-12">
          {/* Video Player Container */}
          <div className="w-full max-w-6xl">
            {/* Video with native controls */}
            <video
              ref={videoRef}
              src={`/video/${currentVideo.filename}`}
              controls
              loop
              playsInline
              autoPlay
              className="w-full aspect-video bg-white"
            />

            {/* Title & Navigation Bar */}
            <div className="flex items-center justify-between mt-4">
              {/* Prev Button */}
              <button
                onClick={goToPrev}
                className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Prev
              </button>

              {/* Title & Counter */}
              <div className="text-center">
                <span className="text-black text-sm font-medium block">{currentVideo.title}</span>
                <span className="text-gray-400 text-xs">{currentIndex + 1} / {videos.length}</span>
              </div>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm"
              >
                Next
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-xs text-center mt-4 max-w-xl mx-auto">
              {currentVideo.description}
            </p>
          </div>
        </div>

        {/* Content - Right (25%) */}
        <div className="h-[50vh] lg:h-full flex items-center">
          <div className="px-6 lg:px-8 py-8">
            <h1 className="text-lg lg:text-xl font-bold text-black mb-2 tracking-wide">
              Motion
            </h1>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-4">
              Video Portfolio
            </p>
            <p className="text-xs text-gray-800 leading-relaxed">
              Our motion work brings brands to life through dynamic visual storytelling.
              From cinematic food films to lifestyle content, we craft videos that capture
              attention and evoke emotion.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

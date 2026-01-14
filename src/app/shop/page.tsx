'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const prints = [
  '5.jpg', '6.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg',
  '15.jpg', '17.jpg', '18.jpg', '20.jpg', '21.jpg', '22.jpg', '25.jpg', '26.jpg',
  '28.jpg', '30.jpg', '31.jpg', '32.jpg', '34.jpg', '35-1.jpg', '36.jpg', '38.jpg',
  '39.jpg', '40.jpg', '41.jpg', '42.jpg', '46.jpg', '47.jpg', '49.jpg', '52.jpg',
  '53.jpg', '56.jpg', '57.jpg', '58.jpg', '61.jpg',
  's1-1.jpg', 's2.jpg', 's3.jpg', 's4.jpg', 's5.jpg', 's6.jpg', 's7.jpg',
  's10.jpg', 's11.jpg', 's14.jpg', 's15.jpg', 's16.jpg', 's17.jpg', 's19.jpg',
  's20.jpg', 's21.jpg', 's23.jpg', 's24.jpg', 's27.jpg', 's28.jpg', 's29.jpg',
  's30.jpg', 's32.jpg', 's33.jpg', 's34.jpg', 's35.jpg', 's37.jpg', 's38.jpg',
  's39pg.jpg', 's40.jpg', 's41.jpg', 's42.jpg', 's43.jpg', 's44.jpg', 's45.jpg',
]

export default function Shop() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? prints.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === prints.length - 1 ? 0 : prev + 1))
  }

  const variants = {
    enter: {
      opacity: 0,
      scale: 1.05,
      filter: 'blur(10px)',
    },
    center: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      filter: 'blur(8px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <div className="h-screen bg-[#F7F7F5] lg:pl-64 overflow-hidden">
      <div className="h-full grid grid-cols-1 lg:grid-cols-[3fr_1fr]">
        {/* Image Section - Left (75%) - Full bleed */}
        <div className="h-[60vh] lg:h-full relative overflow-hidden">
          {/* Animated Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <Image
                src={`/shop/${prints[currentIndex]}`}
                alt={`Print ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Bottom Navigation Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-black/50 to-transparent z-10">
            <div className="flex items-center justify-between">
              {/* Prev Button */}
              <button
                onClick={goToPrev}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Prev
              </button>

              {/* Center: Counter & Inquire */}
              <div className="text-center">
                <span className="text-white/70 text-xs block mb-1">
                  {currentIndex + 1} / {prints.length}
                </span>
                <a
                  href="tel:0524770272"
                  className="text-[10px] tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors border-b border-white/40 hover:border-white pb-0.5"
                >
                  Inquire
                </a>
              </div>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                Next
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Content Section - Right (25%) */}
        <div className="h-[40vh] lg:h-full flex items-center">
          <div className="px-6 lg:px-8 py-8">
            <h1 className="text-lg lg:text-xl font-bold text-black mb-2 tracking-wide">
              Shop
            </h1>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-6">
              Fine Art Prints
            </p>
            <p className="text-xs text-gray-800 leading-relaxed mb-8">
              Museum-quality archival prints on premium fine art paper.
              Each piece is hand-signed and numbered in limited editions.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400">
                For Inquiries
              </p>
              <a
                href="tel:0524770272"
                className="block text-lg text-black font-light tracking-wide hover:opacity-70 transition-opacity"
              >
                052-4770272
              </a>
            </div>

            {/* Decorative Line */}
            <div className="w-12 h-px bg-black/20 mt-8" />
          </div>
        </div>
      </div>
    </div>
  )
}

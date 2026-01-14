'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface Slide {
  type: 'video' | 'images'
  src: string | string[]
}

interface Hotel {
  id: number
  name: string
  location: string
  slides: Slide[]
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: 'CALIMALA',
    location: 'Florence, Italy',
    slides: [{ type: 'video', src: '/hotels/1.mp4' }],
  },
  {
    id: 2,
    name: 'DAN INDIA',
    location: 'India',
    slides: [{ type: 'images', src: ['/hotels/DAN INDIA 1.jpg', '/hotels/DAN INDIA 2.jpg'] }],
  },
  {
    id: 3,
    name: 'HOTEL BACHAUMONT',
    location: 'Paris, France',
    slides: [{
      type: 'images',
      src: [
        '/hotels/Hotel Bachaumont   1.jpg',
        '/hotels/Hotel Bachaumont   2.jpg',
        '/hotels/Hotel Bachaumont  3.png',
        '/hotels/Hotel Bachaumont   4.png',
      ],
    }],
  },
  {
    id: 4,
    name: 'SIX SENSES',
    location: 'Shaharut, Negev',
    slides: [{ type: 'images', src: ['/hotels/SIX SENSES  .jpg'] }],
  },
  {
    id: 5,
    name: 'PEREH',
    location: 'Negev Desert',
    slides: [
      { type: 'video', src: '/hotels/PERHE.mp4' },
      {
        type: 'images',
        src: [
          '/hotels/PERHE  1.jpg',
          '/hotels/PERHE  2.jpg',
          '/hotels/PERHE  3.png',
          '/hotels/PERHE  4.png',
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'HOTEL MONTEFIORE',
    location: 'Tel Aviv',
    slides: [
      { type: 'video', src: '/hotels/Hotel Montefiore.mp4' },
      { type: 'images', src: ['/hotels/Hotel Montefiore  1.jpg', '/hotels/Hotel Montefiore  2.jpg'] },
    ],
  },
  {
    id: 7,
    name: 'R48',
    location: 'Tel Aviv',
    slides: [{
      type: 'images',
      src: [
        '/hotels/R48 - 1.jpg',
        '/hotels/R48 - 2.jpg',
        '/hotels/R48 - 3.jpg',
        '/hotels/R48 - 4.jpg',
      ],
    }],
  },
  {
    id: 8,
    name: 'JAFFA HOTEL',
    location: 'Jaffa',
    slides: [{ type: 'images', src: ['/hotels/Jaffa Hotel   1.jpg', '/hotels/Jaffa Hotel  2.jpg'] }],
  },
]

interface FlatSection {
  type: 'video' | 'images' | 'placeholder'
  src: string | string[]
  hotelName: string
  hotelLocation: string
  hotelIndex: number
}

export default function Hotels() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Flatten hotels into sections for scroll-snap
  const sections: FlatSection[] = useMemo(() => {
    return hotels.flatMap((hotel, hotelIndex) => {
      if (hotel.slides.length === 0) {
        return [{
          type: 'placeholder' as const,
          src: '',
          hotelName: hotel.name,
          hotelLocation: hotel.location,
          hotelIndex,
        }]
      }
      return hotel.slides.map((slide) => ({
        type: slide.type,
        src: slide.src,
        hotelName: hotel.name,
        hotelLocation: hotel.location,
        hotelIndex,
      }))
    })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) setActiveSectionIndex(index)
          }
        })
      },
      { threshold: 0.4 }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [sections])

  const activeSection = sections[activeSectionIndex]
  const activeHotelIndex = activeSection?.hotelIndex ?? 0

  // Scroll to hotel's first section
  const scrollToHotel = (hotelIndex: number) => {
    const sectionIndex = sections.findIndex((s) => s.hotelIndex === hotelIndex)
    if (sectionIndex !== -1 && sectionRefs.current[sectionIndex]) {
      sectionRefs.current[sectionIndex]?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const renderSlide = (section: FlatSection) => {
    if (section.type === 'video' && typeof section.src === 'string') {
      return (
        <video
          src={section.src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      )
    }

    if (section.type === 'images' && Array.isArray(section.src)) {
      const images = section.src

      if (images.length === 1) {
        return (
          <div className="h-full w-full relative">
            <Image
              src={encodeURI(images[0])}
              alt={section.hotelName}
              fill
              className="object-cover"
            />
          </div>
        )
      }

      if (images.length === 2) {
        return (
          <div className="h-full w-full flex items-center justify-center">
            <div className="grid grid-cols-2 h-full w-full gap-3">
              {images.map((img, i) => (
                <div key={i} className="relative h-full">
                  <Image
                    src={encodeURI(img)}
                    alt={`${section.hotelName} - ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )
      }

      // 4+ images - grid with preserved proportions
      return (
        <div className="h-full w-full flex items-center justify-center p-4 bg-gray-50">
          <div className="grid grid-cols-2 gap-3 max-w-3xl">
            {images.map((img, i) => (
              <div key={i} className="relative">
                <Image
                  src={encodeURI(img)}
                  alt={`${section.hotelName} - ${i + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      )
    }

    // Placeholder
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <span className="text-gray-300 text-[9px] tracking-[0.2em]">MEDIA</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F7F7F5] lg:pl-64">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr]">
        {/* Media Sections - Left (75%) */}
        <div className="h-screen overflow-y-auto snap-y snap-mandatory" ref={scrollContainerRef}>
          {sections.map((section, index) => (
            <section
              key={`${section.hotelIndex}-${index}`}
              ref={(el) => { sectionRefs.current[index] = el }}
              className="h-screen snap-start snap-always"
            >
              <div className="h-full w-full">
                {renderSlide(section)}
              </div>
            </section>
          ))}
        </div>

        {/* Mobile Bottom Overlay */}
        <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 pt-16 z-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHotelIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-white text-xl font-bold tracking-[0.1em] uppercase">
                {activeSection?.hotelName}
              </h2>
              <p className="text-white/70 text-sm tracking-wider">
                {activeSection?.hotelLocation}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dot navigation */}
          <div className="flex gap-2 mt-4">
            {hotels.map((hotel, i) => (
              <button
                key={hotel.id}
                onClick={() => scrollToHotel(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeHotelIndex
                    ? 'bg-white w-6'
                    : 'bg-white/40'
                }`}
                aria-label={hotel.name}
              />
            ))}
          </div>
        </div>

        {/* Content Section - Right (25%) - Sticky */}
        <div className="hidden lg:flex lg:sticky lg:top-0 lg:h-screen flex-col justify-center px-8">
          <h1 className="font-karla font-medium text-2xl tracking-[0.15em] text-black mb-5">
            HOSPITALITY
          </h1>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-10">
            Every hotel we photograph tells the story of a place — its light, its textures, its rhythm of life.
            Through the lens, architecture turns into emotion, and hospitality becomes a feeling.
            We look for the quiet moments: a host&apos;s gesture, a reflection on the water, the calm before arrival.
            Inspired by each location&apos;s landscape and culture, we capture spaces that feel real, simple, human, and full of presence.
          </p>

          {/* Hotel list with active indicator */}
          <div className="space-y-2">
            {hotels.map((hotel, i) => (
              <button
                key={hotel.id}
                onClick={() => scrollToHotel(i)}
                className={`block tracking-[0.15em] uppercase transition-all duration-300 hover:text-black ${
                  i === activeHotelIndex
                    ? 'text-black font-bold text-lg'
                    : 'text-gray-400 text-[11px]'
                }`}
              >
                {hotel.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

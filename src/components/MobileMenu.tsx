'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: { href: string; label: string }[]
}

const contentVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
}

const linkVariants = {
  closed: {
    opacity: 0,
    y: 20,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] bg-white">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-black hover:opacity-70 transition-opacity p-2 z-10"
        aria-label="Close menu"
      >
        <X size={28} />
      </button>

      {/* Menu Content */}
      <div className="h-full flex flex-col items-center justify-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-12"
        >
          <Link href="/" onClick={onClose}>
            <Image
              src="/logo main.svg"
              alt="Karela Agency"
              width={80}
              height={80}
            />
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-6">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.05, duration: 0.4 }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="text-black text-2xl md:text-3xl font-medium tracking-[0.15em] uppercase hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-16 h-px bg-black mt-12"
        />
      </div>
    </div>
  )
}

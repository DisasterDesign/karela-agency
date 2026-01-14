'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/agency', label: 'Agency' },
  { href: '/motion', label: 'Motion' },
  { href: '/magazine', label: 'Magazine' },
  { href: '/hotels', label: 'Hotels' },
  { href: '/shop', label: 'Shop' },
  { href: '/contact', label: 'Contact' },
]

export default function MobileHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <Image
              src="/logo main.svg"
              alt="Karela Agency"
              width={40}
              height={40}
            />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-black hover:opacity-70 transition-opacity p-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  )
}

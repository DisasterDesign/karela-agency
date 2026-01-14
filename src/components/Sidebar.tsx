'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Instagram, Youtube } from 'lucide-react'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/agency', label: 'Agency' },
  { href: '/motion', label: 'Motion' },
  { href: '/magazine', label: 'Magazine' },
  { href: '/hotels', label: 'Hotels' },
  { href: '/shop', label: 'Shop' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://www.instagram.com/karela_ag/', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.youtube.com/@Karela_Agency/videos', icon: Youtube, label: 'YouTube' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isAbout = pathname === '/about'
  const isAgency = pathname === '/agency'
  const isDarkSidebar = isAbout || isAgency

  // Colors: Home = white (hover black), About/Agency = white, Other = black
  const textColor = isHome
    ? 'text-white group-hover:text-black'
    : isDarkSidebar
    ? 'text-white'
    : 'text-black'

  const lineColor = isHome
    ? 'bg-white group-hover:bg-black'
    : isDarkSidebar
    ? 'bg-white'
    : 'bg-black'

  const logoFilter = isHome
    ? 'brightness-0 invert group-hover:brightness-0 group-hover:invert-0'
    : isDarkSidebar
    ? 'brightness-0 invert'
    : 'brightness-0 invert-0'

  return (
    <aside
      className={`hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col justify-between px-8 py-12 transition-all duration-500 ease-in-out z-50 ${
        isHome
          ? 'group bg-transparent hover:bg-[var(--background)] border-r border-white/30 hover:border-transparent'
          : isDarkSidebar
          ? 'bg-black border-r border-white/20'
          : 'bg-transparent border-r border-foreground/10'
      }`}
    >
      {/* Logo */}
      <div>
        <Link href="/" className="block hover:opacity-70 transition-opacity">
          <Image
            src="/k.svg"
            alt="Karela Agency"
            width={25}
            height={38}
            className={`transition-all duration-500 ${logoFilter}`}
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative text-sm tracking-[0.2em] uppercase py-2 transition-all duration-500 after:absolute after:bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full ${textColor} ${
              !isHome && !isAbout ? 'hover:opacity-70' : ''
            } ${pathname === link.href ? 'font-medium after:w-full' : 'font-light'}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Bottom Section: Social + Copyright */}
      <div>
        {/* Decorative Line */}
        <div
          className={`w-12 h-px transition-colors duration-500 mb-6 ${lineColor}`}
        />

        {/* Social Icons */}
        <div className="flex gap-4 mb-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:scale-110 hover:opacity-70 transition-all duration-500 ${textColor}`}
              aria-label={social.label}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          className={`opacity-40 text-xs tracking-wider transition-all duration-500 ${textColor}`}
        >
          &copy; {new Date().getFullYear()} Karela
        </p>
      </div>
    </aside>
  )
}

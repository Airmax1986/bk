'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 hover:opacity-70 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">bk</span>
            </div>
            <span className="text-xl font-space-grotesk font-bold tracking-tight">
              BrandKernel.io
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-2 ${
                  pathname === link.href
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>
            ))}
            
            <Link
              href="/start"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
            >
              Jetzt starten
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span
                className={`block w-full h-0.5 bg-gray-900 transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-gray-900 transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-gray-900 transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-64 pb-6' : 'max-h-0'
          }`}
        >
          <div className="pt-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 text-base font-medium transition-colors rounded-lg ${
                  pathname === link.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/start"
              className="block px-3 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Jetzt starten
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
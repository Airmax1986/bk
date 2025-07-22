'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Advanced' },
    { href: '/about', label: 'Discover' },
    { href: '/manifesto', label: 'About BrandKernel' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="w-full px-16 lg:px-24 py-8">
        <div className="w-full flex items-center justify-between">
          
          {/* Logo - Simple Text */}
          <Link 
            href="/" 
            className="text-3xl font-normal text-black tracking-tight hover:opacity-70 transition-opacity"
          >
            BrandKernel
          </Link>

          {/* Desktop Navigation - Clean & Minimal */}
          <div className="hidden md:flex items-center space-x-16">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-normal transition-all duration-200 py-4 px-0 ${
                  pathname === link.href
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* CTA Button - Rounded Pill */}
            <a
              href="https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS4xNzQ2NzQyOTA3"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-normal hover:shadow-lg transition-all duration-300 text-lg"
            >
              Log In
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-4 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-8 h-8 flex flex-col justify-center items-center">
              <span
                className={`block w-full h-0.5 bg-black transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-2'
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-black transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-black transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-2'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`w-full md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 pb-8 border-t border-gray-100 mt-8' : 'max-h-0'
          }`}
        >
          <div className="w-full pt-8 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-6 py-4 text-lg font-normal transition-colors rounded-xl ${
                  pathname === link.href
                    ? 'text-black bg-gray-50'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <a
              href="https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS4xNzQ2NzQyOTA3"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-normal text-center mt-6 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </a>
          </div>
        </div>
      </div>

      {/* Background Overlay for Mobile */}
      {isOpen && (
        <div 
          className="w-full h-full md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
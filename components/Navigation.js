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
    { href: '/blog', label: 'Brand Intelligence Hub' },
    { href: '/about', label: 'About' },
    { href: '/manifesto', label: 'Manifesto' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-gemini-lg border-b border-white/20' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 hover:opacity-70 transition-opacity group"
          >
            {/* Logo Symbol - Gemini Style */}
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-gemini rounded-xl flex items-center justify-center shadow-gemini-lg group-hover:shadow-gemini-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-6 h-6 relative">
                  {/* Gemini-inspired logo */}
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-white" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.8" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 w-10 h-10 bg-gradient-gemini rounded-xl opacity-20 blur-sm group-hover:opacity-30 transition-opacity"></div>
            </div>
            
            {/* Brand Name */}
            <div className="flex flex-col">
              <span className="text-xl font-space-grotesk font-bold tracking-tight text-gray-900">
                BrandKernel<span className="text-gradient-gemini">.io</span>
              </span>
              <span className="text-xs text-gray-500 font-medium -mt-1">
                Brand Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-200 relative py-2 px-3 rounded-lg ${
                  pathname === link.href
                    ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-px left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-gemini rounded-full" />
                )}
              </Link>
            ))}
            
            {/* CTA Button - Gemini Style */}
            <a
              href="https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS4xNzQ2NzQyOTA3"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-gemini text-white rounded-full font-medium hover:shadow-gemini-lg transition-all duration-300 transform hover:scale-105 text-sm relative overflow-hidden group"
            >
              <span className="relative z-10">Join Waitlist</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -mr-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-full h-0.5 bg-gray-900 transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-gray-900 transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-gray-900 transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-80 pb-6 border-t border-gray-100 mt-4' : 'max-h-0'
          }`}
        >
          <div className="pt-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 text-base font-medium transition-colors rounded-xl ${
                  pathname === link.href
                    ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
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
              className="block px-4 py-3 bg-gradient-gemini text-white rounded-xl font-medium hover:shadow-gemini-lg transition-all duration-300 text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Join Waitlist
            </a>
            
            {/* Mobile Social Proof */}
            <div className="px-4 py-3 text-center">
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-gradient-gemini">247+</span> Creators already on the list
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Overlay for Mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  )
}
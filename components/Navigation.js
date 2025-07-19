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
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 hover:opacity-70 transition-opacity group"
          >
            {/* Logo Symbol */}
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-coral-500 to-coral-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-coral-lg transition-shadow">
                <div className="w-6 h-6 relative">
                  {/* Abstract K-Symbol */}
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-white" fill="currentColor">
                      <path d="M8 2v20l8-8-8-8 8-4z" opacity="0.8" />
                      <circle cx="16" cy="12" r="2" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 w-10 h-10 bg-coral-400 rounded-xl opacity-20 blur-sm group-hover:opacity-30 transition-opacity"></div>
            </div>
            
            {/* Brand Name */}
            <div className="flex flex-col">
              <span className="text-xl font-space-grotesk font-bold tracking-tight text-gray-900">
                BrandKernel<span className="text-coral-500">.io</span>
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
                className={`text-sm font-medium transition-all duration-200 relative py-2 px-1 ${
                  pathname === link.href
                    ? 'text-coral-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-gradient-to-r from-coral-500 to-coral-600 rounded-full" />
                )}
                {/* Hover Effect */}
                <span className="absolute inset-0 rounded-lg bg-coral-50 opacity-0 hover:opacity-100 transition-opacity -z-10" />
              </Link>
            ))}
            
            {/* CTA Button */}
            <a
              href="https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS4xNzQ2NzQyOTA3"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-coral-500 to-coral-600 text-white rounded-lg font-medium hover:from-coral-600 hover:to-coral-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-coral-lg text-sm"
            >
              Join Waitlist
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
                    ? 'text-coral-600 bg-coral-50'
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
              className="block px-4 py-3 bg-gradient-to-r from-coral-500 to-coral-600 text-white rounded-xl font-medium hover:from-coral-600 hover:to-coral-700 transition-all duration-300 text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Join Waitlist
            </a>
            
            {/* Mobile Social Proof */}
            <div className="px-4 py-3 text-center">
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-coral-600">247+</span> Creators already on the list
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
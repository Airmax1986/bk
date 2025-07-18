'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 hover:opacity-70 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-coral-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">BK</span>
            </div>
            <span className="text-xl font-space-grotesk font-bold tracking-tight bg-gradient-to-r from-coral-600 to-purple-600 bg-clip-text text-transparent">
              BrandKernel.io
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('problem')}
              className="text-sm font-medium text-gray-600 hover:text-coral-600 transition-colors"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className="text-sm font-medium text-gray-600 hover:text-coral-600 transition-colors"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection('insights')}
              className="text-sm font-medium text-gray-600 hover:text-coral-600 transition-colors"
            >
              Insights
            </button>
            <button
              onClick={() => scrollToSection('vision')}
              className="text-sm font-medium text-gray-600 hover:text-coral-600 transition-colors"
            >
              Vision
            </button>
            
            <button
              onClick={() => scrollToSection('waitlist')}
              className="px-6 py-2 bg-gradient-to-r from-coral-500 to-coral-600 text-white rounded-lg font-medium hover:from-coral-600 hover:to-coral-700 transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Early Access
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
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
            isOpen ? 'max-h-80 pb-6' : 'max-h-0'
          }`}
        >
          <div className="pt-4 space-y-2">
            <button
              onClick={() => scrollToSection('problem')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-coral-600 hover:bg-coral-50 transition-colors rounded-lg"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-coral-600 hover:bg-coral-50 transition-colors rounded-lg"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection('insights')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-coral-600 hover:bg-coral-50 transition-colors rounded-lg"
            >
              Insights
            </button>
            <button
              onClick={() => scrollToSection('vision')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-coral-600 hover:bg-coral-50 transition-colors rounded-lg"
            >
              Vision
            </button>
            
            <button
              onClick={() => scrollToSection('waitlist')}
              className="block w-full px-3 py-3 bg-gradient-to-r from-coral-500 to-coral-600 text-white rounded-lg font-medium hover:from-coral-600 hover:to-coral-700 transition-all duration-300 text-center mt-4"
            >
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
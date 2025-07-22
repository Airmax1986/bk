'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const rotatingTexts = [
    "Discover Your Brand Kernel",
    "Find Your Authentic Voice", 
    "Transform Your Personal Brand",
    "Build Strategic Clarity"
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="w-full px-8 lg:px-12 py-24">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main Heading - Massive Typography */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal text-black mb-8 leading-tight tracking-tight">
              Find what's on{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                your mind.
              </span>
            </h1>
          </div>

          {/* Gemini Star Icon */}
          <div className="flex justify-center mb-16">
            <div className="w-16 h-16">
              <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>

          {/* Explore Button */}
          <div className="mb-32">
            <button className="w-16 h-16 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 mx-auto">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <p className="text-gray-500 text-sm mt-4">Explore</p>
          </div>

        </div>
      </div>
    </section>
  )
}
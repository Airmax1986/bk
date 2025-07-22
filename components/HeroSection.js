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
    <div className="w-full min-h-screen flex items-center justify-center bg-white pt-32">
      <div className="w-full px-16 lg:px-24 py-32">
        <div className={`w-full text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main Heading - Massive Typography like screenshot */}
          <div className="w-full mb-32">
            <h1 className="w-full text-7xl md:text-9xl lg:text-[12rem] font-normal text-black mb-16 leading-[0.9] tracking-tight">
              Find what's on{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                your mind.
              </span>
            </h1>
          </div>

          {/* Explore Button */}
          <div className="w-full mb-48">
            <div className="w-full flex flex-col items-center space-y-8">
              <button className="w-20 h-20 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <p className="text-gray-500 text-lg font-normal tracking-wide">Explore</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
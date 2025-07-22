// components/HomeHeroSection.js
'use client'
import { useState, useEffect } from 'react'

export default function HomeHeroSection() {
  const [showExplore, setShowExplore] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowExplore(true)
    }, 1000) // Show "Explore" after 1 second
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Main Content */}
      <div className="text-center max-w-6xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-normal mb-8 leading-tight">
          Find what's on <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">your mind.</span>
        </h1>

        {/* Explore Button/Link */}
        {showExplore && (
          <div className="mt-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <a 
              href="#explore" // You might want to link this to a specific section or scroll down
              className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gray-300 text-gray-500 hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <p className="text-sm text-gray-500 mt-2">Explore</p>
          </div>
        )}
      </div>

      {/* Floating Sparkle Icon (from screenshot) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 flex items-center justify-center">
        <svg className="w-full h-full text-blue-400 opacity-70 animate-twinkle" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L9.19 8.63L2 9.24L7.45 13.06L5.82 20L12 16.18L18.18 20L16.55 13.06L22 9.24L14.81 8.63L12 2Z" />
        </svg>
      </div>

      {/* Animation for fade-in-up */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </section>
  )
}

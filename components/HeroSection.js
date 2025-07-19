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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Pre-Launch Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-coral-50 border border-coral-200 rounded-full text-coral-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-coral-400 rounded-full mr-2 animate-pulse"></span>
            Coming Soon - Join the Brand Kernel Discovery
          </div>

          {/* Dynamic Headline */}
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              {rotatingTexts[currentText]}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            The <span className="font-semibold text-coral-600">authentic core</span> every great personal brand is built on. 
            <br className="hidden md:block" />
            We're building the AI that has <span className="font-semibold">that conversation</span> with you.
          </p>

          {/* Value Proposition */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Most creators are <span className="font-semibold bg-yellow-100 px-2 py-1 rounded">one conversation away from clarity</span>. 
              BrandKernel.io is the AI dialogue platform that transforms how freelancers, creators, and consultants 
              discover their authentic brand identity and activate it daily.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS4xNzQ2NzQyOTA3"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-coral-500 text-white font-semibold rounded-lg hover:bg-coral-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Reserve Your Brand Kernel Discovery
            </a>
            
            <Link 
              href="#manifesto"
              className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-coral-300 hover:text-coral-600 transition-all duration-300"
            >
              Read the Brand Kernel Manifesto
            </Link>
          </div>

          {/* Social Proof Preview */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                ))}
              </div>
              <span><span className="font-semibold text-coral-600" id="waitlist-count">247</span> Creators already on the list</span>
            </div>
            
            <div className="hidden md:flex items-center">
              <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Beta Testers wanted</span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-coral-200 to-coral-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
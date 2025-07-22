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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Gemini-style Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='80' cy='20' r='2'/%3E%3Ccircle cx='20' cy='80' r='2'/%3E%3Ccircle cx='80' cy='80' r='2'/%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float animation-delay-2000"></div>
      <div className="absolute top-1/3 right-20 w-20 h-20 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-xl animate-float animation-delay-1000"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Pre-Launch Badge - Gemini Style */}
          <div className="inline-flex items-center px-6 py-3 bg-glass rounded-full border border-white/30 shadow-gemini-md text-blue-700 text-sm font-medium mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-gradient-gemini rounded-full mr-3 animate-pulse"></div>
            Coming Soon - Join the Brand Kernel Discovery
          </div>

          {/* Dynamic Headline */}
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6 leading-tight">
            <span className="text-gradient-gemini">
              {rotatingTexts[currentText]}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            The <span className="font-semibold text-gradient-blue">authentic core</span> every great personal brand is built on. 
            <br className="hidden md:block" />
            We're building the AI that has <span className="font-semibold">that conversation</span> with you.
          </p>

          {/* Value Proposition - Glass Card */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="glass-card p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Most creators are <span className="font-semibold bg-gradient-to-r from-yellow-100 to-yellow-200 px-3 py-1 rounded-full">one conversation away from clarity</span>. 
                BrandKernel.io is the AI dialogue platform that transforms how freelancers, creators, and consultants 
                discover their authentic brand identity and activate it daily.
              </p>
            </div>
          </div>

          {/* CTA Buttons - Gemini Style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS4xNzQ2NzQyOTA3"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-gemini text-white font-semibold rounded-full hover:shadow-gemini-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">Reserve Your Brand Kernel Discovery</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <Link 
              href="#manifesto"
              className="px-8 py-4 bg-glass border border-white/30 text-gray-700 font-semibold rounded-full hover:shadow-gemini-md transition-all duration-300 backdrop-blur-sm hover:border-blue-300/50"
            >
              Read the Brand Kernel Manifesto
            </Link>
          </div>

          {/* Social Proof Preview - Gemini Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
            <div className="glass-card px-6 py-4 flex items-center rounded-full">
              <div className="flex -space-x-2 mr-4">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-gemini rounded-full border-2 border-white shadow-sm"></div>
                ))}
              </div>
              <span className="text-gray-600">
                <span className="font-semibold text-gradient-gemini" id="waitlist-count">247</span> Creators already on the list
              </span>
            </div>
            
            <div className="hidden md:flex glass-card px-6 py-4 items-center rounded-full">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-gray-600">Beta Testers wanted</span>
            </div>
          </div>

        </div>
      </div>

      {/* Gemini-style Chat Interface Preview */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-80 max-w-sm">
        <div className="chat-gradient p-6 rounded-2xl relative overflow-hidden">
          <div className="search-input text-center">
            Find what's on your mind.
          </div>
          {/* Floating Sparkle */}
          <div className="absolute top-4 right-4 w-6 h-6 text-white/60">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
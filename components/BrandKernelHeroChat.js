'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function BrandKernelHeroChat() {
  const [currentText, setCurrentText] = useState(0)

  const rotatingTexts = [
    "Discover Your Brand Kernel",
    "Find Your Authentic Voice", 
    "Transform Your Personal Brand",
    "Build Strategic Clarity"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 pt-20 pb-12">
        
        {/* Pre-Launch Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-coral-50 border border-coral-200 rounded-full text-coral-700 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-coral-400 rounded-full mr-2 animate-pulse"></span>
          Pre-Launch: Join the Brand Kernel Discovery
        </div>

        {/* Dynamic Headline */}
        <h1 className="text-6xl md:text-8xl font-normal mb-8 leading-tight">
          <span className="text-gradient-hero">
            {rotatingTexts[currentText]}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
          The <span className="font-semibold text-coral-600">authentic core</span> every great personal brand is built on. 
          <br className="hidden md:block" />
          We're building the AI that has <span className="font-semibold">that conversation</span> with you.
        </p>

        {/* Chat Window (16:9 aspect ratio) */}
        <div className="relative w-full max-w-4xl mx-auto mb-12 bg-gray-800 rounded-xl shadow-2xl overflow-hidden aspect-w-16 aspect-h-9">
          <div className="absolute inset-0 p-6 text-left flex flex-col justify-between">
            <div className="text-white text-sm md:text-base space-y-4">
              <p><strong className="text-blue-400">Maximilian, Consultant:</strong><br />Hey Cleo – welcome. Before we dive in: What brought you here? What are you actually looking for?</p>
              <p><strong className="text-purple-400">Cleo, User:</strong><br />Honestly… clarity. I feel like I stand for something, but I can’t find the words. And sometimes I’m not even sure it makes sense, what I’m building.</p>
              <p><strong className="text-blue-400">Maximilian, Consultant:</strong><br />That’s already a powerful place to start. We’re not looking for buzzwords today. Just the truth – the one that’s already inside, waiting to be seen clearly. Ready?</p>
            </div>
            <div className="text-right text-gray-500 text-xs mt-4">
              <span className="inline-block px-2 py-1 bg-gray-700 rounded-full">Live Dialogue</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a 
            href="https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS4xNzQ2NzQyOTA3"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Reserve Your Brand Kernel Discovery
          </a>
          
          <Link 
            href="/manifesto"
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
    </section>
  )
}

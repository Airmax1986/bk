'use client'
import { useState } from 'react'

export default function WaitlistSection() {
  return (
    <section className="min-h-screen bg-white py-24">
      <div className="w-full px-8 lg:px-12">
        
        {/* Header - Massive Typography */}
        <div className="text-center mb-32">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-black mb-6 leading-tight tracking-tight">
            Now <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Gemini</span> can
          </h1>
        </div>

        {/* Gemini Feature Cards - Full Width Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          
          {/* Brand Discovery Card */}
          <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden group cursor-pointer bg-gradient-to-br from-purple-500 to-blue-600">
            {/* Plus Button */}
            <div className="absolute top-6 right-6 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white text-lg font-light">
              +
            </div>
            
            {/* Content */}
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-white text-xl font-medium mb-2">Gems</h3>
              <p className="text-white/80 text-base font-normal">Build custom AI experts</p>
            </div>
          </div>

          {/* Live Insights Card */}
          <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden group cursor-pointer bg-gradient-to-br from-blue-700 to-blue-900">
            <div className="absolute top-6 right-6 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white text-lg font-light">
              +
            </div>
            
            {/* Chat Interface */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="w-full max-w-sm">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-4 mb-8">
                  <div className="text-white/70 text-sm flex items-center">
                    Keep in mind I'm a vegetarian. 
                    <div className="ml-2 w-6 h-6 border border-white/30 rounded-sm flex items-center justify-center">
                      <svg className="w-3 h-3 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-white text-xl font-medium mb-2">Ask Gemini Assistant</h3>
              <p className="text-white/80 text-base font-normal">Get help that's unique to you</p>
            </div>
          </div>

          {/* Strategic Analysis Card */}
          <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden group cursor-pointer bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
            <div className="absolute top-6 right-6 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white text-lg font-light">
              +
            </div>
            
            {/* Galaxy Background Effect */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute inset-0" style={{
                background: `
                  radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)
                `
              }}>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-white text-xl font-medium mb-2">Summarize</h3>
              <p className="text-white/80 text-base font-normal">Upload your documents</p>
            </div>
          </div>
        </div>

        {/* Large Chat Interface */}
        <div className="relative rounded-3xl overflow-hidden mb-32" style={{
          background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)',
          minHeight: '400px'
        }}>
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="w-full max-w-2xl">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-8 py-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <input 
                    type="text" 
                    placeholder="Ask me anything" 
                    className="flex-1 bg-transparent border-none outline-none text-gray-600 text-xl placeholder-gray-400"
                    readOnly
                  />
                  <div className="ml-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pause Button */}
          <div className="absolute bottom-8 right-8">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <div className="flex space-x-1">
                <div className="w-1.5 h-4 bg-white rounded-sm"></div>
                <div className="w-1.5 h-4 bg-white rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a
            href="https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS4xNzQ2NzQyOTA3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 text-lg"
          >
            Log In
          </a>
        </div>

      </div>
    </section>
  )
}
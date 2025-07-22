'use client'
import { useState } from 'react'

export default function WaitlistSection() {
  return (
    <div className="w-full min-h-screen bg-white py-32">
      <div className="w-full px-16 lg:px-24">
        
        {/* Header - Massive Typography */}
        <div className="w-full text-center mb-48">
          <h1 className="w-full text-6xl md:text-8xl lg:text-[10rem] font-normal text-black mb-16 leading-[0.9] tracking-tight">
            Now <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">BrandKernel</span> can
          </h1>
        </div>

        {/* Feature Cards Grid - Full Width */}
        <div className="w-full grid md:grid-cols-3 gap-12 mb-48">
          
          {/* Brand Discovery Card */}
          <div className="w-full h-96 lg:h-[32rem] relative rounded-3xl overflow-hidden group cursor-pointer bg-gradient-to-br from-purple-500 to-blue-600 p-12">
            {/* Plus Button */}
            <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white text-xl font-light">
              +
            </div>
            
            {/* Content */}
            <div className="w-full absolute bottom-12 left-12 right-12">
              <h3 className="text-white text-2xl font-normal mb-4">Brand Discovery</h3>
              <p className="text-white/80 text-lg font-normal">Create your own personal AI experts</p>
            </div>
          </div>

          {/* Live Insights Card */}
          <div className="w-full h-96 lg:h-[32rem] relative rounded-3xl overflow-hidden group cursor-pointer bg-gradient-to-br from-blue-700 to-blue-900 p-12">
            <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white text-xl font-light">
              +
            </div>
            
            {/* Chat Interface */}
            <div className="w-full absolute inset-0 flex items-center justify-center p-12">
              <div className="w-full max-w-md">
                <div className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-6 mb-12">
                  <div className="w-full text-white/70 text-base flex items-center justify-between">
                    <span>Keep in mind I'm a vegetarian.</span>
                    <div className="ml-4 w-8 h-8 border border-white/30 rounded-sm flex items-center justify-center">
                      <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full absolute bottom-12 left-12 right-12">
              <h3 className="text-white text-2xl font-normal mb-4">BrandKernel Live</h3>
              <p className="text-white/80 text-lg font-normal">Have a real back and forth conversation</p>
            </div>
          </div>

          {/* Strategic Analysis Card */}
          <div className="w-full h-96 lg:h-[32rem] relative rounded-3xl overflow-hidden group cursor-pointer bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 p-12">
            <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white text-xl font-light">
              +
            </div>
            
            {/* Galaxy Background Effect */}
            <div className="w-full absolute inset-0 opacity-40">
              <div className="w-full h-full absolute inset-0" style={{
                background: `
                  radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)
                `
              }}>
              </div>
            </div>
            
            <div className="w-full absolute bottom-12 left-12 right-12">
              <h3 className="text-white text-2xl font-normal mb-4">Deep Research</h3>
              <p className="text-white/80 text-lg font-normal">Create personalized research plans</p>
            </div>
          </div>
        </div>

        {/* Large Chat Interface */}
        <div className="w-full relative rounded-3xl overflow-hidden mb-48 p-16" style={{
          background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)',
          minHeight: '500px'
        }}>
          <div className="w-full absolute inset-0 flex items-center justify-center p-16">
            <div className="w-full max-w-4xl">
              <div className="w-full bg-white/90 backdrop-blur-sm rounded-full px-12 py-8 shadow-lg">
                <div className="w-full flex items-center justify-between">
                  <input 
                    type="text" 
                    placeholder="Ask me anything" 
                    className="w-full bg-transparent border-none outline-none text-gray-600 text-2xl placeholder-gray-400"
                    readOnly
                  />
                  <div className="ml-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pause Button */}
          <div className="absolute bottom-12 right-12">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <div className="flex space-x-2">
                <div className="w-2 h-6 bg-white rounded-sm"></div>
                <div className="w-2 h-6 bg-white rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full text-center py-16">
          <a
            href="https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS.1NzQ2NzQyOTA3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-16 py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-normal hover:shadow-lg transition-all duration-300 text-xl"
          >
            Log In
          </a>
        </div>

      </div>
    </div>
  )
}
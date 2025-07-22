'use client'
import { useState } from 'react'

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header - Gemini Style */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
              Now <span className="text-gradient-gemini">BrandKernel</span> can
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover your authentic brand core through AI-powered conversations and strategic insights.
            </p>
          </div>

          {/* Gemini Feature Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            
            {/* Brand Discovery Card */}
            <div className="feature-card gems-gradient relative group overflow-hidden">
              {/* Plus Button */}
              <div className="plus-button">+</div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.8" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                </div>
                
                <div>
                  <h3 className="card-title text-xl font-semibold mb-2">Brand Discovery</h3>
                  <p className="card-subtitle">Find your authentic voice through AI-guided conversations</p>
                </div>
              </div>
            </div>

            {/* Live Insights Card */}
            <div className="feature-card live-gradient relative group overflow-hidden">
              <div className="plus-button">+</div>
              
              {/* Chat Interface */}
              <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-8">
                  <div className="text-white/80 text-sm">Tell me about your brand vision →</div>
                </div>
                
                <div>
                  <h3 className="card-title text-xl font-semibold mb-2">BrandKernel Live</h3>
                  <p className="card-subtitle">Have a real conversation with your brand strategist AI</p>
                </div>
              </div>
            </div>

            {/* Strategic Analysis Card */}
            <div className="feature-card research-gradient relative group overflow-hidden">
              <div className="plus-button">+</div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                
                <div>
                  <h3 className="card-title text-xl font-semibold mb-2">Strategic Analysis</h3>
                  <p className="card-subtitle">Transform insights into actionable brand strategies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gemini Chat Interface */}
          <div className="chat-gradient rounded-3xl p-12 mb-16 relative overflow-hidden">
            <div className="text-center relative z-10">
              <div className="max-w-2xl mx-auto">
                <div className="search-input mb-8 text-center relative">
                  <input 
                    type="text" 
                    placeholder="What's your brand vision?" 
                    className="w-full bg-transparent border-none outline-none text-gray-600 text-lg"
                    readOnly
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="send-button w-10 h-10">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <a
                  href="https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS4xNzQ2NzQyOTA3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-white/90 backdrop-blur-sm text-purple-700 font-semibold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Reserve Your Brand Kernel Discovery
                </a>
              </div>
            </div>
            
            {/* Pause Button */}
            <div className="absolute bottom-6 right-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                <div className="w-3 h-3 bg-white rounded-sm"></div>
                <div className="w-3 h-3 bg-white rounded-sm ml-1"></div>
              </div>
            </div>
          </div>

          {/* Benefits Grid - Glass Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-gemini rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Brand Assessment</h4>
              <p className="text-sm text-gray-600">3-minute tool for immediate brand insights</p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-ocean rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Weekly Intelligence</h4>
              <p className="text-sm text-gray-600">Strategic insights every Wednesday</p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Beta Priority</h4>
              <p className="text-sm text-gray-600">Early access to the full platform</p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-space rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Exclusive Community</h4>
              <p className="text-sm text-gray-600">Private creator network access</p>
            </div>
          </div>

          {/* Social Proof - Gemini Style */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
            <div className="glass-card px-8 py-4 flex items-center rounded-full">
              <div className="flex -space-x-2 mr-4">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-gemini rounded-full border-2 border-white shadow-sm"></div>
                ))}
              </div>
              <span className="text-gray-600">
                <span className="font-semibold text-gradient-gemini">247+</span> Creators already joined
              </span>
            </div>
            
            <div className="glass-card px-8 py-4 flex items-center rounded-full">
              <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-gray-600">No spam, unsubscribe anytime</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
'use client'
import { useState, useEffect } from 'react'

export default function FounderVision() {
  const [activeTab, setActiveTab] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const visionPoints = [
    {
      icon: "🤖",
      title: "AI + Human Intelligence",
      description: "The future belongs to those who combine AI efficiency with human authenticity. We're building the bridge.",
      detail: "Technology should amplify human creativity, not replace it. Our platform leverages AI to unlock deeper self-understanding and strategic clarity."
    },
    {
      icon: "💎", 
      title: "Authentic Differentiation",
      description: "In a world of generic content, authentic differentiation becomes the ultimate competitive advantage.",
      detail: "We believe every creator has a unique 'Brand Kernel' - their authentic core. Our mission is to help them discover and activate it systematically."
    },
    {
      icon: "🌊",
      title: "Strategic Accessibility", 
      description: "Professional brand strategy shouldn't be limited to Fortune 500 companies. Every creator deserves strategic excellence.",
      detail: "We're democratizing high-level brand strategy through intelligent automation, making it accessible to individual creators and small businesses."
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % visionPoints.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="vision" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-6">
              <span className="text-sm font-medium text-blue-600">🚀 Founder Vision</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              Building the Future of <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Personal Branding
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our vision is a world where every creator can discover, define, and activate their authentic brand 
              without the complexity, cost, or compromise of traditional approaches.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            
            {/* Founder Introduction */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold font-space-grotesk mb-2">
                      <a 
                        href="https://de.linkedin.com/in/maximilian-appelt-a1579bb8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors duration-200"
                      >
                        Maximilian Appelt
                      </a>
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      Founder & Brand Strategist
                    </p>
                    
                    <blockquote className="text-gray-700 italic leading-relaxed mb-6">
                      "After years of helping clients build authentic brands, I realized the biggest barrier 
                      wasn't expertise - it was accessibility. Strategic brand thinking should be available 
                      to every creator, not just those who can afford $50k consultancy fees."
                    </blockquote>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        10+ years in brand strategy & consulting
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Worked with 200+ personal brands
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        AI & strategic framework expertise
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <a 
                          href="https://de.linkedin.com/in/maximilian-appelt-a1579bb8" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          Connect on LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Points Interactive */}
            <div className="space-y-6">
              {visionPoints.map((point, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl p-6 border-2 cursor-pointer transition-all duration-500 ${
                    activeTab === index 
                      ? 'border-blue-300 shadow-lg transform scale-105' 
                      : 'border-gray-100 hover:border-gray-200 hover:shadow-md'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`text-3xl transition-transform duration-300 ${
                      activeTab === index ? 'scale-110' : ''
                    }`}>
                      {point.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-bold font-space-grotesk mb-2">
                        {point.title}
                      </h4>
                      
                      <p className="text-gray-600 mb-3">
                        {point.description}
                      </p>
                      
                      {activeTab === index && (
                        <div className="animate-fadeIn">
                          <p className="text-blue-700 font-medium text-sm leading-relaxed">
                            {point.detail}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className={`transform transition-transform duration-300 ${
                      activeTab === index ? 'rotate-90' : ''
                    }`}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6">
              Our Mission
            </h3>
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              To build the world's most intelligent, empathetic, and accessible brand discovery platform. 
              We combine the depth of strategic consulting with the scalability of AI, 
              creating a new category: <strong>Dialogical Brand Intelligence</strong>.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2">Accelerate Discovery</h4>
                <p className="text-gray-600 text-sm">Reduce brand clarity time from months to days through intelligent dialogue.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2">Democratize Strategy</h4>
                <p className="text-gray-600 text-sm">Make high-level brand thinking accessible to every creator and entrepreneur.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-coral-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2">Amplify Authenticity</h4>
                <p className="text-gray-600 text-sm">Help creators build brands that feel genuinely them, not generic templates.</p>
              </div>
            </div>
          </div>

          {/* Journey & Roadmap */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold font-space-grotesk text-center mb-12">
              Our Journey & Roadmap
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Phase 1: Foundation</h4>
                <p className="text-sm text-gray-600">MVP Brand Kernel Discovery launched. Core dialogue system operational.</p>
                <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full mt-2">✅ Complete</span>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Phase 2: Intelligence</h4>
                <p className="text-sm text-gray-600">Advanced AI coaching, personalized insights, and strategic recommendations.</p>
                <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mt-2">🚧 Q3 2025</span>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Phase 3: Activation</h4>
                <p className="text-sm text-gray-600">Brand Flows launch. Automatic content generation from Brand Kernel.</p>
                <span className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full mt-2">📅 Q4 2025</span>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-coral-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">4</span>
                </div>
                <h4 className="font-semibold mb-2">Phase 4: Scale</h4>
                <p className="text-sm text-gray-600">Enterprise features, team collaboration, and advanced analytics.</p>
                <span className="inline-block bg-coral-100 text-coral-700 text-xs px-2 py-1 rounded-full mt-2">🔮 2026</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-coral-50 to-purple-50 rounded-2xl p-8 border border-coral-200">
              <h3 className="text-2xl font-bold font-space-grotesk mb-4">
                Join Our Vision
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Be part of the revolution that's democratizing brand strategy. 
                Help us build a platform that serves creators, not just corporations.
              </p>
              <a 
                href="https://kit.com/brandkernel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-coral-500 to-coral-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-coral-600 hover:to-coral-700 transition-all duration-300 inline-block"
              >
                Reserve Your Brand Discovery
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
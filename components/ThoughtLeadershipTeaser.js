'use client'
import { useState, useEffect } from 'react'

export default function ThoughtLeadershipTeaser() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const insights = [
    {
      title: "The Brand Authenticity Crisis",
      excerpt: "Why 87% of creators struggle with generic positioning and how strategic frameworks unlock differentiation.",
      category: "Strategy",
      readTime: "5 min",
      date: "Jul 2025"
    },
    {
      title: "Beyond Generic AI Content",
      excerpt: "The missing link between AI tools and authentic brand voice - and why most creators get it wrong.",
      category: "Innovation", 
      readTime: "7 min",
      date: "Jul 2025"
    },
    {
      title: "The Dialogical Approach",
      excerpt: "How conversational intelligence outperforms traditional brand workshops by 300%.",
      category: "Methodology",
      readTime: "6 min", 
      date: "Jul 2025"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % insights.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [insights.length])

  return (
    <section id="insights" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-coral-50 to-purple-50 rounded-full mb-6">
              <span className="text-sm font-medium text-coral-600">🧠 Thought Leadership</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              Strategic Insights for <br />
              <span className="bg-gradient-to-r from-coral-500 to-purple-600 bg-clip-text text-transparent">
                Brand Builders
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep-dive analysis, frameworks, and strategic thinking for creators who want to build 
              authentic, differentiated brands in the AI era.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Featured Insight */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    insights[currentIndex].category === 'Strategy' ? 'bg-blue-50 text-blue-600' :
                    insights[currentIndex].category === 'Innovation' ? 'bg-purple-50 text-purple-600' :
                    'bg-green-50 text-green-600'
                  }`}>
                    {insights[currentIndex].category}
                  </span>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {insights[currentIndex].readTime}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold font-space-grotesk mb-4">
                  {insights[currentIndex].title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {insights[currentIndex].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{insights[currentIndex].date}</span>
                  <button className="inline-flex items-center text-coral-600 font-medium hover:text-coral-700 transition-colors">
                    Read Full Article 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2">
                {insights.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-coral-500 w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-coral-50 via-purple-50 to-blue-50 rounded-2xl p-8 border border-white shadow-lg">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-5" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold font-space-grotesk mb-4">
                  Weekly Brand Intelligence
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Strategic insights, framework deep-dives, and actionable 
                  brand-building intelligence. Delivered every Wednesday.
                </p>
              </div>

              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors"
                />
                
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-coral-500 to-coral-600 text-white font-semibold rounded-lg hover:from-coral-600 hover:to-coral-700 transition-all duration-300"
                >
                  Get Weekly Intelligence
                </button>
              </form>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Join 1,200+ creators. No spam, unsubscribe anytime.
              </p>

              {/* Value Props */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <p className="text-xs text-gray-600"><strong>Research-backed</strong><br />Strategic frameworks</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <p className="text-xs text-gray-600"><strong>Actionable</strong><br />Implementation guides</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <p className="text-xs text-gray-600"><strong>Case studies</strong><br />Real success stories</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <p className="text-xs text-gray-600"><strong>Trends</strong><br />Future insights</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Articles Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold font-space-grotesk mb-8 text-center">
              Latest Strategic Insights
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {insights.map((insight, index) => (
                <article 
                  key={index}
                  className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300 cursor-pointer"
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      insight.category === 'Strategy' ? 'bg-blue-50 text-blue-600' :
                      insight.category === 'Innovation' ? 'bg-purple-50 text-purple-600' :
                      'bg-green-50 text-green-600'
                    }`}>
                      {insight.category}
                    </span>
                    <span className="text-xs text-gray-500">{insight.readTime}</span>
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-3 leading-tight">
                    {insight.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {insight.excerpt}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-500">{insight.date}</span>
                    <svg className="w-4 h-4 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
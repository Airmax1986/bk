'use client'
import { useState, useEffect, useRef } from 'react'

export default function ProblemSection() {
  const [visibleProblems, setVisibleProblems] = useState([])
  const sectionRef = useRef(null)

  const problems = [
    {
      title: "The Generic Trap",
      description: "67% of creators say they sound like everyone else",
      visual: "👥",
      details: "Without a clear brand kernel, you blend into the noise. Your content feels interchangeable, your pricing power suffers, and ideal clients can't find you.",
      stat: "67%",
      statLabel: "sound generic"
    },
    {
      title: "The Strategy-Execution Gap", 
      description: "You know you need a brand strategy. You don't know how to live it daily.",
      visual: "🌉",
      details: "Even when you have clarity on paper, translating strategy into consistent daily actions feels impossible. The gap between knowing and doing kills momentum.",
      stat: "43%",
      statLabel: "struggle with execution"
    },
    {
      title: "The AI Paradox",
      description: "More AI tools. More generic content. Less authentic voice.",
      visual: "🔄",
      details: "AI amplifies what you put in. Without an authentic kernel as your filter, AI-generated content sounds like everyone else using the same prompts.",
      stat: "78%",
      statLabel: "use identical AI patterns"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          problems.forEach((_, index) => {
            setTimeout(() => {
              setVisibleProblems(prev => [...prev, index])
            }, index * 300)
          })
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
            The <span className="bg-gradient-to-r from-red-500 to-coral-500 bg-clip-text text-transparent">Double Brand Blockade</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Creators, freelancers, and consultants struggle with two fundamental challenges 
            that paralyze their brand development and limit their success.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-700 ${
                visibleProblems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                
                {/* Visual & Stat */}
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 filter grayscale">
                    {problem.visual}
                  </div>
                  <div className="bg-red-50 rounded-full px-4 py-2 inline-block">
                    <span className="text-2xl font-bold text-red-600">{problem.stat}</span>
                    <div className="text-xs text-red-500 font-medium">{problem.statLabel}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-space-grotesk mb-3 text-center">
                  {problem.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-center font-medium">
                  {problem.description}
                </p>
                
                <p className="text-sm text-gray-500 leading-relaxed">
                  {problem.details}
                </p>

                {/* Problem Indicator */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center text-red-500">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Blocks success</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="bg-gradient-to-r from-red-50 to-coral-50 rounded-2xl p-8 md:p-12 text-center border border-red-100">
          <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk mb-4">
            The Consequence: A Vicious Cycle of Interchangeability and Frustration
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-red-700">Without a Clear Brand Kernel:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Price pressure due to interchangeability
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Ineffective marketing & content
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Weak customer loyalty & referrals
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Burnout from constant "everything for everyone"
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-coral-700">With an Authentic Brand Kernel:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Premium pricing through differentiation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Ideal clients find you magnetically
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Clear focus increases efficiency
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Fulfillment through authentic work
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-coral-200">
            <p className="text-lg font-medium text-gray-700">
              <span className="text-coral-600 font-bold">The Brand Kernel</span> is the decisive, 
              <span className="bg-yellow-100 px-2 py-1 rounded font-semibold">non-copyable competitive factor</span> in the AI age
            </p>
          </div>
        </div>

        {/* Transition to Solution */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-8">
            We believe: Every creator has a unique kernel. <br />
            <span className="font-semibold text-coral-600">We're building the intelligence to help you find yours.</span>
          </p>
          
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-coral-500 to-red-500 text-white rounded-full font-medium">
            <span>The Solution ↓</span>
          </div>
        </div>
      </div>
    </section>
  )
}
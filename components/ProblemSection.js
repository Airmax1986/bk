'use client'
import { useState, useEffect } from 'react'

export default function ProblemSection() {
  const [activeBlockade, setActiveBlockade] = useState(0)
  const [animatedCards, setAnimatedCards] = useState([])

  const blockades = [
    {
      title: "The Foundation Problem",
      icon: "🧭",
      description: "Missing clarity, structure, or expertise to develop an authentic, strategic brand identity.",
      details: [
        "Vague positioning & lack of differentiation",
        "Understanding deficits about strategic branding", 
        "Resource constraints (time, budget, expertise)",
        "Psychological barriers & perfectionism",
        "Personal/business identity integration challenges"
      ],
      impact: "Result: Generic positioning, interchangeability, commodity pricing",
      color: "red"
    },
    {
      title: "The Activation Problem", 
      icon: "⚡",
      description: "Massive difficulty translating defined brand identity into consistent daily execution.",
      details: [
        "Operationalization gap from strategy to action",
        "Consistency challenges across touchpoints",
        "Complex AI prompting & content creation barriers", 
        "Time pressure & resource limitations",
        "Lack of systematic activation frameworks"
      ],
      impact: "Result: Strategy remains ineffective, AI leads to homogenization",
      color: "orange"
    }
  ]

  const scenarios = [
    {
      persona: "Sarah, UX Designer",
      problem: "\"I know I need to stand out, but everything I create feels generic. I spend hours trying to craft the perfect LinkedIn post, but it still sounds like everyone else.\"",
      blockade: "both",
      icon: "👩‍💻"
    },
    {
      persona: "Marcus, Consultant", 
      problem: "\"I have 10 years of experience, but I can't articulate what makes me different. My proposals get lost in a sea of similar offers.\"",
      blockade: "foundation",
      icon: "👨‍💼"
    },
    {
      persona: "Lisa, Content Creator",
      problem: "\"I know my values and mission, but turning that into daily content is exhausting. ChatGPT makes me sound like everyone else.\"", 
      blockade: "activation",
      icon: "🎨"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBlockade((prev) => (prev + 1) % blockades.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    blockades.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedCards(prev => [...prev, index])
      }, index * 300)
    })
  }, [])

  return (
    <section id="problem" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-50 to-orange-50 rounded-full mb-6">
              <span className="text-sm font-medium text-red-600">🚨 The Double Brand Blockade</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              Why Most Creators Stay <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
                Generic & Invisible
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Two critical blockades prevent creators from building authentic, differentiated brands. 
              Most platforms solve only one - or neither. We solve both.
            </p>
          </div>

          {/* Interactive Blockade Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {blockades.map((blockade, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-700 ${
                  animatedCards.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                onMouseEnter={() => setActiveBlockade(index)}
              >
                <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 cursor-pointer h-full ${
                  activeBlockade === index 
                    ? `border-${blockade.color}-300 shadow-${blockade.color}-100` 
                    : 'border-gray-100 hover:border-gray-200'
                }`}>
                  
                  {/* Active Indicator */}
                  {activeBlockade === index && (
                    <div className={`absolute -top-2 -right-2 w-4 h-4 bg-${blockade.color}-500 rounded-full animate-pulse`}></div>
                  )}

                  {/* Icon & Title */}
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">
                      {blockade.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-space-grotesk mb-2">
                      {blockade.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed text-center">
                    {blockade.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    {blockade.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <div className={`w-2 h-2 bg-${blockade.color}-400 rounded-full mr-3 flex-shrink-0 mt-2`}></div>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className={`p-4 bg-${blockade.color}-50 rounded-lg border border-${blockade.color}-200`}>
                    <p className={`text-sm font-medium text-${blockade.color}-700`}>
                      {blockade.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Real Creator Scenarios */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk text-center mb-8">
              Real Creator Struggles
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {scenarios.map((scenario, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{scenario.icon}</span>
                    <h4 className="font-semibold text-gray-800">{scenario.persona}</h4>
                  </div>
                  
                  <blockquote className="text-gray-600 italic mb-4 leading-relaxed">
                    {scenario.problem}
                  </blockquote>
                  
                  <div className="flex items-center">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide mr-2">
                      Affected by:
                    </span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      scenario.blockade === 'both' ? 'bg-purple-50 text-purple-600' :
                      scenario.blockade === 'foundation' ? 'bg-red-50 text-red-600' :
                      'bg-orange-50 text-orange-600'
                    }`}>
                      {scenario.blockade === 'both' ? 'Both Blockades' :
                       scenario.blockade === 'foundation' ? 'Foundation Problem' :
                       'Activation Problem'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Preview */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-coral-50 to-purple-50 rounded-2xl p-8 border border-coral-200">
              <h3 className="text-2xl font-bold font-space-grotesk mb-4">
                The Integrated Solution
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                BrandKernel.io solves both blockades through an integrated platform: 
                <span className="font-semibold text-coral-600">Deep AI dialogue</span> for your foundation + 
                <span className="font-semibold text-purple-600">intelligent flows</span> for daily activation.
              </p>
              <button className="bg-gradient-to-r from-coral-500 to-coral-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-coral-600 hover:to-coral-700 transition-all duration-300">
                See How We Solve This
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
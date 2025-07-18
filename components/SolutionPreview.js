'use client'
import { useState, useEffect } from 'react'

export default function SolutionPreview() {
  const [activeTab, setActiveTab] = useState(0)
  const [animatedCards, setAnimatedCards] = useState([])

  const solutions = [
    {
      title: "Deep Discovery",
      subtitle: "Dialogical Excellence",
      description: "An empathetic AI coach that asks the questions strategists charge $5,000 for",
      icon: "💬",
      features: [
        "Deep reflection dialogues",
        "Implicit strategic framework", 
        "Adaptive conversation flow",
        "Authentic core extraction"
      ],
      visual: "dialog",
      color: "blue"
    },
    {
      title: "Your Brand Kernel",
      subtitle: "Strategic Foundation",
      description: "Your authentic core: Purpose, values, essence - crystallized into your personal Brand Book",
      icon: "💎",
      features: [
        "Purpose & Mission definition",
        "Core Values articulation",
        "Brand Essence crystallization", 
        "Shared Belief identification"
      ],
      visual: "kernel",
      color: "coral"
    },
    {
      title: "Effortless Activation",
      subtitle: "Brand Flows (Coming Soon)",
      description: "Automated flows that transform your kernel into compelling content - without complex prompting",
      icon: "⚡",
      features: [
        "One-click content generation",
        "Kernel-based flows",
        "Consistency assurance",
        "Time-saving automation"
      ],
      visual: "flows",
      color: "purple"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % solutions.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    solutions.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedCards(prev => [...prev, index])
      }, index * 200)
    })
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
            <span className="bg-gradient-to-r from-coral-500 to-purple-600 bg-clip-text text-transparent">
              Dialogical Excellence
            </span> meets Strategic Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We solve both blockades through an integrated platform: 
            <span className="font-semibold">Deep AI dialogue</span> for your foundation, 
            <span className="font-semibold">intelligent flows</span> for your daily activation.
          </p>
        </div>

        {/* Interactive Solution Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-700 ${
                animatedCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              onMouseEnter={() => setActiveTab(index)}
            >
              <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 cursor-pointer h-full ${
                activeTab === index 
                  ? `border-${solution.color}-300 shadow-${solution.color}-100` 
                  : 'border-gray-100 hover:border-gray-200'
              }`}>
                
                {/* Active Indicator */}
                {activeTab === index && (
                  <div className={`absolute -top-2 -right-2 w-4 h-4 bg-${solution.color}-500 rounded-full animate-pulse`}></div>
                )}

                {/* Icon & Title */}
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-space-grotesk mb-2">
                    {solution.title}
                  </h3>
                  <p className={`text-sm font-medium text-${solution.color}-600 uppercase tracking-wide`}>
                    {solution.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed text-center">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`w-2 h-2 bg-${solution.color}-400 rounded-full mr-3 flex-shrink-0`}></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Status Badge */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    index === 2 
                      ? 'bg-purple-50 text-purple-600' 
                      : 'bg-green-50 text-green-600'
                  }`}>
                    {index === 2 ? (
                      <>
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        Coming Soon
                      </>
                    ) : (
                      <>
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        MVP Ready
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div className="bg-gradient-to-r from-blue-50 via-coral-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk text-center mb-8">
            Your Brand Kernel Journey: From Confusion to Clarity
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Start dialogue", desc: "Empathetic AI coach begins conversation", color: "blue" },
              { step: "2", title: "Discover kernel", desc: "Deep reflection leads to insights", color: "coral" }, 
              { step: "3", title: "Crystallize identity", desc: "Your Brand Book is generated", color: "purple" },
              { step: "4", title: "Activate daily", desc: "Flows transform kernel into content", color: "green" }
            ].map((phase, index) => (
              <div key={index} className="text-center relative">
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform translate-x-2"></div>
                )}
                
                {/* Step Circle */}
                <div className={`w-12 h-12 bg-${phase.color}-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 shadow-lg`}>
                  {phase.step}
                </div>
                
                {/* Content */}
                <h4 className="font-semibold text-gray-800 mb-2">{phase.title}</h4>
                <p className="text-sm text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-lg font-medium text-gray-700">
              <span className="text-coral-600 font-bold">The Result:</span> A clear Brand Kernel as Single Source of Truth 
              + the tools for its daily activation
            </p>
          </div>
        </div>

        {/* Unique Value Proposition */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-space-grotesk mb-4">
              Our Core USP: The Integrated Bridge
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              As the only platform, we seamlessly connect <span className="font-semibold text-blue-600">deep strategic dialogue</span> 
              with <span className="font-semibold text-coral-600">practical daily activation</span>. 
              We close the critical gap between <em>identity</em> and <em>impact</em> – 
              optimized for Personal & Small Brands.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl mb-2">🏢</div>
                <p className="text-sm text-gray-600"><strong>vs. Agencies:</strong><br />More accessible, transparent, flexible</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🛠️</div>
                <p className="text-sm text-gray-600"><strong>vs. DIY Tools:</strong><br />Strategic depth, individual reflection</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🤖</div>
                <p className="text-sm text-gray-600"><strong>vs. Generic AI:</strong><br />Guidance, structure, branding intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
              About <span className="text-coral-500">BrandKernel.io</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              We believe every creator has a unique Brand Kernel – 
              an authentic core that sets them apart in the AI age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold font-space-grotesk mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  In the AI age, authenticity becomes the decisive competitive factor. 
                  While tools become increasingly similar, your Brand Kernel is the only thing 
                  that truly cannot be copied.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We built BrandKernel.io to help creators, freelancers, and entrepreneurs 
                  discover their authentic core and activate it daily.
                </p>
              </div>
              <div className="bg-gradient-to-br from-coral-50 to-purple-50 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-5xl mb-4">💎</div>
                  <h3 className="text-xl font-bold font-space-grotesk mb-4">
                    The Brand Kernel
                  </h3>
                  <p className="text-gray-600">
                    Your authentic core of Purpose, Values, Essence, and Shared Beliefs – 
                    crystallized into a strategic framework.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-space-grotesk text-center mb-12">
              The Problem We Solve
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 rounded-xl p-8 border border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-4">
                  🚨 The Double Brand Blockade
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong>Foundation Problem:</strong> Missing clarity about brand identity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong>Activation Problem:</strong> Difficulty in daily implementation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-xl p-8 border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  ✅ Our Integrated Solution
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Dialogical Excellence:</strong> AI Coach for deep brand discovery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Brand Flows:</strong> Automated content activation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-space-grotesk text-center mb-12">
              Our Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h3 className="text-xl font-bold font-space-grotesk mb-4">Authenticity</h3>
                <p className="text-gray-600">
                  We believe in genuine, authentic brand development instead of superficial optimization.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h3 className="text-xl font-bold font-space-grotesk mb-4">Empathy</h3>
                <p className="text-gray-600">
                  Our AI Coach asks the right questions with the sensitivity of an experienced strategy consultant.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-bold font-space-grotesk mb-4">Efficiency</h3>
                <p className="text-gray-600">
                  Strategic depth doesn't have to be complex. We make brand development accessible and actionable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-space-grotesk text-center mb-12">
              Meet the Founder
            </h2>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="w-24 h-24 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <span className="text-3xl text-white font-bold">MA</span>
                  </div>
                  <h3 className="text-xl font-bold font-space-grotesk mb-2">
                    Maximilian Appelt
                  </h3>
                  <p className="text-coral-600 font-medium mb-4">
                    Founder & Designer
                  </p>
                  <a 
                    href="https://de.linkedin.com/in/maximilian-appelt-a1579bb8" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                    </svg>
                    LinkedIn Profile
                  </a>
                </div>
                
                <div className="md:col-span-2">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Maximilian is a designer (M.A.) and entrepreneur with a passion for authentic brand development. 
                    As the founder of MARANIA®, he experienced firsthand the challenges of building a brand from scratch 
                    and the power of clear brand identity.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    His background in design and entrepreneurship gives him a unique perspective on the gap between 
                    brand strategy and daily activation – the core problem BrandKernel.io solves.
                  </p>
                  <blockquote className="border-l-4 border-coral-400 pl-4 text-gray-700 italic">
                    "I've experienced the struggle of building an authentic brand while managing day-to-day operations. 
                    BrandKernel.io is my answer to this challenge – making strategic brand development accessible and actionable."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-space-grotesk mb-6">
              Ready to Discover Your Brand Kernel?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the waitlist and become part of the brand revolution.
            </p>
            <a
              href="https://tally.so/r/mVXDpQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-coral-500 to-coral-600 text-white font-semibold rounded-lg hover:from-coral-600 hover:to-coral-700 transition-all duration-300 text-lg"
            >
              Join Waitlist
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: 'About - BrandKernel.io',
  description: 'Learn about BrandKernel.io\'s mission to help creators discover and activate their authentic Brand Kernel in the AI age.',
  keywords: 'about brandkernel, brand strategy mission, authentic branding, AI brand development',
}
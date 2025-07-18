import Link from 'next/link'

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
              The <span className="text-coral-500">BrandKernel</span> Manifesto
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Our beliefs about authentic brand development 
              in the age of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <div className="bg-gradient-to-r from-coral-50 to-purple-50 rounded-2xl p-8 mb-12 border border-coral-200">
              <h2 className="text-2xl font-bold font-space-grotesk mb-4 text-gray-800">
                We believe...
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                ...that in the AI age, authenticity is the only non-copyable competitive factor. 
                While tools and technologies become increasingly interchangeable, your Brand Kernel – 
                your authentic core – is the only thing that truly remains unique.
              </p>
            </div>

            {/* Belief 1 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-gray-800">
                1. Every Creator Has a Unique Brand Kernel
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Deep within each of us lies an authentic core – a unique combination of 
                Purpose, Values, Essence, and Shared Beliefs. This Brand Kernel is not constructed 
                or invented, but already exists and waits to be discovered.
              </p>
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                <p className="text-blue-800 font-medium">
                  "Your Brand Kernel is like a diamond: Already complete, 
                  but only through proper cutting does its true brilliance shine."
                </p>
              </div>
            </div>

            {/* Belief 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-gray-800">
                2. Dialogical Excellence Over Surface Optimization
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                True brand development doesn't happen through templates or quick fixes, 
                but through deep, empathetic dialogues. An experienced strategy consultant asks 
                the right questions at the right time – exactly what we've embodied in our AI.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="font-bold text-red-700 mb-3">❌ Superficial</h4>
                  <ul className="text-red-600 space-y-2">
                    <li>• Quick templates</li>
                    <li>• Generic frameworks</li>
                    <li>• One-size-fits-all solutions</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-700 mb-3">✅ Dialogical Excellence</h4>
                  <ul className="text-green-600 space-y-2">
                    <li>• Deep reflection dialogues</li>
                    <li>• Adaptive conversation flow</li>
                    <li>• Individual core extraction</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Belief 3 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-gray-800">
                3. Activation is as Important as Discovery
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Discovering a Brand Kernel is only the first step. The real challenge 
                lies in daily activation – consistently translating your identity 
                into content, communication, and customer interactions.
              </p>
              <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-400">
                <p className="text-purple-800 font-medium">
                  "An unused Brand Kernel is like treasure in a vault – valuable, 
                  but powerless. Only daily activation creates real impact."
                </p>
              </div>
            </div>

            {/* Belief 4 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-gray-800">
                4. AI as Amplifier, Not Replacement for Authenticity
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                AI tools can be powerful amplifiers – but only when guided by an 
                authentic core. Without your Brand Kernel as a filter, 
                AI leads to homogenization and interchangeability.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">🤖➡️📝</div>
                  <h4 className="font-bold text-gray-700 mb-2">Without Brand Kernel</h4>
                  <p className="text-gray-600">AI → Generic Content</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">💎🤖➡️✨</div>
                  <h4 className="font-bold text-coral-700 mb-2">With Brand Kernel</h4>
                  <p className="text-gray-600">Brand Kernel + AI → Authentic Content</p>
                </div>
              </div>
            </div>

            {/* Belief 5 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-gray-800">
                5. Branding is Not Luxury, But Necessity
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                In a world where everyone has access to the same tools, your brand 
                is the only sustainable differentiator. Branding isn't marketing luxury, 
                but business-critical infrastructure.
              </p>
              <div className="bg-coral-50 rounded-xl p-6 border-l-4 border-coral-400">
                <h4 className="font-bold text-coral-700 mb-3">The New Reality:</h4>
                <ul className="text-coral-600 space-y-2">
                  <li>• Same tools → Brand becomes the differentiator</li>
                  <li>• More competition → Authenticity becomes crucial</li>
                  <li>• AI homogenization → Humanity becomes valuable</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-coral-500 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold font-space-grotesk mb-4">
                Ready for Your Brand Kernel Journey?
              </h2>
              <p className="text-xl mb-6">
                Discover your authentic core and activate it daily.
              </p>
              <a
                href="https://tally.so/r/mVXDpQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-coral-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 text-lg"
              >
                Join Waitlist
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: 'Manifesto - BrandKernel.io',
  description: 'Our beliefs about authentic brand development in the age of artificial intelligence.',
  keywords: 'brand manifesto, authentic branding, AI age branding, brand kernel philosophy',
}
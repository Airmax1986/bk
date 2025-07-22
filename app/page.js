// app/page.js
import BrandKernelHeroChat from '../components/BrandKernelHeroChat'
import WaitlistSection from '../components/WaitlistSection'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="w-full min-h-screen">
      {/* Section 1: Hero with Chat Window */}
      <BrandKernelHeroChat />
      
      {/* Section 2: Now BrandKernel can (Feature Cards) */}
      <WaitlistSection />

      {/* Section 3: Problem Statement */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-center mb-16">
            The <span className="text-coral-500">Double Brand Blockade</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 text-center max-w-4xl mx-auto mb-16">
            Creators, freelancers, and consultants struggle with two fundamental challenges that paralyze their brand development and limit their success.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {/* Generic Trap Card */}
            <div className="glass-card-light p-8 text-center flex flex-col items-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-800 mb-2">The Generic Trap</h3>
              <p className="text-lg text-gray-600 mb-4">67% of creators say they sound like everyone else</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Without a clear brand kernel, you blend into the noise. Your content feels interchangeable, your pricing power suffers, and ideal clients can't find you.
              </p>
              <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">Blocks success</span>
            </div>

            {/* Strategy-Execution Gap Card */}
            <div className="glass-card-light p-8 text-center flex flex-col items-center">
              <div className="text-5xl mb-4">🌉</div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-800 mb-2">The Strategy-Execution Gap</h3>
              <p className="text-lg text-gray-600 mb-4">You know you need a brand strategy. You don't know how to live it daily.</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Even when you have clarity on paper, translating strategy into consistent daily actions feels impossible. The gap between knowing and doing kills momentum.
              </p>
              <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">Blocks success</span>
            </div>

            {/* AI Paradox Card */}
            <div className="glass-card-light p-8 text-center flex flex-col items-center">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-800 mb-2">The AI Paradox</h3>
              <p className="text-lg text-gray-600 mb-4">More AI tools. More generic content. Less authentic voice.</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                AI amplifies what you put in. Without an authentic kernel as your filter, AI-generated content sounds like everyone else using the same prompts.
              </p>
              <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">Blocks success</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-24">
            <h3 className="text-3xl font-bold font-space-grotesk text-gray-800 mb-8">
              The Consequence: A Vicious Cycle of Interchangeability and Frustration
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="text-xl font-bold text-red-700 mb-4">Without a Clear Brand Kernel:</h4>
                <ul className="text-gray-700 text-left space-y-2">
                  <li>• Price pressure due to interchangeability</li>
                  <li>• Ineffective marketing & content</li>
                  <li>• Weak customer loyalty & referrals</li>
                  <li>• Burnout from constant "everything for everyone"</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h4 className="text-xl font-bold text-green-700 mb-4">With an Authentic Brand Kernel:</h4>
                <ul className="text-gray-700 text-left space-y-2">
                  <li>• Premium pricing through differentiation</li>
                  <li>• Ideal clients find you magnetically</li>
                  <li>• Clear focus increases efficiency</li>
                  <li>• Fulfillment through authentic work</li>
                </ul>
              </div>
            </div>
            <p className="text-2xl font-bold font-space-grotesk text-gray-900 mt-12">
              The Brand Kernel is the decisive, non-copyable competitive factor in the AI age
            </p>
            <p className="text-xl text-gray-600 mt-4">
              We believe: Every creator has a unique kernel. We're building the intelligence to help you find yours.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Your Brand Kernel Journey */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-center mb-16">
            Your Brand Kernel Journey: <span className="text-purple-500">From Confusion to Clarity</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="glass-card-light p-6 text-center">
              <div className="text-5xl font-bold text-blue-500 mb-4">1</div>
              <h3 className="text-xl font-bold font-space-grotesk mb-2">Start dialogue</h3>
              <p className="text-gray-600">Empathetic AI coach begins conversation</p>
            </div>
            <div className="glass-card-light p-6 text-center">
              <div className="text-5xl font-bold text-purple-500 mb-4">2</div>
              <h3 className="text-xl font-bold font-space-grotesk mb-2">Discover kernel</h3>
              <p className="text-gray-600">Deep reflection leads to insights</p>
            </div>
            <div className="glass-card-light p-6 text-center">
              <div className="text-5xl font-bold text-coral-500 mb-4">3</div>
              <h3 className="text-xl font-bold font-space-grotesk mb-2">Crystallize identity</h3>
              <p className="text-gray-600">Your Brand Book is generated</p>
            </div>
            <div className="glass-card-light p-6 text-center">
              <div className="text-5xl font-bold text-green-500 mb-4">4</div>
              <h3 className="text-xl font-bold font-space-grotesk mb-2">Activate daily</h3>
              <p className="text-gray-600">Flows transform kernel into content</p>
            </div>
          </div>
          <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mt-16">
            The Result: A clear Brand Kernel as Single Source of Truth + the tools for its daily activation
          </p>
        </div>
      </section>

      {/* Section 5: Our Core USP */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-center mb-16">
            Our Core USP: <span className="text-blue-500">The Integrated Bridge</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 text-center max-w-4xl mx-auto mb-16">
            As the only platform, we seamlessly connect deep strategic dialogue with practical daily activation. We close the critical gap between identity and impact – optimized for Personal & Small Brands.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card-light p-8 text-center flex flex-col items-center">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-800 mb-2">vs. Agencies</h3>
              <p className="text-lg text-gray-600">More accessible, transparent, flexible</p>
            </div>
            <div className="glass-card-light p-8 text-center flex flex-col items-center">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-800 mb-2">vs. DIY Tools</h3>
              <p className="text-lg text-gray-600">Strategic depth, individual reflection</p>
            </div>
            <div className="glass-card-light p-8 text-center flex flex-col items-center">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-800 mb-2">vs. Generic AI</h3>
              <p className="text-lg text-gray-600">Guidance, structure, branding intelligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Thought Leadership Teaser */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-center mb-16">
            🧠 Strategic Insights for <span className="text-coral-500">Brand Builders</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 text-center max-w-4xl mx-auto mb-16">
            Deep-dive analysis, frameworks, and strategic thinking for creators who want to build 
            authentic, differentiated brands in the AI era.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Example Blog Post 1 */}
            <Link href="/blog/the-brand-authenticity-crisis" className="glass-card-light p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <span className="text-sm text-gray-500 mb-2 block">Strategy • 5 min</span>
                <h3 className="text-xl font-bold font-space-grotesk text-gray-800 mb-3 line-clamp-2">
                  The Brand Authenticity Crisis
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  Why 87% of creators struggle with generic positioning and how strategic frameworks unlock differentiation.
                </p>
              </div>
              <div className="text-right text-coral-500 font-medium mt-4">Read Article →</div>
            </Link>

            {/* Example Blog Post 2 */}
            <Link href="/blog/beyond-generic-ai-content" className="glass-card-light p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <span className="text-sm text-gray-500 mb-2 block">Innovation • 7 min</span>
                <h3 className="text-xl font-bold font-space-grotesk text-gray-800 mb-3 line-clamp-2">
                  Beyond Generic AI Content
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  The missing link between AI tools and authentic brand voice - and why most creators get it wrong.
                </p>
              </div>
              <div className="text-right text-coral-500 font-medium mt-4">Read Article →</div>
            </Link>

            {/* Example Blog Post 3 */}
            <Link href="/blog/the-dialogical-approach" className="glass-card-light p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <span className="text-sm text-gray-500 mb-2 block">Methodology • 6 min</span>
                <h3 className="text-xl font-bold font-space-grotesk text-gray-800 mb-3 line-clamp-2">
                  The Dialogical Approach
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  How conversational intelligence outperforms traditional brand workshops by 300%.
                </p>
              </div>
              <div className="text-right text-coral-500 font-medium mt-4">Read Article →</div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 text-lg"
            >
              Explore All Articles
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Detailed Waitlist CTA */}
      <section className="py-24 bg-gradient-to-br from-coral-400 via-coral-500 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
          }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            Reserve Your <span className="text-white/90">Brand Kernel Discovery</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Join the exclusive community of creators discovering their authentic brand. 
            Get immediate access to valuable tools and insights.
          </p>

          <a
            href="https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS4xNzQ2NzQyOTA3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-coral-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
          >
            Reserve Your Brand Kernel Discovery
          </a>

          {/* What you get immediately */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-xl font-bold mb-2">Brand Kernel Assessment</h3>
              <p className="text-white/80 text-sm">3-minute tool that gives you immediate insights into your brand core. Delivered via email.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="text-3xl mb-3">📰</div>
              <h3 className="text-xl font-bold mb-2">Weekly Brand Intelligence</h3>
              <p className="text-white/80 text-sm">Curated strategic insights, framework deep-dives, and creator success stories every Wednesday.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="text-3xl mb-3">🔑</div>
              <h3 className="text-xl font-bold mb-2">Beta Access Priority</h3>
              <p className="text-white/80 text-sm">Exclusive early access to the platform based on your engagement. Be among the first 100 users.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-xl font-bold mb-2">Exclusive Community</h3>
              <p className="text-white/80 text-sm">Access to private creator community with peers, live Q&As, and direct feedback.</p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                ))}
              </div>
              <span><span className="font-semibold text-white">247+</span> Creators already on the list</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12 pt-8 border-t border-white/30">
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <p className="text-sm text-white/80"><strong>Early Access:</strong><br />First 500 get priority beta access</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🎯</div>
              <p className="text-sm text-white/80"><strong>No Obligations:</strong><br />Free assessment, cancel anytime</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🔒</div>
              <p className="text-sm text-white/80"><strong>Privacy First:</strong><br />GDPR compliant, data protection guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Founder Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-center mb-16">
            🚀 Building the Future of <span className="text-blue-500">Personal Branding</span>
          </h2>
          
          <div className="bg-gray-50 rounded-3xl p-12 text-center shadow-sm mb-16">
            <div className="w-24 h-24 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-4xl">MA</span>
            </div>
            <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-4">Maximilian Appelt</h3>
            <p className="text-xl text-coral-600 font-medium mb-6">Founder & Brand Strategist</p>
            <blockquote className="text-xl text-gray-700 italic mb-6 max-w-3xl mx-auto">
              "After 20+ years in brand consulting, I've learned that most creators are just one conversation away from clarity. 
              Traditional consulting is powerful but not scalable. BrandKernel.io makes that deep strategic dialogue accessible to everyone."
            </blockquote>
            <div className="text-gray-600 text-lg space-y-2 mb-8">
              <p>• 20+ years in brand consulting & strategy</p>
              <p>• M.A. Visual Communication & Design</p>
              <p>• Launched 2 e-commerce startups</p>
              <p>• Building as Solopreneur & Dad</p>
            </div>
            <a 
              href="https://de.linkedin.com/in/maximilian-appelt-a1579bb8" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="glass-card-light p-6">
              <div className="text-5xl mb-4">🤖</div>
              <h4 className="text-xl font-bold font-space-grotesk mb-2">AI + Human Intelligence</h4>
              <p className="text-gray-600">The future belongs to those who combine AI efficiency with human authenticity. We're building the bridge.</p>
            </div>
            <div className="glass-card-light p-6">
              <div className="text-5xl mb-4">💎</div>
              <h4 className="text-xl font-bold font-space-grotesk mb-2">Authentic Differentiation</h4>
              <p className="text-gray-600">In a world of generic content, authentic differentiation becomes the ultimate competitive advantage.</p>
            </div>
            <div className="glass-card-light p-6">
              <div className="text-5xl mb-4">🌊</div>
              <h4 className="text-xl font-bold font-space-grotesk mb-2">Strategic Accessibility</h4>
              <p className="text-gray-600">Professional brand strategy shouldn't be limited to Fortune 500 companies. Every creator deserves strategic excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Our Mission & Roadmap */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-center mb-16">
            Our Mission & <span className="text-purple-500">Roadmap</span>
          </h2>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              To build the world's most intelligent, empathetic, and accessible brand discovery platform. We combine the depth of strategic consulting with the scalability of AI, creating a new category: Dialogical Brand Intelligence.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card-light p-6">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-xl font-bold font-space-grotesk mb-2">Accelerate Discovery</h3>
                <p className="text-gray-600 text-sm">Reduce brand clarity time from months to days through intelligent dialogue.</p>
              </div>
              <div className="glass-card-light p-6">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-bold font-space-grotesk mb-2">Democratize Strategy</h3>
                <p className="text-gray-600 text-sm">Make high-level brand thinking accessible to every creator and entrepreneur.</p>
              </div>
              <div className="glass-card-light p-6">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="text-xl font-bold font-space-grotesk mb-2">Amplify Authenticity</h3>
                <p className="text-gray-600 text-sm">Help creators build brands that feel genuinely them, not generic templates.</p>
              </div>
            </div>
          </div>

          <h3 className="text-3xl font-bold font-space-grotesk text-center mb-12 mt-24">Our Journey & Roadmap</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="glass-card-light p-6 text-center">
              <div className="text-5xl font-bold text-green-500 mb-4">✅</div>
              <h4 className="text-xl font-bold font-space-grotesk mb-2">Phase 1: Foundation</h4>
              <p className="text-gray-600 text-sm">MVP Brand Kernel Discovery launched. Core dialogue system operational.</p>
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs mt-4">Complete</span>
            </div>
            <div className="glass-card-light p-6 text-center">
              <div className="text-5xl font-bold text-blue-500 mb-4">🚧</div>
              <h4 className="text-xl font-bold font-space-grotesk mb-2">Phase 2: Intelligence</h4>
              <p className="text-gray-600 text-sm">Advanced AI coaching, personalized insights, and strategic recommendations.</p>
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs mt-4">Q3 2025</span>
            </div>
            <div className="glass-card-light p-6 text-center">
              <div className="text-5xl font-bold text-purple-500 mb-4">📅</div>
              <h4 className="text-xl font-bold font-space-grotesk mb-2">Phase 3: Activation</h4>
              <p className="text-gray-600 text-sm">Brand Flows launch. Automatic content generation from Brand Kernel.</p>
              <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs mt-4">Q4 2025</span>
            </div>
            <div className="glass-card-light p-6 text-center">
              <div className="text-5xl font-bold text-gray-500 mb-4">🔮</div>
              <h4 className="text-xl font-bold font-space-grotesk mb-2">Phase 4: Scale</h4>
              <p className="text-gray-600 text-sm">Enterprise features, team collaboration, and advanced analytics.</p>
              <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs mt-4">2026</span>
            </div>
          </div>

          <div className="text-center mt-24">
            <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-6">
              Join Our Vision
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Be part of the revolution that's democratizing brand strategy. Help us build a platform that serves creators, not just corporations.
            </p>
            <a
              href="https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS4xNzQ2NzQyOTA3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-coral-500 text-white font-semibold rounded-lg hover:bg-coral-600 transition-all duration-300 text-lg"
            >
              Reserve Your Brand Discovery
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
  title: 'BrandKernel.io - Discover Your Authentic Brand',
  description: 'The AI dialogue platform for authentic brand development. Discover your Brand Kernel through intelligent conversations and activate it daily.',
  keywords: 'brand kernel, personal branding, AI dialogue, authentic branding, brand flows, freelancer branding, creator branding, brand intelligence',
  openGraph: {
    title: 'BrandKernel.io - Discover Your Authentic Brand',
    description: 'The AI dialogue platform for authentic brand development.',
    type: 'website',
    url: 'https://brandkernel.io',
  }
}

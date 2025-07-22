import BrandKernelHeroChat from '../components/BrandKernelHeroChat'
import WaitlistSection from '../components/WaitlistSection'
import ChatInputSection from '../components/ChatInputSection'
import Link from 'next/link'
import Image from 'next/image' // Import Image component for optimized images

export default function HomePage() {
  return (
    <div className="w-full min-h-screen">
      {/* Section 1: Hero with Chat Window */}
      <BrandKernelHeroChat />
      
      {/* Section 2: Now BrandKernel can (Feature Cards) */}
      <WaitlistSection />

      {/* Section 3: Ask me anything (Chat Input) */}
      <ChatInputSection />

      {/* Section 4: Problem Statement (Generic Content) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-center mb-16">
            Headline 1: The <span className="text-coral-500">Double Brand Blockade</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 text-center max-w-4xl mx-auto mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {/* Generic Trap Card */}
            <div className="glass-card-light p-8 text-center flex flex-col items-center">
              <div className="text-5xl mb-4">
                <span role="img" aria-label="Icon 1">👥</span>
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-800 mb-2">Headline 2: The Generic Trap</h3>
              <p className="text-lg text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">Label 1</span>
            </div>

            {/* Strategy-Execution Gap Card */}
            <div className="glass-card-light p-8 text-center flex flex-col items-center">
              <div className="text-5xl mb-4">
                <span role="img" aria-label="Icon 2">🌉</span>
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-800 mb-2">Headline 2: The Strategy-Execution Gap</h3>
              <p className="text-lg text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">Label 2</span>
            </div>

            {/* AI Paradox Card */}
            <div className="glass-card-light p-8 text-center flex flex-col items-center">
              <div className="text-5xl mb-4">
                <span role="img" aria-label="Icon 3">🔄</span>
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-800 mb-2">Headline 2: The AI Paradox</h3>
              <p className="text-lg text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">Label 3</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-24">
            <h3 className="text-3xl font-bold font-space-grotesk text-gray-800 mb-8">
              Headline 3: The Consequence
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="text-xl font-bold text-red-700 mb-4">Headline 4: Negative Consequences</h4>
                <ul className="text-gray-700 text-left space-y-2">
                  <li>• Lorem ipsum dolor sit amet</li>
                  <li>• Consectetur adipiscing elit</li>
                  <li>• Sed do eiusmod tempor</li>
                  <li>• Incididunt ut labore et dolore</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h4 className="text-xl font-bold text-green-700 mb-4">Headline 4: Positive Outcomes</h4>
                <ul className="text-gray-700 text-left space-y-2">
                  <li>• Lorem ipsum dolor sit amet</li>
                  <li>• Consectetur adipiscing elit</li>
                  <li>• Sed do eiusmod tempor</li>
                  <li>• Incididunt ut labore et dolore</li>
                </ul>
              </div>
            </div>
            <p className="text-2xl font-bold font-space-grotesk text-gray-900 mt-12">
              Headline 5: Key Takeaway
            </p>
            <p className="text-xl text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Your Brand Kernel Journey (Generic Content) */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-center mb-16">
            Headline 1: Your Journey: <span className="text-purple-500">From Confusion to Clarity</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="glass-card-light p-6 text-center">
              <div className="text-5xl font-bold text-blue-500 mb-4">1</div>
              <h3 className="text-xl font-bold font-space-grotesk mb-2">Headline 3: Step One</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="glass-card-light p-6 text-center">
              <div className="text-5xl font-bold text-purple-500 mb-4">2</div>
              <h3 className="text-xl font-bold font-space-grotesk mb-2">Headline 3: Step Two</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="glass-card-light p-6 text-center">
              <div className="text-5xl font-bold text-coral-500 mb-4">3</div>
              <h3 className="text-xl font-bold font-space-grotesk mb-2">Headline 3: Step Three</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="glass-card-light p-6 text-center">
              <div className="text-5xl font-bold text-green-500 mb-4">4</div>
              <h3 className="text-xl font-bold font-space-grotesk mb-2">Headline 3: Step Four</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mt-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Section 6: Our Core USP (Generic Content) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-center mb-16">
            Headline 1: Our Core USP: <span className="text-blue-500">The Integrated Bridge</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 text-center max-w-4xl mx-auto mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card-light p-8 text-center flex flex-col items-center">
              <div className="text-5xl mb-4">
                <span role="img" aria-label="Icon 4">🏢</span>
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-800 mb-2">Headline 2: vs. Agencies</h3>
              <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="glass-card-light p-8 text-center flex flex-col items-center">
              <div className="text-5xl mb-4">
                <span role="img" aria-label="Icon 5">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-800 mb-2">Headline 2: vs. DIY Tools</h3>
              <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="glass-card-light p-8 text-center flex flex-col items-center">
              <div className="text-5xl mb-4">
                <span role="img" aria-label="Icon 6">🤖</span>
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-800 mb-2">Headline 2: vs. Generic AI</h3>
              <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Thought Leadership Teaser (Generic Content) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-center mb-16">
            <span role="img" aria-label="Icon 7">🧠</span> Headline 1: Strategic Insights for <span className="text-coral-500">Brand Builders</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 text-center max-w-4xl mx-auto mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Example Blog Post 1 */}
            <Link href="/blog/generic-post-1" className="glass-card-light p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <span className="text-sm text-gray-500 mb-2 block">Category • X min</span>
                <h3 className="text-xl font-bold font-space-grotesk text-gray-800 mb-3 line-clamp-2">
                  Headline 3: Generic Blog Post Title One
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="text-right text-coral-500 font-medium mt-4">Read Article →</div>
            </Link>

            {/* Example Blog Post 2 */}
            <Link href="/blog/generic-post-2" className="glass-card-light p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <span className="text-sm text-gray-500 mb-2 block">Category • Y min</span>
                <h3 className="text-xl font-bold font-space-grotesk text-gray-800 mb-3 line-clamp-2">
                  Headline 3: Generic Blog Post Title Two
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="text-right text-coral-500 font-medium mt-4">Read Article →</div>
            </Link>

            {/* Example Blog Post 3 */}
            <Link href="/blog/generic-post-3" className="glass-card-light p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <span className="text-sm text-gray-500 mb-2 block">Category • Z min</span>
                <h3 className="text-xl font-bold font-space-grotesk text-gray-800 mb-3 line-clamp-2">
                  Headline 3: Generic Blog Post Title Three
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

      {/* Section 8: Detailed Waitlist CTA (Generic Content) */}
      <section className="py-24 bg-gradient-to-br from-coral-400 via-coral-500 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
          }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            Headline 1: Reserve Your <span className="text-white/90">Brand Kernel Discovery</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <a
            href="https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS4xNzQ2NzQyOTA3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-coral-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
          >
            Call to Action 1
          </a>

          {/* What you get immediately */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="text-3xl mb-3">
                <span role="img" aria-label="Icon 8">📝</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Headline 3: Feature One</h3>
              <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="text-3xl mb-3">
                <span role="img" aria-label="Icon 9">📰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Headline 3: Feature Two</h3>
              <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="text-3xl mb-3">
                <span role="img" aria-label="Icon 10">🔑</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Headline 3: Feature Three</h3>
              <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="text-3xl mb-3">
                <span role="img" aria-label="Icon 11">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Headline 3: Feature Four</h3>
              <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
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
              <span><span className="font-semibold text-white">XXX+</span> Lorem Ipsum</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12 pt-8 border-t border-white/30">
            <div className="text-center">
              <div className="text-2xl mb-2">
                <span role="img" aria-label="Icon 12">⚡</span>
              </div>
              <p className="text-sm text-white/80"><strong>Headline 4:</strong><br />Lorem ipsum dolor sit amet</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">
                <span role="img" aria-label="Icon 13">🎯</span>
              </div>
              <p className="text-sm text-white/80"><strong>Headline 4:</strong><br />Lorem ipsum dolor sit amet</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">
                <span role="img" aria-label="Icon 14">🔒</span>
              </div>
              <p className="text-sm text-white/80"><strong>Headline 4:</strong><br />Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Founder Vision (Generic Content) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-center mb-16">
            <span role="img" aria-label="Icon 15">🚀</span> Headline 1: Building the Future of <span className="text-blue-500">Personal Branding</span>
          </h2>
          
          <div className="bg-gray-50 rounded-3xl p-12 text-center shadow-sm mb-16">
            {/* Founder Image */}
            <Image 
              src="/images/maximilian_appelt.jpg" // Pfad zum Gründerbild
              alt="Maximilian Appelt - Founder & Brand Strategist"
              width={96} // w-24 = 96px
              height={96} // h-24 = 96px
              className="rounded-full mx-auto mb-6 object-cover object-top border-4 border-coral-500 shadow-md"
            />
            <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-4">Headline 2: Founder Name</h3>
            <p className="text-xl text-coral-600 font-medium mb-6">Subtitle 1</p>
            <blockquote className="text-xl text-gray-700 italic mb-6 max-w-3xl mx-auto">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            </blockquote>
            <div className="text-gray-600 text-lg space-y-2 mb-8">
              <p>• Lorem ipsum dolor sit amet</p>
              <p>• Consectetur adipiscing elit</p>
              <p>• Sed do eiusmod tempor</p>
              <p>• Incididunt ut labore et dolore</p>
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
              Call to Action 2
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="glass-card-light p-6">
              <div className="text-5xl mb-4">
                <span role="img" aria-label="Icon 16">🤖</span>
              </div>
              <h4 className="text-xl font-bold font-space-grotesk mb-2">Headline 4: Concept One</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className="glass-card-light p-6">
              <div className="text-5xl mb-4">
                <span role="img" aria-label="Icon 17">💎</span>
              </div>
              <h4 className="text-xl font-bold font-space-grotesk mb-2">Headline 4: Concept Two</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className="glass-card-light p-6">
              <div className="text-5xl mb-4">
                <span role="img" aria-label="Icon 18">🌊</span>
              </div>
              <h4 className="text-xl font-bold font-space-grotesk mb-2">Headline 4: Concept Three</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Our Mission & Roadmap (Generic Content) */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-center mb-16">
            Headline 1: Our Mission & <span className="text-purple-500">Roadmap</span>
          </h2>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card-light p-6">
                <div className="text-4xl mb-3">
                  <span role="img" aria-label="Icon 19">⚡</span>
                </div>
                <h3 className="text-xl font-bold font-space-grotesk mb-2">Headline 3: Mission One</h3>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
              <div className="glass-card-light p-6">
                <div className="text-4xl mb-3">
                  <span role="img" aria-label="Icon 20">🎯</span>
                </div>
                <h3 className="text-xl font-bold font-space-grotesk mb-2">Headline 3: Mission Two</h3>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
              <div className="glass-card-light p-6">
                <div className="text-4xl mb-3">
                  <span role="img" aria-label="Icon 21">✨</span>
                </div>
                <h3 className="text-xl font-bold font-space-grotesk mb-2">Headline 3: Mission Three</h3>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
          </div>

          <h3 className="text-3xl font-bold font-space-grotesk text-center mb-12 mt-24">Headline 3: Our Journey & Roadmap</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="glass-card-light p-6 text-center">
              <div className="text-5xl font-bold text-green-500 mb-4">
                <span role="img" aria-label="Icon 22">✅</span>
              </div>
              <h4 className="text-xl font-bold font-space-grotesk mb-2">Headline 4: Phase One</h4>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs mt-4">Status 1</span>
            </div>
            <div className="glass-card-light p-6 text-center">
              <div className="text-5xl font-bold text-blue-500 mb-4">
                <span role="img" aria-label="Icon 23">🚧</span>
              </div>
              <h4 className="text-xl font-bold font-space-grotesk mb-2">Headline 4: Phase Two</h4>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs mt-4">Status 2</span>
            </div>
            <div className="glass-card-light p-6 text-center">
              <div className="text-5xl font-bold text-purple-500 mb-4">
                <span role="img" aria-label="Icon 24">📅</span>
              </div>
              <h4 className="text-xl font-bold font-space-grotesk mb-2">Headline 4: Phase Three</h4>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs mt-4">Status 3</span>
            </div>
            <div className="glass-card-light p-6 text-center">
              <div className="text-5xl font-bold text-gray-500 mb-4">
                <span role="img" aria-label="Icon 25">🔮</span>
              </div>
              <h4 className="text-xl font-bold font-space-grotesk mb-2">Headline 4: Phase Four</h4>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs mt-4">Status 4</span>
            </div>
          </div>

          <div className="text-center mt-24">
            <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-6">
              Headline 3: Join Our Vision
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS4xNzQ2NzQyOTA3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-coral-500 text-white font-semibold rounded-lg hover:bg-coral-600 transition-all duration-300 text-lg"
            >
              Call to Action 3
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

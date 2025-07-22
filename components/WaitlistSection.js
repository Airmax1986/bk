'use client'

export default function WaitlistSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-left mb-16">
          <h2 className="text-5xl md:text-6xl font-normal mb-4">
            <span className="text-gray-900">Now </span>
            <span className="bg-gradient-to-r from-coral-500 to-purple-600 bg-clip-text text-transparent">
              BrandKernel
            </span>
            <span className="text-gray-900"> can</span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          {/* Brand Discovery Card */}
          <div className="bg-gradient-to-br from-coral-600 via-coral-700 to-purple-800 rounded-2xl p-8 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-between">
            <div className="absolute top-6 right-6">
              <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>

            <div className="mt-16">
              {/* Icon */}
              <div className="mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Brand Discovery</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Discover your authentic brand through AI dialogue
                </p>
              </div>
            </div>
          </div>

          {/* AI Conversations Card */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-8 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-center">
            <div className="absolute top-6 right-6">
              <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-normal mb-6">AI Conversations</h3>
              <p className="text-white/70 text-base">
                Have meaningful conversations about your brand strategy.
              </p>
            </div>
          </div>

          {/* Brand Flows Card */}
          <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-between">
            <div className="absolute top-6 right-6">
              <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`
              }} />
            </div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Brand Flows</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Activate your brand daily with personalized flows
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Waitlist CTA Section - Using EXACT text from main branch */}
        <div className="bg-gradient-to-br from-coral-400 via-coral-500 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden min-h-[300px]">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                               radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
            }} />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
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
              className="inline-block px-8 py-4 bg-white text-coral-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Reserve Your Brand Kernel Discovery
            </a>

            {/* Trust Indicators - EXACT text from main */}
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
        </div>

      </div>
    </section>
  )
}

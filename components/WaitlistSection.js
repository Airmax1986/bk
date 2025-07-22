// components/WaitlistSection.js
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

        {/* Feature Cards - The Core Solution */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          
          {/* Deep Discovery Card (Matches "Gems" style) */}
          <div className="feature-card gems-gradient p-8 text-white flex flex-col justify-between">
            <button className="plus-button">
              +
            </button>
            <div className="flex-grow flex items-center justify-center">
              <svg className="w-24 h-24 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h3 className="card-title">Deep Discovery</h3>
              <p className="card-subtitle">An empathetic AI coach for deep brand insights</p>
            </div>
          </div>

          {/* Your Brand Kernel Card (Matches "Gemini Live" style) */}
          <div className="feature-card live-gradient p-8 text-white flex flex-col justify-end">
            <button className="plus-button">
              +
            </button>
            <div className="text-center">
              <h3 className="card-title text-4xl font-semibold">Your Brand Kernel</h3>
              <p className="card-subtitle text-lg">Your authentic core crystallized into a Brand Book</p>
            </div>
          </div>

          {/* Brand Flows Card (Matches "Deep Research" style) */}
          <div className="feature-card research-gradient p-8 text-white flex flex-col justify-end">
            <button className="plus-button">
              +
            </button>
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-10 h-10 mx-auto text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="card-title">Brand Flows</h3>
              <p className="card-subtitle">Automated content activation from your kernel</p>
              <div className="mt-4">
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

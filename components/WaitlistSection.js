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

        {/* Feature Cards - The Core Solution (No icons, larger text, specific gradients) */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          
          {/* Deep Discovery Card (Matches "Gems" style) */}
          <div className="feature-card gems-gradient p-8 text-white flex flex-col justify-end">
            <button className="plus-button">
              +
            </button>
            <div>
              <h3 className="card-title text-3xl md:text-4xl">Deep Discovery</h3>
              <p className="card-subtitle text-lg md:text-xl leading-relaxed">An empathetic AI coach that asks the questions strategists charge $5,000 for</p>
            </div>
          </div>

          {/* Your Brand Kernel Card (Matches "Gemini Live" style) */}
          <div className="feature-card live-gradient p-8 text-white flex flex-col justify-end">
            <button className="plus-button">
              +
            </button>
            <div>
              <h3 className="card-title text-3xl md:text-4xl">Your Brand Kernel</h3>
              <p className="card-subtitle text-lg md:text-xl leading-relaxed">Your authentic core crystallized into your personal Brand Book</p>
            </div>
          </div>

          {/* Brand Flows Card (Matches "Deep Research" style) */}
          <div className="feature-card research-gradient p-8 text-white flex flex-col justify-end">
            <button className="plus-button">
              +
            </button>
            <div>
              <h3 className="card-title text-3xl md:text-4xl">Brand Flows</h3>
              <p className="card-subtitle text-lg md:text-xl leading-relaxed">Automated flows that transform your kernel into compelling content</p>
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

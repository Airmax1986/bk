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
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> {/* Updated gradient for "Gemini" text */}
              Gemini
            </span>
            <span className="text-gray-900"> can</span>
          </h2>
        </div>

        {/* Feature Cards - The Core Solution */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          
          {/* Gems Card (Screenshot 1: Left) */}
          <div className="feature-card gems-gradient p-8 text-white flex flex-col justify-between"> {/* Use feature-card and gems-gradient */}
            <button className="plus-button"> {/* Use plus-button class */}
              +
            </button>
            <div className="flex-grow flex items-center justify-center">
              {/* Icon from screenshot */}
              <svg className="w-24 h-24 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L9.19 8.63L2 9.24L7.45 13.06L5.82 20L12 16.18L18.18 20L16.55 13.06L22 9.24L14.81 8.63L12 2Z" />
              </svg>
            </div>
            <div>
              <h3 className="card-title">Gems</h3> {/* Use card-title */}
              <p className="card-subtitle">Create your own personal AI experts</p> {/* Use card-subtitle */}
            </div>
          </div>

          {/* Gemini Live Card (Screenshot 1: Middle) */}
          <div className="feature-card live-gradient p-8 text-white flex flex-col justify-end"> {/* Use feature-card and live-gradient */}
            <button className="plus-button"> {/* Use plus-button class */}
              +
            </button>
            <div className="text-center">
              <h3 className="card-title text-4xl font-semibold">Gemini Live</h3> {/* Use card-title, larger text */}
              <p className="card-subtitle text-lg">Have a real back and forth conversation.</p> {/* Use card-subtitle, larger text */}
            </div>
          </div>

          {/* Deep Research Card (Screenshot 1: Right) */}
          <div className="feature-card research-gradient p-8 text-white flex flex-col justify-end"> {/* Use feature-card and research-gradient */}
            <button className="plus-button"> {/* Use plus-button class */}
              +
            </button>
            <div className="text-center">
              {/* Icon from screenshot */}
              <div className="mb-4">
                <svg className="w-10 h-10 mx-auto text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <h3 className="card-title">Deep Research</h3> {/* Use card-title */}
              <p className="card-subtitle">Create personalized research plans</p> {/* Use card-subtitle */}
            </div>
          </div>
        </div>

        {/* The following sections are from the original WaitlistSection but are not in the Gemini screenshots.
            You can decide to keep them, move them to another page, or remove them if you want to strictly match the screenshots.
            For now, I'm commenting them out to focus on the Gemini design.
        */}
        {/* Problem Statement - Minimal */}
        {/*
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-6 text-gray-900">
            Most creators are <span className="bg-yellow-100 px-2 py-1 rounded font-semibold">one conversation away from clarity</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            BrandKernel.io is the AI dialogue platform that transforms how freelancers, creators, and consultants 
            discover their authentic brand identity and activate it daily.
          </p>
        </div>
        */}

        {/* Founder Quote - Minimal */}
        {/*
        <div className="bg-white rounded-3xl p-12 text-center mb-24 shadow-sm">
          <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <blockquote className="text-xl text-gray-700 italic mb-6 max-w-3xl mx-auto">
            "After 20+ years in brand consulting, I've learned that most creators are just one conversation away from clarity. 
            Traditional consulting is powerful but not scalable. BrandKernel.io makes that deep strategic dialogue accessible to everyone."
          </blockquote>
          <cite className="text-gray-600">
            <strong>Maximilian Appelt</strong>, Founder & Brand Strategist
          </cite>
        </div>
        */}

        {/* Waitlist CTA Section - Using EXACT text from main branch */}
        {/*
        <div className="bg-gradient-to-br from-coral-400 via-coral-500 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden min-h-[400px] flex items-center">
          
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                               radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
            }} />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            
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

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-white/80">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span><span className="font-semibold text-white">247</span> Creators already on the list</span>
              </div>
            </div>

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
        */}

      </div>
    </section>
  )
}

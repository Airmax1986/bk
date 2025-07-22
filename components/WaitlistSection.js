'use client'

export default function WaitlistSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-left mb-16">
          <h2 className="text-5xl md:text-6xl font-normal mb-4">
            <span className="text-gray-900">Now </span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Gemini
            </span>
            <span className="text-gray-900"> can</span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          {/* Gems Card */}
          <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-between">
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
                    <path d="M9.4 16.8L4.8 12.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3.9 3.9L17.8 6c.4-.4 1-.4 1.4 0s.4 1 0 1.4L9.4 16.8z"/>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.6"/>
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Gems</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Create your own personal AI experts
                </p>
              </div>
            </div>
          </div>

          {/* Gemini Live Card */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-8 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-center">
            <div className="absolute top-6 right-6">
              <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-normal mb-6">Gemini Live</h3>
              <p className="text-white/70 text-base">
                Have a real back and forth conversation.
              </p>
            </div>
          </div>

          {/* Deep Research Card */}
          <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-between">
            <div className="absolute top-6 right-6">
              <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>

            {/* Galaxy/Network Background Pattern */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Deep Research</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Help me analyze this code
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden min-h-[300px] flex items-center justify-center">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                               radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
            }} />
          </div>

          <div className="relative z-10 w-full max-w-2xl">
            {/* Chat Input */}
            <div className="bg-white/90 backdrop-blur rounded-full p-4 flex items-center">
              <input
                type="text"
                placeholder="Ask me anything"
                className="flex-1 bg-transparent text-gray-700 placeholder-gray-500 border-none outline-none text-lg px-4"
              />
              <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>

          {/* Pause Button */}
          <div className="absolute bottom-6 right-6">
            <button className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors">
              <div className="flex space-x-1">
                <div className="w-1.5 h-6 bg-white rounded-full"></div>
                <div className="w-1.5 h-6 bg-white rounded-full"></div>
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

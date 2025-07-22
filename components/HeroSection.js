'use client'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100">
      
      {/* Gemini Logo */}
      <div className="absolute top-8 left-8">
        <div className="text-2xl font-bold text-gray-900">
          Gemini
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute top-8 right-8">
        <div className="flex items-center space-x-8 text-gray-600">
          <a href="#" className="hover:text-gray-900 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Advanced</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Discover</a>
          <a href="#" className="hover:text-gray-900 transition-colors">About Gemini</a>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Log In
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto px-4">
        
        {/* Gemini Icon */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-normal mb-16 leading-tight">
          <span className="text-gray-900">Find what's on </span>
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            your mind.
          </span>
        </h1>

        {/* Explore Button */}
        <div className="mt-16">
          <button className="group flex items-center justify-center mx-auto text-gray-500 hover:text-gray-700 transition-colors">
            <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center mr-3 group-hover:border-gray-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <span className="text-lg">Explore</span>
          </button>
        </div>

      </div>
    </section>
  )
}

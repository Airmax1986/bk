'use client'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          Gemini
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-gray-600">
          <a href="#" className="hover:text-gray-900 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Advanced</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Discover</a>
          <a href="#" className="hover:text-gray-900 transition-colors">About Gemini</a>
        </div>

        {/* Log In Button */}
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Log In
        </button>
      </div>
    </nav>
  )
}

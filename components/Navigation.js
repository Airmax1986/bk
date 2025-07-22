'use client'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          BrandKernel
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-gray-900 transition-colors">Brand Intelligence Hub</Link>
          <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
          <Link href="/manifesto" className="hover:text-gray-900 transition-colors">Manifesto</Link>
        </div>

        {/* Log In Button (or Join Waitlist) */}
        <a 
          href="https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS4xNzQ2NzQyOTA3"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  )
}

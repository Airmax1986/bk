import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    platform: [
      { href: '/about', label: 'About' },
      { href: '/blog', label: 'Brand Intelligence' },
      { href: '/manifesto', label: 'Manifesto' },
      { href: 'https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS4xNzQ2NzQyOTA3', label: 'Join Waitlist', external: true },
    ],
    resources: [
      { href: '/blog', label: 'Brand Intelligence Hub' },
      { href: '/about', label: 'Our Mission' },
      { href: '/manifesto', label: 'Brand Philosophy' },
      { href: 'https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS4xNzQ2NzQyOTA3', label: 'Get Early Access', external: true },
    ],
    legal: [
      { href: 'mailto:mail@brandkernel.io', label: 'Contact', external: true },
      { href: '/impressum', label: 'Impressum' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ]
  }

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-blue-50/30 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column - Gemini Style */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <div className="w-10 h-10 bg-gradient-gemini rounded-xl flex items-center justify-center shadow-gemini-md group-hover:shadow-gemini-lg transition-all duration-300 group-hover:scale-105">
                <div className="w-6 h-6 relative">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-white" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.8" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-space-grotesk font-bold tracking-tight text-gray-900">
                  BrandKernel<span className="text-gradient-gemini">.io</span>
                </span>
                <span className="text-xs text-gray-500 font-medium -mt-1">
                  Brand Intelligence
                </span>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              The AI dialogue platform for creators, freelancers, and entrepreneurs. 
              Discover your Brand Kernel and activate your authentic brand daily.
            </p>
            
            {/* Social Links - Gemini Style */}
            <div className="flex space-x-3">
              <a 
                href="https://de.linkedin.com/in/maximilian-appelt-a1579bb8" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-glass border border-white/30 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                aria-label="LinkedIn - Maximilian Appelt"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS4xNzQ2NzQyOTA3" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-glass border border-white/30 hover:bg-gradient-gemini hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                aria-label="Join Waitlist"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-space-grotesk font-bold text-gray-900 mb-4">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 text-sm transition-all duration-200 hover:translate-x-1"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 text-sm transition-all duration-200 hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-space-grotesk font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 text-sm transition-all duration-200 hover:translate-x-1"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 text-sm transition-all duration-200 hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-space-grotesk font-bold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 text-sm transition-all duration-200 hover:translate-x-1"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 text-sm transition-all duration-200 hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Gemini Style */}
        <div className="border-t border-white/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="glass-card px-4 py-2 rounded-full">
              <p className="text-gray-600 text-sm">
                © {currentYear} BrandKernel.io. Made with ❤️ for authentic brands.
              </p>
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="glass-card px-4 py-2 rounded-full">
                <span className="text-gray-500 text-xs">
                  Founded by Maximilian Appelt
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gemini Star Pattern Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-gradient-gemini rounded-full animate-twinkle"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-gradient-gemini rounded-full animate-twinkle animation-delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-1.5 h-1.5 bg-gradient-gemini rounded-full animate-twinkle animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-gradient-gemini rounded-full animate-twinkle animation-delay-3000"></div>
      </div>
    </footer>
  )
}
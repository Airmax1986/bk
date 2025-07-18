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
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-coral-500 to-coral-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BK</span>
              </div>
              <span className="text-xl font-space-grotesk font-bold tracking-tight">
                BrandKernel.io
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              The AI dialogue platform for creators, freelancers, and entrepreneurs. 
              Discover your Brand Kernel and activate your authentic brand daily.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://de.linkedin.com/in/maximilian-appelt-a1579bb8" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-200 hover:bg-blue-500 hover:text-white rounded-full flex items-center justify-center transition-colors"
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
                className="w-8 h-8 bg-gray-200 hover:bg-coral-500 hover:text-white rounded-full flex items-center justify-center transition-colors"
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
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
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
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
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
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} BrandKernel.io. Made with ❤️ for authentic brands.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-xs">
                Founded by Maximilian Appelt
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
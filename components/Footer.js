import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Gemini",
      links: [
        { href: '/blog', label: 'What Gemini Can Do' },
        { href: '/about', label: 'Advanced' },
        { href: '/manifesto', label: 'Discover' },
        { href: 'https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS4xNzQ2NzQyOTA3', label: 'Gemini Login →', external: true },
        { href: 'https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS.1NzQ2NzQyOTA3', label: 'Explore Deepmind →', external: true },
      ]
    },
    {
      title: "About Gemini",
      links: [
        { href: '/about', label: 'Overview' },
        { href: '/blog', label: 'Gemini Assistant' },
        { href: '/manifesto', label: 'Our Approach' },
        { href: '/privacy', label: 'Policy' },
      ]
    },
    {
      title: "Social Media",
      links: [
        { href: 'https://x.com', label: 'X', external: true },
        { href: 'https://instagram.com', label: 'Instagram', external: true },
        { href: 'https://facebook.com', label: 'Facebook', external: true },
        { href: 'https://youtube.com', label: 'Youtube', external: true },
        { href: 'https://github.com', label: 'Github', external: true },
      ]
    }
  ]

  return (
    <footer className="bg-black text-white py-16">
      <div className="w-full px-8 lg:px-12">
        
        {/* Gemini Star Icon */}
        <div className="flex justify-center mb-16">
          <div className="w-8 h-8">
            <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white text-lg font-medium mb-8">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white text-base transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-white text-base transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {currentYear} BrandKernel.io. Made with ❤️ for authentic brands.</p>
        </div>

      </div>
    </footer>
  )
}
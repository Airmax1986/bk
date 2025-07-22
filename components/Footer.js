import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "BrandKernel",
      links: [
        { href: '/blog', label: 'What BrandKernel Can Do' },
        { href: '/about', label: 'Advanced' },
        { href: '/manifesto', label: 'Discover' },
        { href: 'https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS.1NzQ2NzQyOTA3', label: 'BrandKernel Login →', external: true },
        { href: 'https://brandkernel.kit.com/profile?_gl=1*w8l014*_gcl_au*MTUzNjY5NTA1MS.1NzQ2NzQyOTA3', label: 'Explore Deepmind →', external: true },
      ]
    },
    {
      title: "About BrandKernel",
      links: [
        { href: '/about', label: 'Overview' },
        { href: '/blog', label: 'BrandKernel Assistant' },
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
    <div className="w-full bg-black text-white py-24">
      <div className="w-full px-16 lg:px-24">
        
        {/* Brand Star Icon */}
        <div className="w-full flex justify-center mb-24">
          <div className="w-12 h-12">
            <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="w-full grid md:grid-cols-3 gap-24 mb-24">
          {footerSections.map((section, index) => (
            <div key={index} className="w-full">
              <h3 className="text-white text-xl font-normal mb-12">{section.title}</h3>
              <ul className="w-full space-y-6">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="w-full">
                    {link.external ? (
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white text-lg transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-white text-lg transition-colors duration-200"
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
        <div className="w-full text-center text-gray-500 text-base py-8">
          <p>© {currentYear} BrandKernel.io. Made with ❤️ for authentic brands.</p>
        </div>

      </div>
    </div>
  )
}
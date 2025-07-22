// app/layout.js
import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap'
})

export const metadata = {
  title: {
    template: '%s | BrandKernel.io',
    default: 'BrandKernel.io - Discover Your Authentic Brand' // Updated default title
  },
  description: 'The AI dialogue platform for authentic brand development. Discover your Brand Kernel through intelligent conversations and activate it daily.', // Updated description
  keywords: 'brand kernel, personal branding, AI dialogue, authentic branding, brand flows, freelancer branding, creator branding, brand intelligence', // Updated keywords
  authors: [{ name: 'BrandKernel.io' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brandkernel.io',
    title: 'BrandKernel.io - Discover Your Authentic Brand', // Updated title
    description: 'The AI dialogue platform for authentic brand development.', // Updated description
    siteName: 'BrandKernel.io'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <div className="min-h-screen flex flex-col">
          <Navigation />
          
          <main className="flex-grow pt-20"> {/* Added pt-20 for navigation clearance */}
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
}

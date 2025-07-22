import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation' // <-- IMPORT NAVIGATION

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
    default: 'BrandKernel.io - Find what\'s on your mind'
  },
  description: 'The AI dialogue platform for authentic brand development. Discover your Brand Kernel through intelligent conversations.',
  keywords: 'brand kernel, personal branding, AI dialogue, authentic branding, brand flows, freelancer branding, creator branding',
  authors: [{ name: 'BrandKernel.io' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brandkernel.io',
    title: 'BrandKernel.io - Find what\'s on your mind',
    description: 'The AI dialogue platform for authentic brand development.',
    siteName: 'BrandKernel.io'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <div className="min-h-screen flex flex-col">
          <Navigation /> {/* <-- ADD NAVIGATION HERE */}
          
          <main className="flex-grow pt-20"> {/* <-- ADD pt-20 FOR PADDING */}
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
}

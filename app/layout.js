import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

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
    default: 'BrandKernel.io - KI-Dialogplattform für Personal Branding'
  },
  description: 'Die KI-Dialogplattform für Consultants, Founders, Freelancer & Creators. Entdecke deinen Brand Kernel durch intelligente Dialoge und aktiviere deine Marke täglich mit Brand Flows.',
  keywords: 'personal branding, brand kernel, KI dialog, brand flows, freelancer branding, consultant branding, creator branding',
  authors: [{ name: 'BrandKernel.io' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://brandkernel.vercel.app',
    title: 'BrandKernel.io - KI-Dialogplattform für Personal Branding',
    description: 'Entdecke deinen Brand Kernel und aktiviere deine Marke täglich.',
    siteName: 'BrandKernel.io'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <div className="min-h-screen flex flex-col">
          <Navigation />
          
          <main className="flex-grow">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
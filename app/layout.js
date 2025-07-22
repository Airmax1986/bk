import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
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
    template: '%s | Gemini',
    default: 'Gemini - Find what\'s on your mind'
  },
  description: 'Find what\'s on your mind with Gemini AI assistant.',
  keywords: 'ai, assistant, gemini, google, artificial intelligence',
  authors: [{ name: 'Google' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brandkernel.io',
    title: 'Gemini - Find what\'s on your mind',
    description: 'Find what\'s on your mind with Gemini AI assistant.',
    siteName: 'Gemini'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <div className="min-h-screen flex flex-col">
          
          <main className="flex-grow">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
}

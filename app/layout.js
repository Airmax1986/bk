import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BK Blog',
  description: 'Ein moderner Blog mit Next.js und Contentful',
  keywords: 'blog, next.js, contentful, react',
  authors: [{ name: 'BK' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4">
            <nav className="py-4">
              <h1 className="text-2xl font-bold">
                <a href="/" className="text-gray-900 hover:text-blue-600 transition-colors">
                  BK Blog
                </a>
              </h1>
            </nav>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-gray-50 border-t mt-16">
          <div className="container mx-auto px-4 py-8">
            <p className="text-center text-gray-600">
              © 2025 BK Blog. Erstellt mit Next.js und Contentful.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}

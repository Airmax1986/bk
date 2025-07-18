import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '../../lib/contentful'
import { draftMode } from 'next/headers'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default async function BlogPage() {
  const { isEnabled } = draftMode()
  const posts = await getAllPosts(isEnabled)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Blog Header */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
              Brand Intelligence Hub
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Deep insights, strategic frameworks, and the philosophy behind 
              authentic brand development in the AI age.
            </p>
            
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-coral-600 mb-2">{posts.length}+</div>
                <div className="text-gray-600">Strategic Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-coral-600 mb-2">5min</div>
                <div className="text-gray-600">Average Read</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-coral-600 mb-2">Weekly</div>
                <div className="text-gray-600">New Insights</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group">
                  {(post.headerImage || post.heroImage) && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={`https:${post.headerImage || post.heroImage}`}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h2 className="text-xl font-semibold font-space-grotesk mb-3 line-clamp-2">
                      <Link 
                        href={`/posts/${post.slug}`}
                        className="hover:text-coral-500 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    
                    {(post.summary || post.description) && (
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {post.summary || post.description}
                      </p>
                    )}

                    {post.tags && Array.isArray(post.tags) && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span 
                            key={index}
                            className="inline-block bg-coral-50 text-coral-700 text-xs px-3 py-1 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                      <div className="flex items-center">
                        {post.author?.name && (
                          <>
                            <span className="font-medium">{post.author.name}</span>
                            <span className="mx-2">•</span>
                          </>
                        )}
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('de-DE', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                      
                      <Link 
                        href={`/posts/${post.slug}`}
                        className="text-coral-500 hover:text-coral-600 font-medium flex items-center group"
                      >
                        Lesen
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold font-space-grotesk text-gray-700 mb-4">
                Brand Intelligence in Entwicklung
              </h3>
              <p className="text-gray-500 max-w-md mx-auto mb-8">
                Wir erstellen tiefgreifende Einblicke und strategische Frameworks für Sie. 
                Treten Sie der Waitlist bei, um als Erster informiert zu werden.
              </p>
              <Link 
                href="/#waitlist"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-coral-500 to-coral-600 text-white font-medium rounded-lg hover:from-coral-600 hover:to-coral-700 transition-all duration-300"
              >
                Zur Waitlist
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export const metadata = {
  title: 'Brand Intelligence Hub - BrandKernel.io',
  description: 'Deep insights, strategic frameworks, and the philosophy behind authentic brand development in the AI age.',
  keywords: 'brand intelligence, brand strategy, personal branding, AI branding, brand insights, strategic frameworks',
}
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '../lib/contentful'
import { draftMode } from 'next/headers'

export default async function HomePage() {
  const { isEnabled } = draftMode()
  const posts = await getAllPosts(isEnabled)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          BK Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Willkommen zu meinem Blog. Hier teile ich Gedanken, Erfahrungen und Wissen.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {(post.headerImage || post.heroImage) && (
              <div className="relative h-48">
                <Image
                  src={`https:${post.headerImage || post.heroImage}`}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                <Link 
                  href={`/posts/${post.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              
              {(post.summary || post.description) && (
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.summary || post.description}
                </p>
              )}

              {post.tags && Array.isArray(post.tags) && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  {post.author?.name && (
                    <>
                      <span>{post.author.name}</span>
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
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Lesen →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">
            Noch keine Artikel vorhanden
          </h2>
          <p className="text-gray-500">
            Erstelle deinen ersten Blogpost in Contentful!
          </p>
        </div>
      )}
    </div>
  )
}

export const metadata = {
  title: 'BK Blog - Home',
  description: 'Ein moderner Blog mit Next.js und Contentful',
}

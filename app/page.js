import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '../lib/contentful'
import { draftMode } from 'next/headers'

export default async function HomePage() {
  const { isEnabled } = draftMode()
  const posts = await getAllPosts(isEnabled)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">BK Blog</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            {post.coverImage && (
              <div className="relative h-48">
                <Image
                  src={`https:${post.coverImage}`}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                <Link 
                  href={`/posts/${post.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              
              {post.excerpt && (
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
              )}
              
              <div className="flex items-center text-sm text-gray-500">
                {post.author?.picture && (
                  <Image
                    src={`https:${post.author.picture}`}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="rounded-full mr-2"
                  />
                )}
                <span>{post.author?.name}</span>
                <span className="mx-2">•</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString()}
                </time>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export const metadata = {
  title: 'BK Blog - Home',
  description: 'Ein moderner Blog mit Next.js und Contentful',
}

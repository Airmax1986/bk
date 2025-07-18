import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getPost, getAllPostSlugs } from '../../../lib/contentful'
import { draftMode } from 'next/headers'
import { remark } from 'remark'
import html from 'remark-html'

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map(({ params }) => ({
    slug: params.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { isEnabled } = draftMode()
  const post = await getPost(params.slug, isEnabled)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} - BK Blog`,
    description: post.summary || post.description || post.title,
    openGraph: {
      title: post.title,
      description: post.summary || post.description,
      images: (post.headerImage || post.heroImage) ? [`https:${post.headerImage || post.heroImage}`] : [],
    },
  }
}

async function markdownToHtml(markdown) {
  if (!markdown) return ''
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export default async function PostPage({ params }) {
  const { isEnabled } = draftMode()
  const post = await getPost(params.slug, isEnabled)

  if (!post) {
    notFound()
  }

  const contentHtml = await markdownToHtml(post.content || '')

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-800 mb-6 inline-flex items-center transition-colors"
          >
            ← Zurück zum Blog
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          {(post.summary || post.description) && (
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {post.summary || post.description}
            </p>
          )}

          {post.tags && Array.isArray(post.tags) && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <div className="flex items-center text-gray-600 mb-8">
            <div>
              {post.author?.name && (
                <p className="font-semibold text-gray-900">{post.author.name}</p>
              )}
              <time dateTime={post.date} className="text-sm">
                Veröffentlicht am {new Date(post.date).toLocaleDateString('de-DE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </div>
          
          {(post.headerImage || post.heroImage) && (
            <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
              <Image
                src={`https:${post.headerImage || post.heroImage}`}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </header>

        {contentHtml && (
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        )}

        {!contentHtml && (
          <div className="text-center py-16 text-gray-500">
            <p>Dieser Artikel hat noch keinen Inhalt.</p>
          </div>
        )}

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              ← Alle Artikel ansehen
            </Link>
          </div>
        </footer>
      </article>
    </div>
  )
}

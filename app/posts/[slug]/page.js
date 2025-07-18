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
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [`https:${post.coverImage}`] : [],
    },
  }
}

async function markdownToHtml(markdown) {
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
            className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
          >
            ← Zurück zum Blog
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            {post.author?.picture && (
              <Image
                src={`https:${post.author.picture}`}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full mr-3"
              />
            )}
            <div>
              <p className="font-semibold">{post.author?.name}</p>
              <time dateTime={post.date} className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString('de-DE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </div>
          
          {post.coverImage && (
            <div className="relative w-full h-96 mb-8">
              <Image
                src={`https:${post.coverImage}`}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
        </header>

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  )
}

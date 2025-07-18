import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '../lib/contentful'
import { draftMode } from 'next/headers'
import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import SolutionPreview from '../components/SolutionPreview'
import ThoughtLeadershipTeaser from '../components/ThoughtLeadershipTeaser'
import WaitlistSection from '../components/WaitlistSection'
import FounderVision from '../components/FounderVision'

export default async function HomePage() {
  const { isEnabled } = draftMode()
  const posts = await getAllPosts(isEnabled)
  const featuredPosts = posts.slice(0, 3) // Top 3 for Featured section

  return (
    <div className="min-h-screen">
      {/* Hero Section - The Brand Kernel Discovery */}
      <HeroSection />
      
      {/* Problem Section - The Double Brand Blockade */}
      <ProblemSection />
      
      {/* Solution Vision - Dialogical Excellence */}
      <SolutionPreview />
      
      {/* Thought Leadership Integration */}
      <ThoughtLeadershipTeaser posts={featuredPosts} />
      
      {/* Waitlist Experience */}
      <WaitlistSection />
      
      {/* Founder's Vision */}
      <FounderVision />
      
      {/* Blog Integration - Brand Intelligence Hub */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-space-grotesk mb-4">
              Brand Intelligence Hub
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep insights, strategic frameworks, and the philosophy behind 
              authentic brand development in the AI age.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
                {(post.headerImage || post.heroImage) && (
                  <div className="relative h-48">
                    <Image
                      src={`https:${post.headerImage || post.heroImage}`}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-space-grotesk mb-3 line-clamp-2">
                    <Link 
                      href={`/posts/${post.slug}`}
                      className="hover:text-coral-500 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  
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
                          className="inline-block bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
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
                          <span className="font-medium">{post.author.name}</span>
                          <span className="mx-2">•</span>
                        </>
                      )}
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
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
                      Read more
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold font-space-grotesk text-gray-700 mb-4">
                Brand Intelligence in Development
              </h3>
              <p className="text-gray-500 max-w-md mx-auto">
                We're crafting deep insights and strategic frameworks for you. 
                Join the waitlist to be the first to know when they're ready.
              </p>
            </div>
          )}

          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-8 py-3 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-lg hover:border-coral-300 hover:text-coral-600 transition-all duration-300"
            >
              Explore All Brand Intelligence Articles
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: 'BrandKernel.io - Discover Your Brand Kernel',
  description: 'The AI dialogue platform for authentic brand development. Discover your Brand Kernel through intelligent conversations and activate your brand daily.',
  keywords: 'brand kernel, personal branding, AI dialogue, authentic branding, brand flows, freelancer branding, creator branding',
  openGraph: {
    title: 'BrandKernel.io - Discover Your Brand Kernel',
    description: 'The AI dialogue platform for authentic brand development. Coming Soon.',
    type: 'website',
    url: 'https://brandkernel.vercel.app',
  }
}
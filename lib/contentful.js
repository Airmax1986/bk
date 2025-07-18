import { createClient } from 'contentful'

// Debug-Funktion für Environment Variables
function validateEnvironmentVariables() {
  const requiredVars = {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_ACCESS_TOKEN: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  }

  const missing = Object.entries(requiredVars)
    .filter(([key, value]) => !value)
    .map(([key]) => key)

  if (missing.length > 0) {
    console.error('❌ Missing environment variables:', missing)
    console.error('Available env vars:', Object.keys(process.env).filter(key => key.startsWith('CONTENTFUL')))
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
  }

  console.log('✅ All Contentful environment variables are loaded')
  
  // Log first few characters für debugging (ohne sensitive Daten zu zeigen)
  Object.entries(requiredVars).forEach(([key, value]) => {
    console.log(`${key}: ${value?.substring(0, 8)}...`)
  })
}

// Validiere beim Import
if (process.env.NODE_ENV !== 'production') {
  console.log('🔍 Validating Contentful environment variables...')
  validateEnvironmentVariables()
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
})

const getClient = (preview = false) => (preview ? previewClient : client)

// Blog Posts abrufen (angepasst an dein blogPost Content Model)
export async function getAllPosts(isDraftMode = false) {
  try {
    console.log(`🔍 Fetching posts (draft mode: ${isDraftMode})...`)
    
    const entries = await getClient(isDraftMode).getEntries({
      content_type: 'blogPost', // Entspricht deinem Content Model
      order: '-sys.createdAt',
    })

    console.log(`✅ Found ${entries.items.length} posts`)

    return entries.items.map((item) => ({
      slug: item.fields.slug,
      title: item.fields.title,
      date: item.fields.date || item.sys.createdAt,
      summary: item.fields.summary, // Entspricht deinem "Summary" Feld
      description: item.fields.description, // Entspricht deinem "description" Feld
      headerImage: item.fields.headerImage?.fields?.file?.url, // Entspricht "Header Image"
      heroImage: item.fields.heroImage?.fields?.file?.url, // Entspricht "heroImage"
      content: item.fields.content,
      tags: item.fields.tags,
      author: item.fields.author ? {
        name: item.fields.author.fields?.name,
        // Weitere Author-Felder falls vorhanden
      } : null,
    }))
  } catch (error) {
    console.error('❌ Error fetching posts:', error)
    // In Production: leeres Array zurückgeben statt Fehler werfen
    if (process.env.NODE_ENV === 'production') {
      return []
    }
    throw error
  }
}

// Einzelnen Post abrufen
export async function getPost(slug, isDraftMode = false) {
  try {
    console.log(`🔍 Fetching post with slug: ${slug} (draft mode: ${isDraftMode})`)
    
    const entries = await getClient(isDraftMode).getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    })

    if (entries.items.length === 0) {
      console.log(`❌ Post not found: ${slug}`)
      return null
    }

    const post = entries.items[0]
    console.log(`✅ Found post: ${post.fields.title}`)

    return {
      slug: post.fields.slug,
      title: post.fields.title,
      date: post.fields.date || post.sys.createdAt,
      content: post.fields.content,
      summary: post.fields.summary,
      description: post.fields.description,
      headerImage: post.fields.headerImage?.fields?.file?.url,
      heroImage: post.fields.heroImage?.fields?.file?.url,
      tags: post.fields.tags,
      author: post.fields.author ? {
        name: post.fields.author.fields?.name,
      } : null,
    }
  } catch (error) {
    console.error(`❌ Error fetching post ${slug}:`, error)
    return null
  }
}

// Alle Slugs für Static Generation
export async function getAllPostSlugs() {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      select: 'fields.slug',
    })

    console.log(`✅ Found ${entries.items.length} slugs for static generation`)

    return entries.items.map((item) => ({
      params: {
        slug: item.fields.slug,
      },
    }))
  } catch (error) {
    console.error('❌ Error fetching slugs:', error)
    return []
  }
}

// Autoren abrufen
export async function getAllAuthors(isDraftMode = false) {
  try {
    const entries = await getClient(isDraftMode).getEntries({
      content_type: 'author', // Falls du Author Content Type hast
      order: 'fields.name',
    })

    return entries.items.map((item) => ({
      name: item.fields.name,
      bio: item.fields.bio,
      // Weitere Author-Felder
    }))
  } catch (error) {
    console.error('❌ Error fetching authors:', error)
    return []
  }
}

// Posts nach Kategorie filtern (falls du Categories verwendest)
export async function getPostsByCategory(category, isDraftMode = false) {
  try {
    const entries = await getClient(isDraftMode).getEntries({
      content_type: 'blogPost',
      'fields.category.sys.id': category,
      order: '-sys.createdAt',
    })

    return entries.items.map((item) => ({
      slug: item.fields.slug,
      title: item.fields.title,
      date: item.fields.date || item.sys.createdAt,
      summary: item.fields.summary,
      headerImage: item.fields.headerImage?.fields?.file?.url,
    }))
  } catch (error) {
    console.error('❌ Error fetching posts by category:', error)
    return []
  }
}

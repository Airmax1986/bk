import { createClient } from 'contentful'

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
  const entries = await getClient(isDraftMode).getEntries({
    content_type: 'blogPost', // Entspricht deinem Content Model
    order: '-sys.createdAt',
  })

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
}

// Einzelnen Post abrufen
export async function getPost(slug, isDraftMode = false) {
  const entries = await getClient(isDraftMode).getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  })

  if (entries.items.length === 0) {
    return null
  }

  const post = entries.items[0]

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
}

// Alle Slugs für Static Generation
export async function getAllPostSlugs() {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    select: 'fields.slug',
  })

  return entries.items.map((item) => ({
    params: {
      slug: item.fields.slug,
    },
  }))
}

// Autoren abrufen
export async function getAllAuthors(isDraftMode = false) {
  const entries = await getClient(isDraftMode).getEntries({
    content_type: 'author', // Falls du Author Content Type hast
    order: 'fields.name',
  })

  return entries.items.map((item) => ({
    name: item.fields.name,
    bio: item.fields.bio,
    // Weitere Author-Felder
  }))
}

// Posts nach Kategorie filtern (falls du Categories verwendest)
export async function getPostsByCategory(category, isDraftMode = false) {
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
}

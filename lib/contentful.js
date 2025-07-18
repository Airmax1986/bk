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

// Blog Posts abrufen
export async function getAllPosts(isDraftMode = false) {
  const entries = await getClient(isDraftMode).getEntries({
    content_type: 'post',
    order: '-sys.createdAt',
  })

  return entries.items.map((item) => ({
    slug: item.fields.slug,
    title: item.fields.title,
    date: item.sys.createdAt,
    excerpt: item.fields.excerpt,
    coverImage: item.fields.coverImage?.fields?.file?.url,
    author: {
      name: item.fields.author?.fields?.name,
      picture: item.fields.author?.fields?.picture?.fields?.file?.url,
    },
  }))
}

// Einzelnen Post abrufen
export async function getPost(slug, isDraftMode = false) {
  const entries = await getClient(isDraftMode).getEntries({
    content_type: 'post',
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
    date: post.sys.createdAt,
    content: post.fields.content,
    excerpt: post.fields.excerpt,
    coverImage: post.fields.coverImage?.fields?.file?.url,
    author: {
      name: post.fields.author?.fields?.name,
      picture: post.fields.author?.fields?.picture?.fields?.file?.url,
    },
  }
}

// Alle Slugs für Static Generation
export async function getAllPostSlugs() {
  const entries = await client.getEntries({
    content_type: 'post',
    select: 'fields.slug',
  })

  return entries.items.map((item) => ({
    params: {
      slug: item.fields.slug,
    },
  }))
}

import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  // Überprüfe das Secret
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  // Überprüfe, ob der Slug existiert
  if (!slug) {
    return new Response('Missing slug', { status: 400 })
  }

  // Draft Mode aktivieren
  draftMode().enable()

  // Weiterleitung zum Preview-Post
  redirect(`/posts/${slug}`)
}

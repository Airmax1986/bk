import { revalidatePath } from 'next/cache'

export async function POST(request) {
  try {
    const body = await request.json()
    
    // Überprüfe das Secret
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.CONTENTFUL_REVALIDATE_SECRET}`) {
      return new Response('Unauthorized', { status: 401 })
    }

    // Revalidiere je nach Event-Typ
    if (body.sys && body.sys.contentType) {
      const contentType = body.sys.contentType.sys.id
      
      if (contentType === 'post') {
        // Revalidiere Homepage
        revalidatePath('/')
        
        // Revalidiere spezifischen Post wenn Slug vorhanden
        if (body.fields && body.fields.slug) {
          revalidatePath(`/posts/${body.fields.slug}`)
        }
        
        console.log('Revalidated blog post:', body.fields?.slug || 'unknown')
      }
    }

    return new Response('OK', { status: 200 })
  } catch (error) {
    console.error('Revalidation error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}

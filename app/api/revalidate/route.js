import { revalidatePath } from 'next/cache'

export async function POST(request) {
  try {
    const body = await request.json()
    
    // Überprüfe das Secret (kann auch als Query Parameter kommen)
    const url = new URL(request.url)
    const secretFromQuery = url.searchParams.get('secret')
    const authHeader = request.headers.get('authorization')
    
    const providedSecret = secretFromQuery || authHeader?.replace('Bearer ', '')
    
    if (providedSecret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
      console.log('Unauthorized revalidation attempt')
      return new Response('Unauthorized', { status: 401 })
    }

    // Revalidiere je nach Event-Typ
    if (body.sys && body.sys.contentType) {
      const contentType = body.sys.contentType.sys.id
      
      if (contentType === 'blogPost') { // Entspricht deinem Content Model
        // Revalidiere Homepage
        revalidatePath('/')
        
        // Revalidiere spezifischen Post wenn Slug vorhanden
        if (body.fields && body.fields.slug) {
          revalidatePath(`/posts/${body.fields.slug}`)
          console.log('Revalidated blog post:', body.fields.slug)
        }
        
        console.log('Revalidated homepage for blogPost update')
      }
      
      if (contentType === 'author') {
        // Revalidiere alle Posts wenn Author geändert wird
        revalidatePath('/')
        console.log('Revalidated homepage for author update')
      }
    }

    return new Response('OK', { status: 200 })
  } catch (error) {
    console.error('Revalidation error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}

// GET-Methode für Testing
export async function GET(request) {
  const url = new URL(request.url)
  const secret = url.searchParams.get('secret')
  
  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return new Response('Unauthorized', { status: 401 })
  }
  
  // Revalidiere alle wichtigen Pfade
  revalidatePath('/')
  
  return new Response('Revalidation triggered successfully', { status: 200 })
}

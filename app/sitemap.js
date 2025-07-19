import { getAllPosts } from '../lib/contentful'

// Basis-URL Ihrer Website
const WEBSITE_URL = 'https://www.brandkernel.io'

// Statische Seiten der Website
const STATIC_PAGES = [
  {
    url: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    url: '/about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: '/blog',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: '/manifesto',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: '/impressum',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: '0.3'
  }
]

// Sitemap XML generieren
function generateSitemapXml(pages) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${WEBSITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return sitemap
}

// Datum formatieren für lastmod
function formatDate(dateString) {
  if (!dateString) return new Date().toISOString().split('T')[0]
  
  try {
    return new Date(dateString).toISOString().split('T')[0]
  } catch (error) {
    return new Date().toISOString().split('T')[0]
  }
}

// Sitemap generieren
export default async function sitemap() {
  try {
    console.log('🗺️ Generating dynamic sitemap...')
    
    // Alle Seiten sammeln
    let allPages = [...STATIC_PAGES]
    
    // Blog-Posts aus Contentful abrufen
    const posts = await getAllPosts(false)
    console.log(`📄 Found ${posts.length} blog posts`)
    
    // Blog-Posts zu Sitemap hinzufügen
    const blogPages = posts.map(post => ({
      url: `/posts/${post.slug}`,
      lastmod: formatDate(post.date),
      changefreq: 'monthly',
      priority: 0.6
    }))
    
    allPages = [...allPages, ...blogPages]
    
    console.log(`✅ Sitemap generated with ${allPages.length} URLs`)
    
    // Return für Next.js sitemap format
    return allPages.map(page => ({
      url: `${WEBSITE_URL}${page.url}`,
      lastModified: new Date(page.lastmod),
      changeFrequency: page.changefreq,
      priority: parseFloat(page.priority)
    }))
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
    
    // Fallback: Nur statische Seiten
    return STATIC_PAGES.map(page => ({
      url: `${WEBSITE_URL}${page.url}`,
      lastModified: new Date(page.lastmod),
      changeFrequency: page.changefreq,
      priority: parseFloat(page.priority)
    }))
  }
}

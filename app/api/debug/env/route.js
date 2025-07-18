import { NextResponse } from 'next/server'

export async function GET() {
  // Nur in Development-Modus verfügbar
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not available in production' }, { status: 404 })
  }

  const envVars = {
    NODE_ENV: process.env.NODE_ENV,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID ? '✅ Set' : '❌ Missing',
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN ? '✅ Set' : '❌ Missing',
    CONTENTFUL_PREVIEW_ACCESS_TOKEN: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN ? '✅ Set' : '❌ Missing',
    CONTENTFUL_PREVIEW_SECRET: process.env.CONTENTFUL_PREVIEW_SECRET ? '✅ Set' : '❌ Missing',
    CONTENTFUL_REVALIDATE_SECRET: process.env.CONTENTFUL_REVALIDATE_SECRET ? '✅ Set' : '❌ Missing',
  }

  // Zeige erste 8 Zeichen für Debugging (ohne sensitive Daten zu leaken)
  const debugInfo = {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID?.substring(0, 8) + '...',
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN?.substring(0, 8) + '...',
  }

  return NextResponse.json({
    message: 'Environment Variables Status',
    status: envVars,
    debug: debugInfo,
    allEnvVars: Object.keys(process.env).filter(key => key.startsWith('CONTENTFUL'))
  })
}

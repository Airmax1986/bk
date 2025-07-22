import HeroSection from '../components/HeroSection'
import WaitlistSection from '../components/WaitlistSection'

export default function HomePage() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section - Minimal Gemini Style */}
      <HeroSection />
      
      {/* Feature Cards Section - Gemini Style */}
      <WaitlistSection />
    </div>
  )
}

export const metadata = {
  title: 'BrandKernel.io - Find what\'s on your mind',
  description: 'The AI dialogue platform for authentic brand development. Discover your Brand Kernel through intelligent conversations.',
  keywords: 'brand kernel, personal branding, AI dialogue, authentic branding, brand flows, freelancer branding, creator branding',
  openGraph: {
    title: 'BrandKernel.io - Find what\'s on your mind',
    description: 'The AI dialogue platform for authentic brand development.',
    type: 'website',
    url: 'https://brandkernel.io',
  }
}
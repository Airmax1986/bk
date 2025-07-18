import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import SolutionPreview from '../components/SolutionPreview'
import ThoughtLeadershipTeaser from '../components/ThoughtLeadershipTeaser'
import FounderVision from '../components/FounderVision'
import WaitlistSection from '../components/WaitlistSection'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionPreview />
      <ThoughtLeadershipTeaser />
      <FounderVision />
      <WaitlistSection />
      <Footer />
    </main>
  )
}

export const metadata = {
  title: 'BrandKernel.io - AI-Powered Brand Discovery Platform',
  description: 'Discover your authentic Brand Kernel through dialogical excellence. The AI-powered platform that bridges strategic brand thinking with daily activation - designed for creators, freelancers & entrepreneurs.',
  keywords: 'brand strategy, personal branding, AI coaching, brand discovery, brand kernel, creator tools, brand identity, strategic consulting',
  openGraph: {
    title: 'BrandKernel.io - Discover Your Authentic Brand Core',
    description: 'The AI-powered platform that helps creators discover and activate their authentic brand through intelligent dialogue.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandKernel.io - AI-Powered Brand Discovery',
    description: 'Discover your authentic Brand Kernel through dialogical excellence.',
  },
}
// app/page.js
import HomeHeroSection from '../components/HomeHeroSection' // New component for "Find what's on your mind."
import ChatInputSection from '../components/ChatInputSection' // New component for "Ask me anything"
import WaitlistSection from '../components/WaitlistSection' // Modified to match "Now Gemini can"

export default function HomePage() {
  return (
    <div className="w-full min-h-screen">
      {/* Section 1: Find what's on your mind. */}
      <HomeHeroSection />
      
      {/* Section 2: Now Gemini can */}
      <WaitlistSection /> {/* This component is modified to match the screenshot */}

      {/* Section 3: Ask me anything */}
      <ChatInputSection />
    </div>
  )
}

export const metadata = {
  title: 'Gemini - Find what\'s on your mind', // Updated title to reflect new design
  description: 'The AI dialogue platform for authentic brand development. Discover your Brand Kernel through intelligent conversations.',
  keywords: 'brand kernel, personal branding, AI dialogue, authentic branding, brand flows, freelancer branding, creator branding, gemini',
  openGraph: {
    title: 'The AI dialogue platform for authentic brand development.',
    description: 'The AI dialogue platform for authentic brand development.',
    type: 'website',
    url: 'https://brandkernel.io',
  }
}

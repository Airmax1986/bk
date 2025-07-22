// This component is integrated into the new WaitlistSection
// Content moved to minimal design

export default function ThoughtLeadershipTeaser() {
  return (
    <div className="py-16 text-center bg-gray-50">
      <h2 className="text-4xl font-bold mb-8">Strategic Insights for Brand Builders</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Deep-dive analysis, frameworks, and strategic thinking for creators who want to build 
        authentic, differentiated brands in the AI era.
      </p>
      <a 
        href="/blog" 
        className="inline-block px-6 py-3 bg-coral-500 text-white rounded-lg hover:bg-coral-600 transition-colors"
      >
        Explore Articles
      </a>
    </div>
  )
}

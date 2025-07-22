// This component is integrated into the new WaitlistSection
// Founder content moved to minimal design

export default function FounderVision() {
  return (
    <div className="py-16 text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-white font-bold text-xl">M</span>
      </div>
      <blockquote className="text-xl text-gray-700 italic mb-6 max-w-3xl mx-auto">
        "After 20+ years in brand consulting, I've learned that most creators are just one conversation away from clarity. 
        Traditional consulting is powerful but not scalable. BrandKernel.io makes that deep strategic dialogue accessible to everyone."
      </blockquote>
      <cite className="text-gray-600">
        <strong>Maximilian Appelt</strong>, Founder & Brand Strategist
      </cite>
    </div>
  )
}

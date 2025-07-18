import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
              About <span className="text-coral-500">BrandKernel.io</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              We believe every creator has a unique Brand Kernel – 
              an authentic core that sets them apart in the AI age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold font-space-grotesk mb-6">
                  Unsere Mission
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Im KI-Zeitalter wird Authentizität zum entscheidenden Wettbewerbsfaktor. 
                  Während Tools immer ähnlicher werden, ist Ihr Brand Kernel das Einzige, 
                  was wirklich nicht kopierbar ist.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Wir haben BrandKernel.io entwickelt, um Creators, Freelancern und 
                  Unternehmern dabei zu helfen, ihren authentischen Kern zu entdecken 
                  und täglich zu aktivieren.
                </p>
              </div>
              <div className="bg-gradient-to-br from-coral-50 to-purple-50 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-5xl mb-4">💎</div>
                  <h3 className="text-xl font-bold font-space-grotesk mb-4">
                    Der Brand Kernel
                  </h3>
                  <p className="text-gray-600">
                    Ihr authentischer Kern aus Purpose, Values, Essence und Shared Beliefs – 
                    kristallisiert in einem strategischen Framework.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-space-grotesk text-center mb-12">
              Das Problem, das wir lösen
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 rounded-xl p-8 border border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-4">
                  🚨 The Double Brand Blockade
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong>Foundation Problem:</strong> Fehlende Klarheit über die eigene Brand Identity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong>Activation Problem:</strong> Schwierigkeiten bei der täglichen Umsetzung</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-xl p-8 border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  ✅ Unsere integrierte Lösung
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Dialogical Excellence:</strong> KI-Coach für tiefe Brand Discovery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Brand Flows:</strong> Automatisierte Content-Aktivierung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-space-grotesk text-center mb-12">
              Unsere Werte
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h3 className="text-xl font-bold font-space-grotesk mb-4">Authentizität</h3>
                <p className="text-gray-600">
                  Wir glauben an echte, authentische Brand-Entwicklung statt oberflächlicher Optimierung.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h3 className="text-xl font-bold font-space-grotesk mb-4">Empathie</h3>
                <p className="text-gray-600">
                  Unser KI-Coach stellt die richtigen Fragen mit der Sensibilität eines erfahrenen Strategieberaters.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-bold font-space-grotesk mb-4">Effizienz</h3>
                <p className="text-gray-600">
                  Strategische Tiefe muss nicht komplex sein. Wir machen Brand-Entwicklung zugänglich und umsetzbar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-space-grotesk mb-8">
              Das Team
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Ein Team aus Brand-Strategist, KI-Engineer und UX-Designer, 
              vereint durch die Vision authentischer Brand-Entwicklung im KI-Zeitalter.
            </p>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <p className="text-gray-600 italic mb-6">
                "Wir haben selbst erlebt, wie schwierig es ist, eine authentische Brand zu entwickeln 
                und täglich zu leben. BrandKernel.io ist unsere Antwort auf diese Herausforderung."
              </p>
              <div className="text-sm text-gray-500">
                — Das BrandKernel.io Team
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-space-grotesk mb-6">
              Bereit, Ihren Brand Kernel zu entdecken?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Treten Sie der Waitlist bei und werden Sie Teil der Brand-Revolution.
            </p>
            <Link
              href="/#waitlist"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-coral-500 to-coral-600 text-white font-semibold rounded-lg hover:from-coral-600 hover:to-coral-700 transition-all duration-300 text-lg"
            >
              Zur Waitlist
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export const metadata = {
  title: 'About - BrandKernel.io',
  description: 'Learn about BrandKernel.io\'s mission to help creators discover and activate their authentic Brand Kernel in the AI age.',
  keywords: 'about brandkernel, brand strategy mission, authentic branding, AI brand development',
}
import Link from 'next/link'

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
              Das <span className="text-coral-500">BrandKernel</span> Manifesto
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Unsere Überzeugungen über authentische Brand-Entwicklung 
              im Zeitalter der Künstlichen Intelligenz.
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <div className="bg-gradient-to-r from-coral-50 to-purple-50 rounded-2xl p-8 mb-12 border border-coral-200">
              <h2 className="text-2xl font-bold font-space-grotesk mb-4 text-gray-800">
                Wir glauben...
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                ...dass im KI-Zeitalter Authentizität der einzige nicht-kopierbare Wettbewerbsfaktor ist. 
                Während Tools und Technologien immer austauschbarer werden, ist Ihr Brand Kernel – 
                Ihr authentischer Kern – das Einzige, was wirklich unverwechselbar bleibt.
              </p>
            </div>

            {/* Belief 1 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-gray-800">
                1. Jeder Creator hat einen einzigartigen Brand Kernel
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Tief in jedem von uns liegt ein authentischer Kern – eine einzigartige Kombination aus 
                Purpose, Values, Essence und Shared Beliefs. Dieser Brand Kernel ist nicht konstruiert 
                oder erfunden, sondern bereits vorhanden und wartet darauf, entdeckt zu werden.
              </p>
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                <p className="text-blue-800 font-medium">
                  "Ihr Brand Kernel ist wie ein Diamant: Bereits vollständig vorhanden, 
                  aber erst durch das richtige Schleifen kommt seine wahre Brillanz zum Vorschein."
                </p>
              </div>
            </div>

            {/* Belief 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-gray-800">
                2. Dialogical Excellence über oberflächliche Optimierung
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Wahre Brand-Entwicklung geschieht nicht durch Templates oder Schnelllösungen, 
                sondern durch tiefe, empathische Dialoge. Ein erfahrener Strategieberater stellt 
                die richtigen Fragen zur richtigen Zeit – genau das haben wir in unserer KI verkörpert.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="font-bold text-red-700 mb-3">❌ Oberflächlich</h4>
                  <ul className="text-red-600 space-y-2">
                    <li>• Schnelle Templates</li>
                    <li>• Generische Frameworks</li>
                    <li>• One-size-fits-all Lösungen</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-700 mb-3">✅ Dialogical Excellence</h4>
                  <ul className="text-green-600 space-y-2">
                    <li>• Tiefe Reflexionsdialoge</li>
                    <li>• Adaptive Gesprächsführung</li>
                    <li>• Individuelle Kern-Extraktion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Belief 3 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-gray-800">
                3. Die Aktivierung ist genauso wichtig wie die Entdeckung
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Einen Brand Kernel zu entdecken ist nur der erste Schritt. Die wahre Herausforderung 
                liegt in der täglichen Aktivierung – der konsistenten Übersetzung Ihrer Identität 
                in Content, Kommunikation und Kundeninteraktionen.
              </p>
              <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-400">
                <p className="text-purple-800 font-medium">
                  "Ein ungenutzter Brand Kernel ist wie ein Schatz im Tresor – wertvoll, 
                  aber wirkungslos. Erst die tägliche Aktivierung schafft echten Impact."
                </p>
              </div>
            </div>

            {/* Belief 4 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-gray-800">
                4. KI als Verstärker, nicht als Ersatz für Authentizität
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                KI-Tools können mächtige Verstärker sein – aber nur wenn sie von einem 
                authentischen Kern geleitet werden. Ohne Ihren Brand Kernel als Filter 
                führt KI zu Homogenisierung und Austauschbarkeit.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">🤖➡️📝</div>
                  <h4 className="font-bold text-gray-700 mb-2">Ohne Brand Kernel</h4>
                  <p className="text-gray-600">KI → Generischer Content</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">💎🤖➡️✨</div>
                  <h4 className="font-bold text-coral-700 mb-2">Mit Brand Kernel</h4>
                  <p className="text-gray-600">Brand Kernel + KI → Authentischer Content</p>
                </div>
              </div>
            </div>

            {/* Belief 5 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-gray-800">
                5. Branding ist kein Luxus, sondern eine Notwendigkeit
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                In einer Welt, in der jeder Zugang zu denselben Tools hat, ist Ihre Brand 
                der einzige nachhaltige Differentiator. Branding ist nicht Marketing-Luxury, 
                sondern business-kritische Infrastruktur.
              </p>
              <div className="bg-coral-50 rounded-xl p-6 border-l-4 border-coral-400">
                <h4 className="font-bold text-coral-700 mb-3">Die neue Realität:</h4>
                <ul className="text-coral-600 space-y-2">
                  <li>• Gleiche Tools → Brand wird zum Differentiator</li>
                  <li>• Mehr Konkurrenz → Authentizität wird entscheidend</li>
                  <li>• KI-Homogenisierung → Menschlichkeit wird wertvoll</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-coral-500 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold font-space-grotesk mb-4">
                Bereit für Ihre Brand Kernel Journey?
              </h2>
              <p className="text-xl mb-6">
                Entdecken Sie Ihren authentischen Kern und aktivieren Sie ihn täglich.
              </p>
              <Link
                href="/#waitlist"
                className="inline-flex items-center px-8 py-4 bg-white text-coral-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 text-lg"
              >
                Zur Waitlist
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: 'Manifesto - BrandKernel.io',
  description: 'Our beliefs about authentic brand development in the age of artificial intelligence.',
  keywords: 'brand manifesto, authentic branding, AI age branding, brand kernel philosophy',
}
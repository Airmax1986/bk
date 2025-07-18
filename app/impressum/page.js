export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              Impressum
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Legal information and contact details for BrandKernel.io
            </p>
          </div>
        </div>
      </section>

      {/* Impressum Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <h2>Information according to § 5 TMG</h2>
            
            <p>
              <strong>Maximilian Appelt</strong><br />
              BrandKernel.io<br />
              [Address to be provided]<br />
              Germany
            </p>

            <h3>Contact</h3>
            <p>
              Email: <a href="mailto:hello@brandkernel.io" className="text-coral-600 hover:text-coral-700">hello@brandkernel.io</a><br />
              LinkedIn: <a href="https://de.linkedin.com/in/maximilian-appelt-a1579bb8" target="_blank" rel="noopener noreferrer" className="text-coral-600 hover:text-coral-700">Maximilian Appelt</a>
            </p>

            <h3>Responsible for content according to § 55 Abs. 2 RStV</h3>
            <p>
              Maximilian Appelt<br />
              [Address to be provided]<br />
              Germany
            </p>

            <h3>Disclaimer</h3>
            
            <h4>Liability for Contents</h4>
            <p>
              As a service provider, we are responsible for our own content on these pages according to general law pursuant to Section 7 (1) of the TMG (Telemediengesetz - Telemedia Act). However, pursuant to Sections 8 to 10 of the TMG, we as a service provider are not under obligation to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
            </p>
            <p>
              Obligations to remove or block the use of information under general law remain unaffected by this. However, liability in this regard is only possible from the point in time at which knowledge of a specific infringement of law is obtained. Upon becoming aware of corresponding infringements of law, we will remove this content immediately.
            </p>

            <h4>Liability for Links</h4>
            <p>
              Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking.
            </p>
            <p>
              However, a permanent monitoring of the contents of the linked pages is not reasonable without concrete evidence of a violation of law. Upon becoming aware of legal violations, we will remove such links immediately.
            </p>

            <h4>Copyright</h4>
            <p>
              The contents and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any kind of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.
            </p>
            <p>
              Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.
            </p>

            <h3>Data Protection</h3>
            <p>
              Information about data processing can be found in our <a href="/privacy" className="text-coral-600 hover:text-coral-700">Privacy Policy</a>.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: 'Impressum - BrandKernel.io',
  description: 'Legal information and contact details for BrandKernel.io',
  keywords: 'impressum, legal, contact, brandkernel',
}
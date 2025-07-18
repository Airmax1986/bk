'use client'
import { useState } from 'react'

export default function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [focus, setFocus] = useState('')
  const [challenge, setChallenge] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      
      // Update counter (in real implementation, this would come from backend)
      const currentCount = document.getElementById('waitlist-count')
      if (currentCount) {
        const newCount = parseInt(currentCount.textContent) + 1
        currentCount.textContent = newCount
      }
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-20 bg-gradient-to-br from-coral-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              Welcome to the Brand Kernel Discovery! 🎉
            </h2>
            
            <p className="text-xl text-gray-700 mb-8">
              You're now on the list for exclusive early access. 
              Here's what happens next:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="font-semibold mb-2">Immediate Access</h3>
                <p className="text-sm text-gray-600">Brand Kernel Assessment directly in your inbox</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🧠</div>
                <h3 className="font-semibold mb-2">Weekly Intelligence</h3>
                <p className="text-sm text-gray-600">Curated brand strategy insights every Wednesday</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="font-semibold mb-2">Beta Access</h3>
                <p className="text-sm text-gray-600">Exclusive platform access before everyone else</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-coral-200">
              <p className="text-gray-700">
                <strong>Next Step:</strong> Check your email for the 
                <span className="text-coral-600 font-semibold"> Brand Kernel Assessment</span> – 
                a 3-minute tool that gives you immediate insights into your brand core.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-coral-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              Reserve Your <span className="bg-gradient-to-r from-coral-500 to-purple-600 bg-clip-text text-transparent">Brand Kernel Discovery</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join the exclusive community of creators discovering their authentic brand. 
              Get immediate access to valuable tools and insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-white/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Focus Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your primary focus
                  </label>
                  <select
                    value={focus}
                    onChange={(e) => setFocus(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors"
                  >
                    <option value="">Choose your role...</option>
                    <option value="freelancer">Freelancer/Consultant</option>
                    <option value="creator">Content Creator</option>
                    <option value="founder">Startup Founder</option>
                    <option value="designer">Designer</option>
                    <option value="coach">Coach/Trainer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Challenge Textarea */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your biggest brand challenge (optional)
                  </label>
                  <textarea
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors resize-none"
                    placeholder="What prevents you from developing a clear, authentic brand?"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!email || isLoading}
                  className="w-full py-4 bg-gradient-to-r from-coral-500 to-coral-600 text-white font-semibold rounded-lg hover:from-coral-600 hover:to-coral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Adding you...
                    </>
                  ) : (
                    'Reserve Your Brand Kernel Discovery'
                  )}
                </button>

                {/* Trust Indicators */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Your data is safe. No spam, unsubscribe anytime.
                  </div>
                </div>
              </form>
            </div>

            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-space-grotesk mb-6">
                  What you get immediately
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-coral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Brand Kernel Assessment</h4>
                      <p className="text-gray-600">3-minute tool that gives you immediate insights into your brand core. Delivered via email.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Weekly Brand Intelligence</h4>
                      <p className="text-gray-600">Curated strategic insights, framework deep-dives, and creator success stories every Wednesday.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Beta Access Priority</h4>
                      <p className="text-gray-600">Exclusive early access to the platform based on your engagement. Be among the first 100 users.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Exclusive Community</h4>
                      <p className="text-gray-600">Access to private creator community with peers, live Q&As, and direct feedback.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">Already joined:</h4>
                  <span id="waitlist-count" className="text-2xl font-bold text-coral-600">247</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mr-3"></div>
                    <div>
                      <p className="text-sm font-medium">Designers & Consultants</p>
                      <p className="text-xs text-gray-500">38% of community</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mr-3"></div>
                    <div>
                      <p className="text-sm font-medium">Content Creators</p>
                      <p className="text-xs text-gray-500">31% of community</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full mr-3"></div>
                    <div>
                      <p className="text-sm font-medium">Startup Founders</p>
                      <p className="text-xs text-gray-500">31% of community</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Preview */}
              <div className="bg-gradient-to-r from-coral-50 to-purple-50 rounded-xl p-6 border border-coral-200">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">SK</span>
                  </div>
                  <div>
                    <p className="text-gray-700 italic mb-2">
                      "Finally a platform that doesn't just treat brand strategy superficially. The assessment alone gave me more clarity than 3 months of pondering."
                    </p>
                    <p className="text-sm font-medium">Sarah K., UX Designer</p>
                    <p className="text-xs text-gray-500">Beta Tester</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust & Urgency */}
          <div className="text-center mt-12 pt-8 border-t border-white/30">
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <p className="text-sm text-gray-600"><strong>Early Access:</strong><br />First 500 get priority beta access</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <p className="text-sm text-gray-600"><strong>No Obligations:</strong><br />Free assessment, cancel anytime</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔒</div>
                <p className="text-sm text-gray-600"><strong>Privacy First:</strong><br />GDPR compliant, data protection guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
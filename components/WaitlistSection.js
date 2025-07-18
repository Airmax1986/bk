'use client'
import { useState } from 'react'

export default function WaitlistSection() {
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
            
            {/* CTA */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-white/50 text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold font-space-grotesk mb-4">
                  Join the Waitlist
                </h3>
                <p className="text-gray-600 mb-6">
                  Get exclusive early access and immediate brand insights
                </p>
              </div>

              <a
                href="https://tally.so/r/mVXDpQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-4 bg-gradient-to-r from-coral-500 to-coral-600 text-white font-semibold rounded-lg hover:from-coral-600 hover:to-coral-700 transition-all duration-300 mb-6"
              >
                Reserve Your Brand Kernel Discovery
              </a>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Your data is safe. No spam, unsubscribe anytime.
                </div>
              </div>
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
                  <span className="text-2xl font-bold text-coral-600">247+</span>
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
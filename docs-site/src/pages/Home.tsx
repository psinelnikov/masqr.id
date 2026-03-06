export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple, Private Referral Marketing
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Connect brands with influencers through privacy-first attribution and transparent CPC billing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:brands@masqr.id"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started as a Brand
            </a>
            <a
              href="mailto:influencers@masqr.id"
              className="px-8 py-4 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-900 transition-colors"
            >
              Join as an Influencer
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Masqr.id?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-3">Privacy-First</h3>
            <p className="text-gray-600">
              No tracking cookies, hashed IP addresses, and GDPR compliant. Your data stays private while enabling effective attribution.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-3">Transparent Billing</h3>
            <p className="text-gray-600">
              Cost-Per-Click model with real-time tracking. You only pay for actual results with clear, automated invoicing.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-3">Simple Setup</h3>
            <p className="text-gray-600">
              Create campaigns in minutes, generate referral links instantly. No complex integrations or lengthy onboarding required.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600">Three simple steps to start your referral marketing campaign</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Campaign</h3>
              <p className="text-gray-600">
                Brands create campaigns with destination URLs, CPC rates, and budget limits
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Generate Links</h3>
              <p className="text-gray-600">
                Influencers get unique tokens and generate custom referral links
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Track & Pay</h3>
              <p className="text-gray-600">
                Clicks are tracked, attributed, and billed transparently
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join brands and influencers who trust Masqr.id for privacy-first referral marketing
        </p>
        <a
          href="mailto:contact@masqr.id"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Contact Us Today
        </a>
      </div>
    </div>
  )
}
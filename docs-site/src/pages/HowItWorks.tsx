export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-xl text-blue-100">
            A simple, transparent process for brands and influencers
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">For Brands</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">1. Create a Campaign</h3>
              <p className="text-gray-600 mb-4">
                Define your campaign details in the dashboard:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Campaign name (e.g., "Summer Sale 2024")</li>
                <li>Destination URL (where users land after clicking)</li>
                <li>Maximum CPC (cost per click)</li>
                <li>Total budget limit</li>
                <li>Optional start and end dates</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">2. Get Your Campaign Token</h3>
              <p className="text-gray-600 mb-4">
                Receive a unique campaign token like <code className="bg-gray-100 px-2 py-1 rounded">CAMP-XYZ123</code>
              </p>
              <p className="text-gray-600">
                Share this token with influencers you want to work with. They'll use it to generate their referral links.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">3. Monitor Performance</h3>
              <p className="text-gray-600 mb-4">
                Track your campaign's performance in real-time:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Total clicks and cost</li>
                <li>Clicks per influencer</li>
                <li>Daily click trends</li>
                <li>Unique vs. total clicks</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">4. Pay for Results</h3>
              <p className="text-gray-600">
                CPC billing means you only pay when users actually click. No wasted budget on impressions that don't convert.
                Automated invoicing makes billing simple and transparent.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">For Influencers</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">1. Register (Optional Personal Info)</h3>
              <p className="text-gray-600 mb-4">
                Sign up with minimal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Email (optional - for notifications only)</li>
                <li>Payout method (PayPal, IBAN, or Crypto)</li>
                <li>Payout address</li>
              </ul>
              <p className="text-gray-600 mt-4">
                <strong>You can remain completely anonymous</strong> - we only need payout details to process payments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">2. Get Your Token</h3>
              <p className="text-gray-600 mb-4">
                Receive a unique influencer token like <code className="bg-gray-100 px-2 py-1 rounded">INF-ABC456</code>
              </p>
              <p className="text-gray-600">
                Keep this token safe - you'll use it to generate referral links for any campaign you participate in.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">3. Generate Referral Links</h3>
              <p className="text-gray-600 mb-4">
                Combine your influencer token with a campaign token to create a custom referral link:
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4 overflow-x-auto">
                https://masqr.id/r/CAMP-XYZ123/INF-ABC456
              </div>
              <p className="text-gray-600">
                Each click on your link is tracked and attributed to you, earning you the CPC rate set by the brand.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">4. Share Anywhere</h3>
              <p className="text-gray-600 mb-4">
                Share your referral link wherever your audience is:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Social media (Twitter, Instagram, LinkedIn)</li>
                <li>Blog posts and articles</li>
                <li>YouTube video descriptions</li>
                <li>QR codes for offline flyers</li>
                <li>Email newsletters</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">5. Track Earnings</h3>
              <p className="text-gray-600">
                View your click count and pending payouts in your dashboard. Earnings are calculated automatically and paid out according to your chosen method.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">For Users (Clickers)</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-gray-600 mb-4">
              When you click a referral link:
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>You visit the referral link from an influencer</li>
              <li>The platform records an anonymous click (hashed IP/UA)</li>
              <li>You're automatically redirected to the brand's destination page</li>
              <li>No cookies are set on your device</li>
              <li>Your personal data is not collected or stored</li>
            </ol>
            <p className="text-gray-600 mt-4">
              <strong>Your privacy is protected</strong> - the platform only stores hashed, non-identifiable data for attribution purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
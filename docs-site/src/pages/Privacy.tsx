export default function Privacy() {
  return (
    <div className="min-h-screen">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy & Security</h1>
          <p className="text-xl text-blue-100">
            Your data protection is our top priority
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
          <div className="flex items-start">
            <div className="text-green-600 mr-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-green-900 mb-2">100% GDPR & e-Privacy Compliant</h2>
              <p className="text-green-800">
                Our platform is designed from the ground up to comply with GDPR and e-privacy regulations.
                We use legitimate interest as our legal basis and implement privacy by design principles.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">What We Don't Collect</h2>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span><strong>No tracking cookies</strong> - We don't set any cookies on user devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span><strong>No personal identifiers</strong> - We don't collect names, addresses, or phone numbers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span><strong>No device fingerprinting</strong> - We don't use browser or device fingerprinting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span><strong>No location tracking</strong> - We don't track user location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span><strong>No behavioral tracking</strong> - We don't track user behavior across sites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span><strong>No third-party tracking</strong> - We don't share data with third-party trackers</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What We Store (Anonymized)</h2>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>Hashed IP addresses</strong> - Converted to irreversible hash using per-campaign salt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>Hashed User-Agent strings</strong> - Converted to irreversible hash for device type estimation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>Click timestamps</strong> - When the click occurred (UTC)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>Campaign and influencer IDs</strong> - For attribution purposes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>Payout addresses</strong> - Encrypted payment details for influencers (optional email)</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How Hashing Protects Your Privacy</h2>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-600 mb-4">
                We use cryptographic hashing with unique salts for each campaign to protect user data:
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4 overflow-x-auto">
                hash = SHA256(IP_address || campaign_salt)
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Each campaign has a unique salt that's never shared</li>
                <li>• Hashes are irreversible - original data cannot be recovered</li>
                <li>• Same IP on different campaigns produces different hashes</li>
                <li>• Enables click detection without storing identifiable data</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Encryption</h2>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-600 mb-4">
                All sensitive data is encrypted using industry-standard methods:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>AES-256 encryption</strong> - For data at rest</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>TLS 1.3</strong> - For all data in transit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Strong cipher suites</strong> - Modern, secure encryption protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>HSTS headers</strong> - Enforce HTTPS connections</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">User Rights</h2>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-600 mb-4">
                Influencers have the following rights under GDPR:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">→</span>
                  <span><strong>Right to Access</strong> - View your click data and earnings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">→</span>
                  <span><strong>Right to Erasure</strong> - Request deletion of your account</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">→</span>
                  <span><strong>Right to Portability</strong> - Export your data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">→</span>
                  <span><strong>Right to Rectification</strong> - Update payout information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">→</span>
                  <span><strong>Right to Object</strong> - Opt-out of email notifications</span>
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise these rights, contact us at: <a href="mailto:privacy@masqr.id" className="text-blue-600 hover:underline">privacy@masqr.id</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <ul className="space-y-3 text-gray-600">
                <li><strong>Click data:</strong> Retained for 2 years for billing purposes</li>
                <li><strong>Payout details:</strong> Retained for 7 years (tax requirement)</li>
                <li><strong>Account data:</strong> Deleted 30 days after account closure request</li>
                <li><strong>Reports:</strong> Retained until resolved, then anonymized</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-600 mb-4">
                We use the following third-party services to operate our platform:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li><strong>Payment processors</strong> - PayPal, SEPA, crypto networks (for payouts only)</li>
                <li><strong>Cloud infrastructure</strong> - AWS, Google Cloud, or similar (EU region servers)</li>
                <li><strong>Email service</strong> - Transactional emails (optional, only for users who opt-in)</li>
              </ul>
              <p className="text-gray-600 mt-4">
                All third-party services are GDPR compliant and covered by data processing agreements.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                For privacy-related questions, requests, or concerns:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Email:</strong> <a href="mailto:privacy@masqr.id" className="text-blue-600 hover:underline">privacy@masqr.id</a></li>
                <li>• <strong>Response Time:</strong> Within 30 days</li>
                <li>• <strong>DPO Contact:</strong> <a href="mailto:legal@masqr.id" className="text-blue-600 hover:underline">legal@masqr.id</a></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
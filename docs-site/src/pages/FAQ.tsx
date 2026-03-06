import { useState } from 'react'

const faqs = [
  {
    question: "What is Masqr.id?",
    answer: "Masqr.id is a privacy-first Brand-to-Influencer Referral Platform that lets brands create campaigns and influencers generate custom referral links. We use Cost-Per-Click (CPC) billing and anonymous attribution to protect user privacy while enabling effective marketing."
  },
  {
    question: "How is Masqr.id different from traditional affiliate platforms?",
    answer: "Unlike traditional platforms that require extensive personal data and use invasive tracking cookies, Masqr.id provides: simplified onboarding, no cookies, hashed data collection, GDPR/e-privacy compliance, and the option for influencers to stay completely anonymous."
  },
  {
    question: "Do you use cookies?",
    answer: "No, we don't use any tracking cookies. Our platform operates without cookies, which means we don't require user consent under the e-Privacy Directive. All attribution is done through hashed IP addresses and User-Agent strings."
  },
  {
    question: "Is my IP address stored?",
    answer: "No, we don't store your actual IP address. We hash your IP address using a per-campaign salt, which makes it irreversible. The same IP address produces different hashes for different campaigns, enhancing privacy."
  },
  {
    question: "Can influencers remain anonymous?",
    answer: "Yes! Influencers can remain completely anonymous. We only need payout details (PayPal email, IBAN, or crypto wallet address) to process payments. Email is optional and only used for notifications if provided."
  },
  {
    question: "How does the CPC model work?",
    answer: "Brands set a maximum Cost-Per-Click amount when creating a campaign. Each time a user clicks an influencer's referral link, the brand pays that amount. This is calculated as: total cost = clicks × max_cpc. Billing is automated and transparent."
  },
  {
    question: "What payment methods do you support for payouts?",
    answer: "We support PayPal, bank transfers (IBAN/SEPA), and cryptocurrency wallets. Influencers choose their preferred method during registration."
  },
  {
    question: "How do I create a referral link?",
    answer: "Once you're registered as an influencer, you'll receive an influencer token. You can generate a referral link by combining your token with a campaign token from a brand. The format is: https://masqr.id/r/CAMP-XYZ123/INF-ABC456"
  },
  {
    question: "How are clicks tracked?",
    answer: "When a user clicks a referral link, we record the click timestamp, hashed IP address, and hashed User-Agent string. We then redirect the user to the brand's destination URL. No cookies are set, and all data is hashed or encrypted."
  },
  {
    question: "Can I report a suspicious link?",
    answer: "Yes, we have an abuse reporting system at https://masqr.id/report. You can report links that appear suspicious, fraudulent, or inappropriate. All reports are reviewed, and appropriate action is taken."
  },
  {
    question: "Is my data shared with brands?",
    answer: "No, we don't share personal data with brands. Brands only see aggregated analytics (click counts, costs, and anonymized influencer IDs). Individual user data is never shared."
  },
  {
    question: "How do I delete my account?",
    answer: "You can request account deletion by contacting us at privacy@masqr.id. We'll delete your account and associated data within 30 days, except where legally required to retain certain records (e.g., for tax purposes)."
  },
  {
    question: "What happens if a campaign budget is exhausted?",
    answer: "When a campaign's budget is exhausted, the referral links stop working and users see a message indicating the campaign has ended. Brands can increase the budget or create new campaigns."
  },
  {
    question: "Can brands pause or end campaigns?",
    answer: "Yes, brands can pause or end campaigns at any time. Paused campaigns temporarily stop accepting clicks, while ended campaigns are permanently closed."
  },
  {
    question: "How do I get started?",
    answer: "Brands should contact us at brands@masqr.id to get started. Influencers can sign up directly through our platform once it's live. For general inquiries, email contact@masqr.id."
  },
  {
    question: "Is Masqr.id GDPR compliant?",
    answer: "Yes, we're fully GDPR compliant. We use legitimate interest as our legal basis, implement privacy by design, provide user rights (access, erasure, portability), and maintain a Record of Processing Activities."
  },
  {
    question: "What information do brands need to provide?",
    answer: "Brands need to provide: company name, contact email, and billing address. This is necessary for account creation, invoicing, and compliance purposes."
  },
  {
    question: "How are payouts processed?",
    answer: "Payouts are processed automatically based on influencer earnings. The frequency and minimum payout amount are configured in the platform. Funds are sent to the influencer's chosen payout method."
  },
  {
    question: "Can I use the platform internationally?",
    answer: "Yes, Masqr.id is available globally. We support multiple currencies and international payout methods. Our infrastructure is hosted in the EU region to ensure GDPR compliance."
  },
  {
    question: "How do you prevent click fraud?",
    answer: "We use several methods to prevent click fraud: rate limiting (10 clicks/minute per IP), duplicate click detection, User-Agent analysis, and suspicious activity monitoring. Fraudulent clicks are not credited to influencers."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100">
            Find answers to common questions about Masqr.id
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-0 border-t border-gray-100">
                  <p className="text-gray-600 py-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? We're here to help.
          </p>
          <a
            href="mailto:support@masqr.id"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}
import { COOKIE_POLICY_URL, PROVIDER_AGREEMENT_URL, TERMS_AND_CONDITIONS_URL } from "@/consts/support";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export const metadata = {
  title: "Privacy Policy - CLEIN Home Services",
  description: "Learn how CLEIN protects your privacy and handles your personal data securely.",
};

export default function PrivacyPage() {
  return (
  
     
      <main>
        {/* Hero Section */}
        <section className="relative pb-20 pt-32 lg:pt-40 overflow-hidden bg-gradient-to-br from-[#0057B8] to-[#4C9AFF]">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          
          <div className="relative z-10 container-custom text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Last updated: January 7, 2025
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl flex flex-col items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#0057B8] hover:text-[#004494] mb-8 transition-colors"
            >
              <HiArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>

            <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 prose prose-lg  !max-w-screen-lg ">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                CLEIN Home Services Platform (&quot;CLEIN&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
                our mobile application and services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you register with CLEIN, we collect:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Full name and contact information (email, phone number)</li>
                <li>Residential or service address</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Government-issued ID (for service providers)</li>
                <li>Tax code (Codice Fiscale) for Italian residents</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Usage Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We automatically collect:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Device information (type, operating system, unique identifiers)</li>
                <li>Location data (with your permission)</li>
                <li>App usage patterns and preferences</li>
                <li>Service booking history and interactions</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Provide and improve our services</li>
                <li>Process bookings and payments</li>
                <li>Connect customers with service providers</li>
                <li>Send service updates and notifications</li>
                <li>Ensure safety and prevent fraud</li>
                <li>Comply with legal obligations</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We share your information only:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>With service providers to fulfill bookings</li>
                <li>With payment processors to handle transactions</li>
                <li>With insurance partners for coverage purposes</li>
                <li>When required by law or legal process</li>
                <li>With your explicit consent</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We implement industry-standard security measures including encryption, secure servers, 
                and regular security audits to protect your personal information from unauthorized access, 
                disclosure, or misuse.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under GDPR and Italian privacy laws, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our app uses cookies and similar technologies to enhance your experience, analyze usage, 
                and provide personalized content. You can manage cookie preferences in your device settings.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                CLEIN services are not intended for children under 18. We do not knowingly collect 
                personal information from minors.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We retain your information for as long as necessary to provide services and comply with 
                legal obligations. You may request deletion of your account and associated data at any time.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your data may be transferred to and processed in countries outside the EU. We ensure 
                appropriate safeguards are in place to protect your information in accordance with this policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may update this Privacy Policy periodically. We will notify you of any material changes 
                through the app or via email.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For privacy-related questions or to exercise your rights, contact us at:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> privacy@clein.it
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +39 02 1234 5678
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> CLEIN S.r.l., Via Example 123, 20121 Milan, Italy
                </p>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <p className="text-center text-gray-700">
                  By using CLEIN services, you acknowledge that you have read and understood this Privacy Policy.
                </p>
              </div>
            </div>

            {/* Related Legal Pages */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Legal Documents</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link
                  href={TERMS_AND_CONDITIONS_URL}
                  className="block p-4 bg-white rounded-xl shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Terms and Conditions</h4>
                  <p className="text-sm text-gray-600">Read our service terms</p>
                </Link>
                <Link
                   href={COOKIE_POLICY_URL}
                  className="block p-4 bg-white rounded-xl shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Cookie Policy</h4>
                  <p className="text-sm text-gray-600">How we use cookies</p>
                </Link>
                <Link
                  href={PROVIDER_AGREEMENT_URL}
                  className="block p-4 bg-white rounded-xl shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Provider Agreement</h4>
                  <p className="text-sm text-gray-600">For service providers</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
     
    
  );
}
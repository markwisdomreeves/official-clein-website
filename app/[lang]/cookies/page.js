import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { PRIVACY_POLICY_URL, PROVIDER_AGREEMENT_URL, TERMS_AND_CONDITIONS_URL } from "@/consts/support";

export const metadata = {
  title: "Cookie Policy - CLEIN Home Services",
  description: "Learn about how CLEIN uses cookies and similar technologies to enhance your experience.",
};

export default function CookiesPage() {
  return (
    <>
     
      <main>
        {/* Hero Section */}
        <section className="relative pb-20 pt-32 lg:pt-40 overflow-hidden bg-gradient-to-br from-[#0057B8] to-[#4C9AFF]">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          
          <div className="relative z-10 container-custom text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Cookie Policy
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

            <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 prose prose-lg !max-w-screen-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Cookies are small text files that are placed on your device when you visit our website or use our mobile 
                application. They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CLEIN uses cookies and similar technologies for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li><strong>Essential Cookies:</strong> Required for the platform to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how users interact with our services</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Targeting Cookies:</strong> Deliver relevant advertisements and measure their effectiveness</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 First-Party Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                These are cookies set by CLEIN directly and include:
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-semibold text-gray-900">Cookie Name</th>
                      <th className="text-left py-2 font-semibold text-gray-900">Purpose</th>
                      <th className="text-left py-2 font-semibold text-gray-900">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 text-gray-700">clein_session</td>
                      <td className="py-2 text-gray-700">Maintains user session</td>
                      <td className="py-2 text-gray-700">Session</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 text-gray-700">clein_preferences</td>
                      <td className="py-2 text-gray-700">Stores user preferences</td>
                      <td className="py-2 text-gray-700">1 year</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 text-gray-700">clein_analytics</td>
                      <td className="py-2 text-gray-700">Analytics tracking</td>
                      <td className="py-2 text-gray-700">2 years</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-700">clein_consent</td>
                      <td className="py-2 text-gray-700">Cookie consent status</td>
                      <td className="py-2 text-gray-700">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Third-Party Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We also use cookies from trusted third parties:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li><strong>Google Analytics:</strong> To understand how users interact with our platform</li>
                <li><strong>Google Tag Manager:</strong> To manage website tags without editing code</li>
                <li><strong>Facebook Pixel:</strong> For advertising and retargeting purposes</li>
                <li><strong>Stripe:</strong> For secure payment processing</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookie Categories</h2>
              
              <div className="space-y-6 mb-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Strictly Necessary Cookies</h4>
                  <p className="text-gray-700 mb-2">These cookies are essential for the website to function properly.</p>
                  <p className="text-sm text-gray-600">Examples: Authentication, security, load balancing</p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Performance Cookies</h4>
                  <p className="text-gray-700 mb-2">These help us understand how visitors interact with our platform.</p>
                  <p className="text-sm text-gray-600">Examples: Page views, bounce rates, traffic sources</p>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Functional Cookies</h4>
                  <p className="text-gray-700 mb-2">These enable personalized features and remember your choices.</p>
                  <p className="text-sm text-gray-600">Examples: Language preferences, location settings, user interface choices</p>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h4>
                  <p className="text-gray-700 mb-2">These track your visit across websites to display relevant ads.</p>
                  <p className="text-sm text-gray-600">Examples: Retargeting pixels, conversion tracking, audience building</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have several options for managing cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies</li>
                <li><strong>Mobile Settings:</strong> You can manage app permissions in your device settings</li>
                <li><strong>Cookie Banner:</strong> Use our cookie consent tool when you first visit</li>
                <li><strong>Opt-Out Links:</strong> Use third-party opt-out mechanisms for advertising cookies</li>
              </ul>

              <div className="bg-yellow-50 rounded-xl p-6 mb-6">
                <p className="text-gray-700">
                  <strong>Note:</strong> Disabling certain cookies may impact the functionality of our services. 
                  Essential cookies cannot be disabled as they are necessary for the platform to work properly.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Browser-Specific Instructions</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To manage cookies in your browser:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Updates to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal 
                reasons. We will notify you of any material changes by posting the new policy on this page and updating 
                the &quot;Last updated&quot; date.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about our use of cookies, please contact us:
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
                  For more information about how we protect your privacy, please read our 
                  <Link href={PRIVACY_POLICY_URL}  className="text-[#0057B8] hover:text-[#004494] font-medium mx-1">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </div>

            {/* Related Legal Pages */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Legal Documents</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link
                  href={PRIVACY_POLICY_URL} 
                  className="block p-4 bg-white rounded-xl shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Privacy Policy</h4>
                  <p className="text-sm text-gray-600">How we protect your data</p>
                </Link>
                <Link
                  href={TERMS_AND_CONDITIONS_URL}
                  className="block p-4 bg-white rounded-xl shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Terms and Conditions</h4>
                  <p className="text-sm text-gray-600">Read our service terms</p>
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
     
    </>
  );
}
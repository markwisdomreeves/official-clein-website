import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { COOKIE_POLICY_URL, PRIVACY_POLICY_URL, PROVIDER_AGREEMENT_URL } from "@/consts/support";

export const metadata = {
  title: "Terms and Conditions - CLEIN Home Services",
  description: "Read CLEIN's terms and conditions for using our home services platform in Italy.",
};

export default function TermsPage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative pb-20 pt-32 lg:pt-40 overflow-hidden bg-gradient-to-br from-[#0057B8] to-[#4C9AFF]">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          
          <div className="relative z-10 container-custom text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Terms and Conditions
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                By accessing and using the CLEIN mobile application and services (&quot;Service&quot;), you agree to be bound by 
                these Terms and Conditions (&quot;Terms&quot;). If you disagree with any part of these terms, you may not access 
                the Service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                CLEIN is a technology platform that connects customers with independent service providers for various 
                home services including cleaning, repairs, maintenance, and other professional services. CLEIN facilitates 
                these connections but is not responsible for the actual provision of services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Registration</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use CLEIN services, you must:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Be at least 18 years old</li>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Account Termination</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We reserve the right to suspend or terminate accounts that violate these Terms, engage in fraudulent 
                activity, or misuse the Service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Bookings</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Booking Process</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you book a service through CLEIN:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>You enter into a direct contract with the service provider</li>
                <li>Prices are clearly displayed before confirmation</li>
                <li>You agree to be present or provide access at the scheduled time</li>
                <li>Payment is processed according to the selected method</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Cancellations and Refunds</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cancellation policies:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Free cancellation up to 24 hours before service</li>
                <li>50% charge for cancellations within 24 hours</li>
                <li>Full charge for no-shows or last-minute cancellations</li>
                <li>Refunds processed within 5-7 business days</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Provider Relationship</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Service providers are independent contractors, not employees of CLEIN. We verify their credentials and 
                insurance but are not liable for their actions beyond our facilitation role. Any disputes should be 
                resolved directly with the provider, though we offer mediation support.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Conduct</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Use the Service for illegal purposes</li>
                <li>Harass, abuse, or discriminate against service providers</li>
                <li>Provide false information or impersonate others</li>
                <li>Attempt to circumvent the platform for direct bookings</li>
                <li>Reverse engineer or hack the Service</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payment conditions:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>All prices include applicable taxes unless stated otherwise</li>
                <li>Payment methods include credit/debit cards and digital wallets</li>
                <li>We use secure payment processors and do not store card details</li>
                <li>Additional charges may apply for special requests or materials</li>
                <li>Disputed charges must be reported within 30 days</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                All content on CLEIN, including logos, text, graphics, and software, is our property or licensed to us. 
                You may not copy, modify, distribute, or create derivative works without written permission.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To the maximum extent permitted by law, CLEIN shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages arising from your use of the Service. Our total liability shall not 
                exceed the amount paid for the specific service in question.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                You agree to indemnify and hold CLEIN harmless from any claims, damages, losses, or expenses arising 
                from your violation of these Terms, misuse of the Service, or disputes with service providers.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your use of the Service is also governed by our Privacy Policy. By using CLEIN, you consent to our 
                collection and use of information as described in the Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dispute handling:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>First, attempt resolution through our customer support</li>
                <li>If unresolved, proceed to mediation</li>
                <li>Final disputes subject to Italian law and Milan courts</li>
                <li>Class action waivers apply where permitted</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may modify these Terms at any time. Continued use of the Service after changes constitutes 
                acceptance of the new Terms. Material changes will be notified via app or email.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                These Terms are governed by the laws of Italy without regard to conflict of law principles. 
                Any legal proceedings shall be brought exclusively in the courts of Milan, Italy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about these Terms, contact us at:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> legal@clein.it
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +39 392 349 8466
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> Via Don Lorenzo Milani 50, 64100 Teramo TE, Italia
                </p>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <p className="text-center text-gray-700">
                  By using CLEIN services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
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
    </>
  );
}
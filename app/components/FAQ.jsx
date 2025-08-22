"use client";

import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

// English fallback FAQs
const fallbackFaqs = {
  customers: [
    {
      question: "How does CLEIN work?",
      answer: "CLEIN is a mobile platform that connects you with verified home service professionals. Simply download our app, choose the service you need, select a provider based on ratings and reviews, and book instantly. Payment is handled securely through the app."
    },
    {
      question: "Are the service providers verified?",
      answer: "Yes, all CLEIN providers undergo a thorough verification process including background checks, skill assessments, and document verification. We ensure only qualified professionals join our platform."
    },
    {
      question: "What services are available on CLEIN?",
      answer: "We offer a wide range of home services including house cleaning, office cleaning, handyman services, electrical work, plumbing, gardening, appliance repair, and more. Check our app for the complete list of services in your area."
    },
    {
      question: "How do I pay for services?",
      answer: "Payment is processed securely through the CLEIN app. We accept credit cards, debit cards, and digital payment methods. You can also save your payment methods for faster checkout."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "Your satisfaction is our priority. If you're not happy with the service, you can report it through the app within 24 hours. Our customer support team will investigate and work to resolve the issue, including arranging a re-service or refund if necessary."
    },
    {
      question: "Can I book recurring services?",
      answer: "Yes! You can set up recurring bookings for services like regular house cleaning or gardening. Choose your preferred frequency (weekly, bi-weekly, or monthly) and we'll automatically schedule your services."
    },
    {
      question: "Is CLEIN available in my city?",
      answer: "CLEIN is currently available in 20+ major Italian cities including Rome, Milan, Naples, Turin, Florence, and more. Check our app or website for the complete list of cities we serve."
    }
  ],
  providers: [
    {
      question: "How can I become a CLEIN provider?",
      answer: "Download the CLEIN Provider app, complete the registration process with your details and documents, pass our verification process, and start receiving job requests. It's that simple!"
    },
    {
      question: "What are the requirements to join CLEIN?",
      answer: "You need to be 18+ years old, have relevant skills or experience in your service category, possess required documents (ID, tax code, any professional licenses), and maintain high service standards."
    },
    {
      question: "How much can I earn with CLEIN?",
      answer: "Earnings depend on the services you offer, your availability, and customer demand. You set your own rates within our guidelines, and many providers earn competitive income working flexible hours."
    },
    {
      question: "How do I get paid?",
      answer: "Payments are transferred to your bank account weekly. You can track your earnings in real-time through the provider app and receive detailed payment statements."
    },
    {
      question: "Do I need to bring my own tools?",
      answer: "Yes, providers are expected to bring their own tools and equipment necessary for their services. This ensures you can deliver quality service with tools you're comfortable using."
    }
  ]
};

export default function FAQ({ dict, lang }) {
  const [openItems, setOpenItems] = useState({});

  // Get FAQ data from translations or fallback to English
  const faqData = {
    customers: dict?.faq?.customers || fallbackFaqs.customers,
    providers: dict?.faq?.providers || fallbackFaqs.providers
  };

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {dict?.faq?.title || "Frequently Asked"} <span className="gradient-text">{dict?.faq?.titleHighlight || ""}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dict?.faq?.subtitle || "Find answers to common questions about CLEIN services"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Customer FAQs */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {dict?.faq?.categories?.customers || "For Customers"}
            </h3>
            <div className="space-y-4">
              {faqData.customers.map((faq, index) => {
                const isOpen = openItems[`customers-${index}`];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-soft overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem('customers', index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900 pr-4 text-lg">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <HiChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <HiChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    <div
                      className={`px-6 transition-all duration-300 ${
                        isOpen ? "py-4 pb-6" : "max-h-0 overflow-hidden"
                      }`}
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Provider FAQs */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {dict?.faq?.categories?.providers || "For Providers"}
            </h3>
            <div className="space-y-4">
              {faqData.providers.map((faq, index) => {
                const isOpen = openItems[`providers-${index}`];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-soft overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem('providers', index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900 pr-4 text-lg">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <HiChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <HiChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    <div
                      className={`px-6 transition-all duration-300 ${
                        isOpen ? "py-4 pb-6" : "max-h-0 overflow-hidden"
                      }`}
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
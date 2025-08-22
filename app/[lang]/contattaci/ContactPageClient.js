"use client";

import { useState } from "react";
// import dynamic from "next/dynamic";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import FAQ from "@/app/components/FAQ";
import { services } from "@/data/services";

// const InteractiveMap = dynamic(
//   () => import("@/app/components/InteractiveMap"),
//   { 
//     ssr: false,
//     loading: () => (
//       <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
//         <p className="text-gray-600">Loading map...</p>
//       </div>
//     )
//   }
// );

export default function ContactPageClient({ dict, lang }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    ...services.map(service => ({
      key: service.slug,
      label: service.title,
      icon: service.icon
    })),
    { 
      key: "other", 
      label: dict?.contact?.form?.fields?.service?.options?.other || "Altro",
      icon: "❓"
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/contattaci', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          lang: lang || 'it'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          consent: false
        });
      } else {
        setSubmitStatus("error");
        console.error('Error:', data.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0057B8] to-[#4C9AFF]">
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 container-custom section-padding text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {dict?.contact?.hero?.title || "Contact Us"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {dict?.contact?.hero?.subtitle || "We're here to help. Reach out to us for any questions, feedback, or support needs."}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {dict?.contact?.getInTouch?.title || "Get in Touch"}
                </h2>
                <p className="text-gray-600 mb-8">
                  {dict?.contact?.getInTouch?.description || "Have questions about CLEIN? We're here to help you 24/7. Choose your preferred way to reach us."}
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <a 
                  href="mailto:info@clein.it"
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <HiMail className="w-6 h-6 text-[#0057B8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{dict?.contact?.contactMethods?.email?.title || "Email"}</h3>
                    <p className="text-gray-600">info@clein.it</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {dict?.contact?.contactMethods?.email?.description || "We'll respond within 24 hours"}
                    </p>
                  </div>
                </a>

                <a 
                  href="tel:+393923498466"
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <HiPhone className="w-6 h-6 text-[#0057B8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{dict?.contact?.contactMethods?.phone?.title || "Phone"}</h3>
                    <p className="text-gray-600">{dict?.contact?.contactMethods?.phone?.number || "+39 392 349 8466"}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {dict?.contact?.contactMethods?.phone?.hours || "Mon-Fri 9:00-18:00"}
                    </p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/393923498466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FaWhatsapp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{dict?.contact?.contactMethods?.whatsapp?.title || "WhatsApp"}</h3>
                    <p className="text-gray-600">{dict?.contact?.contactMethods?.whatsapp?.number || "+39 392 349 8466"}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {dict?.contact?.contactMethods?.whatsapp?.description || "Quick support via WhatsApp"}
                    </p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <HiLocationMarker className="w-6 h-6 text-[#0057B8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{dict?.contact?.contactMethods?.serviceAreas?.title || "Service Areas"}</h3>
                    <p className="text-gray-600">
                      {dict?.contact?.contactMethods?.serviceAreas?.coverage || "Available in 20+ major Italian cities"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-soft p-4 lg:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {dict?.contact?.form?.title || "Send Us a Message"}
                </h2>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">
                      {dict?.contact?.form?.messages?.success || "Thank you for your message! We'll get back to you within 24 hours."}
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">
                      {dict?.contact?.form?.messages?.error || "Something went wrong. Please try again or contact us directly."}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {dict?.contact?.form?.fields?.fullName?.label || "Full Name"} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                        placeholder={dict?.contact?.form?.fields?.fullName?.placeholder || "Your full name"}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {dict?.contact?.form?.fields?.email?.label || "Email Address"} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                        placeholder={dict?.contact?.form?.fields?.email?.placeholder || "your.email@example.com"}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        {dict?.contact?.form?.fields?.phone?.label || "Phone Number"}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                        placeholder={dict?.contact?.form?.fields?.phone?.placeholder || "+39 392 349 8466"}
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        {dict?.contact?.form?.fields?.service?.label || "Service Interest"}
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                      >
                        <option value="">{dict?.contact?.form?.fields?.service?.placeholder || "Select a service"}</option>
                        {serviceOptions.map((service) => (
                          <option key={service.key} value={service.key}>
                            {service.icon} {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {dict?.contact?.form?.fields?.message?.label || "Message"} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                      placeholder={dict?.contact?.form?.fields?.message?.placeholder || "Tell us how we can help you..."}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className=" h-4 w-4 text-[#0057B8] focus:ring-[#0057B8] border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      {dict?.contact?.form?.fields?.consent?.text || "I agree to the processing of my personal data according to CLEIN's"}{" "}
                      <a 
                        href="https://www.iubenda.com/privacy-policy/23075000/cookie-policy"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-[#0057B8] hover:underline">
                        {dict?.contact?.form?.fields?.consent?.privacyPolicy || "Privacy Policy"}
                      </a>
                      {dict?.contact?.form?.fields?.consent?.linkText ? ` ${dict.contact.form.fields.consent.linkText}` : ""}. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (dict?.contact?.form?.submit?.sending || "Sending...") : (dict?.contact?.form?.submit?.button || "Send Message")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {dict?.contact?.map?.title || "Our Service Areas"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {dict?.contact?.map?.description || "CLEIN operates in major cities across Italy. Find us in your area and discover available services."}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-soft p-4 lg:p-8">
            <InteractiveMap />
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
     <FAQ dict={dict} lang={lang} />
    </main>
  );
} 
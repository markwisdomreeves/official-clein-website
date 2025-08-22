"use client";

import { useState } from "react";
import { HiCurrencyEuro, HiClock, HiUsers, HiTrendingUp, HiSupport } from "react-icons/hi";
import { FaGooglePlay, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function BecomeProviderClient({ dict, lang }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const provider = dict?.becomeProvider || {};
  const hero = provider.hero || {};
  const benefits = provider.benefits || {};
  const testimonialData = provider.testimonials || {};
  const howItWorks = provider.howItWorks || {};
  const requirements = provider.requirements || {};
  const cta = provider.cta || {};

  const benefitsData = [
    {
      icon: HiCurrencyEuro,
      title: benefits.items?.earnMore?.title || "Earn More",
      description: benefits.items?.earnMore?.description || "Set your own rates and keep 85% of your earnings.",
      value: benefits.items?.earnMore?.value || "€2,500+",
      label: benefits.items?.earnMore?.label || "Average monthly earnings"
    },
    {
      icon: HiClock,
      title: benefits.items?.flexibleSchedule?.title || "Flexible Schedule",
      description: benefits.items?.flexibleSchedule?.description || "Work when you want. Accept jobs that fit your schedule.",
      value: benefits.items?.flexibleSchedule?.value || "You Choose",
      label: benefits.items?.flexibleSchedule?.label || "Your working hours"
    },
    {
      icon: HiUsers,
      title: benefits.items?.moreCustomers?.title || "More Customers",
      description: benefits.items?.moreCustomers?.description || "Access thousands of customers actively looking for services.",
      value: benefits.items?.moreCustomers?.value || "10,000+",
      label: benefits.items?.moreCustomers?.label || "Active customers"
    },
    {
      icon: FaMoneyBillWave,
      title: benefits.items?.fastPayment?.title || "Fast Payments",
      description: benefits.items?.fastPayment?.description || "Get paid within 48h of job completion with secure, reliable transactions.",
      value: benefits.items?.fastPayment?.value || "48h",
      label: benefits.items?.fastPayment?.label || "Average payout after job completion"
    },
    {
      icon: HiTrendingUp,
      title: benefits.items?.growBusiness?.title || "Grow Your Business",
      description: benefits.items?.growBusiness?.description || "Build your reputation with ratings and expand your client base.",
      value: benefits.items?.growBusiness?.value || "4.8★",
      label: benefits.items?.growBusiness?.label || "Average provider rating"
    },
    {
      icon: HiSupport,
      title: benefits.items?.support247?.title || "24/7 Support",
      description: benefits.items?.support247?.description || "Our dedicated team is always here to help you succeed.",
      value: benefits.items?.support247?.value || "24/7",
      label: benefits.items?.support247?.label || "Support availability"
    }
  ];

  const stepsData = [
    {
      number: howItWorks.steps?.download?.number || "01",
      title: howItWorks.steps?.download?.title || "Download the App",
      description: howItWorks.steps?.download?.description || "Get the CLEIN Provider app from Google Play Store"
    },
    {
      number: howItWorks.steps?.register?.number || "02",
      title: howItWorks.steps?.register?.title || "Complete Registration",
      description: howItWorks.steps?.register?.description || "Fill in your details and upload required documents"
    },
    {
      number: howItWorks.steps?.verification?.number || "03",
      title: howItWorks.steps?.verification?.title || "Pass Verification",
      description: howItWorks.steps?.verification?.description || "Background check and skill assessment (48 hours)"
    },
    {
      number: howItWorks.steps?.startEarning?.number || "04",
      title: howItWorks.steps?.startEarning?.title || "Start Earning",
      description: howItWorks.steps?.startEarning?.description || "Receive job requests and start building your business"
    }
  ];

  const testimonials = testimonialData.providers || [
    {
      name: "Marco Bianchi",
      service: "Handyman",
      location: "Milan",
      quote: "CLEIN changed my life. I went from struggling to find clients to having a full schedule. The flexibility is amazing!",
      earnings: "€1660/month",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sofia Martini",
      service: "House Cleaner",
      location: "Rome",
      quote: "As a single mother, the flexible hours are perfect. I work while my kids are at school and earn great money.",
      earnings: "€1450/month",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Luigi Conti",
      service: "Electrician",
      location: "Naples",
      quote: "The app brings me quality clients who value professional work. My business has grown 300% since joining.",
      earnings: "€1375/month",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": hero.title + " " + hero.titleHighlight,
    "description": hero.subtitle,
    "datePosted": "2024-01-01",
    "validThrough": "2025-12-31",
    "employmentType": "CONTRACTOR",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "CLEIN",
      "sameAs": [
        "https://www.clein.it",
        "https://play.google.com/store/apps/details?id=com.clein.professionals&hl=it&gl=IT"
      ]
    },
    "jobLocation": {
      "@type": "Place",
      "addressLocality": "Italia",
      "addressCountry": "IT"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 1400,
        "maxValue": 2500,
        "unitText": "MONTH"
      }
    },
    "benefits": [
      "Flexible working hours",
      "85% earnings retention",
      "Insurance coverage",
      "24/7 support"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main>
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A896] via-[#00A896] to-[#0057B8] animate-gradient" />
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          
          {/* Animated shapes */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0057B8]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 container-custom section-padding text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            {hero.badge || "Join 500+ Service Providers"}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
          >
            {hero.title || "Turn Your Skills Into"}
            {/* <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-white">
              {hero.titleHighlight || "A Thriving Business"}
            </span> */}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8"
          >
            {hero.subtitle || "Join CLEIN's network of professional service providers. Earn more, work flexibly, and grow your business with Italy's leading platform."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.clein.professionals&hl=it&gl=IT"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex gap-2 items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-premium"
            >
             <Image src="/assets/google-play.svg" alt="Google Play" width={28} height={28} />
              <div className="text-left">
                <div className="text-xs text-gray-600">{hero.downloadButton?.text || "DOWNLOAD NOW"}</div>
                <div className="text-lg font-bold">{hero.downloadButton?.app || "Provider App"}</div>
              </div>
            </a>
            
            <button
              onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              {hero.learnMore || "Learn More"}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {benefits.title || "Why Providers Choose CLEIN"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {benefits.subtitle || "Join hundreds of professionals who are building successful businesses with CLEIN"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsData.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-premium transition-all duration-300 card-hover"
                >
                  <Icon className="w-12 h-12 text-[#00A896] mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {benefit.description}
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-2xl font-bold text-[#00A896]">
                      {benefit.value}
                    </div>
                    <div className="text-sm text-gray-500">
                      {benefit.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Provider Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {testimonialData.title || "Success Stories from Our Providers"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {testimonialData.subtitle || "Real providers sharing their journey with CLEIN"}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#00A896]/10 to-[#0057B8]/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  {/* Mobile testimonial image */}
                  <div className="md:hidden mb-6">
                    <div className="relative w-32 h-32 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00A896] to-[#0057B8] rounded-full" />
                      <div className="absolute inset-1 bg-white rounded-full" />
                      <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-200">
                        <img 
                          src={testimonials[activeTestimonial].image} 
                          alt={testimonials[activeTestimonial].name} 
                          width={120} 
                          height={120} 
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {testimonials[activeTestimonial].name}
                      </h3>
                      <p className="text-gray-600">
                        {testimonials[activeTestimonial].service} • {testimonials[activeTestimonial].location}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-700 italic mb-6">
                    &quot;{testimonials[activeTestimonial].quote}&quot;
                  </blockquote>
                  <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full">
                    <BsCashStack className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-semibold text-green-800">
                      {testimonialData.earningLabel || "Earning"} {testimonials[activeTestimonial].earnings}
                    </span>
                  </div>
                </div>
                
                {/* Desktop testimonial image */}
                <div className="hidden md:block">
                  <div className="relative w-64 h-64 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00A896] to-[#0057B8] rounded-full animate-pulse" />
                    <div className="absolute inset-2 bg-white rounded-full" />
                    <div className="absolute inset-4 rounded-full overflow-hidden bg-gray-200">
                      <img 
                        src={'https://randomuser.me/api/portraits/men/'+activeTestimonial+'.jpg'} 
                        alt={testimonials[activeTestimonial].name} 
                        width={240} 
                        height={240} 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-5 h-5 rounded-full transition-all duration-300 ${
                      activeTestimonial === index 
                        ? 'w-12 bg-[#00A896]' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {howItWorks.title || "Start Earning in 4 Simple Steps"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {howItWorks.subtitle || "Join CLEIN today and start receiving job requests within 48 hours"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stepsData.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#00A896]/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < stepsData.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {requirements.title || "Requirements to Join"}
              </h2>
              <p className="text-lg text-gray-600">
                {requirements.subtitle || "We maintain high standards to ensure quality service for our customers"}
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-premium p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6">
                {(requirements.items || ["18+ years old with valid ID", "Relevant skills or experience", "Italian tax code (Codice Fiscale)", "Professional liability insurance (we can help)", "Smartphone with internet connection", "Commitment to quality service"]).map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-2xl">
                <p className="text-center text-gray-700">
                  <strong>{requirements.insuranceNote?.title || "Don't have professional insurance?"}</strong> {requirements.insuranceNote?.subtitle || "No problem! We can help you get insured quickly and affordably."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[#00A896] to-[#0057B8]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {cta.title || "Ready to Transform Your Career?"}
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              {cta.subtitle || "Join CLEIN today and start building the business you've always dreamed of"}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.clein.professionals&hl=it&gl=IT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-premium"
              >
                <FaGooglePlay className="w-6 h-6 mr-3 text-[#3DDC84]" />
                {cta.downloadApp || "Download Provider App"}
              </a>
              
              <Link 
                href={`/${lang}/contattaci`}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                {cta.contactTeam || "Contact Our Team"}
              </Link>
            </div>

            <p className="text-white/90 mt-8 text-sm">
              {cta.features || "Average approval time: 48 hours • No registration fees • Cancel anytime"}
            </p>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  );
}
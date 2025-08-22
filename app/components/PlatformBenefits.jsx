"use client";

import { useState } from "react";
import { HiCurrencyEuro, HiCalendar, HiShieldCheck, HiGlobe, HiCreditCard, HiSparkles } from "react-icons/hi";
import { BsCashStack, BsClockHistory, BsShieldFillCheck, BsTranslate, BsCreditCard2Back } from "react-icons/bs";
import { motion } from "framer-motion";

const getBenefitsData = (dict, lang) => {
  const benefitsData = dict?.platformBenefits?.benefits;
  
  if (!benefitsData) {
    return [
      {
        icon: BsCashStack,
        title: "Transparent Pricing",
        description: "No hidden fees or surprise charges. See exact prices before booking any service.",
        gradient: "from-green-500 to-emerald-600",
        features: ["Fixed pricing", "No surge fees", "Price match guarantee"]
      },
      {
        icon: HiGlobe,
        title: "Localized Services",
        description: "Providers available across all major Italian cities with an interactive map for nearby services.",
        gradient: "from-yellow-400 to-yellow-600",
        features: ["Nationwide availability", "Geo-based search", "Region-specific offerings"]
      },
      {
        icon: BsClockHistory,
        title: "Flexible Scheduling",
        description: "Book services at your convenience. Same-day bookings and recurring schedules available.",
        gradient: "from-blue-500 to-cyan-600",
        features: ["24/7 booking", "Instant confirmation", "Easy rescheduling"]
      },
      {
        icon: BsShieldFillCheck,
        title: "Safe & Verified Professionals",
        description: "All service providers undergo thorough background checks and skill verification.",
        gradient: "from-purple-500 to-pink-600",
        features: ["Background checked", "Insured providers", "ID verified"]
      },
      {
        icon: BsTranslate,
        title: "Multilingual App Support",
        description: "Use CLEIN in your preferred language. Supporting Italian, English, and more.",
        gradient: "from-orange-500 to-red-600",
        features: ["Multiple languages", "Local support", "Cultural awareness"]
      },
      {
        icon: BsCreditCard2Back,
        title: "Contactless Payment Options",
        description: "Pay securely through the app with multiple payment methods. No cash needed.",
        gradient: "from-indigo-500 to-purple-600",
        features: ["Secure payments", "Multiple options", "Digital receipts"]
      }
    ];
  }

  return [
    {
      icon: BsCashStack,
      title: benefitsData.transparentPricing?.title || "Transparent Pricing",
      description: benefitsData.transparentPricing?.description || "No hidden fees or surprise charges. See exact prices before booking any service.",
      gradient: "from-green-500 to-emerald-600",
      features: benefitsData.transparentPricing?.features || ["Fixed pricing", "No surge fees", "Price match guarantee"]
    },
    {
      icon: HiGlobe,
      title: benefitsData.localizedServices?.title || "Localized Services",
      description: benefitsData.localizedServices?.description || "Providers available across all major Italian cities with an interactive map for nearby services.",
      gradient: "from-yellow-400 to-yellow-600",
      features: benefitsData.localizedServices?.features || ["Nationwide availability", "Geo-based search", "Region-specific offerings"]
    },
    {
      icon: BsClockHistory,
      title: benefitsData.flexibleScheduling?.title || "Flexible Scheduling",
      description: benefitsData.flexibleScheduling?.description || "Book services at your convenience. Same-day bookings and recurring schedules available.",
      gradient: "from-blue-500 to-cyan-600",
      features: benefitsData.flexibleScheduling?.features || ["24/7 booking", "Instant confirmation", "Easy rescheduling"]
    },
    {
      icon: BsShieldFillCheck,
      title: benefitsData.safeVerified?.title || "Safe & Verified Professionals",
      description: benefitsData.safeVerified?.description || "All service providers undergo thorough background checks and skill verification.",
      gradient: "from-purple-500 to-pink-600",
      features: benefitsData.safeVerified?.features || ["Background checked", "Insured providers", "ID verified"]
    },
    {
      icon: BsTranslate,
      title: benefitsData.multilingualSupport?.title || "Multilingual App Support",
      description: benefitsData.multilingualSupport?.description || "Use CLEIN in your preferred language. Supporting Italian, English, and more.",
      gradient: "from-orange-500 to-red-600",
      features: benefitsData.multilingualSupport?.features || ["Multiple languages", "Local support", "Cultural awareness"]
    },
    {
      icon: BsCreditCard2Back,
      title: benefitsData.contactlessPayment?.title || "Contactless Payment Options",
      description: benefitsData.contactlessPayment?.description || "Pay securely through the app with multiple payment methods. No cash needed.",
      gradient: "from-indigo-500 to-purple-600",
      features: benefitsData.contactlessPayment?.features || ["Secure payments", "Multiple options", "Digital receipts"]
    }
  ];
};

const getStatsData = (dict, lang) => {
  const statsData = dict?.platformBenefits?.stats;
  
  if (!statsData) {
    return [
      { value: "100%", label: "Satisfaction Guarantee" },
      { value: "24/7", label: "Customer Support" },
      { value: "50k", label: "Services Completed" },
      { value: "0€", label: "Booking Fees" }
    ];
  }

  return [
    { value: "100%", label: statsData.satisfactionGuarantee || "Satisfaction Guarantee" },
    { value: "24/7", label: statsData.customerSupport || "Customer Support" },
    { value: "50K", label: statsData.servicesCompleted || "Services Completed" },
    { value: "0€", label: statsData.bookingFees || "Booking Fees" }
  ];
};

export default function PlatformBenefits({ dict, lang }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Get data from translations with fallbacks
  const benefits = getBenefitsData(dict, lang);
  const stats = getStatsData(dict, lang);

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0057B8]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00A896]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#0057B8]/10 to-[#00A896]/10 rounded-full text-[#0057B8] font-medium mb-4"
          >
            <HiSparkles className="w-4 h-4 mr-2" />
            {dict?.platformBenefits?.badge || "Why Choose CLEIN"}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            {dict?.platformBenefits?.title || "Platform Benefits That"}
            <span className="block gradient-text">{dict?.platformBenefits?.titleHighlight || ""}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            {dict?.platformBenefits?.description || "Experience the future of home services with features designed for your convenience, safety, and peace of mind. Every detail crafted to perfection."}
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Hover Background */}
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${benefit.gradient.split(' ')[1].replace('to-', '')} 0%, transparent 100%)`,
                  }}
                />

                {/* Card */}
                <div className="relative bg-white rounded-2xl p-6 shadow-soft group-hover:shadow-premium transition-all duration-300 h-full border border-gray-100 group-hover:border-transparent">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-5`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#0057B8] to-[#00A896] rounded-full" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0057B8] to-[#00A896] rounded-3xl p-12 shadow-premium"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Section */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex flex-col items-center"
          >
            <div className="flex flex-col lg:flex-row items-center gap-2 mb-4">
              <div className="flex -space-x-3">
                {users.slice(0, 5).map((_, i) => (
                 <img key={i} src={_} alt="" className="w-12 h-12 rounded-full" />
                ))}
              </div>
              <span className="text-gray-700 font-medium ml-4">
                {dict?.platformBenefits?.trust?.trustedBy || "Trusted by thousands of families across Italy"}
              </span>
            </div>
            
            <p className="text-gray-600 mb-6">
              {dict?.platformBenefits?.trust?.joinCommunity || "Join the CLEIN community and experience premium home services"}
            </p>
            
            <a
              href="https://play.google.com/store/apps/details?id=com.clein.homeservices"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {dict?.platformBenefits?.trust?.cta || "Start Your Journey Today"}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const users = ["https://randomuser.me/api/portraits/women/1.jpg", "https://randomuser.me/api/portraits/women/2.jpg", "https://randomuser.me/api/portraits/women/3.jpg", "https://randomuser.me/api/portraits/women/4.jpg", "https://randomuser.me/api/portraits/women/5.jpg", "https://randomuser.me/api/portraits/women/6.jpg", "https://randomuser.me/api/portraits/women/7.jpg", "https://randomuser.me/api/portraits/women/8.jpg", "https://randomuser.me/api/portraits/women/9.jpg", "https://randomuser.me/api/portraits/women/10.jpg"]
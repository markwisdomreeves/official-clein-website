"use client";

import { useEffect, useState } from "react";
import { HiCheckCircle, HiChat, HiStar, HiClock, HiShieldCheck, HiLocationMarker, HiHome } from "react-icons/hi";
import { FaMobileAlt, FaBell, FaCalendarCheck, FaRegCalendarCheck, FaToolbox, FaUser, FaRegUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { CiBatteryFull } from "react-icons/ci";
import Image from "next/image";
import AppMockupCarousel from "./AppMockupCarousel";
import { DeviceFrameset } from "react-device-frameset";

const getFeatures = (dict) => [
  {
    icon: FaCalendarCheck,
    title: dict?.mobileAppShowcase?.features?.instantBooking?.title || "Instant Booking",
    description: dict?.mobileAppShowcase?.features?.instantBooking?.description || "Book services in seconds with real-time availability",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: HiShieldCheck,
    title: dict?.mobileAppShowcase?.features?.verifiedProviders?.title || "Esperti Verificati",
    description: dict?.mobileAppShowcase?.features?.verifiedProviders?.description || "All professionals are background-checked and insured",
    color: "from-green-500 to-green-600"
  },
  {
    icon: HiChat,
    title: dict?.mobileAppShowcase?.features?.inAppChat?.title || "In-App Chat",
    description: dict?.mobileAppShowcase?.features?.inAppChat?.description || "Communicate directly with your service provider",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: HiStar,
    title: dict?.mobileAppShowcase?.features?.ratingSystem?.title || "Rating System",
    description: dict?.mobileAppShowcase?.features?.ratingSystem?.description || "Read reviews and rate your experience",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: HiLocationMarker,
    title: dict?.mobileAppShowcase?.features?.realTimeTracking?.title || "Real-Time Tracking",
    description: dict?.mobileAppShowcase?.features?.realTimeTracking?.description || "Track your provider's arrival in real-time",
    color: "from-red-500 to-red-600"
  },
  {
    icon: FaBell,
    title: dict?.mobileAppShowcase?.features?.smartNotifications?.title || "Smart Notifications",
    description: dict?.mobileAppShowcase?.features?.smartNotifications?.description || "Get updates on bookings and special offers",
    color: "from-indigo-500 to-indigo-600"
  }
];

const appScreens = [
  {
    title: "Home Screen",
    mockup: "homeview.webp"
  },
  {
    title: "Services",
    mockup: "servicesview.webp"
  },
  {
    title: "Booking",
    mockup: "p3.svg"
  },
  {
    title: "Providers",
    mockup: "p4.svg"
  },
  {
    title: "Chat",
    mockup: "p5.svg"
  },
  {
    title: "Profile",
    mockup: "p6.svg"
  },
  {
    title: "Settings",
    mockup: "p7.svg"
  }
];

export default function MobileAppShowcase({ dict, lang }) {
  const [activeScreen, setActiveScreen] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const features = getFeatures(dict);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('mobile-app-showcase');
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="mobile-app-showcase" className="section-padding bg-gradient-to-b from-gray-50 to-white overflow-hidden   mx-auto">
      <div className="container-custom ">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-[#0057B8]/10 rounded-full text-[#0057B8] font-medium mb-4">
            <FaMobileAlt className="w-4 h-4 mr-2" />
            {dict?.mobileAppShowcase?.badge || "Mobile App Features"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {dict?.mobileAppShowcase?.title || "Everything You Need in"}
            <span className="block gradient-text">{dict?.mobileAppShowcase?.titleHighlight || "One Beautiful App"}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dict?.mobileAppShowcase?.description || "Experience the future of home services with our feature-rich mobile application. Designed for simplicity, built for reliability."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start lg:items-center  mx-auto">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 shadow-soft hover:shadow-premium transition-all duration-300 card-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${feature.color.split(' ')[1].replace('to-', '')} 0%, ${feature.color.split(' ')[3]} 100%)`
                    }}
                  />
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Phone Mockup with Screens */}
          <div className="flex justify-center items-center px-4 py-8 bg-transparent">
            <div className="w-[220px] sm:w-[260px] max-w-full bg-transparent">
              <Image
                src="/assets/home-screen.png"
                alt="CLEIN App Screenshot"
                width={220}
                height={520}
                className="w-full h-[520px] rounded-2xl border-[2px] border-[#F6F9FC] shadow-[0_4px_16px_#F6F9FC]"
                priority
              />
            </div>
          </div>

        </div>

        {/* Download CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.clein.homeservices"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {dict?.mobileAppShowcase?.cta?.button || "Experience CLEIN Today"}
            </a>
            <p className="text-gray-600">
              {dict?.mobileAppShowcase?.cta?.subtitle || "Join 20,000+ users • Free to download"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

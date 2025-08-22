"use client";

import { useEffect } from "react";
import { HiDownload, HiClipboardList, HiUserGroup, HiStar } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HowItWorks({ dict, lang = "en" }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const steps = [
    {
      icon: HiDownload,
      title: dict?.howItWorks?.steps?.download?.title || "Download the App",
      description: dict?.howItWorks?.steps?.download?.description || "Get the CLEIN app from Google Play Store or App Store to start booking services instantly.",
      color: "bg-blue-500",
    },
    {
      icon: HiClipboardList,
      title: dict?.howItWorks?.steps?.choose?.title || "Choose a Service",
      description: dict?.howItWorks?.steps?.choose?.description || "Browse our wide range of home services and select what you need. From cleaning to repairs, we've got you covered.",
      color: "bg-green-500",
    },
    {
      icon: HiUserGroup,
      title: dict?.howItWorks?.steps?.select?.title || "Select a Trusted Provider",
      description: dict?.howItWorks?.steps?.select?.description || "View profiles, ratings, and reviews of verified professionals. Choose the one that best fits your needs.",
      color: "bg-purple-500",
    },
    {
      icon: HiStar,
      title: dict?.howItWorks?.steps?.enjoy?.title || "Enjoy the Service & Rate",
      description: dict?.howItWorks?.steps?.enjoy?.description || "Receive quality service at your doorstep. Rate your experience to help maintain our high standards.",
      color: "bg-orange-500",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white ">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {dict?.howItWorks?.title || "How It"} <span className="gradient-text">{dict?.howItWorks?.titleHighlight || "Works"}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dict?.howItWorks?.description || "Booking professional home services has never been easier. Follow these simple steps to get started."}
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="relative text-center"
                >
                  {/* Icon Circle with connecting line */}
                  <div className="relative">
                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 left-1/2 w-full h-1 bg-gray-200 -translate-y-1/2">
                        <div className="absolute inset-0 bg-gradient-to-r from-current to-current" 
                             style={{
                               backgroundImage: index === 0 ? 'linear-gradient(to right, #3B82F6, #10B981)' :
                                               index === 1 ? 'linear-gradient(to right, #10B981, #8B5CF6)' :
                                               'linear-gradient(to right, #8B5CF6, #F59E0B)'
                             }}
                        />
                      </div>
                    )}
                    
                    {/* Icon Circle */}
                    <div className={`relative w-24 h-24 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg z-10`}>
                      <Icon className="w-12 h-12 text-white" />
                      {/* Step Number */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <span className="font-bold text-gray-900 text-sm">{index + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="flex gap-4"
              >
                {/* Left side - Step number and line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-gray-100">
                    <span className="font-bold text-gray-900">{index + 1}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 flex-1 bg-gradient-to-b from-gray-300 to-gray-100 mt-2" />
                  )}
                </div>

                {/* Right side - Content */}
                <div className="flex-1 pb-8">
                  <div className={`w-16 h-16 ${step.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            {dict?.howItWorks?.cta?.description || "Ready to experience hassle-free home services?"}
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.clein.homeservices"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {dict?.howItWorks?.cta?.button || "Get Started Now"}
          </a>
        </div>
      </div>
    </section>
  );
}
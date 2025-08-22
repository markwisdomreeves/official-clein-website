"use client";

// import { useState, useEffect } from "react";
import { HiCheck } from "react-icons/hi";
// import { motion } from "framer-motion";
import GooglePlayButton from "./GooglePlayButton";
import AppleButton from "./AppleButton";
import { CLEIN_PRO_APP_URL } from "@/consts/socials";
import Image from "next/image";
// import AppMockupCarousel from "./AppMockupCarousel";
// import { DeviceFrameset } from "react-device-frameset";

const getFeatures = (dict) => dict?.appDownload?.features || [
  "Instant Booking Confirmation",
  "Verified & Insured Providers",
  "In-App Chat Support",
  "Secure Payment Options",
  "Real-Time Tracking",
  "24/7 Customer Support"
];


export default function AppDownload({ dict, lang }) {
  const features = getFeatures(dict);
  return (
    <section id="download" className="section-padding overflow-hidden bg-gradient-to-br from-[#0057B8] to-[#4C9AFF] text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              {dict?.appDownload?.title || "Download the CLEIN App Today"}
            </h2>
            <p className="text-xl text-white/90">
              {dict?.appDownload?.subtitle || "Join thousands of Italians who trust CLEIN for their home service needs. Available for free on Android and coming soon to iOS."}
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <HiCheck className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-row sm:flex-row gap-4 pt-4">
              <GooglePlayButton />
              <AppleButton />
            </div>
            
            {/* Provider App Link */}
            <div className="pt-4 border-t border-white/20 flex items-center gap-4 flex-wrap">
              <p className="text-white/90 m-0">
                {dict?.appDownload?.providerApp?.question || "Are you a service provider?"}
              </p>
              <a
                href={CLEIN_PRO_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-white/80 font-medium"
              >
                {dict?.appDownload?.providerApp?.linkText || "Download CLEIN Provider App →"}
              </a>
            </div>

          </div>

          <div className="flex justify-center items-center px-4 py-8">
            <div className="w-[220px] sm:w-[260px] max-w-full">
              <Image
                src="/assets/home-screen.png"
                alt="CLEIN App Screenshot"
                width={220}
                height={400}
                className="w-full h-auto rounded-2xl border-[2px] shadow-[0_4px_20px_#4C9AFF]"
                priority
              />
            </div>
          </div>
      
        </div>
      </div>
    </section>
  );
}
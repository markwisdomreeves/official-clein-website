"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Reusable App Mockup Carousel Component
 * Now supports real app screenshots (homeview.webp, servicesview.webp) alongside SVG mockups
 * 
 * @param {Object} props - Component props
 * @param {string[]} props.mockupScreens - Array of mockup screen filenames (webp and svg supported)
 * @param {number} props.interval - Interval in milliseconds for auto-rotation (default: 3000)
 * @param {boolean} props.showIndicators - Whether to show navigation indicators (default: false)
 * @param {number} props.width - Image width (default: 240)
 * @param {number} props.height - Image height (default: 480)
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.autoPlay - Whether to auto-rotate screens (default: true)
 */
export default function AppMockupCarousel({
  mockupScreens = ['homeview.webp', 'servicesview.webp', 'p3.svg', 'p4.svg', 'p5.svg'],
  interval = 3000,
  showIndicators = false,
  width = 1000,
  height = 480,
  className = "",
  autoPlay = true
}) {
  const [currentMockup, setCurrentMockup] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    
    const intervalId = setInterval(() => {
      setCurrentMockup((prev) => (prev + 1) % mockupScreens.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, mockupScreens.length, autoPlay]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {mockupScreens.map((screen, index) => (
        <motion.div
          key={screen}
          className="absolute inset-0 flex items-center justify-center "
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentMockup === index ? 1 : 0,
            
          
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut"
          }}
        >
          <Image
            src={`/assets/${screen}`}
            alt={`CLEIN App Screen ${index + 1}`}
            width={width}
            height={height}
            className={`w-full h-full scale-y-[103%] ${screen.endsWith('.webp') ? 'object-cover' : 'object-cover'}`}
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={95}
          />
        </motion.div>
      ))}
      
      
    </div>
  );
}
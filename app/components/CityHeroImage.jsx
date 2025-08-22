"use client";

import { useState } from "react";
import { getCityImageUrl } from "@/utils/unsplash";

export default function CityHeroImage({ citySlug, cityName }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="absolute inset-0">
      {/* City Hero Image */}
      {!imageError ? (
        <img
          src={getCityImageUrl(citySlug, 1920, 1080)}
          alt={`${cityName}, Italia`}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[10s]"
          loading="eager"
          onError={handleImageError}
        />
      ) : (
        /* Fallback gradient background */
        <div className="absolute inset-0 bg-gradient-to-br from-[#0057B8] to-[#4C9AFF]" />
      )}
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
      
      {/* Animated elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-2000"></div>
      </div>
    </div>
  );
} 
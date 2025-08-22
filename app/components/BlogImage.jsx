"use client";

import { useState } from "react";

export default function BlogImage({ src, alt, className, fallbackGradient = true }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div className={`relative ${className}`}>
      {!imageError && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-700 `}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
      
      {imageError && fallbackGradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0057B8] to-[#4C9AFF] flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-4xl mb-2">🏠</div>
            <p className="text-sm opacity-75">Servizi Domestici CLEIN</p>
          </div>
        </div>
      )}
    </div>
  );
} 
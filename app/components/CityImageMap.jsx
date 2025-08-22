"use client";

import { useState } from "react";
import Link from "next/link";
import { getCityImageUrl } from "@/utils/unsplash";
import { HiLocationMarker, HiUsers, HiStar, HiArrowRight } from "react-icons/hi";

const CityImageMap = ({ cities, searchQuery = "", selectedRegion = "all", onCityClick }) => {
  const [imageErrors, setImageErrors] = useState(new Set());

  const handleImageError = (citySlug) => {
    setImageErrors(prev => new Set([...prev, citySlug]));
  };

  const filteredCities = cities.filter(city => {
    const matchesSearch = city.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === "all" || (selectedRegion === "Northern Italy" && [
      "milan","turin","genoa","venice","verona","brescia","padua","trieste","bergamo","bolzano","como","monza","pavia","trento","reggio-emilia","vicenza","udine","ferrara","forli","la-spezia","piacenza","rimini","bologna","modena","parma","treviso","novara","varese","alessandria"].includes(city.slug)) ||
      (selectedRegion === "Central Italy" && ["rome","florence","prato","ancona","livorno","perugia","pescara","pisa","l-aquila","arezzo","lucca","teramo","chieti"].includes(city.slug)) ||
      (selectedRegion === "Southern Italy" && ["naples","bari","catania","palermo","messina","reggio-calabria",
      "cagliari","lecce","salerno","sassari","taranto","siracusa","trapani","catanzaro","foggia","avellino","matera","ragusa"
    ].includes(city.slug));
      return matchesSearch && matchesRegion;
    });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredCities.map((city) => (
        <div
          key={city.slug}
          className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 cursor-pointer"
          onClick={() => onCityClick && onCityClick(city.slug)}>
          {/* City Image with Overlay */}
          <div className="relative h-64 overflow-hidden">
              <img
                src={getCityImageUrl(city.slug, 600, 400)}
                alt={`${city.name}, Italia`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"/> 
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* City Info Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <HiLocationMarker className="w-6 h-6" />
                  {city.name}
                </h3>
                
                <p 
                  className="text-white/90 text-sm mb-3 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                  {city.description}
                </p>
                
                {/* Quick Stats */}
                <div className="flex items-center gap-4 text-white/80 text-sm lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-1">
                    <HiUsers className="w-4 h-4" />
                    <span>Oltre 40 Professionisti</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HiStar className="w-4 h-4 text-yellow-400" />
                    <span>4.8</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hover Action */}
            <div className="absolute top-4 right-4 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                <HiArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          
          {/* Link Overlay */}
          <Link
            href={`/city/${city.slug}`}
            className="absolute inset-0 z-10"
            aria-label={`View services in ${city.name}`}
          />
        </div>
      ))}
    </div>
  );
};

export default CityImageMap; 
"use client";

import { useState } from "react";
import Link from "next/link";
import CityImageMap from "@/app/components/CityImageMap";
import { cities } from "@/data/cities";
import { getCityImageUrl } from "@/utils/unsplash";
import { HiLocationMarker, HiUsers, HiStar, HiArrowRight } from "react-icons/hi";

import "leaflet/dist/leaflet.css";

const regions = {
  "Northern Italy": [
    "milan",
    "turin",
    "genoa",
    "venice",
    "verona",
    "brescia",
    "padua",
    "trieste",
    "bergamo",
    "bolzano",
    "como",
    "monza",
    "pavia",
    "trento",
    "reggio-emilia",
    "vicenza",
    "udine",
    "ferrara",
    "forli",
    "la-spezia",
    "piacenza",
    "rimini",
    "bologna",
    "modena",
    "parma",
    "treviso",
    "novara",
    "varese",
    "alessandria"
  ],
  "Central Italy": [
    "rome",
    "florence",
    "prato",
    "ancona",
    "livorno",
    "perugia",
    "pescara",
    "pisa",
    "l-aquila",
    "arezzo",
    "lucca",
    "teramo",
    "chieti"
  ],
  "Southern Italy": [
    "naples",
    "bari",
    "catania",
    "palermo",
    "messina",
    "reggio-calabria",
    "cagliari",
    "lecce",
    "salerno",
    "sassari",
    "taranto",
    "siracusa",
    "trapani",
    "catanzaro",
    "foggia",
    "avellino",
    "matera",
    "ragusa"
  ]
};

export default function CitiesPageClient({ dict, lang }) {

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [highlightedCity, setHighlightedCity] = useState(null);
  const [viewMode, setViewMode] = useState("imagemap"); 

  const filteredCities = cities.filter(city => {
    const matchesSearch = city.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === "all" || 
      Object.entries(regions).some(([region, cities]) => 
        selectedRegion === region && cities.includes(city.slug)
      );
    return matchesSearch && matchesRegion;
  });

  const handleCityClick = (citySlug) => {
    setHighlightedCity(citySlug);
    const element = document.getElementById(`city-${citySlug}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0057B8] via-[#0057B8] to-[#4C9AFF] animate-gradient" />
            <div className="absolute inset-0 gradient-mesh opacity-30" />
            
            {/* Map pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
          </div>
          
          <div className="relative z-10 container-custom text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              {dict.citiesPage.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              {dict.citiesPage.hero.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <HiLocationMarker className="w-6 h-6" />
                <span className="font-semibold">{dict.citiesPage.hero.stats.cities}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <HiUsers className="w-6 h-6" />
                <span className="font-semibold">{dict.citiesPage.hero.stats.providers}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <HiStar className="w-6 h-6" />
                <span className="font-semibold">{dict.citiesPage.hero.stats.rating}</span>
              </div>
            </div>
          </div>
        </section>

        {/* View Mode Toggle */}
        <section className="py-8 bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold text-gray-900">
                  {viewMode === "imagemap" ? dict.citiesPage.viewMode.titles.imagemap : dict.citiesPage.viewMode.titles.grid}
                </h2>
                <p className="text-gray-600">
                  {viewMode === "imagemap" 
                    ? dict.citiesPage.viewMode.descriptions.imagemap 
                    : dict.citiesPage.viewMode.descriptions.grid
                  }
                </p>
              </div>
              
              <div className="flex bg-white rounded-lg shadow-soft p-1">
                <button
                  onClick={() => setViewMode("imagemap")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    viewMode === "imagemap"
                      ? "bg-[#0057B8] text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {dict.citiesPage.viewMode.buttons.imagemap}
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    viewMode === "grid"
                      ? "bg-[#0057B8] text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {dict.citiesPage.viewMode.buttons.grid}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Display */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            {viewMode === "imagemap" ? (
              <CityImageMap cities={filteredCities} onCityClick={handleCityClick} />
            ) : (
              <div className="space-y-12">
                {Object.entries(regions).map(([regionName, regionCities]) => {
                  const regionCitiesData = cities.filter(city => 
                    regionCities.includes(city.slug) && 
                    filteredCities.includes(city)
                  );
                  
                  if (regionCitiesData.length === 0) return null;
                  
                  return (
                    <div key={regionName} className="bg-white rounded-3xl shadow-premium p-4 lg:p-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4 lg:mb-8 text-center">
                        {regionName === "Northern Italy" 
                          ? dict.citiesPage.interactiveMap.regions.northernItaly
                          : regionName === "Central Italy"
                          ? dict.citiesPage.interactiveMap.regions.centralItaly
                          : regionName === "Southern Italy"
                          ? dict.citiesPage.interactiveMap.regions.southernItaly
                          : regionName
                        }
                      </h2>
                      
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regionCitiesData.map((city) => (
                          <div
                            key={city.slug}
                            id={`city-${city.slug}`}
                            className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl ${
                              highlightedCity === city.slug ? 'ring-4 ring-[#0057B8] ring-opacity-50' : ''
                            }`}
                          >
                            <div className="aspect-[4/3] relative">
                              <img
                                src={getCityImageUrl(city.slug)}
                                alt={city.name}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                              
                              <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-1">{city.name}</h3>
                                <p className="text-white/90 text-sm mb-3">{city.services.length} {dict.citiesPage.cityCard.servicesAvailable}</p>
                                
                                <Link
                                  href={`/${lang}/city/${city.slug}`}
                                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors"
                                >
                                  {dict.citiesPage.cityCard.exploreServices}
                                  <HiArrowRight className="w-4 h-4" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
  );
} 
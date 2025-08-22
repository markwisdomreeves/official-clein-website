"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { HiLocationMarker } from "react-icons/hi";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);


const createCustomIcon = (isSelected = false, useImageIcon = false) => {
  if (typeof window === 'undefined') return null;
  
  const L = require('leaflet');
  
  if (useImageIcon) {
    return L.icon({
      iconUrl: '/images/clein-marker.png', 
      iconSize: [40, 50],
      iconAnchor: [20, 50],
      popupAnchor: [0, -50],
      shadowUrl: '/images/marker-shadow.png',
      shadowSize: [50, 50],
      shadowAnchor: [20, 50],
      className: isSelected ? 'selected-marker' : 'normal-marker'
    });
  }
  
  const customIcon = L.divIcon({
    html: `
      <div class="clein-marker" style="
        position: relative;
        width: 32px;
        height: 45px;
        cursor: pointer;
        filter: drop-shadow(0 3px 6px rgba(0, 87, 184, 0.3));
      ">
        <!-- Pulse effect for selected marker -->
        ${isSelected ? `
          <div style="
            position: absolute;
            top: 2px;
            left: 2px;
            width: 28px;
            height: 28px;
            background: rgba(0, 87, 184, 0.3);
            border-radius: 50%;
            animation: markerPulse 2s infinite;
          "></div>
        ` : ''}
        
        <!-- SVG Marker -->
        <svg width="32" height="45" viewBox="0 0 32 45" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="markerGradient${isSelected ? 'Selected' : ''}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:${isSelected ? '#004494' : '#0057B8'};stop-opacity:1" />
              <stop offset="100%" style="stop-color:${isSelected ? '#0057B8' : '#4C9AFF'};stop-opacity:1" />
            </linearGradient>
          </defs>
          
          <!-- Main marker shape -->
          <path d="M16 0C7.163 0 0 7.163 0 16c0 16 16 29 16 29s16-13 16-29C32 7.163 24.837 0 16 0z" 
                fill="url(#markerGradient${isSelected ? 'Selected' : ''})" 
                stroke="white" 
                stroke-width="2"/>
          
          <!-- Inner circle/logo -->
          <circle cx="16" cy="16" r="8" fill="white" opacity="0.9"/>
          
          <!-- CLEIN 'C' logo -->
          <text x="16" y="21" text-anchor="middle" 
                font-family="Arial, sans-serif" 
                font-size="10" 
                font-weight="bold" 
                fill="#0057B8">C</text>
        </svg>
      </div>
      
      <style>
        @keyframes markerPulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.4;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .clein-marker:hover {
          transform: scale(1.1);
          transition: transform 0.2s ease;
        }
        
        .clein-marker svg {
          transition: all 0.3s ease;
        }
      </style>
    `,
    className: 'clein-custom-marker',
    iconSize: [32, 45],
    iconAnchor: [16, 45],
    popupAnchor: [0, -45]
  });
  
  return customIcon;
};

const cityCoordinates = {
  rome: { lat: 41.9028, lng: 12.4964, name: "Roma" },
  milan: { lat: 45.4642, lng: 9.1900, name: "Milano" },
  naples: { lat: 40.8518, lng: 14.2681, name: "Napoli" },
  turin: { lat: 45.0703, lng: 7.6869, name: "Torino" },
  palermo: { lat: 38.1157, lng: 13.3615, name: "Palermo" },
  genoa: { lat: 44.4056, lng: 8.9463, name: "Genova" },
  bologna: { lat: 44.4949, lng: 11.3426, name: "Bologna" },
  florence: { lat: 43.7696, lng: 11.2558, name: "Firenze" },
  bari: { lat: 41.1171, lng: 16.8719, name: "Bari" },
  catania: { lat: 37.5079, lng: 15.0830, name: "Catania" },
  venice: { lat: 45.4408, lng: 12.3155, name: "Venezia" },
  verona: { lat: 45.4384, lng: 10.9916, name: "Verona" },
  messina: { lat: 38.1937, lng: 15.5542, name: "Messina" },
  padua: { lat: 45.4064, lng: 11.8768, name: "Padova" },
  trieste: { lat: 45.6495, lng: 13.7768, name: "Trieste" },
  brescia: { lat: 45.5416, lng: 10.2118, name: "Brescia" },
  prato: { lat: 43.8777, lng: 11.1027, name: "Prato" },
  modena: { lat: 44.6471, lng: 10.9252, name: "Modena" },
  parma: { lat: 44.8015, lng: 10.3279, name: "Parma" },
  "reggio-calabria": { lat: 38.1084, lng: 15.6503, name: "Reggio Calabria" },
  
  ancona: { lat: 43.6158, lng: 13.5189, name: "Ancona" },
  bergamo: { lat: 45.6983, lng: 9.6773, name: "Bergamo" },
  bolzano: { lat: 46.4983, lng: 11.3548, name: "Bolzano" },
  cagliari: { lat: 39.2238, lng: 9.1217, name: "Cagliari" },
  como: { lat: 45.8081, lng: 9.0852, name: "Como" },
  ferrara: { lat: 44.8381, lng: 11.6198, name: "Ferrara" },
  forli: { lat: 44.2220, lng: 12.0408, name: "Forlì" },
  "la-spezia": { lat: 44.1025, lng: 9.8177, name: "La Spezia" },
  lecce: { lat: 40.3515, lng: 18.1750, name: "Lecce" },
  livorno: { lat: 43.5485, lng: 10.3106, name: "Livorno" },
  monza: { lat: 45.5845, lng: 9.2744, name: "Monza" },
  pavia: { lat: 45.1847, lng: 9.1582, name: "Pavia" },
  perugia: { lat: 43.1122, lng: 12.3888, name: "Perugia" },
  pescara: { lat: 42.4584, lng: 14.2082, name: "Pescara" },
  piacenza: { lat: 45.0526, lng: 9.6926, name: "Piacenza" },
  pisa: { lat: 43.7228, lng: 10.4017, name: "Pisa" },
  rimini: { lat: 44.0678, lng: 12.5695, name: "Rimini" },
  salerno: { lat: 40.6824, lng: 14.7681, name: "Salerno" },
  sassari: { lat: 40.7259, lng: 8.5559, name: "Sassari" },
  taranto: { lat: 40.4668, lng: 17.2520, name: "Taranto" },
  teramo: { lat: 42.6589, lng: 13.7060, name: "Teramo" },
  trento: { lat: 46.0678, lng: 11.1210, name: "Trento" }
};

// Italy's geographic boundaries
const italyBounds = [
  [35.4929, 6.6267],   // Southwest corner (Sicily/Sardinia)
  [47.0921, 18.7975]   // Northeast corner (Alps/Trieste)
];

const regionBounds = {
  "Northern Italy": {
    center: [45.2, 9.5],
    zoom: 7
  },
  "Central Italy": {
    center: [42.8, 12.0],
    zoom: 7
  },
  "Southern Italy": {
    center: [39.5, 16.0],
    zoom: 6
  },
  "all": {
    bounds: italyBounds,
    padding: [20, 20] // padding in pixels
  }
};

export default function InteractiveMap({ onCityClick, searchQuery, selectedRegion, className = "h-[400px] md:h-[550px] lg:h-[650px]" }) {
  const [selectedCity, setSelectedCity] = useState(null);
  const [mapReady, setMapReady] = useState(false);
  const mapRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const useImageMarkers = false;

  useEffect(() => {
    setMapReady(true);
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (mapRef.current && mapReady) {
      const region = selectedRegion || "all";
      
      if (region === "all") {
        // For all Italy, use different zoom levels for mobile vs desktop
        const zoom = isMobile ? 5 : 6;
        mapRef.current.setView([41.8719, 12.5674], zoom);
      } else {
        const bounds = regionBounds[region];
        if (bounds && bounds.center && bounds.zoom) {
          mapRef.current.setView(bounds.center, bounds.zoom);
        }
      }
    }
  }, [selectedRegion, mapReady, isMobile]);

  useEffect(() => {
    if (mapRef.current && searchQuery && mapReady) {
      const citySlug = Object.keys(cityCoordinates).find(slug => 
        cityCoordinates[slug].name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      if (citySlug) {
        const city = cityCoordinates[citySlug];
        mapRef.current.setView([city.lat, city.lng], 10);
        setSelectedCity(citySlug);
      }
    }
  }, [searchQuery, mapReady]);

  if (!mapReady) {
    return (
      <div className={`w-full ${className} bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center`}>
        <div className="text-center">
          <HiLocationMarker className="w-16 h-16 text-gray-400 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className} rounded-2xl overflow-hidden shadow-lg`}>
      <MapContainer
        center={[41.8719, 12.5674]}
        zoom={isMobile ? 5 : 6}
        maxBounds={italyBounds}
        maxBoundsViscosity={1.0}
        style={{ height: "100%", width: "100%" }}
        className="z-10"
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {Object.entries(cityCoordinates).map(([slug, city]) => (
          <Marker
            key={slug}
            position={[city.lat, city.lng]}
            icon={createCustomIcon(selectedCity === slug, useImageMarkers)}
            eventHandlers={{
              click: () => {
                setSelectedCity(slug);
                if (onCityClick) onCityClick(slug);
              },
            }}
          >
            <Popup>
              <div className="text-center p-2">
                <h3 className="font-semibold text-gray-900 mb-1">{city.name}</h3>
                <p className="text-sm text-gray-600 mb-2">CLEIN is available here!</p>
                <a
                  href={`/city/${slug}`}
                  className="text-[#0057B8] font-medium text-sm hover:text-[#004494]"
                >
                  View Details →
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
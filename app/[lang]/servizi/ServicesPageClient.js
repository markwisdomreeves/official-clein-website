"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { 
  HiHome, 
  HiOfficeBuilding, 
  HiSparkles, 
  HiTruck,
  HiLightningBolt,
  HiCog,
  HiShieldCheck,
  HiSearch,
  HiFilter,
  HiX
} from "react-icons/hi";
import { GiGardeningShears, GiWaterDrop, GiToolbox } from "react-icons/gi";
import { FaBroom, FaPaintRoller, FaBorderAll, FaBug, FaTrashAlt, FaHotTub } from "react-icons/fa";
import { MdChair, MdAcUnit, MdOutlineGridOn } from "react-icons/md";
import { LuDoorOpen } from "react-icons/lu";

const iconMap = {
  "pulizia-della-casa": HiHome,
  "pulizia-uffici": HiOfficeBuilding,
  "pulizia-post-costruzione": FaBroom,
  "pulizia-profonda": HiSparkles,
  "pulizia-per-traslochi": HiTruck,
  "tuttofare": GiToolbox,
  "elettricista": HiLightningBolt,
  "idraulico": GiWaterDrop,
  "giardinaggio": GiGardeningShears,
  "assistenza-elettrodomestici": HiCog,
  "sanificazione-disinfezione": HiShieldCheck,
  "falegnameria": MdChair,
  "imbiancatura": FaPaintRoller,
  "piastrellista-e-pavimentazioni": FaBorderAll,
  "installazione-climatizzatori": MdAcUnit,
  "servizi-caldaie": MdOutlineGridOn,
  "servizi-infissi-e-serramenti": LuDoorOpen,
  "servizi-zanzariere": FaHotTub,
  "disinfestazione": FaBug,
  "sgomberi-e-smaltimento": FaTrashAlt,
};

const imageMap = {
  "pulizia-della-casa": "https://plus.unsplash.com/premium_photo-1679500354538-0398de125937?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "pulizia-uffici": "https://plus.unsplash.com/premium_photo-1683141112334-d7d404f6e716?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "pulizia-post-costruzione": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "pulizia-profonda": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "pulizia-per-traslochi": "https://plus.unsplash.com/premium_photo-1661601783135-223c3c6d8486?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "tuttofare": "https://images.unsplash.com/photo-1676311396794-f14881e9daaa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "elettricista": "https://plus.unsplash.com/premium_photo-1661911309991-cc81afcce97d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "idraulico": "https://plus.unsplash.com/premium_photo-1661963478928-2d2d3e9b1e25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "giardinaggio": "https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "assistenza-elettrodomestici": "https://plus.unsplash.com/premium_photo-1682126012378-859ca7a9f4cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "sanificazione-disinfezione": "https://plus.unsplash.com/premium_photo-1661540818031-20a78d626b22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "falegnameria": "https://plus.unsplash.com/premium_photo-1664300494539-313eac2a6095?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2FycGVudGVyfGVufDB8fDB8fHww",
  "imbiancatura": "https://images.unsplash.com/photo-1708772002725-65e0b9bf6ba1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGhvdXNlJTIwUGFpbnRpbmclMjBTZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
  "piastrellista-e-pavimentazioni": "https://plus.unsplash.com/premium_photo-1679121588085-81f8fd508496?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY3fHxUaWxpbmclMjBhbmQlMjBGbG9vcmluZ3xlbnwwfHwwfHx8MA%3D%3D",
  "installazione-climatizzatori": "https://plus.unsplash.com/premium_photo-1678766819199-5660bab7085b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QWlyJTIwQ29uZGl0aW9uZXIlMjBJbnN0YWxsYXRpb258ZW58MHx8MHx8fDA%3D",
  "servizi-caldaie": "https://plus.unsplash.com/premium_photo-1663047166207-fd717b9a0ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxCb2lsZXIlMjBTZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
  "servizi-infissi-e-serramenti": "https://images.unsplash.com/photo-1570025919570-bc24c2fc7468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxXaW5kb3dzJTIwYW5kJTIwRG9vcnMlMjByZXBhaXJzfGVufDB8fDB8fHww",
  "servizi-zanzariere": "https://plus.unsplash.com/premium_photo-1718204438772-84b287d1fc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fE1vc3F1aXRvJTIwTmV0JTIwU2VydmljZXN8ZW58MHx8MHx8fDA%3D",
  "disinfestazione": "https://plus.unsplash.com/premium_photo-1682126104327-ef7d5f260cf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVzdCUyMENvbnRyb2x8ZW58MHx8MHx8fDA%3D",
  "sgomberi-e-smaltimento": "https://plus.unsplash.com/premium_photo-1683141120496-f5921a97f5c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2xlYXJhbmNlJTIwYW5kJTIwV2FzdGUlMjBSZW1vdmFsfGVufDB8fDB8fHww",
}

const getCategories = (dict) => [
  { name: dict.servicesPage.filters.categories.all, filter: "tutti" },
  { name: dict.servicesPage.filters.categories.cleaning, filter: "pulizie" },
  { name: dict.servicesPage.filters.categories.repairs, filter: "riparazioni" },
  { name: dict.servicesPage.filters.categories.maintenance, filter: "manutenzione" }
];

const categoryMap = {
  "pulizia-della-casa": "pulizie",
  "pulizia-uffici": "pulizie",
  "pulizia-post-costruzione": "pulizie",
  "pulizia-profonda": "pulizie",
  "pulizia-per-traslochi": "pulizie",
  "tuttofare": "riparazioni",
  "elettricista": "riparazioni",
  "idraulico": "riparazioni",
  "giardinaggio": "manutenzione",
  "assistenza-elettrodomestici": "manutenzione",
  "sanificazione-disinfezione": "pulizie",
  "falegnameria": "riparazioni",
  "imbiancatura": "riparazioni",
  "piastrellista-e-pavimentazioni": "riparazioni",
  "installazione-climatizzatori": "riparazioni",
  "servizi-caldaie": "riparazioni",
  "servizi-infissi-e-serramenti": "riparazioni",
  "servizi-zanzariere": "riparazioni",
  "disinfestazione": "pulizie",
  "sgomberi-e-smaltimento": "pulizie",
};

export default function ServicesPageClient({ dict, lang }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("tutti");
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  
  const filteredServices = useMemo(() => {
    let filtered = services;
    
    if (selectedCategory !== "tutti") {
      filtered = filtered.filter(service => categoryMap[service.slug] === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(service => 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [searchQuery, selectedCategory]);
  
  const searchSuggestions = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return [];
    
    return services.filter(service => 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5);
  }, [searchQuery]);

  return (
    <main>
        {/* Hero Section */}
        <section className="relative pb-24 pt-40 overflow-hidden">
          <div className="absolute inset-0">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`
            }} />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0057B8]/90 via-[#0057B8]/85 to-[#4C9AFF]/90" />
            
            {/* Services Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20h8v8h-8zm24 0h8v8h-8zm24 0h8v8h-8zM20 44h8v8h-8zm24 0h8v8h-8zm24 0h8v8h-8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            {/* Animated elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00A896]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          </div>
          
          <div className="relative z-10 container-custom text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              {dict.servicesPage.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              {dict.servicesPage.hero.subtitle}
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder={dict.servicesPage.hero.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchDropdown(true);
                  }}
                  onFocus={() => setShowSearchDropdown(true)}
                  onBlur={() => setTimeout(() => setShowSearchDropdown(false), 200)}
                  className="w-full bg-white px-6 py-4 pr-12 rounded-2xl text-gray-900 placeholder-gray-500 shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30"
                />
                {searchQuery ? (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setShowSearchDropdown(false);
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <HiX className="w-5 h-5 text-gray-600" />
                  </button>
                ) : (
                    <HiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                )}
                
                {/* Search Dropdown */}
                {showSearchDropdown && searchQuery && searchSuggestions.length > 0 && (
                  <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-xl z-50 overflow-hidden">
                    {searchSuggestions.map((service) => {
                      const Icon = iconMap[service.slug] || HiHome;
                      return (
                        <Link
                          key={service.slug}
                          href={`/${lang}/servizio/${service.slug}`}
                          className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-10 h-10 bg-[#0057B8]/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-[#0057B8]" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{service.title}</h4>
                            <p className="text-sm text-gray-600">{service.price} • {service.duration}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories Filter */}
        <section className="py-8 bg-gray-50 sticky top-16 z-30">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">{dict.servicesPage.filters.title}</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <HiFilter className="w-4 h-4" />
                {dict.servicesPage.filters.showingServices.replace('{count}', filteredServices.length)}
              </div>
            </div>
            
            <div className="flex overflow-auto whitespace-nowrap lg:flex-wrap gap-2 p-2">
              {getCategories(dict).map((category) => (
                <button
                  key={category.filter}
                  onClick={() => setSelectedCategory(category.filter)}
                  className={`px-2 py-2 rounded-xl font-medium transition-all ${
                    selectedCategory === category.filter
                      ? "bg-[#0057B8] text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow-soft"
                  }`}>
                  {category.name}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => {
                const Icon = iconMap[service.slug] || HiHome;
                const image = imageMap[service.slug];
                
                return (
                  <Link
                    key={service.slug}
                    href={`/${lang}/servizio/${service.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 overflow-hidden card-hover h-full">
                      {/* Service Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        {/* Service Icon */}
                        <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        
                        {/* Price Badge */}
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="text-white font-semibold">{service.price}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Service Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0057B8] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {service.subParagraph.substring(0, 50)}...
                        </p>
                        
                        {/* Service Details */}
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span>{dict.servicesPage.serviceCard.duration}: {service.duration}</span>
                          {/* <span>{dict.servicesPage.serviceCard.category}: {dict.servicesPage.serviceCard.categoryLabels[categoryMap[service.slug]]}</span> */}
                        </div>
                        
                        {/* Features */}
                        {service.features && service.features.length > 0 && (
                          <div className="space-y-2 mb-4">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-[#0057B8] rounded-full"></div>
                                {feature}
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {/* CTA */}
                        <div className="pt-4 border-t border-gray-100">
                          <span className="text-[#0057B8] font-semibold group-hover:text-[#004494] transition-colors">
                            {dict.servicesPage.serviceCard.learnMore} →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiSearch className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{dict.servicesPage.emptyState.title}</h3>
                <p className="text-gray-600 mb-4">
                  {dict.servicesPage.emptyState.subtitle}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("tutti");
                  }}
                  className="btn btn-primary"
                >
                  {dict.servicesPage.emptyState.clearFilters}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Download CTA */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-[#0057B8] to-[#4C9AFF] rounded-3xl p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {dict.servicesPage.cta.title}
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {dict.servicesPage.cta.subtitle}
              </p>
              <a href="https://play.google.com/store/apps/details?id=com.clein.homeservices&hl=it"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#0057B8] px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors">
                {dict.servicesPage.cta.button}
              </a>
            </div>
          </div>
        </section>
      </main>
  );
} 
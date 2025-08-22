"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX, HiChevronRight, HiArrowLeft } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import Image from "next/image";
import { WHATSAPP_URL } from "@/consts/socials";

export default function Header({ dict, lang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCitiesSubmenu, setShowCitiesSubmenu] = useState(false);
  const [showServicesSubmenu, setShowServicesSubmenu] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setShowCitiesSubmenu(false);
    setShowServicesSubmenu(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    // { href: `/${lang}`, label: dict?.nav?.home || "Home" },
    { href: `/${lang}/servizi`, label: dict?.nav?.services || "Services", hasSubmenu: true, submenuType: "services" },
    { href: `/${lang}/cities`, label: dict?.nav?.cities || "Cities", hasSubmenu: true, submenuType: "cities" },
    { href: `/${lang}/blog`, label: dict?.nav?.blog || "Blog" },
    { href: `/${lang}/chi-siamo`, label: dict?.nav?.about || "About" },
    { href: `/${lang}/diventa-professionista`, label: dict?.nav?.becomeProvider || "Become a Provider" },
    { href: `/${lang}/contattaci`, label: dict?.nav?.contact || "Contact" },
  ];

  const popularCities = cities.slice(0, 6); 
  const popularServices = services.slice(0, 6); 

  const handleNavClick = (link) => {
    if (link.hasSubmenu) {
      if (link.submenuType === "cities") {
        setShowCitiesSubmenu(true);
        setShowServicesSubmenu(false);
      } else if (link.submenuType === "servizi") {
        setShowServicesSubmenu(true);
        setShowCitiesSubmenu(false);
      }
    } else {
      setIsMenuOpen(false);
      setShowCitiesSubmenu(false);
      setShowServicesSubmenu(false);
    }
  };

  const handleBackToMenu = () => {
    setShowCitiesSubmenu(false);
    setShowServicesSubmenu(false);
  };

  const handleSubmenuItemClick = () => {
    setIsMenuOpen(false);
    setShowCitiesSubmenu(false);
    setShowServicesSubmenu(false);
  };

  const handleMouseEnter = (submenuType) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setHoveredDropdown(submenuType);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredDropdown(null);
    }, 150);
    setHoverTimeout(timeout);
  };
  
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300  ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-white/90 backdrop-blur-sm"
        }`}
        style={{ top: 'var(--pwa-banner-height, 0px)' }}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center space-x-2">
             <Image src="/assets/logo.webp" alt="CLEIN" width={200} height={200} className="w-28 lg:w-32 h-auto" />
            </Link>

            <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.hasSubmenu && handleMouseEnter(link.submenuType)}
                  onMouseLeave={link.hasSubmenu ? handleMouseLeave : undefined}
                >
                  <Link
                    href={link.href}
                    className="text-gray-700 lg:text-sm xl:text-base hover:text-[#0057B8] font-medium transition-colors"
                  >
                    {link.label}
                  </Link>

                  {/* Desktop Dropdown for Services */}
                  {link.submenuType === "servizi" && hoveredDropdown === "servizi" && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                      onMouseEnter={() => handleMouseEnter("servizi")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="px-4 pb-3 border-b border-gray-100">
                        <h3 className="font-semibold text-gray-900">{dict?.nav?.ourServices || "Our Services"}</h3>
                      </div>
                      <div className="py-2">
                        <Link
                          href={`/${lang}/servizi`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0057B8] font-medium"
                        >
                          {dict?.nav?.viewAllServices || "View All Services"}
                        </Link>
                        {popularServices.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/${lang}/servizi/${service.slug}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0057B8]"
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-lg">{service.icon}</span>
                              <div>
                                <div className="font-medium">{service.title}</div>
                                <div className="text-xs text-gray-500">{service.price}</div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Desktop Dropdown for Cities */}
                  {link.submenuType === "cities" && hoveredDropdown === "cities" && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                      onMouseEnter={() => handleMouseEnter("cities")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="px-4 pb-3 border-b border-gray-100">
                        <h3 className="font-semibold text-gray-900">{dict?.nav?.popularCities || "Popular Cities"}</h3>
                      </div>
                      <div className="py-2">
                        <Link
                          href={`/${lang}/cities`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0057B8] font-medium"
                        >
                          {dict?.nav?.viewAllCities || "View All Cities"}
                        </Link>
                        {popularCities.map((city) => (
                          <Link
                            key={city.slug}
                            href={`/${lang}/city/${city.slug}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0057B8]"
                          >
                            <div>
                              <div className="font-medium">{city.name}</div>
                              <div className="text-xs text-gray-500">{city.services.length} {dict?.nav?.servicesCount || "services"}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
              >
                <FaWhatsapp className="size-8" />
              </a>
              
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#0057B8]"
            >
              {isMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed bg-gradient-to-br from-[#0057B8] to-[#4C9AFF]
           inset-0 z-[70] lg:hidden transition-all duration-500  ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
       

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col">
          {/* Header */}
        <div className="flex items-center justify-end p-4"> 
         
            <button
              onClick={() => setIsMenuOpen(false)}
              className="lg:hidden p-2 text-white hover:text-white/80 transition-colors"
            >
            
                <HiX className="w-6 h-6" />
             
            </button>
            </div>
          {/* Main Menu */}
          <div
            className={`flex-1 px-6 transition-transform duration-300 pb-20 overflow-y-auto  ${
              showCitiesSubmenu || showServicesSubmenu ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.hasSubmenu ? (
                    <button
                      onClick={() => handleNavClick(link)}
                      className="w-full flex items-center justify-between py-4 text-left text-2xl font-semibold text-white hover:text-white/80 transition-colors border-b border-white/20"
                    >
                      <span>{link.label}</span>
                      <HiChevronRight className="w-6 h-6" />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => handleNavClick(link)}
                      className="block py-4 text-2xl font-semibold text-white hover:text-white/80 transition-colors border-b border-white/20"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Bottom Actions */}
            <div className="mt-12 space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 py-3 text-white hover:text-white/80 transition-colors"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span className="text-lg font-medium">Supporto WhatsApp</span>
              </a>
              
             
            </div>
          </div>

          {/* Services Submenu */}
          <div
            className={`absolute inset-0 py-16 lg:pt-20 px-6 transition-transform duration-300 overflow-y-auto ${
              showServicesSubmenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Back Button */}
            <button
              onClick={handleBackToMenu}
              className="flex items-center space-x-2 py-4 text-white hover:text-white/80 transition-colors mb-6"
            >
              <HiArrowLeft className="w-6 h-6" />
              <span className="text-lg font-medium">{dict?.nav?.backToMenu || "Back to Menu"}</span>
            </button>

            <h2 className="text-3xl font-bold text-white mb-6">{dict?.nav?.services || "Services"}</h2>

            <div className="space-y-4">
              {/* See All Services */}
              <Link
                href={`/${lang}/servizi`}
                onClick={handleSubmenuItemClick}
                className="block py-3 text-xl font-semibold text-white hover:text-white/80 transition-colors border-b border-white/20"
              >
                {dict?.nav?.seeAllServices || "See All Services"}
              </Link>

              {/* Popular Services */}
              <div>
                <h3 className="text-lg font-medium text-white/80 mb-4">{dict?.nav?.popularServices || "Popular Services"}</h3>
                <div className="grid grid-cols-1 gap-3">
                  {popularServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${lang}/servizi/${service.slug}`}
                      onClick={handleSubmenuItemClick}
                      className="block py-3 px-4 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{service.icon}</span>
                        <div>
                          <div className="font-medium">{service.title}</div>
                          <div className="text-sm text-white/70">{service.price}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cities Submenu */}
          <div
            className={`absolute inset-0 pt-16 lg:pt-20 px-6 transition-transform duration-300 overflow-y-auto ${
              showCitiesSubmenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Back Button */}
            <button
              onClick={handleBackToMenu}
              className="flex items-center space-x-2 py-4 text-white hover:text-white/80 transition-colors mb-6"
            >
              <HiArrowLeft className="w-6 h-6" />
              <span className="text-lg font-medium">{dict?.nav?.backToMenu || "Back to Menu"}</span>
            </button>

            <h2 className="text-3xl font-bold text-white mb-6">{dict?.nav?.cities || "Cities"}</h2>

            <div className="space-y-4">
              {/* See All Cities */}
              <Link
                href={`/${lang}/cities`}
                onClick={handleSubmenuItemClick}
                className="block py-3 text-xl font-semibold text-white hover:text-white/80 transition-colors border-b border-white/20"
              >
                {dict?.nav?.seeAllCities || "See All Cities"}
              </Link>

              {/* Popular Cities */}
              <div>
                <h3 className="text-lg font-medium text-white/80 mb-4">{dict?.nav?.popularCities || "Popular Cities"}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {popularCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${lang}/city/${city.slug}`}
                      onClick={handleSubmenuItemClick}
                      className="block py-3 px-4 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors"
                    >
                      <div className="font-medium">{city.name}</div>
                      <div className="text-sm text-white/70">{city.services.length} {dict?.nav?.servicesCount || "services"}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </>
  );
}

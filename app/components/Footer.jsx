"use client"

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import GooglePlayButton from "./GooglePlayButton";
import AppleButton from "./AppleButton";
import { EMAIL_CLIENT, EMAIL_URL_CLIENT, FACEBOOK_URL, LINKEDIN_URL, INSTAGRAM_URL, WHATSAPP_URL, PHONE_URL, PHONE } from "@/consts/socials";

const socialLinks = [
  {
    icon: <FaFacebook />,
    href: FACEBOOK_URL
  },
  {
    icon: <FaInstagram />,
    href: INSTAGRAM_URL
  },
  {
    icon: <FaLinkedin />,
    href: LINKEDIN_URL
  },
  {
    icon: <FaWhatsapp />,
    href: WHATSAPP_URL
  },
]

export default function Footer({ lang, dict }) {

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: dict?.footer?.serviceTitles?.houseCleaning || "Pulizia della Casa", href: `/${lang}/servizio/pulizia-della-casa` },
      { label: dict?.footer?.serviceTitles?.deepCleaning || "Pulizia Profonda", href: `/${lang}/servizio/pulizia-profonda` },
      { label: dict?.footer?.serviceTitles?.moveInMoveOutCleaning || "Pulizia per Traslochi", href: `/${lang}/servizio/pulizia-per-traslochi` },
      { label: dict?.footer?.serviceTitles?.officeCleaning || "Pulizia Uffici", href: `/${lang}/servizio/pulizia-uffici` },
      { label: dict?.footer?.serviceTitles?.handymanServices || "Servizi di Tuttofare", href: `/${lang}/servizio/tuttofare` },
      { label: dict?.footer?.serviceTitles?.electricalServices || "Servizi Elettrici", href: `/${lang}/servizio/elettricista` },
      { label: dict?.footer?.serviceTitles?.plumbingServices || "Servizi Idraulici", href: `/${lang}/servizio/idraulico` },
      { label: dict?.footer?.serviceTitles?.gardeningLawnCare || "Giardinaggio", href: `/${lang}/servizio/giardinaggio` },
      { label: "Vedi altri servizi", href: `/${lang}/servizi` },
    ],
    company: [
      { label: dict?.footer?.about || "Chi è CLEIN", href: `/${lang}/chi-siamo` },
      { label: dict?.footer?.companyLinks?.howItWorks || "Come Funziona", href: `/${lang}/#come-funziona` },
      { label: dict?.footer?.companyLinks?.becomeProvider || "Diventa Professionista", href: `/${lang}/diventa-professionista` },
      { label: dict?.footer?.blog || "Blog", href: `/${lang}/blog` },
      { label: dict?.footer?.contact || "Contattaci", href: `/${lang}/contattaci` },
    ],
    support: [
      { label: "FAQ", href: `/${lang}/#faq` },
      { label: dict?.footer?.privacy || "Privacy", href: `https://www.iubenda.com/privacy-policy/23075000` },
      { label: dict?.footer?.terms || "Termini", href: `https://www.iubenda.com/terms-and-conditions/55169783` },
      { label: dict?.footer?.cookies || "Cookie", href: `https://www.iubenda.com/privacy-policy/23075000/cookie-policy` },
      { label: dict?.footer?.supportLinks?.providerAgreement || "Termini per Professionisti", href: `/${lang}/accordo-fornitore` },
      { label: dict?.footer?.supportLinks?.dataPolicy || "Cancellazione Dati", href: `/${lang}/richiesta-cancellazione-dati` },
    ],
    cities: [
      { label: "Roma", href: `/${lang}/city/rome` },
      { label: "Milano", href: `/${lang}/city/milan` },
      { label: "Genova", href: `/${lang}/city/genoa` },
      { label: "Torino", href: `/${lang}/city/turin` },
      { label: "Firenze", href: `/${lang}/city/florence` },
      { label: "Bologna", href: `/${lang}/city/bologna` },
      { label: "Verona", href: `/${lang}/city/verona` },
      { label: "Parma", href: `/${lang}/city/parma` },
      { label: "Vedi altre città", href: `/${lang}/cities`, className: "text-blue-600 font-semibold underline hover:text-blue-800 transition" }
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container-custom  pt-20 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-3xl font-bold text-white">CLEIN</span>
            </Link>
            <p className="text-sm mb-6">
              {dict?.footer?.description || "La piattaforma leader in Italia per servizi domestici professionali. Colleghiamo le famiglie con fornitori di servizi affidabili e verificati in oltre 40 città."}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
             {socialLinks.map((link,index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">{dict?.footer?.services || "Servizi"}</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                      className={`text-sm hover:text-white transition-colors ${
                        link.label === "Vedi altri servizi"
                          ? "text-gray-100 font-semibold underline"
                          : "transition-colors"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">{dict?.footer?.company || "Azienda"}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">{dict?.footer?.support || "Supporto"}</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Cities */}
          <div>
            <h3 className="font-semibold text-white mb-4">{dict?.footer?.popularCities || "Disponibile in"}</h3>
            <ul className="space-y-2">
              {footerLinks.cities.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                      className={`text-sm hover:text-white transition-colors ${
                          link.label === "Vedi altre città"
                            ? "text-gray-100 font-semibold underline"
                            : "transition-colors"
                        }`}
                      >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <HiMail className="w-5 h-5 text-[#0057B8]" />
              <a
                href={EMAIL_URL_CLIENT} 
                className="hover:text-white transition-colors"
              >
              {EMAIL_CLIENT} 
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <HiPhone className="w-5 h-5 text-[#0057B8]" />
              <a
                href={PHONE_URL}
                className="hover:text-white transition-colors"
              >
                {PHONE}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <HiLocationMarker className="w-5 h-5 text-[#0057B8]" />
              <span>{dict?.footer?.availableInItaly || "Disponibile nelle principali città d'Italia"}</span>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-8 p-6 bg-gray-800 rounded-lg">
          <div className="text-center">
            <h3 className="text-white font-semibold mb-2">
              {dict?.footer?.downloadTitle || "Scarica CLEIN"}
            </h3>
            <p className="text-sm mb-4">
              {dict?.footer?.downloadSubtitle || "Prenota servizi in movimento"}
            </p>
            <div className="flex flex-row sm:flex-row gap-4 justify-center">
             <GooglePlayButton /> 
             <AppleButton />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>
            {dict?.footer?.copyright?.replace('{year}', currentYear) || `© ${currentYear} CLEIN di DI MATTIA SERVIZI`}
          </p>
        </div>
      </div>
    </footer>
  );
}
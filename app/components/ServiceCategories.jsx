"use client";

import Link from "next/link";
import { services } from "@/data/services";
import { 
  HiHome, 
  HiOfficeBuilding, 
  HiSparkles, 
  HiTruck,
  HiLightningBolt,
  HiCog,
  HiShieldCheck
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
  "servizi-caldaie": FaHotTub,
  "servizi-infissi-e-serramenti": LuDoorOpen,
  "servizi-zanzariere": MdOutlineGridOn,
  "disinfestazione": FaBug,
  "sgomberi-e-smaltimento": FaTrashAlt,
};


export default function ServiceCategories({ dict, lang = 'en' }) {
  const title = dict?.serviceCategories?.title || "Our";
  const titleHighlight = dict?.serviceCategories?.titleHighlight || "Services";
  const description = dict?.serviceCategories?.description || "Professional home services delivered by verified experts. Book through the CLEIN app for instant confirmation.";
  const bookingNote = dict?.serviceCategories?.bookingNote || "All services must be booked through the CLEIN mobile app";
  const downloadCta = dict?.serviceCategories?.downloadCta || "Download App to Book";

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title} <span className="gradient-text">{titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-sm:-mx-2">
          {services.map((service) => {
            const Icon = iconMap[service.slug] || HiHome;
            
            return (
              <Link
                key={service.slug}
                href={`/${lang}/servizio/${service.slug}`}
                className="group relative bg-white rounded-xl p-3 sm:p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-[#0057B8]/10 rounded-full flex items-center justify-center group-hover:bg-[#0057B8] transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#0057B8] group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#0057B8] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {service.subParagraph.substring(0, 50)}...
                  </p>
                  
                  <div className="text-[#0057B8] font-semibold">
                    {service.price}
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#0057B8] transition-colors duration-300 pointer-events-none" />
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            {bookingNote}
          </p>
          <a
            href="#download"
            className="btn btn-primary">
            {downloadCta}
          </a>
        </div>
      </div>
    </section>
  );
}
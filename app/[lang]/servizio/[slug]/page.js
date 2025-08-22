import { notFound } from "next/navigation";
import Link from "next/link";
import ServiceHeroImage from "@/app/components/ServiceHeroImage";
import { services, getServiceBySlug } from "@/data/services";
import { HiClock, HiCurrencyEuro, HiLocationMarker, HiChevronRight, HiDownload } from "react-icons/hi";
import { getDictionary } from '@/app/dictionaries';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);
  
  if (!service) {
    return {
      title: "Servizio non trovato - CLEIN",
    };
  }

  return {
    title: `${service.title} - CLEIN Servizi Domestici Italia`,
    description: service.description,
    openGraph: {
      title: `${service.title} - CLEIN`,
      description: service.description,
      images: [service.coverImage],
    },
  };
}

export default async function ServicePage({ params }) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang);
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
        {/* Hero Section */}
        <section className="relative min-h-[600px] pt-16 lg:pt-20 flex items-center justify-center overflow-hidden">
          <ServiceHeroImage 
            serviceSlug={service.slug} 
            serviceName={service.title} 
            coverImage={service.coverImage} 
          />
          
          <div className="relative z-10 container-custom section-padding text-center text-white">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center justify-center space-x-1 sm:space-x-2 text-[12px] sm:text-sm mb-6">
              <Link href={`/${lang}`} className="hover:text-white/80 transition-colors">Home</Link>
              <HiChevronRight className="w-4 h-4" />
              <Link href={`/${lang}/servizi`} className="hover:text-white/80 transition-colors">Servizi</Link>
              <HiChevronRight className="w-4 h-4" />
              <span className="text-white/70">{service.title}</span>
            </nav>
            
            {/* Main Title */}
            <div className="mb-8">
              <h1 className="flex flex-col md:flex-row text-4xl md:text-5xl lg:text-6xl font-bold mb-4  items-center justify-center gap-3">
                <span className="text-4xl md:text-5xl max-lg:hidden">{service.icon}</span>
                {service.title}
              </h1>
              <div className="w-24 h-1 bg-white/50 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                {service.subParagraph}
              </p>
            </div>
            
            {/* Service Info Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <HiCurrencyEuro className="w-5 h-5" />
                <span className="font-semibold">{service.price}</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <HiClock className="w-5 h-5" />
                <span className="font-semibold">{service.duration}</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <HiLocationMarker className="w-5 h-5" />
                <span className="font-semibold">Oltre 40 città</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.clein.homeservices&hl=it&gl=IT"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-[#0057B8] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <HiDownload className="w-5 h-5" />
                 Prenota questo servizio
              </a>
            </div>

          </div>
        </section>

        {/* Service Details */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Service Overview */}
                <div className="bg-white rounded-xl shadow-soft p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Panoramica del Servizio
                  </h2>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="flex items-center space-x-3">
                      <HiCurrencyEuro className="w-8 h-8 text-[#0057B8]" />
                      <div>
                        <p className="text-sm text-gray-600">Prezzo</p>
                        <p className="font-semibold text-gray-900">{service.price}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <HiClock className="w-8 h-8 text-[#0057B8]" />
                      <div>
                        <p className="text-sm text-gray-600">Durata</p>
                        <p className="font-semibold text-gray-900">{service.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <HiLocationMarker className="w-8 h-8 text-[#0057B8]" />
                      <div>
                        <p className="text-sm text-gray-600">Disponibilità</p>
                        <p className="font-semibold text-gray-900">Oltre 40 città</p>
                      </div>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* FAQs */}
                <div className="bg-white rounded-xl shadow-soft p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Domande Frequenti
                  </h2>
                  
                  <div className="space-y-6">
                    {service.faq.map((item, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="font-semibold text-gray-900 mb-3">
                          {item.question}
                        </h3>
                        <p className="text-gray-700">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Booking Card */}
                <div className="bg-white rounded-xl shadow-soft p-6 sticky top-24">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Prenota questo servizio
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Fascia di prezzo</span>
                      <span className="font-semibold text-gray-900">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Tempo stimato</span>
                      <span className="font-semibold text-gray-900">{service.duration}</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-4">
                      Scarica l’app CLEIN per prenotare questo servizio
                    </p>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.clein.homeservices&hl=it&gl=IT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full"
                    >
                      <HiDownload className="w-5 h-5 mr-2" />
                      Scarica l’App
                    </a>
                  </div>
                </div>

                {/* Available Cities */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Disponibile in
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.cityAvailability.map((city, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Why Choose CLEIN */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Perché scegliere CLEIN?
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="text-[#0057B8] mr-2">✓</span>
                      <span>Professionisti verificati e assicurati</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0057B8] mr-2">✓</span>
                      <span>Prezzi trasparenti senza costi nascosti</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0057B8] mr-2">✓</span>
                      <span>Prenotazione facile tramite app mobile</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0057B8] mr-2">✓</span>
                      <span>Garanzia di soddisfazione del cliente</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0057B8] mr-2">✓</span>
                      <span>Assistenza clienti 24/7</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Potrebbero Interessarti Anche Questi Servizi
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {services
                .filter(s => s.slug !== service.slug)
                .slice(0, 3)
                .map((relatedService) => (
                  <Link
                    key={relatedService.slug}
                    href={`/${lang}/servizio/${relatedService.slug}`}
                    className="bg-white rounded-lg shadow-soft hover:shadow-card transition-all duration-300 p-6"
                  >
                    <div className="text-4xl mb-4">{relatedService.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {relatedService.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {relatedService.description}
                    </p>
                    <p className="text-[#0057B8] font-semibold">
                      {relatedService.price}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    
  );
}
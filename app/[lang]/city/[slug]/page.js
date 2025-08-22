// app/[lang]/cities/[slug]/page.js

import { notFound } from "next/navigation";
import Link from "next/link";
import CityHeroImage from "@/app/components/CityHeroImage";
import { cities, getCityBySlug } from "@/data/cities";
import { services } from "@/data/services";
import { HiLocationMarker, HiStar, HiDownload, HiChevronRight } from "react-icons/hi";
import { getDictionary } from "@/app/dictionaries";

/* Static params for city pages */
export async function generateStaticParams() {
 return cities.map((c) => ({ slug: c.slug }));
}

/* Metadata (no await on params) */
export async function generateMetadata({ params }) {
  const { slug } = await params; // <-- await
  const city = getCityBySlug(slug);

  if (!city) {
    return {
      title: "Città non trovata - CLEIN",
    };
  }

  return {
    title: `Servizi domestici a ${city.name} - CLEIN`,
    description: `Servizi domestici professionali a ${city.name}. Prenota addetti alle pulizie, tuttofare, idraulici e altri professionisti affidabili tramite l’app CLEIN. ${city.description}`,
    openGraph: {
      title: `Servizi CLEIN a ${city.name}`,
      description: city.description,
      images: [{ url: city.image }],
    },
  };
}

/* Page */
export default async function CityPage({ params }) {
  const { lang, slug } = await params; // <-- await
  const dict = await getDictionary(lang);
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  // ---- Build services: city-defined subset first, then fill from the rest (unique), cap to 12
  const cityServiceSlugs = Array.isArray(city.services) ? city.services : [];
  const subset = services.filter((s) => cityServiceSlugs.includes(s.slug));
  const rest = services.filter((s) => !cityServiceSlugs.includes(s.slug));

  // Merge (city-first), ensure uniqueness, then slice to 12
  const cityServices = [...subset, ...rest]
    .filter(
      (s, idx, arr) => arr.findIndex((x) => x.slug === s.slug) === idx
    )
    .slice(0, 12);

  // Count displayed services safely
  const displayedCount = cityServices.length;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-20 flex items-center justify-center overflow-hidden">
        <CityHeroImage citySlug={city.slug} cityName={city.name} />

        <div className="relative z-10 container-custom section-padding text-center text-white">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center space-x-2 text-sm mb-6">
            <Link href={`/${lang}`} className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <HiChevronRight className="w-4 h-4" />
            <Link href={`/${lang}/cities`} className="hover:text-white/80 transition-colors">
              Oltre 40 città
            </Link>
            <HiChevronRight className="w-4 h-4" />
            <span className="text-white/70">{city.name}</span>
          </nav>

          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 flex flex-wrap items-center justify-center gap-3">
              <HiLocationMarker className="w-10 h-10 md:w-12 md:h-12 max-lg:hidden" />
              {city.name}
            </h1>
            <div className="w-24 h-1 bg-white/50 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              {city.description}
            </p>
          </div>

          {/* Service Stats */}
          <div className="flex flex-wrap gap-6 justify-center mb-8">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <HiLocationMarker className="w-5 h-5" />
              <span className="font-semibold">{displayedCount} Servizi</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <HiStar className="w-5 h-5" />
              <span className="font-semibold">4.8 Valutazione</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="font-semibold">50+ Professionisti</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.clein.homeservices&hl=it&gl=IT"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-[#0057B8] hover:bg-gray-100 shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <HiDownload className="w-5 h-5 mr-2" />
              Scarica l’App CLEIN
          </a>
        </div>
      </section>

      {/* Available Services */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Servizi disponibili a {city.name}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Prenota servizi domestici professionali tramite l’app CLEIN. Tutti i fornitori sono verificati e assicurati.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityServices.map((service) => (
              <Link
                key={service.slug}
                href={`/${lang}/servizio/${service.slug}`}
                className="bg-white rounded-xl shadow-soft hover:shadow-card transition-all duration-300 p-6"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#0057B8] font-semibold">{service.price}</span>
                  <span className="text-sm text-gray-500">{service.duration}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Cosa dicono i residenti di {city.name}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {city.testimonials?.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-soft p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0057B8] to-[#4C9AFF] rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.name?.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating || 0)].map((_, i) => (
                        <HiStar key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">&quot;{testimonial.comment}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Domande frequenti su CLEIN a {city.name}
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {city.faqs?.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-soft p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#0057B8] to-[#4C9AFF] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto a prenotare il tuo primo servizio a {city.name}?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Unisciti a migliaia di clienti soddisfatti che si affidano a CLEIN per le esigenze domestiche.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.clein.homeservices&hl=it&gl=IT"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-[#0057B8] hover:bg-gray-100"
            >
              <HiDownload className="w-5 h-5 mr-2" />
              Scarica l’App CLEIN
            </a>
            <Link
              href={`/${lang}/diventa-professionista`}
              className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0057B8]"
            >
              Diventa un professionista di CLEIN
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

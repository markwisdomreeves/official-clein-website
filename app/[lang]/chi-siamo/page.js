import { getDictionary } from '@/app/dictionaries';
import Link from "next/link";
import Image from "next/image";
import { HiCheckCircle, HiUsers, HiShieldCheck, HiLightningBolt } from "react-icons/hi";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return {
    title: dict.about?.title || "About CLEIN - Your Trusted Home Services Platform",
    description: dict.about?.description || "Learn about CLEIN, Italy's leading platform connecting customers with verified home service professionals. Our mission, vision, and values.",
  };
}

const getValues = (dict) => [
  {
    icon: HiShieldCheck,
    title: dict.about?.values?.items?.[0]?.title || "Trust & Safety",
    description: dict.about?.values?.items?.[0]?.description || "All our service providers are thoroughly vetted, background-checked, and insured for your peace of mind."
  },
  {
    icon: HiUsers,
    title: dict.about?.values?.items?.[1]?.title || "Community First",
    description: dict.about?.values?.items?.[1]?.description || "We're building a community where both customers and service providers thrive together."
  },
  {
    icon: HiLightningBolt,
    title: dict.about?.values?.items?.[2]?.title || "Innovation",
    description: dict.about?.values?.items?.[2]?.description || "Leveraging technology to make home services booking seamless, efficient, and transparent."
  },
  {
    icon: HiCheckCircle,
    title: dict.about?.values?.items?.[3]?.title || "Quality Guaranteed",
    description: dict.about?.values?.items?.[3]?.description || "We maintain high service standards through continuous monitoring and customer feedback."
  }
];

const getBenefits = (dict) => ({
  customers: dict.about?.platformBenefits?.customers?.benefits || [
    "Instant booking through mobile app",
    "Verified and insured professionals",
    "Transparent pricing with no hidden fees",
    "Real-time tracking and updates",
    "Secure payment options",
    "24/7 customer support",
    "Satisfaction guarantee",
    "Service history and receipts"
  ],
  providers: dict.about?.platformBenefits?.providers?.benefits || [
    "Flexible working hours",
    "Access to more customers",
    "Secure and timely payments",
    "Professional development opportunities",
    "Insurance coverage",
    "Fair dispute resolution",
    "Business growth tools",
    "Community support"
  ]
});

export default async function AboutPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const values = getValues(dict);
  const benefits = getBenefits(dict);
  
  return (
    <main>
        {/* Hero Section */}
        <section className="relative pt-16 lg:pt-20 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0057B8] to-[#4C9AFF]">
            <div className="absolute inset-0 bg-black/20" />
          </div>
          
          <div className="relative z-10 container-custom section-padding text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {dict.about?.hero?.title || "About CLEIN"}
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              {dict.about?.hero?.subtitle || "Transforming how Italians book and deliver home services through technology, trust, and community."}
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl shadow-soft p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{dict.about?.mission?.title || "Our Mission"}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {dict.about?.mission?.content || "To revolutionize the home services industry in Italy by creating a trusted platform that connects customers with verified professionals, ensuring quality, convenience, and transparency in every interaction."}
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-soft p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{dict.about?.vision?.title || "Our Vision"}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {dict.about?.vision?.content || "To become Italy's most trusted home services ecosystem where every household can access reliable professionals at their fingertips, and where service providers can build sustainable, thriving businesses."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                {dict.about?.story?.title || "Why CLEIN Was Created"}
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Content */}
                <div className="text-lg text-gray-700 space-y-6">
                  <p>
                    {dict.about?.story?.intro || "Finding reliable home service professionals in Italy has traditionally been a challenge. Whether you needed a cleaner, plumber, or electrician, the process often involved:"}
                  </p>
      
                  <p>
                    {dict.about?.story?.solution || "CLEIN was born from the vision to solve these problems. We created a platform that brings trust, transparency, and technology to the home services industry. By carefully vetting providers, standardizing services, and leveraging mobile technology, we've made it possible for anyone to book quality home services with just a few taps."}
                  </p>
                </div>

                {/* Company Image */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow duration-300 ease-in-out">
                    <Image
                      src="/assets/official-about-us.webp"
                      alt="CLEIN Team - La nostra azienda"
                      width={600}
                      height={500}
                      className="w-full h-auto object-cover md:object-center"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {dict.about?.values?.title || "Our Core Values"}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 bg-[#0057B8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-10 h-10 text-[#0057B8]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platform Benefits */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {dict.about?.platformBenefits?.title || "Platform Benefits"}
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* For Customers */}
              <div className="bg-white rounded-xl shadow-soft p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {dict.about?.platformBenefits?.customers?.title || "For Customers"}
                </h3>
                <ul className="space-y-3">
                  {benefits.customers.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <HiCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* For Providers */}
              <div className="bg-white rounded-xl shadow-soft p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {dict.about?.platformBenefits?.providers?.title || "For Service Providers"}
                </h3>
                <ul className="space-y-3">
                  {benefits.providers.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <HiCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-[#0057B8] to-[#4C9AFF] text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {dict.about?.cta?.title || "Join the CLEIN Community"}
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              {dict.about?.cta?.subtitle || "Whether you're looking for reliable home services or want to grow your service business, CLEIN is here for you."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.clein.homeservices&hl=it&gl=IT"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-[#0057B8] hover:bg-gray-100"
              >
                {dict.about?.cta?.customerApp || "Download Customer App"}
              </a>
              <Link
                href={`/${lang}/diventa-professionista`}
                className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0057B8]"
              >
                {dict.about?.cta?.providerLink || "Become a Provider"}
              </Link>
            </div>
          </div>
        </section>
      </main>
  );
}
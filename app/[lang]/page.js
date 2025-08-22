import Hero from "@/app/components/Hero";
import ServiceCategories from "@/app/components/ServiceCategories";
import HowItWorks from "@/app/components/HowItWorks";
import MobileAppShowcase from "@/app/components/MobileAppShowcase";
import PlatformBenefits from "@/app/components/PlatformBenefits";
import Stats from "@/app/components/Stats";
import TrustedPartners from "@/app/components/TrustedPartners";
import Testimonials from "@/app/components/Testimonials";
import FAQ from "@/app/components/FAQ";
import AppDownload from "@/app/components/AppDownload";
import { getDictionary } from '@/app/dictionaries';


export default async function Home({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  return (
      
      <main>
        <Hero dict={dict} lang={lang} />
        <ServiceCategories dict={dict} lang={lang} />
        <HowItWorks dict={dict} lang={lang} />
        <MobileAppShowcase dict={dict} lang={lang} />
        <PlatformBenefits dict={dict} lang={lang} />
        <Stats dict={dict} lang={lang} />
        <TrustedPartners dict={dict} lang={lang} />
        <Testimonials dict={dict} lang={lang} />
        <FAQ dict={dict} lang={lang} />
        <AppDownload dict={dict} lang={lang} />
      </main>
      
  );
}
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import PWARegister from "@/app/components/PWARegister";
import PWAInstallBanner from "@/app/components/PWAInstallBanner";
import { getDictionary } from '@/app/dictionaries';

export async function generateStaticParams() {
  return [{ lang: 'it' }, { lang: 'en' }]
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return (
    <>
      <PWARegister />
      <PWAInstallBanner />
      <Header dict={dict} lang={lang} />
      {children}
      <Footer dict={dict} lang={lang} />
    </>
  );
}
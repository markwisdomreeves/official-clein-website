import { getDictionary } from '@/app/dictionaries';
import ServicesPageClient from './ServicesPageClient';

export default async function ServicesPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return <ServicesPageClient dict={dict} lang={lang} />;
}
import { getDictionary } from '@/app/dictionaries';
import CitiesPageClient from './CitiesPageClient';

export default async function CitiesPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return <CitiesPageClient dict={dict} lang={lang} />;
}
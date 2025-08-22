import { getDictionary } from '../../dictionaries';
import BecomeProviderClient from './client';

export async function generateMetadata({ params }) {

  const resolvedParams = await params; // ✅ Await first
  const { lang } = resolvedParams;

  const dict = await getDictionary(lang || 'it');
  
  const isItalian = lang === 'it';
  
  return {
    title: `${dict.becomeProvider.hero.title} ${dict.becomeProvider.hero.titleHighlight} | CLEIN`,
    description: dict.becomeProvider.hero.subtitle,
    keywords: isItalian 
      ? 'CLEIN provider, lavoro domestico, guadagna di più, diventa provider, servizi domestici Italia, flessibilità lavorativa, professionisti servizi, rete provider, business domestico'
      : 'CLEIN provider, home services work, earn more, become provider, domestic services Italy, work flexibility, service professionals, provider network, home business',
    openGraph: {
      title: `${dict.becomeProvider.hero.title} ${dict.becomeProvider.hero.titleHighlight}`,
      description: dict.becomeProvider.hero.subtitle,
      type: 'website',
      locale: isItalian ? 'it_IT' : 'en_US',
      siteName: 'CLEIN',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dict.becomeProvider.hero.title} ${dict.becomeProvider.hero.titleHighlight}`,
      description: dict.becomeProvider.hero.subtitle,
      site: '@clein_it',
    },
    alternates: {
      languages: {
        'it': '/it/diventa-professionista',
        'en': '/en/diventa-professionista',
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BecomeProviderPage({ params }) {

  const resolvedParams = await params; // ✅ Await first
  const { lang } = resolvedParams;
  
  const dict = await getDictionary(lang || 'it');
  
  return <BecomeProviderClient dict={dict} lang={lang || 'it'} />;
}







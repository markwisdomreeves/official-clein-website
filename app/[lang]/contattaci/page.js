import { getDictionary } from '@/app/dictionaries';
import ContactPageClient from './ContactPageClient';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict?.contact?.title || 'Contact Us - CLEIN',
    description: dict?.contact?.description || 'We\'re here to help. Reach out to us for any questions, feedback, or support needs.',
    openGraph: {
      title: dict?.contact?.title || 'Contact Us - CLEIN',
      description: dict?.contact?.description || 'We\'re here to help. Reach out to us for any questions, feedback, or support needs.',
      type: 'website',
    }
  };
}

export default async function ContactPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return <ContactPageClient dict={dict} lang={lang} />;
}
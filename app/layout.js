import { Poppins } from "next/font/google";

import 'react-device-frameset/styles/marvel-devices.min.css'
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export function generateMetadata({ params }) {
  const lang = 'it';
  const title = "CLEIN - Servizi Domestici Professionali in Italia";
  const description = "CLEIN ti connette con professionisti qualificati e verificati per ogni esigenza domestica. Prenota facilmente pulizie, idraulici, elettricisti, tuttofare e altri servizi in tutta Italia tramite la nostra app.";
  const keywords = "servizi domestici, pulizie professionali, idraulico Italia, elettricista Italia, tuttofare, manutenzione casa, assistenza domestica, servizi casa Italia";

  
  return {
    title,
    description,
    keywords,
    authors: [{ name: "Clein" }], 
    creator: "Clein",
    publisher: "Clein",
    openGraph: {
      title,
      description: "Servizi domestici professionali sempre a portata di mano. Scarica l'app CLEIN e prenota subito.",
      url: `https://clein.it/${lang}`,
      siteName: "Clein",
      images: [
        {
          url: "/seo/android-chrome-512x512.png",
          width: 512,
          height: 512,
          alt: "CLEIN - Piattaforma di Servizi Domestici",
        },
      ],
      locale: "it_IT",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: "Servizi domestici professionali sempre a tua disposizione. Scarica subito l'app CLEIN.",
      images: ["/seo/android-chrome-512x512.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: 'https://clein.it/it',
    },
  };
}

export default async function RootLayout({ children, params }) {
  
  const { lang } = params || { lang: 'it' }
  
  return (
    <html lang={lang}>
      <head>
        <link rel="icon" href="/seo/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/seo/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/seo/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/seo/apple-touch-icon.png" />
        <link rel="manifest" href="/seo/site.webmanifest" />
        <meta name="theme-color" content="#0057B8" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Clein" />
        <meta name="application-name" content="Clein" />
        <meta name="msapplication-TileColor" content="#0057B8" />
        <meta name="msapplication-config" content="/seo/browserconfig.xml" />
        
        {/* PWA specific meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="apple-mobile-web-app-orientation" content="portrait" />
        
        {/* PWA Event Listeners */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Capture PWA install prompt globally
            let deferredPrompt;
            
            window.addEventListener('beforeinstallprompt', function(e) {
              console.log('beforeinstallprompt Event fired in layout');
              e.preventDefault();
              deferredPrompt = e;
              window.deferredPrompt = e;
              
              // Dispatch custom event to notify React components
              window.dispatchEvent(new CustomEvent('beforeinstallprompt-ready', { detail: e }));
            });
            
            // Log app installed
            window.addEventListener('appinstalled', function(e) {
              console.log('PWA was installed');
              deferredPrompt = null;
              window.deferredPrompt = null;
            });
          `
        }} />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
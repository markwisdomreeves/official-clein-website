'use client';

import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { HiDownload } from 'react-icons/hi';

export default function PWAInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if iOS
    const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(isiOS);

    // Check if already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                        window.navigator.standalone ||
                        document.referrer.includes('android-app://');

    if (!isStandalone) {
      // For iOS, show banner immediately
      if (isiOS) {
        setShowBanner(true);
      }

      // Handle install prompt for Android/Desktop
      const handleBeforeInstallPrompt = (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setShowBanner(true);
      };

      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

      // Cleanup
      return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      };
    }
  }, []);

  useEffect(() => {
    if (showBanner) {
      document.documentElement.style.setProperty('--pwa-banner-height', '56px');
    } else {
      document.documentElement.style.setProperty('--pwa-banner-height', '0px');
    }
  }, [showBanner]);

  const handleInstallClick = async () => {
    if (isIOS) {
      alert('Per installare l\'app:\n1. Tocca il pulsante Condividi\n2. Seleziona "Aggiungi a Home"\n3. Tocca "Aggiungi"');
      return;
    }

    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowBanner(false);
      }
      setDeferredPrompt(null);
    } else {
      alert('Per installare: apri il menu del browser (⋮) e seleziona "Installa app"');
    }
  };

  const handleClose = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-white  border-b border-gray-200 z-[60]">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 sm:space-x-3">
            <img src="/seo/android-chrome-192x192.png" alt="CLEIN" className="w-10 h-10 rounded" />
            <div>
              <p className="font-medium text-gray-900 text-sm sm:text-base">Installa CLEIN</p>
              <p className="text-xs text-gray-500 sm:text-sm">Accesso rapido ai servizi</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleInstallClick}
              className="bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 flex items-center space-x-2"
            >
              <HiDownload className="w-4 h-4" />
              <span>Installa</span>
            </button>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 p-1 sm:p-2"
            >
              <IoClose className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
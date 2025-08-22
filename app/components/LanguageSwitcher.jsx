"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { HiGlobe, HiChevronDown } from "react-icons/hi";

const languages = [
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "en", name: "English", flag: "🇺🇸" },
];

export default function LanguageSwitcher({
  currentLocale = "it",
  variant = "header",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  const handleLanguageChange = (langCode) => {
    const pathWithoutLocale = pathname.replace(/^\/(en|it)/, "") || "/";

    const newPath = `/${langCode}${pathWithoutLocale}`;

    router.push(newPath);
    setIsOpen(false);
  };

  const baseClasses =
    variant === "footer"
      ? "text-white hover:text-white/80"
      : "text-gray-700 hover:text-[#0057B8]";

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${baseClasses}`}>
        <HiGlobe className="w-5 h-5" />
        <span className="hidden sm:inline font-medium">
          {currentLanguage.name}
        </span>
        <span className="sm:hidden text-lg">{currentLanguage.flag}</span>
        <HiChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-30"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-40">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                  currentLocale === language.code
                    ? "bg-blue-50 text-[#0057B8]"
                    : "text-gray-700"
                }`}>
                <span className="text-lg">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
                {currentLocale === language.code && (
                  <svg
                    className="w-4 h-4 ml-auto text-[#0057B8]"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

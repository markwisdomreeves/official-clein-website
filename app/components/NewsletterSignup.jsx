"use client";

import { useState } from "react";
import { HiMail, HiCheck } from "react-icons/hi";

export default function NewsletterSignup({ 
  dict,
  lang = 'it',
  title,
  subtitle,
  compact = false 
}) {
  const displayTitle = title || dict?.newsletter?.title || "Stay Updated with CLEIN";
  const displaySubtitle = subtitle || dict?.newsletter?.subtitle || "Get the best home tips and CLEIN updates directly in your inbox";
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setEmailError("");

    if (!email.trim()) {
      setEmailError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsSubscribing(true);
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setIsSubscribed(true);
      setEmail("");
      
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    } catch (error) {
      setEmailError(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  if (compact) {
    return (
      <div className="bg-white rounded-2xl shadow-soft p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{displayTitle}</h3>
        <p className="text-gray-600 text-sm mb-4">{displaySubtitle}</p>
        
        {isSubscribed ? (
          <div className="bg-green-50 rounded-lg p-3 border border-green-200">
            <div className="flex items-center gap-2 text-green-700">
              <HiCheck className="w-5 h-5" />
              <span className="font-medium">{dict?.newsletter?.successTitle || "Subscription completed!"}</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <HiMail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder={dict?.newsletter?.emailPlaceholder || "Your email"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
                className={`w-full bg-gray-50 px-4 py-3 pl-10 pr-24 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0057B8] transition-all duration-200 ${
                  emailError ? 'ring-2 ring-red-300' : ''
                }`}
                disabled={isSubscribing}
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-[#0057B8] text-white rounded-md font-medium hover:bg-[#004494] active:bg-[#003876] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubscribing ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  dict?.newsletter?.subscribeButton || "Subscribe"
                )}
              </button>
            </div>
            {emailError && (
              <p className="text-red-600 text-sm mt-2">{emailError}</p>
            )}
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {displayTitle}
      </h2>
      <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        {displaySubtitle}
      </p>
      
      {isSubscribed ? (
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-center gap-3 text-white">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <HiCheck className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold">{dict?.newsletter?.successTitle || "Subscription completed!"}</p>
              <p className="text-sm text-white/80">{dict?.newsletter?.successSubtitle || "Welcome to the CLEIN community"}</p>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <HiMail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder={dict?.newsletter?.emailPlaceholderLong || "Enter your email address"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
                className={`w-full bg-white px-6 py-4 pl-12 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-200 ${
                  emailError ? 'ring-2 ring-red-300' : ''
                }`}
                disabled={isSubscribing}
              />
            </div>
            <button
              type="submit"
              disabled={isSubscribing}
              className="px-8 py-4 bg-white text-[#0057B8] rounded-xl font-semibold hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[120px]"
            >
              {isSubscribing ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#0057B8] border-t-transparent rounded-full animate-spin"></div>
                  <span>{dict?.newsletter?.subscribing || "Subscribing..."}</span>
                </>
              ) : (
                dict?.newsletter?.subscribeButton || "Subscribe"
              )}
            </button>
          </div>
          {emailError && (
            <p className="text-red-200 text-sm mt-2 text-left">{emailError}</p>
          )}
          <p className="text-white/70 text-xs mt-3">
            {dict?.newsletter?.privacyNote || "We respect your privacy. You can unsubscribe at any time."}
          </p>
        </form>
      )}
    </div>
  );
}
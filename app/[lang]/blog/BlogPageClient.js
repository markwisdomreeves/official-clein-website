"use client";

import { useState } from "react";
import Link from "next/link";
import { HiSearch, HiCalendar, HiClock, HiArrowRight, HiMail, HiCheck } from "react-icons/hi";
import BlogImage from "@/app/components/BlogImage";

export default function BlogPageClient({ dict, lang, posts, categories }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tutti i post");
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");

  const filteredPosts = posts.filter(post => {
    const allPostsLabel = dict?.blog?.categories?.allPosts || "Tutti i post";
    const matchesCategory = selectedCategory === "Tutti i post" || selectedCategory === allPostsLabel || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedPosts = filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setEmailError("");

    if (!email.trim()) {
      setEmailError(dict?.blog?.newsletter?.errors?.emailRequired || "Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError(dict?.blog?.newsletter?.errors?.emailInvalid || "Please enter a valid email address");
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
    } catch (error) {
      setEmailError(error.message || dict?.blog?.newsletter?.errors?.generalError || "Something went wrong. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0057B8] to-[#4C9AFF]">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
        </div>
        
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            CLEIN {dict?.blog?.hero?.title || "Blog"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {dict?.blog?.hero?.subtitle || "Expert tips, guides, and updates to help you make the most of your home services"}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder={dict?.blog?.hero?.searchPlaceholder || "Search articles..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white px-4 py-3 pl-12 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {sortedPosts.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{dict?.blog?.featured?.title || "Featured Article"}</h2>
            </div>
            
            <Link href={`/${lang}/blog/${sortedPosts[0].slug}`}>
              <div className="group relative bg-white rounded-3xl shadow-premium overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-w-16 aspect-h-9 lg:aspect-none lg:h-full">
                    <BlogImage
                      src={sortedPosts[0].heroImage}
                      alt={sortedPosts[0].title}
                      className="w-full h-full"
                    />
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="px-3 py-1 bg-[#0057B8]/10 text-[#0057B8] rounded-full font-medium">
                        {sortedPosts[0].category}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiCalendar className="w-4 h-4" />
                        {new Date(sortedPosts[0].date).toLocaleDateString('it-IT', { 
                          month: 'numeric', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#0057B8] transition-colors">
                      {sortedPosts[0].title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {sortedPosts[0].excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <HiClock className="w-4 h-4" />
                        {sortedPosts[0].readTime}
                      </div>
                      
                      <span className="inline-flex items-center gap-2 text-[#0057B8] font-semibold group-hover:gap-3 transition-all">
                        {dict?.blog?.featured?.readMore || "Read More"}
                        <HiArrowRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-8 bg-gray-50 sticky top-16 z-20">
        <div className="container-custom">
          <div className="flex overflow-x-auto max-lg:px-2 lg:flex-wrap gap-4 lg:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 lg:px-6 whitespace-nowrap py-2 rounded-full font-medium transition-colors text-sm ${
                  selectedCategory === category
                    ? "bg-[#0057B8] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}>
                {category} ({(category === "Tutti i post" || category === (dict?.blog?.categories?.allPosts || "Tutti i post")) ? posts.length : posts.filter(p => p.category === category).length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {sortedPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 mb-4">{dict?.blog?.filters?.noResults || "No articles found matching your criteria."}</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(dict?.blog?.categories?.allPosts || "Tutti i post");
                }}
                className="text-[#0057B8] font-medium hover:text-[#004494]"
              >
                {dict?.blog?.filters?.clearFilters || "Clear filters"}
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.slice(1).map((post) => (
                <Link
                  key={post.slug}
                  href={`/${lang}/blog/${post.slug}`}
                  className="group"
                >
                  <article className="h-full bg-white rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 overflow-hidden card-hover">
                    <div className="aspect-w-16 aspect-h-9">
                      <BlogImage
                        src={post.heroImage}
                        alt={post.title}
                        className="w-full h-48"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                        <span className="text-[#0057B8] font-medium">
                          {post.category}
                        </span>
                        <span>•</span>
                        <span>
                          {new Date(post.date).toLocaleDateString('it-IT', { 
                            month: 'short', 
                            day: 'numeric',
                            timeZone: 'Europe/Rome' 
                          })}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0057B8] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <HiClock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                        
                        <span className="text-[#0057B8] font-medium group-hover:translate-x-1 transition-transform">
                          {dict?.blog?.postCard?.read || "Read →"}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-r from-[#0057B8] to-[#00A896] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {dict?.blog?.newsletter?.title || "Stay Updated with CLEIN"}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {dict?.blog?.newsletter?.subtitle || "Get the latest home service tips and CLEIN updates delivered to your inbox"}
          </p>
          
          {isSubscribed ? (
            <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <HiCheck className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">{dict?.blog?.newsletter?.successTitle || "Successfully subscribed!"}</p>
                  <p className="text-sm text-white/80">{dict?.blog?.newsletter?.successSubtitle || "Welcome to the CLEIN community"}</p>
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
                    placeholder={dict?.blog?.newsletter?.emailPlaceholder || "Enter your email address"}
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
                      <span>{dict?.blog?.newsletter?.subscribing || "Subscribing..."}</span>
                    </>
                  ) : (
                    dict?.blog?.newsletter?.subscribeButton || "Subscribe"
                  )}
                </button>
              </div>
              {emailError && (
                <p className="text-red-200 text-sm mt-2 text-left">{emailError}</p>
              )}
              <p className="text-white/70 text-xs mt-3">
                {dict?.blog?.newsletter?.privacyNote || "We respect your privacy. Unsubscribe at any time."}
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
} 
"use client";

import { useEffect } from "react";
import { HiStar, HiLocationMarker } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Fallback testimonials data in case translations are missing
const fallbackTestimonials = [
  {
    name: "Maria Rossi",
    location: "Rome",
    rating: 5,
    service: "House Cleaning",
    comment: "CLEIN has transformed how I manage my home. The cleaners are professional, punctual, and thorough. I love being able to book through the app!",
    image: "/images/testimonials/user1.jpg"
  },
  {
    name: "Giuseppe Bianchi",
    location: "Milan",
    rating: 5,
    service: "Electrical Services",
    comment: "Had an electrical emergency and CLEIN connected me with a licensed electrician within hours. Professional service at a fair price.",
    image: "/images/testimonials/user2.jpg"
  },
  {
    name: "Francesca Lombardi",
    location: "Naples",
    rating: 5,
    service: "Deep Cleaning",
    comment: "The deep cleaning service exceeded my expectations. Every corner of my apartment sparkles! The provider was friendly and efficient.",
    image: "/images/testimonials/user3.jpg"
  },
  {
    name: "Alessandro Conti",
    location: "Turin",
    rating: 5,
    service: "Handyman Services",
    comment: "Finally, a reliable platform for home repairs! The handyman fixed multiple issues in one visit. Great value for money.",
    image: "/images/testimonials/user4.jpg"
  },
  {
    name: "Sofia Marino",
    location: "Florence",
    rating: 5,
    service: "Gardening Services",
    comment: "My garden has never looked better! The gardener was knowledgeable and gave great advice for maintenance. Highly recommend CLEIN.",
    image: "/images/testimonials/user5.jpg"
  },
  {
    name: "Marco Ferrari",
    location: "Bologna",
    rating: 5,
    service: "Office Cleaning",
    comment: "We use CLEIN for our office cleaning needs. Always reliable, professional, and the booking process is seamless.",
    image: "/images/testimonials/user6.jpg"
  }
];

export default function Testimonials({ dict, lang = 'en' }) {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {dict?.testimonials?.title || "What Our"} <span className="gradient-text">{dict?.testimonials?.titleHighlight || "Customers"}</span> {lang === 'it' ? '' : 'Say'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dict?.testimonials?.subtitle || "Join thousands of satisfied customers who trust CLEIN for their home service needs"}
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16 testimonial-swiper"
          >
            {(dict?.testimonials?.customers || fallbackTestimonials).map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl border border-gray-300 p-8 h-full relative overflow-hidden group  transition-all duration-300">
                  {/* Quote Icon Background */}
                  <FaQuoteLeft className="absolute top-4 right-4 w-16 h-16 text-gray-100 group-hover:text-blue-100 transition-colors duration-300" />
                  
                  {/* Rating Stars */}
                  <div className="flex items-center mb-4 relative z-10">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <HiStar key={i} className="w-5 h-5 text-yellow-400 drop-shadow-sm" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-700 mb-6 relative z-10 line-clamp-4">
                    {testimonial.comment}
                  </p>

                  {/* Service Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
                    {testimonial.service}
                  </div>

                  {/* User Info */}
                  <div className="flex items-center mt-auto">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0057B8] to-[#4C9AFF] rounded-full mr-4 flex items-center justify-center text-white font-bold text-lg shadow-md">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 flex items-center">
                        <HiLocationMarker className="w-4 h-4 mr-1" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex flex-col lg:flex-row items-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0057B8]">4.8/5</div>
              <div className="text-sm text-gray-600">{dict?.testimonials?.stats?.averageRating || "Average Rating"}</div>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden lg:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0057B8]">50K+</div>
              <div className="text-sm text-gray-600">{dict?.testimonials?.stats?.happyCustomers || "Happy Customers"}</div>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden lg:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0057B8]">98%</div>
              <div className="text-sm text-gray-600">{dict?.testimonials?.stats?.satisfactionRate || "Satisfaction Rate"}</div>
            </div>
          </div>
          
         
        </div>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          background: white;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          color: #0057B8;
          display: none;
        }
        
        @media (min-width: 768px) {
          .testimonial-swiper .swiper-button-next,
          .testimonial-swiper .swiper-button-prev {
            display: flex;
          }
        }
        
        .testimonial-swiper .swiper-button-next:hover,
        .testimonial-swiper .swiper-button-prev:hover {
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        
        .testimonial-swiper .swiper-button-next:after,
        .testimonial-swiper .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }
        
        .testimonial-swiper .swiper-pagination-bullet {
          background: #0057B8;
          opacity: 0.3;
        }
        
        .testimonial-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #0057B8;
        }
      `}</style>
    </section>
  );
}
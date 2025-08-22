"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { HiLocationMarker } from "react-icons/hi";
import { FaArrowRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import QRCode from "qrcode";
import GooglePlayButton from "./GooglePlayButton";
import AppleButton from "./AppleButton";
import { SiTrustpilot } from "react-icons/si";
import Image from "next/image";

export default function Hero({ dict, lang }) {
  const controls = useAnimation();
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const googlePlayUrl =
    "https://play.google.com/store/apps/details?id=com.clein.homeservices&pli=1";

  useEffect(() => {
    controls.start("visible");

    const generateQR = async () => {
      try {
        const url = await QRCode.toDataURL(googlePlayUrl, {
          width: 144,
          margin: 1,
          color: {
            dark: "#0057B8",
            light: "#ffffff",
          },
        });
        setQrCodeUrl(url);
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    };

    generateQR();
  }, [controls, googlePlayUrl]);

  const heroContainerVariants = {
    initial: { scale: 1.1, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const backgroundImageVariants = {
    initial: { scale: 1.2, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 3, ease: "easeOut" },
    },
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 1.5, delay: 0.5, ease: "easeOut" },
    },
  };

  const gradientVariants = {
    initial: { backgroundPosition: "0% 50%" },
    animate: {
      backgroundPosition: "100% 50%",
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative max-lg:min-h-screen lg:h-full !max-h-[1200px] flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 overflow-hidden"
        variants={heroContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#0057B8] via-[#0057B8] to-[#4C9AFF]"
          style={{
            background:
              "linear-gradient(-45deg, #0057B8, #0057B8, #4C9AFF, #00A896)",
            backgroundSize: "400% 400%",
          }}
          variants={gradientVariants}
          initial="initial"
          animate="animate"
        />

        {/* Hero background */}
        <motion.div
          className="absolute inset-0"
          variants={backgroundImageVariants}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/assets/hero-bg.webp"
            alt="Hero Background"
            className="object-cover w-full h-full max-lg:hidden"
            priority
            fill
          />
          <Image
            src="/assets/hero-bg-sm.webp"
            alt="Hero Background"
            className="object-cover object-right w-full h-full lg:hidden"
            priority
            fill
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-black/40"
          variants={overlayVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/60 via-transparent to-[#0057B8]/40"
          variants={overlayVariants}
          initial="initial"
          animate="animate"
        />

        <motion.div
          className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />

        <motion.div
          className="hidden md:block absolute bottom-20 right-10 w-96 h-96 bg-[#00A896]/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <motion.div
          className="hidden lg:block absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <motion.div
          className="hidden lg:block absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#4C9AFF]/10 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Subtle particles effect */}
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, -20, 0], opacity: [0, 1, 0], scale: [0, 1, 0] }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-custom max-lg:px-4 pt-20 pb-8 lg:py-32">
        <div className="grid lg:grid-cols-2 xl:grid-cols-7 gap-8 2xl:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            className="text-white space-y-4 xl:col-span-4"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Trustpilot Button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="https://it.trustpilot.com/review/clein.it?utm_medium=trustbox&utm_source=TrustBoxReviewCollector"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-white text-xs sm:text-base">
                    Trustpilot
                  </span>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(1)].map((_, i) => (
                    <SiTrustpilot key={i} className="size-3 sm:size-4 text-[#00B67A]" />
                  ))}
                </div>
                <span className="text-white/90 text-xs sm:text-sm">
                  {dict?.hero?.trustpilotExcellent}
                </span>
                <FaArrowRight className="size-3 sm:size-3 text-white/90" />
              </motion.a>
            </motion.div>

            {/* <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[36px] font-semibold leading-snug text-balance tracking-tight"
              variants={itemVariants}>
              {dict?.hero?.title}
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white font-normal"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}/>
            </motion.h1> */}

            <motion.h1
              className="text-4xl sm:text-5xl md:text-5xl 2xl:text-[50px] font-bold leading-tight text-balance"
              variants={itemVariants}>
              {dict?.hero?.title}
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl 1xl:text-1xl text-white/90 font-light"
              variants={itemVariants}>
              {dict?.hero?.subtitle}
              <span className="block text-base sm:text-lg mt-2 text-white/90">
                {dict?.hero?.features}
              </span>
            </motion.p>

            {/* Download Buttons */}
            <motion.div
              className="flex flex-row sm:flex-row gap-4 pt-4"
              variants={itemVariants}>
              <GooglePlayButton />
              <AppleButton />
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-2 sm:gap-4 gap-y-6 lg:gap-6 text-sm text-white/80"
              variants={itemVariants}>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                    {users.slice(0, 4).map((user, i) => (
                      <motion.div
                        key={i}
                        className="size-8 sm:size-10 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + 1 }}
                        whileHover={{ scale: 1.05 }}>
                        <img
                          src={user}
                          alt="User"
                          width={64}
                          height={64}
                          className="rounded-full object-cover size-8 sm:size-10"
                        />
                      </motion.div>
                    ))}
                  </div>
                <span>{dict?.hero?.providers}</span>
              </div>

              <div className="flex items-center gap-1">
                <HiLocationMarker className="w-5 h-5" />
                <span>{dict?.hero?.cities}</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} className="size-5 text-yellow-400" />
                  ))}
                  <FaStarHalfAlt className="size-5 text-yellow-400" />
                </div>
                <span>{dict?.hero?.rating}</span>
              </div>
            </motion.div>

            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
              variants={itemVariants}
            >
              <motion.span
                className="w-2 h-2 bg-green-400 rounded-full mr-2"
                variants={pulseVariants}
                animate="animate"
              />
              {dict?.hero?.trustBadge}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const users = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/men/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
  "https://randomuser.me/api/portraits/men/8.jpg",
  "https://randomuser.me/api/portraits/men/9.jpg",
  "https://randomuser.me/api/portraits/men/10.jpg",
];

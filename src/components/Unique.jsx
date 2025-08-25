import React, { useState, useRef, useEffect } from "react";
import Button from "./Homepage/button/Button";
import imguniqrue from "@/assets/team.jpg";
import { motion, useInView, useAnimation } from "framer-motion";

// ✅ AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function Unique() {
  const items = [
    {
      title: "Branding and Identity Design",
      text: "Our creative agency is a team of professionals focused on helping your brand grow.",
    },
    {
      title: "Website Design and Development",
      text: "Our creative agency is a team of professionals focused on helping your brand grow.",
    },
    {
      title: "Advertising and Marketing Campaigns ",
      text: "Our creative agency is a team of professionals focused on helping your brand grow.",
    },
    {
      title: "Creative Consulting and Development ",
      text: "Our creative agency is a team of professionals focused on helping your brand grow..",
    },
  ];

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { threshold: 0.3, margin: "-100px" });
  const headerControls = useAnimation();

  useEffect(() => {
    if (isHeaderInView) {
      headerControls.start("visible");
    } else {
      headerControls.start("hidden");
    }
  }, [isHeaderInView, headerControls]);

  // ✅ init AOS once
  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    AOS.init({
      duration: isMobile ? 400 : 800,
      offset: isMobile ? 50 : 120,
      once: false,
      easing: "ease-out",
    });
  }, []);

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-black overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-16">
        {/* الهيدر */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerControls}
          className="py-8 md:py-12 lg:py-16 space-y-6 md:space-y-8 lg:space-y-10"
        >
          <motion.div
            variants={headerItemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8"
          >
            {/* الصورة */}
            <motion.div
              variants={imageVariants}
              className="w-48 h-16 sm:w-56 sm:h-18 md:w-64 md:h-20 flex-shrink-0"
            >
              <img
                className="w-full h-full object-cover position-top rounded-full sm:rounded-3xl md:rounded-[70px] shadow-lg"
                src={imguniqrue}
                alt="Unique Ideas"
              />
            </motion.div>

            <motion.h2
              className="text-white text-lg sm:text-xl md:text-[68px] font-bold text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={
                isHeaderInView
                  ? {
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 0.4,
                        duration: 0.8,
                        ease: "easeOut",
                      },
                    }
                  : { opacity: 0, x: 50 }
              }
            >
              Unique Ideas
            </motion.h2>
          </motion.div>

          <motion.div
            variants={headerItemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8"
          >
            {/* النص الثاني */}
            <motion.h3
              className="text-white text-lg sm:text-xl md:text-[68px] font-bold text-center"
              initial={{ opacity: 0, x: -50 }}
              animate={
                isHeaderInView
                  ? {
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 0.6,
                        duration: 0.8,
                        ease: "easeOut",
                      },
                    }
                  : { opacity: 0, x: -50 }
              }
            >
              For Your Business.
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={
                isHeaderInView
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        delay: 0.8,
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    }
                  : { opacity: 0, y: 30, scale: 0.9 }
              }
              whileTap={{ scale: 0.95 }}
            >
              <Button cusotmStyle="orange" btnVairant="white" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* AOS  هنا استخدمت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 ">
          {items.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative py-[60px] px-[30px] border border-[#e5e7eb1f] hover:cursor-pointer bg-black/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
            >
              <span className="absolute top-0 left-0 h-1 w-full bg-[#ffa700] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
              <h3 className="box-h3 text-white font-bold mb-3 group-hover:text-[#ffa700] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="box-p text-gray-300 
                md:opacity-0 md:translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:text-gray-100 
                opacity-100 translate-y-0 transition-all duration-500 ease-out">
                {item.text}
              </p>
              <div className="mt-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffa700] text-white group-hover:bg-[#ff8c00] group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

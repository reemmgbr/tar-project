import React from "react";
import { motion } from "framer-motion";
import Button from "../Homepage/button/Button";
import Buttonoronage from "../buttonoronage/Buttonoronage";
import ImpactHeroSection from "../ImpactHeroSection";
import Buttontwo from "../buttonoronage/Buttontwo";

export default function Services() {
  // Animation variants للنصوص
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Animation variants للخدمات
  const serviceVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Animation variants للقائمة
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Animation للصورة - حركة مستمرة لأعلى وأسفل
  const imageAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="bg-[#000000]">
      <div className="container mx-auto px-6 py-40">
        <div className="relative w-full flex items-center justify-center mb-8 px-4">
          <div className="absolute top-1/2 left-0 h-[1px] bg-[#262222] w-1/2"></div>
          <div className="relative bg-black px-2 sm:px-4 flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-white font-medium tracking-wide ">
            <motion.a
              href="/"
              className="hover:text-[#ff9800] transition-colors   text-xl"
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              HOMEPAGE
            </motion.a>{" "}
            <span>/</span>
            <span className="text-xl">SERVICES</span>
          </div>
        </div>
        {/* العنوان والزر */}
        <motion.div
          className="text-white mb-12 w-full ml-auto  " 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <h2 className="text-[40px] md:text-[74px] leading-tight  text-center font-bold  flex justify-center items-center">
            <motion.h1
              className="text-white text-5xl md:text-7xl font-light leading-tight max-w-2xl"
              variants={textVariants}
            >
              This is{" "}
              <motion.span
                className="text-gray-400 font-extralight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                what
              </motion.span>
              <br />
              we do{" "}
              <motion.span
                className="text-gray-400 font-extralight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                best
              </motion.span>
            </motion.h1>
          </h2>
        </motion.div>

        {/* الخدمات الأولى */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* عمود جانبي للتصميم */}
          <motion.div
            className="w-[30%] hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="./Screenshot 2025-08-23 214417.png"
              alt=""
              animate={imageAnimation}
            />
          </motion.div>

          {/* محتوى الخدمات */}
          <div className="flex flex-col md:flex-row gap-12 max-w-[50%]">
            <motion.div
              className="mt-0 md:mt-12 flex-1"
              variants={serviceVariants}
            >
              <motion.h3
                className="text-2xl font-semibold mb-2"
                variants={textVariants}
              >
                Branding and Identity Design
              </motion.h3>
              <motion.p className="text-[#fff6] mb-4" variants={textVariants}>
                Our team of professionals is focused on helping your brand grow.
              </motion.p>

              <motion.ul
                className="space-y-3"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "UX AUDITS",
                  "UX RESEARCH",
                  "UI DESIGN",
                  "PROTOTYPING",
                  "USER TESTING",
                  "DESIGN SYSTEMS",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="pb-2 text-[#ffffff99] font-[500] text-[12px]"
                    style={{
                      borderBottom: "1px solid",
                      borderImage:
                        "linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.6)) 1",
                    }}
                    variants={itemVariants}
                    whileHover={{
                      color: "#ffffff",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Buttontwo />
              </motion.div>
            </motion.div>

            <motion.div
              className="flex-1"
              variants={serviceVariants}
              transition={{ delay: 0.2 }}
            >
              <motion.h3
                className="text-2xl font-semibold mb-2"
                variants={textVariants}
              >
                Digital Marketing Solutions
              </motion.h3>
              <motion.p className="text-[#fff6] mb-4" variants={textVariants}>
                We create strategies that connect your business with the right
                audience effectively.
              </motion.p>

              <motion.ul
                className="space-y-3"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "SEO OPTIMIZATION",
                  "SOCIAL MEDIA",
                  "CONTENT STRATEGY",
                  "PPC CAMPAIGNS",
                  "ANALYTICS",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="pb-2 text-[#ffffff99] font-[500] text-[12px]"
                    style={{
                      borderBottom: "1px solid",
                      borderImage:
                        "linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.6)) 1",
                    }}
                    variants={itemVariants}
                    whileHover={{
                      color: "#ffffff",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Buttontwo />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* الخدمات الثانية */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 text-white mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* عمود جانبي للتصميم */}
          <motion.div
            className="w-[30%] hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="./Screenshot 2025-08-23 214417.png"
              alt=""
              animate={{
                y: [0, 15, 0],
                transition: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5, // تأخير مختلف لجعل الحركة متنوعة
                },
              }}
            />
          </motion.div>

          {/* محتوى الخدمات */}
          <div className="flex flex-col md:flex-row gap-12 max-w-[50%]">
            <motion.div className="mt-12 flex-1" variants={serviceVariants}>
              <motion.h3
                className="text-2xl font-semibold mb-2"
                variants={textVariants}
              >
                Web Development
              </motion.h3>
              <motion.p className="text-[#fff6] mb-4" variants={textVariants}>
                Building modern, responsive websites that deliver exceptional
                user experiences.
              </motion.p>

              <motion.ul
                className="space-y-3"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "REACT DEVELOPMENT",
                  "NEXT.JS APPS",
                  "API INTEGRATION",
                  "PERFORMANCE OPTIMIZATION",
                  "RESPONSIVE DESIGN",
                  "E-COMMERCE SOLUTIONS",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="pb-2 text-[#ffffff99] font-[500] text-[12px]"
                    style={{
                      borderBottom: "1px solid",
                      borderImage:
                        "linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.6)) 1",
                    }}
                    variants={itemVariants}
                    whileHover={{
                      color: "#ffffff",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Buttontwo />
              </motion.div>
            </motion.div>

            <motion.div
              className="flex-1"
              variants={serviceVariants}
              transition={{ delay: 0.2 }}
            >
              <motion.h3
                className="text-2xl font-semibold mb-2"
                variants={textVariants}
              >
                Consulting & Strategy
              </motion.h3>
              <motion.p className="text-[#fff6] mb-4" variants={textVariants}>
                Strategic guidance to help your business grow and achieve its
                digital transformation goals.
              </motion.p>

              <motion.ul
                className="space-y-3"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "BUSINESS STRATEGY",
                  "DIGITAL TRANSFORMATION",
                  "PROCESS OPTIMIZATION",
                  "TECHNOLOGY CONSULTING",
                  "GROWTH PLANNING",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="pb-2 text-[#ffffff99] font-[500] text-[12px]"
                    style={{
                      borderBottom: "1px solid",
                      borderImage:
                        "linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.6)) 1",
                    }}
                    variants={itemVariants}
                    whileHover={{
                      color: "#ffffff",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Buttontwo />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <ImpactHeroSection />
    </div>
  );
}

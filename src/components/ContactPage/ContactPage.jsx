import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Buttontwo from "../buttonoronage/Buttontwo";
import "./ContactPage.css";

const ContactPage = () => {
  // Refs
  const breadcrumbRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const mapRef = useRef(null);
  const formRef = useRef(null);

  // InView hooks
  const isBreadcrumbInView = useInView(breadcrumbRef, { once: false, threshold: 0.3 });
  const isTitleInView = useInView(titleRef, { once: false, threshold: 0.3 });
  const isButtonInView = useInView(buttonRef, { once: false, threshold: 0.3 });
  const isMapInView = useInView(mapRef, { once: false, threshold: 0.2 });
  const isFormInView = useInView(formRef, { once: false, threshold: 0.2 });

  // Animation Variants
  const slideUpFadeVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } }
  };

  const scaleFadeVariants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 } }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  };

  const formItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 90, damping: 12 } }
  };

  return (
    <div className="min-h-screen bg-black pt-[120px] sm:pt-[140px] md:pt-[150px]">

      {/* Breadcrumb */}
      <motion.nav
        ref={breadcrumbRef}
        className="relative z-10 flex items-center justify-center py-4 sm:py-6 px-4 sm:px-6 md:px-8 lg:px-16"
        initial="hidden"
        animate={isBreadcrumbInView ? "visible" : "hidden"}
        variants={slideUpFadeVariants}
      >
        <div className="relative w-full flex items-center justify-center">
          <motion.div
            className="absolute top-1/2 left-0 h-[1px] bg-[#262222] w-1/2"
            initial={{ scaleX: 0 }}
            animate={isBreadcrumbInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>

          <div className="relative bg-black px-4 flex items-center space-x-3 sm:space-x-5 text-xs sm:text-sm text-white font-medium tracking-wide">
            <motion.a
              href="/"
              className="hover:text-[#ff9800] transition-colors"
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              HOMEPAGE
            </motion.a>
            <span className="text-white">/</span>
            <span className="text-white">CONTACT</span>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] px-4 sm:px-6">
        <motion.h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 sm:mb-10 md:mb-12 text-center leading-tight"
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
          variants={scaleFadeVariants}
        >
          Get in touch!
        </motion.h1>

        <motion.div
          ref={buttonRef}
          initial="hidden"
          animate={isButtonInView ? "visible" : "hidden"}
          variants={scaleFadeVariants}
        >
          <Buttontwo />
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        ref={mapRef}
        className="w-full h-[300px] sm:h-[350px] md:h-[400px] mt-8 sm:mt-12 md:mt-16"
        initial="hidden"
        animate={isMapInView ? "visible" : "hidden"}
        variants={slideUpFadeVariants}
      >
        <motion.iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.015960076296!2d31.235711215114674!3d30.04441938187927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458410d6c07a64b%3A0x8fef76e7654374f0!2z2KfZhNmF2LXYs9mFINin2YTYr9mI2KfZhiDYp9mE2KfZhNin2YXYjCDZg9mG2K_Yp9ix2YrYqQ!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isMapInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      {/* Contact Form */}
      <div className="flex justify-center py-12 sm:py-14 md:py-16 px-4 sm:px-6">
        <motion.div
          ref={formRef}
          className="form-container w-full max-w-md sm:max-w-lg"
          initial="hidden"
          animate={isFormInView ? "visible" : "hidden"}
          variants={staggerContainerVariants}
        >
          <form className="form">
            <motion.div className="form-group" variants={formItemVariants}>
              <input type="text" placeholder="Enter your name" required className="w-full" />
            </motion.div>

            <motion.div className="form-group" variants={formItemVariants}>
              <input type="email" placeholder="Enter your email" required className="w-full" />
            </motion.div>

            <motion.div className="form-group" variants={formItemVariants}>
              <textarea placeholder="Write your message..." required className="w-full min-h-[120px] resize-vertical"></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="form-submit-btn w-full"
              variants={formItemVariants}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;

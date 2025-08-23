import React, { useState, useEffect, useRef } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Chen",
      company: "TECH INNOVATIONS",
      text: "Outstanding work! The team delivered exactly what we envisioned and more. Their attention to detail and creative approach exceeded our expectations. The project was completed on time and within budget.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Lisa Park",
      company: "GLOBAL VENTURES",
      text: "The best agency we've worked with! Their strategic thinking and creative execution are unmatched. They delivered results that significantly improved our brand presence and customer engagement.",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Sarah Johnson",
      company: "DESIGN STUDIO",
      text: "Working with this agency was a game-changer for our brand. They understood our vision perfectly and brought it to life in ways we never imagined. Highly professional and creative team.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "David Rodriguez",
      company: "STARTUP HUB",
      text: "Exceptional creativity and professionalism. The team went above and beyond to ensure our project was successful. Their innovative solutions helped us stand out in a competitive market.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const goToTestimonial = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  // ⬇️ انيميشن مع scroll
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { threshold: 0.2, triggerOnce: false });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-center justify-center bg-[#f2f2f2] pt-16 pb-16"
    >
      <div className="max-w-6xl w-full px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-700 mb-2">
            <span className="font-bold text-gray-900">Customer</span> Voices:
          </h2>
          <h2 className="text-4xl md:text-5xl font-light text-gray-700">
            <span className="font-bold text-gray-900">Hear What</span> They Say!
          </h2>
        </div>

        {/* Avatar Navigation */}
        <div className="flex justify-center flex-wrap gap-4 my-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              onClick={() => goToTestimonial(index)}
              whileHover={{ scale: 1.1 }}
              className={`w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden cursor-pointer transition-all duration-300 border-[3px] ${
                currentIndex === index
                  ? "border-orange-500 scale-110 shadow-lg"
                  : "border-transparent hover:scale-105"
              }`}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full object-cover rounded-full p-[6px]"
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonial Content */}
        <div className="relative min-h-[300px] flex flex-col items-center justify-center">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-4 top-[64px] -translate-y-[64px] w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300 border-2 border-orange-500 z-10"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-4 top-[64px] -translate-y-[64px] w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300 border-2 border-orange-500 z-10"
          >
            <FaChevronRight className="text-xl" />
          </button>

          {/* Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`max-w-4xl mx-auto text-center`}
          >
            <FaQuoteLeft className="text-5xl text-orange-500 opacity-70 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-gray-500 uppercase tracking-wider text-sm mb-8">
              {testimonials[currentIndex].company}
            </p>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed ">
              {testimonials[currentIndex].text}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;

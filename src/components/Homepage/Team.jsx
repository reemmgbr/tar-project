import React, { useRef } from "react";
import Button from "./button/Button";
import member_one from "@/assets/2.jpg";
import member_two from "@/assets/2 (1).jpg";
import member_three from "@/assets/3.jpg";
import member_four from "@/assets/4.jpg";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

// Variants للجزء النصي
const textContainer = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.3,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Variants للصور
const imagesContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageItem = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Team() {
  const team = [
    { img: member_one, name: "Nahla Ibrahim" },
    { img: member_two, name: "Reem Gbr" },
    { img: member_three, name: "Mostafa Mohsen" },
    { img: member_four, name: "Hana Mohamed" },
  ];

  // ريفرنس للجزء الخاص بالصور
  const imagesRef = useRef(null);
  const isInView = useInView(imagesRef, { once: true, amount: 0.2 }); 
  // once:true = يشتغل أول مرة بس (Scroll Down) مش لما نرجع لفوق

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-0">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
        
        {/* Left Section - Text Content */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <motion.h2
            variants={textItem}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-lg mx-auto lg:mx-0"
          >
            Meet
            <br />
            Our Team
          </motion.h2>

          <div className="max-w-lg mt-8 sm:mt-12 mx-auto lg:mx-0">
            <motion.p
              variants={textItem}
              className="mb-6 text-[#acafb3] text-base sm:text-lg leading-relaxed"
            >
              We are talented individuals who are passionate about bringing ideas to life. 
              With a diverse range of backgrounds and skill sets, we collaborate to produce effective solutions.
            </motion.p>

            <motion.p
              variants={textItem}
              className="mb-6 text-[#acafb3] text-base sm:text-lg leading-relaxed"
            >
              Together our creative team is committed to delivering impactful work that exceeds expectations.
            </motion.p>

            <motion.div variants={textItem}>
              <Button />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section - Team Images */}
        <motion.div
          ref={imagesRef}
          variants={imagesContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // يشتغل أول مرة بس لما تنزلي Scroll Down
          className="w-full lg:w-1/2"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((item, index) => (
              <motion.div
                key={index}
                
                variants={imageItem}
                className="group relative overflow-hidden rounded-xl"
              >
                {/* Image */}
                <img
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2"
                  src={item.img}
                  alt={item.name}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out flex items-end p-6">
                  <div className="w-full">
                    <h5 className="text-lg sm:text-xl font-semibold text-white mb-1 hover:text-[#ffa700] transition-colors duration-300 cursor-pointer">
                      {item.name}
                    </h5>
                    <p className="text-gray-300 text-sm mb-4">Front End Developer</p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-300 hover:text-[#ffa700] transition-colors duration-300">
                        <FaTwitter className="text-lg" />
                      </a>
                      <a href="#" className="text-gray-300 hover:text-[#ffa700] transition-colors duration-300">
                        <FaInstagram className="text-lg" />
                      </a>
                      <a href="#" className="text-gray-300 hover:text-[#ffa700] transition-colors duration-300">
                        <FaLinkedin className="text-lg" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Border underline */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ffa700] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}

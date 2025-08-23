import React from "react";
import { motion } from "framer-motion";
import Button from "./button/Button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // كل عنصر يظهر بعد التاني
    },
  },
};

const textVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { x: 80, opacity: 0 }, // تبدأ من على اليمين
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Studio() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 my-[90px] ">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* النصوص */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3}} // يعمل الانيميشن فوق وتحت
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              variants={textVariants}
            >
              Discover
              <br />
              Our <span className="font-normal">Studio</span>
            </motion.h2>

            <motion.div
              className="mt-6 sm:mt-10 space-y-6 max-w-lg mx-auto md:mx-0"
              variants={containerVariants}
            >
              <motion.p variants={textVariants}>
                At our design studio, we are a collective of talented individuals
                ignited by our unwavering passion for transforming ideas into reality.
              </motion.p>
              <motion.p variants={textVariants}>
                Collaboration is at the heart of what we do. Our team thrives on the
                synergy that arises when unique perspectives converge, fostering an
                environment of boundless creativity.
              </motion.p>
            </motion.div>

            <motion.div className="mt-6" variants={textVariants}>
              <Button />
            </motion.div>
          </motion.div>

          {/* الصورة */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              className="w-full max-w-[457px] h-auto object-cover rounded-lg"
              src="./assets/1.jpg"
              alt="Our Studio"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

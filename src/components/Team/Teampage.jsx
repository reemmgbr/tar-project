import React from "react";
import Buttonoronage from "../buttonoronage/Buttonoronage";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import ImpactHeroSection from "../ImpactHeroSection";

const teamMembers = [
  { name: "Reem Gbr", role: "Front End Developer", img: "./assets/2 (1).jpg" },
  { name: "John Doe", role: "Designer", img: "./assets/2 (1).jpg" },
  { name: "Jane Smith", role: "Project Manager", img: "./assets/2 (1).jpg" },
  { name: "Alex Johnson", role: "Developer", img: "./assets/2 (1).jpg" },
];

const Teampage = () => {
  return (
    <div className="min-h-screen bg-black pt-[120px] sm:pt-[140px] md:pt-[150px]">
      {/* Breadcrumb */}
      <div className="relative w-full flex items-center justify-center mb-8 px-4">
        <div className="absolute top-1/2 left-0 h-[1px] bg-[#262222] w-1/2"></div>
        <div className="relative bg-black px-2 sm:px-4 flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-white font-medium tracking-wide">
    <motion.a
              href="/"
              className="hover:text-[#ff9800] transition-colors"
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              HOMEPAGE
            </motion.a>          <span>/</span>
          <span>TEAM</span>
        </div>
      </div>

   <div className="container mx-auto max-w-[1200px] w-full px-4 text-center md:text-left">
  <div className="text-white mb-12 max-w-2xl ">
    <h2 className="text-[28px] sm:text-[40px] md:text-[74px] font-bold leading-tight">
      Meet <span className="text-gray-400 font-extralight">Our</span>
      <br />
      Creative Team
    </h2>
  </div>
  <Buttonoronage />
</div>


      <div className="container mx-auto max-w-[1200px] w-full px-4 pt-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 80 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative h-[380px] sm:h-[350px] md:h-[400px] w-full overflow-hidden bg-black"
            >
              <img
                className="transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2 w-full h-full object-contain"
                src={member.img}
                alt={member.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out flex items-end p-6">
                <div className="w-full">
                  <h5 className="text-lg sm:text-xl font-semibold text-white mb-1 hover:text-[#ffa700] transition-colors duration-300 cursor-pointer">
                    {member.name}
                  </h5>
                  <p className="text-gray-300 text-sm mb-4">{member.role}</p>
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
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ffa700] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 80 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative h-[380px] sm:h-[350px] md:h-[400px] w-full overflow-hidden bg-black"
            >
              <img
                className="transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2 w-full h-full object-contain"
                src={member.img}
                alt={member.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out flex items-end p-6">
                <div className="w-full">
                  <h5 className="text-lg sm:text-xl font-semibold text-white mb-1 hover:text-[#ffa700] transition-colors duration-300 cursor-pointer">
                    {member.name}
                  </h5>
                  <p className="text-gray-300 text-sm mb-4">{member.role}</p>
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
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ffa700] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <ImpactHeroSection />
    </div>
  );
};

export default Teampage;

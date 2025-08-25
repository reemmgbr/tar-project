import React, { useEffect } from "react";
import Buttonoronage from "../buttonoronage/Buttonoronage";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import member_one from "@/assets/2.jpg";
import member_two from "@/assets/2 (1).jpg";
import member_three from "@/assets/3.jpg";
import member_four from "@/assets/4.jpg";
import member_five from "@/assets/5.jpg";
import member_six from "@/assets/6.jpg";
import member_sev from "@/assets/7.jpg";
import member_eight from "@/assets/8.jpg";

import ImpactHeroSection from "../ImpactHeroSection";

// ✅ استدعاء مكتبة AOS
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  { name: "Reem Gbr", role: "Front End Developer", img: member_one },
  { name: "John Doe", role: "Designer", img: member_two },
  { name: "Jane Smith", role: "Project Manager", img: member_three },
  { name: "Alex Johnson", role: "Developer", img: member_four },
  { name: "Alaa Ahmed", role: "Developer", img: member_five },
  { name: "Alex Johnson", role: "Developer", img: member_six },
  { name: "Justin Newman ", role: "Developer", img: member_sev },
  { name: "Spunkie  ", role: "Paw giver", img: member_eight },
];

const Teampage = () => {
  useEffect(() => {
    AOS.init({
      viwewport: { once: false, amount: 0.2 }, 
      duration: 200, 
      once: false, 
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-black pt-[120px] sm:pt-[140px] md:pt-[150px]">
      {/* Breadcrumb */}
      <div className="relative w-full flex items-center justify-center mb-8 px-4">
        <div className="absolute top-1/2 left-0 h-[1px] bg-[#262222] w-1/2"></div>
        <div className="relative bg-black px-2 sm:px-4 flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-white font-medium tracking-wide">
          <a
            href="/"
            className="hover:text-[#ff9800] transition-colors"
          >
            HOMEPAGE
          </a>
          <span>/</span>
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
            <div
              key={index}
              data-aos="zoom-in"              // ✅ الأنيميشن على الكارت
              data-aos-delay={index * 100}    // تأخير بسيط بين الكروت
              className="group relative h-[500px] sm:h-[350px] md:h-[400px] w-full overflow-hidden bg-black"
            >
              <img
                className="transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2 w-full h-full object-cover"
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
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#ffa700] transition-colors duration-300"
                    >
                      <FaTwitter className="text-lg" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#ffa700] transition-colors duration-300"
                    >
                      <FaInstagram className="text-lg" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#ffa700] transition-colors duration-300"
                    >
                      <FaLinkedin className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ffa700] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
            </div>
          ))}
        </div>
      </div>

      <ImpactHeroSection />
    </div>
  );
};

export default Teampage;

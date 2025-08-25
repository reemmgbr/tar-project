import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import imgblog from "../assets/blogone (3).jpg";
import imgblogtwo from "../assets/4 (1).jpg";
import imgblogthree from "../assets/blogone (3).jpg";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import ImpactHeroSection from "./ImpactHeroSection";



export default function Portfolio() {
  const publications = [
    {
      id: 1,
      category: "TECHNOLOGY",
      date: "MAY 24 2023",
      title: "How to Become a Graphic Designer in 10 Simple Steps",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Etus sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupidita...",
      image:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      category: "TECHNOLOGY",
      date: "MAY 24 2023",
      title: "16 Best Graphic Design Online and Offline Courses",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Etus sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupidita...",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <div className="bg-[#000000]">
      <div className="container mx-auto px-6 pb:[0px] md:pb-40px  pt-40">
        <div className="relative w-full flex items-center justify-center mb-8 px-4">
          <div className="absolute top-1/2 left-0 h-[1px] bg-[#262222] w-1/2"></div>
          <div className="relative bg-black px-2 sm:px-4 flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-white font-medium tracking-wide">
            <a
              href="/"
              className="hover:text-[#ff9800] transition-colors text-xl"
            >
              HOMEPAGE
            </a>{" "}
            <span>/</span>
            <span className="text-xl">BLOG</span>
          </div>
        </div>

        <div className="text-white mb-12 w-full ml-auto" data-aos="zoom-in">
          <h2 className="text-[40px] md:text-[74px] leading-tight text-center font-bold flex justify-center items-center">
            <h1 className="text-white text-5xl md:text-7xl font-light leading-tight max-w-2xl">
              Exploring{" "}
              <span className="text-gray-400 font-extralight  transition-opacity duration-700 delay-500">
                the World
              </span>
              <br />
              Through Our{" "}
              <span className="text-gray-400 font-extralight transition-opacity duration-700 delay-700">
                Blog
              </span>
            </h1>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6" data-aos="fade-up">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-xl md:text-4xl font-[500] text-white">
              Popular Publications:
            </h2>
            <button className="flex items-center hover:text-[#f97316] transition-colors duration-300 text-xl mt-0 gap-2 text-white hover:text-white transition-colors group">
              <span className="text-sm font-medium uppercase">VIEW ALL</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {publications.map((publication) => (
              <article
                key={publication.id}
                className="flex flex-col justify-between"
                data-aos="fade-up" 
              >
                <div className="overflow-hidden">
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                      {publication.category}
                    </span>
                    <span className="text-white text-sm tracking-wider uppercase">
                      {publication.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 leading-tight hover:text-orange-500 transition-colors cursor-pointer">
                    {publication.title}
                  </h3>

                  <p className="text-[#ffffff94] mb-6 leading-relaxed">
                    {publication.description}
                  </p>

                  <button className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors group">
                    <span className="text-sm font-medium tracking-wider uppercase">
                      READ MORE
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-[1rem] sm:mx-[3rem] lg:mx-[7rem] my-24 border-b pb-12 border-[#ffffff17]">
          <div className="flex flex-col lg:flex-row" data-aos="fade-up">
            {/* Image Section */}
            <div className="lg:w-1/2 relative">
              <img
                src={imgblog}
                alt="Blog Image"
                className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">
                    TECHNOLOGY
                  </span>
                  <span className="text-white text-sm">MAY 24 2023</span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                  How to Create a Brand Guide for Your Client
                </h2>

                <p className="text-[#ffffff94] leading-relaxed mb-8 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eius
                  sequi commodi dignissimos optio, beatae, eos necessitatibus
                  nisl.
                </p>

                <button className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors group">
                  <span className="text-sm font-medium tracking-wider uppercase">
                    READ MORE
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-[1rem] sm:mx-[3rem] lg:mx-[7rem] my-24 border-b pb-12 border-[#ffffff17]">
          <div className="flex flex-col lg:flex-row" data-aos="fade-up">
            {/* Image Section */}
            <div className="lg:w-1/2 relative">
              <img
                src={imgblogtwo}
                alt="Blog Image"
                className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">
                    TECHNOLOGY
                  </span>
                  <span className="text-white text-sm">MAY 24 2023</span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                  Color Psychology in Art and Design{" "}
                </h2>

                <p className="text-[#ffffff94] leading-relaxed mb-8 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eius
                  sequi commodi dignissimos optio, beatae, eos necessitatibus
                  nisl.
                </p>

                <button className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors group">
                  <span className="text-sm font-medium tracking-wider uppercase">
                    READ MORE
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-[1rem] sm:mx-[3rem] lg:mx-[7rem] my-24 border-b pb-12 border-[#ffffff17]">
          <div className="flex flex-col lg:flex-row" data-aos="fade-up">
            {/* Image Section */}
            <div className="lg:w-1/2 relative">
              <img
                src={imgblogthree}
                alt="Blog Image"
                className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">
                    TECHNOLOGY
                  </span>
                  <span className="text-white text-sm">MAY 24 2023</span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                  How to Never Reach Creative Burnout{" "}
                </h2>

                <p className="text-[#ffffff94] leading-relaxed mb-8 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eius
                  sequi commodi dignissimos optio, beatae, eos necessitatibus
                  nisl.
                </p>

                <button className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors group">
                  <span className="text-sm font-medium tracking-wider uppercase">
                    READ MORE
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
     <ImpactHeroSection />  
      
    </div>
  );
}

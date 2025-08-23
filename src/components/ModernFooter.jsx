import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import Buttonanimated from "../buttons/Buttonanimated/Buttonanimated";
import SocialIcons from "../buttons/Buttonanimated/SocialIcons/SocialIcons";

const ModernFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Email submitted:", email);
    setEmail("");
    // هنا ممكن تضيفي الكود الخاص بإرسال الإيميل
  };

  return  (
      <footer className="w-full bg-black text-white py-16 px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Buttonanimated />
              <p className="text-[#ffffff66] mb-8">Subscribe our newsletter:</p>

              {/* Newsletter Subscription */}
              <div className="relative">
                <div className="flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER YOUR EMAIL"
                    className="flex-1 bg-[#ffffff1a] rounded-full px-6 py-3 text-gray-500 placeholder-[#ffffff66] focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              {/* Social Media */}
              <SocialIcons />
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-1">
              <nav className="space-y-5  lg:text-center ">
                <a href="#" className="text-[#ff9800] text-[28px]">
                  Home
                </a>
                <a href="#" className="footera">
                  Portfolio
                </a>
                <a href="services" className="footera">
                  Services
                </a>
                <a href="contact" className="footera">
                  Contact
                </a>
                <a href="team" className="footera">
                  Team
                </a>
              </nav>
            </div>

            {/* Legal Links */}
            <div className="lg:col-span-1">
              <nav className="space-y-4">
                <a
                  href="#"
                  className="block text-[#ffffff66] text-lg hover:text-white transition-all hover:pl-2"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-[#ffffff66] text-lg hover:text-white transition-all hover:pl-2 "
                >
                  Terms and conditions
                </a>
                <a
                  href="#"
                  className="block text-[#ffffff66] text-lg hover:text-white transition-all hover:pl-2 "
                >
                  Cookie Policy
                </a>
                <a
                  href="#"
                  className="block text-[#ffffff66] text-lg hover:text-white transition-all hover:pl-2 "
                >
                  Careers
                </a>
              </nav>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[#ffffff17] mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-[#ffffff66] text-sm">
                © Copyright 2025 - Rem Gbr. All Rights Reserved.
              </p>

              {/* Back to Top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="mt-4 md:mt-0 flex flex-col items-center text-gray-400 hover:text-orange-500 transition-colors group"
              >
                <div className="w-8 h-8 border border-[#ffffff66] rounded-full flex items-center justify-center mb-2 group-hover:border-orange-500 transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </div>
                <span className="text-xs text-[#ffffff66]">BACK TO TOP</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

  );
};

export default ModernFooter;

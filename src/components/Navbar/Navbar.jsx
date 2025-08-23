import React, { useState, useEffect } from 'react';
import Buttonanimated from '../../buttons/Buttonanimated/Buttonanimated';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const mainNavItems = [
    { name: 'Homepage', href: '/', active: true },
    { name: 'contact', href: 'Contact' },
    { name: 'team', href: 'team' },
    { name: 'services', href: 'services' },
    { name: 'Other pages', href: '#' }
  ];

  const projects = [
    'Interior design studio',
    'Home Security Camera',
    'Kemia Honest Skincare',
    'Cascode of Lava',
    'Air Pro by Molekule',
    'Tony\'s Chocolonely'
  ];

  const usefulLinks = [
    'Privacy Policy',
    'Terms and conditions',
    'Cookie Policy',
    'Careers'
  ];
  

  const toggleNavbar = () => setIsOpen(!isOpen);

  // منع scroll عند فتح القائمة
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <div className="fixed z-50"> 
      {/* Navbar العلوية - في المنتصف */}
      <div className="fixed top-0 w-full flex justify-center items-center px-6 py-4 bg-transparent z-50">
        <div className="flex items-center gap-8 container mx-auto w-[80%] justify-between">
          <Buttonanimated/>
          <button
            onClick={toggleNavbar}
            className="w-12 h-12 flex items-center justify-center focus:outline-none text-[#ff9800]"
            style={{ background: 'none', border: 'none', margin: 0 }} 
          >
            <div className="relative w-8 h-8">
              <span
                className={`block absolute h-1 w-full bg-current transform transition-all duration-500 ease-in-out ${isOpen ? 'rotate-45 top-1/2 translate-y-[-50%] bg-[#ff9800]' : 'top-0 bg-[#ff9800]'}`}
              />
              <span
                className={`block absolute h-1 w-full bg-current transform transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0' : 'top-1/2 translate-y-[-50%] bg-[#ff9800]'}`}
              />
              <span
                className={`block absolute h-1 w-full bg-current transform transition-all duration-500 ease-in-out ${isOpen ? '-rotate-45 bottom-1/2 translate-y-[50%] bg-[#ff9800]' : 'bottom-0 bg-[#ff9800]'}`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black  mt-[7rem] md:mt-[0rem] text-white transition-all duration-700 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: isOpen ? 'float 25s ease-in-out infinite' : 'none'
          }}
        />

        <div className="flex items-center justify-center min-h-screen p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl w-full">

            <div className="space-y-8">
              <nav className="space-y-6">
                {mainNavItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={toggleNavbar}
                    className={`block text-3xl lg:text-4xl font-light transform transition-all duration-700 ease-out hover:text-orange-400 hover:translate-x-2 ${item.active ? 'text-orange-500' : 'text-gray-300'} ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-5 opacity-0 scale-95'}`}
                    style={{ transitionDelay: isOpen ? `${index * 150}ms` : '0ms' }}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-8">Projects</h3>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`block text-gray-400 hover:text-gray-200 text-sm transform transition-all duration-700 ease-out hover:translate-x-1 ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-3 opacity-0 scale-95'}`}
                    style={{ transitionDelay: isOpen ? `${200 + index * 70}ms` : '0ms' }}
                  >
                    {project}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-8">Useful links</h3>
              <div className="space-y-4">
                {usefulLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`block text-gray-400 hover:text-gray-200 text-sm transform transition-all duration-700 ease-out hover:translate-x-1 ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-3 opacity-0 scale-95'}`}
                    style={{ transitionDelay: isOpen ? `${300 + index * 70}ms` : '0ms' }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(0.2deg); }
        }
      `}</style>
    </div>
  );
}
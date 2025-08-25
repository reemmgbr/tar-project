import React, { useState, useEffect } from 'react';
import Buttonanimated from '../../buttons/Buttonanimated/Buttonanimated';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const mainNavItems = [
    { name: 'Homepage', href: '/', active: true },
    { name: 'contact', href: 'Contact' },
    { name: 'team', href: 'team' },
    { name: 'services', href: 'services' },
    { name: 'blog ', href: 'Portfolio' }
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

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    
    if (isOpen) {
      const scrollY = window.scrollY;
      
      if (isMobile) {
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.position = 'fixed';
        document.documentElement.style.width = '100%';
        document.documentElement.style.height = '100%';
        
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';
        document.body.style.height = '100%';
      } else {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
      }
    } else {
      const scrollY = document.body.style.top;
      
      document.documentElement.style.overflow = '';
      document.documentElement.style.position = '';
      document.documentElement.style.width = '';
      document.documentElement.style.height = '';
      
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.height = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Global styles للتحكم في الـ overflow */}
      <style jsx global>{`
        @media (max-width: 768px) {
          html, body {
            max-width: 100vw;
            overflow-x: hidden;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(0.2deg); }
        }
      `}</style>

      <div className="fixed z-50"> 
        {/* Navbar العلوية */}
        <div 
          className={`fixed top-0 w-full flex justify-center items-center px-6 py-4 z-50 transition-all duration-500 ease-in-out ${
            isScrolled 
              ? 'bg-black/95 backdrop-blur-md shadow-lg' 
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center gap-8 container mx-auto w-[80%] justify-between">
            <Buttonanimated/>
            <button
              onClick={toggleNavbar}
              className="w-12 h-12 flex items-center justify-center focus:outline-none text-[#ff9800] relative z-[60]"
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

        {/* Fullscreen Menu */}
        <div
          className={`fixed inset-0 bg-black text-white transition-all duration-700 ease-in-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
          style={{
            transform: isOpen ? 'translateX(0%)' : 'translateX(100%)',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: 40
          }}
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

          <div className="flex items-center justify-center min-h-screen p-8 pt-24 md:pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl w-full">

              <div className="space-y-8">
                <nav className="space-y-6">
                  {mainNavItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      onClick={toggleNavbar}
                      className={`block text-2xl md:text-3xl lg:text-4xl font-light transition-all duration-700 ease-out hover:text-orange-400 hover:translate-x-2 ${
                        item.active ? 'text-orange-500' : 'text-gray-300'
                      } ${
                        isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-5 opacity-0 scale-95'
                      }`}
                      style={{ 
                        transitionDelay: isOpen ? `${index * 150}ms` : '0ms',
                        transform: isOpen ? 'translateY(0px) scale(1)' : 'translateY(20px) scale(0.95)'
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-6 md:mb-8">Projects</h3>
                <div className="space-y-3 md:space-y-4">
                  {projects.map((project, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`block text-gray-400 hover:text-gray-200 text-sm transition-all duration-700 ease-out hover:translate-x-1 ${
                        isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-3 opacity-0 scale-95'
                      }`}
                      style={{ 
                        transitionDelay: isOpen ? `${200 + index * 70}ms` : '0ms',
                        transform: isOpen ? 'translateY(0px) scale(1)' : 'translateY(12px) scale(0.95)'
                      }}
                    >
                      {project}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-6 md:mb-8">Useful links</h3>
                <div className="space-y-3 md:space-y-4">
                  {usefulLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`block text-gray-400 hover:text-gray-200 text-sm transition-all duration-700 ease-out hover:translate-x-1 ${
                        isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-3 opacity-0 scale-95'
                      }`}
                      style={{ 
                        transitionDelay: isOpen ? `${300 + index * 70}ms` : '0ms',
                        transform: isOpen ? 'translateY(0px) scale(1)' : 'translateY(12px) scale(0.95)'
                      }}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
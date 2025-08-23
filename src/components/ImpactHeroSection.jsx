import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ImpactHeroSection() {
  return (
    <div className="bg-[#f2f2f2] flex items-center justify-center px-6 py-24 ">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="opacity-70 text-gray-600 text-sm md:text-base leading-relaxed max-w-md mx-auto">
          Looking to make your mark? We'll help you turn
          <br />
          your project into a success story.
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
            Let's make an{' '}
            <span className="font-extralight text-gray-600">impact</span>
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
            together.{' '}
            <span className="font-extralight text-gray-600">Ready</span>{' '}
            when you are
          </h2>
        </div>

        {/* Contact button */}
        <div className="pt-8">
          <button 
            className="group bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-3 mx-auto"
            onClick={() => {
              // يمكن إضافة وظيفة الاتصال هنا
              console.log('Contact button clicked');
            }}
          >
            CONTACT US
            <div className="bg-black rounded-full p-2 group-hover:rotate-12 transition-transform duration-300">
              <ArrowRight size={12} className="text-white" />
            </div>
          </button>
        </div>

        {/* Floating scroll indicator */}
        <div className="fixed bottom-8 right-8">
          <div className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
            <div className="w-6 h-6 flex flex-col items-center justify-center space-y-1">
              <div className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-gray-600 transition-colors"></div>
              <div className="w-1 h-2 bg-gray-400 rounded-full group-hover:bg-gray-600 transition-colors"></div>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
}
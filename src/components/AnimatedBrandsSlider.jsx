import React from 'react';

const AnimatedBrandsSlider = () => {
  // البراندات والمنصات اللي بتشتغلي معاها
  const brands = [
    { name: "salla", type: "text", color: "black" },
    { name: "Zid", type: "text", color: "black" },
    { name: "Shopify", type: "text", color: "black" },
    { name: "WordPress", type: "text", color: "black" },
    { name: "WooCommerce", type: "text", color: "black" },
    { name: "Magento", type: "text", color: "black" },
    { name: "PrestaShop", type: "text", color: "black" },
    { name: "OpenCart", type: "text", color: "black" },
    { name: "BigCommerce", type: "text", color: "black" },
    { name: "Wix", type: "text", color: "black" },
    { name: "Squarespace", type: "text", color: "black" },
    { name: "Webflow", type: "text", color: "black" }
  ];

  const BrandCard = ({ brand }) => {
    const colorClasses = {
      black: "text-black",
    
    };

    return (
      <div className="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-40">
        <div className={`text-2xl font-bold ${colorClasses[brand.color]}  cursor-pointer px-4 py-2 r`}>
          {brand.name}
        </div>
      </div>
    );
  };

  return (
    <div className=" bg-[#f2f2f2] flex flex-col justify-center">
    

      {/* Slider Container */}
      <div className="overflow-hidden py-8">
        {/* First Slider - Moving Right */}
        <div className="relative mb-8">
          <div className="flex animate-scroll-right">
            {[...brands, ...brands].map((brand, index) => (
              <BrandCard key={`right-${index}`} brand={brand} />
            ))}
          </div>
        </div>

        {/* Second Slider - Moving Left */}
        <div className="relative">
          <div className="flex animate-scroll-left">
            {[...brands.reverse(), ...brands].map((brand, index) => (
              <BrandCard key={`left-${index}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
          width: 200%;
        }

        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
          width: 200%;
        }

        /* Pause animation on hover */
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBrandsSlider;
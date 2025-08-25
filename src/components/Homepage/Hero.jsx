import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useMotionValue, useSpring, useScroll, useTransform, useViewportScroll } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  
  const controls = useAnimation();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const { scrollY } = useViewportScroll();

  const leftShapeScale = useTransform(scrollY, 
    (value) => 1 + Math.sin(value * 0.005) * 0.5 + (value * 0.0008)
  );
  const rightShapeScale = useTransform(scrollY, 
    (value) => 1 + Math.cos(value * 0.006) * 0.4 + (value * 0.0006)
  );
  const bottomShapeScale = useTransform(scrollY, 
    (value) => 1 + Math.sin(value * 0.004) * 0.6 + (value * 0.001)
  );
  const starsScale = useTransform(scrollY, 
    (value) => 1 + Math.cos(value * 0.007) * 0.8 + (value * 0.0012)
  );
  
  const leftRotation = useTransform(scrollY, (value) => value * 0.3);
  const rightRotation = useTransform(scrollY, (value) => -value * 0.25);
  const bottomRotation = useTransform(scrollY, (value) => value * 0.2);

  const shapeOpacity = useTransform(scrollY, 
    (value) => Math.max(0.4, 1 - (value * 0.0003))
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        setMousePosition({ x, y });
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const scrollIndicatorVariants = {
    initial: { opacity: 0, x: 50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 2
      }
    }
  };

  const pulseVariants = {
    initial: { opacity: 0.3 },
    animate: {
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (

    <motion.div 
      ref={containerRef}
      className="min-h-screen bg-black text-white relative overflow-hidden pt-[80px] sm:pt-[100px] md:pt-[120px] "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Complex Geometric SVG Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <svg
          ref={svgRef}
          className="w-full h-full"
          viewBox="0 0 1920 1080"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
            </linearGradient>
            
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Left side complex geometric structure */}
          <motion.g 
            className="transform-gpu"
            style={{
              x: useTransform(scrollY, (value) => springX.get() * 20 + Math.sin(value * 0.01) * 10),
              y: useTransform(scrollY, (value) => springY.get() * 10 + Math.cos(value * 0.008) * 8),
              scale: leftShapeScale,
              rotate: leftRotation,
              opacity: shapeOpacity
            }}
          >
            {/* Main left cube structure */}
            <motion.path
              d="M 50 200 L 150 150 L 250 200 L 250 350 L 150 400 L 50 350 Z"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                opacity: [0.2, 1, 0.2]
              }}
              transition={{ 
                pathLength: { duration: 3, delay: 1 },
                opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* Connecting lines from main cube */}
            <motion.path
              d="M 50 200 L 20 100 L 120 50 L 150 150"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
              strokeDasharray="5,3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            />
            
            <motion.path
              d="M 150 150 L 180 80 L 280 130 L 250 200"
              fill="none"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1"
              strokeDasharray="5,3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 2 }}
            />
            
            {/* Additional geometric shapes */}
            <motion.polygon
              points="20,100 70,70 120,100 120,160 70,190 20,160"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 2.5 }}
            />
            
            <motion.polygon
              points="180,80 230,50 280,80 280,140 230,170 180,140"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 3 }}
            />
            
            {/* Lower extensions */}
            <motion.path
              d="M 50 350 L 20 450 L 120 500 L 150 400"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 3.5 }}
            />
            
            <motion.path
              d="M 250 350 L 320 420 L 380 380 L 250 300"
              fill="none"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 4 }}
            />
          </motion.g>

          {/* Right side complex geometric structure */}
          <motion.g 
            className="transform-gpu"
            style={{
              x: useTransform(scrollY, (value) => springX.get() * -15 + Math.cos(value * 0.009) * 12),
              y: useTransform(scrollY, (value) => springY.get() * 15 + Math.sin(value * 0.007) * 10),
              scale: rightShapeScale,
              rotate: rightRotation,
              opacity: shapeOpacity
            }}
          >
            {/* Main right geometric structure */}
            <motion.path
              d="M 1670 200 L 1570 150 L 1470 200 L 1470 350 L 1570 400 L 1670 350 Z"
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                opacity: [0.18, 0.8, 0.18]
              }}
              transition={{ 
                pathLength: { duration: 3, delay: 1.2 },
                opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* Complex connecting network */}
            <motion.path
              d="M 1670 200 L 1750 120 L 1820 170 L 1770 250 L 1670 350"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, delay: 2 }}
            />
            
            <motion.path
              d="M 1570 150 L 1600 80 L 1700 60 L 1750 120"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
              strokeDasharray="3,2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 2.5 }}
            />
            
            {/* Additional right side shapes */}
            <motion.polygon
              points="1750,120 1800,90 1850,120 1850,180 1800,210 1750,180"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 3 }}
            />
            
            <motion.polygon
              points="1470,200 1420,170 1370,200 1370,260 1420,290 1470,260"
              fill="none"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 3.5 }}
            />
            
            {/* Lower right extensions */}
            <motion.path
              d="M 1670 350 L 1720 450 L 1800 420 L 1750 320"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 4 }}
            />
            
            <motion.path
              d="M 1470 350 L 1400 420 L 1350 380 L 1420 300"
              fill="none"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 4.5 }}
            />
          </motion.g>

          {/* Bottom center geometric structure */}
          <motion.g 
            className="transform-gpu"
            style={{
              x: useTransform(scrollY, (value) => springX.get() * 10 + Math.sin(value * 0.006) * 15),
              y: useTransform(scrollY, (value) => springY.get() * -10 + Math.cos(value * 0.005) * 12),
              scale: bottomShapeScale,
              rotate: bottomRotation,
              opacity: shapeOpacity
            }}
          >
            {/* Central bottom structure */}
            <motion.path
              d="M 860 700 L 960 650 L 1060 700 L 1060 850 L 960 900 L 860 850 Z"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                opacity: [0.06, 0.3, 0.06]
              }}
              transition={{ 
                pathLength: { duration: 3, delay: 1.5 },
                opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* Connecting network lines */}
            <motion.path
              d="M 860 700 L 800 600 L 900 550 L 960 650"
              fill="none"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
              strokeDasharray="4,2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 2.5 }}
            />
            
            <motion.path
              d="M 1060 700 L 1120 600 L 1020 550 L 960 650"
              fill="none"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
              strokeDasharray="4,2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 3 }}
            />
            
            {/* Additional bottom shapes */}
            <motion.polygon
              points="800,600 850,570 900,600 900,660 850,690 800,660"
              fill="none"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 3.5 }}
            />
            
            <motion.polygon
              points="1020,550 1070,520 1120,550 1120,610 1070,640 1020,610"
              fill="none"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 4 }}
            />
          </motion.g>

          {/* Animated Stars */}
          <motion.g
            style={{
              scale: starsScale,
              opacity: shapeOpacity,
              rotate: useTransform(scrollY, (value) => value * 0.1)
            }}
          >
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * Math.PI / 180;
            const radius = 300 + i * 50;
            const x = 960 + Math.cos(angle) * radius;
            const y = 540 + Math.sin(angle) * radius * 0.6;
            
            return (
              <motion.g key={i}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r="2"
                  fill="rgba(255, 255, 255, 0.26)"
                  animate={{ 
                    opacity: [0.26, 1, 0.26], 
                    scale: [0.5, 2, 0.5],
                    x: mousePosition.x * (10 + i * 2),
                    y: mousePosition.y * (5 + i)
                  }}
                  style={{
                    scale: useTransform(scrollY, (value) => 1 + Math.sin(value * 0.01 + i) * 0.5)
                  }}
                  transition={{ 
                    opacity: { duration: 2 + i * 0.2, repeat: Infinity },
                    scale: { duration: 2 + i * 0.2, repeat: Infinity },
                    x: { duration: 0.3 },
                    y: { duration: 0.3 }
                  }}
                />
                
                {/* Connect nodes with lines */}
                {i < 11 && (
                  <motion.line
                    x1={x}
                    y1={y}
                    x2={960 + Math.cos(((i + 1) * 30) * Math.PI / 180) * (300 + (i + 1) * 50)}
                    y2={540 + Math.sin(((i + 1) * 30) * Math.PI / 180) * (300 + (i + 1) * 50) * 0.6}
                    stroke="rgba(255,255,255,0.02)"
                    strokeWidth="1"
                    strokeDasharray="2,1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 2 + i * 0.2 }}
                  />
                )}
              </motion.g>
            );
          })}
          </motion.g>

          {/* Central connecting lines */}
          {/* Central connecting lines */}
          <motion.g
            style={{
              opacity: shapeOpacity,
              scale: useTransform(scrollY, (value) => 1 + Math.sin(value * 0.003) * 0.3)
            }}
          >
          <motion.line
            x1="250" y1="275"
            x2="1470" y2="275"
            stroke="rgba(255,255,255,0.02)"
            strokeWidth="1"
            strokeDasharray="10,5"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: 1,
              opacity: [0.02, 0.1, 0.02]
            }}
            transition={{ 
              pathLength: { duration: 4, delay: 5 },
              opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          <motion.line
            x1="150" y1="400"
            x2="860" y2="775"
            stroke="rgba(255,255,255,0.02)"
            strokeWidth="1"
            strokeDasharray="8,4"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: 1,
              opacity: [0.02, 0.08, 0.02]
            }}
            transition={{ 
              pathLength: { duration: 3.5, delay: 5.5 },
              opacity: { duration: 7, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          <motion.line
            x1="1570" y1="400"
            x2="1060" y2="775"
            stroke="rgba(255,255,255,0.02)"
            strokeWidth="1"
            strokeDasharray="8,4"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: 1,
              opacity: [0.02, 0.08, 0.02]
            }}
            transition={{ 
              pathLength: { duration: 3.5, delay: 6 },
              opacity: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
          />
          </motion.g>
        </svg>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 right-8 flex flex-col items-center"
        variants={scrollIndicatorVariants}
        initial="initial"
        animate="animate"
      >
      
       
      </motion.div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-start justify-center min-h-screen container mx-auto px-6 py-12 lg:text-left text-center">
        <motion.div variants={containerVariants}>
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl lg:text-8xl font-light leading-tight mb-8"
            variants={textVariants}
          >
            <motion.span 
              className="text-white font-bold"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Designing
            </motion.span>{" "}
            <motion.span 
              className="text-gray-400 font-light"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              a Better
            </motion.span>
            {window.innerWidth<768?" ": < br />}
            <motion.span 
              className="text-white font-bold"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              World
            </motion.span>{" "}
            <motion.span 
              className="text-gray-400 font-light"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Today
            </motion.span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-gray-500 text-lg lg:text-xl max-w-2xl mb-12 leading-relaxed"
            variants={textVariants}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Welcome to our world of endless imagination and boundless
            creativity. Together, let's embark on a remarkable journey where
            dreams become tangible realities.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap:0 md:gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {/* Orange Button */}
            <motion.button 
              className="bg-orange-500 text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 justify-center"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial="hidden"
              animate="visible"
            >
              WHAT WE DO
              <motion.svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </motion.button>
            
            {/* Transparent Button */}
            <motion.button 
              className="border-2 border-gray-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2"
              variants={buttonVariants}
              whileHover={{
                ...buttonVariants.hover,
                borderColor: "#ffffff"
              }}
              whileTap="tap"
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              VIEW WORKS
              <motion.svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </main>
      
    </motion.div>
    
  );
};

export default Hero;
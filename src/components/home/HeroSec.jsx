// src/components/Hero.jsx
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FiArrowRight, FiZap } from "react-icons/fi";
import { Link } from "react-router-dom";
import abt from "../../assets/hero.png";

const Hero = () => {
  const controls = useAnimation();
  // Motion-wrapped Link
  const MotionLink = motion(Link);

  useEffect(() => {
    // Animate main floating scale in a loop
    const sequence = async () => {
      await controls.start({ opacity: 1, y: 0 }, { duration: 0.8 });
      await controls.start({
        scale: [1, 1.05, 1],
        transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
      });
    };
    sequence();
  }, [controls]);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden px-6 sm:px-12 lg:px-24">
      {/* Animated background orbs with soft glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600 mix-blend-screen filter blur-3xl opacity-30 animate-float1"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-red-600 mix-blend-screen filter blur-3xl opacity-30 animate-float2"></div>
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-80 h-80 rounded-full bg-green-600 mix-blend-screen filter blur-3xl opacity-30 animate-float3"></div>

        {/* Circuit-like subtle pattern overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 800 600"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="800" height="600" fill="url(#grid)" />
        </svg>
      </div>

      <div className="w-full max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center relative z-20 py-28 md:py-32 lg:py-20">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 max-w-xl"
        >
          {/* Premium badge with glowing effect */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-semibold mb-8 shadow-lg select-none"
          >
            <FiZap className="mr-3 text-lg" />
            Premium Power Solutions
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1 }}
            className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-white mb-8 relative max-w-3xl"
          >
            Uninterrupted{" "}
            <span className="text-red-400 relative z-10">
              Power
              {/* soft glowing behind the word */}
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 blur-lg opacity-50"
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              />
            </span>{" "}
            {/* <br /> */}
            For Your{" "}
            <span className="text-blue-300 relative z-10">
              Business & Homes
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-lg mb-12"
          >
            Premium UPS systems, inverters, and solar solutions from leading
            brands to keep your operations running 24/7.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <MotionLink
              to="/contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px -8px rgba(239, 68, 68, 0.5)",
              }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center bg-red-600 hover:bg-red-700 focus-visible:ring-4 focus-visible:ring-red-500 focus:outline-none text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition"
            >
              Get Free Consultation
              <FiArrowRight className="ml-3 text-xl" />
            </MotionLink>

            <MotionLink
              to="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="border-2 border-white/30 hover:border-white/70 text-white px-8 py-4 rounded-lg font-bold text-lg transition hover:bg-white/10"
            >
              Explore Products
            </MotionLink>
          </motion.div>
        </motion.div>

        {/* Right content: Hero image + glowing frame + floating indicators */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
          className="w-full md:w-1/2 mt-10 md:mt-0 relative flex justify-center"
        >
          {/* Glowing border container */}
          <div className="relative rounded-xl overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl shadow-[0_0_40px_15px_rgba(59,130,246,0.35)] -z-10"
            />
            {/* Hero image */}
            <div
              style={{
                backgroundImage: `url(${abt})`,
                // backgroundImage: "url('/ups-device.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center bottom",
              }}
              className="w-[90vw] max-w-[480px] h-[55vw] max-h-[400px]"
            />
          </div>

          {/* Floating Battery Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="absolute right-[8%] md:right-[5%] top-[5%] md:top-[10%] w-12 h-12 md:w-16 md:h-16 bg-green-500/25 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-green-400/50 shadow-lg"
          >
            <div className="text-green-400 font-bold text-[10px] md:text-xs select-none">
              100%
            </div>
          </motion.div>

          {/* Floating 24/7 Indicator */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              opacity: [0.7, 1, 0.7],
              rotate: [0, 4, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="absolute left-[8%] md:right-[84%] top-[60%] md:top-[54%] w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-blue-400/50 shadow-lg"
          >
            <div className="text-blue-400 font-bold text-[10px] md:text-xs select-none">
              24/7
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce flex flex-col items-center select-none">
          <div className="text-white text-sm mb-1 font-mono tracking-widest opacity-80">
            Scroll Down
          </div>
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center relative">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                ease: "easeInOut",
              }}
              className="w-1.5 h-3 rounded-full bg-white absolute top-3"
            />
          </div>
        </div>
      </motion.div>

      {/* Animation keyframe styles */}
      <style jsx global>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-18px, -18px) rotate(1deg);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(15px, -15px) rotate(-1deg);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(15px, 15px) rotate(2deg);
          }
        }
        .animate-float1 {
          animation: float1 11s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 13s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 14s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;

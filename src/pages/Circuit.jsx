// src/components/AboutPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiZap, FiUsers } from "react-icons/fi"; // Using react-icons for values
import CircuitPower3D from "../components/CircuitPower3D";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Slightly faster stagger for overall flow
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 }, // Increased y for a more pronounced slide-up
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7, // Slightly longer duration for smoothness
      ease: "easeOut",
    },
  },
};

const CircuitPage = () => {
  return (
    <div className="bg-white min-h-screen text-neutral-800">
      {/* Page Hero/Banner - Kept Dark for Impact */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 z-0 opacity-80">
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-900/30 to-red-900/20"></div>

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-amber-600/10 to-yellow-500/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-orange-600/10 to-red-500/10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Enhanced SVG background with multiple elements */}
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 800"
          >
            <defs>
              <linearGradient
                id="gradient-line-inverter"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#f97316" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8" />
              </linearGradient>

              {/* Inverter pattern with energy elements */}
              <pattern
                id="inverter-pattern"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(0)"
              >
                <rect
                  width="15"
                  height="25"
                  x="17.5"
                  y="12.5"
                  fill="none"
                  stroke="rgba(255,255,255,0.03)"
                  strokeWidth="1"
                />
                <circle
                  cx="25"
                  cy="25"
                  r="3"
                  fill="none"
                  stroke="rgba(255,255,255,0.02)"
                  strokeWidth="1"
                />
                <path
                  d="M15 15L35 35M35 15L15 35"
                  stroke="rgba(255,255,255,0.02)"
                  strokeWidth="1"
                />
                <path
                  d="M25 10L25 40M10 25L40 25"
                  stroke="rgba(255,255,255,0.02)"
                  strokeWidth="0.5"
                />
              </pattern>

              <pattern
                id="grid-pattern"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(30)"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>

            {/* Multiple animated paths for depth */}
            <path
              d="M0 400 Q200 300 400 400 T800 400 Q1000 500 1200 400"
              stroke="url(#gradient-line-inverter)"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
            >
              <animate
                attributeName="d"
                values="M0 400 Q200 300 400 400 T800 400 Q1000 500 1200 400;M0 400 Q200 500 400 400 T800 400 Q1000 300 1200 400;M0 400 Q200 300 400 400 T800 400 Q1000 500 1200 400"
                dur="15s"
                repeatCount="indefinite"
              />
            </path>

            <path
              d="M0 300 Q400 250 600 350 T1200 300"
              stroke="url(#gradient-line-inverter)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.3"
            >
              <animate
                attributeName="d"
                values="M0 300 Q400 250 600 350 T1200 300;M0 300 Q400 350 600 250 T1200 300;M0 300 Q400 250 600 350 T1200 300"
                dur="18s"
                repeatCount="indefinite"
              />
            </path>

            <path
              d="M0 500 Q400 450 600 550 T1200 500"
              stroke="url(#gradient-line-inverter)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.3"
            >
              <animate
                attributeName="d"
                values="M0 500 Q400 450 600 550 T1200 500;M0 500 Q400 550 600 450 T1200 500;M0 500 Q400 450 600 550 T1200 500"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>

            {/* Combined patterns for visual interest */}
            <rect
              width="100%"
              height="100%"
              fill="url(#grid-pattern)"
              opacity="0.6"
            />
            <rect
              width="100%"
              height="100%"
              fill="url(#inverter-pattern)"
              opacity="0.4"
            />

            {/* Floating inverter icons (energy, power, circuit) */}
            {[
              // Battery icon
              "M4 7h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2zm-1 2v2h14V9H3z",
              // Lightning bolt icon
              "M13 2H7L2 12h5l-1 8 8-12h-5l1-6z",
              // Power icon
              "M13 5.5A5.5 5.5 0 107.5 11a.75.75 0 011.5 0 4 4 0 114-4 .75.75 0 010-1.5 5.5 5.5 0 000-11z",
            ].map((d, i) => (
              <path
                key={i}
                d={d}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
                fill="none"
                transform={`translate(${Math.random() * 1000 + 100}, ${
                  Math.random() * 600 + 100
                }) scale(0.8)`}
              >
                <animate
                  attributeName="opacity"
                  values="0.05;0.15;0.05"
                  dur={`${8 + Math.random() * 7}s`}
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  values={`0 ${Math.random() * 1000 + 100} ${
                    Math.random() * 600 + 100
                  }; 5 ${Math.random() * 1000 + 100} ${
                    Math.random() * 600 + 100
                  }; 0 ${Math.random() * 1000 + 100} ${
                    Math.random() * 600 + 100
                  }`}
                  dur={`${15 + Math.random() * 10}s`}
                  repeatCount="indefinite"
                />
              </path>
            ))}

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => {
              const size = Math.random() * 4 + 1;
              return (
                <circle
                  key={i}
                  cx={Math.random() * 1200}
                  cy={Math.random() * 800}
                  r={size}
                  fill="white"
                  opacity="0.05"
                >
                  <animate
                    attributeName="cx"
                    values={`${Math.random() * 1200};${Math.random() * 1200}`}
                    dur={`${15 + Math.random() * 15}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values={`${Math.random() * 800};${Math.random() * 800}`}
                    dur={`${20 + Math.random() * 10}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.05;0.2;0.05"
                    dur={`${5 + Math.random() * 5}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}
          </svg>

          {/* Subtle noise texture for premium feel */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1MDAnIGhlaWdodD0nNTAwJz4KICA8ZmlsdGVyIGlkPSduYWlzZScgeD0nMCcgeT0nMCc+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9J2ZyYWN0YWxOb2lzZScgYmFzZUZyZXF1ZW5jeT0nMC43JyBudW1PY3RhdmVzPSc0JyBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8+CiAgICA8ZmVDb2xvck1hdHJpeCB0eXBl9yc2F0dXJhdGUnIHZhbHVlcz0nMCcvPgogIDwvZmlsdGVyPgogIDxyZWN0IHdpZHRoPSc1MDAnIGhlaWdodD0nNTAwJyBmaWx0ZXI9J3VybCgjbmlzZSknIG9wYWNpdHk9JzAuMDInLz4KPC9zdmc+')] opacity-10 mix-blend-soft-light"></div>
        </div>

        {/* Corner decorative elements */}
        <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-amber-300/20"></div>
        <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-amber-300/20"></div>
        <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-amber-300/20"></div>
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-amber-300/20"></div>

        {/* Animated energy flow line */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
          initial={{ top: "0%" }}
          animate={{ top: "100%" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />

        {/* Pulsing energy indicators */}
        {[20, 50, 80].map((position) => (
          <motion.div
            key={position}
            className="absolute w-3 h-3 bg-amber-400 rounded-full"
            style={{
              left: `${position}%`,
              top: "30%",
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: position / 50,
            }}
          />
        ))}

        <div className="relative z-10 text-center px-6 text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Inverter{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-400">
              Power
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-amber-100 max-w-2xl mx-auto font-medium"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Reliable backup power solutions for uninterrupted energy supply
          </motion.p>

          {/* Animated energy indicator */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.div
              className="flex justify-center items-center space-x-2 text-amber-300"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Discover Power Solutions</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CircuitPower3D />
    </div>
  );
};

export default CircuitPage;

// src/components/BrandsPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const brands = [
  {
    id: 1,
    name: "APC",
    logo: "https://www.apc.com/us/en/assets/v2/671/media/202248/APC_logo_header.svg",
    description:
      "A global leader in power protection and critical power management.",
  },
  {
    id: 2,
    name: "Luminous",
    logo: "https://lumprodsta.blob.core.windows.net/prodcontainer/assets/icons/LuminousLogoBlue.webp",
    description: "India's leading brand in power backup and home electricals.",
  },
  {
    id: 3,
    name: "Amaze",
    logo: "https://www.amaze-india.com/images/amaze-logo.png",
    description: "Known for powerful and reliable inverters and batteries.",
  },
  {
    id: 4,
    name: "Microtek",
    logo: "https://www.microtek.in/img/logo.svg",
    description:
      "One of the most trusted brands for power backup solutions in India.",
  },
  {
    id: 5,
    name: "Delta",
    logo: "https://www.deltaww.com/images/logo.svg",
    description:
      "A world-class provider of energy management and automation solutions.",
  },
  {
    id: 6,
    name: "Exide",
    logo: "https://docs.exideindustries.com/images/logo.png",
    description:
      "India’s largest manufacturer of automotive and industrial batteries.",
  },
  {
    id: 7,
    name: "Frontech",
    logo: "https://frontechonline.com/cdn/shop/files/Frontech_Logo_without_bg.png?v=1709901774&width=150",
    description:
      "A pioneer in ups and power solutions for home and industrial use.",
  },
  // {
  //   id: 8,
  //   name: "SF Sonic",
  //   logo: "/brands/sf-sonic-logo.png",
  //   description:
  //     "Known for its durable and high-performance batteries for all needs.",
  // },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const BrandsPage = () => {
  return (
    <div className="bg-white min-h-screen text-neutral-800">
      {/* Page Hero/Banner */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 z-0 opacity-80">
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-blue-900/30 to-emerald-900/20"></div>

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-amber-600/10 to-orange-500/10 blur-3xl"
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
            className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-600/10 to-emerald-400/10 blur-3xl"
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
                id="gradient-line-hero"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
              </linearGradient>

              {/* Brand pattern with checkmarks */}
              <pattern
                id="brand-pattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(0)"
              >
                <path
                  d="M10 20L17 27L30 14"
                  fill="none"
                  stroke="rgba(255,255,255,0.03)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="8"
                  fill="none"
                  stroke="rgba(255,255,255,0.02)"
                  strokeWidth="1"
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
              stroke="url(#gradient-line-hero)"
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
              stroke="url(#gradient-line-hero)"
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
              stroke="url(#gradient-line-hero)"
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
              fill="url(#brand-pattern)"
              opacity="0.4"
            />

            {/* Floating brand icons (shield, checkmark, star) */}
            {[
              "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
              "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
            ].map((d, i) => (
              <path
                key={i}
                d={d}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
                fill="none"
                transform={`translate(${Math.random() * 1000 + 100}, ${
                  Math.random() * 600 + 100
                }) scale(0.7)`}
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
        <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/20"></div>
        <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/20"></div>
        <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-white/20"></div>
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-white/20"></div>

        {/* Animated trust line */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
          initial={{ top: "0%" }}
          animate={{ top: "100%" }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />

        {/* Pulsing trust indicators */}
        {[20, 50, 80].map((position) => (
          <motion.div
            key={position}
            className="absolute w-3 h-3 bg-emerald-400 rounded-full"
            style={{
              left: `${position}%`,
              top: "30%",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
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
            Brands We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">
              Trust
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Partnering with the world's most reliable names in power solutions.
          </motion.p>

          {/* Animated trust indicator */}
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
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Trusted partnerships</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Brand Section */}
      <motion.section
        className="py-24 px-6 sm:px-12 lg:px-24 xl:px-40 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            className="text-4xl font-extrabold text-neutral-900 mb-12"
            variants={itemVariants}
          >
            Featured Partnership
          </motion.h2>
          <motion.div
            className="bg-gray-800 text-white rounded-3xl shadow-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12"
            variants={itemVariants}
          >
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src="https://www.apc.com/us/en/assets/v2/671/media/202248/APC_logo_header.svg"
                alt="APC logo"
                className="h-24 md:h-32 w-auto object-contain"
              />
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-3">
                APC by Schneider Electric
              </h3>
              <p className="text-gray-300 leading-relaxed">
                As a premier partner, we offer a comprehensive range of APC
                products, from home backup units to enterprise-grade data center
                solutions. APC is recognized globally for its industry-leading
                reliability and innovation, ensuring your critical power needs
                are always met.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mt-6 bg-gray-800 text-white rounded-3xl shadow-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12"
            variants={itemVariants}
          >
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src="https://www.amaze-india.com/images/amaze-logo.png"
                alt="Amaze logo"
                className="h-24 md:h-32 w-auto object-contain"
              />
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-3">Amaze</h3>
              <p className="text-gray-300 leading-relaxed">
                As an authorized partner, we provide a complete range of Amaze
                power solutions designed for homes, offices, and commercial
                applications. From high-performance inverters and batteries,
                Amaze is known for its durability, efficiency, and cutting-edge
                technology. With a strong commitment to quality and reliability,
                Amaze ensures uninterrupted power and long-lasting performance
                for all your energy needs.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content Area - Brands Grid */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8 sm:mb-10 md:mb-12 text-center"
            variants={itemVariants}
          >
            Our Strategic Partners
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {brands.map((brand) => (
              <motion.div
                key={brand.id}
                className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center text-center border border-gray-100"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-16 sm:h-20 w-auto object-contain mb-3 sm:mb-4"
                  loading="lazy"
                />
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-1 sm:mb-2">
                  {brand.name}
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-snug">
                  {brand.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <section className="bg-gray-800 py-20 px-6 sm:px-12 lg:px-24 xl:px-40 text-center text-white">
        <motion.h2
          className="relative z-10 text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Need an Expert Opinion?
        </motion.h2>
        <motion.p
          className="relative z-10 text-lg text-gray-300 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our specialists can guide you through our product offerings to find
          the perfect solution for your needs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/contact">
            {" "}
            {/* Replace with your route */}
            <motion.button
              className="relative z-10 bg-red-600 hover:bg-red-700 focus-visible:ring-4 focus-visible:ring-red-500 focus:outline-none text-white font-bold py-4 px-10 rounded-lg shadow-xl transition transform hover:-translate-y-1"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px -8px rgba(239, 68, 68, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Team
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default BrandsPage;

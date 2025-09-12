// src/components/AboutPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiZap, FiUsers } from "react-icons/fi"; // Using react-icons for values

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

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen text-neutral-800">
      {/* Page Hero/Banner - Kept Dark for Impact */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        {/* Animated background elements - Enhanced */}
        <div className="absolute inset-0 z-0 opacity-80">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-rose-900/20"></div>

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-500/10 blur-3xl"
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
            className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-400/10 blur-3xl"
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

          {/* Animated grid pattern with more depth */}
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
                <stop offset="50%" stopColor="#9333ea" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
              </linearGradient>

              <pattern
                id="hexagon-pattern"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <path
                  d="M30 0L56 15V45L30 60L4 45V15L30 0Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.03)"
                  strokeWidth="1"
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

            {/* Hexagon pattern background */}
            <rect
              width="100%"
              height="100%"
              fill="url(#hexagon-pattern)"
              opacity="0.4"
            />

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

        {/* Animated scanning line effect */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent"
          initial={{ top: "0%" }}
          animate={{ top: "100%" }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />

        <div className="relative z-10 text-center px-6 sm:px-12 lg:px-24">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">
              Journey
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Pioneering reliable and innovative power solutions for a connected
            world.
          </motion.p>

          {/* Animated scroll indicator */}
          {/* <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Main Content Sections - Light Backgrounds */}
      <motion.section
        className="py-24 px-6 sm:px-12 lg:px-24 xl:px-40 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Our Story */}
        <motion.div
          className="container mx-auto max-w-6xl mb-24 md:flex md:items-center md:gap-16 relative"
          variants={itemVariants}
        >
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">
              The Genesis of Uninterrupted Power
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Founded in the bustling city of **Bhubaneswar, Odisha**, our
              journey began with a clear vision: to eradicate power
              interruptions for businesses and homes. We observed the profound
              impact of unreliable power on productivity and daily life,
              inspiring us to establish a company dedicated to **premium power
              solutions**.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              From our humble beginnings, we meticulously built a portfolio of
              the **finest UPS systems, advanced inverters, and cutting-edge
              solar solutions**. Our commitment has always been to **quality,
              innovation, and unparalleled customer service**, transforming us
              into a trusted name in the industry.
            </p>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center items-center">
            <motion.div
              className="w-full max-w-md h-80 rounded-3xl overflow-hidden shadow-2xl relative z-10"
              initial={{ scale: 0.9, rotate: -3 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <img
                src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Modern office setup with technology, symbolizing innovation and growth"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000" />
          </div>
        </motion.div>

        {/* Decorative Divider */}
        <div className="relative my-20">
          <svg className="w-full h-8 text-blue-100" viewBox="0 0 100 10">
            <path
              d="M0 5 C 25 10, 75 0, 100 5 L 100 10 L 0 10 Z"
              fill="currentColor"
            />
          </svg>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(to right, #ef4444, #60a5fa)",
              height: "2px",
              borderRadius: "9999px",
            }}
          />
        </div>

        {/* Our Mission */}
        <motion.div
          className="container mx-auto max-w-6xl mb-24 md:flex md:items-center md:flex-row-reverse md:gap-16 relative"
          variants={itemVariants}
        >
          {/* Decorative element */}
          <div className="absolute top-1/4 right-0 w-28 h-28 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">
              Our Core Mission: Powering Progress
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Our unwavering mission is to **empower businesses and
              individuals** with seamless power, fostering an environment where
              innovation thrives and operations never cease. We are dedicated to
              delivering not just products, but **complete peace of mind**
              through reliable energy solutions.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              We meticulously select our offerings from **globally recognized
              brands** and provide tailored consultation to ensure every client
              receives the optimal solution. Our commitment extends beyond
              sales, encompassing **comprehensive support and service** to
              guarantee consistent performance.
            </p>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center items-center">
            <motion.div
              className="w-full max-w-md h-80 rounded-3xl overflow-hidden shadow-2xl relative z-10"
              initial={{ scale: 0.9, rotate: 3 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="People collaborating in a modern setting, symbolizing teamwork and mission"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-6000" />
          </div>
        </motion.div>
      </motion.section>

      {/* Our Values - Slightly different light background */}
      <motion.section
        className="py-24 px-6 sm:px-12 lg:px-24 xl:px-40 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Background Circles */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float1" />
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float2" />

        <h2 className="text-4xl font-extrabold text-neutral-900 mb-16 text-center">
          Guiding Principles That Drive Us
        </h2>
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <motion.div
            className="p-8 border border-gray-200 rounded-3xl bg-white shadow-xl flex flex-col items-center transform hover:scale-102 hover:shadow-2xl transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 rounded-full bg-red-500/10 mb-6 flex items-center justify-center">
              <FiZap className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-neutral-900">
              Innovation
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              We constantly explore cutting-edge technologies to bring the most
              efficient and reliable power solutions to you.
            </p>
          </motion.div>
          <motion.div
            className="p-8 border border-gray-200 rounded-3xl bg-white shadow-xl flex flex-col items-center transform hover:scale-102 hover:shadow-2xl transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 rounded-full bg-blue-500/10 mb-6 flex items-center justify-center">
              <FiTarget className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-neutral-900">
              Reliability
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Our products and services are synonymous with steadfast
              performance, ensuring your operations are always on.
            </p>
          </motion.div>
          <motion.div
            className="p-8 border border-gray-200 rounded-3xl bg-white shadow-xl flex flex-col items-center transform hover:scale-102 hover:shadow-2xl transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 rounded-full bg-green-500/10 mb-6 flex items-center justify-center">
              <FiUsers className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-neutral-900">
              Customer Centricity
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              We prioritize your needs, offering personalized solutions and
              dedicated support to guarantee your satisfaction.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section - Darker Accent */}
      <section className="bg-gradient-to-tr from-gray-900 to-gray-800 py-20 px-6 sm:px-12 lg:px-24 xl:px-40 text-center text-white relative overflow-hidden">
        {/* Subtle pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 800 600"
        >
          <defs>
            <pattern
              id="grid-cta"
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
          <rect width="800" height="600" fill="url(#grid-cta)" />
        </svg>

        <motion.h2
          className="relative z-10 text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Experience Uninterrupted Power?
        </motion.h2>
        <motion.p
          className="relative z-10 text-lg text-gray-300 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Partner with us for a brighter, more reliable future. Contact our
          experts today for a tailored consultation.
        </motion.p>
        <motion.button
          className="relative z-10 bg-red-600 hover:bg-red-700 focus-visible:ring-4 focus-visible:ring-red-500 focus:outline-none text-white font-bold py-4 px-10 rounded-lg shadow-xl transition transform hover:-translate-y-1"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 15px 30px -8px rgba(239, 68, 68, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Get a Free Consultation
        </motion.button>
      </section>

      {/* Global styles for blob animations */}
      <style jsx global>{`
        @keyframes blob {
          0%,
          100% {
            transform: scale(1) translate(0px, 0px);
          }
          33% {
            transform: scale(1.1) translate(15px, -15px);
          }
          66% {
            transform: scale(0.9) translate(-10px, 10px);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }

        /* Inherit float animations from Hero component if needed */
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
        .animate-float1 {
          animation: float1 11s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 13s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;

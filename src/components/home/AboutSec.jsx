// src/components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiZap, FiShield, FiUsers } from "react-icons/fi";
import aaa from "../../assets/about-aaa.png";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-18 bg-gray-900 text-white overflow-hidden"
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 bg-repeat opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='#ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="container mx-auto px-6 sm:px-12 lg:px-32 xl:px-52 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Red circle moving */}
            <motion.div
              className="absolute w-12 h-12 bg-red-500 rounded-full opacity-50"
              animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />

            {/* Green circle moving */}
            <motion.div
              className="absolute w-14 h-14 bg-green-500 rounded-full opacity-50"
              animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          {/* Image Column */}
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
            {/* Your image */}
            <motion.div
              className="relative w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <img
                src={aaa}
                alt="Generated Content"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>

          {/* Text Content Column */}
          <div>
            {/* Main Headline */}
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Powered by Vision,
              <br className="hidden md:inline" /> Built on Trust
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-400 font-light mb-10 max-w-3xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              At <span className="text-sky-400 font-bold">AAA UPS</span>, we’re
              revolutionizing power backup & solar solutions in India. With a
              decade of experience, world-class partnerships, and a drive for
              sustainability, we bring reliable energy to homes and
              businesses—backed by integrity, expertise, and genuine care.
            </motion.p>

            {/* Fast facts (cards) */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {/* Fact 1 */}
              <div className="flex items-center gap-5 p-4 rounded-xl transition-all duration-300 hover:bg-gray-800/50 hover:scale-105">
                <div className="bg-gray-800 text-sky-400 p-3 rounded-full">
                  <FiAward className="text-2xl" />
                </div>
                <div>
                  <span className="text-lg font-semibold text-white">
                    10+ Years
                  </span>
                  <p className="text-gray-400 leading-none">
                    industry experience
                  </p>
                </div>
              </div>
              {/* Fact 2 */}
              <div className="flex items-center gap-5 p-4 rounded-xl transition-all duration-300 hover:bg-gray-800/50 hover:scale-105">
                <div className="bg-gray-800 text-sky-400 p-3 rounded-full">
                  <FiShield className="text-2xl" />
                </div>
                <div>
                  <span className="text-lg font-semibold text-white">
                    100% Genuine
                  </span>
                  <p className="text-gray-400 leading-none">
                    brands & components
                  </p>
                </div>
              </div>
              {/* Fact 3 */}
              <div className="flex items-center gap-5 p-4 rounded-xl transition-all duration-300 hover:bg-gray-800/50 hover:scale-105">
                <div className="bg-gray-800 text-sky-400 p-3 rounded-full">
                  <FiZap className="text-2xl" />
                </div>
                <div>
                  <span className="text-lg font-semibold text-white">24x7</span>
                  <p className="text-gray-400 leading-none">Rapid support</p>
                </div>
              </div>
              {/* Fact 4 */}
              <div className="flex items-center gap-5 p-4 rounded-xl transition-all duration-300 hover:bg-gray-800/50 hover:scale-105">
                <div className="bg-gray-800 text-sky-400 p-3 rounded-full">
                  <FiUsers className="text-2xl" />
                </div>
                <div>
                  <span className="text-lg font-semibold text-white">
                    10,000+
                  </span>
                  <p className="text-gray-400 leading-none">
                    projects delivered
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quote */}
        <motion.div
          className="text-center mt-8 md:mt-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <blockquote className="italic text-2xl md:text-3xl text-sky-400 font-extrabold mb-2">
            “Empowering India—one uninterrupted moment at a time.”
          </blockquote>
          <span className="block text-gray-300 font-bold text-lg">
            The AAA UPS Motto
          </span>
        </motion.div>
      </div>
    </section>
  );
}

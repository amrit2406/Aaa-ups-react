// src/components/WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiUsers, FiLink, FiZap, FiArrowRight } from "react-icons/fi";

const reasons = [
  {
    icon: FiAward,
    title: "Certified Quality",
    color: "#2563eb", // Blue
    gradient: "from-blue-500 to-cyan-500",
    description: "Approved by leading industry experts, our UPS, batteries, inverters, and solar products set the bar for reliability and performance.",
  },
  {
    icon: FiUsers,
    title: "Personal Guidance",
    color: "#22c55e", // Green
    gradient: "from-emerald-500 to-green-500",
    description: "From the first advice to beyond the installation, our specialists help you choose exactly what fits your needs.",
  },
  {
    icon: FiLink,
    title: "Direct Brand Partnerships",
    color: "#e50914", // Red
    gradient: "from-red-500 to-rose-500",
    description: "We work hand-in-hand with trusted brands, guaranteeing original products and priority support for every client.",
  },
  {
    icon: FiZap,
    title: "Rapid Service Response",
    color: "#fbbe24", // Gold
    gradient: "from-amber-500 to-yellow-500",
    description: "24/7 hotline, WhatsApp chat, and local engineers mean you're never left powerless. Your uptime is our mission.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white z-0"></div>
      
      {/* Decorative floating elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slower"></div>
      
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Why Customers Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">AAA UPS</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the exceptional qualities that set us apart in the power solutions industry
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group relative"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2"></div>
              
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${item.gradient} rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div className="absolute -inset-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl transform rotate-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white shadow-lg`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative">
                  <span className="absolute -left-8 top-1/2 w-6 h-0.5 bg-gray-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300"></span>
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 font-light">
                  {item.description}
                </p>
                
                {/* <motion.div 
                  className="flex items-center text-blue-600 font-medium cursor-pointer group/button"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="mr-2">Learn more</span>
                  <FiArrowRight className="transition-transform group-hover/button:translate-x-1" />
                </motion.div> */}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats Section */}
        <motion.div 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { number: "5000+", label: "Happy Clients", color: "blue" },
            { number: "20+", label: "Years Experience", color: "green" },
            { number: "98%", label: "Satisfaction Rate", color: "red" },
            { number: "24/7", label: "Support", color: "amber" }
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
              <div className={`text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r ${
                stat.color === "blue" ? "from-blue-600 to-cyan-600" :
                stat.color === "green" ? "from-emerald-600 to-green-600" :
                stat.color === "red" ? "from-red-600 to-rose-600" :
                "from-amber-600 to-yellow-600"
              } bg-clip-text text-transparent`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        
        {/* CTA Section */}
        {/* <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project With Us
          </motion.button>
        </motion.div> */}
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, -20px) rotate(1deg); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(15px, -15px) rotate(-1deg); }
        }
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 18s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
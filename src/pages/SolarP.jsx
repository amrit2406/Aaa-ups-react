import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiZap, FiShield, FiHeadphones, FiAward, FiCheck, FiChevronDown, FiArrowRight, FiUsers, FiTarget, FiHeart } from "react-icons/fi";

const SolarSolutionsPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleFaqToggle = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // FAQ Data
  const faqItems = [
    {
      question: "How long do solar panels last?",
      answer: "Our premium solar panels come with a 25-year performance warranty and can last 30+ years with proper maintenance. We use only tier-1 manufacturers for maximum durability."
    },
    {
      question: "What maintenance do solar systems require?",
      answer: "Solar systems require minimal maintenance. Regular cleaning of panels and annual professional check-ups are recommended. We offer comprehensive maintenance packages."
    },
    {
      question: "How much can I save with solar energy?",
      answer: "Most homeowners see a 70-90% reduction in electricity bills. With net metering, you can even earn credits for excess energy sent back to the grid."
    },
    {
      question: "Do solar panels work during power outages?",
      answer: "Standard grid-tied systems shut down during outages for safety. However, we offer hybrid systems with battery backup that provide power during outages."
    },
    {
      question: "What is the installation process?",
      answer: "Our process includes consultation, site assessment, system design, permitting, installation, inspection, and activation. Most installations are completed within 2-4 weeks."
    }
  ];

  // Products Data
  const solarProducts = [
    {
      id: 1,
      name: "Residential Solar Kit 3kW",
      description: "Complete home solar solution with high-efficiency panels and smart inverter",
      price: 149999,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
      category: "Residential",
      features: ["3kW Output", "10 Panels", "Smart Monitoring", "25-Year Warranty"]
    },
    {
      id: 2,
      name: "Commercial Solar System 10kW",
      description: "Powerful commercial solution for small businesses and offices",
      price: 449999,
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop",
      category: "Commercial",
      features: ["10kW Output", "Grid-Tied", "Remote Monitoring", "High Efficiency"]
    },
    {
      id: 3,
      name: "Solar Water Heater",
      description: "Energy-efficient solar thermal system for water heating",
      price: 34999,
      image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=400&h=300&fit=crop",
      category: "Accessories",
      features: ["80% Energy Savings", "All-Weather Performance", "5-Year Warranty"]
    },
    {
      id: 4,
      name: "Hybrid Solar System 5kW",
      description: "Grid-tied with battery backup for uninterrupted power",
      price: 279999,
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=300&fit=crop",
      category: "Residential",
      features: ["Battery Backup", "5kW Capacity", "Smart Switching", "App Control"]
    }
  ];

  // Core Values
  const coreValues = [
    {
      icon: <FiSun className="w-8 h-8" />,
      title: "Sustainable Energy",
      description: "Harness the power of the sun for a cleaner, greener future"
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Reliability",
      description: "Proven technology with robust performance and long warranties"
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Efficiency",
      description: "Maximum energy production with minimum space requirement"
    },
    {
      icon: <FiHeadphones className="w-8 h-8" />,
      title: "Support",
      description: "24/7 monitoring and maintenance support for peace of mind"
    }
  ];

  // Key Advantages
  const keyAdvantages = [
    {
      title: "Reduced Electricity Bills",
      description: "Save up to 90% on your monthly electricity expenses"
    },
    {
      title: "Government Subsidies",
      description: "Avail up to 40% subsidy on residential solar installations"
    },
    {
      title: "Low Maintenance",
      description: "Minimal upkeep required with automated cleaning systems"
    },
    {
      title: "Increased Property Value",
      description: "Solar installations increase property value by 4-5% on average"
    },
    {
      title: "Energy Independence",
      description: "Reduce reliance on grid power and price fluctuations"
    },
    {
      title: "Environment Friendly",
      description: "Reduce your carbon footprint by 3-4 tons annually"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-700 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-80">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-900/30 to-yellow-900/20"></div>
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
          
          {/* Sun rays effect */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 w-1 h-96 bg-yellow-300 transform -translate-x-1/2 -translate-y-1/2"
                style={{ transform: `rotate(${i * 30}deg)` }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center px-6 text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Solar <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Solutions</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-amber-100 max-w-2xl mx-auto font-medium"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Harness the power of the sun for a sustainable and cost-effective energy future
          </motion.p>
          
          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              Get Free Consultation
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-amber-300/30 hover:bg-white/20 transition-all">
              View Solutions
            </button>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="w-6 h-10 border-2 border-amber-300/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-amber-300 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Solar Solutions */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Powering the Future with <span className="text-amber-600">Solar Energy</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We provide comprehensive solar energy solutions designed to reduce your carbon footprint and electricity bills while increasing energy independence.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop"
                alt="Solar Panel Installation"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Solar Energy?</h3>
              <p className="text-gray-600 mb-6">
                Solar power is the most abundant energy source on Earth. By harnessing this clean, renewable resource, we can significantly reduce our reliance on fossil fuels and create a more sustainable future for generations to come.
              </p>
              <div className="space-y-4">
                {[
                  "Reduce electricity bills by up to 90%",
                  "Government subsidies and tax benefits available",
                  "Low maintenance with long system lifespan",
                  "Increase your property value",
                  "Environmentally friendly and sustainable",
                  "Energy independence and security"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                      <FiCheck className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Key <span className="text-amber-600">Advantages</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover the numerous benefits of switching to solar energy with our premium solutions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                    <FiCheck className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Solar <span className="text-amber-600">Advantages</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              What sets our solar solutions apart from the competition
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Solar <span className="text-amber-600">Products</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore our range of high-efficiency solar solutions for every need
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {solarProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="bg-amber-100 text-amber-700 px-2 py-1 rounded-md text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <button className="flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-all">
                    <FiArrowRight className="w-4 h-4" />
                    Enquire
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Frequently Asked <span className="text-amber-600">Questions</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Find answers to common questions about solar energy and our solutions
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-amber-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <button
                  onClick={() => handleFaqToggle(index)}
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                >
                  <span className="text-lg md:text-xl font-semibold text-gray-900">{item.question}</span>
                  <motion.div
                    initial={false}
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown className="h-6 w-6 text-amber-500" />
                  </motion.div>
                </button>
                {openFaqIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6 text-gray-600"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Harness the Power of the Sun?
          </motion.h2>
          <motion.p
            className="text-xl text-amber-100 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of satisfied customers who have made the switch to clean, renewable solar energy
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-white text-amber-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free Solar Assessment
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default SolarSolutionsPage;
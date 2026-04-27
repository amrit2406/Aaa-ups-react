// src/components/ContactPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiCheckCircle,
  FiMessageSquare,
} from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);

    // Simulate form submission
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 3000); // Hide success message after 3 seconds
    }, 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen text-neutral-800">
      {/* Page Hero/Banner */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 z-0 opacity-80">
          {/* Gradient overlay for depth */}
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
              fill="url(#hexagon-pattern)"
              opacity="0.4"
            />

            {/* Floating communication icons */}
            {[
              "M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75",
              "M2.25 6.75c3.143 0 5.25 2.107 5.25 5.25 0 3.143-2.107 5.25-5.25 5.25S0 15.143 0 12s2.107-5.25 5.25-5.25zm13.5 0c3.143 0 5.25 2.107 5.25 5.25s-2.107 5.25-5.25 5.25S10.5 15.143 10.5 12s2.107-5.25 5.25-5.25zm-13.5 0c3.143 0 5.25 2.107 5.25 5.25 0 3.143-2.107 5.25-5.25 5.25S0 15.143 0 12s2.107-5.25 5.25-5.25z",
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
        <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/20"></div>
        <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/20"></div>
        <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-white/20"></div>
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-white/20"></div>

        {/* Animated connection lines */}
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

        {/* Pulsing connection dots */}
        {[20, 50, 80].map((position) => (
          <motion.div
            key={position}
            className="absolute w-3 h-3 bg-blue-400 rounded-full"
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
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">
              Touch
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            We're here to help! Reach out to us for product inquiries, support,
            or a free consultation.
          </motion.p>

          {/* Animated call-to-action indicator */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.div
              className="flex justify-center items-center space-x-2 text-blue-300"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span>Let's connect</span>
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

      {/* Main Content Area - Form & Details */}
      <motion.section
        className="py-24 px-6 sm:px-12 lg:px-24 xl:px-40 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-100 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl opacity-20"></div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-10 md:p-12 border border-gray-100 backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                <FiMessageSquare className="text-white" size={20} />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900">
                Send us a message
              </h2>
            </div>

            {success ? (
              <motion.div
                className="flex flex-col items-center justify-center text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <FiCheckCircle className="text-green-500" size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-neutral-800">
                  Message Sent!
                </h3>
                <p className="text-neutral-600 max-w-md">
                  We've received your message and will get back to you within 24
                  hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-neutral-700 font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-neutral-700 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-neutral-700 font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your inquiry subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-neutral-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    required
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  className={`w-full px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    sending
                      ? "bg-red-300 text-white cursor-not-allowed"
                      : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                  }`}
                  whileHover={{ scale: sending ? 1 : 1.03 }}
                  whileTap={{ scale: sending ? 1 : 0.98 }}
                >
                  {sending && (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  )}
                  <span>{sending ? "Sending..." : "Send Message"}</span>
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="flex flex-col justify-center space-y-10 p-8 md:p-12"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-2">
                Get In Touch
              </div>
              <h3 className="text-4xl font-bold text-neutral-900 mb-4">
                Our Contact Information
              </h3>
              <p className="text-neutral-600 text-lg max-w-lg">
                Feel free to reach out to us using any of the methods below.
                We're always ready to provide expert advice and support.
              </p>
            </div>

            <div className="space-y-8">
              <motion.div
                className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                  <FiPhone className="text-red-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-neutral-900 mb-1">
                    Phone
                  </h4>
                  <p className="text-neutral-600">+91 6371499910</p>
                  <p className="text-neutral-600">+91 9090299910</p>
                </div>
              </motion.div>

              <motion.div
                className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                  <FiMail className="text-red-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-neutral-900 mb-1">
                    Email
                  </h4>
                  <p className="text-neutral-600">info@aaaups.in</p>
                </div>
              </motion.div>

              <motion.div
                className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                  <FiMapPin className="text-red-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-neutral-900 mb-1">
                    Address
                  </h4>
                  <p className="text-neutral-600">
                    Sahid Nagar, Bhubaneswar, Odisha
                  </p>
                </div>
              </motion.div>
            </div>

            {/* <motion.div
              className="mt-8 pt-8 border-t border-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <p className="text-neutral-500 text-sm">
                Our business hours: Monday - Friday, 9:00 AM - 6:00 PM IST
              </p>
            </motion.div> */}
          </motion.div>
        </div>
      </motion.section>

      {/* Map Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 xl:px-40 bg-gray-50">
        <motion.div
          className="container mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-4xl font-extrabold text-neutral-900 mb-12 text-center"
            variants={itemVariants}
          >
            Find Our Location
          </motion.h2>
          <motion.div
            className="w-full h-80 md:h-96 rounded-2xl shadow-xl overflow-hidden"
            variants={itemVariants}
          >
            {/* Embedded Google Map */}
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.9606323703574!2d85.8417037750602!3d20.29455868117744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19095f6e3b5f33%3A0x4ab0c24835fd5cb3!2sAaa%20Ups%20Enterprise%20pvt%20ltd!5e1!3m2!1sen!2sin!4v1758465708075!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;

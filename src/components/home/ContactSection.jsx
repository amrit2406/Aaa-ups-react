// src/components/ContactSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiMessageCircle,
  FiClock,
} from "react-icons/fi";
import con from "../../assets/contact.png";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    }, 1800);
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slower"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <FiMessageCircle className="w-4 h-4 mr-2" />
            Get In Touch
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Connect
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Reach out for product queries, custom solutions, or just to say
            hello — we're here to respond swiftly and help you find the perfect
            power solution.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch justify-center">
          {/* Contact Form - Left side */}
          <motion.div
            className="flex-1 w-full h-full bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.7 }}
                  onSubmit={submit}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        value={form.name}
                        required
                        disabled={sending}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 px-5 py-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 disabled:opacity-60 transition-all bg-white/50 backdrop-blur-sm"
                        placeholder="Your Full Name"
                        autoComplete="name"
                      />
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        required
                        disabled={sending}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 px-5 py-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 disabled:opacity-60 transition-all bg-white/50 backdrop-blur-sm"
                        placeholder="you@example.com"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      value={form.phone}
                      type="tel"
                      disabled={sending}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-gray-200 px-5 py-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 disabled:opacity-60 transition-all bg-white/50 backdrop-blur-sm"
                      placeholder="+91 1234567890"
                      autoComplete="tel"
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={form.message}
                      rows={5}
                      disabled={sending}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full rounded-xl border border-gray-200 px-5 py-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 resize-none disabled:opacity-60 transition-all bg-white/50 backdrop-blur-sm"
                      placeholder="How can we help you today?"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-3 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl disabled:opacity-60 transition-all group"
                  >
                    {sending ? (
                      <>
                        <svg
                          className="animate-spin h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
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
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 48 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 48 }}
                  className="text-center py-14"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="mx-auto mb-6 h-20 w-20 text-green-500 flex items-center justify-center rounded-full bg-green-500/10"
                  >
                    <svg
                      className="h-10 w-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSuccess(false)}
                    className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info and Image - Right side */}
          <div className="flex-1 w-full flex flex-col gap-8">
            {/* Info card */}
            <motion.div
              className="relative px-8 py-4 rounded-3xl bg-white/80 backdrop-blur-md border border-white/20 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                Contact Details
              </h3>
              <div className="flex flex-col gap-0">
                {[
                  {
                    icon: FiMail,
                    color: "text-blue-500",
                    bg: "bg-blue-500/10",
                    href: "mailto:info@aaaups.in",
                    label: "info@aaaups.in",
                    title: "Email Us",
                  },
                  {
                    icon: FiPhone,
                    color: "text-green-500",
                    bg: "bg-green-500/10",
                    href: "tel:+916371499910",
                    label: "+91 6371499910",
                    title: "Call Us",
                  },
                  {
                    icon: FiMapPin,
                    color: "text-red-500",
                    bg: "bg-red-500/10",
                    // href: "#",
                    label: "Bhubaneswar, Odisha, India",
                    title: "Visit Us",
                  },
                  // {
                  //   icon: FiClock,
                  //   color: "text-purple-500",
                  //   bg: "bg-purple-500/10",
                  //   href: "#",
                  //   label: "24/7 Support",
                  //   title: "Always Available"
                  // }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className="flex items-center gap-3 group cursor-pointer p-4 rounded-xl hover:bg-white/50 transition-all"
                  >
                    <div
                      className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}
                    >
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        {item.title}
                      </p>
                      <a
                        href={item.href}
                        className="text-lg text-gray-800 font-semibold hover:text-gradient hover:from-blue-600 hover:to-purple-600 transition-all"
                      >
                        {item.label}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image card */}
            <motion.div
              className="relative w-full overflow-hidden rounded-3xl group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={con}
                  alt="Our Support Team"
                  className="
        w-full
        h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]
        object-cover md:object-center
        object-top
        transform transition-transform duration-700
      "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>

                {/* Overlay content */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">
                    Expert Support Team
                  </h3>
                  <p className="text-sm md:text-base text-white/80">
                    Ready to assist you 24/7 with professional guidance
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-20px, -20px) rotate(1deg);
          }
        }
        @keyframes float-slower {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(15px, -15px) rotate(-1deg);
          }
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 18s ease-in-out infinite;
        }

        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}

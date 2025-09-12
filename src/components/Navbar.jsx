// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/aaa-logo.png"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Brands", path: "/brands" },
  { name: "3D", path: "/circuit" },
  { name: "Contact", path: "/contact" },
];

const accent = "#e50914"; // Keeping your accent color

export default function Navbar() {
  const [open, setOpen] = useState(false); // Mobile menu open
  const [modalOpen, setModalOpen] = useState(false); // Get Quote modal
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    // Simulate async send like API/mail
    setTimeout(() => {
      setSending(false);
      setSuccess(true);

      // Reset form fields after showing success
      setFormData({ name: "", phone: "", message: "" });

      // Auto-close modal after 3 seconds
      setTimeout(() => {
        setModalOpen(false);
        setSuccess(false);
      }, 3000);
    }, 1800);
  };

  // Framer Motion variants for mobile menu items
  const mobileMenuVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        staggerChildren: 0.08, // Stagger effect for menu items
      },
    },
    exit: { y: -30, opacity: 0, transition: { duration: 0.2 } },
  };

  const mobileMenuItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Framer Motion variants for success message
  const successMessageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <>
      <header className="fixed w-full z-50">
        <nav className="relative w-full h-20 flex items-center bg-white/90 backdrop-blur-xl shadow-md border-b border-gray-100">
          <div className="container max-w-7xl mx-auto flex items-center justify-between px-2 z-10">
            {/* Logo Left */}
            <NavLink
              to="/"
              className="flex items-center select-none"
              onClick={() => setOpen(false)} 
            >
              {/* Logo Image */}
              <img
                src={logo}
                alt="AAA UPS Logo"
                className="w-40 h-12 mr-2 object-contain"
              />
            </NavLink>

            {/* Center: Nav Links */}
            <nav className="hidden md:flex space-x-10 font-semibold text-gray-700 text-lg">
              {navLinks.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `relative transition-colors hover:text-gray-900 ${
                      isActive ? "text-red-600" : "" // Only apply red color directly
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {name}
                      {/* Using Framer Motion's layoutId for smooth underline animation */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline" // Unique ID for the underline motion
                          className="absolute left-0 right-0 -bottom-2 h-0.5 bg-red-600 rounded"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right: Get Quote Button */}
            <div className="hidden md:flex">
              <motion.button
                onClick={() => {
                  setModalOpen(true);
                  setOpen(false); // Ensure mobile menu is closed when opening modal
                  setSuccess(false); // Reset success state when opening modal
                }}
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0 8px 20px rgba(229,9,20,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-red-600 text-white rounded-full px-6 py-2 font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Get Quote
              </motion.button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden ml-3 p-2 rounded hover:bg-gray-100 relative z-20"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <motion.div
                initial={false}
                animate={open ? "open" : "closed"}
                variants={{
                  open: { rotate: 90 },
                  closed: { rotate: 0 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <motion.rect
                    x="4"
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    fill={accent}
                    animate={open ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
                  />
                  <motion.rect
                    x="4"
                    y="15"
                    width="16"
                    height="2"
                    rx="1"
                    fill={accent}
                    animate={
                      open ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }
                    }
                  />
                </svg>
              </motion.div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={mobileMenuVariants} // Apply variants to the container
                className="md:hidden fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-b shadow-md rounded-b-3xl z-40 flex flex-col px-8 py-5 space-y-4"
              >
                {navLinks.map(({ name, path }) => (
                  <motion.div key={name} variants={mobileMenuItemVariants}>
                    <NavLink
                      onClick={() => setOpen(false)}
                      to={path}
                      end={path === "/"}
                      className={({ isActive }) =>
                        `font-semibold text-lg px-3 py-3 rounded-lg cursor-pointer transition-colors ${
                          isActive
                            ? "bg-red-600 text-white"
                            : "text-gray-800 hover:bg-red-100"
                        }`
                      }
                    >
                      {name}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div variants={mobileMenuItemVariants}>
                  <button
                    onClick={() => {
                      setModalOpen(true);
                      setOpen(false);
                      setSuccess(false); // Reset success state
                    }}
                    className="bg-red-600 text-white rounded-full w-full py-3 font-semibold shadow-lg hover:bg-red-700 transition"
                  >
                    Get Quote
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Spacer div to avoid page content being hidden under fixed nav */}
      <div className="h-20" />

      {/* Modal Contact Form */}
      <AnimatePresence mode="wait">
        {" "}
        {/* Use mode="wait" for form/success transition */}
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (!sending) {
                setModalOpen(false);
                setSuccess(false);
              }
            }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {!success ? (
                <motion.div
                  key="form" // Key for AnimatePresence
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    Get a Quote
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-1 font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 disabled:opacity-50"
                        placeholder="Your name"
                        disabled={sending}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-1 font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        pattern="[0-9+ ]+"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 disabled:opacity-50"
                        placeholder="+91 1234567890"
                        disabled={sending}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-1 font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleFormChange}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none disabled:opacity-50"
                        placeholder="Your message"
                        disabled={sending}
                      />
                    </div>
                    <div className="flex justify-end space-x-3">
                      <button
                        type="button"
                        onClick={() => {
                          if (!sending) {
                            setModalOpen(false);
                            setSuccess(false);
                          }
                        }}
                        className="px-5 py-2 rounded-md font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
                        disabled={sending}
                      >
                        Cancel
                      </button>
                      <motion.button
                        type="submit"
                        whileTap={{ scale: 0.95 }}
                        className={`bg-red-600 text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-red-700 transition flex items-center justify-center space-x-2 ${
                          sending ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                        disabled={sending}
                      >
                        {sending && (
                          <svg
                            className="animate-spin h-5 w-5 mr-2 text-white"
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
                        )}
                        <span>{sending ? "Sending..." : "Send"}</span>
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="successMessage" // Key for AnimatePresence
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="text-center px-4 py-10"
                >
                  <svg
                    className="mx-auto mb-4 h-12 w-12 text-red-600"
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
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Thank you!
                  </h3>
                  <p className="text-gray-700">
                    Your quote request has been sent successfully.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiChevronUp,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiShield,
  FiAward,
  FiHeart,
} from "react-icons/fi";
import logo from "../assets/aaa-logo.png";

const quickLinks = [
  { name: "Home", to: "/" },
  { name: "Products", to: "/products" },
  { name: "Brands", to: "/brands" },
  { name: "About Us", to: "/about" },
  { name: "Contact", to: "/contact" },
];
const products = [
  { name: "UPS Systems", to: "/products" },
  { name: "Inverters", to: "/products" },
  { name: "Batteries", to: "/products" },
  { name: "Solar Panels", to: "/products" },
  { name: "Solar Inverters", to: "/products" },
  { name: "Accessories", to: "/products" },
];
const socialLinks = [
  {
    icon: FiFacebook,
    color: "hover:text-blue-400",
    url: "https://www.facebook.com/profile.php?id=61574079749771",
  },
  // { icon: FiTwitter, color: "hover:text-blue-300", url: "https://twitter.com/YourProfile" },
  {
    icon: FiInstagram,
    color: "hover:text-pink-400",
    url: "https://www.instagram.com/aaa.ups/",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div> */}

      {/* Floating shapes */}
      {/* <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div> */}

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center mb-6">
                {/* Logo */}
                <div className="bg-white p-2 w-30 h-16 rounded-lg flex items-center justify-center mr-3 overflow-hidden">
                  <img
                    src={logo}
                    alt="AAA UPS Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Brand Name */}
                {/* <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AAA UPS
                </span> */}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 max-w-xs">
                Providing premium power solutions and solar energy systems for
                homes and businesses across India since 2005.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="text-gray-300 hover:text-blue-300 transition duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full mr-3 group-hover:bg-blue-400 transition"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                Our Products
              </h4>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product.name}>
                    <Link
                      to={product.to}
                      className="text-gray-300 hover:text-purple-300 transition duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full mr-3 group-hover:bg-purple-400 transition"></span>
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Follow Us
              </h4>
              {/* <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Stay Updated
              </h4> */}
              {/* <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest products, offers, and energy tips.
              </p>
              
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center"
                >
                  <FiAward className="inline-block text-green-400 text-xl mb-2" />
                  <p className="text-green-300 text-sm">Thank you for subscribing!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center"
                  >
                    <FiSend className="mr-2" />
                    Subscribe Now
                  </motion.button>
                </form>
              )} */}

              {/* Social Media */}
              <div className="mt-8">
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, color, url }, index) => (
                    <motion.a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-300 ${color} transition-all duration-300`}
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </div>
              </div>
              {/* contact */}
              <div className="flex items-center space-x-4 my-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <FiPhone className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <a
                    href="tel:+916371499910"
                    className="text-white hover:text-blue-300 transition"
                  >
                    +91 6371499910
                  </a>
                  <br />
                  <a
                    href="tel:+919090299910"
                    className="text-white hover:text-blue-300 transition"
                  >
                    +91 9090299910
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <FiMail className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <a
                    href="mailto:info@aaaups.in"
                    className="text-white hover:text-blue-300 transition"
                  >
                    info@aaaups.in
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800/50 mx-auto max-w-7xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>
                  © {new Date().getFullYear()} AAA UPS. All rights reserved.
                </span>
                <span>
                  Powered by{" "}
                  <a
                    href="https://teksapphire.com"
                    className="text-whute hover:underline"
                  >
                    Teksapphire
                  </a>
                </span>
                {/* <div className="flex items-center space-x-4">
                  <a href="#" className="hover:text-blue-300 transition">Privacy Policy</a>
                  <span>•</span>
                  <a href="#" className="hover:text-blue-300 transition">Terms of Service</a>
                  <span>•</span>
                  <a href="#" className="hover:text-blue-300 transition">Cookie Policy</a>
                </div> */}
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-400">
                  <FiHeart className="text-red-400 mr-1" />
                  Made with passion for sustainable energy
                </div>
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/25 transition-all"
                  aria-label="Scroll to top"
                >
                  <FiChevronUp />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

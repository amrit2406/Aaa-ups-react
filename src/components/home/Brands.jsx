// src/components/Brands.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const brands = [
  { name: "APC", img: "https://www.apc.com/us/en/assets/v2/671/media/202248/APC_logo_header.svg", href: "https://www.apc.com/us/en/" },
  { name: "Amaze", img: "https://www.amaze-india.com/images/amaze-logo.png", href: "https://www.amaze-india.com/" },
  { name: "Luminous", img: "https://lumprodsta.blob.core.windows.net/prodcontainer/assets/icons/LuminousLogoBlue.webp", href: "https://www.luminousindia.com/" },
  { name: "Delta", img: "https://www.deltaww.com/images/logo.svg", href: "https://www.deltaww.com/en-US/index" },
  { name: "Exide", img: "https://docs.exideindustries.com/images/logo.png", href: "https://www.exideindustries.com/" },
  { name: "Frontech", img: "https://frontechonline.com/cdn/shop/files/Frontech_Logo_without_bg.png?v=1709901774&width=150", href: "https://frontechonline.com/" },
];

export default function Brands() {
  return (
    <section
      id="brands"
      className="relative py-18 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Decorative Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      {/* Subtle floating dots background */}
      <div
        className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')]"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-40 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 mb-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Premium{" "}
            <span className="text-blue-600 bg-clip-text">Power Partners</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            We collaborate with industry leaders to bring you the most reliable
            and innovative energy solutions.
          </motion.p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-10 gap-y-12">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.7 }}
              className="flex justify-center"
            >
              <a
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center w-full max-w-[135px]"
                title={`Visit ${brand.name}`}
              >
                {/* Logo container */}
                <div className="relative w-full aspect-square bg-white rounded-2xl shadow-md p-6 flex items-center justify-center border border-gray-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 overflow-hidden">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  {/* Hover highlight */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  {/* External link icon */}
                  <div className="absolute bottom-3 right-3 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiExternalLink className="text-white text-xs" />
                  </div>
                </div>

                {/* Brand Name */}
                <span className="mt-4 text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                  {brand.name}
                </span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <motion.div
          className="mt-20 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.9 }}
        >
          <p className="text-gray-500 mb-8">
            Don&apos;t see your preferred brand? We can source it for you.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            Request a Brand
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}

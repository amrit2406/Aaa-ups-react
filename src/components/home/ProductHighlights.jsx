// src/components/ProductShowcase.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "APC UPS 850VA",
    description: "Reliable UPS for home and small office.",
    price: 4999,
    image: "/products/apc-ups-850va.png",
  },
  {
    id: 2,
    name: "Amaze Inverter 1200W",
    description: "Efficient inverter with LED display.",
    price: 8999,
    image: "/products/amaze-inverter-1200w.png",
  },
  {
    id: 3,
    name: "Luminous Tubular Battery 150Ah",
    description: "Long-lasting tubular battery for continuous power.",
    price: 11200,
    image: "/products/luminous-battery-150ah.png",
  },
  {
    id: 4,
    name: "Delta Solar Grid System",
    description: "Comprehensive solar grid hybrid system.",
    price: 55999,
    image: "/products/delta-solar-grid.png",
  },
  // Add more as needed
];

export default function ProductShowcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleEnquire = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
    setSuccess(false);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleClose = () => {
    if (!sending) {
      setModalOpen(false);
      setSelectedProduct(null);
      setSuccess(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTimeout(handleClose, 2500);
    }, 1700);
  };

  return (
    <section
      className="relative py-24 bg-gradient-to-b from-blue-50 to-white"
      id="products"
    >
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
        <motion.h2
          className="text-4xl font-extrabold text-neutral-900 mb-12 text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.82, ease: "easeOut" }}
        >
          Our Best-Selling Solutions
        </motion.h2>

        {/* Carousel on desktop – Scrollable grid on mobile */}
        <div className="flex gap-6 overflow-x-auto pb-4 sm:gap-10 md:grid md:grid-cols-4 md:overflow-visible md:gap-12">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              className={`bg-white/90 border border-sky-100 rounded-3xl shadow-xl p-7 flex flex-col md:min-w-0 min-w-[320px] ${
                i === 0
                  ? "md:col-span-2 bg-gradient-to-br from-sky-50 to-white border-2 border-sky-300 shadow-2xl"
                  : ""
              }`}
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55 + i * 0.1,
                delay: i * 0.06,
                ease: "easeOut",
              }}
              whileHover={{
                scale: i === 0 ? 1.02 : 1.045,
                boxShadow:
                  "0 16px 50px 5px rgba(2,132,199,0.11), 0 2px 12px 0 rgba(56,189,248,0.13)",
              }}
              tabIndex={0}
              aria-label={`View ${product.name}`}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-32 md:h-40 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">{product.name}</h3>
              <p className="text-slate-600 text-sm md:text-base">{product.description}</p>
              <div className="flex items-center justify-between mt-7">
                <span className="text-sky-700 font-bold text-lg">₹{product.price}</span>
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 5px 16px rgba(16,177,196,0.28)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleEnquire(product)}
                  className="bg-sky-600 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-sky-700 transition"
                >
                  Enquire
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm p-5"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleClose}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="bg-white rounded-3xl shadow-xl max-w-md w-full p-8 relative"
              variants={modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-extrabold text-neutral-900 mb-6 text-center">
                Enquire about{" "}
                <span className="text-sky-600">{selectedProduct?.name}</span>
              </h3>
              {!success ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-neutral-700 font-semibold mb-1"
                    >
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      disabled={sending}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-md border border-sky-200 px-4 py-2 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:opacity-60"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-neutral-700 font-semibold mb-1"
                    >
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      disabled={sending}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-md border border-sky-200 px-4 py-2 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:opacity-60"
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-neutral-700 font-semibold mb-1"
                    >
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      disabled={sending}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-md border border-sky-200 px-4 py-2 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:opacity-60"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-neutral-700 font-semibold mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      disabled={sending}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-md border border-sky-200 px-4 py-2 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none disabled:opacity-60"
                      placeholder="Additional details?"
                    />
                  </div>
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={handleClose}
                      disabled={sending}
                      className="px-6 py-2 rounded-md border border-sky-200 font-semibold text-neutral-700 hover:bg-sky-50 transition disabled:opacity-50"
                    >
                      Cancel
                    </button>
                    <motion.button
                      type="submit"
                      disabled={sending}
                      whileTap={{ scale: 0.97 }}
                      className={`bg-sky-600 text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-sky-700 transition flex items-center gap-2 ${
                        sending ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {sending && (
                        <svg
                          className="animate-spin h-5 w-5 text-white"
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
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  className="text-center py-12"
                >
                  <svg
                    className="mx-auto mb-4 h-12 w-12 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                    Thank you for your enquiry!
                  </h3>
                  <p className="text-neutral-700">We will get back to you shortly.</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Reuse the modal animation variants from your previous setup:
const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};
const modalContent = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: 40, opacity: 0 },
};

// src/pages/FAQ.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import faq from "../../assets/faq2.png"

const FAQ_ITEMS = [
  {
    question: "What types of power solutions do you offer?",
    answer:
      "We offer a comprehensive range of solutions including UPS systems, inverters, solar inverters, and batteries from leading brands. Our products are suitable for residential, commercial, and industrial use.",
  },
  {
    question: "Do you provide installation services?",
    answer:
      "Yes, our team of certified technicians provides professional installation services for all our products. We ensure a seamless setup and proper system configuration for optimal performance.",
  },
  {
    question: "How do I choose the right product for my needs?",
    answer:
      "Choosing the right solution depends on your specific power requirements. We offer free consultation services to help you assess your needs and recommend the most efficient and cost-effective product for your home or business.",
  },
  {
    question: "What brands do you work with?",
    answer:
      "We partner with trusted and globally recognized brands such as APC, Luminous, Exide, Delta, and Amaze to ensure that we provide only the highest quality and most reliable products.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "You can easily request a quote by visiting our Products page, selecting the product you are interested in, and clicking the 'Enquire Now' button. A form will appear that lets you send us a message directly via WhatsApp.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-gray-950 text-gray-200 py-16 md:py-24">
      {/* Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800" />
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(255, 255, 255, 0.39)"
                strokeWidth="1.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div className="flex flex-col justify-start pt-8 items-center lg:items-start">
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-white mb-4 lg:text-left text-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              Have a question?
            </motion.h2>

            <motion.p
              className="text-lg text-gray-400 lg:text-left text-center max-w-xl mb-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              We’ve compiled a list of our most frequently asked questions to
              help you find the answers you need quickly.
            </motion.p>

            {/* ✅ New Image below */}
            <motion.img
              src={faq}
              alt="FAQ Illustration"
              className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </div>

          {/* Right Side (FAQ Accordion) */}
          <div className="space-y-6">
            {FAQ_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                layout
                onClick={() => handleToggle(index)}
                className="bg-white/5 border border-gray-700 rounded-2xl backdrop-blur-md shadow-xl overflow-hidden cursor-pointer p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Question Row */}
                <motion.div
                  layout
                  className="flex justify-between items-center"
                >
                  <span className="text-lg md:text-xl font-semibold text-white">
                    {item.question}
                  </span>
                  <motion.span
                    layout
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-6 w-6 text-blue-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </motion.span>
                </motion.div>

                {/* Answer */}
                {openIndex === index && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-gray-400"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

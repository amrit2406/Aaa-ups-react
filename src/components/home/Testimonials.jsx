// src/components/Testimonials.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { FiStar, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa"; 
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Dummy testimonials - replace with your data/images
const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    title: "CEO, TechCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "AAA UPS provided us with reliable power solutions that keep our operations running smoothly. Excellent support and exceptional service!",
  },
  {
    id: 2,
    name: "Anita Verma",
    title: "Manager, Green Energy Pvt Ltd",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The solar battery solutions from AAA UPS are top-notch and incredibly efficient. Their expertise made our transition seamless!",
  },
  {
    id: 3,
    name: "Deepak Reddy",
    title: "Engineer, Delta Systems",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    rating: 4,
    text: "Fast delivery and genuine products. AAA UPS is our trusted partner for all UPS and inverter needs. Professional team!",
  },
  {
    id: 4,
    name: "Meena Kapoor",
    title: "Homeowner",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The battery backup solutions are excellent and have saved us during multiple power outages. Couldn't be happier with the service!",
  },
  {
    id: 5,
    name: "Vikram Singh",
    title: "IT Director, Nexus Solutions",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Outstanding reliability and 24/7 support. AAA UPS ensures our critical systems never go down during power fluctuations.",
  },
  {
    id: 6,
    name: "Priya Patel",
    title: "Business Owner",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    rating: 4,
    text: "The consultation process was thorough, and they helped me choose the perfect solution for my business needs. Highly recommend!",
  },
];

export default function Testimonials() {
  const swiperRef = useRef(null);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section className="py-18 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden" aria-label="Customer Testimonials">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-blue-600/5 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slower"></div>
      
      {/* Floating quote icons */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-200/30"
          style={{
            left: `${20 + i * 20}%`,
            top: `${20 + (i % 2) * 60}%`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
          }}
        >
          <FaQuoteRight className="w-12 h-12" /> {/* ✅ Updated */}
        </motion.div>
      ))}

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
            Client Stories
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Satisfaction</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Discover why businesses and homeowners trust AAA UPS for their critical power needs
          </p>
        </motion.div>

        {/* Custom Navigation */}
        {/* <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-100">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105 border border-gray-100"
            >
              <FiArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105 border border-gray-100"
            >
              <FiArrowRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div> */}

        <div className="relative">
          {/* Gradient fade edges */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none"></div> */}

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
               640: { slidesPerView: 1.2, centeredSlides: true },
               768: { slidesPerView: 1.6, centeredSlides: true },
               1024: { slidesPerView: 3, centeredSlides: true }, 
               1280: { slidesPerView: 3, centeredSlides: true },
               1536: { slidesPerView: 3, centeredSlides: true },
            }}
            centeredSlides={false}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 4000, 
              disableOnInteraction: false,
            }}
            grabCursor={true}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                {({ isActive }) => (
                  <motion.div
                    className={`relative h-full transition-all duration-500 ${
                      isActive ? "scale-105" : "scale-95 opacity-80"
                    }`}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="bg-white rounded-3xl p-4 mx-2 md:mx-auto md:p-8 my-8 h-full border border-green-400 shadow-[0_5px_5px_rgba(34,197,94,0.3)] hover:shadow-[0_8px_8px_rgba(34,197,94,0.5)] transition-all duration-300 group overflow-hidden">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#2563eb_1px,transparent_0)] bg-[length:20px_20px]"></div>
                      </div>
                      
                      {/* Gradient border effect */}
                      {/* <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-br from-transparent via-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div> */}

                      {/* Quote icon */}
                      <div className="absolute top-6 right-6 text-green-900/10 group-hover:text-green-600/80 transition-colors duration-300">
                        <FaQuoteRight className="w-12 h-12" /> {/* ✅ Updated */}
                      </div>

                      {/* Rating stars */}
                      <div className="flex mb-6">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Testimonial text */}
                      <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10 font-light">
                        {testimonial.text}
                      </p>

                      {/* Client info */}
                      <div className="flex items-center space-x-4 mt-auto">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                          <p className="text-gray-500 text-sm">{testimonial.title}</p>
                        </div>
                      </div>

                      {/* Hover effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/2 group-hover:to-cyan-500/5 transition-all duration-500"></div>
                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats bar */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { number: "5000+", label: "Happy Clients" },
            { number: "99%", label: "Satisfaction Rate" },
            { number: "24/7", label: "Support Available" },
            { number: "15+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
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
        
        .testimonial-swiper .swiper-slide {
          transition: transform 0.5s ease, opacity 0.5s ease;
        }
      `}</style>
    </section>
  );
}

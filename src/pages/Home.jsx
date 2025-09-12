// src/pages/Home.jsx
import React from "react";
import Hero from "../components/home/HeroSec";
import Brands from "../components/home/Brands";
import ProductHighlights from "../components/home/ProductHighlights";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import ContactSection from "../components/home/ContactSection";
import CircuitPower3D from "../components/CircuitPower3D";
import AboutSection from "../components/home/AboutSec";
import FAQ from "../components/home/Faq";
// import Hero from "../components/Hero";
// import Brands from "../components/Brands";           
// import ProductHighlights from "../components/ProductHighlights";
// import WhyAAAUPS from "../components/WhyAAAUPS";
// import Testimonials from "../components/Testimonials";
// import HowItWorks from "../components/HowItWorks";
// import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero />
      <Brands />
      <ProductHighlights />
      <AboutSection />
      {/* <CircuitPower3D /> */}
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </main>
  );
}

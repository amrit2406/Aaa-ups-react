import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Products from "./pages/Products";
import BrandsPage from "./pages/Brands";
import ContactPage from "./pages/Contact";
import CircuitPage from "./pages/Circuit";
import SolarSolutionsPage from "./pages/SolarP";
import PowerLoader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fake delay for demo, replace with real data fetching if needed
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PowerLoader />; // show loader until "loading" is false
  }

  return (
    <HashRouter>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/circuit" element={<CircuitPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/solar" element={<SolarSolutionsPage />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

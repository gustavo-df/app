import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CatalogSection from "../components/CatalogSection";
import FeaturesSection from "../components/FeaturesSection";
import PricingSection from "../components/PricingSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <CatalogSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
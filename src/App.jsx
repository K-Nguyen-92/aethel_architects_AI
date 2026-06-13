import { useState } from "react";
import ArchitectLanding from "./sections/ArchitectLanding";
import PortfolioSection from "./sections/PortfolioSection";
import PhilosophySection from "./sections/PhilosophySection";
import ServicesSection from "./sections/ServicesSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./layout/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <ArchitectLanding />
      <PortfolioSection />
      <PhilosophySection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;

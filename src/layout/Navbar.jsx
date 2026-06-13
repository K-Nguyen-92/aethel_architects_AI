import React from "react";
import { Compass } from "lucide-react";

const Navbar = () => {
  return (
    <header className="relative z-10 flex justify-between items-center px-8 md:px-16 py-8 text-white">
      {/* Logo Section */}
      <a href="#" className="flex flex-col items-start cursor-pointer">
        <div className="flex items-start gap-1">
          <h1 className="text-4xl tracking-widest font-normal">AETHEL</h1>
          {/* Small compass icon matching the design */}
          <Compass className="w-5 h-5 opacity-90 mt-1" strokeWidth={1.5} />
        </div>
        <span className="text-xs tracking-[0.35em] font-light mt-1 pl-1 text-gray-200">
          ARCHITECTS
        </span>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-10 text-sm font-medium tracking-wide">
        <a href="#portfolio" className="hover:text-gray-300 transition-colors">
          PORTFOLIO
        </a>
        <a href="#philosophy" className="hover:text-gray-300 transition-colors">
          PHILOSOPHY
        </a>
        <a href="#services" className="hover:text-gray-300 transition-colors">
          SERVICES
        </a>
        <a href="#contact" className="hover:text-gray-300 transition-colors">
          CONTACT
        </a>
      </nav>
    </header>
  );
};

export default Navbar;

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
      <nav className="hidden md:flex gap-10 text-sm font-medium tracking-widest">
        {["portfolio", "philosophy", "services", "contact"].map((item) => (
            <a
                key={item}
                href={`#${item}`}
                className="relative py-2 text-gray-300 hover:text-white uppercase transition-colors duration-300 group"
            >
              {item}
              {/* Elegant slider line mapping to the brand's terra cotta variable */}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;

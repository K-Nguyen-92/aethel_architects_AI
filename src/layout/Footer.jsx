import React from "react";
import { Compass, ArrowUp, ArrowRight } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-bg-dark text-white pt-24 pb-12 px-4 md:px-16 font-sans border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          {/* Brand & Newsletter Column (Takes up more space) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="flex flex-col items-start cursor-pointer mb-8">
                <div className="flex items-start gap-1">
                  <h1 className="text-3xl md:text-4xl tracking-widest font-normal text-white">
                    AETHEL
                  </h1>
                  <Compass
                    className="w-5 h-5 text-primary mt-1"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-[10px] tracking-[0.4em] font-light mt-1 pl-1 text-gray-500 uppercase">
                  Architects
                </span>
              </div>

              <p className="text-gray-400 font-light text-sm md:text-base max-w-sm leading-relaxed mb-12">
                Designing bespoke, sustainable spaces that bridge the gap
                between nature and human legacy.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-sm">
              <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">
                The Aethel Journal
              </p>
              <form
                className="relative group"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-b border-gray-800 py-3 text-sm font-light text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors pr-10"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 bottom-3 text-gray-500 group-hover:text-primary transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs tracking-[0.2em] text-primary uppercase mb-8 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-white text-sm font-light transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#philosophy"
                  className="text-gray-400 hover:text-white text-sm font-light transition-colors"
                >
                  Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white text-sm font-light transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white text-sm font-light transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & About Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.2em] text-primary uppercase mb-8 font-semibold">
              Firm
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#careers"
                  className="text-gray-400 hover:text-white text-sm font-light transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#press"
                  className="text-gray-400 hover:text-white text-sm font-light transition-colors"
                >
                  Press Kit
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-white text-sm font-light transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-gray-400 hover:text-white text-sm font-light transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Global Offices Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.2em] text-primary uppercase mb-8 font-semibold">
              Studios
            </h4>
            <ul className="space-y-6">
              <li>
                <p className="text-white text-sm font-medium mb-1">Aspen, CO</p>
                <p className="text-gray-500 text-xs font-light">
                  Global Headquarters
                </p>
              </li>
              <li>
                <p className="text-white text-sm font-medium mb-1">
                  Vancouver, BC
                </p>
                <p className="text-gray-500 text-xs font-light">
                  Design Studio
                </p>
              </li>
              <li>
                <p className="text-white text-sm font-medium mb-1">
                  London, UK
                </p>
                <p className="text-gray-500 text-xs font-light">
                  European Operations
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-gray-900 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-xs font-light tracking-wider">
            &copy; {new Date().getFullYear()} AETHEL ARCHITECTS. ALL RIGHTS
            RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs tracking-[0.2em] text-gray-500 uppercase hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <div className="p-2 border border-gray-800 rounded-full group-hover:border-white transition-colors">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

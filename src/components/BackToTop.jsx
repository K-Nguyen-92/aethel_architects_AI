import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className={`fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 p-4 rounded-full bg-[#0a0a0a]/90 backdrop-blur-sm border border-gray-800 text-gray-400 shadow-2xl transition-all duration-500 group ${
        isVisible
          ? "opacity-75 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <ArrowUp
        className="w-5 h-5 group-hover:text-[#b35a39] group-hover:-translate-y-1 transition-all duration-300"
        strokeWidth={1.5}
      />

      {/* Optional: Subtle glowing ring on hover */}
      <div className="absolute inset-0 rounded-full border border-[#b35a39] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none"></div>
    </button>
  );
};

export default BackToTop;

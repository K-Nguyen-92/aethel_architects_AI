import React from "react";
import Navbar from "../layout/Navbar";

const ArchitectLanding = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col font-sans"
      style={{
        // Using a placeholder image that matches the architectural/coastal vibe
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      {/* Dark gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/40"></div>
      {/* Header / Navigation */}
      <Navbar />

      {/* Hero Content */}
      <main className="relative z-10 grow flex flex-col items-center justify-center text-center px-4 pb-20">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-xl tracking-tight">
          BUILD YOUR LEGACY IN SPACE
        </h2>

        <p className="text-lg md:text-2xl text-gray-100 mb-10 font-light drop-shadow-md">
          Bespoke, sustainable architectural design for generations.
        </p>

        <button className="btn-primary text-white px-10 py-4 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 shadow-lg cursor-pointer">
          Request a Consultation
        </button>
      </main>
    </div>
  );
};

export default ArchitectLanding;

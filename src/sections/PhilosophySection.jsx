import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const team = [
  {
    id: 1,
    name: "Elias Aethel",
    role: "Founder & Lead Architect",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    philosophy:
      "A building is not merely shelter. It is the physical manifestation of a family's legacy and its relationship with the earth. We listen to the topography before we ever draw a line.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Design Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    philosophy:
      "Complexity is easy; simplicity is the ultimate challenge. My goal is to strip away the noise until only the light, the material, and the emotion remain.",
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Technical Principal",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    philosophy:
      "Sustainability is not a feature; it is the foundation. If a structure does not respect the environment it occupies, it is not architecture—it is an imposition.",
  },
];

const PhilosophyCarousel = () => {
  const [activeTab, setActiveTab] = useState(0);

  const nextMember = () => {
    setActiveTab((prev) => (prev === team.length - 1 ? 0 : prev + 1));
  };

  const prevMember = () => {
    setActiveTab((prev) => (prev === 0 ? team.length - 1 : prev - 1));
  };

  return (
    <section
      id="philosophy"
      className="bg-[#F9F8F6] text-text-dark py-24 md:py-32 px-4 md:px-16 font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-px bg-primary"></div>
          <h3 className="text-sm tracking-[0.3em] text-primary font-semibold uppercase">
            Our Philosophy
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left: Image Carousel Area */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-125 md:h-162.5 w-full overflow-hidden">
              {team.map((member, index) => (
                <div
                  key={member.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                    index === activeTab
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                >
                  <div className="absolute -top-4 -left-4 w-full h-full bg-[#E5E1D8] z-0"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative z-10 w-full h-full object-cover grayscale contrast-110"
                  />

                  {/* Floating Name Badge */}
                  <div className="absolute bottom-0 right-6 md:-right-1 z-20 bg-white p-6 shadow-xl min-w-60 opacity-75">
                    <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-1">
                      {member.role}
                    </p>
                    <p className="text-xl font-medium tracking-wide">
                      {member.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows (Positioned under image for mobile, floating for desktop) */}
            <div className="flex gap-4 mt-12 lg:mt-8">
              <button
                onClick={prevMember}
                className="p-3 border border-gray-300 rounded-full hover:bg-text-dark hover:text-white transition-all duration-300 cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextMember}
                className="p-3 border border-gray-300 rounded-full hover:bg-text-dark hover:text-white transition-all duration-300 cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right: Content Area */}
          <div className="w-full lg:w-1/2">
            <div className="relative min-h-75 flex flex-col justify-center">
              <Quote className="text-primary opacity-20 w-16 h-16 mb-6" />

              {team.map((member, index) => (
                <div
                  key={member.id}
                  className={`transition-all duration-700 ${
                    index === activeTab
                      ? "relative opacity-100 translate-y-0"
                      : "absolute opacity-0 -translate-y-4 pointer-events-none"
                  }`}
                >
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 italic">
                    "{member.philosophy}"
                  </h2>

                  <div className="w-16 h-0.5 bg-primary mb-6"></div>

                  <p className="text-gray-600 font-light text-lg leading-relaxed max-w-xl">
                    Leading the firm's vision for {member.role.toLowerCase()},{" "}
                    {member.name.split(" ")[0]}
                    ensures that our commitment to bespoke, sustainable
                    architecture is reflected in every technical detail and
                    conceptual sketch we produce.
                  </p>
                </div>
              ))}

              {/* Progress Indicators */}
              <div className="flex gap-3 mt-12">
                {team.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`cursor-pointer h-1 transition-all duration-500 ${
                      index === activeTab
                        ? "w-12 bg-primary"
                        : "w-4 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyCarousel;

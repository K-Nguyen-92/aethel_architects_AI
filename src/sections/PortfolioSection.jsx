import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectModal from "../components/ProjectModal";

const projects = [
  {
    id: 1,
    title: "The Glass House",
    location: "Aspen, Colorado",
    description:
      "A modern retreat prioritizing connection with the natural landscape through seamless glass boundaries and sustainable timber framing.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    ],
  },
  {
    id: 2,
    title: "Coastal Cliff Residence",
    location: "Big Sur, California",
    description:
      "Sustainable luxury perched on the edge of the Pacific, featuring passive cooling, solar integration, and locally sourced stone.",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    ],
  },
  {
    id: 3,
    title: "Urban Oasis Loft",
    location: "Vancouver, BC",
    description:
      "A biophilic approach to high-density living, integrating interior gardens, raw concrete, and expansive skylights.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    ],
  },
];

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to navigate to the NEXT project
  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to navigate to the PREVIOUS project
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="portfolio"
      className="bg-bg-dark text-white py-24 px-4 md:px-16 font-sans relative"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h3 className="text-sm tracking-[0.3em] text-primary font-semibold mb-3 uppercase">
            Selected Works
          </h3>
          <h2 className="text-4xl md:text-5xl font-light tracking-wide">
            Our Portfolio
          </h2>
        </div>

        {/* Navigation Controls (Changes Projects) */}
        <div className="flex gap-4">
          <button
            onClick={prevProject}
            className="p-3 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <button
            onClick={nextProject}
            className="p-3 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            aria-label="Next Project"
          >
            <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Carousel Container (Changes Projects) */}
      <div className="max-w-7xl mx-auto relative overflow-hidden group rounded-sm">
        {/* Projects Track */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-[60vh] md:h-[75vh]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="w-full shrink-0 relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover brightness-75 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* Project Details Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col md:flex-row justify-between items-end gap-6 z-10">
          <div className="max-w-2xl">
            <span className="text-gray-300 text-sm tracking-widest uppercase block mb-2">
              {projects[currentIndex].location}
            </span>
            <h4 className="text-3xl md:text-5xl font-medium mb-4">
              {projects[currentIndex].title}
            </h4>
            <p className="text-gray-300 font-light text-lg hidden md:block">
              {projects[currentIndex].description}
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="shrink-0 bg-transparent border border-white hover:bg-white hover:text-black text-white px-8 py-3 text-sm font-medium tracking-wider uppercase transition-colors duration-300 cursor-pointer"
          >
            View Project
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute top-6 right-8 flex gap-2 z-10">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`h-1 transition-all duration-500 ${
                index === currentIndex ? "w-8 bg-primary" : "w-4 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Extracted Project Detail Modal Component */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={projects[currentIndex]}
        // Mapping the original next/prev functions to project-to-project navigation
        onNextProject={nextProject}
        onPrevProject={prevProject}
        currentProjectIndex={currentIndex}
        totalProjects={projects.length}
      />
    </section>
  );
};

export default PortfolioSection;

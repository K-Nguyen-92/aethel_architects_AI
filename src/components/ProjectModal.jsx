import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, MapPin } from "lucide-react";

// The Modal now handles its own state for the current image *within* the project.
const ProjectModal = ({
  isOpen,
  onClose,
  project,
  onNextProject,
  onPrevProject,
  currentProjectIndex,
  totalProjects,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lock scrolling on mount and reset image index when a new project is loaded
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Reset to the first image when the modal opens or a new project is loaded
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, project]); // The dependency on `project` here is key

  // The array of images to cycle through. Default to an array with the main image.
  const projectImages = project?.images || [project?.image].filter(Boolean);

  const nextImage = () => {
    if (projectImages.length <= 1) return;
    setCurrentImageIndex((prev) =>
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (projectImages.length <= 1) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Modal Content Window */}
      <div
        className="bg-[#121212] w-full max-w-5xl rounded-lg overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col border border-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-black/60 hover:bg-primary text-white rounded-full transition-colors duration-300 cursor-pointer border border-white/10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Body */}
        <div className="flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden">
          {/* Left Column: Image with INNER Nav Arrows (Now for project images) */}
          <div className="w-full lg:w-3/5 h-[40vh] lg:h-[70vh] relative bg-black shrink-0">
            <img
              src={projectImages[currentImageIndex]}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-500"
            />

            {/* Modal Inner Image Navigation Controls */}
            {projectImages.length > 1 && (
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                <button
                  onClick={prevImage}
                  className="p-2 bg-black/70 hover:bg-white hover:text-black text-white rounded-full transition-colors pointer-events-auto border border-white/10 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 bg-black/70 hover:bg-white hover:text-black text-white rounded-full transition-colors pointer-events-auto border border-white/10 cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Detailed Project Information */}
          <div className="w-full lg:w-2/5 p-8 md:p-10 flex flex-col justify-between overflow-y-auto bg-[#121212]">
            <div>
              <div className="flex items-center gap-2 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
                <MapPin className="w-4 h-4" strokeWidth={2} />
                <span>{project.location}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-6 text-white border-b border-neutral-800 pb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 font-light leading-relaxed mb-6 text-base">
                {project.description}
              </p>

              <div className="space-y-4 pt-2 text-sm text-gray-500 font-light">
                <p>
                  <strong className="text-gray-400 font-medium">Year:</strong>{" "}
                  2025
                </p>
                <p>
                  <strong className="text-gray-400 font-medium">Status:</strong>{" "}
                  Completed
                </p>
                <p>
                  <strong className="text-gray-400 font-medium">
                    Materials:
                  </strong>{" "}
                  Sustainable timber, Low-E glass, Native stone
                </p>
              </div>
            </div>

            {/* Bottom Project-to-Project Navigation (NEW LOCATION) */}
            <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-neutral-500 text-sm">
                <span className="tracking-wider">
                  Project {currentProjectIndex + 1} of {totalProjects}
                </span>
                {/* Project-to-Project Navigation Arrows */}
                <div className="flex gap-1.5 ml-2">
                  <button
                    onClick={onPrevProject}
                    className="p-1 hover:text-white transition-colors"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-4 h-4 cursor-pointer" />
                  </button>
                  <button
                    onClick={onNextProject}
                    className="p-1 hover:text-white transition-colors"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-4 h-4 cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

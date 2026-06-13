import React from "react";
import { ArrowUpRight, Ruler, PencilRuler, Leaf, Layout } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Architectural Design",
    icon: <PencilRuler className="w-6 h-6" />,
    description:
      "From conceptual sketches to construction oversight, we create bespoke residential and commercial structures that prioritize light and legacy.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Interior Architecture",
    icon: <Layout className="w-6 h-6" />,
    description:
      "We design the interior soul of the building, focusing on custom millwork, tactile material palettes, and integrated lighting systems.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Landscape Integration",
    icon: <Ruler className="w-6 h-6" />,
    description:
      "Our biophilic approach ensures the boundary between the built environment and the natural world is seamless and regenerative.",
    image:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Sustainable Consulting",
    icon: <Leaf className="w-6 h-6" />,
    description:
      "Utilizing advanced BIM modeling to achieve Net Zero energy goals, Passive House certification, and long-term ecological resilience.",
    image:
      "https://images.unsplash.com/photo-1518005020410-d00938f328f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-[#0a0a0a] text-white py-24 md:py-32 px-4 md:px-16 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#b35a39]"></div>
              <h3 className="text-sm tracking-[0.3em] text-[#b35a39] font-semibold uppercase">
                Our Expertise
              </h3>
            </div>
            <h2 className="text-4xl md:text-6xl font-light tracking-wide leading-tight">
              Comprehensive Design <br />
              Solutions.
            </h2>
          </div>
          <p className="text-gray-400 font-light text-lg max-w-sm leading-relaxed">
            We provide a full-spectrum architectural service, guiding each
            project from initial feasibility to the final handover.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800/30 border border-gray-800/30">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#0a0a0a] overflow-hidden min-h-[450px] md:min-h-[550px] flex flex-col justify-end p-8 md:p-12 transition-all duration-700"
            >
              {/* Background Image with Hover Scale */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-50 transition-all duration-1000 ease-out"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-[#b35a39] mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                  {service.icon}
                </div>

                <h4 className="text-2xl md:text-3xl font-medium mb-4 flex items-center gap-3">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                </h4>

                <p className="text-gray-400 font-light text-base md:text-lg max-w-md mb-8 line-clamp-3 group-hover:line-clamp-none transition-all duration-700">
                  {service.description}
                </p>

                <div className="pt-6 border-t border-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <button className="text-sm tracking-widest uppercase font-medium hover:text-[#b35a39] transition-colors">
                    Explore Service
                  </button>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-transparent border-r-[40px] border-r-transparent group-hover:border-r-[#b35a39]/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-8">
            Ready to bring your vision to life?
          </p>
          <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-12 py-5 text-sm font-semibold tracking-widest uppercase transition-all duration-500">
            Start a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

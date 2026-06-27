import React, { useState } from "react";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "../components/Button";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Residential",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add submission logic here
  };

  return (
    <section
      id="contact"
      className="bg-[#F9F8F6] text-text-dark py-24 md:py-32 px-4 md:px-16 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-px bg-primary"></div>
          <h3 className="text-sm tracking-[0.3em] text-primary font-semibold uppercase">
            Get in Touch
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          {/* Left Column: Contact Info & Socials */}
          <div className="w-full lg:w-2/5 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-6xl font-light tracking-wide leading-tight mb-12">
                Let’s build <br />
                your legacy.
              </h2>

              <div className="space-y-10">
                {/* Email Link */}
                <div className="group cursor-pointer">
                  <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
                    Inquiries
                  </p>
                  <a
                    href="mailto:studio@aethel.com"
                    className="flex items-center gap-4 text-xl md:text-2xl font-light group-hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    studio@aethel.com
                  </a>
                </div>

                {/* Phone Link */}
                <div className="group cursor-pointer">
                  <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
                    Office
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-4 text-xl md:text-2xl font-light group-hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    +1 (234) 567 890
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-20">
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">
                Social Connection
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="p-4 border border-gray-200 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#"
                  className="p-4 border border-gray-200 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                >
                  {/* Placeholder for Facebook Icon */}
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-3/5 bg-white p-8 md:p-16 shadow-2xl shadow-gray-200/50 relative overflow-hidden">
            {/* Design element: corner terracotta line */}
            <div className="absolute top-0 right-0 w-24 h-0.5 bg-primary"></div>
            <div className="absolute top-0 right-0 w-0.5 h-24 bg-primary"></div>

            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-primary transition-colors peer placeholder-transparent"
                    placeholder="Full Name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <label className="absolute left-0 -top-3 text-xs tracking-widest text-gray-400 uppercase transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#b35a39]">
                    Full Name
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-primary transition-colors peer placeholder-transparent"
                    placeholder="Email Address"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <label className="absolute left-0 -top-3 text-xs tracking-widest text-gray-400 uppercase transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#b35a39]">
                    Email Address
                  </label>
                </div>
              </div>

              {/* Project Type Dropdown */}
              <div className="relative">
                <select
                  className="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                >
                  <option value="Residential">Bespoke Residential</option>
                  <option value="Commercial">Sustainable Commercial</option>
                  <option value="Renovation">Interior Renovation</option>
                  <option value="Other">Other Inquiry</option>
                </select>
                <label className="absolute left-0 -top-3 text-xs tracking-widest text-gray-400 uppercase">
                  Project Interest
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-primary transition-colors peer placeholder-transparent resize-none"
                  placeholder="Additional Message"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
                <label className="absolute left-0 -top-3 text-xs tracking-widest text-gray-400 uppercase transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary">
                  Tell us about your vision
                </label>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-primary text-white px-12 py-5 text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-primary-hover transition-all duration-300 group cursor-pointer"
              >
                Send Message
                <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Minimal Footer Signature */}
        <div className="mt-32 pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
          <p className="text-[10px] tracking-[0.4em] uppercase">
            © 2024 Aethel Architects. All rights reserved.
          </p>
          <p className="text-[10px] tracking-[0.4em] uppercase">
            Built for Generations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

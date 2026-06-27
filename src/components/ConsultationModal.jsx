import React from "react";

const ConsultationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Background Overlay */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white p-12 rounded-none shadow-2xl w-full max-w-lg">
                <h2 className="text-3xl font-light tracking-wide mb-8 text-black">
                    START A CONVERSATION
                </h2>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
                    {/* Name Field */}
                    <div className="form-group-floating">
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            className="form-input-floating peer"
                            required
                        />
                        <label htmlFor="name" className="form-label-floating">Name</label>
                    </div>

                    {/* Email Field */}
                    <div className="form-group-floating">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="form-input-floating peer"
                            required
                        />
                        <label htmlFor="email" className="form-label-floating">Email</label>
                    </div>

                    {/* Project Details */}
                    <div className="form-group-floating">
            <textarea
                id="message"
                placeholder="Tell us about your vision"
                className="form-input-floating peer min-h-[100px]"
                required
            />
                        <label htmlFor="message" className="form-label-floating">Project Details</label>
                    </div>

                    <button
                        type="submit"
                        className="btn-primary w-full mt-4 cursor-pointer"
                    >
                        Submit Inquiry
                    </button>
                </form>

                <button
                    onClick={onClose}
                    className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default ConsultationModal;
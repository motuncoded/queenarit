import React from "react";

const Hero = () => {
  return (
    <section className="bg-white md:py-16 py-12 px-6 sm:px-12 md:px-24 lg:px-32">
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col text-center">
        {/* Community members count */}
        <p className="text-[#fa57a6] font-medium mb-4">
          Join 1000+ community members
        </p>

        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Empowering Tech Professionals
          <br />
          <h1 className="text-[#fa57a6]">To Lead, Connect and Grow</h1>
        </h2>

        {/* Description paragraph */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
          <span className="font-semibold">QueenAritiCircle</span> — a free
          global tech community where developers, designers, data analysts, and
          virtual assistants collaborate, share knowledge, and create
          opportunities together.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#fa57a6] hover:bg-[#FD3B9A] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
            Join our community
          </button>
          <button className="border-2 border-[#fa57a6] text-[#fa57a6] hover:bg-purple-50 px-8 py-3 rounded-full font-medium transition-colors duration-300">
            View Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

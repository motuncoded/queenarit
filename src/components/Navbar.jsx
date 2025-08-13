import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white">
      {/* Logo/Brand Name */}
      <h1 className="text-3xl font-bold text-gray-800">
        <a href="/">QueenAritCircle</a>
      </h1>

      {/* Desktop Navigation Links - hidden on mobile */}
      <nav className="hidden md:flex md:space-x-8 lg:space-x-20">
        <a
          href="#"
          className="relative text-gray-600 hover:text-gray-900 transition-colors group"
        >
          About us
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#FD3B9A] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#"
          className="relative text-gray-600 hover:text-gray-900 transition-colors group"
        >
          Career Growth
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#FD3B9A] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#"
          className="relative text-gray-600 hover:text-gray-900 transition-colors group"
        >
          Events{" "}
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#FD3B9A] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>

      {/* Desktop Join Button - hidden on mobile */}
      <div className="hidden md:block">
        <button className="bg-[#fa57a6] px-4 py-3 text-white rounded-3xl hover:bg-[#FD3B9A] transition-colors">
          Join now
        </button>
      </div>

      {/* Mobile Menu Button - visible only on mobile */}
      <button
        className="md:hidden text-gray-600 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu - appears when menu button is clicked */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 z-50">
          <nav className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Career Growth
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </a>
            <button className="bg-[#fa57a6] px-4 py-2 text-white rounded-3xl  transition-colors w-full">
              Join now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

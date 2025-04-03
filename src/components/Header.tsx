import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white header-shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-blue-600 font-bold text-2xl">Vyttah</span>
              <span className="text-gray-700 font-light text-xl ml-1">ERP</span>
            </a>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">
              Pricing
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium">
              About Us
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#login" className="text-gray-600 hover:text-gray-900 font-medium">
              Log In
            </a>
            <a
              href="#signup"
              className="bg-blue-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pb-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">
                Pricing
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium">
                About Us
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">
                Contact
              </a>
            </nav>
            <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
              <a href="#login" className="text-gray-600 hover:text-gray-900 font-medium">
                Log In
              </a>
              <a
                href="#signup"
                className="bg-blue-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-blue-700 transition-colors duration-300 text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
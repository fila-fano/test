import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">YourBrand</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#fgbf" className="text-gray-700 hover:text-indigo-600">
            Home
          </a>
          <a href="#fb" className="text-gray-700 hover:text-indigo-600">
            About
          </a>
          <a href="#fgfd" className="text-gray-700 hover:text-indigo-600">
            Services
          </a>
          <a href="#fdb" className="text-gray-700 hover:text-indigo-600">
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="#ewe" className="block text-gray-700 hover:text-indigo-600">
            Home
          </a>
          <a href="#fgf" className="block text-gray-700 hover:text-indigo-600">
            About
          </a>
          <a href="#frgt" className="block text-gray-700 hover:text-indigo-600">
            Services
          </a>
          <a href="#regr" className="block text-gray-700 hover:text-indigo-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

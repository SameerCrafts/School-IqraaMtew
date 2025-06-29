import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "programs", label: "Programs" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-bold text-blue-600">Mtew.</h1>

        {/* Desktop Navigation */}
        <div className="space-x-11 text-xl font-medium hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-blue-600 font-semibold border-b-2 border-blue-600"
              className="cursor-pointer text-gray-800 hover:text-blue-600 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden mt-2">
          <button onClick={toggleMenu} className="text-blue-600">
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-10 h-10" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-260}
              spy={true}
              onClick={() => setIsOpen(false)} // Close menu on click
              activeClass="text-blue-600 font-semibold"
              className="block text-lg text-gray-800 hover:text-blue-600 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

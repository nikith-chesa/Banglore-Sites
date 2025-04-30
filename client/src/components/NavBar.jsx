import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "Buy", "Explore", "Contact", "Blog"];

const NavBar = ()=>{
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">BS</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 justify-center items-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-500 transition"
            >
              {link}
            </a>
          ))}
          <button className="bg-green-600 py-2 px-4 rounded-xl">login</button>
          <button className="bg-[#CCEC78] py-2 px-4 rounded-xl">signin</button>


        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-500 transition"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
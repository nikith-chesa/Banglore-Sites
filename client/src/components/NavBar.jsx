import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../public/Add a heading (1).png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Buy", path: "/lands" },
  { name: "Explore", path: "/dream-plots" },
  { name: "Contact", path: "/#contact" },
  { name: "Blog", path: "/blog" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600 bg-black rounded-full overflow-hidden">
          <img src={logo} alt="logo" width={50} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 justify-center items-center">
          {navLinks.map((link) =>
            link.path.includes("#") ? (
              <HashLink
                key={link.name}
                smooth
                to={link.path}
                className="text-gray-black hover:text-black font-semibold transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
              >
                {link.name}
              </HashLink>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-black hover:text-black font-semibold transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
              >
                {link.name}
              </Link>
            )
          )}
          <button className="text-white bg-black py-1 px-4 rounded-xl border-2 border-black hover:border-white transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            Login
          </button>
          <button className="border-2 border-black bg-white text-black py-1 px-4 rounded-xl hover:border-black transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            Signin
          </button>
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
            {navLinks.map((link) =>
              link.path.includes("#") ? (
                <HashLink
                  key={link.name}
                  smooth
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-blue-500 transition"
                >
                  {link.name}
                </HashLink>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-blue-500 transition"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

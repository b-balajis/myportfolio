import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="w-full shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 lg:max-w-6xl mx-auto">
        {/* Logo */}
        <a
          href="/"
          className="text-3xl md:text-4xl font-bold font-serif text-blue-600"
        >
          Balaji
        </a>

        {/* Toggle Button (Mobile) */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label="Toggle Navigation"
          >
            {navbarOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`${
            navbarOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 mt-6 md:mt-0 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-blue-600 transition-colors font-serif"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

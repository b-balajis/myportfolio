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
    <nav className="w-full shadow-md fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3 lg:max-w-6xl mx-auto">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl md:text-4xl font-bold font-serif text-blue-600"
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
            {navbarOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black/90 md:bg-transparent transition-all duration-300 ease-in-out ${navbarOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"
            } overflow-hidden md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 p-6 md:p-0 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-blue-600 transition-colors font-serif block"
                  onClick={() => setNavbarOpen(false)} // close after clicking
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

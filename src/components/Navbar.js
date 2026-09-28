import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Resume from "../assets/doc/Balaji_Bheemavarapu_CV.pdf";

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
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex  lg:max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* =========================
            LOGO
        ========================== */}
        <a
          href="#home"
          onClick={() => setNavbarOpen(false)}
          className="
            group
            flex
            items-center
            gap-2
            font-serif
          "
        >
          <span
            className="
              text-2xl
              md:text-3xl
              font-extrabold
              tracking-tight
              text-blue-500
              transition-all
              duration-300
              group-hover:text-blue-400
              group-hover:scale-105
            "
          >
            BB.
          </span>

          <span className="hidden sm:block text-xs text-gray-500 tracking-widest uppercase">
            Software Engineer
          </span>
        </a>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-5 lg:gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="
                    relative
                    block
                    py-2
                    text-sm
                    font-medium
                    text-gray-300
                    transition-colors
                    duration-300
                    hover:text-white
                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:h-[2px]
                    after:w-0
                    after:rounded-full
                    after:bg-blue-500
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume */}
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              rounded-lg
              bg-blue-600
              px-4
              py-2
              text-sm
              font-semibold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-700
              hover:shadow-lg
            "
          >
            Resume
          </a>
        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          type="button"
          className="
            md:hidden
            rounded-lg
            p-2
            text-gray-300
            transition-colors
            hover:bg-white/10
            hover:text-white
            focus:outline-none
          "
          onClick={() => setNavbarOpen((prev) => !prev)}
          aria-label={
            navbarOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={navbarOpen}
        >
          {navbarOpen ? (
            <CloseIcon fontSize="medium" />
          ) : (
            <MenuIcon fontSize="medium" />
          )}
        </button>
      </div>

      {/* =========================
          MOBILE NAVIGATION
      ========================== */}
      <div
        className={`
          md:hidden
          overflow-hidden
          border-t
          border-white/10
          bg-black/95
          backdrop-blur-xl
          transition-all
          duration-300
          ease-in-out
          ${navbarOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-5 py-5">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setNavbarOpen(false)}
                  className="
                    flex
                    items-center
                    rounded-lg
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-gray-300
                    transition-all
                    duration-200
                    hover:bg-blue-600/10
                    hover:text-blue-400
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Resume */}
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setNavbarOpen(false)}
            className="
              mt-4
              flex
              w-full
              items-center
              justify-center
              rounded-lg
              bg-blue-600
              px-4
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-blue-700
            "
          >
            View Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

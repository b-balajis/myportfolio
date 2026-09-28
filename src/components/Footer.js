import { Rotate } from "react-reveal";
import GitHubIcon from "../assets/icons/github.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import LeetCodeIcon from "../assets/icons/leetcode.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import TwitterIcon from "../assets/icons/x.svg";
import VisitorCounter from "./VisitorCouter";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialMedia = [
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      link: "https://www.linkedin.com/in/b-balajis/",
    },
    {
      name: "GitHub",
      icon: GitHubIcon,
      link: "https://github.com/b-balajis",
    },
    {
      name: "LeetCode",
      icon: LeetCodeIcon,
      link: "https://leetcode.com/u/b_balajis/",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      link: "https://www.instagram.com/balaji._.b/",
    },
    {
      name: "X",
      icon: TwitterIcon,
      link: "https://twitter.com/B_Balajis",
    },
  ];

  return (
    <footer
      id="footer"
      className="relative bg-[#050505] border-t border-white/10 font-serif overflow-hidden"
    >
      {/* Subtle blue glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[120px] bg-blue-600/10 blur-[90px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 py-9 sm:py-10">
        <div className="flex flex-col items-center text-center">
          {/* Name */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Balaji Bheemavarapu
          </h2>

          {/* Professional tagline */}
          <p className="mt-2 text-sm sm:text-base text-gray-400">
            Full Stack Software Engineer
            <span className="mx-2 text-blue-500">·</span>
            React
            <span className="mx-2 text-blue-500">·</span>
            Node.js
            <span className="mx-2 text-blue-500">·</span>
            TypeScript
            <span className="mx-2 text-blue-500">·</span>
            AI
          </p>

          {/* Social links */}
          <Rotate bottom left duration={1500}>
            <div className="flex items-center justify-center gap-3 mt-6">
              {socialMedia.map((app) => (
                <a
                  key={app.name}
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Balaji's ${app.name}`}
                  className="
                    group
                    w-10 h-10 sm:w-11 sm:h-11
                    rounded-full
                    flex items-center justify-center
                    bg-white/[10.03]
                    border border-white/10
                    hover:border-blue-500/50
                    hover:bg-blue-500/10
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <img
                    src={app.icon}
                    alt=""
                    className="
                      w-5 h-5 sm:w-6 sm:h-6
                      opacity-80
                      group-hover:opacity-100
                      transition-opacity duration-300
                    "
                  />
                </a>
              ))}
            </div>
          </Rotate>

          {/* Divider */}
          <div className="w-full max-w-3xl h-px bg-white/10 mt-7 mb-5" />

          {/* Bottom */}
          <div
            className="
              flex flex-col sm:flex-row
              items-center justify-center
              gap-2 sm:gap-4
              text-xs sm:text-sm
              text-gray-500
            "
          >
            <span>© {year} Balaji Bheemavarapu</span>

            <span className="hidden sm:block text-gray-700">•</span>

            {/* Don't add "Visitors:" here because VisitorCounter already does it */}

            <VisitorCounter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

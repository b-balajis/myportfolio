import { useEffect, useState } from "react";
import { Rotate } from "react-reveal";
import GitHubIcon from "../assets/icons/github.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import LeetCodeIcon from "../assets/icons/leetcode.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import TwitterIcon from "../assets/icons/x.svg";
import VisitorCounter from "./VisitorCouter";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000 * 60 * 60 * 24 * 365);

    return () => clearInterval(interval);
  }, []);

  const socialMedia = [
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      link: "https://www.linkedin.com/in/b-balajis/",
      color: "blue",
    },
    {
      name: "GitHub",
      icon: GitHubIcon,
      link: "https://github.com/b-balajis",
      color: "black",
    },
    {
      name: "LeetCode",
      icon: LeetCodeIcon,
      link: "https://leetcode.com/u/b_balajis/",
      color: "blue",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      link: "https://www.instagram.com/balaji._.b/",
      color: "red",
    },
    {
      name: "Twitter",
      icon: TwitterIcon,
      link: "https://twitter.com/B_Balajis",
      color: "blue",
    },
  ];

  return (
    <section id="footer">
      <div className="bg-blue-600 py-6 sm:py-4 font-serif">
        <div className="text-center mx-auto max-w-7xl px-4">
          {/* Name */}
          <p className="text-2xl sm:text-3xl font-bold text-white">
            Balaji Bheemavarapu
          </p>

          {/* Social icons */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 my-6">
            <Rotate bottom left duration={3000}>
              {socialMedia.map((app, idx) => (
                <a
                  key={idx}
                  href={app.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <div
                    className="bg-white rounded-full p-2 sm:p-3 flex items-center justify-center shadow-md md:p-[.5vh]"
                    style={{ color: app.color }}
                  >
                    <img
                      src={app.icon}
                      alt={app.name}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </div>
                </a>
              ))}
            </Rotate>
          </div>

          {/* Copyright */}
          <p className="text-white text-sm sm:text-base mb-2">
            <span className="text-lg">&copy;</span> {year} Balaji Bheemavarapu
            <VisitorCounter />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

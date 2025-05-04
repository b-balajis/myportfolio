import React, { useEffect, useState } from "react";
import { Rotate } from "react-reveal";
import GitHubIcon from "../assets/icons/github.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import LeetCodeIcon from "../assets/icons/leetcode.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import TwitterIcon from "../assets/icons/x.svg";

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
      <div className="bg-blue-600 py-[1vh] font-serif">
        <div className="text-center mx-auto lg:max-w-7xl">
          <p className="text-3xl font-bold text-white">Balaji Bheemavarapu</p>
          <div className="flex space-x-5 justify-center my-[2vh]">
            <Rotate bottom left duration={3000}>
              {socialMedia.map((app) => (
                <a href={app.link} target="_blank" rel="noreferrer">
                  <div
                    className="bg-white rounded-full p-[.5vh]"
                    style={{
                      color: `${app.color}`,
                    }}
                  >
                    <img src={app.icon} alt={app.name} width={32} />
                  </div>
                </a>
              ))}
            </Rotate>
          </div>
          <p className="text-white mb-2">
            <span className="text-lg"> &copy;</span> {year} Balaji Bheemavarapu
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import Resume from "../assets/doc/Balaji_Bheemavarapu_Resume.pdf";
import CodeCloseIcon from "../assets/icons/code.svg";
import CodeOpenIcon from "../assets/icons/codeIcon.svg";
import GitHubIcon from "../assets/icons/githubHome.svg";
import LeetCode from "../assets/icons/leetcode.svg";
import LinkedInIcon from "../assets/icons/linkedin-svgrepo-com.svg";
import Balaji from "../assets/img/balajis.png";

const roles = [
  "MERN Stack Developer",
  "Full Stack Web Developer",
  "Frontend Developer",
  "React.js Developer",
  "Node.js Developer",
  "JavaScript Developer",
];

const Home = () => {
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
      icon: LeetCode,
      link: "https://leetcode.com/u/b_balajis/",
    },
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);

          if (charIndex === currentRole.length) {
            setDeleting(true);
            setTimeout(() => {}, 1000);
          }
        } else {
          setText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);

          if (charIndex === 0) {
            setDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      deleting ? 50 : 120
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section id="home" className="py-6">
      <Fade delay={1e1} cascade damping={1e3}>
        <div className="flex flex-col justify-center place-items-center mx-auto v-screen lg:flex-row lg:justify-around lg:max-w-6xl md:mt-[16vh]">
          {/* Social Icons */}
          <div className="hidden md:flex flex-col space-y-4">
            {socialMedia.map((app, index) => (
              <a
                href={app.link}
                key={index}
                target="_blank"
                rel="noreferrer"
                aria-label={app.name}
              >
                <div
                  className={`bg-white p-2 rounded-lg shadow-md hover:scale-110 transition-transform duration-200 `}
                >
                  <img src={app.icon} alt={`${app.name} icon`} width={36} />
                </div>
              </a>
            ))}
          </div>

          {/* Intro Text */}
          <div className="space-y-6 text-center lg:text-left font-serif max-w-xl">
            <img
              src={CodeOpenIcon}
              alt="Code Open Icon"
              width={40}
              className="mx-auto lg:mx-0"
            />
            <div className="space-y-6">
              <h3 className="text-2xl ">Hello, I'm</h3>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
                Balaji Bheemavarapu
              </h1>
              <h2 className="text-2xl md:text-3xl  font-semibold">
                {text}
                <span className="animate-blink ">|</span>
              </h2>

              <p className="text-lg md:text-xl ">
                Full Stack Developer with 2.5+ years of hands-on experience in
                MERN stack, REST/GraphQL APIs, TypeScript, Azure DevOps & cloud.
                Skilled in building scalable fintech apps, CI/CD, and writing
                clean, testable code in Agile environments.
              </p>
            </div>
            <a
              href={Resume} // Replace with your actual resume file path
              download
              className="inline-flex items-center px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition duration-200 shadow"
            >
              Download Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                />
              </svg>
            </a>

            <img
              src={CodeCloseIcon}
              alt="Code Close Icon"
              width={40}
              className="mx-auto lg:mx-0"
            />
          </div>

          {/* Profile Image */}
          <div className="mt-[16rem] lg:mt-0 bg-blue-600 rounded-full overflow-hidden shadow-lg animate-float ">
            <img
              src={Balaji}
              alt="Balaji Bheemavarapu Profile"
              className="w-72 h-96 object-cover rounded-full p-1 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Home;

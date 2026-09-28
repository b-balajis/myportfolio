import { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import Resume from "../assets/doc/Balaji_Bheemavarapu_CV.pdf";
import CodeCloseIcon from "../assets/icons/code.svg";
import CodeOpenIcon from "../assets/icons/codeIcon.svg";
import GitHubIcon from "../assets/icons/githubHome.svg";
import LeetCode from "../assets/icons/leetcode.svg";
import LinkedInIcon from "../assets/icons/linkedin-svgrepo-com.svg";
import BalajiProfessionalProfile from "../assets/img/bbalajis.png";

const roles = [
  "Full Stack Software Engineer",
  "React.js Developer",
  "Node.js Developer",
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
      deleting ? 50 : 120,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section id="home" className="md:py-14 py-12">
      <Fade delay={1e1} cascade damping={1e3}>
        <div className="flex flex-col items-center justify-center mx-auto lg:flex-row lg:justify-around lg:max-w-6xl md:mt-[0.5vh]">
          {/* Social Icons - left for lg, below intro for mobile */}
          <div className="hidden lg:flex flex-col space-y-4">
            {socialMedia.map((app, index) => (
              <a
                href={app.link}
                key={index}
                target="_blank"
                rel="noreferrer"
                aria-label={app.name}
              >
                <div className="bg-white p-2 rounded-lg shadow-md hover:scale-110 transition-transform duration-200">
                  <img src={app.icon} alt={`${app.name} icon`} width={32} />
                </div>
              </a>
            ))}
          </div>

          {/* Intro Text */}
          <div className="space-y-2 text-center lg:text-left font-serif max-w-xl px-4">
            <img
              src={CodeOpenIcon}
              alt="Code Open Icon"
              width={28}
              className="mx-auto lg:mx-0"
            />

            <div className="space-y-5">
              {/* Greeting */}
              <p className="text-sm md:text-base font-medium text-slate-500 dark:text-slate-400">
                Hello, I'm
              </p>

              {/* Profile image - Mobile only */}
              <div className="flex justify-center lg:hidden">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl" />

                  <div className="relative rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 p-[3px] shadow-xl animate-float">
                    <img
                      src={BalajiProfessionalProfile}
                      alt="Balaji Bheemavarapu Profile"
                      className="h-36 w-36 rounded-full object-cover bg-white dark:bg-slate-900"
                    />
                  </div>

                  {/* Availability indicator */}
                  <span
                    className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900"
                    title="Available immediately"
                  />
                </div>
              </div>

              {/* Name */}
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-[54px]">
                Balaji{" "}
                <span className="text-blue-600 dark:text-blue-500">
                  Bheemavarapu
                </span>
              </h1>

              {/* Role */}
              <div className="flex flex-wrap items-center gap-2 text-lg font-semibold text-slate-700 dark:text-slate-200 md:text-xl">
                <span>{text}</span>
                <span className="text-blue-600 animate-blink">|</span>
              </div>

              {/* Availability */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Immediate Joiner · 0 Days Notice Period
              </div>

              {/* Description */}
              <div className="max-w-2xl space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
                <p>
                  Full Stack Software Engineer with{" "}
                  <strong className="text-slate-900 dark:text-white">
                    4+ years of experience
                  </strong>{" "}
                  building enterprise applications using React, Next.js, Node.js
                  and TypeScript.
                </p>

                <p>
                  I build scalable frontend and backend solutions, REST APIs,
                  micro-frontends, microservices and high-performance
                  applications, with experience across banking, mortgage and
                  AI-powered platforms.
                </p>

                <p>
                  Currently focused on{" "}
                  <strong className="text-blue-600 dark:text-blue-400">
                    backend engineering, full-stack development and AI-powered
                    applications
                  </strong>
                  , including LLM and modern AI API integrations.
                </p>
              </div>

              {/* CTA */}
              <div className="py-1">
                <a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm md:text-base font-semibold rounded-lg hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  View Resume
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <img
              src={CodeCloseIcon}
              alt="Code Close Icon"
              width={28}
              className="mx-auto lg:mx-0"
            />

            {/* Social Icons for mobile */}
            <div className="flex lg:hidden justify-center space-x-4 mt-6">
              {socialMedia.map((app, index) => (
                <a
                  href={app.link}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={app.name}
                >
                  <div className="bg-white p-2 rounded-lg shadow-md hover:scale-110 transition-transform duration-200">
                    <img src={app.icon} alt={`${app.name} icon`} width={28} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image for large screens */}
          <div className="hidden lg:block mt-12 lg:mt-0 bg-blue-600 rounded-full overflow-hidden shadow-lg animate-float">
            <img
              src={BalajiProfessionalProfile}
              alt="Balaji Bheemavarapu Profile"
              className="w-80 object-cover rounded-full p-1 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Home;

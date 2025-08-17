import { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import Resume from "../assets/doc/Balaji_Bheemavarapu_Resume.pdf";
import CodeCloseIcon from "../assets/icons/code.svg";
import CodeOpenIcon from "../assets/icons/codeIcon.svg";
import GitHubIcon from "../assets/icons/githubHome.svg";
import LeetCode from "../assets/icons/leetcode.svg";
import LinkedInIcon from "../assets/icons/linkedin-svgrepo-com.svg";
import Balaji from "../assets/img/balajis.png";

const roles = [
  "Full Stack Developer",
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
      deleting ? 50 : 120
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section id="home" className="md:py-14 py-12">
      <Fade delay={1e1} cascade damping={1e3}>
        <div className="flex flex-col items-center justify-center mx-auto lg:flex-row lg:justify-around lg:max-w-6xl md:mt-[12vh]">
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
          <div className="space-y-6 text-center lg:text-left font-serif max-w-xl px-4">
            <img
              src={CodeOpenIcon}
              alt="Code Open Icon"
              width={32}
              className="mx-auto lg:mx-0"
            />

            <div className="space-y-4">
              <h3 className="text-lg md:text-xl">Hello, I'm</h3>

              {/* Profile image ONLY for mobile */}
              <div className="flex justify-center lg:hidden">
                <div className="mt-4 mb-4 bg-blue-600 rounded-full overflow-hidden shadow-lg animate-float">
                  <img
                    src={Balaji}
                    alt="Balaji Bheemavarapu Profile"
                    className="w-40 h-40 object-cover rounded-full p-1 hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
                Balaji Bheemavarapu
              </h1>

              <h2 className="text-lg md:text-2xl font-semibold">
                {text}
                <span className="animate-blink">|</span>
              </h2>

              <p className="text-sm md:text-lg leading-relaxed">
                Full Stack Developer with 3+ years (2.2 years full-time)
                of experience in scalable MERN stack development.
                Skilled in REST/GraphQL APIs, TypeScript, and
                DevOps with Docker, Kubernetes, and Azure.
                Exploring LLM integration and AI-assisted workflows
                (LangChain, Copilot, GenAI). Familiar with designing
                microservice architectures and scalable system
                design patterns.

              </p>
            </div>

            <a
              href={Resume}
              download
              className="inline-flex items-center px-5 py-2 bg-blue-600 text-white text-sm md:text-base font-medium rounded hover:bg-blue-700 transition duration-200 shadow"
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
              width={32}
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

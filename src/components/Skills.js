import Flip from "react-reveal/Flip";

import Azure from "../assets/icons/azure-devops-svgrepo-com.svg";
import Bootstrap from "../assets/icons/bootstrap.svg";
import Git from "../assets/icons/git.svg";
import GraphQL from "../assets/icons/graphql-icon.svg";
import JavaScript from "../assets/icons/javascript.svg";
import Jest from "../assets/icons/jest-js-icon.svg";
import NodeJS from "../assets/icons/nodejs-1.svg";
import Python from "../assets/icons/python.svg";
import ReactJS from "../assets/icons/react.svg";
import Redux from "../assets/icons/redux.svg";
import TailwindCSS from "../assets/icons/tailwind-css.svg";
import TypeScript from "../assets/icons/typescript.svg";
import Express from "../assets/img/express.png";
import MUI from "../assets/img/mui.png";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      shortTitle: "LANGUAGES",
      skills: [
        { name: "JavaScript", icon: JavaScript },
        { name: "TypeScript", icon: TypeScript },
        { name: "Python", icon: Python },
      ],
    },

    {
      title: "Frontend",
      shortTitle: "FRONTEND",
      skills: [
        { name: "React", icon: ReactJS },
        { name: "Next.js", short: "N" },
        { name: "Redux", icon: Redux },
        { name: "Micro Frontends", short: "MF" },
        { name: "Tailwind CSS", icon: TailwindCSS },
        { name: "Material UI", icon: MUI },
        { name: "Bootstrap", icon: Bootstrap },
      ],
    },

    {
      title: "Backend",
      shortTitle: "BACKEND",
      skills: [
        { name: "Node.js", icon: NodeJS },
        { name: "Express.js", icon: Express },
        { name: "REST APIs", short: "API" },
        { name: "Microservices", short: "MS" },
        { name: "Redis", short: "R" },
        { name: "MongoDB", short: "MDB" },
        { name: "MySQL", short: "SQL" },
        { name: "GraphQL", icon: GraphQL },
      ],
    },

    {
      title: "Cloud & DevOps",
      shortTitle: "CLOUD & DEVOPS",
      skills: [
        { name: "Azure", icon: Azure },
        { name: "Azure API Management", short: "APIM" },
        { name: "Docker", short: "D" },
        { name: "Azure DevOps", icon: Azure },
        { name: "GitHub Actions", short: "GH" },
        { name: "CI/CD", short: "CI" },
        { name: "Webpack", short: "W" },
        { name: "Git", icon: Git },
      ],
    },

    {
      title: "Security & Testing",
      shortTitle: "SECURITY & TESTING",
      skills: [
        { name: "OAuth 2.0", short: "OA" },
        { name: "JWT", short: "JWT" },
        { name: "Authentication", short: "AUTH" },
        { name: "Authorization", short: "AZ" },
        { name: "RBAC", short: "RBAC" },
        { name: "Jest", icon: Jest },
        { name: "React Testing Library", short: "RTL" },
        { name: "Dynatrace", short: "D" },
        { name: "SonarQube", short: "SQ" },
      ],
    },

    {
      title: "AI / GenAI",
      shortTitle: "AI / GENAI",
      skills: [
        { name: "LLM Integration", short: "LLM" },
        { name: "GPT-4", short: "GPT" },
        { name: "OpenAI API", short: "AI" },
        { name: "Gemini", short: "G" },
        { name: "Claude", short: "C" },
        { name: "Prompt Engineering", short: "PE" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-2 scroll-mt-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif">
            Technical Skills
          </h1>

          <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded-full" />

          <p className="max-w-2xl mx-auto mt-5 text-sm md:text-base text-gray-400 leading-relaxed">
            Technologies and tools I use to build scalable, secure and
            production-ready applications.
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-1.5 h-5 bg-blue-600 rounded-full" />

                  <h2 className="text-sm md:text-base font-semibold tracking-wider text-gray-200 uppercase">
                    {category.shortTitle}
                  </h2>
                </div>

                <div className="h-px bg-gradient-to-r from-gray-700 to-transparent flex-1" />
              </div>

              {/* Skill Grid */}
              <div
                className="
                  grid
                  grid-cols-2
                  sm:grid-cols-3
                  md:grid-cols-4
                  lg:grid-cols-5
                  xl:grid-cols-6
                  gap-3
                  md:gap-4
                "
              >
                {category.skills.map((skill, index) => (
                  <Flip key={skill.name} left cascade duration={800}>
                    <div
                      className="
                        group
                        relative
                        h-[92px]
                        md:h-[100px]
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.025]
                        backdrop-blur-md
                        overflow-hidden
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-blue-500/50
                        hover:bg-blue-500/[0.06]
                        hover:shadow-[0_8px_30px_rgba(37,99,235,0.12)]
                      "
                    >
                      {/* Subtle blue glow */}
                      <div
                        className="
                          absolute
                          -right-6
                          -top-6
                          h-16
                          w-16
                          rounded-full
                          bg-blue-500/10
                          blur-2xl
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-300
                        "
                      />

                      <div className="relative h-full flex flex-col items-center justify-center">
                        {/* Icon */}
                        <div
                          className="
                            h-10
                            w-10
                            md:h-11
                            md:w-11
                            flex
                            items-center
                            justify-center
                            mb-2
                            rounded-lg
                            bg-black/50
                            border
                            border-white/5
                            group-hover:border-blue-500/30
                            transition-colors
                            duration-300
                          "
                        >
                          {skill.icon ? (
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="
                                h-7
                                w-7
                                md:h-8
                                md:w-8
                                object-contain
                                transition-transform
                                duration-300
                                group-hover:scale-110
                              "
                            />
                          ) : (
                            <span
                              className="
                                text-[10px]
                                md:text-xs
                                font-bold
                                tracking-tight
                                text-blue-400
                                group-hover:text-blue-300
                              "
                            >
                              {skill.short}
                            </span>
                          )}
                        </div>

                        {/* Skill Name */}
                        <p
                          className="
                            text-[10px]
                            sm:text-xs
                            md:text-[13px]
                            text-center
                            leading-tight
                            px-1
                            text-gray-300
                            group-hover:text-white
                            transition-colors
                            duration-300
                          "
                        >
                          {skill.name}
                        </p>
                      </div>
                    </div>
                  </Flip>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* =========================
            SKILL SUMMARY
        ========================== */}

        <div
          className="
            mt-10
            md:mt-12
            rounded-2xl
            border
            border-blue-500/20
            bg-blue-500/[0.035]
            px-5
            py-5
            md:px-8
            md:py-6
            text-center
          "
        >
          <p className="text-xs md:text-sm text-gray-400">
            <span className="text-blue-400 font-semibold">Core Focus:</span>{" "}
            Full Stack Engineering · Backend Development · Scalable APIs ·
            Microservices · AI / GenAI
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

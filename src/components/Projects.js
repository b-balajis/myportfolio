import { Card, CardContent } from "@mui/material";
import { Zoom } from "react-reveal";

import APE from "../assets/img/ape.png";
// Add your AI Agent project image when available
// import AIAgent from "../assets/img/AIAgent.png";

const Projects = () => {
  const projects = [
    {
      title: "AI Agent for Automated User Story Breakdown",

      desc: `Led a 5-member team during a 6-hour hackathon to build an AI-driven solution that converts user stories into actionable development tasks. Developed a production-ready prototype using React, Tailwind, Node.js, Express and Docker, integrating Gemini 2.5 for intelligent task generation.`,

      // img: AIAgent,

      techStack: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "Docker",
        "Gemini 2.5",
        "LLM Integration",
      ],
    },

    {
      title: "Automated Programming Evaluation",

      desc: `Developed a real-time code evaluation platform supporting C, C++, Java and Python. Implemented role-based access, automated test-case scoring and a responsive interface using Tailwind CSS and Material UI. Deployed using GitHub Actions CI/CD and tested with 60+ active users.`,

      img: APE,

      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Material UI",
        "RBAC",
        "CI/CD",
      ],
    },
  ];

  return (
    <section id="projects" className="py-8 scroll-mt-8 text-white">
      <div className="font-serif mx-auto lg:max-w-6xl px-4">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Featured Projects
        </h2>

        <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded-lg mb-12" />

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Zoom key={index} duration={1000}>
              <Card
                component="article"
                sx={{
                  width: "100%",
                  minHeight: 520,
                  backgroundColor: "#1f2937",
                  borderRadius: 4,
                  color: "#fff",
                  boxShadow: 8,
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",

                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.4)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    p: 3,
                  }}
                >
                  {/* Project Image */}
                  {project.img && (
                    <img
                      src={project.img}
                      alt={`${project.title} preview`}
                      className="h-48 w-full object-cover rounded-lg mb-5"
                    />
                  )}

                  {/* Project Icon / Placeholder */}
                  {!project.img && (
                    <div className="h-48 w-full rounded-lg mb-5 flex items-center justify-center bg-gradient-to-br from-blue-600/30 to-purple-600/30 border border-blue-500/20">
                      <div className="text-center px-6">
                        <div className="text-5xl mb-3">🤖</div>

                        <p className="text-sm text-blue-300 font-semibold">
                          AI / GenAI Project
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold text-center">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-6 mt-4 text-gray-300">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-700/80 border border-gray-600 text-xs px-2.5 py-1 rounded-md text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* No external links intentionally */}
                  <div className="mt-auto pt-6">
                    <div className="h-px bg-gray-700" />

                    <p className="text-xs text-gray-500 text-center mt-4">
                      Built as part of my engineering & AI/GenAI work
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

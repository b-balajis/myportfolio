import { Card, CardContent } from "@mui/material";
import { Zoom } from "react-reveal";
import Launch from "../assets/icons/launch.svg";
import APE from "../assets/img/ape.png";
import RatInMaze from "../assets/img/RatInMaze.png";
import RMS from "../assets/img/RMS.png";

const Projects = () => {
  const projects = [
    {
      title: "Automated Programming Evaluation",
      desc: `Developed a full-stack coding platform using the MERN stack, enabling real-time code execution for C, C++, Python, and Java. Implemented secure role-based (JWT) authentication, dynamic test case logic, and automated grading.\nThe platform was tested by 60+ students during mock assessments and offers a responsive UI across devices. CI/CD pipelines and MongoDB Atlas were used for scalable deployment and data management.`,
      liveLink: "https://apecode.bbalajis.com/",
      githubLink: "https://github.com/your-repo",
      img: APE,
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux (Thunk)",
        "Tailwind CSS",
        "Material UI",
      ],
    },
    {
      title: "Academic Results Management Portal",
      desc: `Built a role-based web portal for admin(HOD), faculty and students to manage academic results, featuring dynamic CGPA, percentage, and backlog tracking. Enabled Excel-based bulk uploads, department-wise classification, and real-time filtering and exporting.\nThe faculty dashboard supports result management, while students can view detailed subject-wise scores.`,
      liveLink: "#",
      githubLink: "#",
      img: RMS,
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Material UI",
      ],
    },
    {
      title: "Rat-in-a-Maze",
      desc: "Developed an interactive Rat-in-a-Maze simulation using DFS and BFS algorithms to visualize pathfinding in a dynamic grid. Users can generate custom mazes, apply different algorithms, and observe how the rat explores and finds the optimal path. The project combines engaging UI with algorithmic logic to enhance understanding of problem-solving techniques.",
      liveLink: "#",
      githubLink: "#",
      img: RatInMaze,
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Material UI",
        "DFS",
        "BFS",
        "Stack",
        "Queues",
      ],
    },
  ];

  return (
    <section id="projects" className="py-12 scroll-mt-8 text-white">
      <div className="font-serif mx-auto lg:max-w-7xl px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">
          Personal Projects
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 font-serif">
          {projects.map((project, index) => (
            <Zoom key={index} duration={1800}>
              <Card
                component="article"
                sx={{
                  width: "100%",
                  maxWidth: 380,
                  minHeight: 520,
                  backgroundColor: "#1f2937",
                  borderRadius: 4,
                  color: "#fff",
                  cursor: "pointer",
                  boxShadow: 8,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.02)",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.4)",
                  },
                }}
              >
                <CardContent>
                  <img
                    src={project.img}
                    alt={`${project.title} preview`}
                    className="h-40 w-full object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-bold mt-2 text-center font-serif">
                    {project.title}
                  </h3>
                  <p className="text-sm mt-3 text-gray-300 px-2 font-serif">
                    {project.desc}
                  </p>

                  {/* Tech Stack as Chips */}
                  <div className="flex flex-wrap gap-2 mt-4 px-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 text-xs px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-center mt-5 gap-4 text-blue-400">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="underline text-sm hover:text-blue-300 transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="underline text-sm hover:text-blue-300 transition-colors flex items-center gap-1"
                      >
                        Live Demo <img src={Launch} alt="Launch" width={16} />
                      </a>
                    )}
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

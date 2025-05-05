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
      desc: `Developed a full-stack coding platform using the MERN stack, enabling real-time code execution for C, C++, Python, and Java. Implemented secure role-based (JWT) authentication, dynamic test case logic, and automated grading.\n The platform was tested by 60+ students during mock assessments and offers a responsive UI across devices. CI/CD pipelines and MongoDB Atlas were used for scalable deployment and data management.`,
      link: "https://apecode.bbalajis.com/",
      linkName: "apecode.bbalajis.com",
      img: APE,
      techStack:
        "React.js, Node.js, Express.js, MongoDB, Redux (Thunk), Tailwind CSS, Material UI",
    },
    {
      title: "Academic Results Management Portal",
      desc: `Built a role-based web portal for admin(HOD), faculty and students to manage academic results, featuring dynamic CGPA, percentage, and backlog tracking. Enabled Excel-based bulk uploads, department-wise classification, and real-time filtering and exporting.\nThe faculty dashboard supports result management, while students can view detailed subject-wise scores.`,
      link: "#",
      linkName: "-------",
      img: RMS,
      techStack:
        "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Material UI",
    },
    {
      title: "Rat-in-a-Maze",
      desc: "Developed an interactive Rat-in-a-Maze simulation using DFS and BFS algorithms to visualize pathfinding in a dynamic grid. Users can generate custom mazes, apply different algorithms, and observe how the rat explores and finds the optimal path. The project combines engaging UI with algorithmic logic to enhance understanding of problem-solving techniques.",
      link: "#",
      linkName: "-----",
      img: RatInMaze,
      techStack:
        "React.js, Tailwind CSS, Material UI, DFS, BFS, Stack & Queues.",
    },
    // {
    //   title: "Online PhoneBook",
    //   desc: "Secure cloud-based phonebook with sync-free access from any device.",
    //   link: "https://phonebook.bbalajis.com/",
    //   linkName: "phonebook.bbalajis.com",
    //   img: PhoneBook,
    // },
    // {
    //   title: "Todo App Using ReactJS",
    //   desc: "Full CRUD todo list application with responsive design and user-friendly interactions.",
    //   link: "https://todo.bbalajis.com",
    //   linkName: "todo.bbalajis.com",
    //   img: Image,
    // },
    // {
    //   title: "Online Food Services",
    //   desc: "A PHP-based food ordering system designed for student clubs and events.",
    //   link: "https://gmritchapter.acm.org/p/balajis/foods/login.php",
    //   linkName: "orderFood",
    //   img: OnlineFood,
    // },
  ];

  const handleRedirect = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="projects" className="py-12 scroll-mt-8 text-white">
      <div className="font-serif mx-auto lg:max-w-7xl px-4">
        <h2 className="text-5xl font-bold text-center mb-10">
          Personal Projects
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 font-serif">
          {projects.map((project, index) => (
            <Zoom key={index} duration={1800}>
              <Card
                sx={{
                  width: 360,
                  height: 570,
                  backgroundColor: "#1f2937",
                  borderRadius: 4,
                  color: "#fff",
                  cursor: "pointer",
                  boxShadow: 10,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "rotateY(3deg) rotateX(3deg) scale(1.02)",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                  },
                }}
                onClick={() => handleRedirect(project.link)}
              >
                <CardContent>
                  <img
                    src={project.img}
                    alt={`${project.title} preview`}
                    className="h-[36%] w-full object-cover rounded-md mb-4"
                  />
                  <h3 className="text-base font-bold mt-4 text-center font-serif">
                    {project.title}
                  </h3>
                  <p className="text-sm mt-2 text-wrap px-2 font-serif">
                    {project.desc}
                  </p>
                  <div className="mt-2 px-2 font-serif">
                    <p className="text-xs font-semibold">Tech Stack:</p>
                    <p className="text-xs italic">{project.techStack}</p>
                  </div>

                  <div className="flex items-center justify-center mt-4 text-blue-400 gap-1">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-sm hover:text-blue-300 transition-colors"
                    >
                      GitHub
                    </a>
                    |
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-sm hover:text-blue-300 transition-colors"
                    >
                      Live Demo
                    </a>
                    <img src={Launch} alt="Launch" width={20} />
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

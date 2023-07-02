import { React, useState } from "react";
import Card from "react-animated-3d-card";
import { Zoom } from "react-reveal";
import Launch from "../assets/icons/launch.svg";
import Image from "../assets/img/1.png";
import APE from "../assets/img/ape.png";
import OnlineFood from "../assets/img/online.png";
import PhoneBook from "../assets/img/phonebook.png";

const Projects = () => {
  const [launch, setLaunch] = useState(false);
  console.log(launch);
  const Projects = [
    {
      title: "Automated Programming Evaluation",
      desc: "Students can test in this platform and based on code, marks will be generated and shared to respective Faculty",
      link: "https://apecode.bbalajis.com/",
      linkName: "apecode.bbalajis.com",
      img: APE,
    },
    {
      title: "Online PhoneBook",
      desc: "User can save contacts here. And can login from any devices without syncing data in other devices.",
      link: "https://phonebook.bbalajis.com/",
      linkName: "phonebook.bbalajis.com",
      img: PhoneBook,
    },
    {
      title: "Todo App Using ReactJS",
      desc: "Able to add, edit, delete and fetch the users Todo Work.",
      link: "https://todo.bbalajis.com",
      linkName: "todo.bbalajis.com",
      img: Image,
    },
    {
      title: "Online Food Services",
      desc: "This application can be used to order food through Online. It was made by using PHP",
      link: "https://gmritchapter.acm.org/p/balajis/foods/login.php",
      linkName: "orderFood",
      img: OnlineFood,
    },
  ];

  const handleRedirect = (link) => {
    console.log(link);
    window.open(link, "_blank");
  };
  return (
    <section id="projects">
      <div className="font-serif mx-auto lg:max-w-7xl h-auto justify-center">
        <h1 className="text-5xl font-bold text-center">Projects</h1>
        <div className="md:grid md:grid-cols-2 xl:grid-cols-3 mt-[5vh] lg:px-[1vw] gap-x-8 gap-y-8">
          {Projects.map((project, index) => {
            return (
              <>
                <Zoom  duration={3000}>
                  <div
                    key={index}
                    className="relative mt-[5vh] md:mt-0 flex justify-center v-screen"
                    onMouseEnter={() => setLaunch(true)}
                    onMouseLeave={() => setLaunch(false)}
                  >
                    <Card
                      style={{
                        width: 380,
                        height: 450,
                        cursor: "pointer",
                      }}
                      onClick={() => handleRedirect(project.link)}
                    >
                      <img
                        src={project.img}
                        alt="img"
                        className="w-fit h-2/3"
                      />
                      <p className="text-center text-xl font-bold">
                        {project.title}
                      </p>
                      <p className="text-base px-[1vw] text-justify">
                        {project.desc}
                      </p>
                      <div className="text-center text-sky-700 flex justify-center gap-1 bg-slate-50 absolute inset-x-0 bottom-4">
                        <img src={Launch} alt="link" width={20} />
                        <a href={project.link} target="_blank" rel="noreferrer">
                          {project.linkName}
                        </a>
                      </div>
                    </Card>
                  </div>
                </Zoom>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

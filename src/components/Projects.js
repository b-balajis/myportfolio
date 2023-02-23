import { React } from "react";
import Card from "react-animated-3d-card";
import { Navigate } from "react-router-dom";
import Image from "../assets/img/1.png";
import Bounce from "react-reveal/Bounce";

const Projects = () => {
  const Projects = [
    {
      title: "Project 1",
      desc: "Description",
      link: "www.bbalajis.com",
      img: Image,
    },
    {
      title: "Project 1",
      desc: "Description",
      link: "www.bbalajis.com",
      img: Image,
    },
    {
      title: "Project 1",
      desc: "Description",
      link: "www.bbalajis.com",
      img: Image,
    },
    {
      title: "Project 1",
      desc: "Description",
      link: "www.bbalajis.com",
      img: Image,
    },
    {
      title: "Project 1",
      desc: "Description",
      link: "www.bbalajis.com",
      img: Image,
    },
  ];

  const handleRedirect = (link) => {
    console.log(link);
    Navigate(link);
  };
  return (
    <section id="projects">
      <div className="lg:max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center">Projects</h1>
        <div className="md:flex flex-wrap mt-[5vh] justify-center lg:justify-start lg:px-[1vw] gap-x-5 gap-y-8">
          {Projects.map((project, index) => {
            return (
              <Bounce top>
                <div key={index} className="relative">
                  <Card
                    style={{
                      color: "red",
                      width: "400px",
                      height: "250px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleRedirect(project.link)}
                  >
                    <img src={project.img} alt="img" />
                  </Card>
                  <p className="text-center">{project.title}</p>
                  <p>{project.desc}</p>
                </div>
              </Bounce>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

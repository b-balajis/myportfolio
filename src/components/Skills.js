import React from "react";
import Developer from "../assets/img/developer.jpg";
import Python from "../assets/icons/python.svg";

const Skills = () => {
  const languages = [
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "Java",
      icon: "",
    },
    {
      name: "JavaScript",
      icon: "",
    },
    {
      name: "C",
      icon: "",
    },
  ];
  //ReactJS, Tailwind CSS, Material UI, Bootstrap, PHP, Flask, Git, Heroku, Firebase Hosting
  const tools = [
    {
      name: "ReactJS",
      icon: "",
    },
    {
      name: "Tailwind CSS",
      icon: "",
    },
    {
      name: "Material UI",
      icon: "",
    },
    {
      name: "Bootstrap",
      icon: "",
    },
    {
      name: "PHP",
      icon: "",
    },
    {
      name: "Flask",
      icon: "",
    },
    {
      name: "Git",
      icon: "",
    },
    {
      name: "Heroku",
      icon: "",
    },
    {
      name: "Firebase",
      icon: "",
    },
  ];
  return (
    <div className="lg:max-w-7xl mx-auto mt-[8vh]">
      <h1 className="text-5xl font-bold text-center">Skills</h1>
      <div className="md:flex lg:justify-between">
        <div>
          <p className="text-3xl font-bold">Languages</p>
          <div className="grid grid-cols-2 mt-[2vh] gap-4">
            {languages.map((language, index) => {
              return (
                <div className="flex gap-x-3">
                  <img src={language.icon} alt={language.name} width={36} />
                  <p className="text-2xl">{language.name}</p>
                </div>
              );
            })}
          </div>
          <p className="text-3xl font-bold mt-[3vh]">Languages</p>
          <div className="grid grid-cols-3 mt-[2vh] gap-4">
            {tools.map((tool, index) => {
              return (
                <>
                  <p className="text-2xl">{tool.name}</p>
                  <img src={tool.icon} alt={tool.name} />
                </>
              );
            })}
          </div>
        </div>
        <div>
          <img src={Developer} alt="Skills" width={500} />
        </div>
      </div>
    </div>
  );
};

export default Skills;

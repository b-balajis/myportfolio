import React from "react";
import Developer from "../assets/img/developer.jpg";
import Python from "../assets/icons/python.svg";
import Java from "../assets/icons/java.svg";
import JavaScript from "../assets/icons/javascript.svg";
import C from "../assets/icons/c.svg";
import ReactJS from "../assets/icons/react.svg";
import TailwindCSS from "../assets/icons/tailwind-css.svg";
import MUI from "../assets/img/mui.png";
import Bootstrap from "../assets/icons/bootstrap.svg";
import PHP from "../assets/icons/php.svg";
import Flask from "../assets/icons/flask.svg";
import Git from "../assets/icons/git.svg";
import Heroku from "../assets/icons/heroku.svg";
import Firebase from "../assets/icons/firebase.svg";
import { Bounce, LightSpeed } from "react-reveal";

const Skills = () => {
  const languages = [
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "JavaScript",
      icon: JavaScript,
    },
    {
      name: "C Programming",
      icon: C,
    },
  ];
  //ReactJS, Tailwind CSS, Material UI, Bootstrap, PHP, Flask, Git, Heroku, Firebase Hosting
  const tools = [
    {
      name: "ReactJS",
      icon: ReactJS,
    },
    {
      name: "Tailwind CSS",
      icon: TailwindCSS,
    },
    {
      name: "Material UI",
      icon: MUI,
    },
    {
      name: "Bootstrap",
      icon: Bootstrap,
    },
    {
      name: "PHP",
      icon: PHP,
    },
    {
      name: "Flask",
      icon: Flask,
    },
    {
      name: "Git",
      icon: Git,
    },
    {
      name: "Heroku",
      icon: Heroku,
    },
    {
      name: "Firebase",
      icon: Firebase,
    },
  ];
  return (
    <section id="skills">
      <div className="lg:max-w-7xl mx-auto mt-[8vh]">
        <h1 className="text-5xl font-bold text-center">Skills</h1>
        <div className="md:flex lg:justify-between">
          <div>
            <p className="text-3xl font-bold">Languages</p>
            <div className="grid grid-cols-2 mt-[2vh] gap-x-9 gap-y-6">
              {languages.map((language, index) => {
                return (
                  <Bounce right>
                    <div className="flex gap-x-3">
                      <img src={language.icon} alt={language.name} width={24} />
                      <p className="text-xl">{language.name}</p>
                    </div>
                  </Bounce>
                );
              })}
            </div>
            <p className="text-3xl font-bold mt-[5vh]">Tools & Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-3 mt-[2vh] gap-x-9 gap-y-6">
              {tools.map((tool, index) => {
                return (
                  <LightSpeed left>
                    <div className="flex gap-x-3">
                      <img src={tool.icon} alt={tool.name} width={24} />
                      <p className="text-xl">{tool.name}</p>
                    </div>
                  </LightSpeed>
                );
              })}
            </div>
          </div>
          <div>
            <Bounce bottom>
              <img src={Developer} alt="Skills" width={540} />
            </Bounce>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

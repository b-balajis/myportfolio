import { Card } from "@mui/material";
import React from "react";
import Flip from 'react-reveal/Flip';
import Bootstrap from "../assets/icons/bootstrap.svg";
import Firebase from "../assets/icons/firebase.svg";
import Flask from "../assets/icons/flask.svg";
import Git from "../assets/icons/git.svg";
import Heroku from "../assets/icons/heroku.svg";
import Java from "../assets/icons/java.svg";
import JavaScript from "../assets/icons/javascript.svg";
import PHP from "../assets/icons/php.svg";
import Python from "../assets/icons/python.svg";
import ReactJS from "../assets/icons/react.svg";
import TailwindCSS from "../assets/icons/tailwind-css.svg";
import MUI from "../assets/img/mui.png";

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
        <h1 className="text-5xl font-bold text-center mb-[3vw] font-serif">Skills</h1>
        <div className="px-[15vw] md:px-[4vw]">
          <div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-9">
              {languages.map((language, index) => {
                return (
                      <Flip left cascade duration={3000}>
                        <Card
                    sx={{
                      backgroundColor: "#fff",
                      color: "#1F2937",
                      borderRadius: "15px",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "center",
                      gap: "10px",
                      width: {
                        xs: "36vw",
                        sm: "36vw",
                        md: "15vw",
                      },
                      height: {
                        sm: "15vw",
                        md: "15vh",
                      },
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      transition: "all 0.1s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#1F2947",
                        color: "#fff",
                        transform: "scale(1.1)",
                      },
                      
                    }}
                    >
                    <div className="grid grid-rows-1">
                      <img src={language.icon} alt={language.name} className="w-[8vh] h-[8vh]"/>
                      <p className="md:text-xl text-xs text-center">{language.name}</p>
                    </div>
                    </Card>
                      </Flip>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import Card from "react-animated-3d-card";
import Flip from "react-reveal/Flip";

import Azure from "../assets/icons/azure-devops-svgrepo-com.svg";
import Bootstrap from "../assets/icons/bootstrap.svg";
import Firebase from "../assets/icons/firebase.svg";
import Git from "../assets/icons/git.svg";
import GraphQL from "../assets/icons/graphql-icon.svg";
import Java from "../assets/icons/java.svg";
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
  const languages = [
    { name: "JavaScript", icon: JavaScript },
    { name: "TypeScript", icon: TypeScript },
    { name: "React.Js", icon: ReactJS },
    { name: "Redux (Thunk)", icon: Redux },
    { name: "Jest", icon: Jest },
    { name: "Tailwind CSS", icon: TailwindCSS },
    { name: "Material UI", icon: MUI },
    { name: "Bootstrap", icon: Bootstrap },
    { name: "Node.Js", icon: NodeJS },
    { name: "Express.Js", icon: Express },
    { name: "GraphQL", icon: GraphQL },
    { name: "Azure DevOps", icon: Azure },
    { name: "Python", icon: Python },
    { name: "Java (Basics)", icon: Java },
    { name: "Git", icon: Git },
    { name: "Firebase", icon: Firebase },
  ];

  return (
    <section id="skills" className="py-12 scroll-mt-20">
      <div className="lg:max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center  font-serif">
          Skills
        </h1>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded-lg mb-10"></div>

        <div className="px-6 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {languages.map((language, index) => (
              <Flip key={index} left cascade duration={2000}>
                <div className="flex justify-center items-center">
                  <Card
                    style={{
                      background: "black",
                      borderRadius: "15px",
                      width: "11rem",
                      height: "7rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      transition: "transform 0.3s",
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                      backdropFilter: "blur(6px)",
                    }}
                    containerStyle={{
                      width: "12rem",
                      height: "8rem",
                    }}
                  >
                    <div className="flex flex-col items-center justify-center font-serif text-white hover:scale-105 transition-transform duration-300">
                      <img
                        src={language.icon}
                        alt={language.name}
                        className="w-12 h-12 md:w-16 md:h-16 animate-float mb-2"
                      />
                      <p className="text-xs md:text-base text-center">
                        {language.name}
                      </p>
                    </div>
                  </Card>
                </div>
              </Flip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

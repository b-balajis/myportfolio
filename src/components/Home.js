import React from "react";
import { Zoom } from "react-reveal";
import CodeCloseIcon from "../assets/icons/code.svg";
import CodeOpenIcon from "../assets/icons/codeIcon.svg";
import GitHubIcon from "../assets/icons/githubHome.svg";
import InstagramIcon from "../assets/icons/instaHome.svg";
import LinkedInIcon from "../assets/icons/linkedinHome.svg";
import Balaji from "../assets/img/balaji.png";

const Home = () => {
  const socialMedia = [
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      link: "https://www.linkedin.com/in/b-balajis/",
      color: "blue",
    },
    {
      name: "GitHub",
      icon: GitHubIcon,
      link: "https://github.com/b-balajis",
      color: "black",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      link: "https://www.instagram.com/balaji._.b/",
      color: "red",
    }
  ];

  const handleAnimation = () => {
    console.log("ok");
  }

  
  return (
    <section id="home">
      <div
        className="flex flex-col justify-center place-items-center mx-auto v-screen lg:flex-row lg:justify-around lg:max-w-7xl md:mt-[10vh]
      "
      >
              <div className="hidden md:flex md:flex-col md:space-y-4">
              {socialMedia.map((app) => (
                <a href={app.link} target="_blank" rel="noreferrer">
                  <div
                    className="bg-white p-[.5vh] hover:bg-blue-400 rounded-lg"
                    style={{
                      color: `${app.color}`,
                    }}
                    onMouseEnter={() => handleAnimation(app.animation)}
                  >
                    <img src={app.icon} alt={app.name} width={44} />
                  </div>
                </a>
              ))}
              </div>

        <div className="space-y-8 font-serif">
          <img src={CodeOpenIcon} alt="icon" width={40} className="ml-[1vh] md:ml[0vh]"/> 
          <div className="ml-[3vh] space-y-8 ">
            <h3 className="text-2xl">Hello I'm</h3>
            <h1 className="md:text-6xl text-4xl font-bold">
              <span>Balaji Bheemavarapu</span>
            </h1>
            <h2 className="md:text-4xl text-2xl">Full Stack Web Developer - MERN</h2>
            <p className="w-full md:w-2/3 text-xl md:text-2xl">
              I have been working as a <b>Systems Engineer in Tata Consultancy Services (TCS)</b>. I am
              very passionate about my work.
            </p>
          </div>
          <img src={CodeCloseIcon} alt="icon" width={40} className="ml-[1vh] md:ml[0vh]"/>
        </div>
        <div className="md:mt-0 bg-blue-600 rounded-full">
          <Zoom duration={2000}>
            <img
              src={Balaji}
              alt="ok"
              width={600}
              className="rounded-full py-[.9vh]"
            />
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Home;

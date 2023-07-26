import Button from "@mui/material/Button";
import React from "react";
import { Zoom } from "react-reveal";
import RubberBand from "react-reveal/RubberBand";
import CodeCloseIcon from "../assets/icons/code.svg";
import CodeOpenIcon from "../assets/icons/codeIcon.svg";
import Balaji from "../assets/img/balaji.png";

const Home = () => {
  return (
    <section id="home">
      <div
        className="flex flex-col justify-center place-items-center mx-auto v-screen lg:flex-row lg:justify-around lg:max-w-7xl md:mt-[10vh]
      "
      >
        <div className="space-y-8 font-serif">
          <img src={CodeOpenIcon} alt="icon" width={40} /> 
          <div className="ml-[3vh] space-y-8 ">
            <h3 className="text-2xl">Hello I'm</h3>
            <h1 className="md:text-6xl text-5xl font-bold">
              <span>Balaji Bheemavarapu</span>
            </h1>
            <h2 className="text-4xl">Full Stack Web Developer - MERN</h2>
            <p className="w-2/3 text-2xl">
              I have been working as a <b>Systems Engineer in Tata Consultancy Services (TCS)</b>. I am
              very passionate about my work.
            </p>
            <div className="w-40">
              <a href="#contact">
                <RubberBand>
                  <Button variant="contained" className="w-40">
                    Let`s Talk
                  </Button>
                </RubberBand>
              </a>
            </div>
          </div>
          <img src={CodeCloseIcon} alt="icon" width={40} />
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

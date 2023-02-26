import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import Button from "@mui/material/Button";
import Balaji from "../assets/img/balaji.png";
import RubberBand from "react-reveal/RubberBand";
import { Zoom } from "react-reveal";

const Home = () => {
  return (
    <section id="home">
      <div
        className="flex flex-col justify-center place-items-center mx-auto v-screen lg:flex-row lg:justify-around lg:max-w-7xl md:mt-[10vh]
      "
      >
        <div className="space-y-8">
          <CodeIcon style={{ fontSize: 45 }} className="text-blue-600" />
          <div className="ml-[3vh] space-y-8 ">
            <h4>HELLO</h4>
            <h1 className="text-6xl font-bold">
              I am <span>Balaji</span>
            </h1>
            <h2 className="text-4xl font-bold">Web Developer</h2>
            <p className="w-2/3">
              I am a Web Developer. I have been working on web development. I am
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
        </div>
        <div className="md:mt-0 bg-blue-400 rounded-full">
          <Zoom>
            <img
              src={Balaji}
              alt="ok"
              width={400}
              className="rounded-full p-[1vh]"
            />
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Home;

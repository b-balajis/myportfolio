import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import { VscCode } from "react-icons/vsc";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div
      className="flex flex-col justify-center place-items-center mx-auto v-screen lg:flex-row lg:justify-around lg:max-w-7xl md:mt-[10vh]
      "
    >
      <div className="space-y-8 ">
        <CodeIcon style={{ fontSize: 45 }} className="text-blue-600" />
        <div className="ml-[3vh] space-y-8 ">
          <h4>HELLO</h4>
          <h1 className="text-5xl font-bold">
            I am <span>Balaji</span>
          </h1>
          <h2 className="text-4xl font-bold">Full Stack Developer</h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
          <Button variant="contained">Contact Me</Button>
        </div>
        <VscCode style={{ fontSize: 45 }} className="text-blue-600 font-bold" />
      </div>
      <div className="mt-[10vh] md:mt-0">
        <img
          src="https://img.freepik.com/premium-vector/software-language-programmer-avatar_24877-764.jpg  "
          alt="ok"
          width={300}
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Home;

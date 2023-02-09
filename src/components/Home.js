import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import { VscCode } from "react-icons/vsc";

const Home = () => {
  return (
    <div
      className="flex flex-col justify-center place-items-center mx-auto v-screen lg:flex-row lg:justify-around lg:max-w-7xl md:mt-12
      "
    >
      <div className="h-[40vh]">
        <CodeIcon style={{ fontSize: 45 }} className="text-blue-600" />
        <div className="my-10 space-y-4">
          <h4>HELLO</h4>
          <h1 className="text-5xl font-bold">
            I am <span>Balaji</span>
          </h1>
          <h2 className="text-4xl font-bold">Web Developer</h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
        </div>
        <VscCode style={{ fontSize: 45 }} className="text-blue-600 font-bold" />
      </div>
      <div>
        <img
          src="https://img.freepik.com/premium-vector/software-language-programmer-avatar_24877-764.jpg  "
          alt="ok"
          width={300}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
// import { Flip } from "react-awesome-reveal";
import { Flip, Slide } from "react-reveal";
import Balaji from "../assets/img/about.jpg";

const About = () => {
  return (
    <section id="about" className="py-6 scroll-mt-20">
      <div className="mx-auto lg:max-w-6xl h-auto font-serif">
        <p className="text-center text-5xl font-bold">About Me</p>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:mt-[6vh]">
          <div className="mt-10 lg:mt-0 bg-blue-600 rounded-full overflow-hidden shadow-lg animate-float ">
            <Flip left duration={2500}>
              <img
                src={Balaji}
                alt="about"
                className="w-80 h-96 object-cover rounded-full p-1 hover:scale-105 transition-transform duration-300"
              />
            </Flip>
          </div>

          {/* Right: Content (70%) */}
          <Slide right>
            <div className="w-full md:w-2/3 ml-9">
              <p className=" text-lg leading-relaxed">
                I'm a Full Stack Developer with 2.5+ years of hands on
                experience building scalable, user-focused web applications
                using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                My passion lies in turning complex ideas into high-performing
                solutions, with a focus on clean code, intuitive UI, and
                efficient backend logic.
              </p>
              <p p className=" text-lg mt-4 leading-relaxed">
                At <strong>Tata Consultancy Services (TCS)</strong>, I hold the
                designation of <strong>Systems Engineer</strong>, working in the
                role of a Full Stack Developer. I contribute to fintech
                platforms that automate mortgage product selection —
                transforming static workflows into dynamic, microservice-based
                systems that have improved speed and reduced manual efforts by
                95%.
              </p>
              <p className=" text-lg mt-4 leading-relaxed">
                I’ve worked across the stack — deploying with Azure DevOps,
                managing APIs via Azure APIM, and ensuring code quality through
                CI/CD, unit testing, and performance monitoring tools
              </p>
              <p className=" text-lg mt-4 leading-relaxed">
                I’m always open to learning new technologies and collaborating
                on innovative projects that solve real-world problems.
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default About;

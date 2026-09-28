import { Flip, Slide } from "react-reveal";
import Balaji from "../assets/img/about.jpg";

const About = () => {
  return (
    <section id="about" className=" scroll-mt-20">
      <div className="mx-auto lg:max-w-6xl font-serif px-4 md:px-8">
        {/* Heading */}
        <p className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">
          About Me
        </p>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded-lg"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:mt-8">
          {/* Profile Image - hidden on small screens */}
          <div className="hidden md:flex flex-shrink-0 bg-blue-600 rounded-full overflow-hidden shadow-lg animate-float">
            <Flip left duration={2500}>
              <img
                src={Balaji}
                alt="about"
                className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-80 lg:w-80 lg:h-96 object-cover rounded-full p-1 hover:scale-105 transition-transform duration-300"
              />
            </Flip>
          </div>

          {/* Content */}
          <Slide right>
            <div className="w-full md:w-2/3 md:ml-6 lg:ml-9 text-center md:text-left text-base sm:text-lg leading-relaxed mt-6 md:mt-0">
              <p>
                I’m a Full Stack Software Engineer with 4+ years of professional
                experience developing and modernizing enterprise applications.
              </p>
              <p>
                My core expertise is across{" "}
                <strong className="text-blue-600 dark:text-blue-400">
                  React, Next.js, Node.js, TypeScript, REST APIs,
                  micro-frontends and microservices{" "}
                </strong>{" "}
                . I enjoy working across the full application lifecycle—from
                designing and integrating APIs to building responsive user
                interfaces, improving performance, writing automated tests and
                supporting production deployments.
              </p>
              <p>
                {" "}
                At TDCX Digilab, I contributed to an{" "}
                <strong className="text-slate-900 dark:text-white">
                  AI-powered Agent Assist platform{" "}
                </strong>
                , working across React/Next.js, Node.js, TypeScript, Chrome
                Extension workflows, REST APIs, Redis and AI-enabled
                functionality.{" "}
              </p>
              <p>
                {" "}
                Previously at TCS, I worked on{" "}
                <strong className="text-blue-600 dark:text-blue-400">
                  high-traffic UK banking and mortgage applications{" "}
                </strong>
                , contributing to micro-frontends, microservices, API
                development, security, performance optimization, automated
                deployments and production troubleshooting.{" "}
              </p>
              <p>
                {" "}
                I’m particularly interested in{" "}
                <strong className="text-blue-600 dark:text-blue-400">
                  backend engineering, scalable systems, AI/GenAI integration
                  and building products that solve real-world problems{" "}
                </strong>
                .
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default About;

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
            <div className="w-full md:w-2/3 md:ml-6 lg:ml-9 text-center md:text-left">
              <p className="text-base sm:text-lg leading-relaxed mt-6 md:mt-0">
                I'm a Full Stack Developer with 3.1+ years of hands-on
                experience building scalable, user-focused web applications
                using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                My passion lies in turning complex ideas into high-performing
                solutions, with a focus on clean code, intuitive UI, and
                efficient backend logic.
              </p>
              <p className="text-base sm:text-lg mt-4 leading-relaxed">
                At <strong>Tata Consultancy Services (TCS)</strong>, I hold the
                designation of <strong>Systems Engineer</strong>, working in the
                role of a Full Stack Developer. I contribute to fintech
                platforms that automate mortgage product selection —
                transforming static workflows into dynamic, microservice-based
                systems that have improved speed and reduced manual efforts by
                95%.
              </p>
              <p className="text-base sm:text-lg mt-4 leading-relaxed">
                I’ve worked across the stack — deploying with Azure DevOps,
                managing APIs via Azure APIM, and ensuring code quality through
                CI/CD, unit testing, and performance monitoring tools.
              </p>
              <p className="text-base sm:text-lg mt-4 leading-relaxed">
                Currently, I’m exploring LLM integration and AI-assisted
                workflows, including{" "}
                <strong>LangChain, Copilot, and GenAI</strong>, while designing
                microservice architectures and scalable system design patterns.
              </p>

              <p className="text-base sm:text-lg mt-4 leading-relaxed">
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

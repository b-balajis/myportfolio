/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { useState } from "react";
import Resume from "../assets/doc/Balaji_Bheemavarapu_Resume.pdf";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleResumeDownload = () => {
    fetch(Resume).then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Balaji_Resume.pdf';
          alink.click();
      })
  })
  }

  return (
    <nav className="w-full shadow top-0 z-50">
      <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
            <h2 className="md:text-4xl text-3xl ml-[2vh] md:[0vh] font-bold font-serif flex">
              {/* <img src={Balaji} alt="Logo" className="w-[4vh] rounded-full" /> */}
              Balaji </h2>
            </a>
            <div className="md:hidden mr-[1.5vh]">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="md:flex place-items-center">
              <div>
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ml-[2vh] md:ml-0">
                  <li className="text-xl hover:text-blue-600">
                    <a href="#home">Home</a>
                  </li>
                  <li className="text-xl hover:text-blue-600">
                    <a href="#about">About</a>
                  </li>
                  <li className="text-xl hover:text-blue-600">
                    <a href="#skills">Skills</a>
                  </li>
                  <li className="text-xl hover:text-blue-600">
                    <a href="#projects">Projects</a>
                  </li>
                  <li className="text-xl hover:text-blue-600">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="md:ml-12 md:mt-0 mt-4">
                <Button variant="contained" size="medium" fullWidth onClick={handleResumeDownload} className="ease-in-out duration-300 ...">
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
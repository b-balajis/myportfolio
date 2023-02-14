/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Resume from "../assets/doc/Bheemavarapu_Balaji.pdf"

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
    <nav className="w-full shadow sticky">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-2">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-2xl font-bold">Balaji </h2>
            </a>
            <div className="md:hidden">
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
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-gray-600 hover:text-blue-600">
                    <a href="javascript:void(0)">Home</a>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600">
                    <a href="javascript:void(0)">About</a>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600">
                    <a href="javascript:void(0)">Skills</a>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600">
                    <a href="javascript:void(0)">Projects</a>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600">
                    <a href="javascript:void(0)">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="md:ml-12 md:mt-0 mt-4">
                <Button variant="contained" size="medium" fullWidth onClick={handleResumeDownload}>
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
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const socialMedia = [
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/b-balajis/",
      color: "blue"
    },
    {
      name: "GitHub",
      icon: <GitHubIcon />,
      link: "https://github.com/b-balajis",
      color: "black"
    },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/balaji._.b/",
      color: "red"
    },
    {
      name: "Facebook",
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/BBalajis/",
      color: "blue"
    },
    {
      name: "Twitter",
      icon: <TwitterIcon />,
      link: "https://twitter.com/B_Balajis",
        color: "blue"
    },
  ];

  return (
    <div className="bg-blue-600 py-[1vh]">
      <div className="text-center mx-auto lg:max-w-7xl">
        <p className="text-3xl font-bold text-white">Balaji Bheemavarapu</p>
        <div className="flex space-x-5 justify-center my-[2vh]">
          {socialMedia.map((app) => (
            <a href={app.link} target="_blank" rel="noreferrer">
              <div className="bg-white rounded-full p-[1vh]" style={{
                color: `${app.color}`
              }
              }>{app.icon}</div>
            </a>
          ))}
        </div>
        <p className="text-white">© 2023 Balaji Bheemavarapu</p>
      </div>
    </div>
  );
};

export default Footer;

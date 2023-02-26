import React from "react";
import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from "../assets/icons/mail.svg";
import LocationOnIcon from "../assets/icons/location.svg";
import CallIcon from "../assets/icons/call.svg";
import Slide from "react-reveal/Slide";

const Contact = () => {
  // const handleContactFormSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const name = data.get("name");
  //   const email = data.get("email");
  //   const subject = data.get("subject");
  //   const msg = data.get("message");
  //   console.log(name, email, subject, msg);
  // };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("/process-form", formData)
      .then((res) => {
        alert("Form submitted successfully!");
      })
      .catch((err) => {
        alert("Error submitting form. Please try later.");
      });
  };

  return (
    <section id="contact">
      <div className="mx-auto lg:max-w-7xl mb-[5vh] px-[3vw] md:px-0">
        <h1 className="text-center text-5xl font-bold mt-[3vh]">Contact Me</h1>
        <div className="md:flex md:space-x-4 mt-[5vh]">
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
            className=" md:w-1/2 flex flex-col gap-y-4  w-full"
          >
            <Slide left>
              <TextField
                required
                name="name"
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
                size="small"
                onChange={handleChange}
                fullWidth
              />
            </Slide>
            <Slide left>
              <div className="md:flex justify-between md:space-x-2 space-y-4 md:space-y-0">
                <TextField
                  required
                  id="outlined-basic"
                  name="email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={handleChange}
                />
                <TextField
                  required
                  id="outlined-basic"
                  name="subject"
                  label="Subject"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={handleChange}
                />
              </div>
            </Slide>
            <Slide left>
              <TextField
                id="outlined-basic"
                name="message"
                label="Message"
                variant="outlined"
                multiline
                rows={3}
                maxRows={5}
                onChange={handleChange}
                fullWidth
              />
            </Slide>
            <Slide left>
              <div className="flex justify-center">
                <Button
                  variant="contained"
                  className="w-2/3"
                  size="large"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Slide>
          </Box>
          <Slide right>
            <div className="md:w-1/2 border border-black  flex flex-col gap-y-4  w-full mt-[4vh] md:mt-0">
              <p className="text-center text-3xl font-bold my-4">
                Contact Details
              </p>
              <div className="ml-[4vh] md:ml-[8vh] space-y-8 mb-4">
                <p className="flex place-items-center">
                  <span className="mr-4">
                    <img src={EmailIcon} alt="email" width={32} />
                  </span>
                  balajibheemavarapu@gmail.com
                </p>
                <p className="flex place-items-center">
                  <span className="mr-4">
                    <img src={CallIcon} alt="email" width={32} />
                  </span>
                  +91 80080 75376
                </p>
                <p className="flex place-items-center">
                  <span className="mr-4">
                    <img src={LocationOnIcon} alt="email" width={32} />
                  </span>
                  Chirala, Andhra Pradesh, India.
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Contact;

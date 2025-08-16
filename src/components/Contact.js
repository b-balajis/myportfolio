import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
import Slide from "react-reveal/Slide";
import CallIcon from "../assets/icons/call.svg";
import LocationOnIcon from "../assets/icons/location.svg";
import EmailIcon from "../assets/icons/mail.svg";
import CheckIcon from "../assets/icons/tick.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/process-form", formData)
      .then(() => alert("Form submitted successfully!"))
      .catch(() => alert("Error submitting form. Please try later."));
  };

  return (
    <section id="contact" className="px-4 md:px-20 py-10 scroll-mt-8">
      <div className="font-serif mx-auto max-w-7xl">
        <h1 className="text-center text-4xl sm:text-5xl font-bold mb-8">
          Contact Me
        </h1>

        {/* Container for form + details */}
        <div className="flex flex-col md:flex-row md:space-x-6 gap-8">
          {/* Contact Form */}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              border: "1px solid #e2e8f0",
              borderRadius: "0.9rem",
              padding: "1.5rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              backgroundColor: "#FFF",
            }}
            className="w-full md:w-1/2 flex flex-col gap-y-4"
          >
            <Slide left>
              <TextField
                required
                name="name"
                label="Your Name"
                variant="outlined"
                size="small"
                onChange={handleChange}
                fullWidth
              />
            </Slide>

            <Slide left>
              <div className="flex flex-col md:flex-row gap-4">
                <TextField
                  required
                  name="email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  required
                  name="subject"
                  label="Subject"
                  variant="outlined"
                  size="small"
                  onChange={handleChange}
                  fullWidth
                />
              </div>
            </Slide>

            <Slide left>
              <TextField
                name="message"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                onChange={handleChange}
                fullWidth
              />
            </Slide>

            <Slide left>
              <div className="flex justify-center">
                <Button
                  variant="contained"
                  className="w-full sm:w-2/3"
                  size="large"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Slide>
          </Box>

          {/* Contact Details */}
          <Slide right>
            <div className="w-full md:w-1/2 border border-gray-300 rounded-2xl p-6 flex flex-col justify-center shadow-sm">
              <p className="text-center text-2xl sm:text-3xl font-bold mb-6">
                Contact Details
              </p>

              <div className="space-y-6 text-base sm:text-lg font-medium">
                <p className="flex items-center">
                  <img src={EmailIcon} alt="email" width={28} className="mr-3" />
                  balajibheemavarapu@gmail.com
                </p>
                <p className="flex items-center">
                  <img src={CallIcon} alt="mobile" width={28} className="mr-3" />
                  +91 80xxx xxx76
                </p>
                <p className="flex items-center">
                  <img src={CheckIcon} alt="available" width={28} className="mr-3" />
                  Freelancing Available
                </p>
                <p className="flex items-center">
                  <img
                    src={LocationOnIcon}
                    alt="place"
                    width={28}
                    className="mr-3 animate-bounce"
                  />
                  Hyderabad, India.
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

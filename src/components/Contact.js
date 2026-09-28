import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const mailSubject = subject || `Portfolio Contact from ${name}`;

    const mailBody = `
Hi Balaji,

You have received a new message through your portfolio.

Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from bbalajis.com
    `.trim();

    const mailtoLink = `mailto:balajibheemavarapu@gmail.com?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="px-4 md:px-20 py-10 scroll-mt-8">
      <div className="font-serif mx-auto max-w-7xl">
        {/* Heading */}
        <h1 className="text-center text-4xl sm:text-5xl font-bold">
          Contact Me
        </h1>

        <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded-lg mb-8" />

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
                value={formData.name}
                onChange={handleChange}
                fullWidth
              />
            </Slide>

            <Slide left>
              <div className="flex flex-col md:flex-row gap-4">
                <TextField
                  required
                  type="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                />

                <TextField
                  required
                  name="subject"
                  label="Subject"
                  variant="outlined"
                  size="small"
                  value={formData.subject}
                  onChange={handleChange}
                  fullWidth
                />
              </div>
            </Slide>

            <Slide left>
              <TextField
                required
                name="message"
                label="Message"
                variant="outlined"
                multiline
                rows={5}
                value={formData.message}
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
                  Send Message
                </Button>
              </div>
            </Slide>
          </Box>

          {/* Contact Details */}
          <Slide right>
            <div
              className="
                w-full
                md:w-1/2
                border
                border-gray-300
                rounded-2xl
                p-6
                flex
                flex-col
                justify-center
                shadow-sm
              "
            >
              <p className="text-center text-2xl sm:text-3xl font-bold mb-6">
                Contact Details
              </p>

              <div className="space-y-6 text-base sm:text-lg font-medium">
                <a
                  href="mailto:balajibheemavarapu@gmail.com"
                  className="flex items-center hover:text-blue-600 transition-colors"
                >
                  <img
                    src={EmailIcon}
                    alt="email"
                    width={28}
                    className="mr-3"
                  />
                  balajibheemavarapu@gmail.com
                </a>

                <a
                  href="tel:+918008075376"
                  className="flex items-center hover:text-blue-600 transition-colors"
                >
                  <img
                    src={CallIcon}
                    alt="mobile"
                    width={28}
                    className="mr-3"
                  />
                  +91 80xxx xxx76
                </a>

                <p className="flex items-center">
                  <img
                    src={CheckIcon}
                    alt="available"
                    width={28}
                    className="mr-3"
                  />

                  <span>
                    <span className="text-green-600 font-semibold">
                      Immediate Joiner
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
                      · 0 Days Notice Period
                    </span>
                  </span>
                </p>

                <p className="flex items-center">
                  <img
                    src={LocationOnIcon}
                    alt="place"
                    width={28}
                    className="mr-3"
                  />
                  Hyderabad, India
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

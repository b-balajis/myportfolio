import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";

const Contact = () => {
  const handleContactFormSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject");
    const msg = data.get("message");
    console.log(name, email, subject, msg);
  };
  return (
    <div className="mx-auto lg:max-w-7xl mb-[5vh]">
      <h1 className="text-center text-5xl font-bold mt-[3vh]">Contact Me</h1>
      <div className="md:flex md:space-x-4 mt-[5vh]">
        <Box
          component="form"
          noValidate
          onSubmit={handleContactFormSubmit}
          sx={{ mt: 1 }}
          className=" md:w-1/2 flex flex-col gap-y-4  w-full"
        >
          <TextField
            required
            name="name"
            id="outlined-basic"
            label="Your Name"
            variant="outlined"
            size="small"
          />
          <div className="md:flex justify-between md:space-x-2 space-y-4 md:space-y-0">
            <TextField
              required
              id="outlined-basic"
              name="email"
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              required
              id="outlined-basic"
              name="subject"
              label="Subject"
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
          <TextField
            id="outlined-basic"
            name="message"
            label="Message"
            variant="outlined"
            multiline
            rows={3}
            maxRows={5}
          />
          <div className="flex justify-center">
            <Button
              variant="contained"
              className="w-2/3"
              size="large"
              type="submit"
            >
              Outlined
            </Button>
          </div>
        </Box>
        <div className="md:w-1/2 border border-black  flex flex-col gap-y-4  w-full mt-[4vh] md:mt-0">
          <p className="text-center text-3xl font-bold my-4">Contact Details</p>
          <div className="ml-[8vh] space-y-8">
            <p>
              <span className="mr-4">
                <EmailIcon />
              </span>
              balajibheemavarapu@gmail.com
            </p>
            <p>
              <span className="mr-4">
                <CallIcon />
              </span>
              +91 80080 75376
            </p>
            <p>
              <span className="mr-4">
                <LocationOnIcon />
              </span>
              Chirala, Andhra Pradesh, India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

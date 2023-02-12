import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";

const Contact = () => {
  return (
    <div className="mx-auto lg:max-w-7xl mb-[10vh]">
      <h1 className="text-center text-5xl font-bold mt-[3vh]">Contact Me</h1>
      <div className="md:flex md:space-x-4 mt-[5vh]">
        <div className=" md:w-1/2 flex flex-col gap-y-4  w-full">
          <TextField
            required
            id="outlined-basic"
            label="Your Name"
            variant="outlined"
            size="small"
          />
          <div className="md:flex justify-between md:space-x-2 space-y-4 md:space-y-0">
            <TextField
              required
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              required
              id="outlined-basic"
              label="Subject"
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
          <TextField
            id="outlined-basic"
            label="Message"
            variant="outlined"
            multiline
            rows={3}
            maxRows={5}
          />
          <div className="flex justify-center">
            <Button variant="contained" className="w-2/3" size="large">
              Outlined
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 border border-black  flex flex-col gap-y-4  w-full">
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

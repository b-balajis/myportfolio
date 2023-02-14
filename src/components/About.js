import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Typography } from "@mui/material";

const About = () => {
  const aboutTimeline = [
    {
      title: "SSC",
      desc: "SSVN High School, Chirala",
      time: "2016-2017",
    },
    {
      title: "Intermediate",
      desc: "Sri Gowthami Junior College, Chirala",
      time: "2017-2019",
    },
    {
      title: "Bachelor of Technology (B.Tech)",
      desc: "GMR Institute of Technology, Rajam",
      time: "2019-2023",
    },
    {
      title: "3604 Global rank in Codevita",
      desc: "TCS Codevita Season 10",
      time: "2022"
    },
    {
      title: "Software Engineer Trainee",
      desc: "Revidd, Visakhapatnam ",
      time: "June 2022 - present",
    },
  ];

  const about = aboutTimeline.reverse();
  return (
    <>
      <div className="mx-auto lg:max-w-7xl h-auto">
        <p className="text-center text-5xl font-bold">About</p>
        <div className="mt-[5vh]">
          <Timeline position="alternate">
            {about.map((timeline, index) => (
              <TimelineItem >
                <TimelineOppositeContent color="text.primary">
                  <p >{timeline.time}</p>
                </TimelineOppositeContent>
                <TimelineSeparator
                  sx={{
                    minHeight: 100,
                    marginTop: 1,
                    marginBottom: 1,
                  }}
                >
                  {index % 2 === 0 ? (
                    <TimelineDot color="primary" variant="outlined" />
                  ) : (
                    <TimelineDot color="secondary" />
                  )}
                  {about.length - 1 === index ? null : <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <p className="text-base font-bold md:text-2xl ">
                    {timeline.title}
                  </p>
                  <Typography>
                    <p className="text-sm md:text-lg">{timeline.desc}</p>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </>
  );
};

export default About;

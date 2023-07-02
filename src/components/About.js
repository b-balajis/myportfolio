import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Typography } from "@mui/material";
import * as React from "react";
import Slide from "react-reveal/Slide";

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
      title: "Vice Chair of ACM GMRIT",
      desc: "ACM is Student Chapter",
      time: "2022-2023",
    },
    {
      title: "3604 Global rank in Codevita",
      desc: "TCS Codevita Season 10",
      time: "2022",
    },
    {
      title: "Software Engineer Trainee",
      desc: "Revidd, Visakhapatnam ",
      time: "June 2022 - May 2023",
    },
    {
      title: "Systems Engineer",
      desc: "Tata Consultancy Services (TCS), Ahmedabad",
      time: "June 2023 - Present"
    }
  ];

  const about = aboutTimeline.reverse();
  return (
    <section id="about">
      <div className="mx-auto lg:max-w-7xl h-auto font-serif">
        <p className="text-center text-5xl font-bold">About</p>
        <div className="mt-[5vh]">
          <Timeline position="alternate">
            {about.map((timeline, index) => (
              <TimelineItem>
                <TimelineOppositeContent color="text.primary">
                  <Slide top duration={3000}>
                    <p className="mt-1">{timeline.time}</p>
                  </Slide>
                </TimelineOppositeContent>
                <TimelineSeparator
                  sx={{
                    minHeight: 100,
                    marginTop: 0.5,
                    marginBottom: 0.5,
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
                  <Slide top>
                    <p className="text-base font-bold md:text-2xl">
                      {timeline.title}
                    </p>
                  </Slide>
                  <Typography>
                    <Slide bottom>
                      <p className="text-sm md:text-lg">{timeline.desc}</p>
                    </Slide>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default About;

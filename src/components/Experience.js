import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Collapse, IconButton, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Slide } from "react-reveal";

const experiences = [
  {
    company: "Tata Consultancy Services",
    role: "Full Stack Developer",
    time: "Dec 2023 – Present",
    icon: <WorkIcon />,
    techStack: [
      "TypeScript",
      "React.js",
      "Node.js",
      "Azure DevOps",
      "Jest",
      "Tealium",
    ],
    responsibilities: [
      "Improved mortgage product selection using Azure APIM, reducing selection time by 70%.",
      "Replaced static PDFs with dynamic UIs for product finders, cutting 95% of manual deployments.",
      "Used Dynatrace and Winston logger for monitoring and implemented Tealium UI tagging.",
      "Achieved 100% test coverage using Jest and maintained code quality with SonarQube.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Frontend Developer",
    time: "Jun 2023 - Dec 2023",
    icon: <WorkIcon />,
    techStack: ["TypeScript", "React.js", "Jest"],
    responsibilities: [
      "Developed responsive and secure user interfaces using React and TypeScript for a banking web application.",
      "Ensured code quality and maintainability through modular components, TypeScript typings, and unit testing with tools like Jest.",
      "Collaborated with backend and QA teams in an Agile environment to meet sprint deadlines and deliver business-critical features.",
      "Improved application performance and user experience by implementing lazy loading, code splitting, and state management with Redux or Context API.",
    ],
  },
  {
    company: "Inflolabs Pvt Ltd.",
    role: "Software Engineer Trainee",
    time: "June 2022 – May 2023",
    icon: <WorkIcon />,
    techStack: [
      "React.js",
      "Redux (Thunk)",
      "GraphQL",
      "Tailwind CSS",
      "Material UI",
    ],
    responsibilities: [
      "Developed a responsive VOD platform using React and GraphQL.",
      "Enabled OTT platform customization via no-code builder.",
      "Collaborated on CMS features with backend teams using MongoDB.",
      "Worked with GitLab, Jira, and Figma for documentation and task management.",
    ],
  },
  {
    company: "ACM GMRIT",
    role: "Vice Chair",
    time: "2022 – 2023",
    icon: <SchoolIcon />,
    techStack: [],
    responsibilities: [
      "Organized technical events and coding contests.",
      "Provided mentorship and led strategic initiatives within ACM GMRIT chapter.",
    ],
  },
];

export default function AlternatingTimeline() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="experience" className="py-6 scroll-mt-8">
      <div className="mx-auto lg:max-w-7xl h-auto font-serif">
        <p className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">
          Professional Experience
        </p>
        <div>
          <Box p={4}>
            <Timeline position={isMobile ? "right" : "alternate"}>
              {experiences.map((exp, index) => (
                <TimelineItem key={index}>
                  {/* Opposite content only on larger screens */}
                  <TimelineOppositeContent
                    sx={{
                      display: { xs: "none", sm: "block" },
                      textAlign: index % 2 === 0 ? "right" : "left",
                    }}
                  >
                    <Typography variant="body2">{exp.time}</Typography>
                  </TimelineOppositeContent>

                  {/* Line + Dot always stays on left */}
                  <TimelineSeparator>
                    <Slide top duration={3000}>
                      <TimelineDot color="primary">{exp.icon}</TimelineDot>
                    </Slide>
                    {index !== experiences.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>

                  <TimelineContent
                    sx={{
                      textAlign: { xs: "right", sm: "inherit" }, // mobile → align right
                    }}
                  >
                    <Slide top duration={3000}>
                      <Paper
                        elevation={4}
                        sx={{
                          p: 2,
                          maxWidth: "full",
                          backgroundColor: "black",
                          color: "#fff",
                          border: "1px solid white",
                          borderRadius: 4,
                          fontFamily: "serif",
                        }}
                      >
                        {/* Show time inside card on mobile */}
                        <Typography
                          variant="body2"
                          sx={{
                            display: { xs: "block", sm: "none" },
                            mb: 1,
                            fontStyle: "italic",
                            color: "lightgray",
                            textAlign: "left",
                          }}
                        >
                          {exp.time}
                        </Typography>

                        <Box display="flex" alignItems="center" justifyContent="space-between">
                          <div>
                            <div className="flex flex-wrap items-baseline">
                              <p className="font-bold text-xl">{exp.role},&nbsp;</p>
                              <p className="text-lg">
                                <i>{exp.company}</i>
                              </p>
                            </div>
                          </div>

                          <IconButton
                            onClick={() => toggleExpand(index)}
                            sx={{ color: "#fff" }}
                          >
                            <ExpandMoreIcon
                              sx={{
                                transform:
                                  expandedIndex === index ? "rotate(180deg)" : "rotate(0)",
                                transition: "transform 0.3s",
                              }}
                            />
                          </IconButton>
                        </Box>

                        {/* Preview text when not expanded */}
                        {expandedIndex !== index && exp.responsibilities.length > 0 && (
                          <Typography
                            variant="body2"
                            mt={1}
                            sx={{ textAlign: "left" }}
                          >
                            {exp.responsibilities[0]}
                            {exp.responsibilities[1] && (
                              <>
                                <br />
                                {exp.responsibilities[1]}
                              </>
                            )}
                          </Typography>
                        )}

                        {/* Expanded content */}
                        <Collapse in={expandedIndex === index} timeout="auto" unmountOnExit>
                          <Box sx={{ textAlign: "left", mt: 1 }}>
                            <Typography variant="subtitle2" fontWeight="bold">
                              Responsibilities:
                            </Typography>
                            <ul className="list-disc list-inside text-sm ml-4 mt-1">
                              {exp.responsibilities.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>

                            {exp.techStack.length > 0 && (
                              <>
                                <Typography
                                  variant="subtitle2"
                                  mt={2}
                                  fontWeight="bold"
                                >
                                  Tech Stack:
                                </Typography>
                                <Typography variant="body2" mt={0.5}>
                                  {exp.techStack.join(", ")}
                                </Typography>
                              </>
                            )}
                          </Box>
                        </Collapse>
                      </Paper>
                    </Slide>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        </div>
      </div>
    </section>
  );
}

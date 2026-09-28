import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Slide } from "react-reveal";

const experiences = [
  {
    company: "TDCX Digilab India Pvt Ltd",
    role: "Full Stack Engineer",
    time: "Feb 2026 – Sep 2026",
    icon: <WorkIcon />,
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Plasmo",
      "REST APIs",
      "Redis",
      "GCP",
      "Claude",
    ],
    responsibilities: [
      "Contributed to an AI-powered enterprise Agent Assist platform, developing customer-support workflows and browser-extension features across frontend and backend.",
      "Developed enterprise features using React, Next.js, Node.js and TypeScript, contributing across frontend, backend API integration, testing and production support.",
      "Built and enhanced React/TypeScript modules and Chrome Extension workflows, focusing on responsive UI, asynchronous data flows and application performance.",
      "Implemented REST API integrations and asynchronous workflows, including Redis-based caching and AI-enabled functionality.",
      "Gained hands-on exposure to GCP while working with cloud-based application workflows and development environments.",
      "Collaborated with cross-functional engineering teams on feature development, debugging, code quality and production issue resolution.",
    ],
  },

  {
    company: "Tata Consultancy Services",
    role: "Full Stack Developer",
    time: "Jun 2023 – Jan 2026",
    icon: <WorkIcon />,
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Micro-frontends",
      "Microservices",
      "REST APIs",
      "Azure API Management",
      "Azure DevOps",
      "JWT",
      "RBAC",
      "Jest",
      "React Testing Library",
      "Dynatrace",
    ],
    responsibilities: [
      "Modernized high-traffic UK banking and mortgage applications, contributing across frontend, backend APIs, micro-frontends, security, performance, testing and production deployment.",
      "Developed and modernized banking applications using React, TypeScript, Node.js, micro-frontends and microservices, supporting critical mortgage and customer-facing workflows.",
      "Designed and integrated REST APIs with Node.js and Azure API Management, contributing to approximately 35% reduction in API latency.",
      "Automated production deployment activities, reducing manual deployment effort by approximately 90% and improving release efficiency.",
      "Implemented caching, lazy loading and parallel API/data fetching to improve application performance and responsiveness, reducing page load time from approximately 3 seconds to milliseconds for key workflows.",
      "Worked across frontend and backend layers, including feature development, API integration, debugging, production issue resolution and performance optimization.",
      "Developed unit and integration test cases using Jest and React Testing Library, contributing to 95%+ test coverage and improving release confidence.",
      "Performed and supported Azure production deployments through Azure DevOps, including release validation, deployment checks and production troubleshooting.",
      "Supported Scrum facilitation responsibilities on a rotating basis, coordinating daily stand-ups, tracking blockers and supporting sprint execution.",
      "Owned ticket refinement, requirement clarification, task breakdown and delivery planning in collaboration with the ETM, Product Owner and business stakeholders.",
      "Actively participated in sprint planning, backlog refinement, retrospectives, reviews and technical discussions within an 8-member Agile/Scrum engineering team.",
      "Used Dynatrace for production diagnostics, troubleshooting and application/API performance analysis.",
    ],
  },

  {
    company: "Revidd (Inflolabs)",
    role: "Software Engineer Trainee",
    time: "Jun 2022 – May 2023",
    icon: <WorkIcon />,
    techStack: [
      "React.js",
      "Redux",
      "TailwindCSS",
      "Material UI",
      "GraphQL",
      "GraphQL CMS",
      "GitLab",
    ],
    responsibilities: [
      "Developed an enterprise Video-on-Demand (OTT) platform using React, Redux, TailwindCSS, Material UI and GraphQL for multi-device playback and adaptive UI rendering.",
      "Built no-code customization modules using a GraphQL CMS, enabling non-technical users to configure OTT themes and reducing developer support effort by 40%.",
      "Collaborated with backend and design teams to develop platform features and followed Agile and GitLab workflows.",
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
        {/* Section Heading */}
        <p className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">
          Professional Experience
        </p>

        <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded-lg" />

        <Box p={4}>
          <Timeline position={isMobile ? "right" : "alternate"}>
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                {/* Desktop Date */}
                <TimelineOppositeContent
                  sx={{
                    display: { xs: "none", sm: "block" },
                    textAlign: index % 2 === 0 ? "right" : "left",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      color: "text.secondary",
                    }}
                  >
                    {exp.time}
                  </Typography>
                </TimelineOppositeContent>

                {/* Timeline Icon + Connector */}
                <TimelineSeparator>
                  <Slide top duration={1000}>
                    <TimelineDot color="primary">{exp.icon}</TimelineDot>
                  </Slide>

                  {index !== experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>

                {/* Experience Card */}
                <TimelineContent
                  sx={{
                    textAlign: { xs: "right", sm: "inherit" },
                  }}
                >
                  <Slide top duration={1000}>
                    <Paper
                      elevation={4}
                      sx={{
                        p: 2,
                        width: "100%",
                        backgroundColor: "black",
                        color: "#fff",
                        border: "1px solid white",
                        borderRadius: 4,
                        fontFamily: "serif",
                      }}
                    >
                      {/* Mobile Date */}
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

                      {/* Header */}
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        gap={2}
                      >
                        <div className="text-left">
                          <div className="flex flex-wrap items-baseline">
                            <p className="font-bold text-lg sm:text-xl">
                              {exp.role}
                            </p>

                            <p className="text-base sm:text-lg ml-1">
                              , <i>{exp.company}</i>
                            </p>
                          </div>
                        </div>

                        <IconButton
                          onClick={() => toggleExpand(index)}
                          sx={{
                            color: "#fff",
                            flexShrink: 0,
                          }}
                          aria-label={
                            expandedIndex === index
                              ? "Collapse experience"
                              : "Expand experience"
                          }
                        >
                          <ExpandMoreIcon
                            sx={{
                              transform:
                                expandedIndex === index
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                              transition: "transform 0.3s ease",
                            }}
                          />
                        </IconButton>
                      </Box>

                      {/* Preview */}
                      {expandedIndex !== index &&
                        exp.responsibilities.length > 0 && (
                          <Typography
                            variant="body2"
                            mt={1}
                            sx={{
                              textAlign: "left",
                              color: "#d1d5db",
                              lineHeight: 1.7,
                            }}
                          >
                            {exp.responsibilities[0]}
                          </Typography>
                        )}

                      {/* Expanded Details */}
                      <Collapse
                        in={expandedIndex === index}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Box
                          sx={{
                            textAlign: "left",
                            mt: 2,
                          }}
                        >
                          {/* Responsibilities */}
                          <Typography variant="subtitle2" fontWeight="bold">
                            Responsibilities
                          </Typography>

                          <ul className="list-disc list-inside text-sm ml-2 mt-2 space-y-1.5 text-gray-300">
                            {exp.responsibilities.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>

                          {/* Tech Stack */}
                          {exp.techStack.length > 0 && (
                            <>
                              <Typography
                                variant="subtitle2"
                                mt={2}
                                fontWeight="bold"
                              >
                                Tech Stack
                              </Typography>

                              <div className="flex flex-wrap gap-2 mt-2">
                                {exp.techStack.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2.5 py-1 text-xs rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
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
    </section>
  );
}

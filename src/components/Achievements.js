import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";

import Launch from "../assets/icons/launch.svg";

import AZ900 from "../assets/img/AZ_900.jpeg";
import CodevitaSeason10 from "../assets/img/CodeVita_10.jpeg";
import HackerRank from "../assets/img/HackerRank.jpg";
import LBGCert from "../assets/img/LBG_Cert.jpg";
import ReviddExperience from "../assets/img/Revidd.jpeg";
import TCSTOPCoders from "../assets/img/TCS_TOP_Coders.jpg";

// Add your AI Fridays Hackathon image here when available
// import TCSAIHackathon from "../assets/img/TCS_AI_Hackathon.jpeg";

const achievements = [
  // =========================================================
  // NEW / CURRENT ACHIEVEMENTS - SHOWN FIRST
  // =========================================================

  {
    // image: TCSAIHackathon,
    image: LBGCert, // Replace with actual hackathon certificate/image
    title: "2nd Prize – TCS AI Fridays Hackathon",
    description:
      "Secured 2nd Prize in the TCS AI Fridays Hackathon for developing an AI Agent for User Story Breakdown. Led a 5-member team to build an AI-driven solution that converts user stories into actionable development tasks.",
    link: "#achievements",
    date: "2026-01-01",
  },

  {
    image: LBGCert,
    title: "Certificate of Excellence – Lloyds Banking Group CIO",
    description:
      "Received a Certificate of Excellence from the Lloyds Banking Group CIO for contribution to mortgage process automation, recognizing impactful engineering work delivered for a critical banking workflow.",
    link: "https://www.linkedin.com/posts/b-balajis_recognition-achievement-professionalgrowth-activity-7290353053071720448-nz-g?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC8pG_EBArHdOMYJ8MpSnVXLzJVWfxNK6pE",
    date: "2025-01-07",
  },

  {
    image: TCSTOPCoders,
    title: "TCS Top Coders – Top 3%",
    description:
      "Ranked among the Top 3% of 7,000+ developers in the TCS Top Coders competition, demonstrating strong programming, problem-solving and competitive coding skills.",
    link: "#achievements",
    date: "2025-02-18",
  },

  {
    image: CodevitaSeason10,
    title: "TCS CodeVita Season 10 – Global Rank 3604",
    description:
      "Secured Global Rank 3604 among 100K+ participants in TCS CodeVita Season 10, demonstrating strong coding and problem-solving abilities in a highly competitive programming competition.",
    link: "https://www.linkedin.com/posts/b-balajis_tcs-tcscodevita-activity-6936024145121947648-VHU8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC8pG_EBArHdOMYJ8MpSnVXLzJVWfxNK6pE",
    date: "2022-05-09",
  },

  // =========================================================
  // EXISTING ACHIEVEMENTS
  // =========================================================

  {
    image: AZ900,
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    description:
      "Earned the Microsoft Azure Fundamentals (AZ-900) certification, validating foundational knowledge of cloud concepts, Azure services and cloud-based solutions.",
    link: "https://learn.microsoft.com/en-us/users/bbalajis/credentials/1e554dfc1f04a568",
    date: "2025-01-22",
  },

  {
    image: HackerRank,
    title: "Certified Frontend Developer – React",
    description:
      "Successfully earned a Frontend Developer certification specializing in React, validating skills in building responsive and interactive web applications using React, JavaScript and component-based architecture.",
    link: "https://www.hackerrank.com/certificates/6116fe4c346c",
    date: "2023-11-01",
  },

  {
    image: ReviddExperience,
    title: "Software Engineer Trainee – Inflolabs Pvt. Ltd.",
    description:
      "Completed a one-year internship as a Software Engineer Trainee at Inflolabs Pvt. Ltd., working extensively on frontend technologies and contributing to enterprise application development.",
    link: "https://www.linkedin.com/posts/b-balajis_reactjs-tailwindcss-mui-activity-7065630132589232128-Lmb0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC8pG_EBArHdOMYJ8MpSnVXLzJVWfxNK6pE",
    date: "2023-05-20",
  },
];

export default function Achievements() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollRef = useRef(null);

  const scrollAmount = 320;

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          scrollRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="achievements" className="px-4 text-white py-8 scroll-mt-8">
      <div className="max-w-6xl mx-auto text-center font-serif">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold">Achievements</h2>

        <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded-lg" />

        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll achievements left"
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              bg-gray-700
              hover:bg-gray-600
              text-white
              p-2
              rounded-full
              z-10
              shadow-lg
              transition
            "
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="
              flex
              gap-6
              overflow-x-auto
              px-4
              md:px-8
              py-2
              scroll-smooth
              scrollbar-hide
            "
          >
            {achievements.map((item, index) => (
              <div
                key={index}
                className="
                  min-w-[260px]
                  sm:min-w-[280px]
                  md:min-w-[300px]
                  my-5
                  bg-gray-800
                  rounded-2xl
                  p-4
                  shadow-lg
                  hover:scale-105
                  hover:bg-gray-700
                  transition-transform
                  duration-300
                  flex
                  flex-col
                "
              >
                {/* Achievement Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-36
                    md:h-44
                    object-cover
                    rounded-xl
                    mb-4
                    cursor-pointer
                  "
                  onClick={() => openModal(item.image)}
                />

                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold mb-2 text-left">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base mb-2 text-left leading-relaxed">
                  {item.description}
                </p>

                {/* Date */}
                <p className="text-gray-500 text-xs md:text-sm mb-4 mt-auto">
                  {format(new Date(item.date), "MMMM dd, yyyy")}
                </p>

                {/* External Link */}
                {item.link && item.link !== "#achievements" && (
                  <div className="flex items-center justify-center mt-2 gap-1">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-blue-400
                        text-sm
                        underline
                        hover:text-blue-300
                        transition-colors
                      "
                    >
                      View
                    </a>

                    <img src={Launch} alt="Launch" width={18} />
                  </div>
                )}

                {/* No-link achievement */}
                {(!item.link || item.link === "#achievements") && (
                  <div className="h-[20px]" />
                )}
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll achievements right"
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              bg-gray-700
              hover:bg-gray-600
              text-white
              p-2
              rounded-full
              z-10
              shadow-lg
              transition
            "
          >
            <ArrowForwardIosIcon fontSize="small" />
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="
            fixed
            inset-0
            bg-black/70
            flex
            items-center
            justify-center
            z-50
            p-4
          "
          onClick={closeModal}
        >
          <div
            className="
              bg-white
              p-4
              rounded-lg
              relative
              w-[90%]
              max-w-lg
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <CloseIcon
              onClick={closeModal}
              className="
                absolute
                top-2
                right-2
                text-gray-500
                cursor-pointer
                z-10
                bg-white
                rounded-full
              "
            />

            {/* Selected Image */}
            <img
              src={selectedImage}
              alt="Achievement preview"
              className="
                max-w-full
                max-h-[80vh]
                object-contain
                mx-auto
              "
            />
          </div>
        </div>
      )}
    </section>
  );
}

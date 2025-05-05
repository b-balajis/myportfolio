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

const achievements = [
  {
    image: LBGCert,
    title: "Certificate of Recognition – Lloyds Banking Group (TCS)",
    description:
      "Received a Certificate of Recognition from the CIO of Lloyds Banking Group for delivering a critical feature that enhanced client operations, showcasing impactful solution delivery and alignment with business goals.",
    link: "https://www.linkedin.com/posts/b-balajis_recognition-achievement-professionalgrowth-activity-7290353053071720448-nz-g?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC8pG_EBArHdOMYJ8MpSnVXLzJVWfxNK6pE",
    date: "2025-01-07",
  },
  {
    image: TCSTOPCoders,
    title: "Top Performer – TCS Top Coders Season 2",
    description:
      "Ranked among the Top 217 out of 7,000+ global participants in TCS Top Coders Season 2 and honored with the Special Initiative Award for outstanding contribution. Recognized as an inspiring role model for dedication, commitment, and excellence in performance.",
    link: "#achievements",
    date: "2025-02-18",
  },
  {
    image: AZ900,
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    description:
      "Earned the Microsoft Azure Fundamentals (AZ-900) certification, enhancing my ability as a MERN stack developer to design and deploy scalable, cloud-integrated applications using Azure services.",
    link: "https://learn.microsoft.com/en-us/users/bbalajis/credentials/1e554dfc1f04a568",
    date: "2025-01-22",
  },
  {
    image: HackerRank,
    title: "Certified Frontend Developer – React",
    description:
      "Successfully earned a Frontend Developer certification specializing in React, validating my skills in building responsive, interactive, and modern web applications using React, JavaScript, and component-based architecture.",
    link: "https://www.hackerrank.com/certificates/6116fe4c346c",
    date: "2023-11-01",
  },
  {
    image: ReviddExperience,
    title: "Software Engineer Trainee – Inflolabs Pvt. Ltd.",
    description:
      "Completed one year internship as a Software Engineer Trainee at Inflolabs Pvt. Ltd., where I worked extensively on frontend technologies and contributed significantly to development efforts, earning recognition as a valuable asset to the team.",
    link: "https://www.linkedin.com/posts/b-balajis_reactjs-tailwindcss-mui-activity-7065630132589232128-Lmb0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC8pG_EBArHdOMYJ8MpSnVXLzJVWfxNK6pE",
    date: "2023-05-20",
  },
  {
    image: CodevitaSeason10,
    title: "Top Global Rank – TCS CodeVita Season 10",
    description:
      "Secured Global Rank 3604 out of thousands of participants in TCS CodeVita Season 10, demonstrating strong coding and problem-solving abilities in a highly competitive global competition.",
    link: "https://www.linkedin.com/posts/b-balajis_tcs-tcscodevita-activity-6936024145121947648-VHU8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC8pG_EBArHdOMYJ8MpSnVXLzJVWfxNK6pE",
    date: "2022-05-09",
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
    <section id="achievements" className="px-4 text-white py-10 scroll-mt-8">
      <div className="max-w-6xl mx-auto text-center font-serif">
        <h2 className="text-5xl font-bold mb-4">Achievements</h2>
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full z-10"
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto px-8 scroll-smooth scrollbar-hide"
          >
            {achievements.map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] my-5 bg-gray-800 rounded-2xl p-4 shadow-lg hover:scale-105 hover:bg-gray-700 transition-transform duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover rounded-xl mb-4 cursor-pointer"
                  onClick={() => openModal(item.image)}
                />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-2 text-left">
                  {item.description}
                </p>
                <p className="text-gray-500 text-xs mb-4">
                  {format(new Date(item.date), "MMMM dd, yyyy")}
                </p>
                {item.link && (
                  <div className="flex items-center justify-center mt-4 gap-1">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 text-sm underline"
                    >
                      View
                    </a>
                    <img
                      src={Launch}
                      alt="Launch"
                      width={20}
                      style={{
                        color: "#fff",
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full z-10"
          >
            <ArrowForwardIosIcon fontSize="small" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative">
            <CloseIcon
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 cursor-pointer"
            />
            <img
              src={selectedImage}
              alt="Popup"
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}

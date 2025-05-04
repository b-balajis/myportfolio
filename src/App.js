import { CssBaseline, GlobalStyles } from "@mui/material";
import * as React from "react";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PortfolioLoader from "./components/PortfolioLoader";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SpaceBackground from "./components/SpaceBackground";

function App() {
  const [loadingDone, setLoadingDone] = React.useState(false);
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "*::-webkit-scrollbar": {
            width: "8px",
          },
          "*::-webkit-scrollbar-track": {
            backgroundColor: "#121212", // Dark background instead of white
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#2563eb", // Blue thumb
            borderRadius: "8px",
            border: "2px solid transparent",
            backgroundClip: "padding-box",
          },
          "*": {
            scrollbarWidth: "thin", // Firefox
            scrollbarColor: "#2563eb #121212", // thumb color + track color
          },
        }}
      />
      {/* The rest of your app goes here */}
      <div className="relative min-h-screen flex items-center justify-center text-white">
        <SpaceBackground />
        {!loadingDone && (
          <PortfolioLoader onComplete={() => setLoadingDone(true)} />
        )}
        {loadingDone && (
          <main>
            <div className="z-10">
              <Navbar />
              <Home />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Achievements />
              <Contact />
              <Footer />
            </div>
          </main>
        )}
      </div>
    </>
  );
}

export default App;

import "./style.css";
import { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CvBuilder from "./pages/Resume builder/CvBuilder";
import CV from "./pages/CV";
import Header from "./components/Header";
import Skills from "./pages/Skills";
import Audio from "./components/Audio";
import Projects from "./pages/Projects";
import Jobs from "./pages/Jobs";
import DarkMode from "./components/DarkMode";

export default function App() {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode((prev) => !prev);
  };

  const playerRef = useRef(null);

  const handleSound = () => {
    if (playerRef.current) {
      isSoundOn ? playerRef.current.pause() : playerRef.current.play();
    } else {
      console.log("Audio player not loaded yet, trying again in 1 second.");
    }
    setIsSoundOn((prev) => !prev);
  };

  return (
    <div
      className={`w-full min-h-screen ${
        isDarkMode ? "bg-black" : "bg-background"
      }`}
    >
      <Header isDarkMode={isDarkMode} />
      <Audio
        playerRef={playerRef}
        isDarkMode={isDarkMode}
        isSoundOn={isSoundOn}
        handleSound={handleSound}
      />
      <DarkMode handleClick={handleClick} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/cvbuilder" element={<CvBuilder />} />
      </Routes>
      <Skills isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Jobs isDarkMode={isDarkMode} />
    </div>
  );
}

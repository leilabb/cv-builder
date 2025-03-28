import "./style.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CvBuilder from "./pages/Resume builder/CvBuilder";
import CV from "./pages/CV";
import Header from "./components/Header";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`w-full min-h-screen ${
        isDarkMode ? "bg-black" : "bg-background"
      }`}
    >
      <Header isDarkMode={isDarkMode} />
      {!isDarkMode && (
        <button onClick={handleClick}>
          <MoonIcon className="z-10 w-7 h-7 absolute cursor-pointer text-black right-8 mt-4" />
        </button>
      )}
      {isDarkMode && (
        <button onClick={() => setIsDarkMode((prevMode) => !prevMode)}>
          <SunIcon className=" z-10 w-7 h-7 absolute cursor-pointer  text-yellow-400 right-8 mt-4" />
        </button>
      )}
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/cvbuilder" element={<CvBuilder />} />
      </Routes>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

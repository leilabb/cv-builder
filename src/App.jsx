import "./style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CvBuilder from "./pages/Resume builder/CvBuilder";
import CV from "./pages/CV";

import Header from "./components/Header";

import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-background">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/cvbuilder" element={<CvBuilder />} />
      </Routes>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

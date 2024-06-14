import "./style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CvBuilder from "./pages/CvBuilder";
import CV from "./pages/CV";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<CV />} />
      <Route path="/cvbuilder" element={<CvBuilder />} />
    </Routes>
  );
}

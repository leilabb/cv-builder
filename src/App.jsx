import "./style.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CvBuilder from "./pages/CvBuilder";
import CV from "./pages/CV";

export default function App() {
  return (
    <>
      <div className="flex">
        <NavLink
          className={({ isActive }) => (isActive ? "bg-red-300" : "")}
          to="/"
        >
          <button className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Home{" "}
          </button>
        </NavLink>
        <NavLink to="/cv">
          <button className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ">
            CV{" "}
          </button>
        </NavLink>
        <NavLink to="/cvBuilder">
          <button className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ">
            CV Builder{" "}
          </button>
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/cvbuilder" element={<CvBuilder />} />
      </Routes>
    </>
  );
}

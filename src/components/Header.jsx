import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <div className="sticky top-0 z-10 ">
      <div
        className={`w-full h-32 text-xl p-1.5 flex items-center justify-center flex-wrap gap-8 
  ${isScrolled ? "bg-header duration-200" : ""}`}
      >
        <p className="font-[Carlito]">
          <a href="/">Home</a>
        </p>
        <p className="font-[Carlito]">
          <a href="#about-me">Skills</a>
        </p>
        <p className="font-[Carlito]">
          {" "}
          <a href="#projects">Projects</a>
        </p>
        <p className="font-[Carlito]">
          {" "}
          <a href="#contact">Contact</a>
        </p>
      </div>
    </div>
  );
}

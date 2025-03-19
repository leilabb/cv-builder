import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      //varje gång man scrollar
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <div className="sticky top-0 bg-transparent">
      <div
        className={`w-full h-32 text-xl p-1.5 flex items-center justify-center flex-wrap gap-8 
  ${isScrolled ? "bg-header duration-200" : ""}`}
      >
        <p className="font-[Carlito]">Home</p>
        <p className="font-[Carlito]">Skills</p>
        <p className="font-[Carlito]">Projects</p>
        <p className="font-[Carlito]">Contact</p>
      </div>
    </div>
  );
}

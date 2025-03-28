import { useState, useEffect } from "react";

export default function Header({ isDarkMode }) {
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
    <div className="sticky top-0 z-20 ">
      <div
        className={`w-full h-32 text-xl p-1.5 flex items-center justify-center flex-wrap gap-8  ${
          isDarkMode ? "bg-gray-900" : ""
        }
    ${
      isScrolled
        ? isDarkMode
          ? "bg-gray-900"
          : "bg-olivegreen duration-200"
        : ""
    }

`}
      >
        <p className="font-[Carlito]">
          <a className={`${isDarkMode ? "text-white" : "text-black"}`} href="/">
            Home
          </a>
        </p>
        <p className="font-[Carlito]">
          <a
            className={`${isDarkMode ? "text-white" : "text-black"}`}
            href="#about-me"
          >
            Skills
          </a>
        </p>
        <p className="font-[Carlito]">
          {" "}
          <a
            className={`${isDarkMode ? "text-white" : "text-black"}`}
            href="#projects"
          >
            Projects
          </a>
        </p>
        <p className="font-[Carlito]">
          {" "}
          <a
            className={`${isDarkMode ? "text-white" : "text-black"}`}
            href="#contact"
          >
            Contact
          </a>
        </p>
      </div>
    </div>
  );
}

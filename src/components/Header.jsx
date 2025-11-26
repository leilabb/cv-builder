import { useState, useEffect } from "react";
import instagram from "./../assets/instagram.png";
import github from "./../assets/github.svg";
import linkedin from "./../assets/linkedin-icon.png";
import fullResume from "./../assets/fullresume.pdf";

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
    <div className="hidden md:block md:sticky md:top-0 md:z-20 ">
      <div
        className={` w-full h-32 text-xl px-12 md:flex items-center justify-between flex-wrap gap-8  ${
          isDarkMode ? "bg-black" : "bg-background"
        }
    ${isScrolled ? (isDarkMode ? "bg-text" : "bg-stone duration-200") : ""}

`}
      >
        <div className="flex gap-x-4">
          <p>
            {" "}
            <a
              className={`font-[UbuntuMono] relative after:block after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              href={fullResume}
              target="_blank"
            >
              Full Resume
            </a>
          </p>
          <p className={`${isDarkMode ? "text-white" : ""}`}>|</p>
          <p>
            <a
              className={`font-[UbuntuMono] relative after:block after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              href="#contact"
            >
              Contact me
            </a>
          </p>
        </div>
        <div className="flex gap-x-4">
          <a
            href="https://www.linkedin.com/in/leila-ben-halima/"
            target="_blank"
          >
            <img
              className={`h-8 w-8 ${
                isDarkMode ? "bg-white border p-0.5 rounded-full" : ""
              }`}
              src={linkedin}
            />
          </a>
          <a href="https://github.com/leilabb" target="_blank">
            <img
              className={`h-8 w-8 ${
                isDarkMode ? "bg-white border p-0.5 rounded-full" : ""
              }`}
              src={github}
            />
          </a>
          <a href="https://www.instagram.com/art_and_such__/" target="_blank">
            {" "}
            <img
              className={`h-8 w-8 ${
                isDarkMode ? "bg-white border p-0.5 rounded-full" : ""
              }`}
              src={instagram}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

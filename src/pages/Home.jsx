import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";
import Button from "../components/Button";
import me from "../assets/me-and-my-cat.jpg";

export default function Home({ isDarkMode }) {
  return (
    <div
      className={`${
        isDarkMode ? "text-white" : "text-text"
      } h-full mt-[200px] md:mt-0 w-full flex md:p-0 px-8 flex-col items-center justify-center`}
    >
      <div className="flex justify-start md:items-center md:justify-center">
        <img
          className="w-28 h-28 z-10 border-softTeal border-2 rounded-full"
          src={me}
        />
      </div>
      <div className="relative">
        <div className="md:flex inline ">
          <h1
            className="font-[Radley] md:inline block font-thin md:text-[clamp(6rem,3vw+1rem,4rem)] 
            text-[clamp(5rem,12vw+0.5rem,7rem)]
              "
          >
            Hey,&nbsp;
          </h1>
          <h1
            className={`md:flex inline relative font-thin md:text-[clamp(6rem,3vw+1rem,4rem)] 
            text-[clamp(4rem, 6vw + 1rem, 6rem))] font-[UbuntuMono]
            ${
              isDarkMode
                ? "text-white      before:bg-black"
                : "text-text before:bg-background"
            }
    before:content-[' ']
        before:absolute
        before:top-0
        before:right-0
        before:left-0
        before:bottom-0
   
  
        before:animate-typewriter
   after:content-['']
        after:absolute
        after:top-0
        after:right-0
        after:left-0
        after:bottom-0`}
          >
            I'm Leila.
          </h1>
        </div>
      </div>
      <p className={`font-[UbuntuMono] text-3xl md:text-4xl`}>
        A software developer.
      </p>

      <Button
        link="#contact-me"
        buttonText="<Contact me />"
        className="mt-8 md:text-lg text-4xl"
        target="_self"
      />

      <p
        className={`${
          isDarkMode ? "text-white" : "text-text"
        } font-[Radley] justify-center items-center flex flex-row md:flex mt-10 text-2xl md:text-xl animate-pulse `}
      >
        Scroll
        <ChevronDoubleDownIcon className="w-4 h-4 mt-2 " />
      </p>
    </div>
  );
}

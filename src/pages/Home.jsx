import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";

export default function Home({ isDarkMode }) {
  return (
    <div
      className={`${
        isDarkMode ? "text-white" : "text-olivegreen"
      } h-screen w-full flex flex-col items-center justify-center`}
    >
      <div className="relative">
        <div className="md:flex-row flex flex-col ">
          <h1
            className="font-[Radley] -mt-36 md:mt-[-100px] font-thin md:text-[clamp(6rem,3vw+1rem,4rem)] text-[clamp(2rem, 6vw + 1rem, 6rem)]
            "
          >
            Hey,&nbsp;
          </h1>
          <h1
            className={`relative md:mt-[-100px] font-thin md:text-[clamp(6rem,3vw+1rem,4rem)] text-[clamp(2rem, 6vw + 1rem, 6rem))] font-[UbuntuMono]
            ${
              isDarkMode
                ? "text-white      before:bg-black"
                : "text-olivegreen before:bg-background"
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
      <p className={`font-[Ubuntu] text-4xl`}>A web developer.</p>
      <p className=" font-[Radley] flex-row md:flex mt-28 text-xl animate-pulse ">
        Scroll
        <ChevronDoubleDownIcon className="w-4 h-4 mt-2 " />
      </p>
    </div>
  );
}

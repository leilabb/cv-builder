export default function Home({ isDarkMode }) {
  return (
    <div className="relative h-screen flex items-center justify-center ">
      <div className="md:flex-row flex flex-col ">
        <h1
          className={`font-[Radley] -mt-36 md:mt-[-100px] font-thin md:text-[clamp(6rem,3vw+1rem,4rem)] text-[clamp(2rem, 6vw + 1rem, 6rem)]
           ${isDarkMode ? "text-white" : "text-olivegreen"} `}
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
  );
}

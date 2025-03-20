import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center ">
      {/* <MoonIcon className="w-7 h-7 absolute cursor-pointer text-olivegreen right-8 mt-32" /> */}
      {/* <SunIcon className="w-7 h-7 absolute cursor-pointer  text-olivegreen right-8 mt-32" /> */}
      <div className="md:flex-row flex flex-col ">
        <h1
          className=" order-1 font-[Radley] -mt-36 md:mt-[-100px] font-thin md:text-[clamp(6rem,3vw+1rem,4rem)] text-[clamp(2rem, 6vw + 1rem, 6rem))]
  text-olivegreen"
        >
          Hey,&nbsp;
        </h1>
        <h1
          className="order-2 relative md:mt-[-100px] font-thin md:text-[clamp(6rem,3vw+1rem,4rem)] text-[clamp(2rem, 6vw + 1rem, 6rem))] font-[UbuntuMono] text-olivegreen
    before:content-[' ']
        before:absolute
        before:top-0
        before:right-0
        before:left-0
        before:bottom-0
        before:bg-background
  
        before:animate-typewriter
   after:content-['']
        after:absolute
        after:top-0
        after:right-0
        after:left-0
        after:bottom-0

        "
        >
          I'm Leila.
        </h1>
      </div>
    </div>
  );
}

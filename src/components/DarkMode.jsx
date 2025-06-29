import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function DarkMode({ isDarkMode, handleClick }) {
  return (
    <>
      {!isDarkMode ? (
        <button onClick={handleClick}>
          <MoonIcon
            className="z-20 fixed md:w-7 md:h-7 w-12 h-12 cursor-pointer text-black 
               md:right-[3rem] mt-12 md:mt-8"
          />
        </button>
      ) : (
        <button onClick={handleClick}>
          <SunIcon
            className=" z-20 fixed md:w-7 md:h-7 w-12 h-12 cursor-pointer
               md:right-[3rem] mt-12 md:mt-8 text-yellow-400"
          />
        </button>
      )}
    </>
  );
}

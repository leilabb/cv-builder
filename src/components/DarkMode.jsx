import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function DarkMode({ isDarkMode, handleClick }) {
  return (
    <>
      {!isDarkMode ? (
        <button onClick={handleClick}>
          <MoonIcon className="z-20 fixed w-7 h-7 cursor-pointer text-black right-8 mt-4" />
        </button>
      ) : (
        <button onClick={handleClick}>
          <SunIcon className=" z-10 fixed w-7 h-7 cursor-pointer  text-yellow-400 right-8 mt-4" />
        </button>
      )}
    </>
  );
}

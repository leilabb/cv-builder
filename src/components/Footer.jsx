import React from "react";

export default function Footer({ isDarkMode }) {
  return (
    <div className="bg-stone text-text text-center h-32 flex p-1.5 md:px-24 w-full md:flex-row flex-col justify-center items-center md:justify-between">
      <div className="font-[UbuntuMono]">
        Music from{" "}
        <a
          className="font-[UbuntuMono] text-accent underline"
          href="https://uppbeat.io/t/bosnow/afterglow"
          target="_blank"
        >
          Uppbeat
        </a>
      </div>
      <div className="font-[UbuntuMono]">
        © This site is made in React by Leila
      </div>
    </div>
  );
}

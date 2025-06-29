import React from "react";
import digitalIsland from "./../assets/diLogo.svg";
import prototyp from "./../assets/prototypLogo.jpg";
import sas from "./../assets/sas.png";
import schibsted from "./../assets/schibsted.png";

export default function Jobs({ isDarkMode }) {
  return (
    <div
      className={` flex items-center justify-center md:px-48  ${
        isDarkMode ? "bg-black" : "bg-background"
      }`}
    >
      <div>
        <div
          className={`text-4xl text-text font-[UbuntuMono] mt-32 flex justify-center items-center ${
            isDarkMode ? "text-white" : ""
          } `}
        >
          And jobs at
        </div>
        <div className="flex mt-20 justify-center items-center md:gap-40">
          <a href="https://digitalisland.se/" target="_blank">
            <img
              className="md:w-24 w-44 h-full flex bg-white px-12 md:p-2 border rounded-full"
              src={digitalIsland}
              title="Digital Island"
            />
          </a>
          <a href="https://www.prototyp.se/" target="_blank">
            <img
              className=" w-44 h-full md:w-24 flex bg-white p-2 border rounded-full"
              src={prototyp}
              title="Prototyp"
            />
          </a>
        </div>
        <div
          className={`flex justify-center items-center text-4xl mb-8 mt-32 text-text ${
            isDarkMode ? "text-white" : ""
          }`}
        >
          <p className="text-center font-[UbuntuMono]">
            The business perspective of digital products <br /> I have from my
            work <br />
            at these Scandinavian giants:
          </p>
        </div>
        <div className="flex mt-20 justify-center items-center md:gap-40">
          <a href="https://www.sas.se" target="_blank">
            <img
              className=" w-44 h-full flex md:w-32 rounded-full border"
              src={sas}
            />
          </a>
          <a href="https://schibstedmedia.com/our-brands/" target="_blank">
            <img
              className=" w-44 h-full flex md:w-44 bg-white border rounded-full"
              src={schibsted}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

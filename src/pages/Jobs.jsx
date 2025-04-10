import React from "react";
import digitalIsland from "./../assets/diLogo.svg";
import prototyp from "./../assets/prototypLogo.jpg";
import sas from "./../assets/sas.png";
import aftonbladet from "./../assets/aftonbladet.png";

export default function Jobs({ isDarkMode }) {
  return (
    <div
      className={` flex items-center justify-center md:px-48 md:py-10 ${
        isDarkMode ? "bg-black" : "bg-background"
      }`}
    >
      <div>
        <div className="text-4xl mb-8 font-[Radley] mt-20 flex justify-center items-center ">
          And jobs at
        </div>
        <div className="flex justify-center items-center gap-40">
          <a href="https://digitalisland.se/" target="_blank">
            <img className="w-24 flex" src={digitalIsland} />
          </a>
          <a href="https://www.prototyp.se/" target="_blank">
            <img className="w-24 flex" src={prototyp} />
          </a>
        </div>
        <div className="text-4xl mb-8 font-[Radley] mt-20 flex justify-center items-center ">
          The business perspective of digital products I have from my work at
          these Scandinavian giants:
        </div>
        <div className="flex justify-center items-center gap-40">
          <a href="https://www.sas.se" target="_blank">
            <img className="flex w-32" src={sas} />
          </a>
          <a href="https://www.aftonbladet.se/" target="_blank">
            <img className="flex w-44" src={aftonbladet} />
          </a>
        </div>
      </div>
    </div>
  );
}

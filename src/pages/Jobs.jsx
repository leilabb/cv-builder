import React from "react";
import digitalIsland from "./../assets/diLogo.svg";
import prototyp from "./../assets/prototypLogo.jpg";
import sas from "./../assets/sas.png";
import schibsted from "./../assets/schibsted.png";

export default function Jobs({ isDarkMode }) {
  return (
    <div
      className={` flex items-center justify-center md:px-48 md:py-10 ${
        isDarkMode ? "bg-black" : "bg-background"
      }`}
    >
      <div>
        <div className="text-4xl mb-8 font-[UbuntuMono] mt-20 flex justify-center items-center ">
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
        <div className="flex justify-center items-center text-4xl mb-8 font-[UbuntuMono] mt-20 ">
          The business perspective of digital
          <br />
          products I have from my work at these Scandinavian giants:
        </div>
        <div className="flex justify-center items-center gap-40">
          <a href="https://www.sas.se" target="_blank">
            <img className="flex w-32" src={sas} />
          </a>
          <a href="https://schibstedmedia.com/our-brands/" target="_blank">
            <img className="flex w-44" src={schibsted} />
          </a>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import wp from "./../assets/devtools/wp.png";
import github from "./../assets/devtools/github.png";
import js from "./../assets/devtools/js.png";
import mongo from "./../assets/devtools/mongodb.png";
import react from "./../assets/devtools/react.png";
import svelte from "./../assets/devtools/svelte.png";
import tailwind from "./../assets/devtools/tailwind.png";
import typescript from "./../assets/devtools/typescript.png";
import node from "./../assets/devtools/node.png";
import ProjectCard from "../components/ProjectCard";

export default function Skills({ isDarkMode }) {
  let skills = [
    { title: "Wordpress", source: wp },
    { title: "Github", source: github },
    { title: "JavaScript", source: js },
    { title: "Mongo", source: mongo },
    { title: "React", source: react },
    { title: "SvelteKit", source: svelte },
    { title: "Tailwind", source: tailwind },
    { title: "Typescript", source: typescript },
    { title: "Node", source: node },
  ];
  return (
    <div
      className={` flex items-center justify-center md:px-48 ${
        isDarkMode ? "bg-black" : "bg-background"
      }`}
    >
      <div>
        <div className="text-4xl font-[Radley] flex items-center justify-center ">
          These are my skills
        </div>

        <div className="max-w-lg mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 mt-20">
          {skills.map((skill, i) => {
            return (
              <div key={i} className="flex justify-center">
                <img
                  className="w-12 h-12 p-1 hover:animate-bounce"
                  title={skill.title}
                  src={skill.source}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

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
import resumeBuilder from "./../assets/resumeBuilder.png";

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
      className={`flex items-center justify-center md:px-48 md:py-10 ${
        isDarkMode ? "bg-black" : "bg-background"
      }`}
    >
      <div>
        <div className="text-4xl font-[Radley] mt-10 flex items-center justify-center ">
          These are my skills
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 mt-20">
          {skills.map((skill) => {
            return (
              <div className=" flex justify-center md:gap-x-1">
                <img
                  className="w-12 h-12 p-1 hover:animate-bounce"
                  title={skill.title}
                  src={skill.source}
                />
              </div>
            );
          })}
        </div>
        <div className="text-4xl font-[Radley] mt-20 ">
          That i learnt from these projects
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <ProjectCard
            title="Resume Builder"
            image={resumeBuilder}
            link="https://cv-app-9f8d7.web.app/cvBuilder"
            description="A tool for building a resume."
          />
          <ProjectCard />
          {/* <ProjectCard /> */}
        </div>
      </div>
    </div>
  );
}

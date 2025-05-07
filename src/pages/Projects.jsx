import React from "react";
import ProjectCard from "../components/ProjectCard";
import resumeBuilder from "./../assets/resumeBuilder.png";
import signup from "./../assets/signup.png";

export default function Projects({ isDarkMode }) {
  return (
    <div
      className={` flex items-center justify-center md:px-48 md:py-10 ${
        isDarkMode ? "bg-black" : "bg-background"
      }`}
    >
      <div>
        <div className="text-4xl font-[UbuntuMono] mt-20 flex justify-center items-center ">
          That i learnt from these projects
        </div>
        <div className="max-w-xl  flex flex-col md:flex-row gap-2 ">
          <ProjectCard
            className=""
            title="Resume Builder"
            image={resumeBuilder}
            link="https://cv-app-9f8d7.web.app/cvBuilder"
            description="A tool I made for building my own resume.
            React, Tailwind, deployed with Firebase."
            githubLink="https://github.com/leilabb/cv-builder"
          />
          <ProjectCard
            className=""
            title="Sign Up Page"
            image={signup}
            link="https://signup-hmtk.onrender.com/login"
            description="A simple sign up page where you can create username and password, log in, log out and delete your user. Node.js and MongoDb. Deployed using Render."
            githubLink="https://github.com/leilabb/signup"
          />
        </div>
      </div>
    </div>
  );
}

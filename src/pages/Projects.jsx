import ProjectCard from "../components/ProjectCard";
import resumeBuilder from "./../assets/resumeBuilder.png";
import signup from "./../assets/signup.png";
import wp from "./../assets/devtools/wp.png";
import git from "./../assets/devtools/git.svg";
import js from "./../assets/devtools/js.png";
import mongo from "./../assets/devtools/mongodb.png";
import react from "./../assets/devtools/react.png";
import svelte from "./../assets/devtools/svelte.png";
import tailwind from "./../assets/devtools/tailwind.png";
import typescript from "./../assets/devtools/typescript.png";
import node from "./../assets/devtools/node.png";
import swift from "./../assets/devtools/swift.png";
import angular from "./../assets/devtools/angular.png";

export default function Projects({ isDarkMode }) {
  const Tech = {
    GIT: git,
    JS: js,
    MONGO: mongo,
    REACT: react,
    SVELTE: svelte,
    TAILWIND: tailwind,
    TYPESCRIPT: typescript,
    NODE: node,
    SWIFT: swift,
    ANGULAR: angular,
  };

  const projects = [
    {
      title: "Resume Builder",
      image: resumeBuilder,
      tech: [Tech.TAILWIND, Tech.REACT],
      link: "https://cv-app-9f8d7.web.app/cvBuilder",
      description:
        "A tool I made for building my own resume. Deployed with Firebase.",
      githubLink: "https://github.com/leilabb/cv-builder",
    },
    {
      title: "Sign Up Page",
      image: signup,
      tech: [Tech.NODE, Tech.MONGO],
      link: "https://signup-hmtk.onrender.com/login",
      description:
        "A simple sign up page where you can create username and password, log in, log out and delete your user. Deployed using Render.",
      githubLink: "https://github.com/leilabb/signup",
    },
  ];
  return (
    <div
      className={` flex items-center justify-center px-8  ${
        isDarkMode ? "bg-black" : "bg-background"
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        <div
          className={`text-4xl font-[UbuntuMono] mt-32 flex text-text justify-center items-center ${
            isDarkMode ? "text-white" : ""
          } `}
        >
          That i learnt from these projects
        </div>
        {projects != null && (
          <div className="max-w-xl items-center md:items-stretch justify-center md:gap-x-6 flex md:flex-row flex-col mt-20 ">
            {projects.map((project) => {
              return <ProjectCard project={project} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

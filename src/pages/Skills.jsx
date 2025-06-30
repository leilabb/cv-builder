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

export default function Skills({ isDarkMode }) {
  let skills = [
    { title: "Wordpress", source: wp, name: "Wordpress" },
    { title: "Git", source: git, name: "Git" },
    { title: "JavaScript", source: js, name: "JavaScript" },
    { title: "Mongo", source: mongo, name: "MongoDb" },
    { title: "React", source: react, name: "React" },
    { title: "SvelteKit", source: svelte, name: "SvelteKit" },
    { title: "Tailwind", source: tailwind, name: "Tailwind" },
    { title: "Typescript", source: typescript, name: "Typescript" },
    { title: "Node", source: node, name: "Node.js" },
    { title: "Swift", source: swift, name: "Swift" },
    { title: "Angular", source: angular, name: "Angular" },
  ];
  return (
    <div
      className={` flex mt-32 items-center justify-center md:px-48 ${
        isDarkMode ? "bg-black" : "bg-background"
      }`}
    >
      <div>
        <div
          className={`text-4xl text-text font-[UbuntuMono] flex items-center justify-center ${
            isDarkMode ? "text-white" : ""
          } `}
        >
          These are my skills
        </div>

        <div className="max-w-lg mx-auto justify-items-center gap-y-2 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 mt-20">
          {skills.map((skill, i) => {
            return (
              <div
                key={i}
                className="flex flex-col justify-center items-center"
              >
                <img
                  className={`w-12 h-12 p-1 hover:animate-bounce border rounded-full 
                    ${isDarkMode ? "bg-white" : "bg-softTeal"}`}
                  title={skill.title}
                  src={skill.source}
                />
                <p className="text-center mt-1 text-xs font-[UbuntuMono]">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

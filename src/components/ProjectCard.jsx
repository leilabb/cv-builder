import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Button from "./Button.jsx";

export default function ProjectCard({ projects }) {
  if (!projects) return null;
  return (
    <div>
      {projects.map((project, index) => (
        <div
          key={index}
          className="w-full min-h-[250px] mb-4 md:w-[500px] gap-x-4 p-4 bg-text flex border rounded-xl"
        >
          {(index % 2 == 0 || index == 0) && (
            <div className="h-full w-[215px]">
              <img
                className="h-full object-fill w-full border rounded-xl"
                src={project.image}
              />
            </div>
          )}
          <div className="h-full flex flex-col">
            <div className="flex font-bold font-[UbuntuMono] text-lg text-white">
              {project.title}
            </div>
            <div className="font-thin max-w-[235px] font-[UbuntuMono] text-sm text-white">
              {project.description}
              <Button
                buttonText="Go to Project"
                className="block w-fit hover:bg-stone bg-softTeal"
                link={project.link}
              />
              <span className="block underline mt-2">
                <a
                  className="font-[UbuntuMono] text-sm text-accent "
                  href={project.githubLink}
                >
                  <ArrowRightIcon className="inline w-4 h-4" />
                  See project on Github
                </a>
              </span>
            </div>
            <div className="flex justify-left gap-x-2 mt-4 ">
              {project.tech.map((techItem) => {
                return (
                  <img
                    key={techItem}
                    className="h-8 w-8 inline bg-accent border rounded-full p-1"
                    src={techItem}
                  />
                );
              })}
            </div>
          </div>
          {index % 2 != 0 && (
            <div className="h-full w-[215px]">
              <img
                className="h-full object-fill w-full border rounded-xl"
                src={project.image}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

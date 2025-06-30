import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Button from "./Button.jsx";

export default function ProjectCard({ project }) {
  return (
    <div>
      <div className="w-full h-full mb-4 md:w-[500px] p-4 bg-text flex flex-col md:flex-row items-center md:items-start gap-y-4 md:gap-x-4 border rounded-xl">
        <div className="w-full md:w-[215px]">
          <img
            className="w-full h-auto object-fill border rounded-xl"
            src={project.image}
          />
        </div>

        <div className="h-full flex flex-col">
          <div className="flex font-bold font-[UbuntuMono] text-xl text-white">
            {project.title}
          </div>
          <div className="font-thin md:max-w-[235px] font-[UbuntuMono] text-xl md:text-sm text-white">
            {project.description}
            <Button
              buttonText="Go to Project"
              className="block w-fit hover:bg-stone bg-softTeal"
              link={project.link}
            />
            <span className="block underline mt-2">
              <a
                className="font-[UbuntuMono] md:text-sm text-accent "
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
      </div>
    </div>
  );
}

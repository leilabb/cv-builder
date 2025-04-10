import React from "react";

export default function ProjectCard({
  title,
  link,
  image,
  description,
  githubLink,
}) {
  return (
    <div>
      <div className="mt-10 relative flex h-[500px] w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img className="w-full h-full" src={image} alt="ui/ux review check" />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-3 flex items-center justify-between">
            <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
              {title}
            </h5>
          </div>
          <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
            {description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-6 pt-3">
          <a href={link} target="_blank">
            <button
              className="block w-full select-none rounded-lg bg-yellow-600 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              //data-ripple-light="true"
            >
              Go to project
            </button>
          </a>
          <a href={githubLink} target="_blank">
            <p className="flex justify-center items-center mt-2 underline">
              {" "}
              Or check it out on Github
            </p>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
